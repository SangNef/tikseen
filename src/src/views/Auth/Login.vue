<template>
    <div>
        <Header title="Đăng nhập tài khoản" />
        <div
            class="login-content page-content-44-new"
            style="overflow-x: hidden"
            :style="{ backgroundImage: `url(${vlbg})` }">
            <div
                class="react-swipeable-view-container"
                style="
                    height: 800px;
                    flex-direction: row;
                    transition: all;
                    transform: translate(0%, 0px);
                    direction: ltr;
                    display: flex;
                    will-change: transform;
                ">
                <div
                    aria-hidden="false"
                    data-swipeable="true"
                    style="width: 100%; flex-shrink: 0; overflow: auto hidden">
                    <div style="margin: 16px 0px; height: 100%; overflow: auto">
                        <div style="padding: 0px; margin: 0px; position: relative">
                            <div
                                style="
                                    margin-top: 10px;
                                    padding: 0px 30px;
                                    min-height: 48px;
                                    display: flex;
                                    justify-content: space-between;
                                    position: relative;
                                ">
                                <div style="align-self: flex-end; min-height: 36px; margin-bottom: 6px; padding: 0px">
                                    <div class="p-1 rounded-full border border-gray-500">
                                        <UserIcon class="w-5 h-5 text-gray-500" style="font-size: 27px" />
                                    </div>
                                </div>
                                <div
                                    style="
                                        display: block;
                                        margin-bottom: 4px;
                                        padding-bottom: 0px;
                                        margin-left: 20px;
                                        padding-right: 16px;
                                        position: relative;
                                        width: 100%;
                                        background: transparent;
                                    ">
                                    <div
                                        style="
                                            width: 100%;
                                            position: relative;
                                            margin-bottom: 4px;
                                            min-height: 36px;
                                            border-bottom: 1px solid rgba(0, 0, 0, 0.12);
                                        ">
                                        <input
                                            type="text"
                                            inputmode="search"
                                            placeholder="Tài khoản / Di động / Hộp thư"
                                            id="username"
                                            name="username"
                                            v-model="username"
                                            class="inputType1"
                                            style="
                                                border: none;
                                                display: block;
                                                padding: 0px;
                                                margin: 0px;
                                                height: 36px;
                                                font-size: 14px;
                                                width: 100%;
                                                background: transparent;
                                            " />
                                    </div>
                                </div>
                            </div>
                            <div
                                style="
                                    padding: 0px 30px;
                                    min-height: 48px;
                                    display: flex;
                                    justify-content: space-between;
                                    position: relative;
                                ">
                                <div style="align-self: flex-end; min-height: 36px; margin-bottom: 6px; padding: 0px">
                                    <div class="p-1 rounded-full border border-gray-500">
                                        <LockClosedIcon class="w-5 h-5 text-gray-500" style="font-size: 27px" />
                                    </div>
                                </div>
                                <div
                                    style="
                                        display: block;
                                        margin-bottom: 4px;
                                        padding-bottom: 0px;
                                        margin-left: 20px;
                                        padding-right: 16px;
                                        position: relative;
                                        width: 100%;
                                        background: transparent;
                                    ">
                                    <div
                                        style="
                                            width: 100%;
                                            position: relative;
                                            margin-bottom: 4px;
                                            min-height: 36px;
                                            border-bottom: 1px solid rgba(0, 0, 0, 0.12);
                                            display: inline-block;
                                        ">
                                        <img
                                            alt=""
                                            @click="togglePassword()"
                                            :src="showPassword ? eyeOpen : eyeClose"
                                            class="icon-eye" /><input
                                            :type="showPassword ? 'text' : 'password'"
                                            placeholder="Mật khẩu"
                                            name="password"
                                            class="inputPType1"
                                            v-model="password"
                                            style="
                                                border: none;
                                                display: block;
                                                padding: 0px;
                                                margin: 0px;
                                                height: 36px;
                                                font-size: 14px;
                                                width: 100%;
                                                background: transparent;
                                            " />
                                    </div>
                                </div>
                            </div>
                            <div class="store-data list-block" style="margin: 0px; padding: 0px 30px">
                                <ul>
                                    <li>
                                        <div style="display: inline-flex; width: 90%">
                                            <label
                                                class="label-checkbox item-content"
                                                style="
                                                    margin-left: 3px;
                                                    padding-left: 45px;
                                                    padding-right: 60px;
                                                    min-height: unset;
                                                    width: 100%;
                                                "
                                                ><input
                                                    type="checkbox"
                                                    name="agree"
                                                    id="rememberpassword"
                                                    value="Books"
                                                    checked=""
                                                    style="margin-top: 17px; height: 0px; width: 0px" />
                                                <div class="item-media" style="line-height: 18px">
                                                    <input type="checkbox" id="rememberMe" class="custom-checkbox" />
                                                    <label for="rememberMe" class="remember-label">Nhớ mật khẩu</label>
                                                </div></label
                                            >
                                            <router-link
                                                to="/forgot-password"
                                                style="
                                                    float: right;
                                                    font-size: 12px;
                                                    width: 100%;
                                                    text-align: right;
                                                    line-height: 32px;
                                                ">
                                                Quên mật khẩu
                                            </router-link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div style="margin: 16px 0px; padding: 0px 30px">
                                <div
                                    class="theme-background-color"
                                    @click="handleLogin()"
                                    style="
                                        margin-top: 45px;
                                        height: 40px;
                                        border-radius: 8px;
                                        line-height: 40px;
                                        color: rgb(255, 255, 255);
                                        text-align: center;
                                    ">
                                    Đăng nhập
                                </div>
                            </div>
                            <div style="margin: 16px 0px; padding: 0px 30px; justify-content: center">
                                <div>
                                    <div>
                                        <router-link
                                            to="/signup"
                                            class="theme-background-color"
                                            style="
                                                display: block;
                                                margin-top: 20px;
                                                height: 40px;
                                                border-radius: 8px;
                                                line-height: 40px;
                                                color: rgb(255, 255, 255);
                                                text-align: center;
                                            ">
                                            Đăng ký tài khoản
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Header from "./Header.vue";
import vlbg from "@client/assets/images/bg/vlbg.png";
import eyeClose from "@client/assets/images/login/eye-close.png";
import eyeOpen from "@client/assets/images/login/eye-open.png";

