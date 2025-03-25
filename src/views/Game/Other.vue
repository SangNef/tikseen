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
      title: "3 đầu",
      rows: [
          { number: ['Tam cô', 'Sảnh', 'Đôi', 'Nửa sảnh'], subNumber: [67.83, 14.47, 3.21, 2.39]},
          { number: ['Đã trộn số'], subNumber: [2.89]},
      ]
  },
  {
      title: "3 giữa",
      rows: [
          { number: ['Tam cô', 'Sảnh', 'Đôi', 'Nửa sảnh'], subNumber: [67.83, 14.47, 3.21, 2.39]},
          { number: ['Đã trộn số'], subNumber: [2.89]},
      ]
  },
  {
      title: "3 cuối",
      rows: [
          { number: ['Tam cô', 'Sảnh', 'Đôi', 'Nửa sảnh'], subNumber: [67.83, 14.47, 3.21, 2.39]},
          { number: ['Đã trộn số'], subNumber: [2.89]},
      ]
  },
  {
      title: "Rồng/Hổ",
      rows: [
          { number: ['Rồng', 'Hổ', 'Hòa'], subNumber: [1.8, 1.8, 9]},
      ]
  }
];
</script>
