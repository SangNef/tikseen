<template>
    <div class="w-full min-h-screen custom-gradient p-4 pb-20">
        <Header title="LIÊN KẾT NGÂN HÀNG" titleColor="text-[#d9c8ab]" />
        <div class="rounded-lg text-white border border-[#dea94f] bg-[#393530] mt-6">
            <table class="table-auto w-full text-base">
                <tbody>
                    <!-- Tên ngân hàng -->
                    <tr class="border-b border-white">
                        <td class="pl-1 font-bold">Tên ngân hàng:</td>
                        <td>
                            <div class="flex items-center h-12">
                                <input
                                    name="bank_name"
                                    placeholder="Vui lòng nhập tên ngân hàng"
                                    class="placeholder:text-neutral-500 text-base flex-1 border-none text-white bg-transparent outline-none h-full"
                                    v-model="bankName" />
                            </div>
                        </td>
                    </tr>

                    <!-- Số tài khoản -->
                    <tr class="border-b border-white">
                        <td class="pl-1 font-bold">Số tài khoản:</td>
                        <td>
                            <div class="flex items-center h-12">
                                <input
                                    name="account_number"
                                    placeholder="Vui lòng nhập số tài khoản"
                                    class="placeholder:text-neutral-500 text-base flex-1 border-none text-white bg-transparent outline-none h-full"
                                    v-model="accountNumber" />
                            </div>
                        </td>
                    </tr>

                    <!-- Tên chủ tài khoản -->
                    <tr>
                        <td class="pl-1 font-bold">Tên chủ tài khoản:</td>
                        <td>
                            <div class="flex items-center h-12">
                                <input
                                    name="account_name"
                                    placeholder="Vui lòng nhập tên chủ tài khoản"
                                    class="placeholder:text-neutral-500 text-base flex-1 border-none text-white bg-transparent outline-none h-full"
                                    v-model="accountName" />
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <button
            class="w-full cursor-pointer hover:opacity-50 my-4 mx-auto border border-[#dea94f] font-semibold rounded-lg h-12 flex items-center justify-center bg-[#695626] text-white text-base">
            Lưu
        </button>
    </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import { ref } from "vue";

const bankName = ref("");
const accountNumber = ref("");
const accountName = ref("");
</script>
