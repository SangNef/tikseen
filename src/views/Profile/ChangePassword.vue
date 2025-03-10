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
            >Đổi Mật Khẩu
        </div>
        <div class="mt-4 px-4">
            <form action="">
                <div class="flex flex-col">
                    <label for="txtOldPassword" style="line-height: 1.5 !important; color: #333">Mật khẩu cũ:</label>
                    <input
                        placeholder="Vui lòng nhập mật khẩu hiện tại"
                        type="password"
                        id="txtOldPassword"
                        class="mt-2 !py-2 appearance-none border border-transparent bg-white w-full text-[16px] font-medium [line-height:22px] p-[14px] placeholder:text-[#9f9f9f]" />
                </div>
                <div class="flex flex-col mt-5">
                    <label for="txtOldPassword" style="line-height: 1.5 !important; color: #333">Mật khẩu mới:</label>
                    <input
                        placeholder="Vui lòng nhập mật khẩu mới"
                        type="password"
                        id="txtOldPassword"
                        class="mt-2 !py-2 appearance-none border border-transparent bg-white w-full text-[16px] font-medium [line-height:22px] p-[14px] placeholder:text-[#9f9f9f]" />
                </div>
                <div class="flex flex-col mt-5">
                    <label for="txtOldPassword" style="line-height: 1.5 !important; color: #333"
                        >Nhập lại mật khẩu mới:</label
                    >
                    <input
                        placeholder="Vui lòng nhập lại mật khẩu mới"
                        type="password"
                        id="txtOldPassword"
                        class="mt-2 !py-2 appearance-none border border-transparent bg-white w-full text-[16px] font-medium [line-height:22px] p-[14px] placeholder:text-[#9f9f9f]" />
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

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<style></style>
