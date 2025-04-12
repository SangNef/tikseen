<template>
    <div class="flex justify-between py-6 px-5">
        <img :src="logo" alt="" class="h-8 w-auto">
        <button class="px-4 py-2 border border-[#c9c9cd] rounded-lg text-[#131317] text-sm font-semibold leading-[20px]">
            {{ label }}
        </button>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
import logo from "@/assets/images/logo/logo.png";

const props = defineProps({
    label: {
        type: String,
        default: "Sign up free"
    }
});
</script>

<style></style>
