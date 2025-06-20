<template>
    <div>
        <Header title="Ví Futures" />
        <div class="pt-6">
            <div class="relative p-1.5">
                <h1 class="text-[#6d6f7b] text-[0.32rem]">Giá trị tài sản</h1>
                <div class="flex items-center gap-1 text-gray-100 py-1 font-semibold text-[0.65rem]">
                    <span>≈ </span>
                    <div class="flex items-center gap-0.5">
                        <span>0.0000 </span><span class="text-[0.52rem]">$</span>
                    </div>
                </div>
                <p class="text-[#a5a9ac] text-[0.32rem]">Lãi/Lỗ tạm tính: <span class="text-white">0 $</span></p>
                <div
                    class="absolute right-0 top-3 flex items-center gap-1 text-[0.28rem] bg-green-500/10 pl-1.5 pr-1 py-0.5 rounded-l-full">
                    <span role="img" aria-label="left" class="anticon anticon-left text-gray-400"
                        ><svg
                            viewBox="64 64 896 896"
                            focusable="false"
                            data-icon="left"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            aria-hidden="true">
                            <path
                                d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"></path></svg></span
                    ><span class="font-semibold text-default">Phân tích Lãi/Lỗ</span>
                </div>
            </div>
            <div class="p-1.5 pt-1.5 border-t border-[#020202]">
                <div class="flex justify-between text-[0.32rem] font-semibold">
                    <div class="flex flex-col gap-0.5 items-start">
                        <span class="text-[#868894]">Tổng nạp</span><span>0</span>
                    </div>
                    <div class="flex flex-col gap-0.5 items-center">
                        <span class="text-[#868894]">Tổng rút</span><span>0</span>
                    </div>
                    <div class="flex flex-col gap-0.5 items-end">
                        <span class="text-[#868894] flex items-center gap-0.5"
                            >KL giao dịch<svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="sort-down"
                                class="svg-inline--fa fa-sort-down mb-0.5"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                width="8.59px"
                                height="13.73px"
                                viewBox="0 0 320 512">
                                <path
                                    fill="currentColor"
                                    d="M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8l256 0c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z"></path></svg></span
                        ><span>0</span>
                    </div>
                </div>
                <button
                    type="button"
                    class="_btn-ripple_1fzeu_1 text-white font-medium w-full flex items-center justify-center p-1 rounded-full bg-default mt-3">
                    <p class="text-[0.3rem] font-bold text-white">Chuyển ví</p>
                </button>
            </div>
            <div
                class="bg-green-500/10 flex items-center justify-between text-[0.28rem] text-default font-semibold px-1.5 py-1 mt-1">
                <div class="flex items-center gap-1">
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="lightbulb"
                        class="svg-inline--fa fa-lightbulb"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        width="9.02px"
                        height="12.03px"
                        viewBox="0 0 384 512">
                        <path
                            fill="currentColor"
                            d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2c0 0 0 0 0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4c0 0 0 0 0 0c19.8 27.1 39.7 54.4 49.2 86.2l160 0zM192 512c44.2 0 80-35.8 80-80l0-16-160 0 0 16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z"></path></svg
                    ><span>Nhận lại VNDC từ VNDC Bonus</span>
                </div>
                <span role="img" aria-label="right" class="anticon anticon-right text-[#718fb3]"
                    ><svg
                        viewBox="64 64 896 896"
                        focusable="false"
                        data-icon="right"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        aria-hidden="true">
                        <path
                            d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path></svg
                ></span>
            </div>
            <div class="p-1.5 pt-2.5">
                <h2 class="text-white text-[0.42rem] font-bold">Danh sách tài sản</h2>
                <div class="flex justify-between py-1 active:opacity-30 duration-150 mt-1.5">
                    <div class="flex items-center gap-1">
                        <img class="rounded-full" width="35" :src="vndc" alt="" />
                        <div class="flex flex-col">
                            <span class="text-[0.34rem] font-semibold">VNDC</span
                            ><span class="text-[0.3rem] text-[#848e9d]">VNDC Stablecoin</span>
                        </div>
                    </div>
                    <div class="flex flex-col justify-end">
                        <div class="flex items-center justify-end gap-1">
                            <span class="text-[0.36rem] font-bold text-gray-100">0 VNDC</span>
                        </div>
                        <div class="flex items-center justify-end gap-0.5 text-[#848e9d]">
                            <span class="text-[0.3rem]">0.0000</span><span class="text-[0.28rem]">$</span>
                        </div>
                    </div>
                </div>
                <div class="flex justify-between py-1 active:opacity-30 duration-150">
                    <div class="flex items-center gap-1">
                        <img class="rounded-full" width="35" :src="usdt" alt="" />
                        <div class="flex flex-col">
                            <span class="text-[0.34rem] font-semibold">USDT</span
                            ><span class="text-[0.3rem] text-[#848e9d]">TetherUS</span>
                        </div>
                    </div>
                    <div class="flex flex-col justify-end">
                        <div class="flex items-center justify-end gap-1">
                            <span class="text-[0.36rem] font-bold text-gray-100">0.0000 USDT</span>
                        </div>
                        <div class="flex items-center justify-end gap-0.5 text-[#848e9d]">
                            <span class="text-[0.3rem]">0</span><span class="text-[0.28rem]">₫</span>
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
