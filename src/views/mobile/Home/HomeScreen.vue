<template>
    <div class="pb-6">
        <Header />
        <div v-if="!user">
            <img
                class="w-28 absolute top-0 left-1/2 -translate-x-1/2 opacity-50"
                :class="isScrolled ? 'z-0' : 'z-20'"
                :src="GiftBg"
                alt="" />
            <Gif />
            <h1 class="text-[0.54rem] text-center font-bold pt-[6.5rem] mb-0.5">
                Phần thưởng <span class="text-default">10.800 USDT</span> cho <br />
                người dùng mới
            </h1>
            <p class="text-[0.32rem] text-secondary text-center">
                Đăng ký ngay để nhận phần thưởng có giới hạn thời gian
            </p>
            <div
                v-if="showCountdown"
                class="!mt-1.5 !pb-2.5 ant-flex css-1v613y0 ant-flex-align-center ant-flex-justify-center"
                style="gap: 14px">
                <div class="font-semibold ant-flex css-1v613y0 ant-flex-align-center" style="gap: 8px">
                    <div
                        class="bg-[#1d1d1d] w-2.5 h-2.5 rounded-sm ant-flex css-1v613y0 ant-flex-align-center ant-flex-justify-center">
                        <span class="text-[0.32rem]">{{ countdown.days }}</span>
                    </div>
                    <p class="text-[0.28rem] text-secondary">Ngày</p>
                </div>
                <div class="font-semibold ant-flex css-1v613y0 ant-flex-align-center" style="gap: 8px">
                    <div
                        class="bg-[#1d1d1d] w-2.5 h-2.5 rounded-sm ant-flex css-1v613y0 ant-flex-align-center ant-flex-justify-center">
                        <span class="text-[0.32rem]">{{ countdown.hours }}</span>
                    </div>
                    <p class="text-[0.28rem] text-secondary">giờ</p>
                </div>
                <div class="font-semibold ant-flex css-1v613y0 ant-flex-align-center" style="gap: 8px">
                    <div
                        class="bg-[#1d1d1d] w-2.5 h-2.5 rounded-sm ant-flex css-1v613y0 ant-flex-align-center ant-flex-justify-center">
                        <span class="text-[0.32rem]">{{ countdown.minutes }}</span>
                    </div>
                    <p class="text-[0.28rem] text-secondary">phút</p>
                </div>
                <div class="font-semibold ant-flex css-1v613y0 ant-flex-align-center" style="gap: 8px">
                    <div
                        class="bg-[#1d1d1d] w-2.5 h-2.5 rounded-sm ant-flex css-1v613y0 ant-flex-align-center ant-flex-justify-center">
                        <span class="text-[0.32rem]">{{ countdown.seconds }}</span>
                    </div>
                    <p class="text-[0.28rem] text-secondary">giây</p>
                </div>
            </div>
            <router-link to="/login" data-discover="true"
                ><div
                    class="flex items-center justify-between h-[110px] border-y border-default px-1.5 active:opacity-60 duration-150">
                    <div class="flex items-center justify-between gap-1.5">
                        <img class="w-8" :src="NoAuth" alt="" />
                        <div class="flex flex-col justify-center gap-0.5">
                            <h2 class="font-medium text-[0.42rem] text-gray-100">Đăng nhập/Đăng ký</h2>
                            <p class="text-[0.3rem] text-[#adb0b9]">
                                Để bắt đầu hành trình đầu tư tài sản <br />
                                số cùng Coincex
                            </p>
                        </div>
                    </div>
                    <div
                        class="w-3.5 h-3.5 flex items-center justify-center rounded-full bg-default border-4 border-default/60">
                        <span role="img" aria-label="right" class="anticon anticon-right text-gray-100"
                            ><svg
                                viewBox="64 64 896 896"
                                focusable="false"
                                data-icon="right"
                                width="0.5em"
                                height="0.5em"
                                fill="currentColor"
                                aria-hidden="true">
                                <path
                                    d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path></svg
                        ></span>
                    </div></div
            ></router-link>
        </div>
        <div class="mt-1.5 px-1.5" :class="!user ? '' : 'pt-6'">
            <Swiper
                :modules="[Autoplay, Pagination]"
                :slides-per-view="1"
                :loop="true"
                :autoplay="{ delay: 2500, disableOnInteraction: false }"
                :pagination="{ el: '.custom-pagination', clickable: true }"
                class="w-full h-max relative">
                <SwiperSlide v-for="(banner, index) in banners" :key="index">
                    <img :src="banner" class="w-full h-full object-cover rounded" alt="Banner" />
                </SwiperSlide>

                <!-- Custom pagination dots -->
                <div class="custom-pagination absolute !bottom-[0.2rem] !-left-1 flex justify-end gap-1 z-10 w-full" />
            </Swiper>
        </div>

        <div class="py-1 overflow-hidden px-1.5 flex items-start gap-1">
            <Swiper
                :modules="[Autoplay]"
                direction="vertical"
                :loop="true"
                :autoplay="{ delay: 2000, disableOnInteraction: false }"
                :slides-per-view="1"
                class="h-2">
                <SwiperSlide
                    v-for="(text, idx) in swiperText"
                    :key="idx"
                    class="text-[0.28rem] text-gray-200 font-medium whitespace-nowrap overflow-hidden text-ellipsis leading-[20px] !h-2">
                    <div class="flex items-center gap-1.5">
                        <span class="relative flex w-[8px] h-[8px] shrink-0">
                            <span
                                class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#01bc8d] opacity-75"></span>
                            <span class="relative inline-flex rounded-full w-[8px] h-[8px] bg-[#01bc8d]"></span>
                        </span>
                        <p class="truncate">{{ text }}</p>
                    </div>
                </SwiperSlide>
            </Swiper>
            <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="shrink-0">
                <circle cx="4" cy="4" r="2" fill="#9ca3af" />
                <circle cx="4" cy="9" r="2" fill="#9ca3af" />
                <circle cx="4" cy="14" r="2" fill="#9ca3af" />
                <rect x="8" y="3" width="7" height="2" rx="1" fill="#9ca3af" />
                <rect x="8" y="8" width="7" height="2" rx="1" fill="#9ca3af" />
                <rect x="8" y="13" width="7" height="2" rx="1" fill="#9ca3af" />
            </svg>
        </div>
        <div v-if="!user" class="relative bg-primary border border-secondary mt-1 mx-1.5 p-1.5 rounded-md">
            <div class="!pr-10">
                <p class="text-[0.38rem] text-[#ededed] font-bold mb-1">
                    Hoàn thành khoản tiền nạp hoặc mua tiền điện tử đầu tiên
                </p>
                <p class="text-[0.28rem] text-[#8d8b8b]">
                    Nhận thưởng lên đến 20 USDT cho khoản nạp đầu tiên của bạn với số tiền bất kỳ, đừng bỏ lỡ!
                </p>
            </div>
            <img class="w-12 absolute top-1.5 right-0" :src="Welfare" alt="" /><router-link
                to="/login"
                type="button"
                class="_btn-ripple_1fzeu_1 max-w-max text-white font-medium flex items-center justify-center px-1.5 py-[0.2rem] rounded-full bg-default mt-1.5 active:opacity-60 duration-150">
                <span class="text-[0.28rem] font-semibold">Nạp / Mua tiền điện tử</span
                ><span role="img" aria-label="arrow-right" class="anticon anticon-arrow-right text-[0.28rem] ml-1"
                    ><svg
                        viewBox="64 64 896 896"
                        focusable="false"
                        data-icon="arrow-right"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        aria-hidden="true">
                        <path
                            d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"></path></svg
                ></span>
            </router-link>
            <div
                class="bg-[#161616] border border-[#1c1c1c] rounded-full !px-1 !py-0.5 !mt-1.5 active:opacity-60 duration-150 ant-flex css-1v613y0 ant-flex-align-center">
                <span class="text-[0.28rem] text-[#717171] font-semibold line-clamp-1"
                    >Bạn đã nhận được Gói quà tặng <span class="text-default">20 USDT</span> khi hoàn tất xác minh</span
                ><svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    role="img"
                    aria-label="arrow"
                    focusable="false"
                    data-icon="arrow"
                    aria-hidden="true"
                    preserveAspectRatio="xMidYMid meet"
                    class="rv-icon rv-icon-arrow text-[0.28rem] text-gray-500 ml-1">
                    <path
                        d="M711.156 508.035a41.472 41.472 0 01-11.126 20.023L366.12 861.97c-16.272 16.272-42.654 16.272-58.926 0s-16.272-42.654 0-58.926L611.767 498.47 307.241 193.944c-16.272-16.272-16.272-42.654 0-58.926 16.271-16.272 42.653-16.272 58.925 0L700.078 468.93c10.606 10.606 14.299 25.508 11.078 39.105z"
                        fill-rule="evenodd"></path>
                </svg>
            </div>
        </div>
        <div class="px-1">
            <div class="grid grid-cols-10 gap-x-1.5 text-default py-1">
                <router-link
                    v-for="item in menu"
                    :key="item.name"
                    :to="item.path"
                    class="col-span-2 flex flex-col items-center justify-start py-1 gap-0.5 active:opacity-60 active:duration-150">
                    <div class="flex items-center justify-center shadow-sm rounded-full">
                        <img :src="item.icon" class="w-[0.8rem]" :alt="item.name" />
                    </div>
                    <span class="text-[0.26rem] font-semibold text-gray-300 text-center select-none">
                        <template v-for="(line, idx) in item.name" :key="idx">
                            <p class="whitespace-nowrap m-0">{{ line }}</p>
                        </template>
                    </span>
                </router-link>
            </div>
        </div>
        <div class="px-1.5 pb-1.5">
            <CoinMaker />
            <router-link
                class="block relative bg-primary border border-secondary p-1.5 rounded-md mt-2 active:opacity-60 duration-150"
                to="/deposit?redirect=home"
                data-discover="true"
                ><div class="text-[0.36rem] font-semibold mb-0.5">Giới thiệu</div>
                <p class="text-[#21b281] text-[0.32rem] font-semibold">Giới thiệu bạn bè để hưởng hoa hồng 35%</p>
                <img class="w-5 rounded-full absolute right-1 bottom-1.5" :src="Com" alt=""
            /></router-link>
            <div
                class="!mt-1.5 ant-flex css-1v613y0 ant-flex-align-center ant-flex-justify-space-between"
                style="gap: 12px">
                <router-link
                    class="block flex-1 relative bg-primary border border-secondary p-1.5 rounded-md active:opacity-60 duration-150"
                    to="/overnight-interest"
                    data-discover="true"
                    ><div class="text-[0.36rem] font-semibold mb-0.5">To Earn</div>
                    <p class="text-[#21b281] text-[0.32rem] font-semibold">Earn up to 80%!</p>
                    <img class="w-[1.1rem] rounded-full absolute right-1 bottom-1.5" :src="Earn" alt="" /></router-link
                ><router-link
                    class="block flex-1 relative bg-primary border border-secondary p-1.5 rounded-md active:opacity-60 duration-150"
                    to="/trade"
                    data-discover="true"
                    ><div class="text-[0.36rem] font-semibold mb-0.5">Đặc quyền giao ...</div>
                    <p class="text-[#21b281] text-[0.32rem] font-semibold">&gt;&gt;&gt;</p>
                    <img class="w-3.5 rounded-full absolute right-1 bottom-1.5" :src="Coin" alt=""
                /></router-link>
            </div>
        </div>
        <Drawer />
    </div>
