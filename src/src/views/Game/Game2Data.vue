<template>
    <div class="flex justify-between flex-wrap items-start border-t border-[#dfdfda] pt-[15px] bg-white">
        <!-- Hiển thị amount nếu có -->
        <div
            v-if="amount"
            class="py-[3px] pl-[3px] leading-[21px] ml-[5px] mt-[9px] text-sm relative text-white flex items-center rounded-sm max-w-[76px]"
            :style="{ backgroundColor: bgColor }">
            <span>{{ amount }}</span>
            <ChevronRightIcon class="w-4 h-4 stroke-3 ml-1" />
        </div>

        <!-- Khu vực hiển thị các số -->
        <div class="w-[300px] float-left px-[1.5rem]" :class="{ 'w-full !px-[0.75rem]': !amount }">
            <div v-for="(row, rowIndex) in chunkedNumbers" :key="rowIndex" class="flex justify-center mb-2.5">
                <div
                    v-for="(num, index) in row"
                    :key="index"
                    class="min-w-1/5"
                    :style="{ width: '20%' }"
                >
                    <div
                        class="number-box cursor-pointer"
                        :class="{ 'selected': selectedNumbers.includes(num) }"
                        @click="toggleSelection(num)"
                    >
                        {{ num }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ChevronRightIcon } from "@heroicons/vue/24/outline";
import { computed, ref } from "vue";

const props = defineProps({
    vt: Boolean,
    amount: String,
    numbers: Array,  // Đảm bảo rằng numbers được truyền vào là một array
    color: String,
});

// Xử lý màu nền theo props.color
const bgColor = computed(() => {
    const colors = {
        red: "rgb(230, 93, 93)",
        orange: "rgb(254, 177, 68)",
        blue: "rgb(93, 191, 230)",
        green: "rgb(93, 230, 98)",
        purple: "rgb(238, 14, 193)",
        default: "rgb(200, 200, 200)"
    };
    return colors[props.color] || colors.default;
});

// Chia số thành nhóm 5 số để hiển thị theo hàng
const chunkedNumbers = computed(() => {
    if (!props.numbers || props.numbers.length === 0) return [];
    const chunkSize = 5;
    const result = [];
    for (let i = 0; i < props.numbers.length; i += chunkSize) {
        result.push(props.numbers.slice(i, i + chunkSize));
    }
    return result;
});

// Danh sách số đã chọn
const selectedNumbers = ref([]);

// Xử lý chọn/bỏ chọn số
const toggleSelection = (num) => {
    if (selectedNumbers.value.includes(num)) {
        selectedNumbers.value = selectedNumbers.value.filter(n => n !== num);
    } else {
        selectedNumbers.value.push(num);
    }
};
</script>

<style scoped>
.number-box {
    display: block;
    width: 32px;
    height: 32px;
    border-radius: 17px;
    font-size: 18px;
    color: #dc3b40;
    text-align: center;
    line-height: 32px;
    background-color: #fff;
    border: 1px solid #bfbfbf;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}

/* Khi số được chọn */
.number-box.selected {
    background-color: rgb(230, 50, 50);
    color: white;
    border: 1px solid rgb(230, 50, 50);
}
</style>
