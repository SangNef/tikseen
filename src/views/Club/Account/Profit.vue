<template>
    <div class="w-full min-h-screen custom-gradient p-4 pb-20">
        <Header title="HỒ SƠ LỢI NHUẬN" titleColor="text-[#d9c8ab]" />
        <div class="rounded-lg text-white border border-[#dea94f] mt-6 bg-white/40">
            <div
                class="bg-gradient-to-r from-[#bf7271] to-[#a69373] px-3 h-12 w-full rounded-lg flex flex-row justify-between items-center">
                <span class="text-white font-semibold">Ngày đăng ký tài khoản</span
                ><span class="text-white">01/04/2025 21:31:32</span>
            </div>
            <div class="p-3">
                <div class="text-white font-semibold">hoang anh nam hoangnam999</div>
                <!-- <div class="text-white font-semibold">
              Số điện thoại: {{ store?.user?.profile?.phone }}
            </div> -->
                <div class="text-white font-semibold">Số dư: 0 VND</div>
                <table class="table-auto w-full">
                    <tbody>
                        <tr>
                            <td class="text-[#2d6930] font-bold">Tổng lợi nhuận:</td>
                            <td>0 VND</td>
                        </tr>
                        <tr>
                            <td class="text-[#ff3131] font-bold">Tổng tiền thưởng:</td>
                            <td>0 VND</td>
                        </tr>
                        <tr>
                            <td class="text-[#ffcc00] font-bold">Tổng vốn đầu tư:</td>
                            <td>0 VND</td>
                        </tr>
                    </tbody>
                </table>
                <div class="w-8/12 mx-auto mt-4">
                    <canvas width="210" height="210" style="display: block; box-sizing: border-box"></canvas>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Header from "@landing/components/Header.vue";
</script>

<style></style>
