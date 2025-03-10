<template>
    <div class="bg-white max-w-100 w-full mx-auto h-screen relative font-sans">
        <div class="text-[20px] text-[#333] text-center py-3 isolate relative">
            <svg
                data-v-bd832875=""
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="icon absolute left-4 top-1/2 isolate -translate-y-1/2 cursor-pointer"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                @click="router.back()">
                <path
                    fill="currentColor"
                    d="m3.55 12l7.35 7.35q.375.375.363.875t-.388.875q-.375.375-.875.375t-.875-.375l-7.7-7.675q-.3-.3-.45-.675T.825 12q0-.375.15-.75t.45-.675l7.7-7.7q.375-.375.888-.363t.887.388q.375.375.375.875t-.375.875z"></path></svg
            >Nạp tiền
        </div>
        <div class="p-4">
            <form action="">
                <div class="flex flex-col" style="position: relative">
                    <label for="money" class="text-[#333]">Số tiền muốn nạp:</label>
                    <input
                        placeholder="Vui lòng điền số tiền cần nạp"
                        type="number"
                        id="money"
                        class="remove-arrow mt-2 !py-2 appearance-none border border-transparent outline-none w-full text-[16px] [line-height:22px] font-medium text-[#333] p-3.5" />
                    <!--<button type="button" data-money="0" class="js-all-money btn btn-sm btn-primary" style="font-size:12px;background:#686C94;padding:2px 6px;border-radius:4px;position:absolute;bottom:10px;right:10px">Tất cả</button>-->
                </div>
                <div
                    style="
                        padding-top: 20px;
                        border-top: 1px solid #ccc;
                        color: red;
                        font-size: 13px;
                        margin-top: 1.25rem;
                    ">
                    Thông tin chuyển khoản:
                </div>
                <div class="flex flex-col" style="position: relative; margin-top: 1.25rem">
                    <label for="bankName">Tên ngân hàng:</label>
                    <input value="" type="text" id="bankName" class="remove-arrow mt-2 !py-2" />
                    <button
                        type="button"
                        onclick="copyToClipboard('bankName')"
                        class="btn btn-sm btn-primary"
                        style="
                            font-size: 12px;
                            background: #686c94;
                            padding: 2px 6px;
                            border-radius: 4px;
                            position: absolute;
                            bottom: 10px;
                            right: 10px;
                            color: #333;
                        ">
                        Coppy
                    </button>
                </div>
                <div class="flex flex-col" style="position: relative; margin-top: 1.25rem">
                    <label for="bankName">Chủ tài khoản:</label>
                    <input value="" type="text" id="bankName" class="remove-arrow mt-2 !py-2" />
                    <button
                        type="button"
                        onclick="copyToClipboard('bankName')"
                        class="btn btn-sm btn-primary"
                        style="
                            font-size: 12px;
                            background: #686c94;
                            padding: 2px 6px;
                            border-radius: 4px;
                            position: absolute;
                            bottom: 10px;
                            right: 10px;
                            color: #333;
                        ">
                        Coppy
                    </button>
                </div>
                <div class="flex flex-col" style="position: relative; margin-top: 1.25rem">
                    <label for="bankName">Số tài khoản:</label>
                    <input value="" type="text" id="bankName" class="remove-arrow mt-2 !py-2" />
                    <button
                        type="button"
                        onclick="copyToClipboard('bankName')"
                        class="btn btn-sm btn-primary"
                        style="
                            font-size: 12px;
                            background: #686c94;
                            padding: 2px 6px;
                            border-radius: 4px;
                            position: absolute;
                            bottom: 10px;
                            right: 10px;
                            color: #333;
                        ">
                        Coppy
                    </button>
                </div>
                <div class="flex flex-col" style="position: relative;margin-top: 1.25rem;">
                    <label for="noteData">Nội dung chuyển khoản:</label>
                    <input value="kimcuong" type="text" id="noteData" class="remove-arrow mt-2 !py-2 appearance-none border border-transparent outline-none w-full text-[16px] [line-height:22px] font-medium text-[#333] p-3.5" />
                    <button
                        type="button"
                        onclick="copyToClipboard('noteData')"
                        class="btn btn-sm btn-primary"
                        style="
                            font-size: 12px;
                            background: #686c94;
                            padding: 2px 6px;
                            border-radius: 4px;
                            position: absolute;
                            bottom: 10px;
                            right: 10px;
                            color: #333;
                        ">
                        Coppy
                    </button>
                </div>
                <div class="flex justify-end mt-5">
                    <button
                        type="button"
                        class="flex-1 p-[15px] rounded-xl text-white bg-gradient-to-b from-[#13a2ba] to-[#087c95]">
                        Xác nhận
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
const router = useRouter();
</script>

<style></style>
