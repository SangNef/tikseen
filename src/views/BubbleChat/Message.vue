<template>
  <div class="message_container">
    <div class="message_area">
      <div
        v-for="(item, index) in messages"
        :key="index"
        :class="['message', item.send_by === 'user' ? 'user_message' : 'agent_message']">
        <div :class="['message_text', item.send_by === 'user' ? 'user_message_text' : 'agent_message_text']">
          {{ item.msg }}
        </div>
      </div>
    </div>
    <InputMessage />
  </div>
</template>

<script setup>
import '@/styles/message.css';
import InputMessage from './InputMessage.vue';
const messages = [
  { send_by: 'cskh', msg: 'Xin chào, tôi có thể giúp gì cho bạn?' },
  { send_by: 'user', msg: 'Tôi cần hỗ trợ về dịch vụ' },
];
</script>

<style scoped></style>
