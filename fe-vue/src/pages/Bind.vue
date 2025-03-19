<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Bank1 from '~/assets/banks/bank1.svg'
import Bank2 from '~/assets/banks/bank2.svg'
import Bank3 from '~/assets/banks/bank3.svg'
import Bank4 from '~/assets/banks/bank4.svg'
import Bank5 from '~/assets/banks/bank5.svg'
import Bank6 from '~/assets/banks/bank6.svg'
import Bank7 from '~/assets/banks/bank7.svg'
import Bank8 from '~/assets/banks/bank8.svg'
import Bank9 from '~/assets/banks/bank9.svg'
import Bank10 from '~/assets/banks/bank10.svg'
import Bank11 from '~/assets/banks/bank11.svg'
import Bank12 from '~/assets/banks/bank12.svg'
import Bank13 from '~/assets/banks/bank13.svg'
import Bank14 from '~/assets/banks/bank14.svg'
import Bank15 from '~/assets/banks/bank15.svg'
import Bank16 from '~/assets/banks/bank16.svg'
import Bank17 from '~/assets/banks/bank17.svg'
import Bank18 from '~/assets/banks/bank18.svg'
import Bank19 from '~/assets/banks/bank19.svg'
import Bank20 from '~/assets/banks/bank20.svg'
import Bank21 from '~/assets/banks/bank21.svg'
import Bank22 from '~/assets/banks/bank22.svg'
import Bank23 from '~/assets/banks/bank23.svg'
import Bank24 from '~/assets/banks/bank24.svg'

const banks = [
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
]

const selected = ref(null)
const router = useRouter()

onMounted(() => {
  console.log(selected.value)
})
</script>

<template>
  <div
    data-radix-scroll-area-viewport
    class="h-full w-full rounded-[inherit] overflow-x-hidden overflow-y-auto">
    <div data-radix-scroll-area-content>
      <template v-if="selected">
        <div class="relative overflow-hidden w-full h-[calc(100%-52px)]">
          <div class="w-full flex flex-col items-center gap-4 px-5">
            <div class="rounded-xl border bg-card text-card-foreground shadow w-full relative p-3 aspect-[4/1] flex justify-center items-center overflow-hidden">
              <img
                alt=""
                loading="lazy"
                width="32"
                height="32"
                decoding="async"
                data-nimg="1"
                :src="banks[selected - 1].src"
                style="color: transparent"
                class="opacity-40 translate-x-[140px] absolute w-[240px]"
              />
              <div class="flex flex-row justify-center items-center gap-3 -translate-x-[100px]">
                <img
                  alt=""
                  loading="lazy"
                  width="32"
                  height="32"
                  decoding="async"
                  data-nimg="1"
                  class="w-[36px]"
                  :src="banks[selected - 1].src"
                  style="color: transparent"
                />
                <p class="font-bold text-[20px]">{{ banks[selected - 1].name }}</p>
              </div>
            </div>
            <div class="w-full flex flex-col gap-2">
              <div class="font-bold text-sm">계좌번호</div>
              <input
                class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="계좌번호를 입력해주세요."
              />
              <div class="font-bold text-sm">예금주</div>
              <input
                class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="예금주를 입력해주세요."
              />
            </div>
          </div>
        </div>
        <div class="h-[4px] w-full"></div>
        <div class="h-[48px] p-3 grid grid-cols-2 gap-3">
          <button 
            @click="router.push('/mypage')" 
            class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow h-9 px-4 py-2 !border-[#4492bf] hover:border-[#4492bf51] hover:bg-[#4492bf51] bg-white hover:text-white text-[#4492bf] border">
            뒤로가기
          </button>
          <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow h-9 px-4 py-2 bg-[#4492bf] hover:bg-[#4492bfaf] text-white">
            계좌 등록
          </button>
        </div>
      </template>
      <div v-else class="w-full h-full grid grid-cols-3 gap-5 p-5 overflow-hidden">
        <button
          v-for="(bank, index) in banks"
          :key="index"
          @click="selected = bank.id"
          class="hover:scale-105 hover:shadow-lg border border-[#e5e7eb] shadow-md rounded-xl aspect-square w-full flex flex-col justify-center items-center gap-2">
          <img
            :alt="bank.name"
            loading="lazy"
            width="32"
            height="32"
            decoding="async"
            data-nimg="1"
            class="w-2/5"
            :src="bank.src"
            style="color: transparent"
          />
          <p class="font-bold text-sm">{{ bank.name }}</p>
        </button>
      </div>
    </div>
  </div>
</template> 