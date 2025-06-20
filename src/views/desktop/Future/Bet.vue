<template>
    <div class="col-span-3 3xl:col-span-2 flex">
        <div class="w-full bg-[#171b25] flex flex-col justify-start">
            <div class="w-full flex flex-col items-stretch justify-center border-b border-gray-800 p-5">
                <div class="flex items-center justify-between">
                    <div class="text-lg font-semibold">Ví Futures</div>
                    <div class="flex items-center gap-3">
                        <div
                            class="w-7 h-7 flex items-center justify-center rounded-full shadow-2xl bg-[#2b3247] border border-gray-800 cursor-pointer hover:opacity-80 active:opacity-30 duration-300">
                            <span class="select-none text-sm">!</span>
                        </div>
                    </div>
                </div>
                <div class="text-sm mt-6 font-semibold">
                    <div class="flex items-center justify-between mb-3">
                        <span class="text-[#464f5f]">Số dư</span><span>164,452 VNDC</span>
                    </div>
                    <div class="flex items-center justify-between mb-3">
                        <span class="text-[#464f5f]">Vốn</span><span>0 VNDC</span>
                    </div>
                    <div class="flex items-center justify-between mb-3">
                        <span class="text-[#464f5f]">Lãi/Lỗ ước tính</span><span>0 VNDC</span>
                    </div>
                </div>
            </div>
            <div class="w-full flex flex-col items-stretch justify-center p-5">
                <div class="flex items-center justify-between">
                    <div class="text-lg font-semibold">Đặt lệnh</div>
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="calculator"
                        class="svg-inline--fa fa-calculator text-2xl text-gray-400"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18px"
                        height="24px"
                        viewBox="0 0 384 512">
                        <path
                            fill="currentColor"
                            d="M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L64 0zM96 64l192 0c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32L96 160c-17.7 0-32-14.3-32-32l0-32c0-17.7 14.3-32 32-32zm32 160a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM96 352a32 32 0 1 1 0-64 32 32 0 1 1 0 64zM64 416c0-17.7 14.3-32 32-32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-96 0c-17.7 0-32-14.3-32-32zM192 256a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm32 64a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm64-64a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm32 64a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM288 448a32 32 0 1 1 0-64 32 32 0 1 1 0 64z"></path>
                    </svg>
                </div>
                <div class="flex items-center justify-between gap-3 my-6">
                    <button
                        type="button"
                        class="w-full flex items-center justify-center p-3 rounded-md border duration-300 cursor-pointer font-semibold text-sm select-none"
                        :class="
                            isLong
                                ? 'bg-[#0ce28a0f] border-[#0fe28a] text-[#0fe28a]'
                                : 'bg-[#1c202a] border-[#1c202a] text-[#515c70]'
                        "
                        @click="isLong = true">
                        Long
                    </button>
                    <button
                        type="button"
                        class="w-full flex items-center justify-center p-3 rounded-md border duration-300 cursor-pointer font-semibold text-sm select-none"
                        :class="
                            !isLong
                                ? 'bg-[#dc1f4e0f] border-[#e1155e] text-[#e1155e]'
                                : 'bg-[#1c202a] border-[#1c202a] text-[#515c70]'
                        "
                        @click="isLong = false">
                        Short
                    </button>
                </div>
                <a-tabs v-model:activeKey="activeTab" class="mb-6">
                    <a-tab-pane key="1" tab="Thị trường">
                        <div class="flex flex-col">
                            <div class="w-full bg-[#090d17] rounded-md p-3 mb-3 cursor-not-allowed">
                                <h3 class="text-[#444f54] font-medium mb-1.5">Giá</h3>
                                <input
                                    type="text"
                                    disabled
                                    placeholder="Giá Mkt. hiện tại"
                                    class="outline-none bg-transparent w-full font-semibold text-white cursor-not-allowed" />
                            </div>
                            <div class="w-full bg-[#090d17] rounded-md pt-3 mb-3">
                                <div class="text-[#444f54] mb-1.5 flex items-center justify-between text-xs px-3">
                                    <div class="font-medium">Khối lượng</div>
                                    <div class="flex gap-2">
                                        <span class="font-medium">Tối đa </span>
                                        <span class="text-gray-300">467,712 VNDC</span>
                                    </div>
                                </div>
                                <input
                                    type="number"
                                    placeholder="0"
                                    class="outline-none bg-transparent pl-3 pb-3 w-full font-semibold text-white text-base rounded-md border-b border-transparent focus:border-[#01bc8d]" />
                            </div>
                        </div>
                    </a-tab-pane>
                    <a-tab-pane key="2" tab="Giới hạn">
                        <!-- nội dung tab 2 -->
                    </a-tab-pane>
                    <a-tab-pane key="3" tab="Stop Market">
                        <!-- nội dung tab 3 -->
                    </a-tab-pane>
                </a-tabs>
                <div class="flex items-center justify-between py-6 border-b border-gray-800">
                    <div class="flex flex-col font-semibold">
                        <span class="text-base leading-10">Chốt lời / Cắt lỗ</span
                        ><span class="text-sm text-[#515c70]">Chưa cài đặt</span>
                    </div>
                    <a-switch v-model:checked="takeProfitStopLoss" />
                </div>
                <div class="flex flex-col pb-8 text-sm mt-6 font-semibold">
                    <div class="flex items-center justify-between mb-3">
                        <span class="text-[#464f5f]">Ký quỹ</span><span class="text-[#515c70]">0 VNDC</span>
                    </div>
                    <div class="flex items-center justify-between mb-3">
                        <span class="text-[#464f5f]">Phí</span><span class="text-[#515c70]">0 VNDC</span>
                    </div>
                    <div class="flex items-center justify-between mb-3">
                        <span class="text-[#464f5f]">Tổng</span><span>0 VNDC</span>
                    </div>
                </div>
                <div
                    class="bg-[#01bc8d] hover:opacity-80 active:opacity-30 duration-300 p-3.5 rounded-md text-center shadow-2xl cursor-pointer">
                    <span class="whitespace-nowrap select-none font-semibold">Đặt lệnh Mua</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const takeProfitStopLoss = ref(true);

const isLong = ref(true);
</script>

<style scoped>
:deep(.ant-tabs-tab-btn) {
    font-size: 16px;
    font-weight: 600;
}
</style>
