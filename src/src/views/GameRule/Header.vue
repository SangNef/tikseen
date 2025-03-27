<template>
    <div class="h-11 bg-[#e72732] flex justify-between p-3 items-center">
        <button type="button" class="text-white" style="outline: none; border: 0px" @click="goBack">
            <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                size="24"
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
            </svg>
        </button>
        <p class="p text-white" style="margin-bottom: 0px; font-size: 18px">{{ title }}</p>
        <div></div>
    </div>
</template>

<script setup>
import { defineProps } from "vue";
import { useRouter } from "vue-router";

defineProps({
    title: String,
});

const router = useRouter();
const goBack = () => {
    router.go(-1);
};
</script>

<style scoped>
</style>
