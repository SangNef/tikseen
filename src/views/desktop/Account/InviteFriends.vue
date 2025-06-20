<template>
    <div class="flex-1 bg-[#171b25] col-span-9 min-h-[820px] shadow-xl border border-[#212125] rounded-lg">
        <div class="flex items-center justify-between p-5">
            <h3 class="font-semibold text-lg">Giới thiệu bạn bè</h3>
        </div>
        <div
            class="ant-divider css-1a3rktk ant-divider-horizontal"
            role="separator"
            style="background: rgb(29, 36, 51); margin: 0px"></div>
        <div class="p-8">
            <div class="flex items-start justify-between">
                <div class="w-full">
                    <h1 class="text-3xl font-semibold text-[#f9fef8]">
                        Giới thiệu bạn bè cùng sử dụng <span class="text-[#01bc8d]">Coin</span>cex
                    </h1>
                    <div class="flex items-center gap-3 mt-5">
                        <div class="bg-[#01bc8d] w-5 h-5 flex items-center justify-center p-0.5 rounded-full mt-0.5">
                            <span role="img" aria-label="check" class="anticon anticon-check text-sm"
                                ><svg
                                    viewBox="64 64 896 896"
                                    focusable="false"
                                    data-icon="check"
                                    width="1em"
                                    height="1em"
                                    fill="currentColor"
                                    aria-hidden="true">
                                    <path
                                        d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path></svg
                            ></span>
                        </div>
                        <span class="font-medium text-[#b4b6c3] text-sm"
                            >Nhận 20% hoa hồng từ phí giao dịch của người được giới thiệu</span
                        >
                    </div>
                    <div class="flex items-center gap-3 mt-3">
                        <div class="bg-[#01bc8d] w-5 h-5 flex items-center justify-center p-0.5 rounded-full mt-0.5">
                            <span role="img" aria-label="check" class="anticon anticon-check text-sm"
                                ><svg
                                    viewBox="64 64 896 896"
                                    focusable="false"
                                    data-icon="check"
                                    width="1em"
                                    height="1em"
                                    fill="currentColor"
                                    aria-hidden="true">
                                    <path
                                        d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path></svg
                            ></span>
                        </div>
                        <span class="font-medium text-[#b4b6c3] text-sm"
                            >Nhận <span class="text-green-600">135,000 VNDC</span> tiền thưởng với mỗi bạn bè hoàn thành
                            giao dịch và nạp tiền</span
                        >
                    </div>
                    <div class="flex items-center gap-3 mt-3">
                        <div class="bg-[#01bc8d] w-5 h-5 flex items-center justify-center p-0.5 rounded-full mt-0.5">
                            <span role="img" aria-label="check" class="anticon anticon-check text-sm"
                                ><svg
                                    viewBox="64 64 896 896"
                                    focusable="false"
                                    data-icon="check"
                                    width="1em"
                                    height="1em"
                                    fill="currentColor"
                                    aria-hidden="true">
                                    <path
                                        d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path></svg
                            ></span>
                        </div>
                        <span class="font-medium text-[#b4b6c3] text-sm"
                            >Người dùng có thể mời số lượng bạn bè không giới hạn tham gia Coincex và kiếm tiền hoa hồng
                            từ phí giao dịch của họ</span
                        >
                    </div>
                    <img class="w-[26rem] mt-24 ml-12" :src="invite" alt="" />
                </div>
                <div
                    class="w-full pt-40"
                    style="
                        display: flex;
                        align-items: start;
                        justify-content: start;
                        min-width: 580px;
                        min-height: 580px;
                        background: radial-gradient(
                            50% 50% at 50% 50%,
                            rgba(151, 71, 255, 0.4) 0%,
                            rgba(151, 71, 255, 0) 100%
                        );
                    ">
                    <div class="bg-[#282e3e] p-6 rounded-lg">
                        <h2 class="text-3xl font-semibold !mb-8">Earn Together With Your Friends</h2>
                        <div class="flex items-center justify-between pl-3.5 rounded-lg bg-[#1a1e26] mb-3">
                            <p class="font-semibold text-sm whitespace-nowrap text-[#464f5f]">Mã giới thiệu</p>
                            <p class="w-full text-sm text-right font-bold mr-5">7WLLTO</p>
                            <div class="bg-[#01bc8d] px-6 py-3.5 rounded-lg cursor-pointer">
                                <span role="img" aria-label="copy" class="anticon anticon-copy text-lg"
                                    ><svg
                                        viewBox="64 64 896 896"
                                        focusable="false"
                                        data-icon="copy"
                                        width="1em"
                                        height="1em"
                                        fill="currentColor"
                                        aria-hidden="true">
                                        <path
                                            d="M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"></path></svg
                                ></span>
                            </div>
                        </div>
                        <div class="flex items-center justify-between pl-3.5 rounded-lg bg-[#1a1e26] mb-3">
                            <p class="font-semibold text-sm whitespace-nowrap text-[#464f5f]">Liên kết giới thiệu</p>
                            <p class="w-full max-w-60 text-sm text-right font-bold truncate whitespace-nowrap">
                                https://coincex.io/register?code=7WLLTO
                            </p>
                            <div class="bg-[#01bc8d] px-6 py-3.5 rounded-lg cursor-pointer">
                                <span role="img" aria-label="copy" class="anticon anticon-copy text-lg"
                                    ><svg
                                        viewBox="64 64 896 896"
                                        focusable="false"
                                        data-icon="copy"
                                        width="1em"
                                        height="1em"
                                        fill="currentColor"
                                        aria-hidden="true">
                                        <path
                                            d="M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"></path></svg
                                ></span>
                            </div>
                        </div>
                        <div class="flex items-center justify-between gap-3">
                            <button class="w-full p-3 bg-[#01bc8d] rounded-md font-semibold cursor-pointer">
                                <span class="text-sm font-semibold">Giới thiệu ngay</span>
                            </button>
                            <div class="bg-[#01bc8d] px-6 py-3.5 rounded-lg cursor-pointer">
                                <span role="img" aria-label="qrcode" class="anticon anticon-qrcode text-lg"
                                    ><svg
                                        viewBox="64 64 896 896"
                                        focusable="false"
                                        data-icon="qrcode"
                                        width="1em"
                                        height="1em"
                                        fill="currentColor"
                                        aria-hidden="true">
                                        <path
                                            d="M468 128H160c-17.7 0-32 14.3-32 32v308c0 4.4 3.6 8 8 8h332c4.4 0 8-3.6 8-8V136c0-4.4-3.6-8-8-8zm-56 284H192V192h220v220zm-138-74h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm194 210H136c-4.4 0-8 3.6-8 8v308c0 17.7 14.3 32 32 32h308c4.4 0 8-3.6 8-8V556c0-4.4-3.6-8-8-8zm-56 284H192V612h220v220zm-138-74h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm590-630H556c-4.4 0-8 3.6-8 8v332c0 4.4 3.6 8 8 8h332c4.4 0 8-3.6 8-8V160c0-17.7-14.3-32-32-32zm-32 284H612V192h220v220zm-138-74h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm194 210h-48c-4.4 0-8 3.6-8 8v134h-78V556c0-4.4-3.6-8-8-8H556c-4.4 0-8 3.6-8 8v332c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V644h78v102c0 4.4 3.6 8 8 8h190c4.4 0 8-3.6 8-8V556c0-4.4-3.6-8-8-8zM746 832h-48c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm142 0h-48c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"></path></svg
                                ></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { invite } from "@/assets/desktop/account";
</script>

<style></style>
