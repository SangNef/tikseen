<template>
    <div class="flex justify-between items-center px-6 h-[50px] bg-[#0f171c] fixed top-0 left-0 w-full">
        <router-link to="/">
            <img :src="logo" alt="" class="h-7.5 w-auto">
        </router-link>
        <router-link
            :to="buttonLink"
            class="text-white text-[16px]"
        >
            {{ buttonText }}
        </router-link>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import logo from "@/assets/images/logo/logo.png";

const route = useRoute();

const buttonText = computed(() => {
    return route.path === '/login'
        ? 'Đăng ký'
        : route.path === '/register'
        ? 'Đăng nhập'
        : 'Đăng ký';
});

const buttonLink = computed(() => {
    return route.path === '/login'
        ? '/register'
        : '/login';
});
</script>

<style></style>
