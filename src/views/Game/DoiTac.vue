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
        title: "Bội số",
        rows: [
            { number: ['Không bội', 'Bộ 1', 'Bộ 2', 'bộ 3'], subNumber: [2.52, 14.11, 13.83, 14.11]},
            { number: ['Bộ 4', 'Bộ 5', 'Bộ 6', 'bộ 7'], subNumber: [13.83, 14.11, 13.83, 14.11]},
            { number: ['Bộ 8', 'Bộ 9', 'Bộ 0/10', 'bộ lớn'], subNumber: [13.83, 14.11, 13.94, 14.11]},
            { number: ['Bộ nhỏ', 'Bộ lẻ', 'Bộ chẵn'], subNumber: [2.34, 2.34, 2.34]},
        ]
    },
    {
        title: "Cược phụ",
        rows: [
            { number: ['Bộ 5', 'Bộ 4', 'Cặp 3/2', 'Sảnh'], subNumber: [9000, 200, 100, 75]},
            { number: ['Bộ 3', '2 Đôi', '1 Đôi', 'Không bộ'], subNumber: [12.5, 7.812, 1.78, 2.97]}
        ]
    },
];
</script>
