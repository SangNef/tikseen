<template>
    <div class="w-full fixed flex items-center justify-between bg-primary pr-2 py-1">
        <div class="px-1.5 py-0.5">
            <svg
                @click="goHome"
                xmlns="http://www.w3.org/2000/svg"
                class="h-[32.94px] mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
        </div>
        <div class="flex items-center gap-2">
            <div class="flex items-center gap-0.5 bg-[#1a1c2b] px-1.5 py-0.5 rounded-full relative">
                <img :src="VI" alt="" class="relative w-[20px] h-auto shrink-0" />
                <p class="font-semibold !text-[0.35rem] relative">VI</p>
            </div>
            <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="headset"
                class="h-[21px]"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512">
                <path
                    fill="currentColor"
                    d="M256 48C141.1 48 48 141.1 48 256l0 40c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-40C0 114.6 114.6 0 256 0S512 114.6 512 256l0 144.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24l-32 0c-26.5 0-48-21.5-48-48s21.5-48 48-48l32 0c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40L464 256c0-114.9-93.1-208-208-208zM144 208l16 0c17.7 0 32 14.3 32 32l0 112c0 17.7-14.3 32-32 32l-16 0c-35.3 0-64-28.7-64-64l0-48c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64l0 48c0 35.3-28.7 64-64 64l-16 0c-17.7 0-32-14.3-32-32l0-112c0-17.7 14.3-32 32-32l16 0z" />
            </svg>
        </div>
    </div>
</template>

<script setup>
import { VI } from "@/assets/mobile/auth";
import { useRouter } from "vue-router";

const router = useRouter();
function goHome() {
    router.push({ name: "Home" });
}
</script>

<style></style>
