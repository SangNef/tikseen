import { ref, computed } from 'vue';
import { supabase } from '../helpers';

export default function useChat() {
  const conversations = ref([]);
  const currentConversation = ref(null);
  const messages = ref([]);
  const loading = ref(false);
  const error = ref(null);
  const subscription = ref(null);

  // Hàm lấy conversations theo tổ chức
  const getOrganizationConversations = async (organizationId) => {
    try {
      loading.value = true;
      error.value = null;

      const { data, error: fetchError } = await supabase
        .from('conversations')
        .select(
          `
          *,
          customer:customer_id(id, name, data),
          agent:agent_id(id, name, avatar_url)
        `
        )
        .eq('organization_id', organizationId)
        .order('created_at', { ascending: false });

      if (fetchError) throw fetchError;

      conversations.value = data || [];
      return { data };
    } catch (err) {
      error.value = err.message;
      return { error: err };
    } finally {
      loading.value = false;
    }
  };

  // Hàm lấy tin nhắn của một conversation
  const getConversationMessages = async (conversationId) => {
    try {
      loading.value = true;
      error.value = null;

      const { data, error: fetchError } = await supabase
        .from('messages')
        .select('*')
        .eq('conversation_id', conversationId)
        .order('created_at', { ascending: true });

      if (fetchError) throw fetchError;

      messages.value = data || [];
      return { data };
    } catch (err) {
      error.value = err.message;
      return { error: err };
    } finally {
      loading.value = false;
    }
  };

  // Hàm gửi tin nhắn mới
  const sendMessage = async (messageData) => {
    try {
      loading.value = true;
      error.value = null;

      const { data, error: sendError } = await supabase.from('messages').insert([messageData]).select().single();

      if (sendError) throw sendError;

      // Không cần thêm vào messages vì subscription sẽ tự cập nhật
      return { data };
    } catch (err) {
      error.value = err.message;
      return { error: err };
    } finally {
      loading.value = false;
    }
  };

  // Hàm đăng ký nhận tin nhắn realtime
  const subscribeToMessages = (conversationId) => {
    // Hủy subscription cũ nếu có
    if (subscription.value) {
      subscription.value.unsubscribe();
    }

    // Tạo subscription mới
    subscription.value = supabase
      .channel(`messages:${conversationId}`)
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'messages',
          filter: `conversation_id=eq.${conversationId}`,
        },
        (payload) => {
          // Thêm tin nhắn mới vào danh sách
          messages.value.push(payload.new);
        }
      )
      .subscribe();
  };

  // Hàm hủy đăng ký tin nhắn realtime
  const unsubscribeFromMessages = () => {
    if (subscription.value) {
      subscription.value.unsubscribe();
      subscription.value = null;
    }
  };

  // Hàm cập nhật trạng thái conversation
  const updateConversationStatus = async (conversationId, status) => {
    try {
      loading.value = true;
      error.value = null;

      const { data, error: updateError } = await supabase
        .from('conversations')
        .update({ status })
        .eq('id', conversationId)
        .select()
        .single();

      if (updateError) throw updateError;

      // Cập nhật trong danh sách local
      const index = conversations.value.findIndex((conv) => conv.id === conversationId);
      if (index !== -1) {
        conversations.value[index].status = status;
      }

      // Cập nhật currentConversation nếu đang được chọn
      if (currentConversation.value?.id === conversationId) {
        currentConversation.value.status = status;
      }

      return { data };
    } catch (err) {
      error.value = err.message;
      return { error: err };
    } finally {
      loading.value = false;
    }
  };

  // Hàm gán conversation cho agent
  const assignConversation = async (conversationId, agentId) => {
    try {
      loading.value = true;
      error.value = null;

      const { data, error: updateError } = await supabase
        .from('conversations')
        .update({ agent_id: agentId })
        .eq('id', conversationId)
        .select()
        .single();

      if (updateError) throw updateError;

      // Cập nhật trong danh sách local
      const index = conversations.value.findIndex((conv) => conv.id === conversationId);
      if (index !== -1) {
        conversations.value[index].agent_id = agentId;
      }

      // Cập nhật currentConversation nếu đang được chọn
      if (currentConversation.value?.id === conversationId) {
        currentConversation.value.agent_id = agentId;
      }

      return { data };
    } catch (err) {
      error.value = err.message;
      return { error: err };
    } finally {
      loading.value = false;
    }
  };

  // Hàm lấy thông tin conversation
  const getConversationById = async (conversationId) => {
    try {
      loading.value = true;
      error.value = null;

      const { data, error: fetchError } = await supabase
        .from('conversations')
        .select(
          `
          *,
          customer:customer_id(id, name, data),
          agent:agent_id(id, name, avatar_url)
        `
        )
        .eq('id', conversationId)
        .single();

      if (fetchError) throw fetchError;

      currentConversation.value = data;
      return { data };
    } catch (err) {
      error.value = err.message;
      return { error: err };
    } finally {
      loading.value = false;
    }
  };

  // Hàm thiết lập conversation hiện tại
  const setCurrentConversation = (conversation) => {
    currentConversation.value = conversation;
    // Reset tin nhắn khi thay đổi conversation
    messages.value = [];
  };

  // Computed để lọc conversations theo trạng thái
  const activeConversations = computed(() => {
    return conversations.value.filter((conv) => conv.status === 'active');
  });

  const pendingConversations = computed(() => {
    return conversations.value.filter((conv) => conv.status === 'pending');
  });

  const closedConversations = computed(() => {
    return conversations.value.filter((conv) => conv.status === 'closed');
  });

  return {
    conversations,
    currentConversation,
    messages,
    loading,
    error,
    activeConversations,
    pendingConversations,
    closedConversations,
    getOrganizationConversations,
    getConversationMessages,
    sendMessage,
    subscribeToMessages,
    unsubscribeFromMessages,
    updateConversationStatus,
    assignConversation,
    getConversationById,
    setCurrentConversation,
  };
}
