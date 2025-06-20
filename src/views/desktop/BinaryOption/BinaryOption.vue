<template>
    <div class="bg-[#0c0c0c] py-1">
        <div class="grid grid-cols-12 gap-1 h-full">
            <Chart />
            <Bet />
        </div>
    </div>
</template>

<script setup>
import { logo1, logo2, logo3 } from "@/assets/desktop/future";
import Bet from "./Bet.vue";
import Chart from "./Chart.vue";
</script>

<style></style>
