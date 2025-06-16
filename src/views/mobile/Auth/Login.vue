<template>
    <div class="p-1.5 pt-6">
        <div class="pt-2.5 pb-4"><span class="font-bold text-[0.62rem]">Đăng nhập</span></div>
        <form class="ant-form ant-form-horizontal css-1v613y0" @submit.prevent="onSubmit">
            <div class="ant-form-item mb-2 css-1v613y0">
                <div class="ant-row ant-form-item-row css-1v613y0">
                    <div class="ant-col ant-form-item-control css-1v613y0">
                        <div class="ant-form-item-control-input">
                            <div class="ant-form-item-control-input-content">
                                <div
                                    class="text-white/90 text-[0.34rem] font-medium ml-0.5 mb-0.5 ant-flex css-1v613y0 ant-flex-align-center"
                                    style="gap: 6px">
                                    Email hoặc số điện thoại
                                </div>
                                <div
                                    class="bg-primary flex items-center relative border rounded-[0.28rem] border-secondary w-full">
                                    <div class="w-full ant-flex css-1v613y0 ant-flex-align-stretch ant-flex-vertical">
                                        <div class="ant-flex css-1v613y0 ant-flex-align-center w-full">
                                            <div
                                                class="bg-primary flex items-center relative border rounded-[0.28rem] border-secondary w-full">
                                                <input
                                                    v-model="username"
                                                    class="_input-field_7rxzm_2 bg-transparent w-full min-h-[48px] text-[0.36rem] text-white p-1.5 caret-default rounded-[0.32rem] font-semibold"
                                                    placeholder="Nhập email hoặc số điện thoại"
                                                    spellcheck="false"
                                                    name="username" />
                                                <span
                                                    v-if="username"
                                                    role="img"
                                                    aria-label="close-circle"
                                                    @click="username = ''"
                                                    class="anticon anticon-close-circle text-white/30 text-[0.38rem] absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer">
                                                    <svg
                                                        fill-rule="evenodd"
                                                        viewBox="64 64 896 896"
                                                        focusable="false"
                                                        data-icon="close-circle"
                                                        width="1em"
                                                        height="1em"
                                                        fill="currentColor"
                                                        aria-hidden="true">
                                                        <path
                                                            d="M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z"></path>
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
            <div class="ant-form-item mb-2 css-1v613y0">
                <div class="ant-row ant-form-item-row css-1v613y0">
                    <div class="ant-col ant-form-item-control css-1v613y0">
                        <div class="ant-form-item-control-input">
                            <div class="ant-form-item-control-input-content">
                                <div
                                    class="text-white/90 text-[0.34rem] font-medium ml-0.5 mb-0.5 ant-flex css-1v613y0 ant-flex-align-center"
                                    style="gap: 6px">
                                    <div class="w-full ant-flex css-1v613y0 ant-flex-justify-space-between">
                                        <p class="">Mật khẩu</p>
                                        <router-link
                                            class="text-[0.3rem] text-default"
                                            to="/forgot-password"
                                            data-discover="true"
                                            >Quên mật khẩu?</router-link
                                        >
                                    </div>
                                </div>
                                <div
                                    class="bg-primary flex items-center relative border rounded-[0.28rem] border-secondary w-full">
                                    <div class="w-full ant-flex css-1v613y0 ant-flex-align-stretch ant-flex-vertical">
                                        <div class="ant-flex css-1v613y0 ant-flex-align-center w-full">
                                            <div
                                                class="bg-primary flex items-center relative border rounded-[0.28rem] border-secondary w-full">
                                                <input
                                                    :type="showPassword ? 'text' : 'password'"
                                                    v-model="password"
                                                    class="_input-field_7rxzm_2 bg-transparent w-full min-h-[48px] text-[0.36rem] text-white p-1.5 caret-default rounded-[0.32rem] font-semibold"
                                                    placeholder="Nhập mật khẩu"
                                                    spellcheck="false"
                                                    name="password" />
                                                <span
                                                    role="img"
                                                    :aria-label="showPassword ? 'eye' : 'eye-invisible'"
                                                    tabindex="-1"
                                                    @click="showPassword = !showPassword"
                                                    class="anticon anticon-eye-invisible absolute right-2 top-1/2 -translate-y-1/2 text-default/80 z-10 cursor-pointer"
                                                    style="font-size: 0.46rem">
                                                    <svg
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
            <div>
                <iframe
                    aria-hidden="true"
                    data-hcaptcha-widget-id="0tac1o891k1"
                    data-hcaptcha-response=""
                    src="https://newassets.hcaptcha.com/captcha/v1/27f941962a3b54efe3a38c5d3ddcc9a78bea3bb2/static/hcaptcha.html#frame=checkbox-invisible"
                    style="display: none"></iframe
                ><textarea
                    id="g-recaptcha-response-0tac1o891k1"
                    name="g-recaptcha-response"
                    style="display: none"></textarea
                ><textarea
                    id="h-captcha-response-0tac1o891k1"
                    name="h-captcha-response"
                    style="display: none"></textarea>
            </div>
            <button
                type="submit"
                style="font-size: 14px"
                class="_btn-ripple_1fzeu_1 text-white font-medium w-full h-[48px] flex items-center justify-center p-1 rounded-full bg-default mt-5">
                Tiếp tục
            </button>
        </form>
        <p class="text-center text-[0.32rem] mt-4">
            Bạn chưa có tài khoản?
            <router-link class="text-default font-semibold" to="/register" data-discover="true">Đăng ký</router-link>
        </p>
        <div
            class="ant-divider css-1v613y0 ant-divider-horizontal ant-divider-with-text ant-divider-with-text-center ant-divider-plain py-1 !border-secondary"
            role="separator">
            <span class="ant-divider-inner-text"><span class="text-gray-600">Hoặc tiếp tục với</span></span>
        </div>
        <div class="flex items-center gap-1">
            <button
                type="button"
                class="_btn-ripple_1fzeu_1 text-white font-medium w-full flex items-center justify-center gap-1 bg-primary border border-secondary py-1 rounded-full cursor-pointer">
                <img :src="Tele" alt="" width="20" />
                <span class="text-[0.32rem] font-semibold">Telegram</span></button
            ><button
                type="button"
                class="_btn-ripple_1fzeu_1 text-white font-medium w-full flex items-center justify-center gap-1 bg-primary border border-secondary py-1 rounded-full cursor-pointer">
                <img :src="Google" alt="" width="20" />
                <span class="text-[0.32rem] font-semibold">Google</span></button
            ><button
                type="button"
                class="_btn-ripple_1fzeu_1 text-white font-medium w-full flex items-center justify-center gap-1 bg-primary border border-secondary py-1 rounded-full cursor-pointer">
                <img :src="Apple" alt="" width="20" />
                <span class="text-[0.32rem] font-semibold">Apple</span>
            </button>
        </div>
        <div class="text-center text-md mt-6">
            <p class="text-[0.3rem] mb-1 text-gray-600">Secured by</p>
            <div class="ant-flex css-1v613y0 ant-flex-align-center ant-flex-justify-center" style="gap: 16px">
                <div class="ant-flex css-1v613y0 ant-flex-align-center" style="gap: 6px">
                    <img
                        class="w-1.5 rounded-full border border-secondary"
                        src="https://play-lh.googleusercontent.com/PjoJoG27miSglVBXoXrxBSLveV6e3EeBPpNY55aiUUBM9Q1RCETKCOqdOkX2ZydqVf0"
                        alt="" /><span class="text-[#8b8d9a] font-semibold">Coinbase</span>
                </div>
                <div class="ant-flex css-1v613y0 ant-flex-align-center" style="gap: 6px">
                    <img
                        class="w-1.5 rounded-full border border-secondary"
                        src="https://play-lh.googleusercontent.com/OoPpCoMOpPra6k0Qlwhfi14vOmqHfR790C1C7a_sHNqqUUYJhTYy6rjAmrv4eMLQRDbJ"
                        alt="" /><span class="text-[#8b8d9a] font-semibold">TradingView</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Tele, Google, Apple } from '@/assets/auth';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const username = ref('');
