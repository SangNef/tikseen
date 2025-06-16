<template>
    <div class="pb-5">
        <div
            class="rv-nav-bar rv-nav-bar--fixed rv-hairline--bottom max-w-40 left-0 bg-primary border-b border-[#f3f3f31f] py-0.5"
            style="z-index: 1000">
            <div class="rv-nav-bar__content">
                <div class="rv-nav-bar__left" @click="navigateBack">
                    <div>
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
                        <span class="text-white text-[0.42rem] font-medium whitespace-nowrap">Giới thiệu</span>
                    </div>
                </div>
                <div class="rv-nav-bar__right">
                    <router-link
                        class="text-[0.34rem] font-medium text-default"
                        to="/invite-reward"
                        data-discover="true"
                        >Phần thưởng</router-link
                    >
                </div>
            </div>
        </div>
        <div class="pt-8">
            <div class="px-1.5">
                <h1 class="text-[0.64rem] font-semibold text-[#f9fef8]">
                    Giới thiệu bạn bè cùng sử dụng <span class="text-default">Coin</span>cex
                </h1>
                <div class="mt-2 flex items-start" style="gap: 12px">
                    <div class="bg-default w-1.5 h-1.5 p-0.5 rounded-full mt-0.5 flex items-center justify-center">
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="check"
                            class="svg-inline--fa fa-check text-[0.25rem]"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512">
                            <path
                                fill="currentColor"
                                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
                        </svg>
                    </div>
                    <span class="font-medium text-[#b4b6c3] text-[0.34rem]"
                        >Nhận <span class="text-default">20%</span> hoa hồng từ phí giao dịch futures của người được
                        giới thiệu</span
                    >
                </div>
                <div class="mt-1 flex items-start" style="gap: 12px">
                    <div class="bg-default w-1.5 h-1.5 p-0.5 rounded-full mt-0.5 flex items-center justify-center">
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="check"
                            class="svg-inline--fa fa-check text-[0.25rem]"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512">
                            <path
                                fill="currentColor"
                                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
                        </svg>
                    </div>
                    <span class="font-medium text-[#b4b6c3] text-[0.34rem]"
                        >Nhận <span class="text-default">135,000 VNDC</span> tiền thưởng với mỗi bạn bè hoàn thành giao
                        dịch và nạp tiền</span
                    >
                </div>
                <div class="mt-2.5 px-0.5 flex justify-between" style="gap: 12px">
                    <div
                        class="relative w-full p-1 bg-primary border border-[#01bc8d4d] rounded-md"
                        style="
                            box-shadow: rgba(1, 188, 141, 0.16) 0px 0px 0px 0px, rgba(1, 188, 141, 0.06) 0px 0px 0px 1px;
                        ">
                        <div
                            style="
                                position: absolute;
                                border-radius: 12px;
                                top: 0px;
                                left: 0px;
                                width: 100%;
                                height: 80px;
                                opacity: 0.2;
                                background: linear-gradient(rgba(1, 188, 141, 0.4) 0%, rgba(1, 188, 141, 0) 100%);
                            "></div>
                        <div class="flex items-center justify-center flex-col">
                            <p class="text-[0.3rem] !mb-[0.1rem] font-medium opacity-90">Người giới thiệu</p>
                            <span class="text-[0.4rem] text-default font-semibold">+135,000 VNDC</span>
                        </div>
                    </div>
                    <div
                        class="relative w-full p-1 bg-primary border border-[#01bc8d4d] rounded-md"
                        style="
                            box-shadow: rgba(1, 188, 141, 0.16) 0px 0px 0px 0px, rgba(1, 188, 141, 0.06) 0px 0px 0px 1px;
                        ">
                        <div
                            style="
                                position: absolute;
                                border-radius: 12px;
                                top: 0px;
                                left: 0px;
                                width: 100%;
                                height: 80px;
                                opacity: 0.2;
                                background: linear-gradient(rgba(1, 188, 141, 0.4) 0%, rgba(1, 188, 141, 0) 100%);
                            "></div>
                        <div class="flex items-center justify-center flex-col">
                            <p class="text-[0.3rem] !mb-[0.1rem] font-medium opacity-90">Người dùng mới</p>
                            <span class="text-[0.4rem] text-default font-semibold">+1,000,000 VNDC</span>
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="relative min-h-28 mt-5 pointer-events-none _invite-bg-main_1u8oa_1 flex items-center justify-center">
                <div
                    class="w-full h-36 absolute left-1/2 -translate-x-1/2 z-[1] _gradient_1u8oa_16"
                    style="
                        background: radial-gradient(
                            50% 50% at 50% 50%,
                            rgba(1, 188, 141, 0.4) 0%,
                            rgba(1, 188, 141, 0) 100%
                        );
                    "></div>
                <img class="absolute left-10 bottom-5 z-[11] w-7 _btc_1u8oa_1" :src="btc" alt="" /><img
                    class="absolute left-7 bottom-12 z-[11] w-4 _eth_1u8oa_4"
                    :src="eth"
                    alt="" /><img
                    class="absolute right-4 bottom-11 z-[11] w-5 _coincex_1u8oa_7"
                    :src="cex"
                    alt="" /><img
                    class="absolute left-[2.3rem] bottom-[3.85rem] z-[11] w-3.5 _star-1_1u8oa_10"
                    :src="star"
                    alt="" /><img
                    class="absolute right-8 bottom-[4.25rem] z-[11] w-3.5 _star-2_1u8oa_13"
                    :src="star"
                    alt="" /><img class="w-48 relative z-10 mx-auto select-none" :src="invite" alt="" />
            </div>
        </div>
        <div class="px-1.5 pt-2.5 mt-5 border-t border-[#01bc8d4d] rounded-t-md">
            <p class="text-[0.32rem] text-[#b4b6c3]">
                * Tiền thưởng của người mới có thể rút được khi đạt khối lượng giao dịch được yêu cầu.
            </p>
            <div class="mt-3.5">
                <p class="text-[0.38rem] font-semibold !mb-1.5">Chia sẻ qua</p>
                <div
                    class="w-full relative z-10 border border-[#01bc8d33] rounded-md p-1.5 text-[0.32rem] overflow-hidden">
                    <div class="relative z-10 divide-y divide-default pb-0.5">
                        <div class="pb-1">
                            <div class="w-full h-3.5 pl-0.5 pr-1 flex items-center justify-between">
                                <div class="w-full flex items-center justify-between">
                                    <span>Mã giới thiệu</span>
                                    <p class="overflow-hidden whitespace-nowrap text-ellipsis">
                                        <span class="font-medium text-gray-300">BF94771757</span>
                                    </p>
                                </div>
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="clone"
                                    class="svg-inline--fa fa-clone ml-0.5 text-[0.36rem] text-default active:opacity-60 duration-150"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="15.47px"
                                    height="15.47px"
                                    viewBox="0 0 512 512">
                                    <path
                                        fill="currentColor"
                                        d="M64 464l224 0c8.8 0 16-7.2 16-16l0-64 48 0 0 64c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 224c0-35.3 28.7-64 64-64l64 0 0 48-64 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16zM224 304l224 0c8.8 0 16-7.2 16-16l0-224c0-8.8-7.2-16-16-16L224 48c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16zm-64-16l0-224c0-35.3 28.7-64 64-64L448 0c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64l-224 0c-35.3 0-64-28.7-64-64z"></path>
                                </svg>
                            </div>
                        </div>
                        <div class="pt-1.5">
                            <div class="w-full h-3.5 pl-0.5 pr-1 flex items-center justify-between">
                                <div class="w-full flex items-center justify-between">
                                    <span>Link giới thiệu</span>
                                    <p class="max-w-20 overflow-hidden whitespace-nowrap text-ellipsis">
                                        <span class="font-medium text-gray-300"
                                            >https://coincex.io/register?code=BF94771757</span
                                        >
                                    </p>
                                </div>
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="clone"
                                    class="svg-inline--fa fa-clone ml-0.5 text-[0.36rem] text-default active:opacity-60 duration-150"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="15.47px"
                                    height="15.47px"
                                    viewBox="0 0 512 512">
                                    <path
                                        fill="currentColor"
                                        d="M64 464l224 0c8.8 0 16-7.2 16-16l0-64 48 0 0 64c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 224c0-35.3 28.7-64 64-64l64 0 0 48-64 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16zM224 304l224 0c8.8 0 16-7.2 16-16l0-224c0-8.8-7.2-16-16-16L224 48c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16zm-64-16l0-224c0-35.3 28.7-64 64-64L448 0c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64l-224 0c-35.3 0-64-28.7-64-64z"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <button
                        type="button"
                        class="_btn-ripple_1fzeu_1 text-white font-medium w-full bg-default active:opacity-60 duration-150 rounded-full h-4 px-3 mt-1.5">
                        <span>Thống kê dữ liệu</span>
                    </button>
                </div>
            </div>
            <div class="mt-5">
                <p class="text-[0.38rem] font-semibold !mb-2">Chia sẻ đến</p>
                <div class="flex items-center justify-between">
                    <div
                        class="active:opacity-30 duration-150 cursor-pointer flex items-center flex-col"
                        style="gap: 6px">
                        <img
                            class="w-3.5 border border-secondary rounded-full"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/768px-Facebook_Logo_%282019%29.png"
                            alt="" /><span class="text-[0.32rem] text-gray-300 font-medium">Facebook</span>
                    </div>
                    <div
                        class="active:opacity-30 duration-150 cursor-pointer flex items-center flex-col"
                        style="gap: 6px">
                        <img
                            class="w-3.5 border border-secondary rounded-full"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/1200px-Telegram_logo.svg.png"
                            alt="" /><span class="text-[0.32rem] text-gray-300 font-medium">Telegram</span>
                    </div>
                    <div
                        class="active:opacity-30 duration-150 cursor-pointer flex items-center flex-col"
                        style="gap: 6px">
                        <img
                            class="w-3.5 border border-secondary rounded-full"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/1690643591twitter-x-logo-png.webp/1024px-1690643591twitter-x-logo-png.webp.png"
                            alt="" /><span class="text-[0.32rem] text-gray-300 font-medium">Twitter</span>
                    </div>
                    <div class="active:opacity-30 duration-150 flex items-center flex-col" style="gap: 6px">
                        <div
                            class="w-3.5 h-3.5 bg-default border border-secondary rounded-full flex items-center justify-center">
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="qrcode"
                                class="svg-inline--fa fa-qrcode"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512">
                                <path
                                    fill="currentColor"
                                    d="M0 80C0 53.5 21.5 32 48 32l96 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-96 0c-26.5 0-48-21.5-48-48L0 80zM64 96l0 64 64 0 0-64L64 96zM0 336c0-26.5 21.5-48 48-48l96 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-96 0c-26.5 0-48-21.5-48-48l0-96zm64 16l0 64 64 0 0-64-64 0zM304 32l96 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-96 0c-26.5 0-48-21.5-48-48l0-96c0-26.5 21.5-48 48-48zm80 64l-64 0 0 64 64 0 0-64zM256 304c0-8.8 7.2-16 16-16l64 0c8.8 0 16 7.2 16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s7.2-16 16-16s16 7.2 16 16l0 96c0 8.8-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16s-7.2-16-16-16s-16 7.2-16 16l0 64c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-160zM368 480a16 16 0 1 1 0-32 16 16 0 1 1 0 32zm64 0a16 16 0 1 1 0-32 16 16 0 1 1 0 32z"></path>
                            </svg>
                        </div>
                        <span class="text-[0.32rem] text-gray-300 font-medium">QR Code</span>
                    </div>
                    <div class="active:opacity-30 duration-150 flex items-center flex-col" style="gap: 6px">
                        <div
                            class="w-3.5 h-3.5 bg-default border border-secondary rounded-full flex items-center justify-center">
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="ellipsis"
                                class="svg-inline--fa fa-ellipsis"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512">
                                <path
                                    fill="currentColor"
                                    d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"></path>
                            </svg>
                        </div>
                        <span class="text-[0.32rem] text-gray-300 font-medium">Thêm</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { btc, cex, eth, invite, star } from '@/assets/invite';
