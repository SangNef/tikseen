<template>
    <div class="text-[0.5rem]">
        <AuthHeader />
        <slot />
    </div>
</template>

<script setup>
import AuthHeader from '@/components/mobile/AuthHeader.vue';
</script>

<style></style>
