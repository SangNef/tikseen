<template>
    <div class="col-span-3 3xl:col-span-2 flex">
        <div class="w-full bg-[#171b25] flex flex-col justify-start">
            <div class="w-full flex flex-col items-stretch justify-center border-b border-gray-900 p-5">
                <div class="flex items-center justify-between">
                    <div class="text-lg font-semibold">Ví chính</div>
                    <div class="flex items-center gap-3">
                        <div
                            class="w-7 h-7 flex items-center justify-center rounded-full shadow-2xl bg-[#2b3247] border border-gray-800 cursor-pointer hover:opacity-80 active:opacity-30 duration-300">
                            <span class="select-none text-sm">!</span>
                        </div>
                    </div>
                </div>
                <div class="text-sm mt-6 font-semibold">
                    <div class="flex items-center justify-between mb-3.5">
                        <div class="flex items-center gap-2 cursor-pointer select-none">
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="wallet"
                                class="svg-inline--fa fa-wallet text-base text-[#69717f]"
                                role="img"
                                width="16"
                                height="16"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512">
                                <path
                                    fill="currentColor"
                                    d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L80 128c-8.8 0-16-7.2-16-16s7.2-16 16-16l368 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L64 32zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path></svg
                            ><span class="text-[#464f5f]">Số dư</span>
                        </div>
                        <div class="flex items-center gap-1"><span>0.6723 USDT</span></div>
                    </div>
                    <div class="flex items-center justify-between mb-3.5">
                        <div class="flex items-center gap-2">
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="clock"
                                class="svg-inline--fa fa-clock text-base text-[#69717f]"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 512 512">
                                <path
                                    fill="currentColor"
                                    d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"></path></svg
                            ><span class="text-[#464f5f]">Thời gian</span>
                        </div>
                        <span class="text-yellow-800"><span>42</span> giây</span>
                    </div>
                    <div class="flex items-center justify-between mb-3.5">
                        <div class="flex items-center gap-2">
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="cube"
                                class="svg-inline--fa fa-cube text-base text-[#69717f]"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 512 512">
                                <path
                                    fill="currentColor"
                                    d="M234.5 5.7c13.9-5 29.1-5 43.1 0l192 68.6C495 83.4 512 107.5 512 134.6l0 242.9c0 27-17 51.2-42.5 60.3l-192 68.6c-13.9 5-29.1 5-43.1 0l-192-68.6C17 428.6 0 404.5 0 377.4L0 134.6c0-27 17-51.2 42.5-60.3l192-68.6zM256 66L82.3 128 256 190l173.7-62L256 66zm32 368.6l160-57.1 0-188L288 246.6l0 188z"></path></svg
                            ><span class="text-[#464f5f]">Block</span>
                        </div>
                        <span class="text-white">#1950171045</span>
                    </div>
                </div>
            </div>
            <div class="w-full flex flex-col items-stretch justify-center p-5">
                <div class="flex items-center justify-between">
                    <div class="text-lg font-semibold">Đặt lệnh</div>
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="feather-pointed"
                        class="svg-inline--fa fa-feather-pointed text-xl text-gray-400"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 512 512">
                        <path
                            fill="currentColor"
                            d="M278.5 215.6L23 471c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l74.8-74.8c7.4 4.6 15.3 8.2 23.8 10.5C200.3 452.8 270 454.5 338 409.4c12.2-8.1 5.8-25.4-8.8-25.4l-16.1 0c-5.1 0-9.2-4.1-9.2-9.2c0-4.1 2.7-7.6 6.5-8.8l97.7-29.3c3.4-1 6.4-3.1 8.4-6.1c4.4-6.4 8.6-12.9 12.6-19.6c6.2-10.3-1.5-23-13.5-23l-38.6 0c-5.1 0-9.2-4.1-9.2-9.2c0-4.1 2.7-7.6 6.5-8.8l80.9-24.3c4.6-1.4 8.4-4.8 10.2-9.3C494.5 163 507.8 86.1 511.9 36.8c.8-9.9-3-19.6-10-26.6s-16.7-10.8-26.6-10C391.5 7 228.5 40.5 137.4 131.6C57.3 211.7 56.7 302.3 71.3 356.4c2.1 7.9 12 9.6 17.8 3.8L253.6 195.8c6.2-6.2 16.4-6.2 22.6 0c5.4 5.4 6.1 13.6 2.2 19.8z"></path>
                    </svg>
                </div>
                <div class="flex items-center justify-between gap-3 my-6">
                    <button
                        type="button"
                        class="w-full flex items-center justify-center p-3 rounded-md border duration-300 cursor-pointer font-semibold text-sm select-none"
                        :class="
                            isLong
                                ? 'bg-[#0ce28a0f] border-[#0fe28a] text-[#0fe28a]'
                                : 'bg-[#1c202a] border-[#1c202a] text-[#515c70]'
                        "
                        @click="isLong = true">
                        Long
                    </button>
                    <button
                        type="button"
                        class="w-full flex items-center justify-center p-3 rounded-md border duration-300 cursor-pointer font-semibold text-sm select-none"
                        :class="
                            !isLong
                                ? 'bg-[#dc1f4e0f] border-[#e1155e] text-[#e1155e]'
                                : 'bg-[#1c202a] border-[#1c202a] text-[#515c70]'
                        "
                        @click="isLong = false">
                        Short
                    </button>
                </div>
                <div class="w-full bg-[#090d17] rounded-md pt-3">
                    <div class="text-[#444f54] mb-1.5 flex items-center justify-between text-xs px-3">
                        <div class="font-medium">Khối lượng</div>
                        <div class="flex gap-2">
                            <span class="font-medium select-none cursor-pointer">Tối đa </span
                            ><span class="text-gray-300">0.67 USDT</span>
                        </div>
                    </div>
                    <input
                        type="number"
                        placeholder="0"
                        class="outline-none bg-transparent pl-3 pb-3 w-full font-semibold text-white text-base rounded-md border-b border-transparent focus:border-[#01bc8d]"
                        value="0.6723" />
                </div>
                <div id="slider-place-order" class="my-3 px-1.5">
                    <a-slider
                        v-model:value="sliderValue"
                        :marks="sliderMarks"
                        :step="null"
                        :min="0"
                        :max="100"
                        :tooltip-visible="false" />
                </div>
                <div
                    class="hover:opacity-80 active:opacity-30 duration-300 p-3.5 rounded-md text-center shadow-2xl bg-[#999] opacity-70 cursor-not-allowed">
                    <span class="whitespace-nowrap select-none font-semibold">Mua/Long</span>
                </div>
                <div class="mt-6">
                    <div style="display: contents">
                        <div style="display: contents">
                            <div style="width: 100%; height: 450px">
                                <iframe
                                    scrolling="no"
                                    allowtransparency="true"
                                    frameborder="0"
                                    src="https://www.tradingview-widget.com/embed-widget/technical-analysis/?locale=vi_VN#%7B%22interval%22%3A%221m%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A450%2C%22isTransparent%22%3Atrue%2C%22symbol%22%3A%22BTCUSDT%22%2C%22showIntervalTabs%22%3Atrue%2C%22colorTheme%22%3A%22dark%22%2C%22utm_source%22%3A%22desktop.coincex.io%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22technical-analysis%22%2C%22page-uri%22%3A%22desktop.coincex.io%2Fbinary-options%22%7D"
                                    title="technical analysis TradingView widget"
                                    lang="en"
                                    style="
                                        user-select: none;
                                        box-sizing: border-box;
                                        display: block;
                                        height: 100%;
                                        width: 100%;
                                    "></iframe>
                            </div>
                        </div>
                        <div
                            class="tradingview-widget-copyright"
                            style="
                                font-size: 13px;
                                line-height: 32px;
                                text-align: center;
                                font-family: 'Trebuchet MS', Arial, sans-serif;
                                color: rgb(157, 178, 189);
                            ">
                            <a
                                href="https://www.tradingview.com/symbols/BTCUSDT/technicals/"
                                target="_blank"
                                style="text-decoration: none; color: rgb(157, 178, 189)"
                                ><span style="color: rgb(41, 98, 255)">Technical Analysis for BTCUSDT </span></a
                            >By TradingView
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
const isLong = ref(true);

