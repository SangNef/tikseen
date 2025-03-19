<template>
    <div class="h-full">
        <div class="h-[calc((100%-16px)/20)] w-full flex flex-row items-center">
            <hr class="w-full border-[1px] border-[#e5e7eb]" />
            <p class="whitespace-nowrap px-3 font-bold opacity-50">온리원 이벤트</p>
            <hr class="w-full border-[1px] border-[#e5e7eb]" />
        </div>
        <Carousel />
        <div class="min-h-[calc((100%-16px)/20)] w-full flex flex-row items-center">
            <hr class="w-full border-[1px] border-[#e5e7eb]" />
            <p class="whitespace-nowrap px-3 font-bold opacity-50">전국 지명 순위</p>
            <hr class="w-full border-[1px] border-[#e5e7eb]" />
        </div>
        <List />
    </div>
</template>

<script setup>
import Carousel from "./Carousel.vue";
import List from "./List.vue";
</script>

<style></style>
