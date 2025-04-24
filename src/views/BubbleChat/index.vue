<template>
  <div class="vippromax-chat-container">
    <!-- Chat Icon Button -->
    <button
      v-if="!isChatOpen"
      @click="openChat"
      class="vippromax-popup-button"
      :style="{ backgroundColor: widgetSettings.themeColor || '#3b82f6' }">
      <img
        src="https://res.cloudinary.com/dx2o9ki2g/image/upload/v1743602309/d7sn8mtmxzgk2tpmoqnv.png"
        alt="LiveChat"
        class="vippromax-chat-icon" />

      <!-- Notification badge -->
      <div v-if="unreadMessages > 0" class="vippromax-notification-badge">
        {{ unreadMessages > 9 ? '9+' : unreadMessages }}
      </div>

      <!-- Pulse effect -->
      <span v-if="hasNewMessages && !isChatOpen" class="vippromax-pulse-effect"></span>
    </button>

    <!-- Chat Popup with transition -->
    <Transition
      enter-active-class="vippromax-transition-enter"
      enter-from-class="vippromax-transition-enter-from"
      enter-to-class="vippromax-transition-enter-to"
      leave-active-class="vippromax-transition-leave"
      leave-from-class="vippromax-transition-leave-from"
      leave-to-class="vippromax-transition-leave-to">
      <ChatPopup class="vippromax-chat-popup" v-if="isChatOpen" v-model="isChatOpen" />
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive, onBeforeUnmount, watch } from 'vue';
import ChatPopup from './ChatPopup.vue';
import { getWidgetSettings } from '@/helpers/widgetSettingsHelper';

const isChatOpen = ref(false);
const unreadMessages = ref(0);
const hasNewMessages = ref(false);
const widgetSettings = reactive(getWidgetSettings());

const chatId = ref(widgetSettings.chatId);

watch(chatId, (newVal) => {
  if (newVal) {
    localStorage.setItem('chat_id', newVal);
  } else {
    localStorage.removeItem('chat_id');
    console.log('Lỗi chatId');
    // Xóa tất cả giao diện
    document.body.querySelector('.vippromax-chat-container').remove();
  }
});

// Hàm xử lý mở chat
function openChat() {
  isChatOpen.value = true;
  unreadMessages.value = 0;
  hasNewMessages.value = false;
}

// Hàm xử lý đóng chat
function closeChat() {
  isChatOpen.value = false;
}

// Hàm xử lý cập nhật cấu hình
function handleConfigUpdate(event) {
  const newConfig = event.detail;
  if (newConfig) {
    Object.assign(widgetSettings, newConfig);
  }
}

onMounted(() => {
  // Lắng nghe sự kiện mở chat
  window.addEventListener('vippromax-livechat-open', openChat);

  // Lắng nghe sự kiện đóng chat
  window.addEventListener('vippromax-livechat-close', closeChat);

  // Lắng nghe sự kiện cập nhật cấu hình
  window.addEventListener('vippromax-livechat-config-update', handleConfigUpdate);

  // Mô phỏng tin nhắn mới sau 30 giây
  setTimeout(() => {
    if (!isChatOpen.value) {
      unreadMessages.value += 1;
      hasNewMessages.value = true;
    }
  }, 30000);
});

onBeforeUnmount(() => {
  // Xóa event listeners khi component bị hủy
  window.removeEventListener('vippromax-livechat-open', openChat);
  window.removeEventListener('vippromax-livechat-close', closeChat);
  window.removeEventListener('vippromax-livechat-config-update', handleConfigUpdate);
});
</script>

<style scoped>
.vippromax-popup-button {
  position: fixed;
  bottom: 1.5rem; /* bottom-6 */
  right: 1.5rem; /* right-6 */
  width: 3.5rem; /* w-14 */
  height: 3.5rem; /* h-14 */
  border-radius: 9999px; /* rounded-full */
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -4px rgba(0, 0, 0, 0.1); /* shadow-lg */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50; /* z-50 */
  transition: all 0.5s ease; /* transition-all duration-500 */
}

.vippromax-popup-button:hover {
  transform: scale(1.1); /* hover:scale-110 */
}

.vippromax-chat-icon {
  width: 2rem; /* w-8 */
  height: 2rem; /* h-8 */
  color: white; /* text-white */
}

.vippromax-notification-badge {
  position: absolute; /* absolute */
  top: -0.25rem; /* -top-1 */
  right: -0.25rem; /* -right-1 */
  background-color: #ef4444; /* bg-red-500 */
  color: white; /* text-white */
  font-size: 0.75rem; /* text-xs */
  font-weight: 700; /* font-bold */
  border-radius: 9999px; /* rounded-full */
  width: 1.25rem; /* w-5 */
  height: 1.25rem; /* h-5 */
  display: flex;
  align-items: center;
  justify-content: center;
}

.vippromax-pulse-effect {
  position: absolute; /* absolute */
  width: 100%; /* w-full */
  height: 100%; /* h-full */
  border-radius: 9999px; /* rounded-full */
  background-color: #60a5fa; /* bg-blue-400 */
  opacity: 0.75; /* opacity-75 */
  animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite; /* animate-ping */
}

.vippromax-chat-popup {
  z-index: 9999; /* z-[9999] */
}

/* Transition classes */
.vippromax-transition-enter {
  transition: all 0.1s ease-out; /* transition ease-out duration-100 */
}

.vippromax-transition-enter-from {
  opacity: 0; /* opacity-0 */
  transform: scale(0.95); /* scale-95 */
}

.vippromax-transition-enter-to {
  opacity: 1; /* opacity-100 */
  transform: scale(1); /* scale-100 */
}

.vippromax-transition-leave {
  transition: all 0.1s ease-in; /* transition ease-in duration-100 */
}

.vippromax-transition-leave-from {
  opacity: 1; /* opacity-100 */
  transform: scale(1); /* scale-100 */
}

.vippromax-transition-leave-to {
  opacity: 0; /* opacity-0 */
  transform: scale(0.95); /* scale-95 */
}

@keyframes ping {
  75%,
  100% {
    transform: scale(2);
    opacity: 0;
  }
}
</style>
