<template>
    <div class="pt-6 px-[15px] pb-9 max-md:w-[calc(100vw)]">
        <div class="bg-white rounded-[10px] px-[15px] py-5" style="box-shadow: 0 0.2rem 0.6rem 0 rgba(0, 0, 0, 0.1)">
            <h4 class="text-[22px] font-bold text-center">Thay đổi mật khẩu</h4>
            <BaseInput
                v-model="password"
                required
                type="password"
                label="Mật khẩu cũ"
                inputClass="font-bold text-[16px] leading-1.5 border-[#e2e2e2] py-2! px-2.5! h-[42px]! mt-2"
                labelClass="font-semibold" />
            <BaseInput
                v-model="npassword"
                required
                type="password"
                label="Mật khẩu mới"
                inputClass="font-bold text-[16px] leading-1.5 border-[#e2e2e2] py-2! px-2.5! h-[42px]! mt-2"
                labelClass="font-semibold"
                placeholder="Nhập mật khẩu mới" />
            <BaseInput
                v-model="cpassword"
                required
                type="password"
                label="Xác nhận mật khẩu mới"
                inputClass="font-bold text-[16px] leading-1.5 border-[#e2e2e2] py-2! px-2.5! h-[42px]! mt-2"
                labelClass="font-semibold"
                placeholder="Xác nhận mật khẩu mới" />
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
</script>

<style></style>
