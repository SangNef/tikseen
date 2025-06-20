<template>
    <nav class="relative flex items-center justify-between px-5 py-2">
        <div class="flex items-center gap-12">
            <router-link class="flex items-center gap-2 cursor-pointer select-none" to="/"
                ><img class="w-44 rotate-[-0.5deg]" loading="lazy" :src="logo" alt=""
            /></router-link>
            <div class="flex items-center" style="gap: 28px">
                <div class="hidden lg:flex items-center gap-5 xl:gap-6 duration-300">
                    <router-link
                        v-for="menu in menus"
                        :key="menu.to"
                        :to="menu.to"
                        class="flex items-center gap-1 duration-300 ease-in font-semibold text-base"
                        :class="{
                            'text-[#01bc8d]': route.path.startsWith(menu.to),
                            'text-[#515c70] hover:text-[#01bc8d]': !route.path.startsWith(menu.to),
                        }">
                        <span>{{ menu.label }}</span>
                        <img v-if="menu.icon" :src="menu.icon" alt="icon" width="20" />
                    </router-link>
                </div>
                <div class="flex items-center gap-5 xl:gap-6 duration-300">
                    <div
                        class="text-[#515c70] flex items-center gap-1 duration-300 ease-in hover:text-[#01bc8d] cursor-pointer">
                        <span class="font-semibold text-base">Thông báo</span>
                    </div>
                    <div
                        class="text-[#515c70] flex items-center gap-1 duration-300 ease-in hover:text-[#01bc8d] cursor-pointer">
                        <span class="font-semibold text-base">Hỗ trợ</span>
                    </div>
                    <div
                        class="text-[#515c70] flex items-center gap-1 duration-300 ease-in hover:text-[#01bc8d] cursor-pointer">
                        <span class="font-semibold text-base">Về Coincex</span
                        ><span role="img" aria-label="down" class="anticon anticon-down text-xs font-bold"
                            ><svg
                                viewBox="64 64 896 896"
                                focusable="false"
                                data-icon="down"
                                width="1em"
                                height="1em"
                                fill="currentColor"
                                aria-hidden="true">
                                <path
                                    d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path></svg
                        ></span>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="user" class="flex items-center gap-3 font-semibold text-sm lg:text-base _text-default_1uimq_1">
            <div class="flex items-center gap-6 text-[#8391a6] pr-6 border-r border-gray-900">
                <Download title="" placement="bottom">
                    <span
                        role="img"
                        aria-label="download"
                        aria-describedby=":r0:"
                        class="anticon anticon-download hover:text-[#01bc8d] text-2xl duration-100 cursor-pointer"
                        ><svg
                            viewBox="64 64 896 896"
                            focusable="false"
                            data-icon="download"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            aria-hidden="true">
                            <path
                                d="M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"></path></svg
                    ></span>
                </Download>
                <Locale placement="bottom">
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="globe"
                        class="svg-inline--fa fa-globe hover:text-[#01bc8d] duration-100 cursor-pointer"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        width="20px"
                        height="20px"
                        aria-describedby=":r2:">
                        <path
                            fill="currentColor"
                            d="M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z"></path>
                    </svg>
                </Locale>
                <Notification text="Thông báo" placement="bottom">
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="bell"
                        class="svg-inline--fa fa-bell hover:text-[#01bc8d] duration-100 cursor-pointer"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        width="20px"
                        height="20px"
                        fill="currentColor">
                        <path
                            d="M224 0c-17.7 0-32 14.3-32 32v19.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416h384c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7 33.3-6.7 45.3-18.7z" />
                    </svg>
                </Notification>
            </div>
            <div class="flex items-center gap-6 pl-3 text-xl text-[#8391a6]">
                <router-link aria-describedby=":r1i:" class="" to="/account/asset">
                    <!-- thêm active khi router trùng -->
                    <svg
                        class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium hover:text-[#01bc8d] duration-100 cursor-pointer css-vubbuv"
                        :class="[route.path.startsWith('/account/asset') ? 'text-[#01bc8d]' : 'text-[#8391a6]']"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        width="24px"
                        height="24px"
                        fill="currentColor"
                        data-testid="AccountBalanceWalletIcon">
                        <path
                            d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2zm-9-2h10V8H12zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5"></path></svg></router-link
                ><router-link aria-describedby=":r1k:" class="" to="/account/settings?page=account-info"
                    ><svg
                        class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium hover:text-[#01bc8d] duration-100 cursor-pointer css-vubbuv"
                        :class="[route.path.startsWith('/account/settings') ? 'text-[#01bc8d]' : 'text-[#8391a6]']"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        width="24px"
                        height="24px"
                        fill="currentColor"
                        data-testid="SettingsIcon">
                        <path
                            d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6"></path></svg
                ></router-link>
            </div>
        </div>
        <div v-else class="flex items-center gap-3 font-semibold text-sm lg:text-base text-[#515c70]">
            <router-link
                to="/login"
                class="flex items-center gap-6 px-5 py-2 border border-[#01bc8d] rounded-md hover:bg-[#01bc8d]/20 duration-150">
                <span class="text-xs text-[#01bc8d]">Đăng nhập</span>
            </router-link>
            <router-link
                to="/register"
                class="relative flex items-center gap-6 px-5 py-2 rounded-md bg-[#01bc8d] hover:bg-[#01bc8d]/80 duration-150">
                <span class="text-xs text-gray-300">Đăng ký</span
                ><img
                    alt=""
                    loading="lazy"
                    class="absolute -right-7 -top-4"
                    src="https://s2.coinmarketcap.com/static/cloud/img/signup/signupGift.gif?_=00c8a02" />
            </router-link>
            <div class="flex items-center gap-6 text-[#8391a6] pl-6">
                <span
                    role="img"
                    aria-label="download"
                    aria-describedby=":r0:"
                    class="anticon anticon-download hover:text-[#01bc8d] text-2xl duration-100 cursor-pointer"
                    ><svg
                        viewBox="64 64 896 896"
                        focusable="false"
                        data-icon="download"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        aria-hidden="true">
                        <path
                            d="M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"></path></svg></span
                ><svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="globe"
                    class="svg-inline--fa fa-globe hover:text-[#01bc8d] text-xl duration-100 cursor-pointer"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="20px"
                    height="20px"
                    aria-describedby=":r2:">
                    <path
                        fill="currentColor"
                        d="M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z"></path>
                </svg>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { logo } from "@/assets/desktop/logo";
import { ref } from "vue";
import { useRoute } from "vue-router";
import { Download, Locale, Notification } from "./Tooltip";

const user = localStorage.getItem("username");
const route = useRoute();

const menus = ref([
    { label: "Thị trường", to: "/markets" },
    { label: "Futures", to: "/futures" },
    {
        label: "Quyền chọn",
        to: "/binary-options",
        icon: "https://cloudfront.goonus.io/onus-pro-prod/public/images/header/hot.svg",
    },
]);
</script>

<style></style>
