<template>
    <div>
        <div class="flex justify-between p-1.5">
            <div class="flex flex-col gap-1 text-md">
                <div class="flex items-center gap-1 active:opacity-60 active:scale-95 active:duration-150">
                    <div class="mt-[0.05rem]">
                        <span role="img" aria-label="swap" class="anticon anticon-swap"
                            ><svg
                                viewBox="64 64 896 896"
                                focusable="false"
                                data-icon="swap"
                                width="1em"
                                height="1em"
                                fill="currentColor"
                                aria-hidden="true">
                                <path
                                    d="M847.9 592H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h605.2L612.9 851c-4.1 5.2-.4 13 6.3 13h72.5c4.9 0 9.5-2.2 12.6-6.1l168.8-214.1c16.5-21 1.6-51.8-25.2-51.8zM872 356H266.8l144.3-183c4.1-5.2.4-13-6.3-13h-72.5c-4.9 0-9.5 2.2-12.6 6.1L150.9 380.2c-16.5 21-1.6 51.8 25.1 51.8h696c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path></svg
                        ></span>
                    </div>
                    <div class="flex items-center gap-0.5" @click="drawerLeftVisible = true">
                        <img
                            class="pointer-events-none rounded-full"
                            width="23"
                            src="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Bitcoin-BTC-icon.png"
                            alt="" />
                        <p class="font-semibold text-[0.42rem]">BTC/USDT</p>
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="star"
                            class="svg-inline--fa fa-star text-yellow-500 text-[0.35rem]"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16.92px"
                            height="15.05px"
                            viewBox="0 0 576 512">
                            <path
                                fill="currentColor"
                                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
                        </svg>
                    </div>
                </div>
                <div class="flex items-center gap-0.5 ml-3">
                    <span class="text-[#adb0b9] text-[0.28rem] font-medium">0.000000%/00:00:00</span>
                </div>
            </div>
            <div class="flex-1 flex flex-col items-end justify-center text-md">
                <div class="flex items-center gap-0.5 text-[#27ae60]">
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="sort-down"
                        class="svg-inline--fa fa-sort-down mb-0.5"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512">
                        <path
                            fill="currentColor"
                            d="M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8l256 0c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z"></path>
                    </svg>
                    <p class="font-semibold text-[0.42rem]">$107,122.70</p>
                </div>
                <div><span class="text-[0.28rem] font-semibold text-green-500">+1.578%</span></div>
            </div>
        </div>
        <div class="mt-1">
            <div class="flex items-center justify-between px-0.5 text-[0.26rem] text-[#979aa3] font-medium">
                <div class="flex items-center gap-1 pb-0.5">
                    <div class="flex items-center">
                        <div class="px-0.5">MA</div>
                        <div class="px-0.5">EMA</div>
                        <div class="px-0.5 text-white">BOLL</div>
                    </div>
                    <div class="w-[2px] h-2 bg-[#151821]"></div>
                    <div class="flex items-center">
                        <div class="px-0.5 text-white">VOL</div>
                        <div class="px-0.5">MACD</div>
                        <div class="px-0.5">RSI</div>
                    </div>
                </div>
                <div class="flex items-center">
                    <div class="pr-1">5m</div>
                    <div class="pr-1 text-white">15m</div>
                    <div class="pr-1">30m</div>
                    <div class="px-0.5">
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="gear"
                            class="svg-inline--fa fa-gear !text-[0.35rem]"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            width="15.05px"
                            height="15.05px"
                            viewBox="0 0 512 512">
                            <path
                                fill="currentColor"
                                d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"></path>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="relative py-0.5 border-y border-[#d5dae011]">
                <div class="w-full h-[420px] bg-[#181818] rounded-md flex items-center justify-center">
                    <div id="chart_container" style="width: 100%; height: 420px"></div>
                </div>
            </div>
        </div>
        <div>
            <div class="text-[0.28rem] font-semibold p-1">
                <div class="flex items-center gap-[0.18rem] mb-[0.18rem]">
                    <div
                        class="flex-1 flex items-center bg-primary border border-secondary rounded-[4px] overflow-hidden">
                        <button
                            type="button"
                            class="_btn-ripple_1fzeu_1 text-white font-medium w-full flex justify-center p-[0.24rem] rounded-l-[4px]"
                            :class="orderType === 'long' ? 'bg-[#27ae60]' : 'bg-transparent opacity-70 border-none'"
                            @click="orderType = 'long'">
                            Mua
                        </button>
                        <div v-if="orderType === 'long'" class="_bg-buy_nv73z_1"></div>
                        <div v-else class="_bg-sell_nv73z_11"></div>
                        <button
                            type="button"
                            class="_btn-ripple_1fzeu_1 text-white font-medium w-full flex justify-center p-[0.24rem] rounded-r-[4px]"
                            :class="orderType === 'short' ? 'bg-[#f86655]' : 'bg-transparent opacity-70 border-none'"
                            @click="orderType = 'short'">
                            Bán
                        </button>
                    </div>
                    <div class="flex-1 flex items-center gap-[0.14rem]">
                        <button
                            type="button"
                            class="_btn-ripple_1fzeu_1 text-white font-medium flex bg-primary border border-secondary p-[0.24rem] rounded-[4px]">
                            50x</button
                        ><button
                            type="button"
                            class="_btn-ripple_1fzeu_1 text-white font-medium flex-1 flex justify-center gap-[0.18rem] bg-primary border border-secondary p-[0.24rem] rounded-[4px]">
                            <span>Kích hoạt</span
                            ><svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="sort-down"
                                class="svg-inline--fa fa-sort-down"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                width="7.52px"
                                height="12.52px"
                                viewBox="0 0 320 512">
                                <path
                                    fill="currentColor"
                                    d="M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8l256 0c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="flex items-center gap-[0.18rem] mb-[0.18rem]">
                    <div class="flex-1 flex items-center bg-primary border border-secondary p-[0.24rem] rounded-sm">
                        <div class="w-full flex justify-between">
                            <span class="text-[#fff]">Giá thị trường</span
                            ><span class="text-[#9ea5b7] font-medium">VNDC</span>
                        </div>
                    </div>
                    <div class="flex-1 flex items-center bg-primary border border-secondary p-[0.24rem] rounded-sm">
                        <div class="w-full flex justify-between">
                            <span>TP</span
                            ><span
                                role="img"
                                aria-label="plus-circle"
                                class="anticon anticon-plus-circle text-[#9ea5b7] font-medium"
                                ><svg
                                    viewBox="64 64 896 896"
                                    focusable="false"
                                    data-icon="plus-circle"
                                    width="1em"
                                    height="1em"
                                    fill="currentColor"
                                    aria-hidden="true">
                                    <path
                                        d="M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"></path>
                                    <path
                                        d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path></svg
                            ></span>
                        </div>
                    </div>
                </div>
                <div class="flex items-center gap-[0.18rem] mb-[0.18rem]">
                    <div class="flex-1 flex items-center bg-primary border border-secondary p-[0.24rem] rounded-sm">
                        <div class="w-full flex justify-between">
                            <span class="text-[#bcbfd2]">Khối lượng</span
                            ><span class="text-[#9ea5b7] font-medium">VNDC</span>
                        </div>
                    </div>
                    <div class="flex-1 flex items-center bg-primary border border-secondary p-[0.24rem] rounded-sm">
                        <div class="w-full flex justify-between">
                            <span>SL</span
                            ><span
                                role="img"
                                aria-label="plus-circle"
                                class="anticon anticon-plus-circle text-[#9ea5b7] font-medium"
                                ><svg
                                    viewBox="64 64 896 896"
                                    focusable="false"
                                    data-icon="plus-circle"
                                    width="1em"
                                    height="1em"
                                    fill="currentColor"
                                    aria-hidden="true">
                                    <path
                                        d="M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"></path>
                                    <path
                                        d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path></svg
                            ></span>
                        </div>
                    </div>
                </div>
                <div class="flex items-center gap-[0.18rem]">
                    <div class="flex-1 flex items-center font-medium">
                        <div class="w-full flex flex-col items-center justify-between p-0.5">
                            <div class="w-full flex items-center justify-between mb-0.5">
                                <span class="text-[#bcbfd2]">Kí quỹ</span><span class="text-[#bcbfd2]">0.00</span>
                            </div>
                            <div class="w-full flex items-center justify-between">
                                <div class="flex items-center gap-0.5 text-[#bcbfd2]">
                                    <span>Khả dụng </span
                                    ><span
                                        role="img"
                                        aria-label="plus-circle"
                                        class="anticon anticon-plus-circle text-default font-medium mt-0.5"
                                        ><svg
                                            viewBox="64 64 896 896"
                                            focusable="false"
                                            data-icon="plus-circle"
                                            width="1em"
                                            height="1em"
                                            fill="currentColor"
                                            aria-hidden="true">
                                            <path
                                                d="M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"></path>
                                            <path
                                                d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path></svg
                                    ></span>
                                </div>
                                <span class="text-[#bcbfd2]">0.57 USDT</span>
                            </div>
                        </div>
                    </div>
                    <button
                        type="button"
                        class="_btn-ripple_1fzeu_1 text-white font-medium flex-1 flex items-stretch rounded-sm border border-[#d5dae011]"
                        :class="orderType === 'long' ? 'bg-[#27ae60]' : 'bg-[#f86655]'">
                        <div class="w-full flex flex-col items-center justify-between p-0.5">
                            <span>{{ orderType === "long" ? "Mua/Long" : "Bán/Short" }}</span>
                            <span>107,087.24</span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
        <div class="px-1 border-t border-secondary">
            <div class="px-1 border-t border-secondary">
                <a-tabs
                    v-model:activeKey="activeTab"
                    class="ant-tabs-mobile css-1v613y0"
                    :animated="true"
                    @change="onTabChange"
                    id="markets-tab">
                    <a-tab-pane key="1" tab="Vị thế (0)">
                        <div class="flex flex-col min-h-[420px] pb-5 items-center justify-center">
                            <a-empty
                                :image="empty"
                                description="Chưa có dữ liệu"
                                class="!text-[0.32rem] !text-[#6a6a6a]" />
                        </div>
                    </a-tab-pane>
                    <a-tab-pane key="2" tab="Lệnh chờ (0)">
                        <div class="flex flex-col min-h-[420px] pb-5 items-center justify-center">
                            <a-empty
                                :image="empty"
                                description="Chưa có dữ liệu"
                                class="!text-[0.32rem] !text-[#6a6a6a]" />
                        </div>
                    </a-tab-pane>
                    <a-tab-pane key="3" tab="Lịch sử lệnh">
                        <div class="flex flex-col min-h-[420px] pb-5 items-center justify-center">
                            <a-empty
                                :image="empty"
                                description="Chưa có dữ liệu"
                                class="!text-[0.32rem] !text-[#6a6a6a]" />
                        </div>
                    </a-tab-pane>
                    <a-tab-pane key="4" tab="Lịch sử giao dịch">
                        <div class="flex flex-col min-h-[420px] pb-5 items-center justify-center">
                            <a-empty
                                :image="empty"
                                description="Chưa có dữ liệu"
                                class="!text-[0.32rem] !text-[#6a6a6a]" />
                        </div>
                    </a-tab-pane>
                </a-tabs>
            </div>
        </div>
    </div>
    <Market :drawerLeftVisible="drawerLeftVisible" @update:drawerLeftVisible="drawerLeftVisible = $event" />
</template>

<script setup>
import { empty } from "@/assets/mobile/trade";
import { onMounted, onUnmounted, ref } from "vue";
import Market from "../Trade/Market.vue";

const price = ref(null);
const percent = ref(null);
const activeTab = ref("1");
const orderType = ref("long");

let intervalId = null;

const drawerLeftVisible = ref(false);

function onTabChange(key) {
    activeTab.value = key;
}

async function fetchTicker() {
    try {
        const res = await fetch("https://api.binance.com/api/v3/ticker/24hr?symbol=BTCUSDT");
        const data = await res.json();
        price.value = Number(data.lastPrice).toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });
        percent.value = (parseFloat(data.priceChangePercent) || 0).toFixed(3);
    } catch (e) {
        // Xử lý lỗi nếu cần
    }
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
    fetchTicker();
    intervalId = setInterval(fetchTicker, 3000);

    // Đảm bảo chỉ render TradingView 1 lần khi mounted
    if (window.TradingView?.widget) {
        renderTV();
    } else {
        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/tv.js";
        script.onload = renderTV;
        document.body.appendChild(script);
    }
});

onUnmounted(() => {
    if (intervalId) clearInterval(intervalId);
});
</script>

<style scoped>
._bg-buy_nv73z_1 {
    width: 0.26rem;
    height: 0.26rem;
    overflow: hidden;
    transform: scaleY(2.3);
    border-width: 0.26rem;
    border-style: solid;
    border-color: #27ae60 transparent transparent #27ae60;
}

._bg-sell_nv73z_11 {
    width: 0.26rem;
    height: 0.26rem;
    overflow: hidden;
    transform: scaleY(2.3);
    border-width: 0.26rem;
    border-style: solid;
    border-color: transparent #e74c3c #e74c3c transparent;
}

:deep(.ant-tabs .ant-tabs-nav::before) {
    border-bottom: none !important;
}

/* Đổi màu text cho tab chưa active */
:deep(.ant-tabs .ant-tabs-tab .ant-tabs-tab-btn) {
    color: #a8aab6 !important;
}

/* Đổi màu text và border bottom cho tab active */
:deep(.ant-tabs .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn) {
    color: #01bc8d !important;
}
:deep(.ant-tabs .ant-tabs-tab.ant-tabs-tab-active) {
    border-bottom: 2px solid #01bc8d !important;
    z-index: 100 !important;
}
</style>
