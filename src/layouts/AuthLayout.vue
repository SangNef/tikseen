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
            class="bg-cover bg-center w-full h-screen px-4 py-6">
            <img :src="logo" width="80" height="80" class="w-20 h-auto" alt="logo" />
            <div class="flex items-end h-full justify-center pb-30 z-999">
                <div class="w-full max-w-[400px] mx-auto mt-10 rounded-lg shadow-lg p-2 text-white">
                    <slot />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import LoginBg from "@/assets/images/bg/login-bg.png";
import logo from "@/assets/images/logo.png";
</script>

<style scoped></style>
