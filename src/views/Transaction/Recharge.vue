<template>
    <div class="pt-6 px-[15px] pb-9">
        <div class="bg-white rounded-[10px] px-[15px] py-5" style="box-shadow: 0 0.2rem 0.6rem 0 rgba(0, 0, 0, 0.1)">
            <h4 class="text-[22px] font-bold text-center">
                Nạp tài sản <span class="text-[#ed9561]">lên thẻ điện tử</span>
            </h4>
            <p class="text-sm font-semibold">
                Tài Sản Của Bạn Sẽ Được Xác Nhận Khi Chúng Tôi Nhận Được Thông Tin Chuyển Khoản Từ
                <strong>"Ngân Hàng"</strong> Được Xác Nhận Trong Tài Khoản.
            </p>
            <h5 class="text-lg mt-2.5! mb-1.5! font-bold">Phương thức nạp tiền:</h5>
            <p class="text-sm font-semibold">
                Sau Khi Nhập Số Tiền Và Xác Nhận Vui Lòng Chuyển Khoản Vào Số Tài Khoản Bên Dưới Theo Nội Dung:
                <strong class="text-[#58bd7d]">Tài Khoản : dailyhose</strong> Ví Điện Tử Hệ Thống Sẽ Tự Động Cập Nhật
            </p>
            <BaseSelect v-model="method" :options="paymentOptions" required label="Lựa chọn hình thức nạp" labelClass="font-bold" selectClass="mt-2!" />
            <BaseInput required label="Số tiền gửi" labelClass="font-bold" inputClass="mt-2!" />
            <p class="text-[16px] leading-[24px] text-black mb-0 font-bold mt-4!">Gửi tiền vào tài khoản ngân hàng <span class="text-red-500">*</span></p>
            <p class="text-[16px] leading-[24px] text-black mb-0 font-bold mt-2!">Ngân hàng: VPBANK</p>
            <div class="mt-2 h-[42px] px-2.5 border border-[#e2e2e2] outline-none rounded-sm font-bold flex items-center justify-between">
                <p class="text-[16px] leading-1.5">CREST ENTERPRISES EX NESS CO LTD</p>
                <DocumentDuplicateIcon class="w-6 h-6 stroke-2" />
            </div>
            <div class="mt-2 h-[42px] px-2.5 border border-[#e2e2e2] outline-none rounded-sm font-bold flex items-center justify-between">
                <p class="text-[16px] leading-1.5">1093196666</p>
                <DocumentDuplicateIcon class="w-6 h-6 stroke-2" />
            </div>
            <BaseButton
                type="button"
                label="Nạp tiền"
                class="max-md:w-full w-max md:px-[53px] h-[50px] bg-[#deb00b]! text-[16px]! font-bold mt-6" />
        </div>
    </div>
</template>

<script setup>
import BaseButton from "@/components/Common/BaseButton.vue";
import BaseInput from "@/components/Common/BaseInput.vue";
import BaseSelect from "@/components/Common/BaseSelect.vue";
import { DocumentDuplicateIcon } from "@heroicons/vue/24/outline";

import { ref } from 'vue';

const paymentOptions = [
    {
        value: "bank",
        label: "Chuyển khoản ngân hàng"
    }
]

const method = ref(paymentOptions[0].value)
</script>

<style></style>
