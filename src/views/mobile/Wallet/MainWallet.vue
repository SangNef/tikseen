<template>
    <div>
        <Header title="Ví chính" />
        <div class="pt-6">
            <div class="p-1.5">
                <h1 class="text-[#6d6f7b] text-[0.32rem]">Giá trị tài sản</h1>
                <div class="text-gray-100 !py-1 font-semibold text-[0.65rem] flex items-center" style="gap: 12px">
                    <span>≈ </span>
                    <div class="flex items-center" style="gap: 6px">
                        <span>0.7772</span><span class="text-[0.52rem]">$</span>
                    </div>
                </div>
                <p class="text-[#a5a9ac] text-[0.32rem]">
                    Phân tích lời lỗ (PNL): <span class="text-green-600">+0.00%</span>
                </p>
                <div class="!mt-2.5 !pb-1 flex items-center" style="gap: 12px">
                    <router-link
                        to="/deposit?redirect=main-wallet"
                        type="button"
                        class="_btn-ripple_1fzeu_1 text-white font-medium w-full flex items-center justify-center p-1 bg-default border border-secondary rounded-full">
                        <p class="text-[0.3rem] font-bold text-white">Nạp</p></router-link
                    ><router-link
                        to="/withdrawal?redirect=main-wallet"
                        type="button"
                        class="_btn-ripple_1fzeu_1 text-white font-medium w-full flex items-center justify-center p-1 bg-primary border border-secondary rounded-full">
                        <p class="text-[0.3rem] font-bold text-white">Rút</p></router-link
                    ><button
                        type="button"
                        class="_btn-ripple_1fzeu_1 text-white font-medium w-full flex items-center justify-center p-1 bg-primary border border-secondary rounded-full">
                        <p class="text-[0.3rem] font-bold text-white">Chuyển ví</p>
                    </button>
                </div>
            </div>
            <div class="p-1.5 pt-2.5 border-t border-[#020202]">
                <h2 class="text-white text-[0.42rem] font-bold">Thống kê tài sản</h2>
                <div class="w-full !mt-2 flex items-center justify-between" style="gap: 24px">
                    <div class="relative">
                        <div style="min-height: 137px">
                            <div
                                id="apexcharts1jbqe0c6"
                                class="apexcharts-canvas apexcharts1jbqe0c6 apexcharts-theme-"
                                style="width: 136px; height: 137px">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    version="1.1"
                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                    class="apexcharts-svg"
                                    xmlns:data="ApexChartsNS"
                                    transform="translate(0, 0)"
                                    width="136"
                                    height="137">
                                    <g
                                        class="apexcharts-inner apexcharts-graphical"
                                        transform="translate(1.3600006103515625, 0)">
                                        <defs>
                                            <clipPath id="gridRectMask1jbqe0c6">
                                                <rect
                                                    width="139.0799987792969"
                                                    height="355.8"
                                                    x="-2.9"
                                                    y="-2.9"
                                                    rx="0"
                                                    ry="0"
                                                    opacity="1"
                                                    stroke-width="0"
                                                    stroke="none"
                                                    stroke-dasharray="0"
                                                    fill="#fff"></rect>
                                            </clipPath>
                                            <clipPath id="gridRectBarMask1jbqe0c6">
                                                <rect
                                                    width="139.0799987792969"
                                                    height="355.8"
                                                    x="-2.9"
                                                    y="-2.9"
                                                    rx="0"
                                                    ry="0"
                                                    opacity="1"
                                                    stroke-width="0"
                                                    stroke="none"
                                                    stroke-dasharray="0"
                                                    fill="#fff"></rect>
                                            </clipPath>
                                            <clipPath id="gridRectMarkerMask1jbqe0c6">
                                                <rect
                                                    width="133.27999877929688"
                                                    height="350"
                                                    x="0"
                                                    y="0"
                                                    rx="0"
                                                    ry="0"
                                                    opacity="1"
                                                    stroke-width="0"
                                                    stroke="none"
                                                    stroke-dasharray="0"
                                                    fill="#fff"></rect>
                                            </clipPath>
                                            <clipPath id="forecastMask1jbqe0c6"></clipPath>
                                            <clipPath id="nonForecastMask1jbqe0c6"></clipPath>
                                            <radialGradient
                                                gradientUnits="userSpaceOnUse"
                                                cx="66.63999938964844"
                                                cy="175"
                                                r="59.21463355087653"
                                                id="SvgjsRadialGradient1004">
                                                <stop stop-opacity="1" stop-color="rgba(0,230,118,1)" offset="0"></stop>
                                                <stop
                                                    stop-opacity="1"
                                                    stop-color="rgba(0,230,118,1)"
                                                    offset="0.9"></stop>
                                                <stop stop-opacity="1" stop-color="rgba(0,230,118,1)" offset="1"></stop>
                                            </radialGradient>
                                            <radialGradient
                                                gradientUnits="userSpaceOnUse"
                                                cx="66.63999938964844"
                                                cy="175"
                                                r="59.21463355087653"
                                                id="SvgjsRadialGradient1005">
                                                <stop stop-opacity="1" stop-color="rgba(2,199,123,1)" offset="0"></stop>
                                                <stop
                                                    stop-opacity="1"
                                                    stop-color="rgba(2,199,123,1)"
                                                    offset="0.9"></stop>
                                                <stop stop-opacity="1" stop-color="rgba(2,199,123,1)" offset="1"></stop>
                                            </radialGradient>
                                        </defs>
                                        <g class="apexcharts-pie">
                                            <g transform="translate(0, 0) scale(1)">
                                                <circle
                                                    r="46.18741416968369"
                                                    cx="66.63999938964844"
                                                    cy="66.63999938964844"
                                                    fill="transparent"></circle>
                                                <g class="apexcharts-slices">
                                                    <g
                                                        class="apexcharts-series apexcharts-pie-series"
                                                        seriesName="USDT"
                                                        rel="1"
                                                        data:realIndex="0">
                                                        <path
                                                            d="M 66.63999938964844 7.42536583877191 A 59.21463355087653 59.21463355087653 0 1 1 7.791177591069811 73.21183318880448 L 20.73791838675711 71.76602975299015 A 46.18741416968369 46.18741416968369 0 1 0 66.63999938964844 20.452585219964746 L 66.63999938964844 7.42536583877191 z "
                                                            fill="url(#SvgjsRadialGradient1004)"
                                                            fill-opacity="1"
                                                            stroke="#ffffff"
                                                            stroke-opacity="1"
                                                            stroke-linecap="butt"
                                                            stroke-width="1.8"
                                                            stroke-dasharray="0"
                                                            class="apexcharts-pie-area apexcharts-donut-slice-0"
                                                            index="0"
                                                            j="0"
                                                            data:angle="263.62800000000004"
                                                            data:startAngle="0"
                                                            data:strokeWidth="1.8"
                                                            data:value="73.23"
                                                            data:pathOrig="M 66.63999938964844 7.42536583877191 A 59.21463355087653 59.21463355087653 0 1 1 7.791177591069811 73.21183318880448 L 20.73791838675711 71.76602975299015 A 46.18741416968369 46.18741416968369 0 1 0 66.63999938964844 20.452585219964746 L 66.63999938964844 7.42536583877191 z "></path>
                                                    </g>
                                                    <g
                                                        class="apexcharts-series apexcharts-pie-series"
                                                        seriesName="VNDC"
                                                        rel="2"
                                                        data:realIndex="1">
                                                        <path
                                                            d="M 7.791177591069811 73.21183318880448 A 59.21463355087653 59.21463355087653 0 0 1 66.62966448649264 7.425366740662348 L 66.63193816518692 20.452585923439287 A 46.18741416968369 46.18741416968369 0 0 0 20.73791838675711 71.76602975299015 L 7.791177591069811 73.21183318880448 z "
                                                            fill="url(#SvgjsRadialGradient1005)"
                                                            fill-opacity="1"
                                                            stroke="#ffffff"
                                                            stroke-opacity="1"
                                                            stroke-linecap="butt"
                                                            stroke-width="1.8"
                                                            stroke-dasharray="0"
                                                            class="apexcharts-pie-area apexcharts-donut-slice-1"
                                                            index="0"
                                                            j="1"
                                                            data:angle="96.37200000000001"
                                                            data:startAngle="263.62800000000004"
                                                            data:strokeWidth="1.8"
                                                            data:value="26.77"
                                                            data:pathOrig="M 7.791177591069811 73.21183318880448 A 59.21463355087653 59.21463355087653 0 0 1 66.62966448649264 7.425366740662348 L 66.63193816518692 20.452585923439287 A 46.18741416968369 46.18741416968369 0 0 0 20.73791838675711 71.76602975299015 L 7.791177591069811 73.21183318880448 z "></path>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                    <g class="apexcharts-datalabels-group" transform="translate(0, 0) scale(1)"></g>
                                    <g class="apexcharts-datalabels-group" transform="translate(0, 0) scale(1)"></g>
                                </svg>
                                <div class="apexcharts-legend" style="max-height: 175px"></div>
                            </div>
                        </div>
                        <div
                            class="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-[0.3rem] text-center font-semibold text-gray-300">
                            <p>5,407</p>
                            <span>VNDC</span>
                        </div>
                    </div>
                    <div class="w-full text-[0.3rem] font-semibold flex flex-col items-stretch justify-center">
                        <div class="mb-1 px-1 py-0.5 rounded-sm text-gray-300 flex items-center justify-between">
                            <div class="flex items-center" style="gap: 12px">
                                <div class="w-1 h-1 bg-[#02C77B] rounded-full relative">
                                    <span
                                        class="animate-ping absolute inline-flex w-full h-full rounded-full bg-[#02C77B] opacity-75"></span>
                                </div>
                                <span>USDT</span>
                            </div>
                            73.23%
                        </div>
                        <div class="mb-1 px-1 py-0.5 rounded-sm text-gray-300 flex items-center justify-between">
                            <div class="flex items-center" style="gap: 12px">
                                <div class="w-1 h-1 bg-[#00E676] rounded-full relative">
                                    <span
                                        class="animate-ping absolute inline-flex w-full h-full rounded-full bg-[#00E676] opacity-75"></span>
                                </div>
                                <span>VNDC</span>
                            </div>
                            26.77%
                        </div>
                    </div>
                </div>
            </div>
            <div class="p-1.5 pt-2.5 border-t border-[#020202]">
                <h2 class="text-white text-[0.42rem] font-bold">Danh sách tài sản</h2>
                <div class="py-1 active:opacity-30 duration-150 !mt-1.5 flex justify-between">
                    <div class="flex items-center" style="gap: 12px">
                        <img class="w-3 rounded-full" :src="vndc" alt="" />
                        <div class="flex flex-col">
                            <span class="text-[0.34rem] font-semibold">VNDC</span
                            ><span class="text-[0.3rem] text-[#848e9d]">VNDC Stablecoin</span>
                        </div>
                    </div>
                    <div class="flex flex-col items-stretch justify-end">
                        <div class="flex items-center justify-end" style="gap: 12px">
                            <span class="text-[0.36rem] font-bold text-gray-100">5,407</span>
                        </div>
                        <div class="text-[#848e9d] flex items-center justify-end" style="gap: 6px">
                            <span class="text-[0.3rem]">0.21</span><span class="text-[0.28rem]">$</span>
                        </div>
                    </div>
                </div>
                <div class="py-1 active:opacity-30 duration-150 flex justify-between">
                    <div class="flex items-center" style="gap: 12px">
                        <img class="w-3 rounded-full" :src="usdt" alt="" />
                        <div class="flex flex-col items-stretch">
                            <span class="text-[0.34rem] font-semibold">USDT</span
                            ><span class="text-[0.3rem] text-[#848e9d]">TetherUS</span>
                        </div>
                    </div>
                    <div class="flex flex-col items-stretch justify-end">
                        <div class="flex items-center justify-end" style="gap: 12px">
                            <span class="text-[0.36rem] font-bold text-gray-100">0.5691</span>
                        </div>
                        <div class="text-[#848e9d] flex items-center justify-end" style="gap: 6px">
                            <span class="text-[0.3rem]">14,789</span><span class="text-[0.28rem]">₫</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { usdt, vndc } from "@/assets/mobile/coin";
import { Header } from "@/components/mobile";
</script>

<style></style>
