<template>
    <div class="w-105 h-full bg-[#151a20] max-md:w-full">
        <div class="p-2.5 m-2 flex flex-col gap-5">
            <div class="border border-[#2fedb2] rounded-md bg-[#0000005c] py-2.5 px-[5px] flex">
                <div class="flex-1 flex flex-col items-center">
                    <span class="text-[#ffffff5c] text-xs pb-1">Sản phẩm</span>
                    <span class="text-white text-[15px] pb-1">BTC</span>
                </div>
                <div class="flex-1 flex flex-col items-center">
                    <span class="text-[#ffffff5c] text-xs pb-1">Lượt</span>
                    <span class="text-[#ffffff5c] text-[15px] pb-1">202504240123</span>
                </div>
                <div class="flex-1 flex flex-col items-center">
                    <span class="text-[#ffffff5c] text-xs pb-1">Đếm ngược</span>
                    <span class="text-white text-[15px] pb-1">00:59</span>
                </div>
            </div>
            <div class="text-center text-[16px] font-bold text-white">24/04/2025 12:28:01</div>
            <div class="flex gap-[15px]">
                <div
                    class="border border-[#2fedb2] rounded-md bg-[#0000005c] py-2.5 px-[15px] flex flex-col flex-1 text-center">
                    <span class="text-[#ffffff5c] text-xs pb-1">Tiền tệ giao dịch</span>
                    <span class="text-white text-[15px] pb-1">VND</span>
                </div>
                <div
                    class="border border-[#2fedb2] rounded-md bg-[#0000005c] p-2.5 flex justify-between flex-3 text-center">
                    <div class="flex flex-[1.5] flex-col gap-1 text-start">
                        <span class="text-[#ffffff5c] text-xs pb-1">Số lượng</span>
                        <input
                            type="number"
                            readonly
                            value="100000"
                            class="bg-none border border-[#f9cc455c] rounded-md text-white min-h-12 text-center w-[95%] text-xs" />
                    </div>
                    <div class="text-end flex-1">
                        <p class="text-[#ffffff5c] text-xs pb-1">Số dư</p>
                        <p class="text-white text-xs mt-2!">10,000,000,000</p>
                    </div>
                </div>
            </div>
            <div class="mt-2.5">
                <select
                    name=""
                    id=""
                    v-model="selectedValue"
                    class="bg-[#353c46] border border-[#e3e3e36e] shadow-none text-white text-[15px] h-[45px] w-full py-[3.75px] px-[7.5px] leading-1.5 rounded outline-none">
                    <option v-for="(option, index) in betOptions" :key="index" :value="option.value">
                        {{ option.label }}
                    </option>
                </select>
            </div>
            <div class="flex gap-2.5">
                <button
                    class="flex-1 text-center rounded-md border-2 px-2.5 py-[5px] cursor-pointer text-[15px] duration-200 ease-in text-white"
                    :class="[
                        selectedDirection === 'up'
                            ? 'bg-[#2fedb2] border-[#2fedb2]'
                            : 'bg-[#0f1823] border-[#2fedb2] hover:bg-[#2fedb2]',
                    ]"
                    @click="handleSelect('up')">
                    Lên
                </button>
                <button
                    class="flex-1 text-center rounded-md border-2 px-2.5 py-[5px] cursor-pointer text-[15px] duration-200 ease-in text-white"
                    :class="[
                        selectedDirection === 'down'
                            ? 'bg-[#fa3963] border-[#fa3963]'
                            : 'bg-[#0f1823] border-[#fa3963] hover:bg-[#fa3963]',
                    ]"
                    @click="handleSelect('down')">
                    Xuống
                </button>
            </div>
            <button
                :disabled="!bet"
                class="button flex-1 bg-[#2fedb2] disabled:bg-[#888] cursor-pointer disabled:cursor-not-allowed text-white text-[20px] p-2.5 text-center rounded-md uppercase">
                Xác nhận
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const betOptions = [
    { label: "100k", value: 100000 },
    { label: "200k", value: 200000 },
    { label: "300k", value: 300000 },
    { label: "500k", value: 500000 },
    { label: "1m", value: 1000000 },
    { label: "2m", value: 2000000 },
    { label: "3m", value: 3000000 },
    { label: "5m", value: 5000000 },
    { label: "10m", value: 10000000 },
    { label: "20m", value: 20000000 },
    { label: "30m", value: 30000000 },
    { label: "50m", value: 50000000 },
    { label: "100m", value: 100000000 },
    { label: "200m", value: 200000000 },
    { label: "300m", value: 300000000 },
    { label: "500m", value: 500000000 },
];

const selectedValue = ref(100000);
const bet = ref(null);
const selectedDirection = ref(null);

const handleSelect = (direction) => {
  selectedDirection.value = direction;
  bet.value = selectedValue.value;
  console.log(`Đặt cược ${direction} với số tiền: ${bet.value}`);
};
</script>

<style></style>
