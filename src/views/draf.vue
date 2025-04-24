<script setup>
import VueApexCharts from "vue3-apexcharts";
import { ref } from "vue";

// Tạo dữ liệu giả — mỗi phút 1 cây nến, từ 2 tiếng trước đến giờ
const now = new Date();
const data = [];

let baseTime = new Date(now.getTime() - 2 * 60 * 60 * 1000); // trừ 2 tiếng
let lastClose = 100; // giá khởi điểm

for (let i = 0; i < 120; i++) {
    // 120 phút = 2 tiếng
    const open = lastClose;
    const high = open + Math.random() * 2;
    const low = open - Math.random() * 2;
    const close = low + Math.random() * (high - low); // giá đóng trong khoảng low - high

    data.push({
        x: new Date(baseTime.getTime() + i * 60000), // cộng từng phút
        y: [open.toFixed(2), high.toFixed(2), low.toFixed(2), close.toFixed(2)],
    });

    lastClose = close;
}

const series = ref([{ data }]);

const chartOptions = ref({
    chart: {
        type: "candlestick",
        height: 350,
        animations: { enabled: false },
    },
    title: {
        text: "Biểu đồ giá 2 tiếng gần đây",
        align: "left",
    },
    xaxis: {
        type: "datetime",
    },
    yaxis: {
        tooltip: { enabled: true },
    },
    plotOptions: {
        candlestick: {
            colors: {
                upward: "#00B746", // nến tăng màu xanh
                downward: "#EF403C", // nến giảm màu đỏ
            },
        },
    },
});
</script>

<template>
    <VueApexCharts type="candlestick" height="350" :options="chartOptions" :series="series" />
</template>
