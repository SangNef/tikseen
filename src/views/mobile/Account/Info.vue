<template>
    <div>
        <Header title="Thông tin tài khoản" />
        <div class="px-1.5 py-1.5 pb-3 select-none">
            <div class="pt-6">
                <div class="flex items-center justify-center">
                    <div class="relative border border-secondary rounded-full flex items-center justify-center">
                        <img
                            class="w-8 h-8 active:opacity-60 active:duration-150 rounded-full"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAABOCAMAAAC5dNAvAAAA7VBMVEV3fYh2fIl0fY9ggIBygI10gIuAgKpye413d5l0gIt1fYp5hoZ1fIqSkpJ0fYtzfox0fItyfYptbZJyfY1qe410fot1gIpggJ9zfoyAgICAgJlwgI9wgI5zfoxze5RtkpJsgJN3iJl1foxzfYx1fo1mmZmA//9ygJRzgJl0got4gI94h5Z0dIt3d4h2dol2iZ1weI4AAABzgIx5gI12iYlreYZygI1tgJJteYZ0g5OZmZlwfI9wgI9xgI5vfJB2gJKAgJ9vepBxgI52gIlze4xVVVVxgJWAlZX///91gIp2gJNteZJ6hZBtgJJzfYwCeZ04AAAAT3RSTlMtJzkIOkAGOg8sYBNGB1pHQGAHYB1NRghfCAogIlkfBxoPWTNTBQImFDkgEQsPDQ0iABQmDRMmDhUhBSkQEiccCBckGh8DJAwCGBoVFxxmtOpt4QAAAzxJREFUWMPdmGt7kzAUx/Gy1W3aTRQv1TJbyjq3iqtjdZLCtkAd08r3/zg2IWUtnJME6vP46P9loT/OyUnOJcb4j8r4l3Hp9cX8ilKyEP2WzC9GG+DSiyQiZSXToAluwSKIkmldXHoZEYnoZVADp4DlQG3ciBIN0a9auPSGaOouVeMCSrRFAxVuFJEaGvpyXEhqKpThvpDausRxIWmgEMP5pJFGMC6ImuGGAYRLKWkomgK4G9JYd1WcRzbQqIKjm+AKd43mO25VP9dxAd0MN0zXcHLjvp/Zth3pmGcoV84Oj/J33J6tNC/HTXFYZ/UMuR8UZy3HYVUm6pQTWg/zI7nHBVj8XXGYT87PY5HaXIyXFripjHbo9DOu7sSX8cICl0ho795khboTzotwbzkO/lyPPXKyNTnst1M8tgzXgWMK0AQP9ua1wIXosZ5kFcXo90OBA1MTZWZ0q7guat5c4BLsW4BxWcbCcQz945fAnWG+WhDOwrylAgduJOYTRMtemOPxTIYDw87SDIjLPIkFGI59KoZx8d/HMWc93NlIgqNYgngOhmKsCAWI+7x4cADhDrCN8l7grrA9HmNLF2OHHD1kPEEA+3gfLS1zaQpgw4NXWb22h6bbZQp4hlf2GHIVqXsjgZtFeCOz116F7caSoqxI7uQJb4VWwvvUk/SodoFDXhhe571Va8BYA4ebNn4bSWoBx82Ufa9fdPyfsObCVZbtyK7MNcFLIvFV4EBv6fERNMW5cCPQW8EBsaU9fAgGgHStg6ok/8Iyf2dr0Gelu289nnxZAo/lDVnJPPoo/zleNhRFHduCW5VlN2NAn/uRmxbDpSffL7MbSTM7ntHyM9/KEO37ZQtopXPvlGg7mUROiefjYwqnHVqZVJa/ypsDU49wl9P8bqZQ1783gR5BIx7v22w92pLHjlPkwgNoRwRchyZ4zIRbbDw+5UflUIu2SDEmH+VCfHjnjfrDTFMf2du3inuUSaatE/U9iq6rfPlMJW67rY/jZU3h7Lb22rVMrSutWMvAdqx9f+cogbuOWeM60JMDEZjs7vMBmgUsw2xyleoBxF0JS+PeODZa1oBn+H7/VcvYM//jW+26+g1s3VOcB7GvMgAAAABJRU5ErkJggg=="
                            alt="" /><input
                            type="file"
                            accept=".jpg,.jpeg,.png"
                            class="w-full h-full absolute inset-0 rounded-full z-10 opacity-0" />
                        <div
                            class="absolute right-0 bottom-0 w-2.5 h-2.5 border border-[#d5dae011] bg-[#12192b] p-1 rounded-full flex items-center justify-center">
                            <span
                                role="img"
                                aria-label="camera"
                                class="anticon anticon-camera text-default !text-[0.36rem] active:opacity-60 active:duration-150"
                                ><svg
                                    viewBox="64 64 896 896"
                                    focusable="false"
                                    data-icon="camera"
                                    width="1em"
                                    height="1em"
                                    fill="currentColor"
                                    aria-hidden="true">
                                    <path
                                        d="M864 248H728l-32.4-90.8a32.07 32.07 0 00-30.2-21.2H358.6c-13.5 0-25.6 8.5-30.1 21.2L296 248H160c-44.2 0-80 35.8-80 80v456c0 44.2 35.8 80 80 80h704c44.2 0 80-35.8 80-80V328c0-44.2-35.8-80-80-80zm8 536c0 4.4-3.6 8-8 8H160c-4.4 0-8-3.6-8-8V328c0-4.4 3.6-8 8-8h186.7l17.1-47.8 22.9-64.2h250.5l22.9 64.2 17.1 47.8H864c4.4 0 8 3.6 8 8v456zM512 384c-88.4 0-160 71.6-160 160s71.6 160 160 160 160-71.6 160-160-71.6-160-160-160zm0 256c-53 0-96-43-96-96s43-96 96-96 96 43 96 96-43 96-96 96z"></path></svg
                            ></span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="py-3.5">
                <router-link
                    to="/account-settings/acc-info?page=change-nikname"
                    class="border-b-2 border-[#d5dae011] pb-1 mb-2 active:opacity-60 active:duration-150 flex items-center justify-between">
                    <div class="flex items-start flex-col justify-center" style="gap: 12px">
                        <p class="text-[#888b94] text-[0.32rem]">Biệt danh</p>
                        <span class="font-medium text-[0.34rem]">Member3798</span>
                    </div>
                    <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 1024 1024"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        role="img"
                        aria-label="arrow"
                        focusable="false"
                        data-icon="arrow"
                        aria-hidden="true"
                        preserveAspectRatio="xMidYMid meet"
                        class="rv-icon rv-icon-arrow text-[0.36rem] text-gray-600">
                        <path
                            d="M711.156 508.035a41.472 41.472 0 01-11.126 20.023L366.12 861.97c-16.272 16.272-42.654 16.272-58.926 0s-16.272-42.654 0-58.926L611.767 498.47 307.241 193.944c-16.272-16.272-16.272-42.654 0-58.926 16.271-16.272 42.653-16.272 58.925 0L700.078 468.93c10.606 10.606 14.299 25.508 11.078 39.105z"
                            fill-rule="evenodd"></path>
                    </svg>
                </router-link>
                <router-link
                    to="/account-settings/acc-info?page=passport-verification"
                    class="border-b-2 border-[#d5dae011] pb-1 mb-2 active:opacity-60 active:duration-150 flex items-center justify-between">
                    <div class="flex items-start flex-col justify-center" style="gap: 12px">
                        <p class="text-[#888b94] text-[0.32rem]">Xác minh tài khoản</p>
                        <span class="text-default font-medium text-[0.34rem]">Xác minh tài khoản (eKYC)</span>
                    </div>
                    <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 1024 1024"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        role="img"
                        aria-label="arrow"
                        focusable="false"
                        data-icon="arrow"
                        aria-hidden="true"
                        preserveAspectRatio="xMidYMid meet"
                        class="rv-icon rv-icon-arrow text-[0.36rem] text-gray-600">
                        <path
                            d="M711.156 508.035a41.472 41.472 0 01-11.126 20.023L366.12 861.97c-16.272 16.272-42.654 16.272-58.926 0s-16.272-42.654 0-58.926L611.767 498.47 307.241 193.944c-16.272-16.272-16.272-42.654 0-58.926 16.271-16.272 42.653-16.272 58.925 0L700.078 468.93c10.606 10.606 14.299 25.508 11.078 39.105z"
                            fill-rule="evenodd"></path>
                    </svg>
                </router-link>
                <router-link
                    to="/account-settings/acc-info?page=add-banking"
                    class="border-b-2 border-[#d5dae011] pb-1 mb-2 active:opacity-60 active:duration-150 flex items-center justify-between">
                    <div class="flex items-start flex-col justify-center" style="gap: 12px">
                        <p class="text-[#888b94] text-[0.32rem]">Liên kết ngân hàng</p>
                        <span class="text-default font-medium text-[0.34rem]">Thêm ngân hàng</span>
                    </div>
                    <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 1024 1024"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        role="img"
                        aria-label="arrow"
                        focusable="false"
                        data-icon="arrow"
                        aria-hidden="true"
                        preserveAspectRatio="xMidYMid meet"
                        class="rv-icon rv-icon-arrow text-[0.36rem] text-gray-600">
                        <path
                            d="M711.156 508.035a41.472 41.472 0 01-11.126 20.023L366.12 861.97c-16.272 16.272-42.654 16.272-58.926 0s-16.272-42.654 0-58.926L611.767 498.47 307.241 193.944c-16.272-16.272-16.272-42.654 0-58.926 16.271-16.272 42.653-16.272 58.925 0L700.078 468.93c10.606 10.606 14.299 25.508 11.078 39.105z"
                            fill-rule="evenodd"></path>
                    </svg>
                </router-link>
                <router-link
                    to="/account-settings/acc-info?page=wallet-crypto"
                    class="border-b-2 border-[#d5dae011] pb-1 mb-2 active:opacity-60 active:duration-150 flex items-center justify-between">
                    <div class="flex items-start flex-col justify-center" style="gap: 12px">
                        <p class="text-[#888b94] text-[0.32rem]">Địa chỉ ví Crypto</p>
                        <span class="text-default font-medium text-[0.34rem]">Liên kết địa chỉ ví (BEP20)</span>
                    </div>
                    <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 1024 1024"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        role="img"
                        aria-label="arrow"
                        focusable="false"
                        data-icon="arrow"
                        aria-hidden="true"
                        preserveAspectRatio="xMidYMid meet"
                        class="rv-icon rv-icon-arrow text-[0.36rem] text-gray-600">
                        <path
                            d="M711.156 508.035a41.472 41.472 0 01-11.126 20.023L366.12 861.97c-16.272 16.272-42.654 16.272-58.926 0s-16.272-42.654 0-58.926L611.767 498.47 307.241 193.944c-16.272-16.272-16.272-42.654 0-58.926 16.271-16.272 42.653-16.272 58.925 0L700.078 468.93c10.606 10.606 14.299 25.508 11.078 39.105z"
                            fill-rule="evenodd"></path>
                    </svg>
                </router-link>
                <div
                    class="border-b-2 border-[#d5dae011] pb-1 mb-2 active:opacity-60 active:duration-150 flex items-center justify-between">
                    <div class="flex items-start flex-col justify-center" style="gap: 12px">
                        <p class="text-[#888b94] text-[0.32rem]">Loại tài khoản</p>
                        <span class="font-medium text-[0.34rem]">Khách hàng tin cậy</span>
                    </div>
                    <span role="img" aria-label="check-circle" class="anticon anticon-check-circle text-green-600"
                        ><svg
                            viewBox="64 64 896 896"
                            focusable="false"
                            data-icon="check-circle"
                            width="21.5"
                            height="21.5"
                            fill="currentColor"
                            aria-hidden="true">
                            <path
                                d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path></svg
                    ></span>
                </div>
                <div
                    class="border-b-2 border-[#d5dae011] pb-1 mb-2 active:opacity-60 active:duration-150 flex items-center justify-between">
                    <div class="flex items-start flex-col justify-center" style="gap: 12px">
                        <p class="text-[#888b94] text-[0.32rem]">Email</p>
                        <span class="font-medium text-[0.34rem]">chuyengiataichinh1168@gmail.com</span>
                    </div>
                    <span role="img" aria-label="check-circle" class="anticon anticon-check-circle text-green-600"
                        ><svg
                            viewBox="64 64 896 896"
                            focusable="false"
                            data-icon="check-circle"
                            width="21.5"
                            height="21.5"
                            fill="currentColor"
                            aria-hidden="true">
                            <path
                                d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path></svg
                    ></span>
                </div>
                <div
                    class="border-b-2 border-[#d5dae011] pb-1 mb-2 active:opacity-60 active:duration-150 flex items-center justify-between">
                    <div class="flex items-start flex-col justify-center" style="gap: 12px">
                        <p class="text-[#888b94] text-[0.32rem]">Số điện thoại</p>
                        <span class="font-medium text-[0.34rem]">+84936803798</span>
                    </div>
                    <span role="img" aria-label="check-circle" class="anticon anticon-check-circle text-green-600"
                        ><svg
                            viewBox="64 64 896 896"
                            focusable="false"
                            data-icon="check-circle"
                            width="21.5"
                            height="21.5"
                            fill="currentColor"
                            aria-hidden="true">
                            <path
                                d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path></svg
                    ></span>
                </div>
                <div
                    class="border-b-2 border-[#d5dae011] pb-1 mb-2 active:opacity-60 active:duration-150 flex items-center justify-between">
                    <div class="flex items-start flex-col justify-center" style="gap: 12px">
                        <p class="text-[#888b94] text-[0.32rem]">Ngày đăng ký</p>
                        <span class="font-medium text-[0.34rem]">2025-05-30 12:15:40</span>
                    </div>
                    <span role="img" aria-label="check-circle" class="anticon anticon-check-circle text-green-600"
                        ><svg
                            viewBox="64 64 896 896"
                            focusable="false"
                            data-icon="check-circle"
                            width="21.5"
                            height="21.5"
                            fill="currentColor"
                            aria-hidden="true">
                            <path
                                d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path></svg
                    ></span>
                </div>
                <router-link
                    to="/account-settings/acc-info?page=change-password"
                    class="active:opacity-60 active: py-1 mb-1.5 flex items-center justify-between">
                    <div class="flex items-start flex-col justify-center" style="gap: 12px">
                        <span class="font-medium text-[0.34rem]">Thay đổi mật khẩu</span>
                    </div>
                    <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 1024 1024"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        role="img"
                        aria-label="arrow"
                        focusable="false"
                        data-icon="arrow"
                        aria-hidden="true"
                        preserveAspectRatio="xMidYMid meet"
                        class="rv-icon rv-icon-arrow text-[0.36rem] text-gray-600">
                        <path
                            d="M711.156 508.035a41.472 41.472 0 01-11.126 20.023L366.12 861.97c-16.272 16.272-42.654 16.272-58.926 0s-16.272-42.654 0-58.926L611.767 498.47 307.241 193.944c-16.272-16.272-16.272-42.654 0-58.926 16.271-16.272 42.653-16.272 58.925 0L700.078 468.93c10.606 10.606 14.299 25.508 11.078 39.105z"
                            fill-rule="evenodd"></path>
                    </svg>
                </router-link>
                <router-link
                    to="/account-settings/acc-info?page=change-payment-password"
                    class="active:opacity-60 active: py-1 flex items-center justify-between">
                    <div class="flex items-start flex-col justify-center" style="gap: 12px">
                        <span class="font-medium text-[0.34rem]">Thay đổi mật khẩu thanh toán</span>
                    </div>
                    <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 1024 1024"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        role="img"
                        aria-label="arrow"
                        focusable="false"
                        data-icon="arrow"
                        aria-hidden="true"
                        preserveAspectRatio="xMidYMid meet"
                        class="rv-icon rv-icon-arrow text-[0.36rem] text-gray-600">
                        <path
                            d="M711.156 508.035a41.472 41.472 0 01-11.126 20.023L366.12 861.97c-16.272 16.272-42.654 16.272-58.926 0s-16.272-42.654 0-58.926L611.767 498.47 307.241 193.944c-16.272-16.272-16.272-42.654 0-58.926 16.271-16.272 42.653-16.272 58.925 0L700.078 468.93c10.606 10.606 14.299 25.508 11.078 39.105z"
                            fill-rule="evenodd"></path>
                    </svg>
                </router-link>
                <button
                    type="button"
                    @click="handleLogout"
                    class="_btn-ripple_1fzeu_1 text-white font-medium w-full flex items-center justify-center gap-0.5 py-1 rounded-full border border-[#d5dae011] bg-[#e74c3c] mt-5">
                    <span class="text-[0.3rem] font-semibold">Đăng xuất</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import Header from '@/components/mobile/Header.vue';

import { useRouter } from 'vue-router';
const router = useRouter();

const handleLogout = () => {
    localStorage.removeItem('username'); // Clear token from local storage
    router.push('/login'); // Redirect to login page after logout
};
</script>

<style></style>
