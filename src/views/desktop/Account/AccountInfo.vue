<template>
    <div class="flex-1 bg-[#171b25] min-h-[820px] shadow-xl border border-[#212125] rounded-lg">
        <div class="flex items-center justify-between p-5">
            <h3 class="font-semibold text-lg">Thông tin tài khoản</h3>
        </div>
        <div
            class="ant-divider css-1a3rktk ant-divider-horizontal"
            role="separator"
            style="background: rgb(29, 36, 51); margin: 0px"></div>
        <div class="relative">
            <div class="flex items-center justify-between p-5 hover:bg-[#222838] duration-200">
                <div
                    class="absolute flex items-center justify-center rounded-full w-11 h-11 bg-[#424242] text-white/90">
                    <svg
                        class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="PersonPinIcon"
                        width="25"
                        height="25"
                        fill="currentColor"
                        style="font-size: 25px">
                        <path
                            d="M12 2c-4.97 0-9 4.03-9 9 0 4.17 2.84 7.67 6.69 8.69L12 22l2.31-2.31C18.16 18.67 21 15.17 21 11c0-4.97-4.03-9-9-9m0 2c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3m0 14.3c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22"></path>
                    </svg>
                </div>
                <div class="flex items-center gap-3 pl-14">
                    <div class="leading-6">
                        <div class="flex items-center gap-1.5"><h3 class="font-semibold text-sm">Ảnh đại diện</h3></div>
                        <p class="text-[#464f5f] text-sm font-medium mt-1.5">
                            Vui lòng tải lên ảnh đại diện hoặc chọn ảnh đại diện mặc định.
                        </p>
                    </div>
                </div>
                <button
                    @click="showAvatarModal = true"
                    class="bg-[#01bc8d] flex items-center gap-1 px-5 py-2 rounded-md hover:ring-2 active:ring-4 ring-[#01bc8d]/50 duration-75">
                    <span class="text-sm font-medium whitespace-nowrap">Cài đặt</span>
                </button>
            </div>
            <a-divider style="margin: 0; background: rgb(29, 36, 51)" />
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
                        data-testid="BadgeIcon"
                        width="25"
                        height="25"
                        fill="currentColor"
                        style="font-size: 25px">
                        <path
                            d="M20 7h-5V4c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2M9 12c.83 0 1.5.67 1.5 1.5S9.83 15 9 15s-1.5-.67-1.5-1.5S8.17 12 9 12m3 6H6v-.75c0-1 2-1.5 3-1.5s3 .5 3 1.5zm1-9h-2V4h2zm5 7.5h-4V15h4zm0-3h-4V12h4z"></path>
                    </svg>
                </div>
                <div class="flex items-center gap-3 pl-14">
                    <div class="leading-6">
                        <div class="flex items-center gap-1.5"><h3 class="font-semibold text-sm">Biệt danh</h3></div>
                        <p class="text-[#464f5f] text-sm font-medium mt-1.5">
                            Tên người gồm là 5-20 ký tự hoặc số và không chứa các ký tự đặc biệt.
                        </p>
                    </div>
                </div>
                <button
                    @click="showUsernameModal = true"
                    class="bg-[#01bc8d] flex items-center gap-1 px-5 py-2 rounded-md hover:ring-2 active:ring-4 ring-[#01bc8d]/50 duration-75">
                    <span class="text-sm font-medium whitespace-nowrap">Cài đặt</span>
                </button>
            </div>
            <a-divider style="margin: 0; background: rgb(29, 36, 51)" />
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
                        data-testid="EmailIcon"
                        width="25"
                        height="25"
                        fill="currentColor"
                        style="font-size: 25px">
                        <path
                            d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4-8 5-8-5V6l8 5 8-5z"></path>
                    </svg>
                </div>
                <div class="flex items-center gap-3 pl-14">
                    <div class="leading-6">
                        <div class="flex items-center gap-1.5">
                            <h3 class="font-semibold text-sm">Xác minh địa chỉ email</h3>
                            <svg
                                class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium text-[#20B26C] cursor-pointer css-vubbuv"
                                focusable="false"
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                data-testid="CheckCircleIcon"
                                aria-describedby=":r3a:"
                                width="20"
                                height="20"
                                fill="currentColor"
                                style="font-size: 20px">
                                <path
                                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z"></path>
                            </svg>
                        </div>
                        <p class="text-[#464f5f] text-sm font-medium mt-1.5">
                            Do google quản lý Để đăng nhập, rút tiền, truy xuất mật khẩu, thay đổi cài đặt bảo mật.
                        </p>
                    </div>
                </div>
                <button
                    @click="showEmailModal = true"
                    class="bg-[#01bc8d] flex items-center gap-1 px-5 py-2 rounded-md hover:ring-2 active:ring-4 ring-[#01bc8d]/50 duration-75">
                    <span class="text-sm font-medium whitespace-nowrap">Cài đặt</span>
                </button>
            </div>
            <a-divider style="margin: 0; background: rgb(29, 36, 51)" />
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
                        data-testid="PhoneAndroidIcon"
                        width="25"
                        height="25"
                        fill="currentColor"
                        style="font-size: 25px">
                        <path
                            d="M16 1H8C6.34 1 5 2.34 5 4v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3m-2 20h-4v-1h4zm3.25-3H6.75V4h10.5z"></path>
                    </svg>
                </div>
                <div class="flex items-center gap-3 pl-14">
                    <div class="leading-6">
                        <div class="flex items-center gap-1.5">
                            <h3 class="font-semibold text-sm">Xác thực bằng điện thoại di động</h3>
                            <svg
                                class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium text-[#20B26C] cursor-pointer css-vubbuv"
                                focusable="false"
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                data-testid="CheckCircleIcon"
                                aria-describedby=":r3c:"
                                width="20"
                                height="20"
                                fill="currentColor"
                                style="font-size: 20px">
                                <path
                                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z"></path>
                            </svg>
                        </div>
                        <p class="text-[#464f5f] text-sm font-medium mt-1.5">
                            Tiến hành xác thực bảo mật khi dùng để đăng nhập, lấy lại mật khẩu, sửa thông tin bảo mật,
                            quản lý API.
                        </p>
                    </div>
                </div>
                <button
                    @click="showChangePhone = true"
                    class="bg-[#01bc8d] flex items-center gap-1 px-5 py-2 rounded-md hover:ring-2 active:ring-4 ring-[#01bc8d]/50 duration-75">
                    <span class="text-sm font-medium whitespace-nowrap">Cài đặt</span>
                </button>
            </div>
            <a-divider style="margin: 0; background: rgb(29, 36, 51)" />
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
                        data-testid="VerifiedIcon"
                        width="25"
                        height="25"
                        fill="currentColor"
                        style="font-size: 25px">
                        <path
                            d="m23 12-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69zm-12.91 4.72-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48z"></path>
                    </svg>
                </div>
                <div class="flex items-center gap-3 pl-14">
                    <div class="leading-6">
                        <div class="flex items-center gap-1.5">
                            <h3 class="font-semibold text-sm">Xác minh danh tính</h3>
                        </div>
                        <p class="text-[#464f5f] text-sm font-medium mt-1.5">
                            Hoàn thành xác minh để nâng hạn mức rút tiền hàng ngày.
                        </p>
                    </div>
                </div>
                <button
                    @click="showChangeIdModal = true"
                    class="bg-[#01bc8d] flex items-center gap-1 px-5 py-2 rounded-md hover:ring-2 active:ring-4 ring-[#01bc8d]/50 duration-75">
                    <span class="text-sm font-medium whitespace-nowrap">Cài đặt</span>
                </button>
            </div>
            <a-divider style="margin: 0; background: rgb(29, 36, 51)" />
        </div>
    </div>
    <ChangeAvatar v-model:open="showAvatarModal" />
    <ChangeUsername v-model:open="showUsernameModal" />
    <ChangeEmail v-model:open="showEmailModal" />
    <ChangePhone v-model:open="showChangePhone" />
    <ChangeId v-model:open="showChangeIdModal" />
</template>

<script setup>
import { ChangeAvatar, ChangeEmail, ChangeId, ChangePhone, ChangeUsername } from "./Modal";
import { ref } from "vue";

const showAvatarModal = ref(false);
const showUsernameModal = ref(false);
const showEmailModal = ref(false);
const showChangePhone = ref(false);
const showChangeIdModal = ref(false);
</script>

<style></style>
