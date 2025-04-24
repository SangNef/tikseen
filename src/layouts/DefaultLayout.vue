<template>
    <div class="w-full overflow-hidden flex">
        <div class="min-h-screen bg-[#111] flex flex-col">
            <Header />
            <div class="mt-12">
                <slot />
            </div>
            <Footer />
        </div>
    </div>
</template>

<script setup>
import Header from '@/components/Main/Header.vue';
import Footer from '@/components/Main/Footer.vue';
</script>

<style></style>
