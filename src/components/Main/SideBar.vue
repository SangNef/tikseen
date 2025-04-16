<template>
    <div class="w-16 fixed top-0 left-0 h-screen bg-cyan-950 flex flex-col items-center py-4 gap-6">
        <router-link
            v-for="(item, index) in menuItems"
            :key="index"
            :to="item.route"
            class="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-cyan-800"
            :title="item.label">
            <component
                :is="isActive(item.route) ? item.iconSolid : item.iconOutline"
                :class="isActive(item.route) ? 'text-white' : 'text-gray-400'"
                class="w-7 h-7" />
        </router-link>
    </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ChatBubbleLeftRightIcon as ChatOutline, Cog6ToothIcon as CogOutline } from "@heroicons/vue/24/outline";
import { ChatBubbleLeftRightIcon as ChatSolid, Cog6ToothIcon as CogSolid } from "@heroicons/vue/24/solid";

const route = useRoute();

const isActive = (path) => route.path === path;

const menuItems = [
    {
        label: "Trang chủ",
        iconOutline: ChatOutline,
        iconSolid: ChatSolid,
        route: "/",
    },
    {
        label: "Cài đặt",
        iconOutline: CogOutline,
        iconSolid: CogSolid,
        route: "/settings",
    },
];
</script>
