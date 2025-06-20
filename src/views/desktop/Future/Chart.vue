<template>
    <div class="col-span-12 grid grid-cols-12 gap-1 min-h-[556px] 3xl:min-h-[816px]">
        <div class="col-span-9 3xl:col-span-8 flex">
            <div class="flex justify-start w-full relative bg-[#131722]">
                <div id="chart_container" style="width: 100%; height: inherit"></div>
            </div>
        </div>
        <div class="col-span-3 3xl:col-span-2 flex">
            <div class="w-full h-full bg-[#111419] flex flex-col items-center justify-start self-stretch">
                <div class="flex flex-col justify-start order-book w-full">
                    <div class="flex items-center gap-3 px-2 py-2 select-none">
                        <div class="cursor-pointer" @click="orderTab = 'orderbook'">
                            <h3
                                class="text-sm font-bold"
                                :class="orderTab === 'orderbook' ? 'text-white' : 'text-gray-500'">
                                Sổ lệnh
                            </h3>
                        </div>
                        <div class="3xl:hidden cursor-pointer" @click="orderTab = 'trades'">
                            <h3
                                class="text-sm font-bold"
                                :class="orderTab === 'trades' ? 'text-white' : 'text-gray-500'">
                                Giao dịch gần đây
                            </h3>
                        </div>
                    </div>
                    <div v-if="orderTab === 'orderbook'" class="min-h-[568px] w-full">
                        <div class="flex items-center justify-between px-2 mb-1.5 select-none">
                            <div class="flex items-center gap-3">
                                <img class="opacity-100 cursor-pointer" :src="logo1" alt="" /><img
                                    class="opacity-50 cursor-pointer"
                                    :src="logo2"
                                    alt="" /><img class="opacity-50 cursor-pointer" :src="logo3" alt="" />
                            </div>
                            <div
                                class="flex items-center justify-center gap-2 bg-[#25282c] py-1 px-8 rounded-sm cursor-pointer">
                                <span class="text-xs select-none">0.01</span
                                ><svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="caret-down"
                                    class="svg-inline--fa fa-caret-down text-xs"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 320 512">
                                    <path
                                        fill="currentColor"
                                        d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"></path>
                                </svg>
                            </div>
                        </div>
                        <div class="flex items-center justify-between text-xs text-[#adb1b8] p-2 select-none">
                            <span class="flex items-center justify-start">Giá (USDT)</span
                            ><span class="flex items-center justify-center">Số lượng (BTC)</span
                            ><span class="flex items-center justify-end">Tổng số(BTC)</span>
                        </div>
                        <div class="text-white">
                            <div
                                v-for="(bid, idx) in bids"
                                :key="bid[0]"
                                class="relative w-full grid grid-cols-3 p-1 text-xs drop-shadow-2xl font-medium mb-0.5 hover:bg-[#c0d2e7]/10 duration-100 cursor-pointer">
                                <div
                                    class="absolute top-0 right-0 z-0 h-full duration-150 bg-[#01bc8d] opacity-[0.16]"
                                    :style="{
                                        width:
                                            maxBidTotal > 0
                                                ? (
                                                      bids
                                                          .slice(0, idx + 1)
                                                          .reduce((acc, cur) => acc + Number(cur[1]), 0) / maxBidTotal
                                                  ).toFixed(4) + '%'
                                                : '0%',
                                    }"></div>
                                <span class="relative z-10 flex items-center justify-start font-bold text-[#ef454a]">{{
                                    Number(bid[0]).toLocaleString(undefined, {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2,
                                    })
                                }}</span>
                                <span class="relative z-10 flex items-center justify-center">{{
                                    Number(bid[1]).toFixed(4)
                                }}</span>
                                <span class="relative z-10 flex items-center justify-end">
                                    {{
                                        bids
                                            .slice(0, idx + 1)
                                            .reduce((acc, cur) => acc + parseFloat(cur[1]), 0)
                                            .toFixed(6)
                                    }}
                                </span>
                            </div>

                            <div class="flex items-center justify-between px-1 py-1 border-y border-[#1d2433]">
                                <span class="text-xl font-bold drop-shadow-xl text-[#dc1f4e]">84,734.54</span>
                                <div>
                                    <span class="text-sm text-[#515c70] pr-1.5 cursor-help underline decoration-dashed"
                                        >Chênh lệch</span
                                    ><span class="text-sm font-bold text-[#8492a7]">1.6424</span>
                                </div>
                            </div>
                            <div
                                v-for="ask in asks"
                                :key="ask[0]"
                                class="relative w-full grid grid-cols-3 p-1 text-xs drop-shadow-2xl font-medium mb-0.5 hover:bg-[#c0d2e7]/10 duration-100 cursor-pointer">
                                <div
                                    class="absolute top-0 right-0 z-0 h-full duration-150 bg-[#ef454a] opacity-[0.16]"
                                    :style="{
                                        width:
                                            maxAskTotal > 0
                                                ? (
                                                      asks
                                                          .slice(0, idx + 1)
                                                          .reduce((acc, cur) => acc + Number(cur[1]), 0) / maxAskTotal
                                                  ).toFixed(4) + '%'
                                                : '0%',
                                    }"></div>
                                <span class="relative z-10 flex items-center justify-start font-bold text-[#20b26c]">{{
                                    Number(ask[0]).toLocaleString(undefined, {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2,
                                    })
                                }}</span>
                                <span class="relative z-10 flex items-center justify-center">{{
                                    Number(ask[1]).toFixed(4)
                                }}</span>
                                <span class="relative z-10 flex items-center justify-end">
                                    {{
                                        asks
                                            .slice(0, idx + 1)
                                            .reduce((acc, cur) => acc + parseFloat(cur[1]), 0)
                                            .toFixed(6)
                                    }}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div v-else class="flex flex-col justify-start w-full min-h-[568px]">
                        <div class="flex items-center justify-between px-2 my-1.5 select-none text-xs text-[#adb1b8]">
                            <span>Giá (USDT)</span>
                            <span>Số lượng (BTC)</span>
                            <span>Thời gian</span>
                        </div>
                        <div
                            v-for="trade in trades.slice(0, 16).reverse()"
                            :key="trade.id"
                            class="flex items-center justify-between px-2 text-xs font-medium"
                            :class="trade.isBuyerMaker ? 'text-[#dc1f4e]' : 'text-[#20b26c]'"
                            style="height: 24px">
                            <span>{{
                                Number(trade.price).toLocaleString(undefined, {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                })
                            }}</span>
                            <span class="text-white">{{ Number(trade.qty).toFixed(4) }}</span>
                            <span class="text-white">{{ new Date(trade.time).toLocaleTimeString() }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { logo1, logo2, logo3 } from "@/assets/desktop/future";

import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { computed, onMounted, onUnmounted, ref } from "vue";

let swiperInstance = null;

const goPrev = () => swiperInstance?.slidePrev();
const goNext = () => swiperInstance?.slideNext();

const bids = ref([]);
const asks = ref([]);
const trades = ref([]);
const orderTab = ref("orderbook");
let orderBookInterval = null;
let tradesInterval = null;

function fetchOrderBook() {
    fetch("https://api.binance.com/api/v3/depth?symbol=BTCUSDT&limit=8")
        .then((res) => res.json())
        .then((data) => {
            bids.value = data.bids;
            asks.value = data.asks;
        });
}

function fetchTrades() {
    fetch("https://api.binance.com/api/v3/trades?symbol=BTCUSDT&limit=16")
        .then((res) => res.json())
        .then((data) => {
            trades.value = data;
        });
}

function renderTV() {
    if (window.TradingView?.widget) {
        new window.TradingView.widget({
            autosize: true,
            symbol: "BINANCE:BTCUSDT",
            interval: "15",
            timezone: "Asia/Ho_Chi_Minh",
            theme: "dark",
            style: "1",
            locale: "vi",
            toolbar_bg: "#151821",
            enable_publishing: false,
            hide_top_toolbar: true,
            hide_legend: true,
            hide_side_toolbar: true,
            container_id: "chart_container",
            hide_volume: true,
        });
    }
}

onMounted(() => {
    if (window.TradingView?.widget) {
        renderTV();
    } else {
        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/tv.js";
        script.onload = renderTV;
        document.body.appendChild(script);
    }
});

onMounted(() => {
    // TradingView chart
    if (window.TradingView?.widget) {
        renderTV();
    } else {
        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/tv.js";
        script.onload = renderTV;
        document.body.appendChild(script);
    }
    // Order book realtime
    fetchOrderBook();
    orderBookInterval = setInterval(fetchOrderBook, 2000);
    // Trades realtime
    fetchTrades();
    tradesInterval = setInterval(fetchTrades, 2000);
});

onUnmounted(() => {
    if (orderBookInterval) clearInterval(orderBookInterval);
    if (tradesInterval) clearInterval(tradesInterval);
});

const maxAskTotal = computed(() =>
    asks.value.length
        ? asks.value.reduce((max, _, idx, arr) => {
              const sum = arr.slice(0, idx + 1).reduce((acc, cur) => acc + Number(cur[1]), 0);
              return Math.max(max, sum);
          }, 0)
        : 0
);

const maxBidTotal = computed(() =>
    bids.value.length
        ? bids.value.reduce((max, _, idx, arr) => {
              const sum = arr.slice(0, idx + 1).reduce((acc, cur) => acc + Number(cur[1]), 0);
              return Math.max(max, sum);
          }, 0)
        : 0
);
</script>

<style></style>
