<template>
    <div class="w-full h-[100vh] max-w-md bg-white">
        <Toast v-show="message !== ''" :type="toastType" :message="message" />
        <div class="mt-[20%]">
            <div class="m-[30px] flex justify-between">
                <span class="text-[#333] font-bold text-[28px] p-1.5 rounded-lg">Đăng nhập</span>
            </div>
            <div class="mx-[30px]">
                <form @submit.prevent="handleLogin">
                    <div>
                        <span class="">Tên đăng nhập</span>
                        <div
                            style="
                                background: #fff;
                                border: 1px solid #eee;
                                border-radius: 6px;
                                padding: 10px;
                                margin-top: 5px;
                                margin-bottom: 30px;
                            ">
                            <div class="dropdown" style="display: flex">
                                <svg
                                    width="28"
                                    height="28"
                                    viewBox="0 0 46 44"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="">
                                    <path
                                        d="M24 22C28.9706 22 33 17.9706 33 13C33 8.02943 28.9706 4 24 4C19.0294 4 15 8.02943 15 13C15 17.9706 19.0294 22 24 22Z"
                                        stroke="#9397BD"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"></path>
                                    <path
                                        d="M7 35C7 30.0294 11.0294 26 16 26H32C36.9706 26 41 30.0294 41 35C41 39.9706 36.9706 44 32 44H16C11.0294 44 7 39.9706 7 35Z"
                                        stroke="#9397BD"
                                        stroke-width="2"></path>
                                </svg>
                                <input
                                    style="color: #333"
                                    v-model="username"
                                    class="w-[65%] h-[2.17333rem] text-[15px] border-none rounded-[.26667rem] bg-transparent outline-none [background-size:.64rem.64rem] [padding:.36rem.34667rem.36rem.8rem]"
                                    id="txtPhone"
                                    type="text"
                                    placeholder="Tên đăng nhập" />
                                <div style="border-bottom: 0.01333rem solid #686c94; padding-top: 10px"></div>
                            </div>
                        </div>
                    </div>

                    <div class="mb-4">
                        <span>Mật khẩu</span>
                        <div
                            style="
                                background: #fff;
                                border: 1px solid #eee;
                                border-radius: 6px;
                                padding: 10px;
                                margin-bottom: 30px;
                                margin-top: 5px;
                            ">
                            <div class="dropdown" style="display: flex">
                                <img style="height: 30px" src="https://i.imgur.com/wYahEmm.png" alt="" />
                                <input
                                    style="color: #333"
                                    v-model="password"
                                    class="w-[65%] h-[2.17333rem] text-[15px] border-none rounded-[.26667rem] bg-transparent outline-none [background-size:.64rem.64rem] [padding:.36rem.34667rem.36rem.8rem]"
                                    id="txtPassword"
                                    type="password"
                                    placeholder="Vui lòng xác nhận mật khẩu" />
                                <div style="border-bottom: 0.01333rem solid #686c94; padding-top: 10px"></div>
                            </div>
                        </div>
                    </div>

                    <div class="my-2.5">
                        <button
                            type="submit"
                            style="border-radius: 4px; height: 51px; color: #fff; background: #fe4a70"
                            class="w-full border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black focus:ring focus:ring-yellow-300 active:bg-yellow-400 active:text-black active:shadow-md disabled:border-yellow-400 disabled:text-yellow-400 px-4 py-2 rounded-md transition"
                            id="btnLogin">
                            Đăng Nhập
                        </button>
                    </div>
                    <div class="my-2.5">
                        <button
                            style="
                                border-radius: 4px;
                                height: 51px;
                                color: #333;
                                background: #f2f2f2;
                                border: 1px solid #eee;
                            "
                            class="w-full border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black focus:ring focus:ring-yellow-300 active:bg-yellow-400 active:text-black active:shadow-md disabled:border-yellow-400 disabled:text-yellow-400 px-4 py-2 rounded-md transition"
                            id="btnLogin"
                            @click="router.push('/register')"
                            >
                            Đăng ký
                        </button>
                    </div>
                    <div class="my-2.5" style="font-size: 14px; color: #666">
                        Bằng cách tiếp tục, bạn đồng ý với Điều khoản dịch vụ thương gia dành cho tiktok shop, Điều
                        khoản dịch vụ thương mại Tiktok và xác nhận rằng bạn đã đọc Chính sách quyền riêng tư của Tiktok
                        shop và Chính sách quyền riêng tư của Tiktok for business để tìm hiểu cách chúng tôi thu thập,
                        sử dụng và chia sẻ dữ liệu của bạn
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import Toast from "../../components/Toast.vue";
import { useRouter } from "vue-router";
const router = useRouter();

const username = ref("");
const password = ref("");
const message = ref("");
const toastType = ref("error");

const handleLogin = () => {
    if (username.value === "kimcuong" && password.value === "123456") {
        localStorage.setItem("user", JSON.stringify({ username: username.value }));
        message.value = "Đăng nhập thành công";
        toastType.value = "success";
        setTimeout(() => {
            message.value = "";
            window.location.href = "/";
        }, 1000);
    } else {
        message.value = "Sai tài khoản hoặc mật khẩu";
        toastType.value = "error";

        setTimeout(() => {
            message.value = "";
        }, 5000);
    }
};
</script>

<style scoped>
.input-container {
    background: #fff;
    border: 1px solid #eee;
    border-radius: 6px;
    padding: 10px;
    margin-top: 5px;
    display: flex;
    align-items: center;
}

.input-field {
    width: 100%;
    border: none;
    outline: none;
    padding-left: 10px;
    font-size: 16px;
}

.login-button {
    width: 100%;
    border-radius: 4px;
    height: 51px;
    color: #fff;
    background: #fe4a70;
    border: none;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    margin-top: 20px;
    transition: 0.3s;
}

.login-button:hover {
    background: #ff1f50;
}
</style>