const sliderValue = ref(100);
const sliderMarks = {
    0: "0%",
    25: "25%",
    50: "50%",
    75: "75%",
    100: "100%",
};
</script>

<style>
.ant-slider {
    box-sizing: border-box !important;
    margin: 11px 5px !important;
    padding: 0 !important;
    color: rgba(0, 0, 0, 0.88) !important;
    font-size: 14px !important;
    list-style: none !important;
    position: relative !important;
    cursor: pointer !important;
    touch-action: none !important;
}

.ant-slider-mark-text {
    font-size: 0.75rem !important;
    font-weight: bold !important;
}

.ant-slider-with-marks {
    margin-bottom: 30px !important;
}

.ant-slider-horizontal {
    margin-bottom: 30px !important;
    padding-block: 4px !important;
    height: 12px !important;
}

.ant-slider-horizontal .ant-slider-rail {
    background: rgba(153, 153, 153, 0.6) !important;
    height: 4px !important;
    width: 100% !important;
    border-radius: 2px !important;
    transition: background-color 0.2s !important;
}

.ant-slider .ant-slider-track {
    left: 0% !important;
    background: rgb(1, 188, 141) !important;
    margin-top: 1px !important;
    height: 4px !important;
    border-radius: 2px !important;
    transition: background-color 0.2s !important;
}

