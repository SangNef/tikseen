<script setup>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import bigLogo from "@client/assets/logo-big.webp";

const username = ref("");
const password = ref("");
const error = ref("");
const loading = ref(false);
const router = useRouter();

// Kiểm tra username
watch(username, (newVal) => {
    if (newVal.length < 6) {
        error.value = "아이디는 6자 이상 20자 이하로 입력해주세요.";
        setTimeout(() => (error.value = ""), 5000);
    }
});

// Kiểm tra password
watch(password, (newVal) => {
    if (newVal.length < 6) {
        error.value = "비밀번호는 6자 이상 20자 이하로 입력해주세요.";
        setTimeout(() => (error.value = ""), 5000);
    }
});

// Xử lý đăng nhập
const handleLogin = (e) => {
    e.preventDefault();
    if (username.value.length < 6) {
        error.value = "아이디는 6자 이상 20자 이하로 입력해주세요.";
        setTimeout(() => (error.value = ""), 5000);
        return;
    }
    if (password.value.length < 6) {
        error.value = "비밀번호는 6자 이상 20자 이하로 입력해주세요.";
        setTimeout(() => (error.value = ""), 5000);
        return;
    }
    loading.value = true;
    if (username.value === "mang01" && password.value === "aaa123") {
        localStorage.setItem("user", username.value);
        router.push("/");
    }
};
</script>

<template>
    <div class="relative w-full h-full flex flex-col justify-center items-center px-5 overflow-hidden">
        <div
            class="rounded-xl border bg-white text-card-foreground shadow grid grid-cols-2 border-[#4492bfb3] w-full px-5 gap-y-3 gap-x-3 py-5 justify-center items-center">
            <div class="col-span-2 text-center text-[#4492bf] font-bold">로그인</div>

            <input
                v-model="username"
                class="flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors col-span-2 border-[#4492bfb3]"
                placeholder="아이디를 입력해주세요."
                type="text" />

            <input
                v-model="password"
                class="flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors col-span-2 border-[#4492bfb3]"
                placeholder="비밀번호를 입력해주세요."
                type="password" />

            <div class="col-span-2 text-xs text-red-400 font-bold">
                {{ error }}
            </div>

            <button
                class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors shadow h-9 px-4 py-2 bg-[#4492bfb3] hover:bg-[#4492bf1b] text-white hover:text-[#4492bfb3]"
                type="button"
                @click="handleLogin">
                로그인
            </button>

            <RouterLink
                to="/signup"
                class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors shadow h-9 px-4 py-2 bg-white hover:bg-[#4492bf95] text-[#4492bfb3] hover:text-white">
                회원가입
            </RouterLink>
        </div>

        <img
            alt=""
            loading="lazy"
            width="1200"
            height="500"
            decoding="async"
            class="opacity-25 scale-[1.6] absolute z-[-1] -rotate-45"
            :src="bigLogo" />
    </div>
</template>
