<template>
  <div :class="{ 'h-screen': isMobile }" v-if="isChatOpen">
    <!-- Backdrop trên mobile -->
    <!-- <div class="md:hidden fixed inset-0 bg-black/50" @click="closePopup"></div> -->

    <!-- Container của chat -->
    <div class="flex items-center justify-center md:items-end md:justify-end md:p-0" :class="{ 'h-screen': isMobile }">
      <div
        :style="[!isMobile ? 'position: fixed; bottom: 0;right: 0' : '']"
        class="flex flex-col bg-white rounded-none md:rounded-xl shadow-xl w-full max-w-full md:max-w-md overflow-hidden z-[99999]"
        :class="{ 'h-[600px]': !isMobile, 'h-screen': isMobile }">
        <!-- Header -->
        <div
          class="relative p-4 text-white flex-shrink-0"
          :style="{
            backgroundColor: widgetSettings.themeColor,
          }">
          <button @click="closePopup" class="absolute top-2 right-2 text-white hover:text-gray-200 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
                fill="#ffffff"></path>
            </svg>
          </button>

          <div class="flex items-center mb-3">
            <!-- Avatar -->
            <div class="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md mr-3 bg-white">
              <img
                :src="
                  widgetSettings.logo ||
                  'https://res.cloudinary.com/dx2o9ki2g/image/upload/v1743602309/d7sn8mtmxzgk2tpmoqnv.png'
                "
                alt="Logo"
                class="w-full h-full object-cover" />
            </div>

            <!-- Company info -->
            <div>
              <h4 class="font-semibold text-lg">{{ widgetSettings.businessName || 'LiveChat' }}</h4>
              <div class="flex items-center text-xs text-white/75">
                <div class="w-2 h-2 rounded-full bg-green-400 mr-1.5"></div>
                <span>Đang hoạt động</span>
              </div>
            </div>
          </div>

          <p v-if="widgetSettings.businessTagline" class="text-sm text-white/90 mt-1">
            {{ widgetSettings.businessTagline }}
          </p>

          <!-- Greeting message -->
          <!-- <div class="mt-2 text-center text-sm">
            <p>{{ widgetSettings.greetingTitle || 'Chào mừng đến với dịch vụ hỗ trợ của chúng tôi!' }}</p>
          </div> -->
        </div>

        <!-- Content -->
        <div class="flex-grow flex flex-col overflow-hidden">
          <component
            :is="hasUser ? Message : CreateChat"
            @user-created="handleUserCreated"
            :widgetSettings="widgetSettings" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import '@/styles/chat.css';
import CreateChat from './CreateChat.vue';
import Message from './Message.vue';
import { onMounted, ref, reactive } from 'vue';
import { getWidgetSettings } from '@/helpers/widgetSettingsHelper';

import mobile from 'is-mobile';

const isMobile = ref(mobile());
const isChatOpen = defineModel();
const hasUser = ref(false);
const widgetSettings = reactive(getWidgetSettings());

onMounted(() => {
  // Kiểm tra nếu user đã tồn tại
  const savedUser = localStorage.getItem('user_livechat');
  hasUser.value = savedUser !== null;
});

function handleUserCreated() {
  hasUser.value = true; // Khi CreateChat báo user đã tạo xong
}

function closePopup() {
  isChatOpen.value = false;
}
</script>

<style scoped>
.header_content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.business_logo {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 8px;
  border: 2px solid white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.business_logo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.header_text {
  text-align: center;
}

.tagline {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.9);
  margin-top: 4px;
}
</style>
