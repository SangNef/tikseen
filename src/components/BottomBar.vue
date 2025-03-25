<template>
    <div
        class="fixed bottom-[calc(0px+env(safe-area-inset-bottom))] w-full z-10 bg-white border-t border-[#e1e1e1] h-12">
        <div class="px-0 w-full h-full overflow-hidden">
            <div class="flex items-center justify-between h-full px-4">
                <router-link
                    v-for="item in menuItems"
                    :key="item.href"
                    :to="item.href"
                    class="flex flex-col items-center justify-center flex-1 text-gray-500 hover:text-blue-500">
                    <component :is="icons[item.icon]" class="w-5 h-5 mb-1" />
                    <span class="text-xs">{{ item.name }}</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineAsyncComponent } from "vue";

const icons = {
    home: defineAsyncComponent(() => import("@heroicons/vue/24/solid/HomeIcon")),
    "chart-bar": defineAsyncComponent(() => import("@heroicons/vue/24/solid/ChartBarIcon")),
    activity: defineAsyncComponent(() => import("@heroicons/vue/24/solid/ChartPieIcon")),
    "question-mark-circle": defineAsyncComponent(() => import("@heroicons/vue/24/solid/QuestionMarkCircleIcon")),
    user: defineAsyncComponent(() => import("@heroicons/vue/24/solid/UserIcon")),
};

const menuItems = [
    { name: "Trang chủ", icon: "home", href: "/" },
    { name: "Kết quả", icon: "chart-bar", href: "/result" },
    { name: "Hoạt động", icon: "activity", href: "/content" },
    { name: "Hỗ trợ", icon: "question-mark-circle", href: "/support" },
    { name: "Tài khoản", icon: "user", href: "/profile" },
];
</script>

<style scoped>
.router-link-active {
    color: #2563eb; /* Màu xanh dương khi active */
}
</style>
