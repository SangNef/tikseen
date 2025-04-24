<template>
    <div>
        <div class="py-3 px-[15px] flex items-center gap-2.5 mb-8" style="box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1)">
            <div class="w-12 h-12 border-3 border-black rounded-full flex items-center justify-center">
                <CheckIcon class="w-9 h-9 stroke-2" />
            </div>
            <div class="">
                <strong class="text-[17px] text-[#29cb97]">Xác minh tài khoản đã hoàn tất</strong>
                <p class="text-[12px] text-[#8f8f8f]">Giờ đây bạn có thể sử dụng tất cả các phương thức thanh toán</p>
            </div>
        </div>
        <div class="px-[15px]">
            <div
                class="bg-white rounded-[10px] px-[15px] py-5"
                style="box-shadow: 0 0.2rem 0.6rem 0 rgba(0, 0, 0, 0.1)">
                <h4 class="text-[22px] font-bold text-center">Tổng quan giao dịch</h4>
                <div class="mt-2.5 mb-5">
                    <p class="text-[16px] text-[#8f8f8f]">Tổng tiền giao dịch</p>
                    <strong class="text-[24px]">VND 0</strong>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { CheckIcon } from "@heroicons/vue/24/outline";
</script>

<style></style>
