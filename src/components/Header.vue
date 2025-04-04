<template>
    <div class="flex justify-between items-center">
        <div class="flex items-center gap-2">
            <ArrowLeftIcon class="w-6 h-6" :class="titleColor" @click="$router.back()" />
            <p class="text-lg" :class="titleColor">{{ title }}</p>
        </div>
        <HomeIcon class="w-6 h-6 text-[#d9c8ab]" @click="$router.push('/')" />
    </div>
</template>

<script setup>
import { defineProps } from "vue";
import { ArrowLeftIcon, HomeIcon } from "@heroicons/vue/24/outline";
defineProps({
    title: {
        type: String,
        required: true,
    },
    titleColor: {
        type: String,
        default: "text-white",
    },
});
</script>

<style scope></style>
