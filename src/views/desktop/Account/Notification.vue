<template>
    <div class="bg-[#171b25] col-span-9 h-[820px] shadow-xl border border-[#212125] rounded-lg">
        <div class="w-full bg-[#171b25] rounded-t-md shadow-lg z-10">
            <div class="flex items-center justify-between p-5">
                <h3 class="font-semibold text-lg">Trung tâm thông báo</h3>
            </div>
            <a-divider style="background: rgb(29, 36, 51); margin: 0px" />
        </div>
        <div class="h-[calc(100%-68px)] overflow-y-auto">
            <div class="relative">
                <div class="flex items-start justify-between p-5 hover:bg-[#222838] duration-200">
                    <div
                        class="absolute flex items-center justify-center rounded-full w-9 h-9 bg-[#424242] text-white/90">
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="bell"
                            class="svg-inline--fa fa-bell text-base"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="16"
                            viewBox="0 0 448 512">
                            <path
                                fill="currentColor"
                                d="M224 0c-17.7 0-32 14.3-32 32l0 19.2C119 66 64 130.6 64 208l0 18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416l384 0c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8l0-18.8c0-77.4-55-142-128-156.8L256 32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"></path>
                        </svg>
                    </div>
                    <div class="absolute right-5">
                        <div class="w-2 h-2 bg-[#0fe28a] rounded-full relative">
                            <span
                                class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0fe28a] opacity-75"></span>
                        </div>
                    </div>
                    <div class="flex items-start gap-3 pl-14">
                        <div class="leading-7">
                            <div class="flex items-center gap-1.5">
                                <h3 class="font-semibold text-sm">Xác thực Google</h3>
                            </div>
                            <p class="text-[#525864] text-sm font-medium !my-1.5">
                                Tiến hành xác thực bảo mật khi dùng để đăng nhập, rút tiền, lấy lại mật khẩu, sửa thông
                                tin bảo mật.
                            </p>
                            <div>
                                <a-tag :color="'#192a56'" class="text-white text-xs">01/19/24 08:00:00</a-tag>
                            </div>
                        </div>
                    </div>
                    <div class="absolute right-5 bottom-6">
                        <div
                            class="flex items-center gap-1 text-xs text-blue-600/80 hover:underline font-semibold select-none cursor-pointer">
                            <span>Xem thêm </span
                            ><svg
                                class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                focusable="false"
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                data-testid="ArrowForwardIcon"
                                width="16"
                                height="16"
                                fill="currentColor"
                                style="font-size: 16px">
                                <path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
                <a-divider style="margin: 0px; background: rgb(29, 36, 51)" />
            </div>
        </div>
    </div>
</template>

<script setup></script>

<style></style>
