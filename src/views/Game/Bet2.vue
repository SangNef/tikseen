<template>
    <div
        class="shadow-[0px_-10px_20px_0px_rgba(0,0,0,0.05)] border-t w-full border-[#e1e1e1] bg-white"
        style="position: fixed; bottom: calc(0px + env(safe-area-inset-bottom)); width: 100%">
        <div class="w-full px-[10px] h-[49px] flex items-center justify-between">
            <div class="flex items-center">
                <span class="text-xs" style="margin-right: 2px; float: left">₫</span>
                <input
                    type="text"
                    style="
                        float: left;
                        height: 24px;
                        width: 53px;
                        line-height: 0px;
                        border-radius: 4px;
                        display: flex;
                        border: 1px solid rgb(215, 215, 215);
                        margin-right: 3px;
                    " />
                <button class="w-[22px] h-[22px] text-white bg-[#e72732] rounded-[20%] text-xs">₫</button>
            </div>
            <div class="flex items-center text-xs">
                <span class="text-red-500">0</span>&nbsp; lệnh, Tổng số: ₫<span class="text-red-500">0.00</span>
            </div>
        </div>
        <div class="w-full px-[10px] flex items-center justify-between" style="border-top: 1px solid rgb(225, 225, 225);">
            <div class="flex">
                <div class="w-16 flex flex-col items-center">
                    <img :src="trash" alt="" style="width: 20px; margin-top: 8px" />
                    <span style="font-size: 10px">Xóa</span>
                </div>
                <div class="w-16 flex flex-col items-center">
                    <img :src="shuffle" alt="" style="width: 20px; margin-top: 8px" />
                    <span style="font-size: 10px">Ngẫu nhiên</span>
                </div>
            </div>
            <div class="">
                <button
                    class="min-w-25 text-white text-xs flex items-center justify-center rounded-md leading-2.5 text-center bg-[#e72732] h-[30px]">
                    Đặt dữ liệu
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import trash from "@client/assets/images/game/trash.png";
import shuffle from "@client/assets/images/game/shuffle.png";
</script>

<style></style>
