<template>
  <div :class="{ 'chat-full-height': isMobile }" v-if="isChatOpen">
    <!-- Backdrop trên mobile -->
    <!-- <div class="md:hidden fixed inset-0 bg-black/50" @click="closePopup"></div> -->

    <!-- Container của chat -->
    <div class="vippromax-chat-container" :class="{ 'chat-full-height': isMobile }">
      <div
        :style="[!isMobile ? 'position: fixed; bottom: 0;right: 0' : '']"
        class="chat-popup"
        :class="{ 'chat-popup-desktop': !isMobile, 'chat-popup-mobile': isMobile }">
        <!-- Header -->
        <iframe
          allow="clipboard-read; clipboard-write; autoplay; display-capture *; clipboard-write *;"
          class="chat-iframe"
          src="/chat-page/123123123?has-btn-hide=true"
          has-btn-hide="true"
          style="
            width: 100%;
            height: 100%;
            min-height: 0px;
            min-width: 0px;
            margin: 0px;
            padding: 0px;
            background-image: none;
            background-position: 0% 0%;
            background-size: initial;
            background-attachment: scroll;
            background-origin: initial;
            background-clip: initial;
            background-color: rgba(0, 0, 0, 0);
            border-width: 0px;
            float: none;
            color-scheme: normal;
            position: absolute;
            inset: 0px;
            transition: none !important;
            display: block;
            visibility: visible;
          "
          frameborder="0"></iframe>
      </div>
    </div>
  </div>
</template>

<script setup>
import ChatPage from './ChatPage.vue';
import { onMounted, ref, reactive, onBeforeUnmount } from 'vue';
import mobile from 'is-mobile';

const isMobile = ref(mobile());
const isChatOpen = defineModel();
const hasUser = ref(false);

onMounted(() => {
  // Kiểm tra nếu user đã tồn tại
  const savedUser = localStorage.getItem('user_livechat');
  hasUser.value = savedUser !== null;

  // Lắng nghe sự kiện từ iframe
  window.addEventListener('message', handleIframeMessage);
});

onBeforeUnmount(() => {
  // Gỡ bỏ event listener khi component bị hủy
  window.removeEventListener('message', handleIframeMessage);
});

function handleIframeMessage(event) {
  // Xử lý các thông điệp từ iframe
  if (event.data && event.data.action === 'closeChat') {
    closePopup();
  }
}

function handleUserCreated() {
  hasUser.value = true; // Khi CreateChat báo user đã tạo xong
}

function closePopup() {
  isChatOpen.value = false;
}
</script>

<style lang="scss">
.chat-full-height {
  height: 100vh;
}

.vippromax-chat-container {
  display: flex;
  align-items: center;
  justify-content: center;

  .chat-popup {
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 0;
    box-shadow:
      0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
    width: 100%;
    max-width: 100%;
    overflow: hidden;
    z-index: 99999;
  }

  .chat-popup-desktop {
    height: 600px;
    border-radius: 0.75rem;
    max-width: 28rem;
    margin: 20px;
  }

  .chat-popup-mobile {
    height: 100vh;
    border-radius: 0;
    margin: 0;
  }

  .chat-iframe {
    height: 100%;
    width: 100%;
  }

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
}

@media (min-width: 768px) {
  .vippromax-chat-container {
    align-items: flex-end;
    justify-content: flex-end;
    padding: 0;
  }
}
</style>
