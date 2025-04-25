<template>
    <div
        class="h-full overflow-y-auto scroll-hidden w-[calc(100vw-840px)] max-lg:w-[calc(100vw-420px)] max-md:w-full bg-[#151a20] flex-1">
        <div class="h-25 flex items-center mb-1 overflow-hidden relative">
            <div class="marquee-wrapper">
                <div class="marquee-track">
                    <div v-for="i in 2" :key="i" class="marquee-loop whitespace-nowrap flex items-center">
                        <div
                            v-for="(tool, index) in tools"
                            :key="index + '-' + i"
                            class="text-white text-sm flex items-start flex-col px-8 border-l border-[#ffffff5c]">
                            <span class="font-bold">{{ tool.coin }}USDT</span>
                            <span :class="tool.percent.startsWith('-') ? 'text-[#fa3963]' : 'text-[#2fedb1]'">{{
                                tool.total
                            }}</span>
                            <span :class="tool.percent.startsWith('-') ? 'text-[#fa3963]' : 'text-[#2fedb1]'">
                                ({{ tool.percent }})
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <VueApexCharts type="candlestick" height="350" :options="chartOptions" :series="series" />
        <div class="mt-8 w-full h-[260px] md:h-[calc(100vh-580px)] overflow-y-auto">
            <table class="w-full">
                <thead class="w-full bg-[#030f1c]">
                    <tr>
                        <th
                            class="whitespace-nowrap uppercase bg-[#0f1216] text-white sticky top-0 text-[10px] font-bold align-middle p-3">
                            vị thế
                        </th>
                        <th
                            class="whitespace-nowrap uppercase bg-[#0f1216] text-white sticky top-0 text-[10px] font-bold align-middle p-3">
                            lượt
                        </th>
                        <th
                            class="whitespace-nowrap uppercase bg-[#0f1216] text-white sticky top-0 text-[10px] font-bold align-middle p-3">
                            loại
                        </th>
                        <th
                            class="whitespace-nowrap uppercase bg-[#0f1216] text-white sticky top-0 text-[10px] font-bold align-middle p-3">
                            kết quả
                        </th>
                        <th
                            class="whitespace-nowrap uppercase bg-[#0f1216] text-white sticky top-0 text-[10px] font-bold align-middle p-3">
                            số tiền
                        </th>
                        <th
                            class="whitespace-nowrap uppercase bg-[#0f1216] text-white sticky top-0 text-[10px] font-bold align-middle p-3">
                            tiền thưởng
                        </th>
                    </tr>
                </thead>
                <tbody class="h-[260px] max-md:overflow-y-auto scroll-hidden">
                    <tr
                        v-for="(tx, index) in transactions"
                        :key="index"
                        class="text-white text-[13px] text-center border-t border-[#1e2a36] font-semibold">
                        <td class="p-3">{{ tx.coin }}USDT</td>
                        <td class="p-3">{{ tx.period }}</td>
                        <td
                            class="p-3"
                            :class="{
                                'text-[#29cb97]': tx.vote === 'up',
                                'text-red-500': tx.vote === 'down',
                            }">
                            {{ tx.vote === "up" ? "Lên" : "Xuống" }}
                        </td>
                        <td class="p-3 text-white">
                            {{ getResultText(tx.result, tx.vote) }}
                        </td>
                        <td class="p-3">{{ tx.amount }}</td>
                        <td class="p-3">
                            {{
                                tx.result === "pending" || getResultText(tx.result, tx.vote) === "Thua" ? 0 : tx.profit
                            }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
import tools from "@/data/tool";
import transactions from "@/data/transaction";

import VueApexCharts from "vue3-apexcharts";
import { ref } from "vue";

const getResultText = (result, vote) => {
    if (result === "pending") return "Chờ";
    if ((result === "up" || result === "down") && result === vote) return "Thắng";
    if ((result === "up" || result === "down") && result !== vote) return "Thua";
    return "Không xác định";
};

const now = new Date();
const data = [];

let baseTime = new Date(now.getTime() - 2 * 60 * 60 * 1000);
let lastClose = 100;

// fake biểu đồ
for (let i = 0; i < 120; i++) {
    const open = lastClose;
    const high = open + Math.random() * 2;
    const low = open - Math.random() * 2;
    const close = low + Math.random() * (high - low);

    data.push({
        x: new Date(baseTime.getTime() + i * 60000),
        y: [open.toFixed(2), high.toFixed(2), low.toFixed(2), close.toFixed(2)],
    });

    lastClose = close;
}

const series = ref([{ data }]);

const chartOptions = ref({
    chart: {
        type: "candlestick",
        height: 350,
        background: "#0f0f0f",
        toolbar: {
            show: true,
            tools: {
                download: true,
                selection: true,
                zoom: true,
                zoomin: true,
                zoomout: true,
                pan: true,
                reset: true,
            },
        },
        animations: { enabled: false },
    },
    xaxis: {
        type: "datetime",
        labels: {
            format: "HH:mm",
        },
    },
    yaxis: {
        opposite: true,
        tooltip: { enabled: true },
    },
    grid: {
        show: true,
        borderColor: "rgba(255, 255, 255, 0.2)",
        strokeDashArray: 0,
        position: "back",
        xaxis: {
            lines: {
                show: true,
            },
        },
        yaxis: {
            lines: {
                show: true,
            },
        },
    },
    tooltip: {
        shared: false,
        custom: () => {
            return "";
        },
    },
    plotOptions: {
        candlestick: {
            colors: {
                upward: "#2fedb1",
                downward: "#fa3963",
            },
        },
    },
});
</script>

<style scoped>
.marquee-wrapper {
    position: relative;
    width: 100%;
    overflow: hidden;
}

.marquee-track {
    display: flex;
    width: max-content;
    animation: marquee-infinite 40s linear infinite;
}

@keyframes marquee-infinite {
    0% {
        transform: translateX(0%);
    }
    100% {
        transform: translateX(-50%);
    }
}

::v-deep(.apexcharts-toolbar) {
    position: absolute !important;
    top: 80% !important;
    left: 50% !important;
    transform: translate(-50%, -50%);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s ease;
}

::v-deep(.apexcharts-canvas:hover .apexcharts-toolbar) {
    opacity: 1;
    pointer-events: auto;
}

div::-webkit-scrollbar {
    display: none;
}

::-webkit-scrollbar {
    width: 0px;
    height: 0px;
}

.scroll-hidden {
    scrollbar-width: none;
    -ms-overflow-style: none;
}
</style>
