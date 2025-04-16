<template>
    <div class="chat_area" :class="isChatOpen ? 'animated_slide_up' : 'scale-0'">
        <div class="chat_area_content">
            <div
                class="chat_area_header"
                :style="{
                    backgroundImage:
                        'url(https://res.cloudinary.com/dx2o9ki2g/image/upload/v1729929419/hnvzlufwx3gej80nnnag.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }">
                <button type="text" className="close_btn" @click="closePopup">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
                            fill="#0F1729"></path>
                    </svg>
                </button>
                <h4 class="title" style="margin-top: 16px;">Chào mừng đến với</h4>
                <h4 class="title">LiveChat</h4>
            </div>
            <component :is="hasUser ? Message : CreateChat" @user-created="handleUserCreated" />
        </div>
    </div>
</template>

<script setup>
import "@/styles/chat.css";
import CreateChat from "./CreateChat.vue";
import Message from "./Message.vue";
import { onMounted, ref } from "vue";

const isChatOpen = defineModel();
const hasUser = ref(false);

onMounted(() => {
    const savedUser = localStorage.getItem("user_livechat");
    hasUser.value = savedUser !== null;
});

function handleUserCreated() {
    hasUser.value = true;  // Khi CreateChat báo user đã tạo xong.
}

function closePopup() {
    isChatOpen.value = false;
}
</script>

<style></style>
