<template>
    <div class="bg-white max-w-100 w-full mx-auto h-screen relative font-helvetica">
        <div class="h-[50px] absolute top-0 left-0 w-full flex justify-between items-center">
            <div class="w-[51px] h-[51px] flex items-center justify-center">
                <ChevronLeftIcon class="w-7 h-7 text-[#333] cursor-pointer" @click="router.back()" />
            </div>
            <div class="text-[20px] [line-height: 30px] text-[#333]">Nhóm chat</div>
            <div class="w-5"></div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import { ChevronLeftIcon } from "@heroicons/vue/24/solid";

const router = useRouter();
</script>

<style></style>
