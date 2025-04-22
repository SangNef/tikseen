<template>
  <div :class="message.sendBy === 'cskh' ? 'justify-end' : 'justify-start'" class="flex items-end gap-2">
    <div
      v-if="message.sendBy === 'user'"
      class="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm uppercase">
      {{ chatName.charAt(0) }}
    </div>

    <div class="flex flex-col max-w-[60%]">
      <div
        :class="message.sendBy === 'cskh' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-800'"
        class="px-4 py-2 rounded-custom shadow-custom">
        {{ message.text }}
      </div>

      <div class="flex items-center mt-1" :class="message.sendBy === 'cskh' ? 'justify-end' : 'justify-start'">
        <span class="text-xs text-gray-500 mr-1">{{ formatTime(message.timestamp || new Date()) }}</span>
        <div v-if="message.sendBy === 'cskh'" class="flex items-center">
          <svg
            v-if="message.status === 'seen'"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="text-blue-500 w-3 h-3">
            <path d="M18 6L7 17L2 12"></path>
            <path d="M22 10L13 19L11 17"></path>
          </svg>
          <svg
            v-else-if="message.status === 'sent'"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="text-gray-500 w-3 h-3">
            <path d="M20 6L9 17L4 12"></path>
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="text-gray-400 w-3 h-3">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
        </div>
      </div>
    </div>

    <img
      v-if="message.sendBy === 'cskh'"
      :src="avt"
      alt="CSKH Avatar"
      class="w-8 h-8 rounded-full object-cover shadow-sm" />
  </div>
</template>

<script setup>
import avt from '@/assets/images/ico/avt.webp';

const props = defineProps({
  message: {
    type: Object,
    required: true,
  },
  chatName: {
    type: String,
    required: true,
  },
});

// Hàm định dạng thời gian
const formatTime = (time) => {
  const date = new Date(time);
  return date.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });
};
</script>

<style scoped>
.rounded-custom {
  border-radius: 16px;
}

.shadow-custom {
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}
</style>
