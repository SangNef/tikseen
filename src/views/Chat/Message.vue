<template>
  <div class="w-[calc(100vw-768px)] h-[calc(100vh-40px)] bg-white flex flex-col relative">
    <!-- Header -->
    <div class="border-b border-gray-300 p-3 flex justify-between items-center text-sm font-bold">
      <span v-if="chat">
        {{ chat.name }}
      </span>
    </div>

    <!-- Messages -->
    <div class="flex-1 overflow-y-auto p-2 space-y-3 mb-46">
      <div class="flex-1 overflow-y-auto p-4 space-y-3">
        <MessageItem v-for="(msg, index) in chat?.messages" :key="index" :message="msg" :chatName="chat.name" />
      </div>
    </div>

    <div class="absolute bottom-0 left-0 w-full">
      <InputMessage />
    </div>
  </div>
</template>

<script setup>
import MessageItem from './MessageItem.vue';
import InputMessage from './InputMessage.vue';

const props = defineProps({
  chat: {
    type: Object,
    default: null,
  },
});
</script>
