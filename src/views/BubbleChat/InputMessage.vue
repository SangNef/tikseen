<template>
    <div class="input_area">
        <div class="icon_container">
            <div ref="emojiDropdownRef" class="emoji_picker_icon">
                <FaceSmileIcon :style="{ width: '32px', height: '32px' }" @click="toggleEmojiPicker" />
                <div
                    v-if="showEmojiPicker"
                    :key="showEmojiPicker"
                    class="emoji_picker">
                    <EmojiPicker @select="addEmoji" />
                </div>
            </div>
            <PhotoIcon :style="{ width: '32px', height: '32px' }" @click="openFilePicker" />
            <input type="file" ref="fileInputRef" accept="image/*" style="display: none" @change="handleFileChange" />
        </div>
        <div class="input_container">
            <input v-model="msg" type="text" placeholder="Nhập tin nhắn..." class="msg_input" />
            <button class="send_btn" @click="handleSend">Gửi</button>
        </div>
    </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
import { FaceSmileIcon, PhotoIcon } from "@heroicons/vue/24/outline";
import EmojiPicker from "vue3-emoji-picker";
import "vue3-emoji-picker/css";

const msg = ref("");
const showEmojiPicker = ref(false);
const emojiDropdownRef = ref(null);
const fileInputRef = ref(null);

function handleSend() {
    if (msg.value.trim() === "") {
        console.log("Chưa nhập nội dung!");
        return;
    }
    console.log("Tin nhắn:", msg.value);
    msg.value = "";
}

function toggleEmojiPicker() {
    showEmojiPicker.value = !showEmojiPicker.value;
}

function addEmoji(emoji) {
    console.log("emoji: ", emoji);
    msg.value = msg.value ? msg.value.trim() + " " + emoji.i : emoji.i;
    showEmojiPicker.value = false;
}

const handleClickOutside = (event) => {
    if (
        emojiDropdownRef.value &&
        !emojiDropdownRef.value.contains(event.target)
    ) {
        showEmojiPicker.value = false;
    }
};

onMounted(() => {
    document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
    document.removeEventListener("click", handleClickOutside);
});

function handleFileChange(event) {
    const file = event.target.files[0];
    if (file) {
        console.log("Selected file:", file);
        // Xử lý upload ở đây
    }
}

function openFilePicker() {
    if (fileInputRef.value) {
        fileInputRef.value.click();
    }
}
</script>
