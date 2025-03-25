<template>
    <div class=" shadow-[0px_-10px_20px_0px_rgba(0,0,0,0.05)] border-t w-full border-[#e1e1e1]" style="position: fixed; bottom: calc(0px + env(safe-area-inset-bottom)); width: 100%;">
        <div class="w-full px-[10px] h-[49px] flex items-center justify-between">
            <div class="flex items-center">
                <input type="text" style="border: 1px solid black; text-align: right; height: 22px; font-size: 12px; width: 60px; padding: 0px 2px; margin-left: 1px;">
                <p class="text-xs">Nhập số tiền</p>
            </div>
            <div class="flex items-center text-xs">
                Đã chọn &nbsp;<span class="text-red-500">0</span>&nbsp; lệnh, Tổng số: ₫<span class="text-red-500">0.00</span>
            </div>
        </div>
        <div class="w-full px-[10px] flex items-center justify-between">
            <div class="">
                <img :src="trash" alt="" style="width: 20px; margin-top: 8px;">
                <span style="font-size: 10px;">Xóa</span>
            </div>
            <div class="">
                <button class="min-w-25 text-white text-xs flex items-center justify-center rounded-md leading-2.5 text-center bg-[#e72732] h-[30px]">Đặt dữ liệu</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import trash from "@/assets/images/game/trash.png";
</script>

<style></style>
