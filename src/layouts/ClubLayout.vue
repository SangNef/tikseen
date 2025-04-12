<template>
    <div class="max-w-md mx-auto bg-white relative mt-[env(safe-area-inset-top)] club">
        <slot />
        <BottomBar />
    </div>
</template>

<script setup>
import BottomBar from "@/components/BottomBar.vue";
</script>

<style scope></style>
