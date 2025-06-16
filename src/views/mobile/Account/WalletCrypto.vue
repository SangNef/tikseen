<template>
    <div>
        <Header title="" />
        <div class="px-1.5 pt-6">
            <div class="!py-3">
                <h3 class="text-[0.5rem] font-semibold">Liên kết địa chỉ ví Crypto</h3>
                <p class="text-[0.3rem] text-yellow-600 leading-[0.5rem] !my-1">
                    <span
                        role="img"
                        aria-label="info-circle"
                        class="anticon anticon-info-circle !text-[0.35rem] text-yellow-600 mr-0.5 inline-block"
                        ><svg
                            viewBox="64 64 896 896"
                            focusable="false"
                            data-icon="info-circle"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            aria-hidden="true">
                            <path
                                d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"></path></svg></span
                    >Vui lòng nhập đúng thông tin để giao dịch của bạn không bị gián đoạn. Nếu cần thay đổi thông tin
                    vui lòng liên hệ đội ngũ chăm sóc khách hàng.
                </p>
            </div>
            <form class="ant-form ant-form-horizontal css-1v613y0">
                <div class="ant-form-item mb-2 css-1v613y0">
                    <div class="ant-row ant-form-item-row css-1v613y0">
                        <div class="ant-col ant-form-item-control css-1v613y0">
                            <div class="ant-form-item-control-input">
                                <div class="ant-form-item-control-input-content">
                                    <div
                                        class="text-white/90 text-[0.34rem] font-medium !ml-0.5 !mb-0.5 flex items-center"
                                        style="gap: 6px">
                                        Địa chỉ ví Crypto
                                    </div>
                                    <div
                                        class="bg-primary flex items-center relative border rounded-[0.28rem] border-secondary">
                                        <div class="w-full flex items-stretch flex-col">
                                            <div class="flex items-center">
                                                <div class="w-full flex items-center">
                                                    <input
                                                        type="text"
                                                        class="_input-field_7rxzm_2 bg-transparent w-full min-h-[48px] text-[0.36rem] text-white p-1.5 caret-default rounded-[0.32rem] font-semibold"
                                                        placeholder="Nhập địa chỉ ví (BEP20)"
                                                        spellcheck="false"
                                                        name="address" />
                                                    <div class="_clear_7rxzm_7 cursor-pointer p-1.5">
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
            </form>
        </div>
    </div>
</template>

<script setup>
import { Header } from '@/components/mobile';
</script>

<style></style>
