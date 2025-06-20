<template>
    <a-modal
        v-model:open="visible"
        :footer="null"
        :closable="false"
        width="465px"
        centered
        class="custom-nickname-modal">
        <!-- Custom header -->
        <template #title>
            <div class="flex items-center justify-between px-5 py-3 text-white shadow-lg bg-[#171b25]">
                <h3 class="font-semibold text-base">Thay đổi biệt danh</h3>
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

        <!-- Body -->
        <div class="text-white p-5 font-semibold">
            <p class="text-[#7b8798] !mb-1.5">Biệt danh</p>
            <input
                type="text"
                v-model="nickname"
                class="w-full bg-[#090d17] focus:ring-4 ring-[#01bc8d]/30 border border-transparent hover:border-[#01bc8d]/80 focus:border-[#01bc8d]/80 duration-100 rounded-md p-3 outline-none"
                spellcheck="false" />
            <p class="mt-3 text-[#7b8798]">Tên người gồm là 5-30 ký tự hoặc số và không chứa các ký tự đặc biệt</p>
        </div>

        <!-- Divider -->
        <a-divider style="margin: 0; background: rgb(29, 36, 51)" />

        <!-- Footer -->
        <div class="flex items-center gap-3 p-5">
            <button
                class="w-full bg-[#01bc8d] hover:opacity-80 border border-[#01bc8d] flex items-center justify-center gap-3 px-5 py-2 rounded-md duration-75"
                @click="onConfirm">
                <span class="text-sm font-medium whitespace-nowrap text-white">Xác nhận</span>
            </button>
            <button
                class="w-full hover:opacity-80 border border-gray-500 flex items-center justify-center px-5 py-2 rounded-md duration-75"
                @click="visible = false">
                <span class="text-sm font-medium whitespace-nowrap text-white">Hủy bỏ</span>
            </button>
        </div>
    </a-modal>
</template>

<script setup>
import { ref, computed } from "vue";

// Nhận v-model từ cha
const props = defineProps({
    open: Boolean,
});
const emit = defineEmits(["update:open"]);

// Two-way binding cho visible
const visible = computed({
    get: () => props.open,
    set: (val) => emit("update:open", val),
});

// Nickname state
const nickname = ref("Member3798");

// Xác nhận nickname
function onConfirm() {
    const regex = /^[a-zA-Z0-9]{5,30}$/;
    if (!regex.test(nickname.value)) {
        alert("Biệt danh phải từ 5-30 ký tự, chỉ gồm chữ và số.");
        return;
    }

    console.log("Biệt danh mới:", nickname.value);
    visible.value = false;
}
</script>

<style>
.custom-nickname-modal .ant-modal-content {
    background-color: #171b25;
    color: white;
}
</style>
