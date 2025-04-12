<template>
    <div class="w-full min-h-screen custom-gradient p-4 pb-20">
        <Header title="LIÊN KẾT NGÂN HÀNG" titleColor="text-[#d9c8ab]" />
        <div class="rounded-lg text-white border border-[#dea94f] bg-[#393530] mt-6">
            <table class="table-auto w-full text-base">
                <tbody>
                    <!-- Mật khẩu cũ -->
                    <tr class="border-b border-white">
                        <td class="pl-1 font-bold">Mật khẩu cũ:</td>
                        <td>
                            <div class="flex items-center h-12">
                                <input
                                    :type="showOldPassword ? 'text' : 'password'"
                                    name="oldPassword"
                                    placeholder="Vui lòng nhập mật khẩu"
                                    class="placeholder:text-neutral-500 text-base flex-1 border-none text-white bg-transparent outline-none h-full"
                                    v-model="oldPassword" />
                                <button
                                    type="button"
                                    @click="showOldPassword = !showOldPassword"
                                    class="text-[#d9c8ab] px-2">
                                    <component :is="showOldPassword ? EyeSlashIcon : EyeIcon" class="w-5 h-5" />
                                </button>
                            </div>
                        </td>
                    </tr>

                    <!-- Mật khẩu mới -->
                    <tr class="border-b border-white">
                        <td class="pl-1 font-bold">Mật khẩu mới:</td>
                        <td>
                            <div class="flex items-center h-12">
                                <input
                                    :type="showNewPassword ? 'text' : 'password'"
                                    name="newPassword"
                                    placeholder="Vui lòng nhập mật khẩu mới"
                                    class="placeholder:text-neutral-500 text-base flex-1 border-none text-white bg-transparent outline-none h-full"
                                    v-model="newPassword" />
                                <button
                                    type="button"
                                    @click="showNewPassword = !showNewPassword"
                                    class="text-[#d9c8ab] px-2">
                                    <component :is="showNewPassword ? EyeSlashIcon : EyeIcon" class="w-5 h-5" />
                                </button>
                            </div>
                        </td>
                    </tr>

                    <!-- Xác nhận mật khẩu -->
                    <tr>
                        <td class="pl-1 font-bold">Xác nhận Mật khẩu:</td>
                        <td>
                            <div class="flex items-center h-12">
                                <input
                                    :type="showConfirmPassword ? 'text' : 'password'"
                                    name="confirmPassword"
                                    placeholder="Vui lòng nhập lại mật khẩu"
                                    class="placeholder:text-neutral-500 text-base flex-1 border-none text-white bg-transparent outline-none h-full"
                                    v-model="confirmPassword" />
                                <button
                                    type="button"
                                    @click="showConfirmPassword = !showConfirmPassword"
                                    class="text-[#d9c8ab] px-2">
                                    <component :is="showConfirmPassword ? EyeSlashIcon : EyeIcon" class="w-5 h-5" />
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div
            class="w-full cursor-pointer hover:opacity-50 my-4 mx-auto border border-[#dea94f] font-semibold rounded-lg h-12 flex items-center justify-center bg-[#695626] text-white text-base">
            Xác nhận thay đổi mật khẩu
        </div>
    </div>
</template>

<script setup>
import Header from "@landing/components/Header.vue";
import { ref } from "vue";
import { EyeIcon, EyeSlashIcon } from "@heroicons/vue/24/outline";

const oldPassword = ref("");
const newPassword = ref("");
const confirmPassword = ref("");

const showOldPassword = ref(false);
const showNewPassword = ref(false);
const showConfirmPassword = ref(false);
</script>
