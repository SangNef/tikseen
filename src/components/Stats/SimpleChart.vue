<template>
  <div>
    <div class="relative h-full w-full">
      <!-- Các cột biểu đồ -->
      <div class="flex items-end justify-between h-44 sm:h-52 gap-0.5 sm:gap-1" v-if="data.length > 0">
        <div
          v-for="(item, index) in data"
          :key="index"
          class="relative flex-1 rounded-t-md hover:opacity-80 transition-opacity duration-200 cursor-pointer"
          :style="{ height: calculateHeight(item.value) + '%', backgroundColor: item.color || '#3b82f6' }"
          @mouseenter="activeItem = index"
          @mouseleave="activeItem = null">
          <!-- Tooltip -->
          <div
            v-if="activeItem === index"
            class="absolute -top-14 sm:-top-16 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs rounded-md py-1 px-2 min-w-max z-10 shadow-lg">
            <div class="font-medium">{{ item.label }}</div>
            <div class="text-center">{{ item.value }}</div>
          </div>
        </div>
      </div>

      <!-- Nội dung trống -->
      <div v-else class="h-full w-full flex items-center justify-center">
        <div class="text-gray-400 text-xs sm:text-sm">Không có dữ liệu hiển thị</div>
      </div>

      <!-- Đường kẻ ngang và số liệu -->
      <div
        v-if="data.length > 0"
        class="absolute top-0 left-0 w-full h-full flex flex-col justify-between pointer-events-none">
        <div v-for="n in 4" :key="n" class="relative w-full border-t border-gray-100 text-xs text-gray-400">
          <span class="absolute -top-2.5 -left-4 sm:-left-7 text-[10px] sm:text-xs">
            {{ formatValue(Math.round(maxValue * (1 - (n - 1) / 4))) }}
          </span>
        </div>
      </div>
    </div>

    <!-- Nhãn trục x -->
    <div v-if="data.length > 0" class="flex justify-between mt-2">
      <div
        v-for="(item, index) in data"
        :key="index"
        class="text-[10px] sm:text-xs text-gray-500 text-center flex-1 truncate px-0.5 sm:px-1">
        {{ item.label }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  data: {
    type: Array,
    required: true,
    default: () => [],
  },
});

const activeItem = ref(null);

const maxValue = computed(() => {
  if (props.data.length === 0) return 0;
  return Math.max(...props.data.map((item) => item.value)) * 1.1; // Thêm 10% margin trên cùng
});

const calculateHeight = (value) => {
  if (maxValue.value === 0) return 0;
  return (value / maxValue.value) * 100;
};

// Hàm định dạng giá trị lớn thành dạng viết tắt
const formatValue = (value) => {
  if (value >= 1000000) {
    return (value / 1000000).toFixed(1) + 'M';
  } else if (value >= 1000) {
    return (value / 1000).toFixed(1) + 'K';
  }
  return value;
};
</script>
