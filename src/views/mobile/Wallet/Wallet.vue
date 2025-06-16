<template>
    <div>
        <div class="px-1.5 pt-2 pb-1.5 flex items-end justify-between font-semibold">
            <h1 class="text-[0.55rem] leading-[35.48px]">Tài sản của bạn</h1>
            <div class="flex items-center gap-1.5 text-[0.32rem] font-semibold">
                <span class="text-[#6d6d6d] uppercase">vndc</span><span class="uppercase text-default">usdt</span>
            </div>
        </div>
        <div class="bg-primary pt-2 px-1.5 border-t border-[#222] rounded-t-xl">
            <div class="px-0.5">
                <div class="text-[#6d6d6d] !mb-1 flex items-center" style="gap: 5px">
                    <span class="text-[0.42rem] font-semibold">Tổng tài sản</span
                    ><span role="img" aria-label="eye-invisible" class="anticon anticon-eye-invisible text-[0.38rem]"
                        ><svg
                            viewBox="64 64 896 896"
                            focusable="false"
                            data-icon="eye-invisible"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            aria-hidden="true">
                            <path
                                d="M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"></path>
                            <path
                                d="M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"></path></svg
                    ></span>
                </div>
                <div class="flex items-center" style="gap: 3px">
                    <span class="text-[0.58rem] font-bold leading-[37.41px]">0.36</span
                    ><span class="text-[0.52rem] font-semibold leading-[37.41px]">$</span>
                </div>
                <div class="text-[#6d6d6d] text-[0.36rem] font-medium flex item-center leading-[23.22px]">
                    ≈ <span class="text-[0.36rem] ml-0.5">VND</span>9.360
                </div>
            </div>
            <div class="!mt-2 flex item-center" style="gap: 8px">
                <button
                    type="button"
                    class="_btn-ripple_1fzeu_1 text-white font-medium w-full h-4 flex items-center justify-center rounded-full bg-default border border-default">
                    <span class="text-[0.36rem] font-semibold">Nạp</span></button
                ><router-link
                    to="/withdrawal"
                    type="button"
                    class="_btn-ripple_1fzeu_1 text-white font-medium w-full h-4 flex items-center justify-center rounded-full bg-[#1b1b1b] border border-[#151515]">
                    <span class="text-[0.36rem] font-semibold">Rút</span></router-link
                ><router-link
                    to="/tx-history?type=deposit"
                    type="button"
                    class="_btn-ripple_1fzeu_1 text-white font-medium w-full h-4 flex items-center justify-center rounded-full bg-[#1b1b1b] border border-[#151515]">
                    <span class="text-[0.36rem] font-semibold">Lịch sử</span>
                </router-link>
            </div>
            <div class="!mt-2.5 !mb-2 flex items-start justify-around" style="gap: 8px">
                <router-link
                    to="/exchange"
                    class="w-full active:opacity-60 duration-150 flex items-center flex-col"
                    style="gap: 6px">
                    <div
                        class="w-5 h-5 rounded-full bg-[#1b1b1b] border border-[#151515] flex items-center justify-center">
                        <img
                            class="w-[0.675rem]"
                            src="data:image/png;base64,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"
                            alt="" />
                    </div>
                    <span class="text-[0.34rem] text-center font-medium text-[#9d9d9d]">Quy đổi tiền điện tử</span>
                </router-link>
                <router-link
                    to="/overnight-interest"
                    class="w-full active:opacity-60 duration-150 flex items-center flex-col"
                    style="gap: 6px">
                    <div
                        class="w-5 h-5 rounded-full bg-[#1b1b1b] border border-[#151515] flex items-center justify-center">
                        <img
                            class="w-[0.675rem]"
                            src="data:image/png;base64,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"
                            alt="" />
                    </div>
                    <span class="text-[0.34rem] text-center font-medium text-[#9d9d9d]">Earn</span>
                </router-link>
                <router-link
                    to="/red-envelope"
                    class="w-full active:opacity-60 duration-150 flex items-center flex-col"
                    style="gap: 6px">
                    <div
                        class="w-5 h-5 rounded-full bg-[#1b1b1b] border border-[#151515] flex items-center justify-center">
                        <img
                            class="w-[0.675rem]"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAAAsSAAALEgHS3X78AAADRElEQVR4nO2bPW7bMBhAn5t2bQ20e9O9QDx3iXgD9wY+QgoIyFh3DBCg6QnqnKC5ge0ls30DBVkbIOlapOwgGrbpCJ9MUrIDfA8QAsnkJ+aBovinjrUWpZoXuy7AvqOCBFSQgAoSUEECKkhABQmoIAEVJKCCBF62daPO+LwL9IEMOATugRlwZU0+q8jTc3l6QBcogIk1+ajxAi/K0MZYrDM+7wMj4E1FkjlwYk0+cekzYAgcV6S/AfpVYlPSuCAn51fN5D8oa9bXGmkfgKxpSY0Kco9VwWbNmVJdO6qYA0f+NWvyXljp6tF0Iz1gXc4c+GBNnlmTdwBDKQuw3gHuN2NN3nEiPrgYC45cDW2MpgX5hc+syYvFiTX5xJo8Ay7hH+sHl07kZCV9AZx4MZ91DVplak1+/9QP1uSDOtfc9UnSUgloP0igaUGrNebYNdpRuC5AazQtaOKdj2KCOcF+jKuYmOI9d/CanwMX7voKj+P18wPjhTt0+VZjTV0j3xh71FF89M4PpAx731EcuGPbDt/TBRmfrZ1bc5oiLJR9qRGBj3foYHVIveHAPnDsji7lI7oVoY2031l7DgxDMoUKqhqV7zNBZU41H/SFcm4nBu8thv8W25Ye8D0yRjJBMzb7PLGkjheEDjUEUtWgC9aHFSmYROaPHtZAOkH+RFYKkvSvYgl9xKZJS9EOQWWO6Qc9BObdBTcE9t1CH7EZ5eCx7/6mwO+Zf0sUt6Ac8Qe1kTFt0D2R0xcevqBhwtjBpBjNLxb1YLkYWAYfn70GXtWM89s7f1cz319rTv/UKU8IKd5iFyzfOFPKldMFH4G3gXE/1Ux3B1zXLM/WaEdRQAUJqCABFSSgggRUkIAKElBBAipIQAUJqCABFSSgggSa3id9G5H3roV7iDQqyJrTW2r+A09sXriuSNoq+ogJqCCB1IIOSbRgF0HS+6dogwqWU5zvKVdEM7ZfRUixijFifREzevdZikn7AfDTu3bDxh7ExumyucL7mchNnqn2KM5oZvk5hugJe0jXBmWsf0Oxa6ZsfgYRROpdrgOWH8ztgoLykUq2d7qVD+qeM9oPElBBAipIQAUJqCABFSSgggRUkIAKElBBAv8BxLjcrecbsQUAAAAASUVORK5CYII="
                            alt="" />
                    </div>
                    <span class="text-[0.34rem] text-center font-medium text-[#9d9d9d]">Bao lì xì</span>
                </router-link>
            </div>
        </div>
        <div class="pt-2 pb-1 border-y-4 border-[#020202]">
            <Swiper
                :modules="[Autoplay]"
                :slides-per-view="1"
                :space-between="10"
                :loop="true"
                :autoplay="{ delay: 3000, disableOnInteraction: false }"
                class="swiper-wallet-earn rounded-md"
                @slideChange="onSlideChange"
                @swiper="onSwiper">
                <SwiperSlide v-for="(coin, idx) in coins" :key="idx">
                    <div class="text-[0.32rem] active:opacity-60 duration-150 flex items-center !px-2">
                        <div class="font-semibold flex items-center" style="gap: 8px">
                            <img class="w-1.5" :src="coin.icon" alt="" />
                            <span class="text-[#e1e1e1] font-semibold">{{ coin.name }}</span>
                            <div class="text-[0.26rem] text-default bg-[#0c221f] px-0.5 py-[2px] rounded-sm">
                                {{ coin.tag }}
                            </div>
                        </div>
                        <div class="font-semibold flex items-center" style="gap: 8px">
                            <span class="text-[#686868]">MAX</span>
                            <span class="text-[#686868]">APY</span>
                            <span class="text-default">{{ coin.apy }}</span>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div class="!mt-1 flex items-center justify-center" style="gap: 8px">
                <div
                    v-for="i in coins.length"
                    :key="i"
                    :class="[
                        'rounded-full duration-150 h-[2.5px]',
                        currentIndex === i - 1 ? 'w-[12px] bg-default' : 'w-0.5 bg-[#313131]',
                    ]"></div>
            </div>
        </div>
        <div class="p-1.5 pb-12">
            <div class="text-[#6d6d6d] py-[1.6px]">
                <span class="text-[0.36rem] font-semibold">Danh sách ví</span>
            </div>
            <div class="mt-1">
                <router-link
                    v-for="item in walletList"
                    :key="item.route"
                    class="flex items-center justify-between py-1 active:opacity-60 active:duration-150"
                    :to="item.route"
                    data-discover="true">
                    <div class="flex items-center" style="gap: 16px">
                        <div class="w-4 h-4 bg-[#1b1b1b] rounded-full flex items-center justify-center">
                            <img class="w-2" :src="item.icon" alt="" />
                        </div>
                        <div class="flex items-start flex-col">
                            <h3 class="text-[0.36rem] font-medium leading-1.5">{{ item.name }}</h3>
                            <span v-if="item.desc" class="text-[0.3rem] text-gray-500 leading-1.5">{{
                                item.desc
                            }}</span>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <span class="text-[0.32rem]">≈</span>
                        <div class="ml-0.5 font-medium flex items-end" style="gap: 6px">
                            <span class="text-[0.36rem]">{{ item.amount }}</span>
                            <span class="text-[0.34rem]">{{ item.currency }}</span>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { btc, usdt } from '@/assets/coin';
import { wallet, future } from '@/assets/wallet';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const coins = [
    {
        icon: btc,
        name: 'Bitcoin',
        tag: 'Tăng cường kép',
        apy: '905.03%',
    },
    {
        icon: usdt,
        name: 'USDT',
        tag: 'Cho vay tiền điện tử Pro',
        apy: '628.54%',
    },
    {
        icon: usdt,
        name: 'USDT',
        tag: 'Tiết kiệm linh hoạt',
        apy: '22.86%',
    },
];

const walletList = [
    {
        icon: wallet,
        name: 'Ví chính',
        desc: 'Mặc định',
        amount: 0.57,
        currency: '$',
        route: '/main-wallet',
    },
    {
        icon: future,
        name: 'Ví Futures',
        desc: '',
        amount: 0.0,
        currency: '$',
        route: '/future-wallet',
    },
];

const currentIndex = ref(0);
let swiperInstance = null;

function onSwiper(swiper) {
    swiperInstance = swiper;
    currentIndex.value = swiper.realIndex;
}
function onSlideChange(swiper) {
    currentIndex.value = swiper.realIndex;
}
</script>

<style></style>
