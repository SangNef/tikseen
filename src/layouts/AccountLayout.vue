<template>
    <div class="flex flex-row">
        <div class="w-full min-h-screen bg-[#f4f5f6] flex flex-col">
            <Header />
            <div class="mt-12 md:w-7xl mx-auto flex gap-7">
                <!-- Menu sidebar -->
                <div class="w-60 p-4 h-max mt-4 max-md:hidden">
                    <ul class="space-y-3">
                        <li v-for="(item, index) in menuItems" :key="index">
                            <router-link
                                :to="item.href"
                                :class="[
                                    'flex items-center gap-3 text-sm transition px-3 py-2 rounded',
                                    route.path === item.href
                                        ? 'bg-white text-[#00b897] font-semibold shadow'
                                        : 'text-gray-700 hover:text-[#00b897]',
                                ]">
                                <component :is="item.icon" class="w-5 h-5" />
                                <span>{{ item.label }}</span>
                            </router-link>
                        </li>
                    </ul>
                </div>

                <!-- Slot content -->
                <div class="grow min-h-[calc(100vh-88px)]">
                    <slot />
                </div>
            </div>
            <Footer />
        </div>
    </div>
</template>

<script setup>
import Footer from "@/components/Account/Footer.vue";
import Header from "@/components/Account/Header.vue";
import {
    CreditCardIcon,
    ClipboardIcon,
    ArrowDownTrayIcon,
    ArrowUpTrayIcon,
    ClockIcon,
    NumberedListIcon,
} from "@heroicons/vue/24/outline";

import { useRoute } from "vue-router";
const route = useRoute();

const menuItems = [
    { label: "Thông tin tài khoản", icon: CreditCardIcon, href: "/account" },
    { label: "Đổi mật khẩu", icon: ClipboardIcon, href: "/change-pass" },
    { label: "Nạp tiền", icon: ArrowDownTrayIcon, href: "/recharge" },
    { label: "Rút tiền", icon: ArrowUpTrayIcon, href: "/withdraw" },
    { label: "Lịch sử giao dịch", icon: ClockIcon, href: "/orders" },
    { label: "Lịch sử nạp rút", icon: NumberedListIcon, href: "/history" },
];
</script>

<style></style>