</template>

<script setup>
import Header from "./Header.vue";
import {
    GiftBg,
    NoAuth,
    Banner1,
    Banner2,
    Banner3,
    Banner4,
    Banner5,
    Banner6,
    Banner7,
    Banner8,
    Banner9,
    Banner10,
    Banner11,
    Banner12,
    Welfare,
    Com,
    Earn,
    Coin,
} from "@/assets/mobile/home";

import { menu } from "@/assets/mobile/menu";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper/modules"; // ✅ Thêm Pagination
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import SwiperCore from "swiper";
import Drawer from "./Drawer.vue";
import CoinMaker from "./CoinMaker.vue";
import Gif from "./Gif.vue";
import { ref, onMounted, onUnmounted } from "vue";

const isScrolled = ref(false);

const user = localStorage.getItem("username");

// Đưa khai báo onScroll ra ngoài
const onScroll = () => {
    isScrolled.value = window.scrollY > 0;
};

const showCountdown = ref(true);
const countdown = ref({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
});
let countdownInterval = null;

function updateCountdown() {
    const target = new Date("2025-06-26T10:21:43+07:00"); // Giờ VN
    const now = new Date();
    let diff = target - now;
    if (diff <= 0) {
        showCountdown.value = false;
        clearInterval(countdownInterval);
        return;
    }
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff -= days * (1000 * 60 * 60 * 24);
    const hours = Math.floor(diff / (1000 * 60 * 60));
    diff -= hours * (1000 * 60 * 60);
    const minutes = Math.floor(diff / (1000 * 60));
    diff -= minutes * (1000 * 60);
    const seconds = Math.floor(diff / 1000);
    countdown.value = { days, hours, minutes, seconds };
}

