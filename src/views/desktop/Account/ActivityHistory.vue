<template>
    <div class="bg-[#171b25] col-span-9 h-[820px] rounded-lg shadow-xl border border-[#212125] overflow-auto">
        <div class="w-full min-w-[980px] bg-[#171b25] rounded-t-md shadow-lg z-10">
            <div class="flex items-center justify-between p-5">
                <h3 class="font-semibold text-lg">Lịch sử hoạt động</h3>
            </div>
            <a-divider style="margin: 0px; background: rgb(29, 36, 51)" />
        </div>
        <div class="min-w-[980px] h-[calc(100%-76px)] overflow-auto">
            <div class="w-full relative text-sm font-medium text-[#81858c]">
                <div class="flex items-start justify-between px-5 py-3 hover:bg-[#222838] duration-200">
                    <div class="w-1/5"><span>Thiết bị đăng nhập</span></div>
                    <div class="w-1/5"><span>Thời gian</span></div>
                    <div class="w-1/5"><span>Quốc gia/khu vực</span></div>
                    <div class="w-1/5"><span>IP</span></div>
                    <div class="w-1/5"><span>Trạng thái</span></div>
                </div>
                <a-divider style="margin: 0px; background: rgb(29, 36, 51)" />
            </div>
            <div class="pt-36">
                <div class="css-1a3rktk ant-empty flex justify-center items-center flex-col">
                    <div class="ant-empty-image h-[100px]" style="display: flex; justify-content: center">
                        <img alt="empty" :src="empty" class="h-full object-cover mb-2" />
                    </div>
                    <div class="ant-empty-description"><p class="text-[#616161] text-[14px]">Không có dữ liệu</p></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { empty } from "@/assets/desktop/icon";
</script>

<style></style>
