<template>
    <div class="w-[190px] md:w-60 h-[50px]">
        <apexchart type="area" :options="chartOptions" :series="series" width="100%" height="60" />
    </div>
</template>

<script setup>
import { computed } from "vue";
import VueApexCharts from "vue3-apexcharts";

const props = defineProps({
    data: {
        type: Array,
        required: true,
    },
});

const chartOptions = computed(() => ({
    chart: {
        sparkline: { enabled: true },
    },
    stroke: {
        curve: "smooth",
        width: 2,
        colors: ["#3ab2c8"],
    },
    fill: {
        opacity: 0.3,
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.4,
            opacityTo: 0.1,
            stops: [0, 90, 100],
            colorStops: [
                [
                    { offset: 0, color: "#3ab2c8", opacity: 0.4 },
                    { offset: 100, color: "#3ab2c8", opacity: 0.1 },
                ],
            ],
        },
    },
    tooltip: {
        enabled: false,
    },
    colors: ["#3ab2c8"],
}));

const series = computed(() => [
    {
        data: props.data,
    },
]);
</script>