onMounted(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    updateCountdown();
    countdownInterval = setInterval(updateCountdown, 1000);
});

onUnmounted(() => {
    window.removeEventListener("scroll", onScroll);
    if (countdownInterval) clearInterval(countdownInterval);
});

SwiperCore.use([Autoplay]);

const banners = [
    Banner1,
    Banner2,
    Banner3,
    Banner4,
    Banner5,
    Banner6,
    Banner7,
    Banner8,
    Banner9,
    Banner10,
    Banner11,
    Banner12,
];

const swiperText = [
    "Thông báo: Điều chỉnh phí giao dịch Futures",
    "Thông báo: Coincex hỗ trợ quy đổi các loại token",
    "Vinh danh lạnh đạo tập sự có khối lượng giao dịch vượt trội trong quý",
    "Thông báo quy định nạp/rút VNDC qua tài khoản ngân hàng chính chủ",
    "Hỗ trợ kế hoạch chuyển đổi mã giao dịch ZK Token sang mã giao dịch ZKJ Token",
    "Vinh danh đối tác cấp cao có khối lượng giao dịch vượt trội trong tháng",
];
</script>

<style scope>
:where(.css-1v613y0).ant-flex-justify-center {
    justify-content: center;
}
:where(.css-1v613y0).ant-flex-align-center {
    align-items: center;
}
:where(.css-1v613y0).ant-flex {
    display: flex;
    margin: 0;
    padding: 0;
}

.custom-pagination .swiper-pagination-bullet {
    width: 8px;
    height: 2.5px;
    background: #999;
    opacity: 0.5;
    border-radius: 2px;
    transition: all 0.3s ease;
    margin: 0 !important;
}

.custom-pagination .swiper-pagination-bullet-active {
    background: #01bc8d;
    opacity: 1;
}
</style>
