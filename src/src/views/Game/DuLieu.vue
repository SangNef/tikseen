<template>
    <div class="px-[15px] pb-[15px] bg-white">
        <div v-for="(group, index) in dataGroups" :key="index" class="text-center">
            <div
                class="inline-block text-[15px] leading-[1.2] mb-[15px] pt-[15px] border-b-[3px] border-[#e72732] pb-1">
                {{ group.title }}
            </div>
            <DataRow v-for="(row, rowIndex) in group.rows" :key="rowIndex" :items="row" />
        </div>
    </div>
</template>

<script setup>
import DataRow from "./DataRow.vue";

const dataGroups = [
    {
        title: "Dữ liệu 1",
        rows: [
            { number: ['A', 'S', 'X', 'H'], subNumber: [1.95, 1.95, 1.95, 1.95]}
        ]
    },
    {
        title: "Dữ liệu 2",
        rows: [
            { number: ['A', 'S', 'X', 'H'], subNumber: [1.95, 1.95, 1.95, 1.95]}
        ]
    },
    {
        title: "Dữ liệu 3",
        rows: [
            { number: ['A', 'S', 'X', 'H'], subNumber: [1.95, 1.95, 1.95, 1.95]}
        ]
    },
    {
        title: "Dữ liệu 4",
        rows: [
            { number: ['A', 'S', 'X', 'H'], subNumber: [1.95, 1.95, 1.95, 1.95]}
        ]
    },
    {
        title: "Dữ liệu 5",
        rows: [
            { number: ['A', 'S', 'X', 'H'], subNumber: [1.95, 1.95, 1.95, 1.95]}
        ]
    },
    {
        title: "Dữ liệu Tổng",
        rows: [
            { number: ['A', 'S', 'X', 'H'], subNumber: [1.95, 1.95, 1.95, 1.95]}
        ]
    },
];
</script>
