<template>
    <div class="flex justify-between items-center px-2 h-[50px] bg-black fixed top-0 w-[calc(100vw)] left-0 z-20">
        <div class="flex items-center">
            <router-link to="/">
                <img :src="logo" alt="" class="h-7.5 w-auto" />
            </router-link>
            <div class="hidden md:flex gap-6 items-center ml-6">
                <!-- Gộp hết phần này lại -->
                <div
                    v-for="(item, index) in menuItems"
                    :key="index"
                    class="relative"
                    @mouseenter="handleMouseEnter(index)"
                    @mouseleave="handleMouseLeave">
                    <!-- Menu không có submenu -->
                    <router-link
                        v-if="!item.subMenus"
                        :to="item.href"
                        class="text-white hover:text-[#00b897] text-sm transition">
                        {{ item.label }}
                    </router-link>

                    <!-- Menu có submenu -->
                    <div v-else>
                        <span class="text-white hover:text-[#00b897] text-sm font-medium cursor-pointer">
                            {{ item.label }} <span class="text-[8px] pl-2">▼</span>
                        </span>

                        <!-- Submenu hiển thị khi hoverIndex === index -->
                        <div
                            v-if="hoverIndex === index"
                            class="absolute top-7 -left-4 mt-2 bg-[#141416] rounded-md shadow-lg z-50 min-w-max">
                            <router-link
                                v-for="(sub, i) in item.subMenus"
                                :key="i"
                                :to="sub.href"
                                class="flex items-center px-4 py-2 text-white hover:bg-[#00b897] rounded-md transition whitespace-nowrap text-[16px] h-[50px] min-w-max">
                                <span>{{ sub.label }}</span>
                                <img v-if="sub.hot" :src="hot" class="ml-2 w-4 h-4" />
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex gap-2 items-center">
            <template v-if="isLoggedIn">
                <router-link
                    to="/account"
                    class="border-2 border-[#00b897] text-[#00b897] rounded-md px-[13px] text-[14px]">
                    Tài khoản
                </router-link>
            </template>
            <template v-else>
                <router-link
                    to="/login"
                    class="text-white px-[10px] text-[14px]">
                    Đăng nhập
                </router-link>
                <router-link
                    to="/register"
                    class="border-2 border-[#00b897] text-[#00b897] rounded-md px-[10px] text-[14px]">
                    Đăng ký ngay
                </router-link>
            </template>
            <BellIcon class="w-6 h-6 text-[#00b897] md:mr-5" />
            <Bars3Icon
                @click="toggleMenu"
                class="w-8 h-8 text-[#aeb1b9] stroke-[2.4] md:ml-3 cursor-pointer md:hidden" />
        </div>
        <div
            @click="toggleMenu"
            class="fixed top-0 left-0 w-[calc(100vw)] h-screen bg-black/50 transition-opacity duration-300 ease-in-out z-30"
            :class="isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'">
            <!-- Slide-in Menu -->
            <div
                class="absolute top-0 right-0 w-70 h-screen bg-[#141416] transition-transform duration-300 ease-in-out"
                :class="isOpen ? 'translate-x-0' : 'translate-x-full'"
                @click.stop>
                <button class="w-10 h-10 absolute top-0 right-0 flex items-center justify-center">
                    <XMarkIcon @click="toggleMenu" class="w-7 h-7 text-[#0B5ED7] stroke-2" />
                </button>

                <!-- Logo -->
                <div class="mt-[50px]">
                    <div class="py-[15px] px-2.5 flex justify-center">
                        <img :src="logo" alt="" class="w-[152px]" />
                    </div>
                </div>

                <!-- Menu Items -->
                <ul>
                    <li
                        v-for="(item, index) in menuItems"
                        :key="index"
                        class="border-t border-[#8f8f8f] text-[14px] text-white">
                        <!-- Item không có submenu -->
                        <router-link
                            v-if="!item.subMenus"
                            :to="item.href"
                            class="block text-white hover:text-[#00b897] transition py-2.5 pr-[15px] pl-[18px]"
                            @click="toggleMenu">
                            {{ item.label }}
                        </router-link>

                        <!-- Item có submenu -->
                        <div v-else>
                            <div
                                class="text-white font-semibold border-b border-[#8f8f8f] py-2.5 pr-[15px] pl-[18px] relative">
                                {{ item.label }}
                                <button
                                    @click="toggleSubmenu(index)"
                                    class="h-full aspect-square absolute right-0 top-0 flex items-center justify-center bg-[#ffffff0a] border-l border-[#8f8f8f]">
                                    <component
                                        :is="openSubmenus.includes(index) ? MinusIcon : PlusIcon"
                                        class="w-4 h-4 text-white stroke-[2.5]" />
                                </button>
                            </div>

                            <!-- Submenu effect -->
                            <transition name="submenu-slide">
                                <ul v-if="openSubmenus.includes(index)" class="">
                                    <li
                                        v-for="(sub, i) in item.subMenus"
                                        :key="i"
                                        class="border-b border-[#8f8f8f] py-2.5 pr-[15px] pl-[36px] bg-[#ffffff0a]">
                                        <router-link
                                            :to="sub.href"
                                            class="flex items-center text-white hover:text-[#00b897] transition"
                                            @click="toggleMenu">
                                            {{ sub.label }}
                                            <img
                                                v-if="sub.hot"
                                                :src="hot"
                                                class="ml-2 text-xs text-red-500 font-bold" />
                                        </router-link>
                                    </li>
                                </ul>
                            </transition>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { Bars3Icon, BellIcon, PlusIcon, MinusIcon, XMarkIcon } from "@heroicons/vue/24/outline";
