<template>
    <a-modal
        v-model:open="visible"
        :footer="null"
        :closable="false"
        width="465px"
        centered
        class="custom-password-modal">
        <!-- Title -->
        <template #title>
            <div class="flex items-center justify-between px-5 py-3 text-white shadow-lg bg-[#171b25]">
                <h3 class="font-semibold text-base">Thay đổi mật khẩu</h3>
                <div
                    class="w-6 h-6 flex items-center justify-center hover:bg-gray-700 rounded-full duration-150 cursor-pointer"
                    @click="visible = false">
                    <CloseIcon />
                </div>
            </div>
        </template>

        <!-- Form -->
        <form @submit.prevent="handleSubmit">
            <div class="p-5 text-white">
                <PasswordInput label="Mật khẩu hiện tại" placeholder="Nhập mật khẩu hiện tại" v-model="form.current" />
                <PasswordInput label="Mật khẩu mới" placeholder="Nhập mật khẩu mới" v-model="form.new" />
                <PasswordInput label="Nhập lại mật khẩu mới" placeholder="Nhập lại mật khẩu mới" v-model="form.reNew" />
            </div>

            <a-divider style="margin: 0; background: rgb(29, 36, 51)" />

            <div class="flex items-center gap-3 p-5">
                <button
                    type="button"
                    @click="visible = false"
                    class="w-full hover:opacity-80 border border-gray-500 flex items-center justify-center px-5 py-2 rounded-md duration-75">
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

// Nhận prop v-model:open từ component cha
const props = defineProps({
    open: Boolean,
});
const emit = defineEmits(["update:open"]);

// Biến visible liên kết hai chiều với props.open
const visible = computed({
    get: () => props.open,
    set: (val) => emit("update:open", val),
});

// Dữ liệu form
const form = reactive({
    current: "",
    new: "",
    reNew: "",
});

function handleSubmit() {
    if (!form.current || !form.new || !form.reNew) {
        alert("Vui lòng nhập đầy đủ các trường.");
        return;
    }
    if (form.new !== form.reNew) {
        alert("Mật khẩu mới không khớp.");
        return;
    }

    // TODO: Gọi API thay đổi mật khẩu ở đây
    console.log("Đổi mật khẩu:", form);
    visible.value = false;
}
</script>

<style scoped>
.custom-password-modal .ant-modal-content {
    background-color: #171b25;
    color: white;
}
</style>
