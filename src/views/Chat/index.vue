<template>
  <div class="flex flex-nowrap">
    <!-- List component - Hiển thị trên desktop và mobile khi view là chat-list -->
    <List
      v-if="!isMobile || (isMobile && mobileView === 'chat-list')"
      @selected="handleSelect"
      :selected="selectedChat" />

    <!-- Message component - Hiển thị trên desktop hoặc mobile khi view là chat-detail -->
    <div v-if="selectedChat && (!isMobile || (isMobile && mobileView === 'chat-detail'))" class="flex-1 flex">
      <Message :chat="selectedChat" />
    </div>

    <!-- Info component - Hiển thị trên desktop hoặc mobile khi view là chat-info -->
    <div v-if="selectedChat && (!isMobile || (isMobile && mobileView === 'chat-info'))" class="flex-1 flex">
      <Info :chat="selectedChat" />
    </div>

    <!-- Placeholder khi không có chat được chọn (chỉ hiển thị trên desktop) -->
    <div v-if="!selectedChat && !isMobile" class="flex-1 flex items-center justify-center">
      <span class="text-gray-400">Select a chat to start messaging</span>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, watchEffect, onMounted } from 'vue';
import useResponsive from '@/composables/useResponsive';
import List from './List.vue';
import Message from './Message.vue';
import Info from './Info.vue';

const { isMobile, mobileView, setMobileView } = useResponsive();
const selectedChat = ref(null);

function handleSelect(chat) {
  selectedChat.value = chat;
  console.log('Selected Chat:', chat);

  if (isMobile.value) {
    setMobileView('chat-detail');
  }
}
onMounted(() => {
  if (isMobile) {
    setMobileView('chat-list');
  }
});

// Theo dõi mobileView để hiểu trạng thái hiện tại
watchEffect(() => {
  console.log('Chế độ hiển thị hiện tại:', mobileView.value);
});

// Đảm bảo khi bấm nút quay lại, sẽ trở về danh sách chat
watch(mobileView, (newView) => {
  console.log('mobileView changed to:', newView);
  if (newView === 'chat-list') {
    // Có thể để lại selectedChat không null để giữ trạng thái
  }
});
</script>

<style scoped>
/* Custom styles if needed */
</style>
