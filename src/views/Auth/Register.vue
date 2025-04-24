<template>
    <div class="w-full h-[calc(100vh-50px)] p-6 md:flex md:justify-center md:items-center bg-[#f4f5f6]">
        <div class="md:max-w-[487px] mx-auto md:w-full md:p-6 md:bg-white md:shadow-lg">
            <h2 class="text-center text-[32px] leading-[48px] font-bold">Đăng ký</h2>
            <form class="mt-4" @submit.prevent="handleRegister">
                <BaseInput
                    v-model="fullname"
                    label="Họ và tên"
                    type="text"
                    placeholder="Vui lòng nhập họ tên"
                    required />
                <BaseInput
                    v-model="username"
                    label="Tên đăng nhập"
                    type="text"
                    placeholder="Vui lòng viết liền không dấu"
                    required />
                <BaseInput
                    v-model="phone"
                    label="Số điện thoại"
                    type="text"
                    placeholder="Vui lòng cung cấp số điện thoại"
                    required />
                <BaseInput
                    v-model="password"
                    label="Mật khẩu"
                    type="password"
                    placeholder="Vui lòng nhập mật khẩu"
                    required />
                <BaseInput
                    v-model="cpassword"
                    label="Mật khẩu"
                    type="password"
                    placeholder="Vui lòng nhập lại mật khẩu"
                    required />
                <BaseInput
                    v-model="code"
                    label="Mã giới thiệu"
                    type="text"
                    placeholder="Vui lòng nhập mã giới thiệu của bạn"
                    required />
                <BaseButton class="w-full mt-6" label="ĐĂNG KÝ TÀI KHOẢN" type="submit" />
            </form>

            <div class="mt-6 text-center text-[13px] text-black">
                Nếu Bạn Đã Có Tài Khoản?
                <router-link to="/login" class="text-blue-600 ml-3 cursor-pointer text-[16px]"> Đăng nhập </router-link>
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

function handleRegister() {
    // Lưu username vào localStorage
    localStorage.setItem("username", username.value);
    // Điều hướng về trang chủ
    router.push("/");
}
</script>
