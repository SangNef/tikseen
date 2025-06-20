<template>
    <a-modal v-model:open="visible" :footer="null" :closable="false" width="465px" centered class="custom-phone-modal">
        <!-- Custom Header -->
        <template #title>
            <div class="flex items-center justify-between px-5 py-3 text-white shadow-lg bg-[#171b25]">
                <h3 class="font-semibold text-base">Liên kết số điện thoại</h3>
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
        <form>
            <div class="text-white p-5 font-semibold">
                <div class="mb-3.5">
                    <p class="text-[#7b8798] !mb-1.5">Số điện thoại</p>
                    <div class="!mb-3.5 relative">
                        <div class="form-group relative">
                            <input
                                type="text"
                                name="phone"
                                disabled
                                class="w-full bg-[#090d17] focus:ring-4 ring-[#01bc8d]/30 border border-transparent hover:border-[#01bc8d]/80 focus:border-[#01bc8d]/80 duration-100 rounded-md p-3 outline-none !text-white/50 cursor-not-allowed pr-20"
                                spellcheck="false"
                                placeholder="Nhập số điện thoại" />
                        </div>
                    </div>
                </div>
                <p class="text-[#7b8798] font-medium">
                    Lưu ý: Sau khi liên kết không thể thay đổi. Nếu bạn cần thay đổi, vui lòng liên hệ với bộ phận chăm
                    sóc khách hàng
                </p>
            </div>
        </form>
    </a-modal>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
    open: Boolean,
});
const emit = defineEmits(["update:open"]);

const visible = computed({
    get: () => props.open,
    set: (val) => emit("update:open", val),
});
</script>

<style scoped>
.custom-phone-modal .ant-modal-content {
    background-color: #171b25;
    color: white;
}
</style>
