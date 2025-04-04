<template>
    <div class="w-full max-w-[400px] mx-auto mt-10 rounded-lg shadow-lg bg-white p-4 text-black">
        <h1 class="text-2xl font-bold text-center mb-4 text-[#7b5e02]">Đăng ký tài khoản</h1>
        <form @submit.prevent="handleRegister">
            <!-- Tên tài khoản -->
            <div class="mb-4 relative">
                <input
                    type="text"
                    v-model="username"
                    placeholder="Tên tài khoản"
                    class="w-full px-4 py-3 pl-10 rounded-xl focus:outline-none focus:ring focus:ring-[#d9c8ab] backdrop-blur-md border border-[#d9c8ab]" />
                <UserIcon class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#d9c8ab]" />
            </div>

            <!-- Mật khẩu -->
            <div class="mb-4 relative">
                <input
                    :type="showPassword ? 'text' : 'password'"
                    v-model="password"
                    placeholder="Mật khẩu"
                    class="w-full px-4 py-3 pl-10 pr-10 rounded-xl focus:outline-none focus:ring focus:ring-[#d9c8ab] backdrop-blur-md border border-[#d9c8ab]" />
                <LockClosedIcon class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#d9c8ab]" />
                <button type="button" @click="showPassword = !showPassword" class="absolute right-3 top-1/2 -translate-y-1/2">
                    <component :is="showPassword ? EyeSlashIcon : EyeIcon" class="w-5 h-5 text-[#d9c8ab]" />
                </button>
            </div>

            <!-- Nhập lại mật khẩu -->
            <div class="mb-4 relative">
                <input
                    :type="showPasswordConfirm ? 'text' : 'password'"
                    v-model="confirmPassword"
                    placeholder="Nhập lại mật khẩu"
                    class="w-full px-4 py-3 pl-10 pr-10 rounded-xl focus:outline-none focus:ring focus:ring-[#d9c8ab] backdrop-blur-md border border-[#d9c8ab]" />
                <LockClosedIcon class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#d9c8ab]" />
                <button type="button" @click="showPasswordConfirm = !showPasswordConfirm" class="absolute right-3 top-1/2 -translate-y-1/2">
                    <component :is="showPasswordConfirm ? EyeSlashIcon : EyeIcon" class="w-5 h-5 text-[#d9c8ab]" />
                </button>
            </div>

            <!-- Họ và tên -->
            <div class="mb-4 relative">
                <input
                    type="text"
                    v-model="fullName"
                    placeholder="Họ và tên"
                    class="w-full px-4 py-3 pl-10 rounded-xl focus:outline-none focus:ring focus:ring-[#d9c8ab] backdrop-blur-md border border-[#d9c8ab]" />
                <UserIcon class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#d9c8ab]" />
            </div>

            <!-- Mã tham chiếu -->
            <div class="mb-4 relative">
                <input
                    type="text"
                    v-model="refCode"
                    placeholder="Mã tham chiếu"
                    class="w-full px-4 py-3 pl-10 rounded-xl focus:outline-none focus:ring focus:ring-[#d9c8ab] backdrop-blur-md border border-[#d9c8ab]" />
                <UserIcon class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#d9c8ab]" />
            </div>

            <!-- Số điện thoại -->
            <div class="mb-4 relative">
                <input
                    type="tel"
                    v-model="phone"
                    placeholder="Số điện thoại"
                    class="w-full px-4 py-3 pl-10 rounded-xl focus:outline-none focus:ring focus:ring-[#d9c8ab] backdrop-blur-md border border-[#d9c8ab]" />
                <UserIcon class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#d9c8ab]" />
            </div>

            <!-- Submit -->
            <button
                type="submit"
                class="w-full bg-gradient-to-br from-[#57381b] to-[#c0a98f] text-white py-3 rounded-lg font-bold">
                Đăng ký
            </button>
        </form>

        <div class="mt-4 text-center text-[#d9c8ab]">
            <router-link to="/login" class="text-[#7b5e02]">
                Đã có tài khoản? Đăng nhập
            </router-link>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { LockClosedIcon, UserIcon, EyeIcon, EyeSlashIcon } from "@heroicons/vue/24/outline";

const username = ref("");
const password = ref("");
const confirmPassword = ref("");
const fullName = ref("");
const refCode = ref("");
const phone = ref("");
const showPassword = ref(false);
const showPasswordConfirm = ref(false);

const handleRegister = () => {
    // Xử lý đăng ký
};
</script>

<style scoped></style>
