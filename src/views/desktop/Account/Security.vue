<template>
    <div class="flex-1 bg-[#171b25] col-span-9 min-h-[820px] shadow-xl border border-[#212125] rounded-lg">
        <div class="flex items-center justify-between p-5">
            <h3 class="font-semibold text-lg">Thông tin bảo mật</h3>
        </div>
        <a-divider style="margin: 0px; background: rgb(29, 36, 51)" />

        <div class="relative">
            <div class="flex items-center justify-between p-5 hover:bg-[#222838] duration-200">
                <div
                    class="absolute flex items-center justify-center rounded-full w-11 h-11 bg-[#424242] text-white/90">
                    <svg
                        class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="LockPersonIcon"
                        width="25"
                        height="25"
                        fill="currentColor"
                        style="font-size: 25px">
                        <path
                            d="M18 11c.7 0 1.37.1 2 .29V10c0-1.1-.9-2-2-2h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h6.26c-.79-1.13-1.26-2.51-1.26-4 0-3.87 3.13-7 7-7M8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9z"></path>
                        <path
                            d="M18 13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m0 2c.83 0 1.5.67 1.5 1.5S18.83 18 18 18s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5m0 6c-1.03 0-1.94-.52-2.48-1.32.73-.42 1.57-.68 2.48-.68s1.75.26 2.48.68c-.54.8-1.45 1.32-2.48 1.32"></path>
                    </svg>
                </div>
                <div class="flex items-center gap-3 pl-14">
                    <div class="leading-7">
                        <div class="flex items-center gap-1.5"><h3 class="font-semibold text-sm">Mật khẩu</h3></div>
                        <span class="text-[#464f5f] text-sm font-medium">Mật khẩu dùng để đăng nhập tài khoản.</span>
                    </div>
                </div>
                <button
                    @click="showChangePasswordModal = true"
                    class="bg-[#01bc8d] flex items-center gap-1 px-5 py-2 rounded-md hover:ring-2 active:ring-4 ring-[#01bc8d]/50 duration-75">
                    <span class="text-sm font-medium whitespace-nowrap">Cài đặt</span>
                </button>
            </div>
            <a-divider style="margin: 0px; background: rgb(29, 36, 51)" />
        </div>
        <div class="relative">
            <div class="flex items-center justify-between p-5 hover:bg-[#222838] duration-200">
                <div
                    class="absolute flex items-center justify-center rounded-full w-11 h-11 bg-[#424242] text-white/90">
                    <svg
                        class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="AdminPanelSettingsIcon"
                        width="25"
                        height="25"
                        fill="currentColor"
                        style="font-size: 25px">
                        <path
                            d="M17 11c.34 0 .67.04 1 .09V6.27L10.5 3 3 6.27v4.91c0 4.54 3.2 8.79 7.5 9.82.55-.13 1.08-.32 1.6-.55-.69-.98-1.1-2.17-1.1-3.45 0-3.31 2.69-6 6-6"></path>
                        <path
                            d="M17 13c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m0 1.38c.62 0 1.12.51 1.12 1.12s-.51 1.12-1.12 1.12-1.12-.51-1.12-1.12.5-1.12 1.12-1.12m0 5.37c-.93 0-1.74-.46-2.24-1.17.05-.72 1.51-1.08 2.24-1.08s2.19.36 2.24 1.08c-.5.71-1.31 1.17-2.24 1.17"></path>
                    </svg>
                </div>
                <div class="flex items-center gap-3 pl-14">
                    <div class="leading-7">
                        <div class="flex items-center gap-1.5"><h3 class="font-semibold text-sm">Mật khẩu quỹ</h3></div>
                        <span class="text-[#464f5f] text-sm font-medium"
                            >Được sử dụng trong quá trình rút tiền, giao dịch P2P và các tình huống khác để tiến hành
                            xác minh bảo mật.</span
                        >
                    </div>
                </div>
                <button
                    @click="showChangeWalletPasswordModal = true"
                    class="bg-[#01bc8d] flex items-center gap-1 px-5 py-2 rounded-md hover:ring-2 active:ring-4 ring-[#01bc8d]/50 duration-75">
                    <span class="text-sm font-medium whitespace-nowrap">Cài đặt</span>
                </button>
            </div>
            <a-divider style="margin: 0px; background: rgb(29, 36, 51)" />
        </div>
        <div class="relative">
            <div class="flex items-center justify-between p-5 hover:bg-[#222838] duration-200">
                <div
                    class="absolute flex items-center justify-center rounded-full w-11 h-11 bg-[#424242] text-white/90">
                    <svg
                        class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="GoogleIcon"
                        width="25"
                        height="25"
                        fill="currentColor"
                        style="font-size: 25px">
                        <path
                            d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"></path>
                    </svg>
                </div>
                <div class="flex items-center gap-3 pl-14">
                    <div class="leading-7">
                        <div class="flex items-center gap-1.5">
                            <h3 class="font-semibold text-sm">Xác thực Google Authenticator</h3>
                        </div>
                        <span class="text-[#464f5f] text-sm font-medium"
                            >Tiến hành xác thực bảo mật khi dùng để đăng nhập, rút tiền, lấy lại mật khẩu, sửa thông tin
                            bảo mật.</span
                        >
                    </div>
                </div>
                <button
                    class="bg-[#01bc8d] flex items-center gap-1 px-5 py-2 rounded-md hover:ring-2 active:ring-4 ring-[#01bc8d]/50 duration-75">
                    <span class="text-sm font-medium whitespace-nowrap">Cài đặt</span>
                </button>
            </div>
            <a-divider style="margin: 0px; background: rgb(29, 36, 51)" />
        </div>
        <div></div>
    </div>
    <ChangePassword v-model:open="showChangePasswordModal" />
    <ChangeWalletPassword v-model:open="showChangeWalletPasswordModal" />
</template>

<script setup>
import { ref } from "vue";
import { ChangePassword, ChangeWalletPassword } from "./Modal";

const showChangePasswordModal = ref(false);
const showChangeWalletPasswordModal = ref(false);
</script>

<style></style>
