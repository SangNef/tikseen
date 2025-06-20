<template>
    <div
        class="w-full max-w-40 fixed top-0 bg-[#121212] border-b border-[#1a1a1a] flex items-center justify-between px-1.5 py-1 z-10">
        <div class="flex items-center gap-1">
            <router-link class="border border-secondary rounded-full" to="/account-settings/center" data-discover="true"
                ><img class="w-[0.8rem] h-[0.8rem] rounded-full" :src="avatar" alt=""
            /></router-link>
        </div>
        <div class="flex items-center gap-1 text-[#bdc3c7]">
            <span
                role="img"
                aria-label="search"
                class="anticon anticon-search !text-[0.55rem] p-0.5 active:opacity-60 active:duration-150"
                ><svg
                    viewBox="64 64 896 896"
                    focusable="false"
                    data-icon="search"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    aria-hidden="true">
                    <path
                        d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path></svg
            ></span>
            <router-link to="/red-envelope" class="relative">
                <span
                    role="img"
                    aria-label="gift"
                    tabindex="-1"
                    class="anticon anticon-gift !text-[0.55rem] active:opacity-60 active:duration-150"
                    ><svg
                        viewBox="64 64 896 896"
                        focusable="false"
                        data-icon="gift"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        aria-hidden="true">
                        <path
                            d="M880 310H732.4c13.6-21.4 21.6-46.8 21.6-74 0-76.1-61.9-138-138-138-41.4 0-78.7 18.4-104 47.4-25.3-29-62.6-47.4-104-47.4-76.1 0-138 61.9-138 138 0 27.2 7.9 52.6 21.6 74H144c-17.7 0-32 14.3-32 32v200c0 4.4 3.6 8 8 8h40v344c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V550h40c4.4 0 8-3.6 8-8V342c0-17.7-14.3-32-32-32zm-334-74c0-38.6 31.4-70 70-70s70 31.4 70 70-31.4 70-70 70h-70v-70zm-138-70c38.6 0 70 31.4 70 70v70h-70c-38.6 0-70-31.4-70-70s31.4-70 70-70zM180 482V378h298v104H180zm48 68h250v308H228V550zm568 308H546V550h250v308zm48-376H546V378h298v104z"></path></svg
                ></span>
                <div class="absolute top-0 -right-1 flex items-center justify-center px-0.5 bg-red-500 rounded-full">
                    <span class="text-[0.15rem] text-white">New</span>
                </div>
            </router-link>
            <router-link to="/notifications" class="relative w-[0.65rem] h-[0.65rem]">
                <svg
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xmlns="http://www.w3.org/2000/svg"
                    class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-root MuiSvgIcon-fontSizeMedium svg-icon css-kry165"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-testid="NotificationsNoneIcon"
                    tabindex="-1"
                    title="NotificationsNone"
                    width="0.65rem"
                    height="0.65rem">
                    <path
                        d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2m6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5z"
                        fill="#bdc3c7" />
                </svg>
                <div class="absolute top-[1px] right-[1px]">
                    <span class="relative flex w-[8px] h-[8px]"
                        ><span
                            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#01bc8d] opacity-75"></span
                        ><span class="relative inline-flex rounded-full w-[8px] h-[8px] bg-[#01bc8d]"></span
                    ></span>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script setup>
import { avatar } from "@/assets/mobile/icons";
</script>

<style scoped></style>
