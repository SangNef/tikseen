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

<script>
import DataRow from "./DataRow.vue";

export default {
    components: { DataRow },
    data() {
        return {
            dataGroups: [
                {
                    title: "Dữ liệu 1",
                    rows: [
                        { number: [0, 1, 2, 3], subNumber: [9, 9, 9, 9] },
                        { number: [4, 5, 6, 7], subNumber:  [9, 9, 9, 9] },
                        { number: [8, 9], subNumber:  [9, 9] },
                    ],
                },
                {
                    title: "Dữ liệu 2",
                    rows: [
                        { number: [0, 1, 2, 3], subNumber: [9, 9, 9, 9] },
                        { number: [4, 5, 6, 7], subNumber:  [9, 9, 9, 9] },
                        { number: [8, 9], subNumber:  [9, 9] },
                    ],
                },
                {
                    title: "Dữ liệu 3",
                    rows: [
                        { number: [0, 1, 2, 3], subNumber: 9 },
                        { number: [4, 5, 6, 7], subNumber: 9 },
                        { number: [8, 9], subNumber: 9 },
                    ],
                },
                {
                    title: "Dữ liệu 4",
                    rows: [
                        { number: [0, 1, 2, 3], subNumber: 9 },
                        { number: [4, 5, 6, 7], subNumber: 9 },
                        { number: [8, 9], subNumber: 9 },
                    ],
                },
            ],
        };
    },
};
</script>
