<template>
    <div
        style="
            height: calc(690px - env(safe-area-inset-bottom));
            overflow: auto;
            overflow-x: hidden;
            width: 100%;
            position: absolute;
            z-index: 3;
            background-color: #fff;
            z-index: 1057;
        ">
        <table style="width: 100%; color: #666 !important">
            <thead style="background: #dfdfdf; font-size: 13px">
                <tr>
                    <td class="text-center leading-8">Mã số</td>
                    <td class="text-center leading-8">Kết quả giải thưởng</td>
                    <td class="text-center leading-8">Kết quả</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in result" :key="index" class="h-9 py-1" :class="{ 'bg-gray-100': index % 2 === 1 }">
                    <td style="font-size: 14px; border-right: 1px solid #dfdfdf" class="text-center">
                        {{ item.id }}
                    </td>
                    <td class="text-center">
                        <div class="flex justify-center space-x-1">
                            <span
                                v-for="(char, charIndex) in item.result.split('')"
                                :key="charIndex"
                                class="w-7 h-7 rounded-full text-[14px] leading-7 bg-[#e72732] flex items-center justify-center text-white">
                                {{ char }}
                            </span>
                        </div>
                    </td>

                    <td style="font-size: 14px;" class="text-center">{{ item.time }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { ref } from "vue";
const result = ref([
    {
        id: 123,
        result: "00192",
        time: "09:25",
    },
    {
        id: 123,
        result: "00192",
        time: "09:25",
    },
    {
        id: 123,
        result: "00192",
        time: "09:25",
    },
    {
        id: 123,
        result: "00192",
        time: "09:25",
    },
    {
        id: 123,
        result: "00192",
        time: "09:25",
    },
    {
        id: 123,
        result: "00192",
        time: "09:25",
    },
    {
        id: 123,
        result: "00192",
        time: "09:25",
    },
    {
        id: 123,
        result: "00192",
        time: "09:25",
    },
]);
</script>

<style scope></style>
