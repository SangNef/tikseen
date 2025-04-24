<template>
    <div class="pt-6 px-[15px] pb-9 max-md:w-[calc(100vw)]">
        <div class="bg-white rounded-[10px] px-[15px] py-5" style="box-shadow: 0 0.2rem 0.6rem 0 rgba(0, 0, 0, 0.1)">
            <BaseSelect
                v-model="method"
                :options="walletOptions"
                label="Từ"
                labelClass="font-bold"
                selectClass="mt-2!" />
            <BaseInput required label="Nhập số tiền" labelClass="font-bold" inputClass="mt-2!" />
            <BaseButton
                type="button"
                label="Rút tiền"
                class="max-md:w-full w-max md:px-[53px] h-[50px] bg-[#deb00b]! text-[16px]! font-bold mt-6" />
        </div>
    </div>
</template>

<script setup>
import BaseButton from "@/components/Common/BaseButton.vue";
import BaseInput from "@/components/Common/BaseInput.vue";
import BaseSelect from "@/components/Common/BaseSelect.vue";

import { ref } from "vue";

const walletOptions = [
    {
        value: "wallet",
        label: "Ví điện tử",
    },
];

const method = ref(walletOptions[0].value);
</script>

<style></style>
