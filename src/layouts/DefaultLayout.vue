<template>
    <div class="flex flex-row">
        <SideBar />
        <div class="ml-16 w-full h-screen bg-gray-100 flex flex-col">
            <Header />
            <slot />
        </div>
    </div>
</template>

<script setup>
import SideBar from '@/components/Main/SideBar.vue';
import Header from '@/components/Main/Header.vue';
</script>

<style></style>
