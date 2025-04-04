<template>
    <form @submit.prevent="handleLogin">
        <!-- Username -->
        <div class="mb-4 relative">
            <input
                type="text"
                v-model="username"
                placeholder="Tên đăng nhập"
                class="w-full px-4 py-3 pl-10 rounded-xl focus:outline-none focus:ring focus:ring-[#d9c8ab] backdrop-blur-md border border-[#d9c8ab]" />
            <UserIcon
                class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#d9c8ab]"
                aria-hidden="true" />
        </div>

        <!-- Password -->
        <div class="mb-4 relative">
            <input
                :type="showPassword ? 'text' : 'password'"
                v-model="password"
                placeholder="Mật khẩu"
                class="w-full px-4 py-3 pl-10 pr-10 rounded-xl focus:outline-none focus:ring focus:ring-[#d9c8ab] backdrop-blur-md border border-[#d9c8ab]" />
            <LockClosedIcon
                class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#d9c8ab]"
                aria-hidden="true" />
            <button
                type="button"
                @click="showPassword = !showPassword"
                class="absolute right-3 top-1/2 transform -translate-y-1/2 focus:outline-none">
                <component
                    :is="showPassword ? EyeSlashIcon : EyeIcon"
                    class="w-5 h-5 text-[#d9c8ab]"
                    aria-hidden="true" />
            </button>
        </div>

        <!-- Submit -->
        <button
            type="submit"
            class="w-full bg-gradient-to-br from-[#57381b] to-[#c0a98f] text-white py-3 rounded-lg font-bold">
            Đăng nhập
        </button>
    </form>

    <div class="mt-4 text-center text-[#d9c8ab]">
        <router-link to="/register" class="text-[#d9c8ab] hover:text-[#7b5e02]"> Đăng ký tài khoản </router-link>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { LockClosedIcon, UserIcon, EyeIcon, EyeSlashIcon } from "@heroicons/vue/24/outline";

const username = ref("");
const password = ref("");
const showPassword = ref(false);

const handleLogin = () => {
    // xử lý login
};
</script>
