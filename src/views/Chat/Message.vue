<template>
  <div
    class="w-[calc(100vw-768px)] h-[calc(100vh-var(--header-height))] bg-white flex flex-col relative"
    :class="{ 'w-full': isMobile }">
    <!-- Header -->
    <div class="border-b border-gray-300 p-3 flex justify-between items-center text-sm font-bold">
      <div class="flex items-center">
        <button v-if="isMobile" @click="handleBack" class="mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <span v-if="chat">
          {{ chat.name }}
        </span>
      </div>
      <div class="flex items-center space-x-2">
        <button v-if="isMobile" @click="showInfo" class="text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
          </svg>
        </button>
        <button class="text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Messages -->
    <div ref="messagesContainer" class="flex-1 overflow-y-auto p-2 space-y-3">
      <div class="flex-1 overflow-y-auto p-4 space-y-3">
        <MessageItem
          v-for="(msg, index) in chat?.messages"
          :key="index"
          :message="msg"
          :chatName="chat.name"
          class="message-item" />
      </div>
    </div>

    <div class="bottom-0 left-0 w-full">
      <InputMessage :chat="chat" @send-message="handleSendMessage" />
    </div>
  </div>
</template>

<script setup>
import MessageItem from './MessageItem.vue';
import InputMessage from './InputMessage.vue';
import useResponsive from '@/composables/useResponsive';
import { nextTick, ref, watch, onMounted } from 'vue';

const { isMobile, mobileView, setMobileView } = useResponsive();
const messagesContainer = ref(null);

const props = defineProps({
  chat: {
    type: Object,
    default: null,
  },
});

// Scroll xuống dưới cùng của danh sách tin nhắn
function scrollToBottom() {
  if (messagesContainer.value) {
    nextTick(() => {
      messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
    });
  }
}

// Theo dõi khi chat thay đổi để scroll xuống dưới
watch(
  () => props.chat,
  (newChat) => {
    if (newChat) {
      scrollToBottom();
    }
  },
  { immediate: true }
);

// Theo dõi khi có tin nhắn mới được thêm vào để scroll xuống dưới
watch(
  () => props.chat?.messages?.length,
  (newLength, oldLength) => {
    if (newLength > oldLength) {
      scrollToBottom();
    }
  }
);

// Khi component được mount, scroll xuống dưới
onMounted(() => {
  if (props.chat) {
    scrollToBottom();
  }
});

// Xử lý gửi tin nhắn mới
function handleSendMessage(message) {
  // Đây là hàm xử lý khi có tin nhắn mới từ InputMessage
  console.log('Tin nhắn mới từ InputMessage:', message);
  // Trong thực tế, bạn cần cập nhật message vào store hoặc gửi lên server
}

function handleBack() {
  setMobileView('chat-list');
  // Đảm bảo DOM đã cập nhật trước khi kiểm tra giá trị mới
  nextTick(() => {
    console.log('Sau khi chuyển về chat-list:', mobileView.value);
  });
}

function showInfo() {
  setMobileView('chat-info');
  // Đảm bảo DOM đã cập nhật trước khi kiểm tra giá trị mới
  nextTick(() => {
    console.log('Sau khi chuyển sang chat-info:', mobileView.value);
  });
}
</script>

<style scoped>
.message-item {
  animation: fade-slide-up 0.3s ease-out;
  transform-origin: bottom;
}

@keyframes fade-slide-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
