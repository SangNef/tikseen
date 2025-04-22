<template>
  <div class="flex flex-col h-full bg-gray-50 overflow-y-auto">
    <div class="bg-white rounded-lg shadow p-6 max-w-md mx-auto my-4">
      <div class="mb-6">
        <div class="flex justify-center mb-4">
          <div class="relative group">
            <div
              class="w-24 h-24 rounded-full overflow-hidden border-2 border-blue-500 flex items-center justify-center bg-white shadow-md">
              <img
                :src="avatarPreview || widgetSettings.logo || user"
                alt="Avatar"
                class="w-full h-full object-cover" />

              <div
                class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer rounded-full"
                @click="openAvatarPicker">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            </div>
            <input type="file" ref="avatarInputRef" accept="image/*" class="hidden" @change="handleAvatarChange" />
          </div>
        </div>

        <p class="text-gray-700 text-center mb-6">
          {{
            widgetSettings.welcomeMessage ||
            'Chào mừng đến với LiveChat! Vui lòng nhập thông tin của bạn để bắt đầu chat.'
          }}
        </p>
      </div>

      <div class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Tên</label>
          <input
            v-model="name"
            placeholder="Tên của bạn"
            required
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
          <p v-if="errors.name" class="mt-1 text-sm text-red-500">{{ errors.name }}</p>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            v-model="email"
            placeholder="Email của bạn"
            required
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
          <p v-if="errors.email" class="mt-1 text-sm text-red-500">{{ errors.email }}</p>
        </div>

        <button
          class="w-full py-2 px-4 rounded-lg text-white font-medium transition-colors"
          @click="createChat"
          :style="{ backgroundColor: widgetSettings.themeColor }">
          Bắt đầu chat
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import user from '@/assets/images/ico/user.png';

const props = defineProps({
  widgetSettings: {
    type: Object,
    default: () => ({
      themeColor: '#3b82f6',
      welcomeMessage: 'Chào mừng đến với LiveChat! Vui lòng nhập thông tin của bạn để bắt đầu chat.',
    }),
  },
});

const name = ref('');
const email = ref('');
const avatarInputRef = ref(null);
const avatarPreview = ref(null);
const avatarFile = ref(null);
const errors = ref({
  name: '',
  email: '',
});

const emit = defineEmits(['user-created']);

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function createChat() {
  // Reset errors
  errors.value = { name: '', email: '' };

  // Validate
  let hasError = false;

  if (!name.value.trim()) {
    errors.value.name = 'Vui lòng nhập tên của bạn';
    hasError = true;
  }

  if (!email.value.trim()) {
    errors.value.email = 'Vui lòng nhập email của bạn';
    hasError = true;
  } else if (!validateEmail(email.value)) {
    errors.value.email = 'Email không hợp lệ';
    hasError = true;
  }

  if (hasError) return;

  const userData = {
    name: name.value,
    email: email.value,
    createdAt: new Date().toISOString(),
    avatar: avatarPreview.value,
  };

  localStorage.setItem('user_livechat', JSON.stringify(userData));

  emit('user-created');
}

function openAvatarPicker() {
  if (avatarInputRef.value) {
    avatarInputRef.value.click();
  }
}

function handleAvatarChange(event) {
  const file = event.target.files[0];
  if (file) {
    avatarFile.value = file;

    const reader = new FileReader();
    reader.onload = (e) => {
      avatarPreview.value = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}
</script>

<style scoped>
.button:hover {
  filter: brightness(0.9);
}
</style>