.ant-slider .ant-slider-handle {
    transform: translateX(-50%) !important;
    background: rgb(255, 255, 255) !important;
    inset-block-start: 1px !important;
    position: absolute !important;
    width: 10px !important;
    height: 10px !important;
    outline: none !important;
    user-select: none !important;
}

.ant-slider-handle:focus::before {
    inset-inline-start: -3.5px !important;
    inset-block-start: -3.5px !important;
    width: 17px !important;
    height: 17px !important;
    background-color: transparent !important;
    content: "";
}

.ant-slider-handle:focus:after {
    box-shadow: 0 0 0 4px #01bc8d !important;
}

.ant-slider-step {
    inset-inline-start: 0 !important;
    top: 4px !important;
    width: 100% !important;
    height: 4px !important;
    position: absolute !important;
    background: transparent !important;
    pointer-events: none !important;
}

.ant-slider-dot {
    box-sizing: content-box !important;
    position: absolute !important;
    transform: translate(-50%) rotate(45deg) !important;
    background-color: #2b3247 !important;
    width: 6px !important;
    height: 6px !important;
    border-radius: 2px !important;
    border: 2px solid rgb(71, 77, 87) !important;
    overflow: visible !important;
    cursor: pointer !important;
}

.ant-slider-dot-active {
    background-color: #fff !important;
    box-sizing: content-box !important;
    position: absolute !important;
    transform: translate(-50%) rotate(45deg) !important;
    width: 6px !important;
    height: 6px !important;
    border-radius: 2px !important;
    border: 2px solid #01bc8dc9 !important;
    overflow: visible !important;
    cursor: pointer !important;
}

.ant-slider-mark {
    inset-inline-start: 0 !important;
    top: 15px !important;
    width: 100% !important;
    position: absolute !important;
    font-size: 14px !important;
}

.ant-slider-mark-text {
    transform: translateX(-50%) !important;
    color: rgb(156, 159, 178) !important;
}

.ant-slider-mark-text:nth-child(1) {
    left: 0% !important;
}
.ant-slider-mark-text:nth-child(2) {
    left: 25% !important;
}
.ant-slider-mark-text:nth-child(3) {
    left: 50% !important;
}
.ant-slider-mark-text:nth-child(4) {
    left: 75% !important;
}
.ant-slider-mark-text:nth-child(5) {
    left: 100% !important;
}
</style>
