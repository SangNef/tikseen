<template>
    <div>
        <div class="bg-primary border border-secondary py-0.5 rounded-md">
            <swiper class="tab-swiper" :slides-per-view="'auto'" :space-between="16" :free-mode="true" ref="swiperRef">
                <swiper-slide v-for="(tab, idx) in tabs" :key="tab.id" class="!w-auto">
                    <button
                        class="flex items-center gap-0.5 text-[0.36rem] font-bold px-[0.2rem] py-[0.1rem] whitespace-nowrap"
                        :class="activeTab === idx ? 'text-[#f6f6f6]' : 'text-[#717171]'"
                        @click="onTabClick(idx)">
                        {{ tab.label }}
                        <span v-if="tab.label === 'Phổ biến'" class="text-[0.28rem]">🔥</span>
                    </button>
                </swiper-slide>
            </swiper>
            <div class="px-1.5 py-1">
                <div class="grid grid-cols-12 justify-between text-[#5c5c5c] text-[0.26rem] font-medium">
                    <div class="col-span-6 flex items-center" style="gap: 6px">
                        <span class="whitespace-nowrap">Coin</span>
                    </div>
                    <div class="col-span-6 grid grid-cols-12 gap-1">
                        <div class="col-span-6 flex items-center justify-end" style="gap: 6px">
                            <span class="whitespace-nowrap">Giá USDT</span>
                        </div>
                        <div class="col-span-6 flex items-center justify-end" style="gap: 6px">
                            <span class="whitespace-nowrap">Thay đổi 24H</span>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col items-stretch">
                    <div
                        v-for="coin in displayedCoins"
                        :key="coin.code"
                        class="grid grid-cols-12 justify-between py-1 cursor-pointer">
                        <div class="col-span-6 flex items-center gap-1">
                            <div class="flex items-start gap-1">
                                <img class="w-2.5 rounded-full" :src="coin.image" :alt="coin.code" loading="lazy" />
                                <div class="flex flex-col">
                                    <span class="text-[0.3rem] font-semibold">{{ coin.code }}</span>
                                    <span class="max-w-[120px] text-[0.26rem] text-[#6a6a6a] font-medium line-clamp-1">
                                        {{ coin.name }}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-6 grid grid-cols-12 gap-1">
                            <div class="col-span-6 flex justify-end">
                                <div class="flex flex-col items-end">
                                    <span class="text-[0.32rem] font-bold transition-all duration-300">{{
                                        coin.usdt.toLocaleString()
                                    }}</span>
                                    <span class="text-[0.26rem] text-[#6a6a6a] font-medium">
                                        ${{ (coin.usdt * 1000).toLocaleString() }}K
                                    </span>
                                </div>
                            </div>
                            <div class="col-span-6 flex justify-end">
                                <div class="flex items-center">
                                    <div
                                        class="w-7 min-h-[28px] rounded-sm duration-150 ant-flex css-1v613y0 ant-flex-align-center ant-flex-justify-center"
                                        :class="coin.change24h >= 0 ? 'bg-[#00c189]' : 'bg-[#e24c4b]'">
                                        <span class="text-[0.28rem] font-bold text-white">
                                            {{ coin.change24h >= 0 ? "+" : "" }}{{ coin.change24h }}%
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                v-if="filteredCoins.length > 5"
                class="text-[#b6b6b6] text-[0.32rem] font-medium py-0.5 active:opacity-60 duration-150 flex items-center justify-center cursor-pointer"
                style="border-top: 1px solid rgb(29, 29, 29); gap: 6px"
                @click="toggleExpand">
                {{ expanded ? "Thu gọn" : "Mở rộng" }}
                <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    role="img"
                    aria-label="arrow-down"
                    focusable="false"
                    data-icon="arrow-down"
                    aria-hidden="true"
                    preserveAspectRatio="xMidYMid meet"
                    :class="[
                        'rv-icon rv-icon-arrow-down text-[#373737] duration-300',
                        expanded ? 'rotate-180' : 'rotate-0',
                    ]">
                    <path
                        d="M494.094 733.426a41.472 41.472 0 01-20.023-11.126L140.16 388.388c-16.272-16.271-16.272-42.653 0-58.925 16.271-16.272 42.653-16.272 58.925 0L503.66 634.037 808.186 329.51c16.271-16.272 42.653-16.272 58.925 0s16.272 42.654 0 58.926L533.2 722.347c-10.607 10.607-25.508 14.3-39.106 11.08z"
                        fill-rule="evenodd"></path>
                </svg>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { coins } from "@/assets/mobile/coin";

const tabs = [
    { id: "favorite", label: "Yêu thích" },
    { id: "popular", label: "Phổ biến" },
    { id: "up", label: "Tăng giá" },
    { id: "new", label: "Mới" },
    { id: "volume", label: "Khối lượng" },
    { id: "down", label: "Giảm giá" },
];
const activeTab = ref(0);
const expanded = ref(false);
const swiperRef = ref(null);

function onTabClick(idx) {
    activeTab.value = idx;
    expanded.value = false;
}

const filteredCoins = computed(() => coins.filter((coin) => coin.tabs.includes(tabs[activeTab.value].id)));

const displayedCoins = computed(() => (expanded.value ? filteredCoins.value : filteredCoins.value.slice(0, 5)));

function toggleExpand() {
    expanded.value = !expanded.value;
}
</script>

<style scoped>
.tab-swiper {
    padding: 0 0.25rem 0.25rem 0.25rem;
    border-bottom: 1px solid rgb(29, 29, 29);
}
</style>
