import { ref } from 'vue';
import { supabase } from '../helpers';

export default function useAgent() {
  const agents = ref([]);
  const currentAgent = ref(null);
  const loading = ref(false);
  const error = ref(null);

  // Lấy tất cả nhân viên của một tổ chức
  const getOrganizationAgents = async (organizationId) => {
    try {
      loading.value = true;
      error.value = null;

      // Sử dụng join để lấy thông tin nhân viên và người dùng
      const { data, error: fetchError } = await supabase
        .from('organization_agents')
        .select(
          `
          *,
          agent:agents(id, name, avatar_url, status, user_id, users:user_id(email, username, role))
        `
        )
        .eq('organization_id', organizationId);

      if (fetchError) throw fetchError;

      // Format lại dữ liệu
      const formattedAgents =
        data?.map((item) => ({
          id: item.agent.id,
          name: item.agent.name,
          avatar_url: item.agent.avatar_url,
          status: item.agent.status,
          user_id: item.agent.user_id,
          email: item.agent.users?.email,
          username: item.agent.users?.username,
          role: item.agent.users?.role,
          organization_agent_id: item.id,
        })) || [];

      agents.value = formattedAgents;
      return { data: formattedAgents };
    } catch (err) {
      error.value = err.message;
      return { error: err };
    } finally {
      loading.value = false;
    }
  };

  // Tạo nhân viên mới
  const createAgent = async (agentData, organizationId) => {
    try {
      loading.value = true;
      error.value = null;

      // Bắt đầu transaction để thêm nhân viên và liên kết với tổ chức
      // 1. Thêm bản ghi vào bảng agents
      const { data: agentRecord, error: agentError } = await supabase
        .from('agents')
        .insert([
          {
            user_id: agentData.user_id,
            name: agentData.name,
            avatar_url: agentData.avatar_url,
            status: agentData.status || 'active',
          },
        ])
        .select()
        .single();

      if (agentError) throw agentError;

      // 2. Thêm bản ghi vào bảng organization_agents
      const { data: linkRecord, error: linkError } = await supabase
        .from('organization_agents')
        .insert([
          {
            agent_id: agentRecord.id,
            organization_id: organizationId,
          },
        ])
        .select()
        .single();

      if (linkError) throw linkError;

      // Kết hợp dữ liệu để trả về
      const newAgent = {
        ...agentRecord,
        organization_agent_id: linkRecord.id,
      };

      agents.value.push(newAgent);
      return { data: newAgent };
    } catch (err) {
      error.value = err.message;
      return { error: err };
    } finally {
      loading.value = false;
    }
  };

  // Cập nhật thông tin nhân viên
  const updateAgent = async (id, updateData) => {
    try {
      loading.value = true;
      error.value = null;

      const { data, error: updateError } = await supabase
        .from('agents')
        .update(updateData)
        .eq('id', id)
        .select()
        .single();

      if (updateError) throw updateError;

      // Cập nhật agent trong danh sách local
      const index = agents.value.findIndex((agent) => agent.id === id);
      if (index !== -1) {
        agents.value[index] = { ...agents.value[index], ...data };
      }

      // Cập nhật currentAgent nếu đang được chọn
      if (currentAgent.value?.id === id) {
        currentAgent.value = { ...currentAgent.value, ...data };
      }

      return { data };
    } catch (err) {
      error.value = err.message;
      return { error: err };
    } finally {
      loading.value = false;
    }
  };

  // Xóa nhân viên khỏi tổ chức
  const removeAgentFromOrganization = async (organizationAgentId) => {
    try {
      loading.value = true;
      error.value = null;

      const { error: deleteError } = await supabase.from('organization_agents').delete().eq('id', organizationAgentId);

      if (deleteError) throw deleteError;

      // Xóa khỏi danh sách local
      agents.value = agents.value.filter((agent) => agent.organization_agent_id !== organizationAgentId);

      return { success: true };
    } catch (err) {
      error.value = err.message;
      return { error: err };
    } finally {
      loading.value = false;
    }
  };

  // Lấy thông tin của một nhân viên
  const getAgentById = async (id) => {
    try {
      loading.value = true;
      error.value = null;

      const { data, error: fetchError } = await supabase
        .from('agents')
        .select(
          `
          *,
          users:user_id(email, username, role)
        `
        )
        .eq('id', id)
        .single();

      if (fetchError) throw fetchError;

      const formattedAgent = {
        ...data,
        email: data.users?.email,
        username: data.users?.username,
        role: data.users?.role,
      };

      currentAgent.value = formattedAgent;
      return { data: formattedAgent };
    } catch (err) {
      error.value = err.message;
      return { error: err };
    } finally {
      loading.value = false;
    }
  };

  return {
    agents,
    currentAgent,
    loading,
    error,
    getOrganizationAgents,
    createAgent,
    updateAgent,
    removeAgentFromOrganization,
    getAgentById,
  };
}