import { UserIcon, LockClosedIcon } from "@heroicons/vue/24/outline";

const username = ref("");
const password = ref("");
const showPassword = ref(false);

const router = useRouter();

const handleLogin = () => {
    console.log(username.value, password.value);
    if (username.value === "mrl9999" && password.value === "1234567D") {
        const user = { username: username.value };
        localStorage.setItem("user", JSON.stringify(user));
        router.push("/");
    } else {
        alert("Sai tài khoản hoặc mật khẩu!");
    }
};

const togglePassword = () => {
    showPassword.value = !showPassword.value;
};
</script>

<style scope>
.page-content-44-new {
    background-position: center 5%;
    background-size: 330px 380px;
    height: calc(100vh - env(safe-area-inset-bottom) - 44px);
    background-image: url(${vlbg});
    background-repeat: no-repeat;
}

.theme-background-color {
    background: #e72732 !important;
}

.icon-eye {
    height: 27px;
    width: 27px;
    left: auto;
    right: 10px;
    position: absolute;
    z-index: 1;
    bottom: auto;
    top: 5px;
}

.custom-checkbox {
    appearance: none;
    width: 16px;
    height: 16px;
    border: 2px solid red;
    border-radius: 16px;
    display: inline-block;
    position: relative;
    cursor: pointer;
    margin-right: 5px;
}

.custom-checkbox:checked {
    background-color: red;
    border: 2px solid red;
}

.custom-checkbox:checked::after {
    content: "✔";
    font-size: 12px;
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: bold;
}

.remember-label {
    font-size: 12px;
    color: rgb(153, 153, 153);
    cursor: pointer;
}
</style>
