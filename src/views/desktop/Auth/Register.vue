<template>
    <div class="flex items-start py-16 justify-center min-h-[90vh] relative bg-white">
        <div class="max-w-4xl w-full text-black flex items-start justify-between gap-6">
            <div class="w-full mt-6 text-center">
                <h1 class="font-bold text-2xl">Welcome to <span class="text-[#01bc8d]">Coin</span>cex!</h1>
                <h3 class="text-[#01bc8d] font-semibold text-xl !my-6">
                    Đăng ký tài khoản nhận đến<span class="text-green-500"> 5,020 USDT</span>
                </h3>
                <img
                    width="300"
                    class="mx-auto"
                    src="https://fh-static.bycsi.com/registerPic-82886d189baa7d5bd360d330de856313.png"
                    alt="config pic" />
            </div>
            <div class="w-full">
                <div class="flex items-center justify-between">
                    <h3 class="text-center font-bold text-2xl">Tạo tài khoản</h3>
                    <router-link class="flex items-center gap-2 hover:opacity-60" to="/login"
                        ><span role="img" aria-label="swap" class="anticon anticon-swap" style="color: rgb(1, 188, 141)"
                            ><svg
                                viewBox="64 64 896 896"
                                focusable="false"
                                data-icon="swap"
                                width="1em"
                                height="1em"
                                fill="currentColor"
                                aria-hidden="true">
                                <path
                                    d="M847.9 592H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h605.2L612.9 851c-4.1 5.2-.4 13 6.3 13h72.5c4.9 0 9.5-2.2 12.6-6.1l168.8-214.1c16.5-21 1.6-51.8-25.2-51.8zM872 356H266.8l144.3-183c4.1-5.2.4-13-6.3-13h-72.5c-4.9 0-9.5 2.2-12.6 6.1L150.9 380.2c-16.5 21-1.6 51.8 25.1 51.8h696c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path></svg
                        ></span>
                        <h2 class="text-[#01bc8d] font-semibold cursor-pointer">Đăng nhập</h2></router-link
                    >
                </div>
                <div class="flex items-center gap-3 mt-8 mb-6 font-semibold text-sm">
                    <div class="!border-[#01bc8d] border-b-2 p-1 border-transparent cursor-pointer">
                        <span>Điện thoại</span>
                    </div>
                    <div class="border-b-2 p-1 border-transparent cursor-not-allowed"><span>Email</span></div>
                </div>
                <form>
                    <div class="mb-6">
                        <div class="form-group">
                            <div class="relative w-full min-w-[200px] h-11">
                                <input
                                    v-model="username"
                                    name="username"
                                    type="text"
                                    spellcheck="false"
                                    class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 disabled:cursor-not-allowed transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent placeholder:opacity-0 focus:placeholder:opacity-100 text-sm px-3 py-3 rounded-md border-blue-gray-200 focus:border-teal-500"
                                    placeholder=" " /><label
                                    class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1] text-blue-gray-400 peer-focus:text-teal-500 before:border-blue-gray-200 peer-focus:before:!border-teal-500 after:border-blue-gray-200 peer-focus:after:!border-teal-500"
                                    >Số điện thoại
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="mb-6">
                        <div class="form-group">
                            <div class="relative w-full min-w-[200px] h-11">
                                <div
                                    class="grid place-items-center absolute text-[#607d8b] top-2/4 right-3 -translate-y-2/4 w-6 h-6">
                                    <span
                                        @click="showPassword = !showPassword"
                                        role="img"
                                        aria-label="eye-invisible"
                                        tabindex="-1"
                                        class="anticon anticon-eye-invisible"
                                        ><svg
                                            v-if="showPassword"
                                            viewBox="64 64 896 896"
                                            focusable="false"
                                            data-icon="eye-invisible"
                                            width="1em"
                                            height="1em"
                                            fill="currentColor"
                                            aria-hidden="true">
                                            <path
                                                d="M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"></path>
                                            <path
                                                d="M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"></path>
                                        </svg>
                                        <svg
                                            v-else
                                            viewBox="64 64 896 896"
                                            focusable="false"
                                            data-icon="eye"
                                            width="1em"
                                            height="1em"
                                            fill="currentColor"
                                            aria-hidden="true">
                                            <path
                                                d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"></path>
                                        </svg>
                                    </span>
                                </div>
                                <input
                                    v-model="password"
                                    name="password"
                                    :type="showPassword ? 'text' : 'password'"
                                    spellcheck="false"
                                    class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 disabled:cursor-not-allowed transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent placeholder:opacity-0 focus:placeholder:opacity-100 text-sm px-3 py-3 rounded-md !pr-9 border-blue-gray-200 focus:border-teal-500"
                                    placeholder=" " /><label
                                    class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1] text-blue-gray-400 peer-focus:text-teal-500 before:border-blue-gray-200 peer-focus:before:!border-teal-500 after:border-blue-gray-200 peer-focus:after:!border-teal-500"
                                    >Mật khẩu
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="mb-3">
                        <div class="form-group">
                            <div class="relative w-full min-w-[200px] h-11">
                                <input
                                    v-model="inviteCode"
                                    name="invite_code"
                                    type="text"
                                    spellcheck="false"
                                    class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 disabled:cursor-not-allowed transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent placeholder:opacity-0 focus:placeholder:opacity-100 text-sm px-3 py-3 rounded-md border-blue-gray-200 focus:border-teal-500"
                                    placeholder=" " /><label
                                    class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1] text-blue-gray-400 peer-focus:text-teal-500 before:border-blue-gray-200 peer-focus:before:!border-teal-500 after:border-blue-gray-200 peer-focus:after:!border-teal-500"
                                    >Mã giới thiệu
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col justify-center">
                        <label class="MuiFormControlLabel-root MuiFormControlLabel-labelPlacementEnd css-1jaw3da"
                            ><span
                                class="MuiButtonBase-root MuiCheckbox-root MuiCheckbox-colorPrimary MuiCheckbox-sizeMedium PrivateSwitchBase-root MuiCheckbox-root MuiCheckbox-colorPrimary MuiCheckbox-sizeMedium Mui-checked MuiCheckbox-root MuiCheckbox-colorPrimary MuiCheckbox-sizeMedium css-1uw3kmb"
                                ><input
                                    class="PrivateSwitchBase-input css-1m9pwf3"
                                    name="checked"
                                    type="checkbox"
                                    v-model="isChecked" />
                                <svg
                                    v-if="isChecked"
                                    class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                    focusable="false"
                                    aria-hidden="true"
                                    viewBox="0 0 24 24"
                                    data-testid="CheckBoxIcon">
                                    <path
                                        d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
                                </svg>
                                <svg
                                    v-else
                                    class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                    focusable="false"
                                    aria-hidden="true"
                                    viewBox="0 0 24 24"
                                    data-testid="CheckBoxOutlineBlankIcon">
                                    <path
                                        d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
                                </svg>
                                <span class="MuiTouchRipple-root css-w0pj6f"></span></span
                            ><span class="MuiTypography-root MuiTypography-body1 MuiFormControlLabel-label css-9l3uo3"
                                ><div class="text-xs">
                                    By clicking “Get My Welcome Gifts”, you agree to our
                                    <router-link
                                        class="font-semibold text-[#01bc8d] hover:underline cursor-pointer"
                                        to="/register"
                                        >Terms of Service</router-link
                                    ><span class="mx-1">and</span
                                    ><router-link
                                        class="font-semibold text-[#01bc8d] hover:underline cursor-pointer"
                                        to="/register"
                                        >Privacy Policy</router-link
                                    >
                                </div></span
                            ></label
                        >
                    </div>
                    <div class="mb-12">
                        <div>
                            <iframe
                                aria-hidden="true"
                                data-hcaptcha-widget-id="12b0zd9ypepa"
                                data-hcaptcha-response=""
                                src="https://newassets.hcaptcha.com/captcha/v1/e335577a0ad2cad328c47d64a30a8a4f40978814/static/hcaptcha.html#frame=checkbox-invisible"
                                style="display: none"></iframe
                            ><textarea
                                id="g-recaptcha-response-12b0zd9ypepa"
                                name="g-recaptcha-response"
                                style="display: none"></textarea
                            ><textarea
                                id="h-captcha-response-12b0zd9ypepa"
                                name="h-captcha-response"
                                style="display: none"></textarea>
                        </div>
                    </div>
                    <div class="mb-6">
                        <button
                            class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary flex items-center justify-center w-full p-2 bg-[#01bc8d] rounded-sm border-2 boder-transparent border-[#01bc8d] w-full css-fs7pd5"
                            tabindex="0"
                            type="submit">
                            <div class="py-0.5 capitalize text-white">Đăng ký</div>
                            <span class="MuiTouchRipple-root css-w0pj6f"></span>
                        </button>
                    </div>
                </form>
                <div
                    class="ant-divider css-1a3rktk ant-divider-horizontal ant-divider-with-text ant-divider-with-text-center"
                    role="separator">
                    <span class="ant-divider-inner-text"
                        ><span class="w-full text-sm text-[#81858c] font-normal">hoặc đăng ký bằng</span></span
                    >
                </div>
                <div class="flex items-center gap-6 mt-6">
                    <div
                        class="w-full flex items-center justify-center gap-3 border border-[#d5dae0] p-2.5 rounded-md hover:bg-[#3844520f] duration-150 cursor-pointer">
                        <img :src="google" alt="" /><span class="font-semibold select-none">Google</span>
                    </div>
                    <div
                        class="w-full flex items-center justify-center gap-3 border border-[#d5dae0] p-2.5 rounded-md hover:bg-[#3844520f] duration-150 cursor-pointer">
                        <img :src="apple" alt="" /><span class="font-semibold select-none">Apple</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { google } from "@/assets/desktop/login";
import { ref } from "vue";

const isChecked = ref(false);
const username = ref("");
const password = ref("");
const inviteCode = ref("");

const showPassword = ref(false);
</script>

<style scoped>
.css-1jaw3da {
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    cursor: pointer;
    vertical-align: middle;
    -webkit-tap-highlight-color: transparent;
    margin-left: -11px;
    margin-right: 16px;
}

.css-1uw3kmb.Mui-checked {
    color: rgb(1, 188, 141);
}

.css-1uw3kmb {
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    position: relative;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    background-color: transparent;
    outline: 0px;
    border: 0px;
    margin: 0px;
    cursor: pointer;
    user-select: none;
    vertical-align: middle;
    appearance: none;
    text-decoration: none;
    padding: 9px;
    border-radius: 50%;
    color: rgb(1, 188, 141);
}

.css-1m9pwf3 {
    cursor: inherit;
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    margin: 0px;
    padding: 0px;
    z-index: 1;
}

input {
    font-family: inherit;
    font-feature-settings: inherit;
    font-variation-settings: inherit;
    font-size: 100%;
    font-weight: inherit;
    line-height: inherit;
    letter-spacing: inherit;
    color: inherit;
}

.css-vubbuv {
    user-select: none;
    width: 1em;
    height: 1em;
    display: inline-block;
    fill: currentcolor;
    flex-shrink: 0;
    font-size: 1.5rem;
    transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
