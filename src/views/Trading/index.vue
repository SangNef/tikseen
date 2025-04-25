<template>
    <Header />
    <div class="md:h-[calc(100vh-58px)] mb-1 mx-1 gap-1 flex md:flex-nowrap justify-between max-md:flex-col mt-[54px]">
        <Tool />
        <Chart />
        <Bet />
    </div>
</template>

<script setup>
import Header from '@/components/Account/Header.vue';
import Bet from './Bet.vue';
import Chart from './Chart.vue';
import Tool from './Tool.vue';

</script>

<style></style>
