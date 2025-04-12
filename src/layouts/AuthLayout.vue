<template>
    <div class="max-w-md mx-auto bg-white relative mt-[env(safe-area-inset-top)]">
        <div
            :style="{
                backgroundImage: `
          linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0) 25%),
          linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.6) 20%, rgba(0, 0, 0, 0) 30%),
          url(${LoginBg})
        `,
        }"
        class="bg-cover bg-center w-full h-screen px-4 py-6 relative">
        <div class="absolute top-0 left-0 p-4">
            <img :src="logo" width="80" height="80" class="w-20 h-auto" alt="logo" />
        </div>
        <div class="flex items-end h-full justify-center pb-30 z-999 auth-layout">
            <div class="w-full max-w-[400px] mx-auto mt-10 rounded-lg shadow-lg p-2 text-white">
                <slot />
            </div>
        </div>
        </div>
    </div>
</template>

<script setup>
import LoginBg from "@landing/assets/images/bg/login-bg.png";
import logo from "@landing/assets/images/logo.png";
</script>

<style scoped>
.auth-layout {
    @media (max-width: 400px) {
        padding-bottom: 1rem !important;
    }
}
</style>
