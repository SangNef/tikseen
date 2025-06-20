<template>
    <a-modal
        v-model:open="visible"
        :footer="null"
        :closable="false"
        width="465px"
        centered
        class="custom-fund-password-modal">
        <template #title>
            <div class="flex items-center justify-between px-5 py-3 text-white shadow-lg bg-[#171b25]">
                <h3 class="font-semibold text-base">Thay đổi mật khẩu quỹ</h3>
                <div
                    class="w-6 h-6 flex items-center justify-center hover:bg-gray-700 rounded-full duration-150 cursor-pointer"
                    @click="visible = false">
                    <CloseIcon />
                </div>
            </div>
        </template>

        <form>
            <div class="p-5 text-white">
                <PasswordInput
                    label="Mật khẩu đăng nhập"
                    placeholder="Nhập mật khẩu hiện tại"
                    v-model="form.loginPassword" />
                <PasswordInput label="Mật khẩu quỹ" placeholder="Nhập mật khẩu mới" v-model="form.fundPassword" />
                <PasswordInput
                    label="Nhập lại mật khẩu quỹ"
                    placeholder="Nhập lại mật khẩu mới"
                    v-model="form.reFundPassword" />
            </div>

            <a-divider style="margin: 0; background: rgb(29, 36, 51)" />

            <div class="flex items-center gap-3 p-5">
                <button
                    class="w-full hover:opacity-80 border border-gray-500 flex items-center justify-center px-5 py-2 rounded-md duration-75"
                    type="button"
                    @click="visible = false">
                    <span class="text-sm font-medium whitespace-nowrap text-white">Hủy bỏ</span>
                </button>
                <button
                    type="submit"
                    class="w-full bg-[#01bc8d] hover:opacity-80 border border-[#01bc8d] flex items-center justify-center gap-3 px-5 py-2 rounded-md duration-75">
                    <span class="text-sm font-medium whitespace-nowrap text-white">Xác nhận</span>
                </button>
            </div>
        </form>
    </a-modal>
</template>

<script setup>
import { reactive, computed } from "vue";
import PasswordInput from "./PasswordInput.vue";
import CloseIcon from "@ant-design/icons-vue/CloseOutlined";

// Props & Emits for v-model:open
const props = defineProps({
    open: Boolean,
});
const emit = defineEmits(["update:open"]);

const visible = computed({
    get: () => props.open,
    set: (val) => emit("update:open", val),
});

// Form state
const form = reactive({
    loginPassword: "",
    fundPassword: "",
    reFundPassword: "",
});

// Submit handler
function onSubmit() {
    if (form.fundPassword !== form.reFundPassword) {
        alert("Mật khẩu quỹ nhập lại không khớp.");
        return;
    }

    console.log("Gửi dữ liệu đổi mật khẩu quỹ:", form);
    // Gọi API ở đây nếu cần

    visible.value = false;
}
</script>

<style scoped>
.custom-fund-password-modal .ant-modal-content {
    background-color: #171b25;
    color: white;
}
</style>
