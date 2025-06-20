<template>
    <a-modal v-model:open="visible" :footer="null" width="465px" centered class="custom-avatar-modal" :closable="false">
        <template #title>
            <div class="flex items-center justify-between px-5 py-3 text-white shadow-lg z-50 bg-[#171b25]">
                <h3 class="font-semibold text-base">Thay đổi ảnh đại diện</h3>
                <div
                    class="w-6 h-6 flex items-center justify-center hover:bg-gray-700 rounded-full duration-150 cursor-pointer"
                    @click="visible = false">
                    <svg
                        class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        data-testid="CloseIcon">
                        <path
                            d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                    </svg>
                </div>
            </div>
        </template>
        <div class="max-h-[436px] p-5 overflow-auto">
            <h3 class="!mb-5 text-[#8892a6] text-sm font-semibold">Ảnh đại diện hệ thống</h3>
            <div class="flex items-center flex-wrap gap-6">
                <div v-for="(img, key) in avt" :key="key" class="relative">
                    <img class="rounded-full cursor-pointer" width="64" :src="img" :alt="key" />
                </div>
            </div>

            <h3 class="mt-10 !mb-5 text-[#8892a6] text-sm font-semibold">Ảnh đại diện NFT</h3>
            <div class="flex items-center flex-wrap gap-6">
                <div v-for="(img, key) in avtNft" :key="key" class="relative">
                    <img class="rounded-full cursor-pointer" width="64" :src="img" :alt="key" />
                </div>
            </div>
        </div>

        <a-divider style="margin: 0; background: rgb(29, 36, 51)" />

        <div class="flex items-center gap-3 p-5">
            <button
                block
                class="w-full bg-[#01bc8d] hover:opacity-80 border border-[#01bc8d] flex items-center justify-center gap-3 px-5 py-2 rounded-md duration-75"
                @click="onConfirm">
                <span class="text-sm font-medium whitespace-nowrap text-white">Xác nhận</span>
            </button>
            <button
                block
                @click="visible = false"
                class="w-full hover:opacity-80 border border-gray-500 flex items-center justify-center px-5 py-2 rounded-md duration-75">
                <span class="text-sm font-medium whitespace-nowrap text-white">Hủy bỏ</span>
            </button>
        </div>
    </a-modal>
</template>

<script setup>
import { computed } from "vue";
import { avt, avtNft } from "@/assets/desktop/account";

const props = defineProps({
    open: Boolean,
});
const emit = defineEmits(["update:open"]);

const visible = computed({
    get: () => props.open,
    set: (val) => emit("update:open", val),
});

const onConfirm = () => {
    // Xử lý logic xác nhận avatar
    visible.value = false;
};
</script>

<style>
.custom-avatar-modal .ant-modal-content {
    background-color: #171b25;
    color: white;
}
</style>
