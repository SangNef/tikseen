<template>
  <div>
    <!-- Chat Icon Button -->
    <button
      v-if="!isChatOpen"
      @click="openChat"
      class="fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg flex items-center justify-center z-50 transition-all duration-300 hover:scale-110"
      :style="{ backgroundColor: widgetSettings.themeColor || '#3b82f6' }">
      <img
        src="https://res.cloudinary.com/dx2o9ki2g/image/upload/v1743602309/d7sn8mtmxzgk2tpmoqnv.png"
        alt="LiveChat"
        class="w-8 h-8 text-white" />

      <!-- Notification badge -->
      <div
        v-if="unreadMessages > 0"
        class="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
        {{ unreadMessages > 9 ? '9+' : unreadMessages }}
      </div>

      <!-- Pulse effect -->
      <span
        v-if="hasNewMessages && !isChatOpen"
        class="absolute w-full h-full rounded-full bg-blue-400 opacity-75 animate-ping"></span>
    </button>

    <!-- Chat Popup with transition -->
    <Transition
      enter-active-class="transition ease-out duration-300"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition ease-in duration-200"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95">
      <ChatPopup v-if="isChatOpen" v-model="isChatOpen" />
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive } from 'vue';
import ChatPopup from './ChatPopup.vue';
import { getWidgetSettings } from '@/helpers/widgetSettingsHelper';

const isChatOpen = ref(false);
const unreadMessages = ref(0);
const hasNewMessages = ref(false);
const widgetSettings = reactive(getWidgetSettings());

onMounted(() => {
  // Mô phỏng tin nhắn mới sau 30 giây
  setTimeout(() => {
    if (!isChatOpen.value) {
      unreadMessages.value += 1;
      hasNewMessages.value = true;
    }
  }, 30000);
});

function openChat() {
  isChatOpen.value = true;
  unreadMessages.value = 0;
  hasNewMessages.value = false;
}
</script>

<style scoped></style>
