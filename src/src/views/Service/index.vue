<template>
    <div>
        <Header />
        <div class="h-[calc(100vh-env(safe-area-inset-bottom)-44px)] m-0 p-0 overflow-hidden">
            <div class="w-full h-full flex flex-col bg-[#fcfcfc] pb-[env(safe-area-inset-bottom)]">
                <div class="w-full px-3 py-[10px] flex min-h-15 text-sm text-white bg-[#ff3b30]">
                    <div class="mr-1">
                        <ChevronLeftIcon class="w-5 h-5 text-white cursor-pointer stroke-2" />
                    </div>
                    <p>Để lại tin nhắn cho chúng tôi</p>
                </div>
                <div class="p-4 whitespace-pre-line text-[#666] text-xs">
                    Chào mừng quý khách hàng đến Công ty TNHH MTV Xổ số điện toán Việt Nam.
                    <br>
                    Hệ thống hỗ trợ khách hàng
                    hiện đang quá tải, vui lòng chờ đợi trong giây lát.
                </div>
                <div class="mb-[10px]">
                    <label for="" class="inline-block pb-[6px] pl-4 text-[#444] text-xs">Nhập tên tài khoản <span class="px-[3px] text-red-400">*</span></label>
                    <textarea name="" id="" class="block w-full h-[90px] py-3 px-4 overflow-x-hidden overflow-y-auto resize-none outline-0 bg-white border-none break-all text-xs appearance-none"></textarea>
                </div>
                <div class="px-5 pb-5">
                    <button class="w-full h-10 [line-height:40px] align-middle text-[13px] cursor-pointer text-center text-white bg-[#ff3b30]">Gửi</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import { ChevronLeftIcon } from "@heroicons/vue/24/outline";
</script>

<style scope></style>
