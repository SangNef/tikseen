<template>
    <div class="main__livechat__screen">
        <div class="chat_icon" v-if="!isChatOpen">
            <img
                src="https://res.cloudinary.com/dx2o9ki2g/image/upload/v1743602309/d7sn8mtmxzgk2tpmoqnv.png"
                alt="livechat"
                class="chat_icon_img"
                :class="{ 'animated': isSliding }"
                @click="handleClick" />
        </div>
        <ChatPopup v-else v-model="isChatOpen" />
    </div>
</template>

<script setup>
import { ref } from "vue";
import "@/styles/icon.css";
import ChatPopup from "./ChatPopup.vue";

const isChatOpen = ref(false);
const isSliding = ref(false);

function handleClick() {
    isSliding.value = true;

    setTimeout(() => {
        isChatOpen.value = true;
        isSliding.value = false; // kết thúc hiệu ứng trượt sau 0.3s
    }, 300);
}
</script>

<style scoped>
</style>
