<template>
    <div class="flex justify-between flex-wrap items-start border-t border-[#dfdfda] pt-[15px] bg-white">
        <div
            v-if:exists="amount"
            class="py-[3px] pl-[3px] leading-[21px] ml-[5px] mt-[9px] text-sm relative text-white flex items-center rounded-sm max-w-[76px]"
            :style="{ backgroundColor: bgColor }">
            <span>{{ amount }}</span>
            <ChevronRightIcon class="w-4 h-4 stroke-3 ml-1" />
        </div>

        <div class="w-[300px] float-left px-[1.5rem]" :class="{ 'w-full !px-[0.75rem]': !amount }">
            <div class="flex justify-center mb-2.5">
                <div
                    v-for="num in numbers.slice(0, 5)"
                    :key="num"
                    :style="{ width: 100 / numbers.length + '%' }"
                    class="min-w-1/5">
                    <div class="number-box">{{ num }}</div>
                </div>
            </div>

            <div class="flex justify-center mb-2.5">
                <div
                    v-for="num in numbers.slice(5, 10)"
                    :key="num"
                    :style="{ width: 100 / numbers.length + '%' }"
                    class="min-w-1/5">
                    <div class="number-box">{{ num }}</div>
                </div>
            </div>

            <div class="flex justify-center mb-2.5">
                <div
                    v-for="num in numbers.slice(10, 15)"
                    :key="num"
                    :style="{ width: 100 / numbers.length + '%' }"
                    class="min-w-1/5">
                    <div class="number-box">{{ num }}</div>
                </div>
            </div>

            <div class="flex justify-start mb-2.5">
                <div
                    v-for="num in numbers.slice(15, 20)"
                    :key="num"
                    :style="{ width: 100 / 5 + '%' }"
                    class="min-w-1/5">
                    <div class="number-box">{{ num }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ChevronRightIcon } from "@heroicons/vue/24/outline";
import { computed } from "vue";

const props = defineProps({
    vt: Boolean,
    amount: String,
    numbers: Array,
    color: String,
});

const bgColor = computed(() => {
    switch (props.color) {
        case "red":
            return "rgb(230, 93, 93)";
        case "orange":
            return "rgb(254, 177, 68)";
        case "blue":
            return "rgb(93, 191, 230)";
        case "green":
            return "rgb(93, 230, 98)";
        case "purple":
            return "rgb(238, 14, 193)";
        default:
            return "rgb(200, 200, 200)";
    }
});
</script>

<style scoped>
.number-box {
    display: block;
    width: 32px;
    height: 32px;
    border-radius: 17px;
    font-size: 18px;
    color: #dc3b40;
    text-align: center;
    line-height: 32px;
    text-decoration: none;
    background-color: #fff;
    border: 1px solid #bfbfbf;
    position: relative;
}
</style>
