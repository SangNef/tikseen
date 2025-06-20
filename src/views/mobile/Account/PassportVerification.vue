<template>
    <div class="bg-primary relative z-20">
        <div class="select-none">
            <div class="pb-3 select-none">
                <div
                    class="bg-cover h-[280px] relative z-10 ant-flex css-1v613y0 ant-flex-align-center ant-flex-justify-center"
                    :style="{
                        backgroundImage: `url(${BgWallet})`,
                    }"
                    style="background-position: left center">
                    <img class="w-28" :src="Kyc" alt="" />
                    <div
                        class="w-5 h-5 flex items-center justify-center absolute right-1 top-1 active:opacity-60 active:scale-95 active:duration-150"
                        @click="navigateBack">
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="xmark"
                            class="svg-inline--fa fa-xmark text-gray-300"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20.95"
                            height="27.94"
                            viewBox="0 0 384 512">
                            <path
                                fill="currentColor"
                                d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"></path>
                        </svg>
                    </div>
                </div>
                <div class="bg-primary border-t border-secondary relative z-20 pb-3 -translate-y-2 rounded-t-lg px-2">
                    <div class="!pt-2 ant-flex css-1v613y0 ant-flex-align-center ant-flex-justify-space-between">
                        <h3 class="text-[0.5rem] font-semibold ml-0.5">Xác minh tài khoản</h3>
                        <img class="w-4" :src="Secu" alt="" />
                    </div>
                    <div class="bg-primary border border-secondary p-1.5 rounded-md mt-1.5">
                        <p class="flex items-center gap-1 text-[0.36rem] font-medium !mb-1">
                            Vấn đề bảo mật thông tin?
                        </p>
                        <p class="text-[0.3rem] text-gray-500 leading-[0.5rem]">
                            Chúng tôi cam kết bảo vệ thông tin cá nhân của quý khách hàng bằng các biện pháp bảo mật
                            tiên tiến nhất. Mọi dữ liệu cá nhân đều được mã hóa và chỉ sử dụng cho mục đích cung cấp
                            dịch vụ. Chúng tôi tuyệt đối không chia sẻ thông tin của quý khách với bên thứ ba. Sự tin
                            tưởng của quý khách là ưu tiên hàng đầu của chúng tôi.
                        </p>
                    </div>
                    <div class="mt-3">
                        <div class="relative !mb-3.5">
                            <div
                                class="absolute -top-0.5 right-0.5 w-3 h-3 border-t-4 border-r-4 border-gray-600"></div>
                            <div class="absolute -top-0.5 left-0.5 w-3 h-3 border-t-4 border-l-4 border-gray-600"></div>
                            <div
                                class="absolute -bottom-0.5 right-0.5 w-3 h-3 border-b-4 border-r-4 border-gray-600"></div>
                            <div
                                class="absolute -bottom-0.5 left-0.5 w-3 h-3 border-b-4 border-l-4 border-gray-600"></div>
                            <img class="w-[95%] h-[192px] mx-auto" :src="Front" alt="" /><input
                                type="file"
                                name="front_image"
                                class="opacity-0 absolute inset-0 overflow-hidden"
                                accept=".jpg,.jpeg,.png" />
                        </div>
                        <div class="relative">
                            <div
                                class="absolute -top-0.5 right-0.5 w-3 h-3 border-t-4 border-r-4 border-gray-600"></div>
                            <div class="absolute -top-0.5 left-0.5 w-3 h-3 border-t-4 border-l-4 border-gray-600"></div>
                            <div
                                class="absolute -bottom-0.5 right-0.5 w-3 h-3 border-b-4 border-r-4 border-gray-600"></div>
                            <div
                                class="absolute -bottom-0.5 left-0.5 w-3 h-3 border-b-4 border-l-4 border-gray-600"></div>
                            <img class="w-[95%] h-[192px] mx-auto" :src="Back" alt="" /><input
                                type="file"
                                name="footprint_image"
                                class="opacity-0 absolute inset-0 overflow-hidden"
                                accept=".jpg,.jpeg,.png" />
                        </div>
                        <button
                            type="button"
                            class="_btn-ripple_1fzeu_1 text-white font-medium w-full h-[46px] flex items-center justify-center gap-1 py-1 mt-6 active:opacity-60 active:duration-150 rounded-full bg-default">
                            <p class="text-[0.32rem] font-semibold">Xác nhận</p>
                        </button>
                    </div>
                    <div class="bg-primary border border-secondary p-1.5 rounded-md mt-5">
                        <h2 class="text-[0.36rem] text-gray-500 font-medium !mb-0.5">
                            Hãy đảm bảo thông tin chính xác
                        </h2>
                        <ul class="text-[0.32rem] text-gray-500 ml-1.5 leading-[.65rem]">
                            <li class="list-disc">Giấy tờ tuỳ thân phải còn trong thời hạn hiệu lực.</li>
                            <li class="list-disc">
                                Nội dung chữ ký cá nhân bao gồm Coincex viết tay, chữ ký chính chủ và ngày tháng hiện
                                tại.
                            </li>
                            <li class="list-disc">
                                Hãy đảm bảo rằng nội dung của ảnh và chữ ký cá nhân được hiển thị rõ ràng.
                            </li>
                        </ul>
                        <p class="text-[0.32rem] text-gray-500 mt-1">
                            Nếu thông tin không chính xác, thời gian xác minh tài khoản của bạn có thể bị kéo dài.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="select-none hidden">
            <div class="min-h-screen">
                <div class="flex items-center justify-between p-1.5">
                    <div class="w-full">
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="arrow-left"
                            class="svg-inline--fa fa-arrow-left text-[0.6rem]"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512">
                            <path
                                fill="currentColor"
                                d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"></path>
                        </svg>
                    </div>
                    <div class="relative w-full flex items-center gap-1">
                        <div class="absolute w-6 h-0.5 bg-default rounded-full duration-150"></div>
                        <div class="w-6 h-0.5 bg-default rounded-full"></div>
                        <div class="w-6 h-0.5 bg-default rounded-full"></div>
                        <div class="w-6 h-0.5 bg-gray-300 rounded-full"></div>
                    </div>
                    <div class="w-full"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Back, Front, Kyc, Secu, BgWallet } from "@/assets/mobile/account";
import { useRouter } from "vue-router";

const router = useRouter();
function navigateBack() {
    router.back();
}
</script>

<style></style>
