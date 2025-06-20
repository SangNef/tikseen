<template>
    <a-modal v-model:open="visible" :footer="null" :closable="false" width="465px" centered class="custom-bank-modal">
        <!-- Header -->
        <template #title>
            <div class="flex items-center justify-between px-5 py-3 text-white shadow-lg bg-[#171b25]">
                <h3 class="font-semibold text-base">Thêm tài khoản ngân hàng</h3>
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

        <!-- Form -->
        <form @submit.prevent>
            <div class="p-5 text-white font-medium">
                <!-- Ngân hàng -->
                <div class="mb-3.5">
                    <p class="text-[#7b8798] !mb-1.5">Ngân hàng</p>
                    <a-select
                        v-model:value="bank"
                        show-search
                        size="large"
                        :options="banks"
                        placeholder="Chọn ngân hàng"
                        :filter-option="(input, option) => option.label.toLowerCase().includes(input.toLowerCase())"
                        class="bg-[#090d17] text-white w-full"
                        :dropdown-style="{ background: '#171b25', color: '#fff' }">
                        <template #option="{ label, icon }">
                            <div class="flex items-center gap-3 py-1">
                                <img :src="icon" width="30" class="rounded" />
                                <span>{{ label }}</span>
                            </div>
                        </template>
                    </a-select>
                </div>

                <!-- Số tài khoản -->
                <div class="mb-3.5">
                    <p class="text-[#7b8798] !mb-1.5">Số tài khoản</p>
                    <input
                        type="number"
                        class="w-full bg-[#090d17] focus:ring-4 ring-[#01bc8d]/30 border border-transparent hover:border-[#01bc8d]/80 focus:border-[#01bc8d]/80 duration-100 rounded-md p-3 outline-none pr-20"
                        placeholder="Nhập số tài khoản" />
                </div>

                <!-- Họ tên -->
                <div class="mb-3.5">
                    <p class="text-[#7b8798] !mb-1.5">
                        Họ và tên <span class="font-normal">(Viết hoa không dấu)</span>
                    </p>
                    <input
                        type="text"
                        class="w-full bg-[#090d17] focus:ring-4 ring-[#01bc8d]/30 border border-transparent hover:border-[#01bc8d]/80 focus:border-[#01bc8d]/80 duration-100 rounded-md p-3 outline-none pr-20"
                        placeholder="VD: NGUYEN VAN A" />
                </div>

                <!-- Chi nhánh -->
                <div class="mb-3.5">
                    <p class="text-[#7b8798] !mb-1.5">Chi nhánh</p>
                    <a-select
                        v-model:value="branch"
                        show-search
                        size="large"
                        :options="branches"
                        placeholder="Chọn chi nhánh"
                        class="bg-[#090d17] text-white w-full"
                        :dropdown-style="{ background: '#171b25', color: '#fff' }" />
                </div>

                <!-- Địa chỉ -->
                <div class="mb-3.5">
                    <p class="text-[#7b8798] !mb-1.5">Địa chỉ chi tiết</p>
                    <input
                        type="text"
                        class="w-full bg-[#090d17] focus:ring-4 ring-[#01bc8d]/30 border border-transparent hover:border-[#01bc8d]/80 focus:border-[#01bc8d]/80 duration-100 rounded-md p-3 outline-none pr-20"
                        placeholder="Nhập địa chỉ thường trú" />
                </div>
            </div>

            <!-- Divider -->
            <a-divider style="margin: 0; background: rgb(29, 36, 51)" />

            <!-- Footer -->
            <div class="flex items-center gap-3 p-5">
                <button
                    @click="visible = false"
                    class="w-full hover:opacity-80 border border-gray-500 flex items-center justify-center px-5 py-2 rounded-md duration-75"
                    type="button">
                    <span class="text-sm font-medium whitespace-nowrap text-white">Quay lại</span>
                </button>
                <button
                    class="w-full bg-[#01bc8d] hover:opacity-80 border border-[#01bc8d] flex items-center justify-center gap-3 px-5 py-2 rounded-md duration-75"
                    type="submit">
                    <span class="text-sm font-medium whitespace-nowrap text-white">Xác nhận</span>
                </button>
            </div>
        </form>
    </a-modal>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";

const props = defineProps({
    open: Boolean,
});

const emit = defineEmits(["update:open"]);

const visible = computed({
    get: () => props.open,
    set: (val) => emit("update:open", val),
});

const bank = ref(null);

const banks = [
    {
        label: "Ngân hàng TMCP Công thương Việt Nam",
        value: "vietinbank",
        icon: "https://i.imgur.com/K9n4TT8.png",
    },
    {
        label: "Ngân hàng TMCP Quân đội",
        value: "mb",
        icon: "https://i.imgur.com/GWGLEyA.png",
    },
    {
        label: "Ngân hàng TMCP Ngoại thương Việt Nam",
        value: "vietinbank",
        icon: "	https://i.imgur.com/EhtMZJb.png",
    },
];

const branch = ref(null);
const branches = ref([]);

onMounted(async () => {
    try {
        const response = await fetch("https://provinces.open-api.vn/api/p/");
        const data = await response.json();
        branches.value = data.map((item) => ({
            label: item.name,
            value: item.code.toString(),
        }));
    } catch (error) {
        console.error("Lỗi khi fetch tỉnh/thành:", error);
    }
});
</script>

<style>
.custom-bank-modal .ant-modal-content {
    background-color: #171b25;
    color: white;
}

.custom-bank-modal .ant-select {
    background-color: #090d17;
    border: none;
    border-radius: 0.375rem;
}

.custom-bank-modal .ant-select-selector {
    background-color: #090d17 !important;
    border: 1px solid transparent !important;
    color: white !important;
    padding: 0.5rem 1rem;
    transition: all 0.2s;
    border-radius: 0.375rem;
}

.custom-bank-modal .ant-select:hover .ant-select-selector {
    border-color: #01bc8d !important;
}

.custom-bank-modal .ant-select-focused .ant-select-selector {
    border-color: #01bc8d !important;
    box-shadow: 0 0 0 2px rgba(1, 188, 141, 0.3);
}

/* Search input trong dropdown */
.custom-bank-modal .ant-select-selection-search-input {
    color: white !important;
}

/* Dropdown item màu trắng */
.custom-bank-modal .ant-select-item-option-content {
    color: white !important;
}
</style>