import logo from "@/assets/images/logo/logo.png";
import hot from "@/assets/images/ico/hot.svg";

const isOpen = ref(false);
const openSubmenus = ref([]);
const hoverIndex = ref(null);
let hideTimeout = null;

const isLoggedIn = ref(false);

onMounted(() => {
    const user = localStorage.getItem("username");
    isLoggedIn.value = !!user;
});

const handleMouseEnter = (index) => {
    clearTimeout(hideTimeout);
    hoverIndex.value = index;
};

const handleMouseLeave = () => {
    hideTimeout = setTimeout(() => {
        hoverIndex.value = null;
    }, 200); // delay 200ms để người dùng kịp hover vào submenu
};

function toggleMenu() {
    isOpen.value = !isOpen.value;
}

function toggleSubmenu(index) {
    if (openSubmenus.value.includes(index)) {
        openSubmenus.value = openSubmenus.value.filter((i) => i !== index);
    } else {
        openSubmenus.value.push(index);
    }
}

const menuItems = [
    { label: "Trang chủ", href: "/" },
    { label: "Nạp tiền", href: "/recharge" },
    {
        label: "Phòng",
        subMenus: [
            { label: "Family 1", hot: true, href: "/trading/1" },
            { label: "Family 2", href: "/trading/2" },
            { label: "Family 3", href: "/trading/3" },
            { label: "Family 4", href: "/trading/4" },
            { label: "Family 5", href: "/trading/5" },
            { label: "Family 6", href: "/trading/6" },
        ],
    },
];
</script>

<style scoped>
.submenu-slide-enter-active,
.submenu-slide-leave-active {
    transition: all 0.3s ease;
}
.submenu-slide-enter-from {
    transform: scaleY(0);
    opacity: 0;
}
.submenu-slide-enter-to {
    transform: scaleY(1);
    opacity: 1;
}
.submenu-slide-leave-from {
    transform: scaleY(1);
    opacity: 1;
}
.submenu-slide-leave-to {
    transform: scaleY(0);
    opacity: 0;
}
ul {
    transform-origin: top;
}
</style>
