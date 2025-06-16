<template>
    <div>
        <Header title="Chương trình VIP" />
        <div class="px-1.5 pt-7 pb-3.5">
            <div
                class="relative min-h-12 p-1.5 rounded-md"
                style="
                    background: linear-gradient(
                        90.45deg,
                        rgba(160, 172, 207, 0.08) 0.81%,
                        rgba(237, 240, 246, 0.12) 96.85%
                    );
                ">
                <img class="absolute top-2 w-7" :src="vipMain" alt="" />
                <div class="pl-8 text-[#f2f2f2]">
                    <h1 class="text-[0.46rem] font-semibold">
                        VIP Lv. 2<span class="text-[0.32rem] text-[#707070]"> (Từ trước đến nay)</span>
                    </h1>
                    <p class="text-[0.34rem] font-medium mt-0.5 !mb-1.5">
                        Tích lũy nạp: <span class="text-default">51.54 USDT</span>
                    </p>
                    <div class="flex flex-col items-stretch">
                        <div class="text-[0.32rem] font-medium flex items-center justify-between">
                            <span>VIP3 Mục tiêu: 100 USDT</span>
                            <div>Tiến độ:<span class="text-default font-semibold"> 50.6%</span></div>
                        </div>
                        <a-progress
                            :percent="percent"
                            status="normal"
                            stroke-width="8"
                            :stroke-color="strokeColor"
                            show-info="false"
                            class="duration-200" />
                    </div>
                </div>
                <p class="text-[0.34rem] text-[#707070] mt-1">
                    Để đạt <span class="text-default font-semibold">VIP Cấp 3</span>, cần nạp thêm 48.46 USDT vào ví của
                    bạn và tận hưởng những ưu đãi đặc quyền!
                </p>
            </div>
            <div class="relative bg-primary border border-secondary mt-1.5 min-h-12 rounded-md">
                <div
                    class="py-1 border-b border-secondary flex items-center justify-between"
                    style="background: rgba(243, 243, 243, 0.02)">
                    <div class="w-full flex items-center justify-center">
                        <span class="text-[0.34rem] font-medium">Cấp bậc</span>
                    </div>
                    <div class="w-full flex items-center justify-center">
                        <span class="text-[0.34rem] font-medium">Tiêu chuẩn thăng cấp</span>
                    </div>
                </div>
                <div class="divide-y divide-secondary">
                    <div
                        v-for="(vip, idx) in vipList"
                        :key="vip.level"
                        class="divide-x divide-secondary py-1 flex items-center justify-between">
                        <div class="w-full flex items-center justify-center" style="gap: 3.5px">
                            <p class="text-[0.38rem] font-semibold">Lv.</p>
                            <img class="w-3.5" :src="vipImages[idx]" :alt="`VIP${vip.level}`" />
                        </div>
                        <div class="w-full text-center">
                            <span class="text-[0.34rem] font-medium flex items-center justify-center">
                                <span class="text-default font-semibold">{{ vip.requirement }}</span
                                >&nbsp;USDT
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { vipImages, vipMain } from '@/assets/vip';
import { Header } from '@/components/mobile';

const vipList = [
    { level: 1, requirement: '0' },
    { level: 2, requirement: '2' },
    { level: 3, requirement: '100' },
    { level: 4, requirement: '800' },
    { level: 5, requirement: '15.000' },
    { level: 6, requirement: '40.000' },
    { level: 7, requirement: '100.000' },
    { level: 8, requirement: '1.000.000' },
    { level: 9, requirement: '5.000.000' },
];
import { ref } from 'vue';

const percent = ref(50.5558); // Giá trị phần trăm
const strokeColor = ref('#01bc8d'); // Màu xanh đặc trưng
</script>

<style>
.ant-progress-outer {
    padding-inline-end: 0 !important;
}
.ant-progress-inner {
    background-color: rgba(0, 0, 0, 0.396) !important;
    width: 100% !important;
}

.ant-progress-text {
    display: none !important;
}
</style>
