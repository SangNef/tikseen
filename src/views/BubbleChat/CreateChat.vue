<template>
  <div class="livechat__create">
    <div class="crate__chat__form">
      <div class="chat__logo">
        <img :src="user" alt="logo" class="logo" />
      </div>
      <p>Chào mừng đến với LiveChat! Vui lòng nhập thông tin của bạn để bắt đầu chat.</p>

      <div>
        <label>Tên</label>
        <input v-model="name" placeholder="Tên của bạn" required class="input" />
      </div>

      <div>
        <label>Email</label>
        <input v-model="email" placeholder="Email của bạn" required class="input" />
      </div>

      <button class="button" @click="createChat">Bắt đầu chat</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import user from '@/assets/images/ico/user.png';

const name = ref('');
const email = ref('');

const emit = defineEmits(['user-created']);

function createChat() {
  if (!name.value || !email.value) {
    alert('Vui lòng nhập đầy đủ tên và email!');
    return;
  }

  const userData = {
    name: name.value,
    email: email.value,
    createdAt: new Date().toISOString(),
  };

  localStorage.setItem('user_livechat', JSON.stringify(userData));

  emit('user-created');
}
</script>

<style scoped></style>
