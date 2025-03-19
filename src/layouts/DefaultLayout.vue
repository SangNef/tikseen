<template>
    <div class="flex-col w-[100vw] h-[100dvh] flex justify-center items-center antialiased">
        <div class="w-[100vw] h-[100dvh] max-w-[480px]">
            <Header />
            <div class="px-3 overflow-hidden py-2 h-[calc(100%-130px)]">
                <slot />
            </div>
            <BottomTab />
        </div>
    </div>
</template>

<script setup>
import Header from "@client/components/Header.vue";
import BottomTab from "@client/components/BottomTab.vue";
</script>
