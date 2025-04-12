<template>
    <div class="bg-white rounded-2xl shadow-md p-2 w-full sm:w-[48%] md:w-[32%] mb-4">
        <img :src="image" alt="project" class="w-full h-40 object-cover rounded-xl mb-3" />
        <div class="flex items-center pb-2 border-b border-gray-300 mb-4">
            <div class="h-8 w-1 bg-red-600 mr-2"></div>
            <h2 class="text-lg font-bold mb-1">{{ name }}</h2>
        </div>
        <div class="grid grid-cols-3 gap-4 mb-4">
            <div class="text-center">
                <div class="text-red-500 text-xs">{{ fmtInterest }}%</div>
                <div class="text-gray-600 text-xs">Lãi suất hàng ngày</div>
            </div>
            <div class="text-center">
                <div class="text-red-500 text-xs">{{ term }} phút</div>
                <div class="text-gray-600 text-xs">Thời hạn của dự án</div>
            </div>
            <div class="text-center">
                <div class="text-red-500 text-xs">{{ fmtMinInvest }} VNĐ</div>
                <div class="text-gray-600 text-xs">Số tiền bắt đầu</div>
            </div>
        </div>
        <div class="flex items-center justify-center">
            <div class="w-2/3 text-xs">
                <div class="text-gray-300 mb-2">Quỹ mở dự án: {{ fmtMaxInvest }}VND</div>
                <div class="text-gray-300 mb-4">Hoàn lãi hàng ngày, trả gốc khi đáo hạn</div>
            </div>
            <router-link :to="`/$/detail-item/${props.id}`" class=" flex justify-center w-1/3 bg-[#8a7e57] text-white py-1 rounded-lg hover:bg-blue-600 transition-colors">
                Gửi tiền ngay
            </router-link>
        </div>
        <div class="mb-4 flex items-center justify-center">
            <div class="text-gray-600 mb-1 w-1/5 text-xs">Tiến độ dự án:</div>
            <div class="w-3/5 bg-gray-200 rounded-full h-1.5">
                <div class="bg-[#8a7e57] h-1.5 rounded-full transition-all duration-300"  :style="{ width: progressNumber + '%' }"></div>
            </div>
            <div class="text-right w-1/5 text-gray-300 text-sm">{{ progress }}%</div>
        </div>
    </div>
</template>

<script setup>
import { formattedInterest, formatCurrency } from "@landing/helpers";
import { computed } from "vue";
const props = defineProps({
    id: Number,
    image: String,
    name: String,
    company: String,
    description: String,
    interest_day: String,
    min_invest: Number,
    max_invest: Number,
    term: Number,
    progress: String,
});

const fmtInterest = formattedInterest(props.interest_day);
const fmtMinInvest = formatCurrency(props.min_invest);
const fmtMaxInvest = formatCurrency(props.max_invest);

const progressNumber = computed(() => parseFloat(props.progress) || 0);
</script>
