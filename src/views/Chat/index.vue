<template>
  <div class="flex flex-nowrap">
    <List @selected="handleSelect" :selected="selectedChat" />
    <div v-if="selectedChat" class="flex-1 flex">
      <Message :chat="selectedChat" />
      <Info :chat="selectedChat" />
    </div>
    <div v-else class="flex-1 flex items-center justify-center">
      <span class="text-gray-400">Select a chat to start messaging</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import List from './List.vue';
import Message from './Message.vue';
import Info from './Info.vue';

const selectedChat = ref(null);

function handleSelect(chat) {
  selectedChat.value = chat;
  console.log('Selected Chat:', chat);
}
</script>

<style></style>
