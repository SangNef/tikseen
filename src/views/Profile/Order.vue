<template>
    <div class="bg-white max-w-100 w-full mx-auto h-screen relative font-helvetica">
        <div class="h-[50px] absolute top-0 left-0 w-full flex justify-between items-center">
            <div class="w-[51px] h-[51px] flex items-center justify-center">
                <ChevronLeftIcon class="w-7 h-7 text-[#333] cursor-pointer" @click="router.back()" />
            </div>
            <div class="text-[20px] [line-height: 30px] text-[#333]">Lịch sử đặt hàng</div>
            <div class="w-10"></div>
        </div>
        <div class="px-2.5 pt-[60px] mt-[25px]">
            <ul class="flex justify-between list-none mb-4">
                <li
                    v-for="(tab, index) in tabs"
                    :key="index"
                    class="flex justify-center items-center whitespace-nowrap text-white py-2.5 w-1/4 text-xs [line-height:18px] rounded-[10px] bg-[#ccc]"
                    :class="{ 'bg-gradient-to-b from-[#13a2ba] to-[#087c95] rounded-md': tab.role === activeTab }"
                    @click="handleSetActiveTab(tab.role)">
                    {{ tab.title }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import { ref } from "vue";

import { ChevronLeftIcon } from "@heroicons/vue/24/solid";

const router = useRouter();

const activeTab = ref("all");

const tabs = [
    { title: "Tất cả", role: "all" },
    { title: "Hôm nay", role: "today" },
    { title: "Trong 3 ngày", role: "3days" },
    { title: "Tuần này", role: "week" },
]

const handleSetActiveTab = (role: string) => {
    activeTab.value = role;
};
</script>

<style></style>