const password = ref('');
const showPassword = ref(false);

const router = useRouter();

function onSubmit() {
    localStorage.setItem('username', username.value);
    // navigate to /, user router
    router.push('/');
}
</script>

<style scope>
:where(.css-1v613y0).ant-divider-plain.ant-divider-with-text {
    color: rgba(0, 0, 0, 0.88);
    font-weight: normal;
    font-size: 14px;
}

:where(.css-1v613y0).ant-flex-justify-space-between {
    justify-content: space-between;
}

:where(.css-1v613y0).ant-divider-plain.ant-divider-with-text {
    color: rgba(0, 0, 0, 0.88);
    font-weight: normal;
    font-size: 14px !important;
}

:where(.css-1v613y0).ant-divider-horizontal.ant-divider-with-text::before,
:where(.css-1v613y0).ant-divider-horizontal.ant-divider-with-text::after {
    position: relative;
    width: 50%;
    border-block-start: 1px solid transparent;
    border-block-start-color: #0505050f;
    border-block-end: 0;
    transform: translateY(50%);
    content: '';
}

:where(.css-1v613y0).ant-divider-horizontal.ant-divider-with-text {
    display: flex;
    align-items: center;
    margin: 16px 0;
    color: rgba(0, 0, 0, 0.88);
    font-weight: 500;
    font-size: 16px;
    white-space: nowrap;
    text-align: center;
    border-block-start: 0 rgba(5, 5, 5, 0.06);
}

:where(.css-1v613y0).ant-divider .ant-divider-inner-text {
    display: inline-block;
    padding-block: 0;
    padding-inline: 1em;
}
</style>
