<template>
    <div class="pt-10 max-w-7xl mx-auto">
        <div class="px-6">
            <div class="bg-white h-[80vh] md:h-max border border-[#999] rounded-lg overflow-auto md:p-5">
                <div class="border border-[#999] max-md:border-none">
                    <div
                        class="p-[14px] border-b border-[#00000012] text-[15px] text-[#656565] flex items-center font-bold">
                        Crypto Market Capitalization
                        <img :src="light" alt="" style="height: 28px; width: auto; margin: -5px 0" />
                    </div>
                    <table class="w-full font-normal text-left border-collapse">
                        <thead class="bg-white text-[#333] uppercase text-xs">
                            <tr>
                                <th
                                    class="p-3 font-bold border cursor-pointer max-md:hidden"
                                    style="border-color: #00000012"
                                    @click="sortBy('index')">
                                    #
                                    <ChevronUpDownIcon
                                        class="w-4 h-4 inline ml-1"
                                        :class="{
                                            'text-[#0097a9]': sortKey === 'index',
                                            'text-[#ccc]': sortKey !== 'index',
                                        }" />
                                </th>
                                <th
                                    class="p-3 font-bold border cursor-pointer"
                                    style="border-color: #00000012"
                                    @click="sortBy('name')">
                                    Coin
                                    <ChevronUpDownIcon
                                        class="w-4 h-4 inline ml-1"
                                        :class="{
                                            'text-[#0097a9]': sortKey === 'name',
                                            'text-[#ccc]': sortKey !== 'name',
                                        }" />
                                </th>
                                <th
                                    class="p-3 font-bold border cursor-pointer text-right"
                                    style="border-color: #00000012"
                                    @click="sortBy('price')">
                                    Price
                                    <ChevronUpDownIcon
                                        class="w-4 h-4 inline ml-1"
                                        :class="{
                                            'text-[#0097a9]': sortKey === 'price',
                                            'text-[#ccc]': sortKey !== 'price',
                                        }" />
                                </th>
                                <th
                                    class="p-3 font-bold border cursor-pointer max-md:hidden text-end"
                                    style="border-color: #00000012"
                                    @click="sortBy('volume')">
                                    Volume (24H)
                                    <ChevronUpDownIcon
                                        class="w-4 h-4 inline ml-1"
                                        :class="{
                                            'text-[#0097a9]': sortKey === 'volume',
                                            'text-[#ccc]': sortKey !== 'volume',
                                        }" />
                                </th>
                                <th
                                    class="p-3 font-bold border max-md:hidden text-right"
                                    style="border-color: #00000012">
                                    Last 24h
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <template v-for="(coin, index) in coinsWithChart" :key="coin.code">
                                <tr :class="['transition', index % 2 === 0 ? 'bg-[#f8fafb]' : '']">
                                    <td class="px-[18px] py-2 max-md:hidden">{{ index + 1 }}</td>
                                    <td class="px-[18px] py-2 flex items-center gap-2.5">
                                        <div class="rounded bg-[#d0d0d0] p-1 md:hidden" @click="toggleRow(index)">
                                            <ChevronDownIcon class="w-4 h-4 text-white" />
                                        </div>
                                        <img :src="coin.img" alt="" class="w-[35px] h-[35px]" />
                                        <div class="flex flex-col items-start">
                                            <span class="font-semibold text-[#0097a9] text-[16.5px]">{{
                                                coin.name
                                            }}</span>
                                            <span class="text-[#999] text-[13.5px]">{{ coin.code }}</span>
                                        </div>
                                    </td>
                                    <td class="px-[18px] py-2 text-[#37414a] text-[15px] text-end">{{ coin.price }}</td>
                                    <td class="px-[18px] py-2 text-[#37414a] text-[15px] text-end max-md:hidden">
                                        {{ coin.volume }}
                                    </td>
                                    <td class="px-[18px] py-2 w-[120px] max-md:hidden">
                                        <ChartMini :data="coin.chartData" />
                                    </td>
                                </tr>
                                <!-- Dòng mở rộng -->
                                <tr v-if="expandedRows.includes(index)" class="md:hidden bg-[#f8fafb] text-sm">
                                    <td colspan="3" class="px-[18px] py-2 space-y-2">
                                        <div class="flex justify-between">
                                            <span class="font-medium">#</span>
                                            <span>{{ index + 1 }}</span>
                                        </div>
                                        <div class="flex justify-between">
                                            <span class="font-medium">Volume (24H)</span>
                                            <span>{{ coin.volume }}</span>
                                        </div>
                                        <div class="flex justify-between items-center">
                                            <span class="font-medium">Last 24h</span>
                                            <ChartMini :data="coin.chartData" />
                                        </div>
                                    </td>
                                </tr>
                            </template>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";
import light from "@/assets/images/logo/light.svg";
import coinsData from "@/data/coin";
import { ChevronUpDownIcon } from "@heroicons/vue/24/solid";
import ChartMini from "./ChartMini.vue";
import { ChevronDownIcon } from "@heroicons/vue/24/outline";

const sortKey = ref("");
const sortAsc = ref(true);
const coins = ref(coinsData);

const expandedRows = ref([]);
function toggleRow(index) {
    const i = expandedRows.value.indexOf(index);
    if (i > -1) {
        expandedRows.value.splice(i, 1);
    } else {
        expandedRows.value.push(index);
    }
}

function sortBy(key) {
    if (sortKey.value === key) {
        sortAsc.value = !sortAsc.value;
    } else {
        sortKey.value = key;
        sortAsc.value = true;
    }
}

const sortedCoins = computed(() => {
    if (!sortKey.value) return coins.value;
    return [...coins.value].sort((a, b) => {
        let valA = a[sortKey.value];
        let valB = b[sortKey.value];

        if (sortKey.value === "price" || sortKey.value === "volume") {
            valA = parseFloat(String(valA).replace(/[$,]/g, "")) || 0;
            valB = parseFloat(String(valB).replace(/[$,]/g, "")) || 0;
        }

        return sortAsc.value ? (valA > valB ? 1 : valA < valB ? -1 : 0) : valA < valB ? 1 : valA > valB ? -1 : 0;
    });
});

function generateRandomChart(price) {
    const data = [];
    const fluctuation = price * 0.0005; // dao động 5%

    for (let i = 0; i < 19; i++) {
        // 19 giá trị random
        const randomOffset = (Math.random() * 2 - 1) * fluctuation; // [-5%, +5%]
        const value = (price + randomOffset).toFixed(2);
        data.push(Number(value));
    }

    data.push(price); // Giá trị cuối cùng luôn là giá hiện tại
    return data;
}

const coinsWithChart = computed(() =>
    sortedCoins.value.map((coin) => ({
        ...coin,
        chartData: generateRandomChart(parseFloat(String(coin.price).replace(/[$,]/g, "")) || 0),
    }))
);
</script>

<style scoped>
table {
    border-collapse: collapse;
}
th,
td {
    white-space: nowrap;
}
</style>
