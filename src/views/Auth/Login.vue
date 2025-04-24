<template>
    <div class="w-full h-[calc(100vh-50px)] p-6 md:flex md:justify-center md:items-center bg-[#f4f5f6]">
        <div class="md:max-w-[487px] mx-auto md:w-full md:p-6 md:bg-white md:shadow-lg">
            <h2 class="text-center text-[32px] leading-[48px] font-bold">Đăng nhập</h2>
            <form class="mt-4" @submit.prevent="handleLogin">
                <BaseInput
                    v-model="username"
                    label="Tên đăng nhập"
                    type="text"
                    placeholder="Vui lòng nhập tên đăng nhập"
                    required />
                <BaseInput
                    v-model="password"
                    label="Mật khẩu"
                    type="password"
                    placeholder="Vui lòng nhập mật khẩu"
                    required />
                <BaseButton class="w-full mt-6" label="ĐĂNG NHẬP NGAY" type="submit" />
            </form>

            <div class="mt-6 text-center text-[13px] text-black">
                Nếu Bạn Chưa Có Tài Khoản?
                <router-link to="/register" class="text-blue-600 ml-3 cursor-pointer text-[16px]">
                    Đăng ký ngay
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import BaseButton from "@/components/Common/BaseButton.vue";
import BaseInput from "@/components/Common/BaseInput.vue";

const router = useRouter();
const username = ref("");
const password = ref("");

function handleLogin() {
    // Lưu username vào localStorage
    localStorage.setItem("username", username.value);
    // Điều hướng về trang chủ
    router.push("/");
}
</script>
