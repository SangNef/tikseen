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
                    <div class="px-[15px] mt-8 max-md:hidden">
                        <div class="bg-white rounded-[10px] shadow-lg px-10 py-5 flex justify-between">
                            <div class="flex">
                                <div class="w-12 h-12 rounded-full bg-[#ddd8f9] flex items-center justify-center">
                                    <SpeakerWaveIcon class="w-6 h-6 text-[#34007f] stroke-2" />
                                </div>
                                <div class="ml-5">
                                    <div class="text-[15px] font-bold">
                                        Tiến hành tham gia đặt lệnh để tìm kiếm lợi nhuận
                                    </div>
                                    <p class="text-[16px] text-[#8f8f8f]">
                                        lợi nhuận có thể lên tới <strong>40%</strong> thu nhập từ chúng tôi
                                    </p>
                                </div>
                            </div>
                            <router-link to="/trading/1" class="px-[30px] py-[13px] bg-[#deb00b] text-white font-bold"
                                >Tiến hành giao dịch</router-link
                            >
                        </div>
                    </div>
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
