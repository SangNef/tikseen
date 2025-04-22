<template>
  <div :class="message.sendBy === 'cskh' ? 'justify-end' : 'justify-start'" class="flex items-end gap-2">
    <div
      v-if="message.sendBy === 'user'"
      class="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm uppercase">
      {{ chatName.charAt(0) }}
    </div>

    <div
      :class="message.sendBy === 'cskh' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-800'"
      class="px-4 py-2 rounded-custom max-w-[60%] shadow-custom">
      {{ message.text }}
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
</script>
