<template>
    <div
        class="fixed bottom-2 left-[2%] w-[96%] md:max-w-[calc(448px-2%)] md:left-1/2 md:-translate-x-1/2 flex justify-between z-50 gap-1">
        <!-- Phần chính -->
        <div
            class="relative w-full bg-[#1a1819] py-2 shadow-md flex items-center justify-evenly rounded-[50px] overflow-hidden">
            <!-- <div class="w-10 h-10 flex items-center justify-center bg-[#b08d57] rounded-full">
                <component :is="ClipboardDocumentCheckIcon" class="w-7 h-7 text-white" />
            </div> -->

            <router-link
                v-for="(item, index) in menuItems"
                :key="index"
                :to="item.route"
                class="w-8 h-full flex flex-col items-center justify-center"
                >
                <component :is="item.icon" class="w-6 h-6" :class="currentRoute === item.route ? 'text-[#b08d57]' : 'text-white'" />
                <span class="text-xs whitespace-nowrap mt-1" :class="currentRoute === item.route ? 'text-[#b08d57]' : 'text-white'">{{ item.label }}</span>
            </router-link>
        </div>

        <div
            class="absolute right-[45px] -top-[17px] w-[33px] h-[33px] rounded-full"
            style="box-shadow: 0 15px 0px #1a1819"></div>
        <div
            class="absolute right-[45px] top-[42px] w-[33px] h-[33px] rounded-full"
            style="box-shadow: 0 -15px 0px #1a1819"></div>

        <!-- Thẻ thứ hai -->
        <div
            class="relative h-15 aspect-square bg-[#1a1819] py-2 shadow-md flex items-center justify-center rounded-full">
            <div class="w-8 h-full flex flex-col items-center justify-center">
                <component :is="ChatBubbleLeftEllipsisIcon" class="w-6 h-6 text-white" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ClipboardDocumentCheckIcon, ChatBubbleLeftEllipsisIcon, HomeIcon, UserIcon } from "@heroicons/vue/24/outline";
import { computed } from "vue";
const route = useRoute();  // Lấy route hiện tại

const currentRoute = computed(() => route.path);

const menuItems = [
    {
        label: "Trang chủ",
        icon: HomeIcon,
        route: "/home"
    },
    {
        label: "Đánh giá",
        icon: ClipboardDocumentCheckIcon,
        route: "/rate"
    },
    {
        label: "Cá nhân",
        icon: UserIcon,
        route: "/account/mine"
    }
]
</script>