import { useRouter } from 'vue-router';

const router = useRouter();
const navigateBack = () => {
    router.back();
};
</script>

<style scoped>
._invite-bg-main_1u8oa_1 ._btc_1u8oa_1 {
    animation: 2.2s linear 0s infinite normal none running _animation-btc_1u8oa_1;
}

._invite-bg-main_1u8oa_1 ._eth_1u8oa_4 {
    animation: 1.52s cubic-bezier(0.42, 0, 0.58, 1) 0s infinite normal none running _animation-eth_1u8oa_1;
}

._invite-bg-main_1u8oa_1 ._coincex_1u8oa_7 {
    animation: 1.52s cubic-bezier(0.42, 0, 0.58, 1) 0s infinite normal none running _animation-coincex_1u8oa_1;
}

._invite-bg-main_1u8oa_1 ._star-1_1u8oa_10 {
    animation: 3s ease 0s infinite normal none running _animation-star-1_1u8oa_1;
}

._invite-bg-main_1u8oa_1 ._star-2_1u8oa_13 {
    animation: 2s ease 0s infinite normal none running _animation-star-2_1u8oa_1;
}

@keyframes _animation-btc_1u8oa_1 {
    0%,
    100% {
        transform: translateZ(0);
    }
    50% {
        transform: translate3d(0, -6px, 0);
    }
}

@keyframes _animation-eth_1u8oa_1 {
    0% {
        transform: translate(0);
    }
    50% {
        transform: translateY(-8px);
    }
    100% {
        transform: translate(0);
    }
}

@keyframes _animation-coincex_1u8oa_1 {
    0% {
        transform: translate(0);
    }
    50% {
        transform: translateY(6px);
    }
    100% {
        transform: translate(0);
    }
}

@keyframes _animation-star-1_1u8oa_1 {
    0% {
        transform: scale(0.5);
        opacity: 1;
    }
    25% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.5);
    }
    75% {
        transform: scale(1);
    }
    100% {
        transform: scale(0);
        opacity: 0;
    }
}

@keyframes _animation-star-2_1u8oa_1 {
    0% {
        transform: scale(0.5);
        opacity: 1;
    }
    30% {
        opacity: 1;
    }
    100% {
        transform: scale(1.1);
        opacity: 0;
    }
}
</style>
