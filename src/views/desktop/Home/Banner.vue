<template>
    <div
        class="relative flex items-start justify-between duration-300 mx-auto"
        style="min-height: 620px; background: linear-gradient(rgba(20, 209, 117, 0.2) 0%, rgba(255, 255, 255, 0) 100%)">
        <div class="absolute left-[4%]">
            <div class="container flex flex-col items-end justify-start">
                <div class="pt-16">
                    <h1 class="leading-[125%] text-[54px] font-bold !mb-8">
                        Mua Bitcoin và crypto <br />
                        theo cách bạn muốn
                    </h1>
                    <div class="text-gray-200 text-lg">
                        <p class="!leading-8">Dễ dàng, tiện lợi và an toàn nhất. Giao dịch ngay để</p>
                        <p class="!leading-8">nắm bắt cơ hội lớn với tài sản số cùng Coincex.</p>
                    </div>
                    <div class="flex items-center">
                        <div class="mt-16">
                            <div class="bg-white flex items-center px-2 py-2 pl-5 rounded-full">
                                <input
                                    type="text"
                                    class="bg-transparent p-1 outline-none text-black font-bold pr-12"
                                    placeholder="Email hoặc Số điện thoại"
                                    value="" /><button class="bg-[#01bc8d] px-8 py-2.5 rounded-full">
                                    <span class="font-bold">Đăng ký ngay</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="relative w-full flex justify-end">
            <div class="_qr-code-download_16i74_1">
                <div class="text-center text-xs font-bold">
                    <p>Quét để Tải xuống Ứng dụng</p>
                    <p>cho iOS và Android</p>
                </div>
                <div class="bg-white rounded-md">
                    <div
                        class="ant-qrcode css-1a3rktk"
                        style="background-color: transparent; width: 160px; height: 160px">
                        <img :src="qr" alt="" width="160" height="160" />
                    </div>
                </div>
                <router-link to="/download" class="flex items-center text-xs font-bold"
                    >View More<svg
                        class="css-pvns6u ef777ux1"
                        viewBox="0 0 1024 1024"
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="currentColor">
                        <path
                            d="M499.499 268.501a42.667 42.667 0 010 60.331L358.997 469.333H768a42.667 42.667 0 110 85.334H358.997L499.5 695.168a42.667 42.667 0 01-60.331 60.33L225.835 542.166l-.086-.085a42.539 42.539 0 010-60.16l.086-.085L439.168 268.5a42.667 42.667 0 0160.33 0z"></path></svg
                ></router-link>
            </div>
            <img
                class="absolute w-[1180px] h-[480px] object-cover"
                src="https://assets.staticimg.com/brisk-web/1.1.21/media/95b8adabc8f1cd345b5c.png"
                alt="" />
        </div>
    </div>
</template>

<script setup>
import { logo, qr } from "@/assets/desktop/home";
</script>

<style scoped>
._qr-code-download_16i74_1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    position: absolute;
    z-index: 2;
    right: 260px;
    top: 66px;
    width: 252px;
    padding: 16px;
    background: rgba(255, 255, 255, 0.4);
    border: 1px solid rgb(255, 255, 255);
    -webkit-backdrop-filter: blur(12px);
    backdrop-filter: blur(12px);
    border-radius: 24px;
    animation: 2.2s linear 0s infinite normal none running _animation-download_16i74_1;
}

:where(.css-1a3rktk).ant-qrcode {
    box-sizing: border-box;
    margin: 0;
    padding: 12px;
    color: rgba(0, 0, 0, 0.88);
    font-size: 14px;
    line-height: 1.5714285714285714;
    list-style: none;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 8px;
    border: 1px solid rgba(5, 5, 5, 0.06);
    position: relative;
    overflow: hidden;
}

:where(.css-1a3rktk).ant-qrcode > canvas {
    align-self: stretch;
    flex: auto;
    min-width: 0;
}

@keyframes _animation-download_16i74_1 {
    0%,
    100% {
        transform: translateZ(0);
    }
    50% {
        transform: translate3d(0, -6px, 0);
    }
}
</style>
