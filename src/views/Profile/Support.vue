<template>
    <div class="bg-white max-w-100 w-full mx-auto h-screen relative font-helvetica">
        <div class="h-[50px] absolute top-0 left-0 w-full flex justify-between items-center">
            <div class="w-[51px] h-[51px] flex items-center justify-center">
                <ChevronLeftIcon class="w-7 h-7 text-[#333] cursor-pointer" @click="router.back()" />
            </div>
            <div class="text-[20px] [line-height: 30px] text-[#333]">CSKH</div>
            <div class="w-5"></div>
        </div>
        <div class="mt-[60px]">
            <div class="flex flex-col mx-[15px] my-2.5 p-[15px]">
                <div
                    v-for="item in items"
                    :key="item.title"
                    class="flex-1 flex items-center justify-between border-b border-[#9797970d] py-[15px] px-2 bg-[#f7f7f7] rounded-md my-[5px]"
                    @click="navigateTo(item.type)"
                >
                    <span class="text-[#333]">{{ item.title }}</span>
                    <ChevronRightIcon
                        class="w-4 h-4 text-[#333]"
                        :style="{ strokeWidth: '2.5' }"
                        :stroke-width="2"
                    />
            </div>
            </div>
        </div>
    </div>
</template>


<script lang="ts" setup>
import { useRouter } from "vue-router";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/24/outline";

const router = useRouter();

const items = [
    { title: "Chát với admin", type: 0 },
    { title: "Chát với cô giáo", type: 1},
    { title: "Chát với trợ lý", type: 2},
    { title: "Chát với trợ lý 2", type: 3},
]

const navigateTo = (type: number) => {
    router.push({ path: "/support", query: { type } });
};
</script>

<style></style>
