<template>
    <div
        class="rv-nav-bar rv-nav-bar--fixed rv-hairline--bottom max-w-40 left-0 bg-primary py-0.5"
        :class="{
            'rv-nav-bar--fixed': isScrolled,
            '!bg-transparent': !isScrolled,
        }"
        style="z-index: 100">
        <div class="rv-nav-bar__content">
            <div class="rv-nav-bar__left">
                <div @click="navigateBack">
                    <span
                        role="img"
                        aria-label="arrow-left"
                        tabindex="-1"
                        class="anticon anticon-arrow-left text-white text-[0.52rem]"
                        ><svg
                            viewBox="64 64 896 896"
                            focusable="false"
                            data-icon="arrow-left"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            aria-hidden="true">
                            <path
                                d="M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path></svg
                    ></span>
                </div>
            </div>
            <div class="rv-nav-bar__title rv-ellipsis">
                <div class="text-white">
                    <span class="text-white text-[0.42rem] font-medium whitespace-nowrap">Quy đổi tiền điện tử</span>
                </div>
            </div>
            <div class="rv-nav-bar__right">
                <div class="flex items-center gap-2">
                    <span role="img" aria-label="history" class="anticon anticon-history !text-[0.54rem]">
                        <svg
                            viewBox="64 64 896 896"
                            focusable="false"
                            data-icon="question-circle"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            aria-hidden="true">
                            <path
                                d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                            <path
                                d="M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"></path>
                        </svg>
                    </span>
                </div>
            </div>
        </div>
    </div>
    <div
        class="relative h-[230px]"
        :style="`background-image: url(${bgTop});`"
        style="background-size: cover; background-repeat: no-repeat">
        <div class="pt-8 pl-1.5">
            <h1 class="!mb-1 font-semibold text-[21.5px]">Quy đổi</h1>
            <div class="text-[0.32rem] text-[#7d8691] font-semibold">
                <p>Mua bán BTC, ETH, USDT,... đơn giản,</p>
                <p>cho người mới</p>
            </div>
        </div>
        <img class="w-12 absolute right-1.5 bottom-6" :src="bgMain" alt="" />
    </div>
    <div class="bg-primary border-t border-secondary relative z-20 pb-3 -translate-y-2 rounded-t-lg px-1.5">
        <div class="flex justify-end py-2">
            <img class="w-2.5" :src="change" alt="" />
        </div>
        <div class="relative">
            <div class="bg-primary border border-secondary p-1.5 rounded-md text-[0.32rem] pb-3 mb-1.5 exchange-form">
                <div class="flex items-center justify-between text-[#8c8fa0] font-semibold">
                    <span>Từ</span>
                    <div class="flex items-center gap-0.5 whitespace-nowrap">
                        Số dư: 0.5691
                        <p class="min-w-[0.9rem]">USDT</p>
                    </div>
                </div>
                <div class="relative flex items-center gap-1 pt-3 pr-[4.25rem]">
                    <input type="tel" class="w-full bg-transparent text-[0.46rem] font-bold" placeholder="0" value="" />
                    <div class="absolute right-0 flex items-center gap-1">
                        <button class="bg-[#0c221f] px-1 py-[0.1rem] rounded-sm active:opacity-30 duration-150">
                            <span class="whitespace-nowrap text-[0.28rem] font-bold text-default">Tối đa</span>
                        </button>
                        <div class="flex items-center gap-1">
                            <img width="24" :src="usdt" alt="" />
                            <div class="flex items-center gap-1 text-[#a6aab5]">
                                <span class="min-w-4 text-[0.36rem] font-semibold">USDT</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-full bg-primary border border-secondary w-4 h-4 flex items-center justify-center">
                <img class="w-2.5 text-[#1d5da4] !duration-300" :src="change2" alt="" />
            </div>
            <div class="bg-primary border border-secondary p-1.5 rounded-md text-[0.32rem] pb-3 mb-1.5 exchange-form">
                <div class="flex items-center justify-between text-[#8c8fa0] font-semibold">
                    <span>Đến</span>
                    <div class="flex items-center gap-0.5 whitespace-nowrap">
                        Số dư: 5.407
                        <p class="min-w-[0.9rem]">VNDC</p>
                    </div>
                </div>
                <div class="relative flex items-center gap-1 pt-3 pr-11">
                    <input
                        type="tel"
                        class="w-full bg-transparent text-[0.46rem] font-bold"
                        placeholder="0"
                        disabled=""
                        value="" />
                    <div class="absolute right-0 flex items-center gap-1">
                        <button class="bg-[#0c221f] px-1 py-[0.1rem] rounded-sm active:opacity-30 duration-150">
                            <span class="whitespace-nowrap text-[0.28rem] font-bold text-default">Tối đa</span>
                        </button>
                        <div class="flex items-center gap-1">
                            <img width="24" :src="vndc" alt="" />
                            <div class="flex items-center gap-1 text-[#a6aab5]">
                                <span class="min-w-4 text-[0.36rem] font-semibold">VNDC</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-[0.32rem] text-[#80828e] font-semibold flex items-center justify-between mt-3">
            <span>Tỷ giá: </span><span>1 USDT = 25,450 VNDC</span>
        </div>
    </div>
    <div class="mt-3 mx-1.5">
        <button
            type="button"
            class="_btn-ripple_1fzeu_1 text-white font-medium w-full h-[46px] flex items-center justify-center gap-1 py-1.5 mt-3.5 rounded-full bg-default">
            <p class="text-[0.32rem] font-bold">Quy đổi</p>
        </button>
    </div>
</template>

<script setup>
import { usdt, vndc } from "@/assets/mobile/coin";
import { bgMain, bgTop, change, change2 } from "@/assets/mobile/exchange";
import { useRouter } from "vue-router";

const router = useRouter();
function navigateBack() {
    router.back();
}
</script>

<style></style>
