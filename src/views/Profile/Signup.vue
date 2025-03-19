<template>
    <div class="w-full h-full flex flex-col justify-center items-center px-5">
        <form
            @submit.prevent="handleSubmit"
            class="rounded-xl border bg-white shadow grid grid-cols-2 border-[#4492bfb3] w-full px-5 gap-y-3 gap-x-3 py-5">
            <div class="col-span-2 text-center text-[#4492bf] font-bold">회원가입</div>
            <input
                v-for="(placeholder, field) in placeholders"
                :key="field"
                class="flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 col-span-2 border-[#4492bfb3]"
                :placeholder="placeholder"
                :type="field.includes('password') ? 'password' : 'text'"
                :name="field"
                v-model="form[field]" />
            <div class="col-span-2 text-xs text-red-400 font-bold">{{ error }}</div>
            <button
                type="submit"
                class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow h-9 px-4 py-2 bg-[#4492bfb3] hover:bg-[#4492bf1b] text-white hover:text-[#4492bfb3]">
                회원가입
            </button>
            <router-link
                to="/mypage"
                class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow h-9 px-4 py-2 bg-white hover:bg-[#4492bf95] text-[#4492bfb3] hover:text-white">
                뒤로가기
            </router-link>
        </form>
        <img alt="" :src="bigLogo" class="opacity-25 scale-[1.3] absolute z-[-1] -rotate-45" />
    </div>
</template>

<script>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import bigLogo from "@client/assets/logo-big.webp";

export default {
    setup() {
        const form = ref({
            username: "",
            password: "",
            confirmPassword: "",
            inviteCode: "",
        });
        const error = ref("");
        const router = useRouter();

        const placeholders = {
            username: "아이디를 입력해주세요.",
            password: "비밀번호를 입력해주세요.",
            confirmPassword: "비밀번호를 다시 입력해주세요.",
            inviteCode: "초대 코드를 입력해주세요.",
        };

        watch(error, (newError) => {
            if (newError) {
                setTimeout(() => (error.value = ""), 5000);
            }
        });

        const validate = () => {
            if (form.value.username.length < 6) return "아이디는 6자 이상 20자 이하로 입력해주세요.";
            if (form.value.password.length < 6) return "비밀번호는 6자 이상 20자 이하로 입력해주세요.";
            if (form.value.password !== form.value.confirmPassword) return "비밀번호가 일치하지 않습니다.";
            return "";
        };

        const handleSubmit = () => {
            const errorMsg = validate();
            if (errorMsg) {
                error.value = errorMsg;
                return;
            }
            console.log("Form submitted", form.value);
        };

        return { form, error, placeholders, handleSubmit, bigLogo };
    },
};
</script>
