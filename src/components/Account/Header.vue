<template>
    <div class="flex justify-between items-center px-2 h-[50px] bg-black fixed top-0 left-0 w-full z-20">
        <router-link to="/">
            <img :src="logo" alt="" class="h-7.5 w-auto" />
        </router-link>
        <div class="flex gap-2 items-center">
            <div class="flex flex-col items-end text-sm text-white">
                <b class="leading-[17px] md:hidden">{{ user }}</b>
                <span class="text-[16px] md:text-[25px]"
                    ><span class="hidden md:inline-block mr-2">VND</span>10,000,000,000</span
                >
            </div>
            <span class="md:ml-[35px] hidden md:inline-block md:text-[25px] text-[#ffcf01]">{{ user }}</span>
            <div class="hidden md:flex gap-2 ml-8">
                <router-link
                    to="/recharge"
                    class="border-2 border-[#00b897] text-[#00b897] rounded-md px-[13px] text-[14px]"
                    >Nạp tiền</router-link
                >
                <router-link to="/recharge" class="bg-[#00b897] text-white rounded-md px-[13px] text-[14px]"
                    >Rút tiền</router-link
                >
            </div>
            <div class="relative">
                <img :src="avt" alt="" class="hidden md:block w-8 h-8 rounded-full mx-4 cursor-pointer" @click="toggleMenu" />

                <transition name="fade">
                    <ul
                        v-if="isOpen"
                        class="absolute right-0 mt-2 w-48 bg-[#1f1f1f] rounded-md shadow-lg z-50 text-white text-sm max-md:hidden">
                        <li v-for="(item, index) in menuItems" :key="index" class="px-4 py-2 hover:bg-[#00b897] rounded-md">
                            <router-link :to="item.href" @click="closeMenu" class="flex items-center gap-2">
                                <component :is="item.icon" class="w-5 h-5" />
                                {{ item.label }}
                            </router-link>
                        </li>
                        <li class="px-4 py-2 hover:bg-[#00b897] rounded-md cursor-pointer" @click="handleLogout">
                            <div class="flex items-center gap-2">
                                <PowerIcon class="w-5 h-5" />
                                Đăng xuất
                            </div>
                        </li>
                    </ul>
                </transition>
            </div>
            <Bars3Icon @click="toggleMenu" class="w-8 h-8 md:hidden text-[#aeb1b9] stroke-[2.4] cursor-pointer" />
        </div>
    </div>

    <transition name="menu-slide">
        <ul v-if="isOpen" class="menu-container md:hidden w-screen h-screen bg-[#141416] pt-[50px] px-3 fixed top-0 left-0 z-10">
            <li v-for="(item, index) in menuItems" :key="index" class="py-2 border-b border-[#8f8f8f]">
                <router-link
                    :to="item.href"
                    @click="closeMenu"
                    class="flex items-center gap-3 py-2.5 text-[16px] font-bold text-white">
                    <component :is="item.icon" class="w-6 h-6" />
                    <span>{{ item.label }}</span>
                </router-link>
            </li>
            <li class="py-2 border-b border-[#8f8f8f]">
                <div class="flex items-center gap-3 py-2.5 text-[16px] font-bold text-white" @click="handleLogout">
                    <PowerIcon class="w-6 h-6" />
                    <span>Đăng xuất</span>
                </div>
            </li>
        </ul>
    </transition>
</template>

<script setup>
import { ref } from "vue";
import {
    Bars3Icon,
    ArrowsRightLeftIcon,
    CreditCardIcon,
    ClipboardIcon,
    ArrowDownTrayIcon,
    ArrowUpTrayIcon,
    NumberedListIcon,
    ClockIcon,
    PowerIcon,
} from "@heroicons/vue/24/outline";
import logo from "@/assets/images/logo/logo.png";

import avt from "@/assets/images/ico/avt.webp";

import { useRouter } from "vue-router";

const router = useRouter();

const isOpen = ref(false);

const menuItems = [
    { label: "Giao dịch", icon: ArrowsRightLeftIcon, href: "/trading/1" },
    { label: "Thông tin tài khoản", icon: CreditCardIcon, href: "/account" },
    { label: "Đổi mật khẩu", icon: ClipboardIcon, href: "/change-pass" },
    { label: "Nạp tiền", icon: ArrowDownTrayIcon, href: "/recharge" },
    { label: "Rút tiền", icon: ArrowUpTrayIcon, href: "/withdraw" },
    { label: "Lịch sử giao dịch", icon: ClockIcon, href: "/orders" },
    { label: "Lịch sử nạp rút", icon: NumberedListIcon, href: "/history" },
];

function toggleMenu() {
    isOpen.value = !isOpen.value;
}

function closeMenu() {
    isOpen.value = false;
}

const user = localStorage.getItem("username");

function handleLogout() {
    isOpen.value = false;
    localStorage.removeItem("username");
    router.push("/login");
}
</script>

<style scoped>
.menu-slide-enter-active,
.menu-slide-leave-active {
    transition: all 0.4s ease;
}
.menu-slide-enter-from {
    transform: translateY(-100%);
    opacity: 0;
}
.menu-slide-enter-to {
    transform: translateY(0);
    opacity: 1;
}
.menu-slide-leave-from {
    transform: translateY(0);
    opacity: 1;
}
.menu-slide-leave-to {
    transform: translateY(-100%);
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
    opacity: 1;
}
</style>
