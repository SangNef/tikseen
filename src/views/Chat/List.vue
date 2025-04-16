<template>
    <div class="w-80 h-[calc(100vh-40px)] bg-white border-r border-gray-300">
        <div class="border-b border-gray-300 p-3 flex justify-between items-center text-sm font-bold">
            <span>My Chats ({{ chats.length }})</span>
            <span>Newest</span>
        </div>

        <div class="overflow-y-auto max-h-[calc(100vh-100px)] divide-gray-200">
            <div
                v-for="chat in chats"
                :key="chat.id"
                @click="selectChat(chat)"
                :class="[
                    'p-3 transition cursor-pointer flex items-center gap-3',
                    chat.id === props.selected?.id ? 'bg-gray-100' : 'hover:bg-gray-100',
                ]">
                <!-- Avatar ký tự đầu -->
                <div
                    class="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-base uppercase">
                    {{ chat.name.charAt(0) }}
                </div>

                <!-- Nội dung chat -->
                <div class="flex-1">
                    <div class="flex justify-between items-center">
                        <span class="font-medium">{{ chat.name }}</span>
                        <span class="text-xs text-gray-400">{{ formatTime(chat.chatAt) }}</span>
                    </div>
                    <div
                        class="text-sm truncate mt-1"
                        :class="chat.isRead ? 'text-gray-400' : 'text-gray-600 font-semibold'">
                        {{ chat.messages[chat.messages.length - 1]?.text }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineEmits, defineProps } from "vue";
import chats from "@/data/chat";
import formatTime from "@/helpers";

const emit = defineEmits(["selected"]);
const props = defineProps({
    selected: Object,
});

function selectChat(chat) {
    emit("selected", chat);
}
</script>

<style></style>
