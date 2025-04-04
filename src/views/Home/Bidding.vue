<template>
    <div class="w-full min-h-screen custom-gradient p-4 pb-20">
        <Header title="GỬI TIỀN NGAY" titleColor="text-[#d9c8ab]" />
        <div class="mt-4">
            <div class="bg-linear-to-l from-[#353228] to-[#241e1e] text-white rounded-lg p-4 shadow">
                <div class="flex justify-between text-center">
                    <div class="w-1/2">
                        <span class="block text-sm">Số dư khả dụng của tài khoản (VNĐ)</span
                        ><span class="block text-md">0 VNĐ</span>
                    </div>
                    <div class="w-1/2">
                        <span class="block text-sm">Các dự án có thể đầu tư (VNĐ)</span
                        ><span class="block text-md">5,650,000,000,000 VNĐ</span>
                    </div>
                </div>
            </div>
            <div class="mt-4 space-y-4 text-white">
                <div class="flex justify-between items-center border-b border-gray-300 pb-2">
                    <span>Số tiền bắt đầu</span
                    ><span class="text-blue-500">{{ fmtMinInvest }} <span class="text-black">VNĐ</span></span>
                </div>
                <div class="flex justify-between items-center">
                    <span>Số tiền gửi quỹ</span>
                    <div class="flex items-center border-b pb-2 border-gray-300">
                        <MinusCircleIcon class="w-10 h-10 text-white cursor-pointer" />
                        <input
                            type="number"
                            class="w-32 text-center rounded px-2 py-1 mx-5"
                            placeholder="Vui lòng nhập số tiền" />
                        <PlusCircleIcon class="w-10 h-10 text-white cursor-pointer" />
                    </div>
                </div>
                <div class="flex justify-end">
                    <button class="w-[120px] text-sm bg-red-500 text-white py-2 rounded">Tất cả vốn</button>
                </div>
            </div>
            <div class="mt-4 text-sm text-[#ababab] border-b border-gray-300 pb-2">
                <p>
                    Gửi quỹ tối thiểu <span class="text-blue-500">{{ fmtMinInvest }}</span> VNĐ， Thêm một lần
                    <span class="text-blue-500">{{ fmtMinInvest }}</span> VNĐ，
                    <span class="text-white">Tất cả vốn</span> Trước khi bắt đầu Số dư khả dụng của tài khoản
                    <span class="text-blue-500">0</span> VNĐ Gửi quỹ theo bội số。
                </p>
            </div>
            <button class="w-full bg-[#614a02] text-white py-3 rounded mt-6">Gửi tiền ngay</button>
        </div>
    </div>
</template>

<script setup>
import { computed } from "vue";
import Header from "@/components/Header.vue";
import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/vue/24/outline";

import data from "@/data/project.js";
import { formatCurrency } from "@/helpers";

import { useRoute } from "vue-router";
const route = useRoute();
const projectId = parseInt(route.query.id);

const project = computed(() => {
    return data.find((item) => item.id === projectId) || {};
});

const fmtMinInvest = computed(() => {
    return formatCurrency(project.value.min_invest);
});
</script>

<style></style>
