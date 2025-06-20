<template>
    <div class="flex-1 bg-[#171b25] col-span-9 min-h-[820px] shadow-xl border border-[#212125] rounded-lg">
        <div class="flex items-center justify-between p-4">
            <h3 class="font-semibold text-lg">Thông tin ngân hàng</h3>
            <button
                @click="showAddBankModal = true"
                class="bg-[#01bc8d] flex items-center gap-2 px-5 py-2 rounded-md hover:ring-2 active:ring-4 ring-[#01bc8d]/50 duration-75">
                <svg
                    class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-testid="AddCircleOutlineOutlinedIcon"
                    width="24"
                    height="24"
                    style="font-size: 20px">
                    <path
                        d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"></path></svg
                ><span class="text-sm font-medium whitespace-nowrap">Thêm tài khoản</span>
            </button>
        </div>
        <a-divider style="background: rgb(29, 36, 51); margin: 0px" />

        <div>
            <div class="flex items-center justify-between p-5 hover:bg-[#222838] duration-200">
                <div class="flex items-center gap-3">
                    <div class="flex items-center justify-center rounded-full w-12 h-12">
                        <img class="rounded-md" alt="" />
                    </div>
                    <div class="flex flex-col justify-center text-sm">
                        <h3 class="!mb-1.5 font-semibold">Ngân hàng TMCP Kỹ thương Việt Nam</h3>
                        <span class="font-medium">7135797777</span>
                    </div>
                </div>
                <svg
                    class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium text-[#01bc8d] hover:opacity-50 cursor-pointer css-vubbuv"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-testid="RadioButtonUncheckedIcon"
                    width="24"
                    height="24"
                    aria-describedby=":r3l:">
                    <path
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"></path>
                </svg>
            </div>
            <a-divider style="margin: 0px; background: rgb(29, 36, 51)" />
        </div>
    </div>
    <AddBank v-model:open="showAddBankModal" />
</template>

<script setup>
import { ref } from "vue";
import { AddBank } from "./Modal";

const showAddBankModal = ref(false);
</script>

<style scoped>
.css-vubbuv {
    user-select: none;
    width: 1em;
    height: 1em;
    display: inline-block;
    fill: currentcolor;
    flex-shrink: 0;
    font-size: 1.5rem;
    transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
