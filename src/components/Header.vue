<template>
    <div class="h-11">
        <div class="p-0 bg-[#e72732] w-full fixed h-[calc(45px+env(safe-area-inset-top)/4)!important] z-999 top-0">
            <ul class="flex justify-between pt-2">
                <li class="ml-2.5 w-[30px]">
                    <img :src=logo alt="">
                </li>
                <li class="text-white font-bold text-lg">{{ title }}</li>
                <li class="mr-2.5 w-[20px] pt-1.25">
                    <img :src=cskh alt="">
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import logo from "@client/assets/images/header/logo.png";
import cskh from "@client/assets/images/header/cskh.png";

defineProps({
    title: {
        type: String,
        required: true
    }
});
</script>

<style scope></style>
