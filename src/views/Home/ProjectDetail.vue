<template>
    <div class="w-full min-h-screen custom-gradient p-4 pb-20">
        <Header title="CHI TIẾT GÓI QUỸ" titleColor="text-[#d9c8ab]" />
        <div class="mt-4 text-white">
            <img :src="project.image" alt="" class="w-full h-[292px] object-cover" />
            <h2 class="text-lg mb-4">{{ project.name }}</h2>
            <div data-v-c9c6256c="" class="left-0 right-0 p-4">
                <router-link :to="`/bidding/?id=${projectId}`" data-v-c9c6256c="" class="w-full flex justify-center bg-[#8a7e57] text-white py-3 rounded-md">Gửi tiền ngay</router-link>
            </div>
            <div data-v-c9c6256c="" class="flex justify-between gap-4 mb-6 bg-gray-100 p-4 rounded-lg text-xs">
                <div data-v-c9c6256c="" class="text-center">
                    <div data-v-c9c6256c="" class="text-gray-400 text-sm text-center">Quy mô dự án</div>
                    <div data-v-c9c6256c="" class="font-medium text-black">
                        <span data-v-c9c6256c="" class="text-[#8a7e57]">{{ fmtMaxInvest }}</span> VNĐ
                    </div>
                </div>
                <div data-v-c9c6256c="" class="text-center">
                    <div data-v-c9c6256c="" class="text-gray-400 text-sm text-center">Chia cổ tức</div>
                    <div data-v-c9c6256c="" class="font-medium text-black">
                        <span data-v-c9c6256c="" class="text-[#8a7e57]">{{ project.dividends }}</span> VNĐ
                    </div>
                </div>
                <div data-v-c9c6256c="" class="text-center">
                    <div data-v-c9c6256c="" class="text-gray-400 text-sm text-center">Chu kỳ gửi quỹ</div>
                    <div data-v-c9c6256c="" class="font-medium text-black">
                        <span data-v-c9c6256c="" class="text-[#8a7e57]">{{ project.term }}</span> phút
                    </div>
                </div>
            </div>
            <div data-v-c9c6256c="" class="space-y-2 mb-6 font-bold text-lg">
                <p data-v-c9c6256c="">Cổ tức：Hoàn lãi hàng ngày, trả gốc khi đáo hạn</p>
                <p data-v-c9c6256c="">Số tiền bắt đầu: {{ fmtMinInvest }} VNĐ</p>
                <p data-v-c9c6256c="">Hợp tác：Công ty Bảo Hiểm xã hội Việt Nam</p>
                <p data-v-c9c6256c="">Rủi ro bằng không: Bảo hiểm gốc</p>
            </div>
            <div data-v-c9c6256c="" class="mb-6">
                <div data-v-c9c6256c="" class="bg-gray-200 h-[34px] rounded relative">
                    <div
                        data-v-c9c6256c=""
                        class="bg-[#614a02] h-full rounded"
                        :style="{ width: progressNumber + '%' }"></div>
                    <div
                        data-v-c9c6256c=""
                        class="absolute top-1/2 -translate-y-1/2 left-0 text-white px-2 py-1 rounded-full text-xs">
                        {{ project.progress }}%
                    </div>
                </div>
            </div>
            <div data-v-c9c6256c="" class="bg-white mt-4 p-4 text-black">
                <h3 data-v-c9c6256c="" class="text-lg font-medium mb-4 text-center text-[#614a02]">Chi tiết gói quỹ</h3>
                <div data-v-c9c6256c="" class="">
                    <div data-v-c9c6256c="" class="grid grid-cols-3 items-center border border-black px-2">
                        <div data-v-c9c6256c="" class="col-span-1 text-center">Tên dự án</div>
                        <div data-v-c9c6256c="" class="col-span-2 border-l border-black pl-4 py-2">
                            {{ project.name }}
                        </div>
                    </div>
                    <div data-v-c9c6256c="" class="grid grid-cols-3 items-center border border-black px-2">
                        <div data-v-c9c6256c="" class="col-span-1 text-center">Quy mô dự án:</div>
                        <div data-v-c9c6256c="" class="col-span-2 border-l border-black pl-4 py-2">
                            <span data-v-c9c6256c="" class="text-black-500">{{ fmtMaxInvest }}</span> VNĐ
                        </div>
                    </div>
                    <div data-v-c9c6256c="" class="grid grid-cols-3 items-center border border-black px-2">
                        <div data-v-c9c6256c="" class="col-span-1 text-center">Lãi suất đảm bảo:</div>
                        <div data-v-c9c6256c="" class="col-span-2 border-l border-black pl-4 py-2">
                            <span data-v-c9c6256c="" class="text-black-500">{{ fmtInterest }}%</span>
                        </div>
                    </div>
                    <div data-v-c9c6256c="" class="grid grid-cols-3 items-center border border-black px-2">
                        <div data-v-c9c6256c="" class="col-span-1 text-center">Thời gian đáo hạn:</div>
                        <div data-v-c9c6256c="" class="col-span-2 border-l border-black pl-4 py-2">
                            <span data-v-c9c6256c="" class="text-black-500">{{ project.term }} phút</span>
                        </div>
                    </div>
                    <div data-v-c9c6256c="" class="grid grid-cols-3 items-center border border-black px-2">
                        <div data-v-c9c6256c="" class="col-span-1 text-center">Số tiền gửi quỹ:</div>
                        <div data-v-c9c6256c="" class="col-span-2 border-l border-black pl-4 py-2">
                            <span data-v-c9c6256c="" class="text-black-500">Tối thiểu {{ fmtMinInvest }} VNĐ </span>
                        </div>
                    </div>
                    <div data-v-c9c6256c="" class="grid grid-cols-3 items-center border border-black px-2">
                        <div data-v-c9c6256c="" class="col-span-1 text-center">Tổng quan dự án:</div>
                        <div data-v-c9c6256c="" class="col-span-2 border-l border-black pl-4 py-2">
                            Quỹ được linh động sử dụng vốn đầu tư dùng để phát triển và vận hành dự án. Đảm bảo không có
                            rủi ro và hoàn trả lãi suất đúng kì hạn cho nhà đầu tư.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";
import Header from "@/components/Header.vue";
import { formatCurrency } from "@/helpers";

import data from "@/data/project.js";
import { formattedInterest } from "@/helpers";

const route = useRoute();
const projectId = parseInt(route.params.id);

const project = computed(() => {
    return data.find((item) => item.id === projectId) || {};
});

const fmtInterest = formattedInterest(project.value.interest_day);

const fmtMaxInvest = computed(() => {
    return formatCurrency(project.value.max_invest);
});

const fmtMinInvest = computed(() => {
    return formatCurrency(project.value.min_invest);
});

const progressNumber = computed(() => parseFloat(project.value.progress) || 0);
</script>
