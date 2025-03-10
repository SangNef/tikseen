<template>
    <div class="bg-white max-w-100 mx-auto h-screen font-helvetica">
        <div class="flex justify-between items-center w-full h-[50px] fixed top-0 left-[50%] transform translate-x-[-50%] max-w-100 mx-auto">
            <div class="flex justify-center items-center w-[51px] h-full">
                <ChevronLeftIcon class="w-7 h-7 text-[#333] cursor-pointer" @click="goBack" />
            </div>
            <span class="text-[#333] text-xl">Lịch sử đặt hàng</span>
            <div class="w-10"></div>
        </div>
        <div class="pt-15 px-2.5">
            <div class="mt-[25px] mb-4">
                <button
                    class="flex justify-center items-center whitespace-nowrap text-white bg-gradient-to-b from-[#13a2ba] to-[#087c95] py-2.5 w-1/4 text-xs [line-height:18px] rounded-[6px]">
                    Tất cả
                </button>
            </div>
            <table class="w-full mb-4 align-top border-[#dee2e6] caption-bottom border-collapse">
                <thead class="align-bottom border-inherit">
                    <tr class="border-inherit">
                        <th
                            v-for="column in columns"
                            :key="column.label"
                            class="w-1/4 border-b border-[#e0e4e8]">
                            {{ column.label }}
                        </th>
                    </tr>
                </thead>
            </table>
        </div>
    </div>
</template>

<script setup>
import { ChevronLeftIcon } from "@heroicons/vue/24/solid";
import { useRouter } from "vue-router";

const router = useRouter();

const goBack = () => {
    router.back();
};

const columns = [
    {
        label: "Thời gian",
    },
    {
        label: "Thông tin",
    },
    {
        label: "Trạng thái",
    },
    {
        label: "Ghi chú",
    },
];
</script>

<style>
th {
    background-color: #fff;
    box-shadow: #0000 0px 0px 0px 9999px;
    display: table-cell;
    font-size: 12px;
    font-weight: 700;
    gap: normal;
    line-height: 18px;
    padding: 8px;
    text-align: left;
}
</style>
