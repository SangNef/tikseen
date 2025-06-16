<template>
    <div
        class="bg-cover bg-no-repeat"
        :style="{ backgroundImage: `url(${Forgot})`, backgroundSize: '200px', backgroundPosition: 'right top' }">
        <div class="px-1.5 pb-6">
            <div class="pt-6 pb-6">
                <span class="font-bold text-[0.5rem]">Quên mật khẩu?</span>
                <p class="text-[0.3rem] font-medium mt-1">
                    Để đảm bảo an toàn cho tài sản của khách hàng. Vui lòng không cung cấp mã OTP cho bất kỳ ai.
                </p>
            </div>
            <form class="ant-form ant-form-horizontal css-1v613y0">
                <div class="ant-form-item mb-2 css-1v613y0">
                    <div class="ant-row ant-form-item-row css-1v613y0">
                        <div class="ant-col ant-form-item-control css-1v613y0">
                            <div class="ant-form-item-control-input">
                                <div class="ant-form-item-control-input-content">
                                    <div
                                        class="text-white/90 text-[0.34rem] font-medium !ml-0.5 !mb-0.5 ant-flex css-1v613y0 ant-flex-align-center"
                                        style="gap: 6px">
                                        Email hoặc số điện thoại
                                    </div>
                                    <div
                                        class="bg-primary flex items-center relative border rounded-[0.28rem] border-secondary">
                                        <div
                                            class="w-full ant-flex css-1v613y0 ant-flex-align-stretch ant-flex-vertical">
                                            <div class="ant-flex css-1v613y0 ant-flex-align-center w-full">
                                                <div class="w-full flex items-center">
                                                    <input
                                                        v-model="username"
                                                        class="_input-field_7rxzm_2 bg-transparent w-full min-h-[48px] text-[0.36rem] text-white p-1.5 caret-default rounded-[0.32rem] font-semibold"
                                                        placeholder="Nhập email hoặc số điện thoại"
                                                        spellcheck="false"
                                                        name="username"
                                                        value="" />
                                                    <div
                                                        class="_clear_7rxzm_7 cursor-pointer p-1.5"
                                                        v-if="username"
                                                        @click="username = ''">
                                                        <span
                                                            role="img"
                                                            aria-label="close-circle"
                                                            class="anticon anticon-close-circle text-white/30 text-[0.38rem]"
                                                            ><svg
                                                                fill-rule="evenodd"
                                                                viewBox="64 64 896 896"
                                                                focusable="false"
                                                                data-icon="close-circle"
                                                                width="1em"
                                                                height="1em"
                                                                fill="currentColor"
                                                                aria-hidden="true">
                                                                <path
                                                                    d="M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z"></path></svg
                                                        ></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ant-form-item mb-2 css-1v613y0">
                    <div class="ant-row ant-form-item-row css-1v613y0">
                        <div class="ant-col ant-form-item-control css-1v613y0">
                            <div class="ant-form-item-control-input">
                                <div class="ant-form-item-control-input-content">
                                    <div
                                        class="text-white/90 text-[0.34rem] font-medium !ml-0.5 !mb-0.5 ant-flex css-1v613y0 ant-flex-align-center"
                                        style="gap: 6px">
                                        Mật khẩu mới
                                    </div>
                                    <div
                                        class="bg-primary flex items-center relative border rounded-[0.28rem] border-secondary">
                                        <div
                                            class="w-full ant-flex css-1v613y0 ant-flex-align-stretch ant-flex-vertical">
                                            <div class="ant-flex css-1v613y0 ant-flex-align-center w-full">
                                                <div class="w-full flex items-center">
                                                    <input
                                                        :type="showPassword ? 'text' : 'password'"
                                                        v-model="newPassword"
                                                        class="_input-field_7rxzm_2 bg-transparent w-full min-h-[48px] text-[0.36rem] text-white p-1.5 caret-default rounded-[0.32rem] font-semibold"
                                                        placeholder="Nhập mật khẩu mới"
                                                        spellcheck="false"
                                                        name="new_password"
                                                        value="" />
                                                    <div class="cursor-pointer pl-0.5 py-0.5">
                                                        <span
                                                            role="img"
                                                            :aria-label="showPassword ? 'eye' : 'eye-invisible'"
                                                            tabindex="-1"
                                                            class="anticon anticon-eye-invisible absolute right-2 top-1/2 -translate-y-1/2 text-default/80 z-10"
                                                            style="font-size: 0.46rem"
                                                            @click="showPassword = !showPassword"
                                                            ><svg
                                                                v-if="showPassword"
                                                                viewBox="64 64 896 896"
                                                                focusable="false"
                                                                data-icon="eye"
                                                                width="1em"
                                                                height="1em"
                                                                fill="currentColor"
                                                                aria-hidden="true">
                                                                <path
                                                                    d="M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"></path>
                                                                <circle cx="512" cy="512" r="80" />
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
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ant-form-item mb-2 css-1v613y0">
                    <div class="ant-row ant-form-item-row css-1v613y0">
                        <div class="ant-col ant-form-item-control css-1v613y0">
                            <div class="ant-form-item-control-input">
                                <div class="ant-form-item-control-input-content">
                                    <div
                                        class="text-white/90 text-[0.34rem] font-medium !ml-0.5 !mb-0.5 ant-flex css-1v613y0 ant-flex-align-center"
                                        style="gap: 6px">
                                        Mã xác thực (Bao gồm 6 chữ số)
                                    </div>
                                    <div
                                        class="bg-primary flex items-center relative border rounded-[0.28rem] border-secondary">
                                        <div
                                            class="w-full ant-flex css-1v613y0 ant-flex-align-stretch ant-flex-vertical">
                                            <div class="ant-flex css-1v613y0 ant-flex-align-center">
                                                <div class="w-full flex items-center">
                                                    <input
                                                        class="_input-field_7rxzm_2 bg-transparent w-full min-h-[48px] text-[0.36rem] text-white p-1.5 caret-default rounded-[0.32rem] font-semibold"
                                                        placeholder="Nhập mã xác thực"
                                                        spellcheck="false"
                                                        name="otp_code"
                                                        value="" />
                                                    <div class="cursor-pointer pl-0.5 py-0.5">
                                                        <div
                                                            class="bg-primary rounded-[0.28rem] absolute right-[0.5rem] top-1/2 px-1.5 h-[calc(100%-2.5px)] -translate-y-1/2 z-10 active:opacity-60 active:duration-150 select-none ant-flex css-1v613y0 ant-flex-align-center">
                                                            <span class="text-[0.3rem] text-default font-semibold"
                                                                >Lấy mã</span
                                                            >
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <iframe
                        aria-hidden="true"
                        data-hcaptcha-widget-id="4j17h3f3zazp"
                        data-hcaptcha-response=""
                        src="https://newassets.hcaptcha.com/captcha/v1/27f941962a3b54efe3a38c5d3ddcc9a78bea3bb2/static/hcaptcha.html#frame=checkbox-invisible"
                        style="display: none"></iframe
                    ><textarea
                        id="g-recaptcha-response-4j17h3f3zazp"
                        name="g-recaptcha-response"
                        style="display: none"></textarea
                    ><textarea
                        id="h-captcha-response-4j17h3f3zazp"
                        name="h-captcha-response"
                        style="display: none"></textarea>
                </div>
                <button
                    type="submit"
                    style="font-size: 14px"
                    class="_btn-ripple_1fzeu_1 text-white font-medium w-full h-[48px] flex items-center justify-center p-1 rounded-full bg-default mt-5">
                    Đổi mật khẩu
                </button>
            </form>
            <p class="text-center text-md mt-4">
                Bạn đã nhớ mật khẩu?
                <router-link class="text-default font-semibold" to="/login" data-discover="true">Đăng nhập</router-link>
            </p>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { Forgot } from "@/assets/auth";

const username = ref("");
const newPassword = ref("");
const showPassword = ref(false);
</script>

<style></style>
