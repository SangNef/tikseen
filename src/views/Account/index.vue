<template>
    <div class="pt-6 px-[15px] pb-9 max-md:w-[calc(100vw)]">
        <div class="bg-white rounded-[10px] shadow-lg px-10 py-5 flex justify-between">
            <div class="flex">
                <div class="w-12 h-12 rounded-full bg-[#ddd8f9] flex items-center justify-center">
                    <SpeakerWaveIcon class="w-6 h-6 text-[#34007f] stroke-2" />
                </div>
                <div class="ml-5">
                    <div class="text-[15px] font-bold">Tiến hành tham gia đặt lệnh để tìm kiếm lợi nhuận</div>
                    <p class="text-[16px] text-[#8f8f8f]">
                        lợi nhuận có thể lên tới <strong >40%</strong> thu nhập từ chúng tôi
                    </p>
                </div>
            </div>
            <router-link to="/trading/1" class="px-[30px] py-[13px] bg-[#deb00b] text-white font-bold">Tiến hành giao dịch</router-link>
        </div>
        <div class="bg-white rounded-[10px] px-[15px] py-5 md:mt-[30px] shadow-lg">
            <h4 class="text-[22px] font-bold text-center">Cập nhật thông tin cá nhân</h4>
            <BaseInput
                v-model="username"
                label="Họ và tên"
                inputClass="font-bold text-[16px] leading-1.5 border-[#e2e2e2] py-2! px-2.5! h-[42px]! mt-2"
                labelClass="font-semibold" />
            <div class="flex flex-col md:flex-row gap-4 mt-4 w-full">
                <BaseInput
                    v-model="cccd"
                    label="CMND / CCCD"
                    customClass="w-full"
                    inputClass="font-bold text-[16px] leading-1.5 border-[#e2e2e2] py-2! px-2.5! h-[42px]! mt-2"
                    labelClass="font-semibold" />
                <BaseInput
                    v-model="phone"
                    label="Số điện thoại"
                    customClass="w-full"
                    inputClass="font-bold text-[16px] leading-1.5 border-[#e2e2e2] py-2! px-2.5! h-[42px]! mt-2"
                    labelClass="font-semibold" />
            </div>
            <div class="flex flex-col md:flex-row gap-4 mt-4 w-full">
                <BaseInput
                    v-model="gender"
                    label="Giới tính"
                    customClass="w-full"
                    inputClass="font-bold text-[16px] leading-1.5 border-[#e2e2e2] py-2! px-2.5! h-[42px]! mt-2"
                    labelClass="font-semibold" />
                <BaseInput
                    v-model="dob"
                    label="Ngày sinh"
                    customClass="w-full"
                    type="date"
                    inputClass="text-[16px] leading-1.5 border-[#e2e2e2] px-2.5! h-[42px]! mt-2"
                    labelClass="font-semibold" />
            </div>
            <BaseInput
                v-model="bank"
                label="Ngân hàng"
                placeholder="Chọn ngân hàng"
                inputClass="font-bold text-[16px] leading-1.5 border-[#e2e2e2] py-2! px-2.5! h-[42px]! mt-2"
                labelClass="font-semibold" />
            <div class="flex flex-col md:flex-row gap-4 mt-4 w-full">
                <BaseInput
                    v-model="bankcode"
                    label="Số tài khoản"
                    customClass="w-full"
                    placeholder="Nhập số tài khoản *"
                    inputClass="font-bold text-[16px] leading-1.5 border-[#e2e2e2] py-2! px-2.5! h-[42px]! mt-2"
                    labelClass="font-semibold" />
                <BaseInput
                    v-model="bankname"
                    label="Tên tài khoản"
                    customClass="w-full"
                    placeholder="Nhập tên chủ tài khoản"
                    inputClass="font-bold text-[16px] leading-1.5 border-[#e2e2e2] py-2! px-2.5! h-[42px]! mt-2"
                    labelClass="font-semibold" />
            </div>
            <div class="mt-4">
                <label class="text-[16px] leading-[24px] text-black mb-0 font-semibold block">CMND Mặt Trước</label>
                <label
                    class="max-md:w-full w-max md:px-[53px] h-[50px] bg-[#deb00b]! text-[16px]! font-bold flex items-center justify-center rounded-lg cursor-pointer text-white">
                    Choose File
                    <input type="file" accept="image/*" class="hidden" @change="handleFileFront" />
                </label>
                <div v-if="frontPreview" class="mt-2">
                    <img :src="frontPreview" alt="CMND Mặt Trước" class="w-auto max-h-[200px] rounded" />
                </div>
            </div>

            <div class="mt-4">
                <label class="text-[16px] leading-[24px] text-black mb-0 font-semibold block">CMND Mặt Sau</label>
                <label
                    class="max-md:w-full w-max md:px-[53px] h-[50px] bg-[#deb00b]! text-[16px]! font-bold flex items-center justify-center rounded-lg cursor-pointer text-white">
                    Choose File
                    <input type="file" accept="image/*" class="hidden" @change="handleFileBack" />
                </label>
                <div v-if="backPreview" class="mt-2">
                    <img :src="backPreview" alt="CMND Mặt Sau" class="w-auto max-h-[200px] rounded" />
                </div>
            </div>
            <BaseButton
                type="button"
                label="Cập nhật"
                class="max-md:w-full w-max md:px-[53px] h-[50px] bg-[#deb00b]! text-[16px]! font-bold mt-6" />
        </div>
    </div>
</template>

<script setup>
import BaseButton from "@/components/Common/BaseButton.vue";
import BaseInput from "@/components/Common/BaseInput.vue";
import { SpeakerWaveIcon } from "@heroicons/vue/24/outline";
import { ref } from "vue";

const frontPreview = ref(null);
const backPreview = ref(null);

function handleFileFront(event) {
    const file = event.target.files[0];
    if (file) {
        frontPreview.value = URL.createObjectURL(file);
    }
}

function handleFileBack(event) {
    const file = event.target.files[0];
    if (file) {
        backPreview.value = URL.createObjectURL(file);
    }
}
</script>

<style></style>
