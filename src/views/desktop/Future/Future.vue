<template>
    <div class="bg-[#0c0c0c] py-1">
        <div class="grid grid-cols-12 gap-1 h-full">
            <div class="col-span-9 3xl:col-span-10 grid grid-cols-12 gap-1">
                <div class="col-span-12">
                    <div class="w-full bg-[#111419] flex items-center justify-start px-6">
                        <div class="flex items-center gap-6 self-stretch border-r border-[#ffffff0f] pr-3 py-2">
                            <svg
                                class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium !text-xl text-[#515c70] cursor-pointer css-vubbuv"
                                focusable="false"
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                data-testid="StarIcon">
                                <path
                                    d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                            </svg>
                            <div class="flex items-center gap-10 cursor-pointer select-none">
                                <div class="flex items-center gap-3">
                                    <img
                                        width="36"
                                        src="https://cdn-icons-png.flaticon.com/512/5968/5968260.png"
                                        alt="" />
                                    <div class="flex flex-col justify-center items-start">
                                        <h3 class="text-base font-semibold leading-6 tracking-wide">BTCUSDT</h3>
                                        <span class="text-sm font-medium text-[#515c70] leading-4">Vĩnh cửu</span>
                                    </div>
                                </div>
                                <svg
                                    class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium !text-2xl text-[#515c70] css-vubbuv"
                                    focusable="false"
                                    aria-hidden="true"
                                    viewBox="0 0 24 24"
                                    data-testid="ArrowDropDownIcon">
                                    <path d="m7 10 5 5 5-5z"></path>
                                </svg>
                            </div>
                        </div>
                        <div class="flex items-center gap-6 self-stretch border-r border-[#ffffff0f] py-2 px-6">
                            <div class="text-xl font-bold drop-shadow-2xl _color-token-down_qxfm5_5">104,172.01</div>
                        </div>
                        <div class="w-full flex items-center overflow-hidden _token-down_qxfm5_26 relative">
                            <button
                                class="swiper-prev absolute left-0 z-20 h-full bg-[#111419] transition"
                                @click="goPrev"
                                style="top: 0">
                                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" class="text-white">
                                    <path
                                        d="M15 18l-6-6 6-6"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </button>
                            <swiper
                                :slides-per-view="'auto'"
                                :space-between="0"
                                class="w-full"
                                @swiper="
                                    (swiper) => {
                                        swiperInstance = swiper;
                                    }
                                ">
                                <swiper-slide v-for="(item, idx) in swiperItems" :key="idx" style="width: 150px">
                                    <div
                                        class="flex items-center gap-6 self-stretch border-r border-[#ffffff0f] py-2 px-6">
                                        <div>
                                            <div
                                                class="text-[0.65rem] text-[#d9e1ff4d] uppercase font-medium whitespace-nowrap mb-1 select-none">
                                                {{ item.label }}
                                            </div>
                                            <div class="text-sm font-semibold" :class="item.class">
                                                {{ item.value }}
                                            </div>
                                        </div>
                                    </div>
                                </swiper-slide>
                            </swiper>
                            <button
                                class="swiper-next absolute right-0 z-20 h-full bg-[#111419] transition"
                                @click="goNext"
                                style="top: 0">
                                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" class="text-white">
                                    <path
                                        d="M9 6l6 6-6 6"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <div
                            class="cursor-pointer flex items-center self-stretch border-l border-[#ffffff0f] py-2 pl-6">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M7 3C8.86384 3 10.4299 4.27477 10.874 6H19V8H10.874C10.4299 9.72523 8.86384 11 7 11C4.79086 11 3 9.20914 3 7C3 4.79086 4.79086 3 7 3ZM7 9C8.10457 9 9 8.10457 9 7C9 5.89543 8.10457 5 7 5C5.89543 5 5 5.89543 5 7C5 8.10457 5.89543 9 7 9Z"
                                    fill="currentColor"></path>
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M17 20C15.1362 20 13.5701 18.7252 13.126 17H5V15H13.126C13.5701 13.2748 15.1362 12 17 12C19.2091 12 21 13.7909 21 16C21 18.2091 19.2091 20 17 20ZM17 18C18.1046 18 19 17.1046 19 16C19 14.8954 18.1046 14 17 14C15.8954 14 15 14.8954 15 16C15 17.1046 15.8954 18 17 18Z"
                                    fill="currentColor"></path>
                            </svg>
                        </div>
                    </div>
                </div>
                <Chart />
                <History />
            </div>
            <Bet />
        </div>
    </div>
</template>

<script setup>
import Bet from "./Bet.vue";
import Chart from "./Chart.vue";
import History from "./History.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { ref } from "vue";

let swiperInstance = null;

const goPrev = () => swiperInstance?.slidePrev();
const goNext = () => swiperInstance?.slideNext();

const swiperItems = [
    { label: "Giá đánh dấu", value: "104,154.50" },
    { label: "Giá chỉ số", value: "104,189.84" },
    { label: "Funding", value: "0.0023%", class: "text-amber-600" },
    { label: "Đếm ngược", value: "05:32:26" },
    { label: "Biến động 24h", value: "0.478%", class: "text-[#0fe28a]" },
    { label: "Khối lượng 24h (USDT)", value: "1460.35 triệu" },
    { label: "Khối lượng 24h (BTC)", value: "14,018.67" },
    { label: "Cao nhất 24h", value: "105,550.27" },
    { label: "Thấp nhất 24h", value: "103,615.33" },
    { label: "USDT/VND", value: "0" },
];
</script>

<style>
.swiper-prev,
.swiper-next {
    pointer-events: auto !important;
}
</style>
