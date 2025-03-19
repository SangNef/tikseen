<script setup>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";

import Bank1 from "@client/assets/banks/bank1.svg";
import Bank2 from "@client/assets/banks/bank2.svg";
import Bank3 from "@client/assets/banks/bank3.svg";
import Bank4 from "@client/assets/banks/bank4.svg";
import Bank5 from "@client/assets/banks/bank5.svg";
import Bank6 from "@client/assets/banks/bank6.svg";
import Bank7 from "@client/assets/banks/bank7.svg";
import Bank8 from "@client/assets/banks/bank8.svg";
import Bank9 from "@client/assets/banks/bank9.svg";
import Bank10 from "@client/assets/banks/bank10.svg";
import Bank11 from "@client/assets/banks/bank11.svg";
import Bank12 from "@client/assets/banks/bank12.svg";
import Bank13 from "@client/assets/banks/bank13.svg";
import Bank14 from "@client/assets/banks/bank14.svg";
import Bank15 from "@client/assets/banks/bank15.svg";
import Bank16 from "@client/assets/banks/bank16.svg";
import Bank17 from "@client/assets/banks/bank17.svg";
import Bank18 from "@client/assets/banks/bank18.svg";
import Bank19 from "@client/assets/banks/bank19.svg";
import Bank20 from "@client/assets/banks/bank20.svg";
import Bank21 from "@client/assets/banks/bank21.svg";
import Bank22 from "@client/assets/banks/bank22.svg";
import Bank23 from "@client/assets/banks/bank23.svg";
import Bank24 from "@client/assets/banks/bank24.svg";

const router = useRouter();
const selected = ref(null);

const banks = ref([
    { id: 1, name: "국민은행", src: Bank1 },
    { id: 2, name: "기업은행", src: Bank2 },
    { id: 3, name: "농협은행", src: Bank3 },
    { id: 4, name: "산업은행", src: Bank4 },
    { id: 5, name: "수협", src: Bank5 },
    { id: 6, name: "신한은행", src: Bank6 },
    { id: 7, name: "우리은행", src: Bank7 },
    { id: 8, name: "우체국", src: Bank8 },
    { id: 9, name: "하나은행", src: Bank9 },
    { id: 10, name: "시티은행", src: Bank10 },
    { id: 11, name: "SC제일", src: Bank11 },
    { id: 12, name: "카카오뱅크", src: Bank12 },
    { id: 13, name: "케이뱅크", src: Bank13 },
    { id: 14, name: "토스뱅크", src: Bank14 },
    { id: 15, name: "경남은행", src: Bank15 },
    { id: 16, name: "광주은행", src: Bank16 },
    { id: 17, name: "대구은행", src: Bank17 },
    { id: 18, name: "부산은행", src: Bank18 },
    { id: 19, name: "전북은행", src: Bank19 },
    { id: 20, name: "제주은행", src: Bank20 },
    { id: 21, name: "저축은행", src: Bank21 },
    { id: 22, name: "산림조합", src: Bank22 },
    { id: 23, name: "새마을금고", src: Bank23 },
    { id: 24, name: "신협", src: Bank24 },
]);

watch(selected, (newValue) => {
    console.log(newValue);
});
</script>

<template>
    <div data-radix-scroll-area-viewport class="h-full w-full rounded-[inherit] overflow-x-hidden overflow-y-auto">
        <div data-radix-scroll-area-content>
            <div v-if="selected" class="relative overflow-hidden w-full h-[calc(100%-52px)]">
                <div class="w-full flex flex-col items-center gap-4 px-5">
                    <div
                        class="rounded-xl border bg-card text-card-foreground shadow w-full relative p-3 aspect-[4/1] flex justify-center items-center overflow-hidden">
                        <img :src="banks[selected - 1].src" class="opacity-40 translate-x-[140px] absolute w-[240px]" />
                        <div class="flex flex-row justify-center items-center gap-3 -translate-x-[100px]">
                            <img :src="banks[selected - 1].src" class="w-[36px]" />
                            <p class="font-bold text-[20px]">{{ banks[selected - 1].name }}</p>
                        </div>
                    </div>
                    <div class="w-full flex flex-col gap-2">
                        <label class="font-bold text-sm">계좌번호</label>
                        <input
                            class="h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm"
                            placeholder="계좌번호를 입력해주세요." />
                        <label class="font-bold text-sm">예금주</label>
                        <input
                            class="h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm"
                            placeholder="예금주를 입력해주세요." />
                    </div>
                </div>
            </div>
            <div v-else class="w-full h-full grid grid-cols-3 gap-5 p-5 overflow-hidden">
                <button
                    v-for="bank in banks"
                    :key="bank.id"
                    @click="selected = bank.id"
                    class="hover:scale-105 hover:shadow-lg border shadow-md rounded-xl aspect-square w-full flex flex-col justify-center items-center gap-2">
                    <img :src="bank.src" class="w-2/5" />
                    <p class="font-bold text-sm">{{ bank.name }}</p>
                </button>
            </div>
        </div>
    </div>
</template>
