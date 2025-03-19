<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const timeLeft = ref(180)
const value = ref('')
const isBet = ref(false)
const checked = ref(0)

let timer

onMounted(() => {
  if (timeLeft.value <= 0) return
  timer = setInterval(() => {
    timeLeft.value -= 1
  }, 1000)
})

onUnmounted(() => {
  clearInterval(timer)
})

const formatTime = (seconds) => {
  const h = String(Math.floor(seconds / 3600)).padStart(2, "0")
  const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0")
  const s = String(seconds % 60).padStart(2, "0")
  return { h, m, s }
}

const { h, m, s } = formatTime(timeLeft.value)
</script>

<template>
  <div>
    <div class="relative overflow-hidden w-full h-[200px] flex justify-center items-center">
      <iframe
        class="w-full h-full absolute z-[-1]"
        src="https://lottie.host/embed/cd316237-3ff3-4e09-9d3f-54bb0d5b4608/79FRzmE2LF.json"></iframe>
    </div>
    <div class="w-full h-[48px] font-bold flex flex-row justify-between items-center">
      <div class="w-full text-xl flex justify-start items-center">
        207330<span class="opacity-70">번째 매칭</span>
      </div>
      <div class="flex text-xl flex-row items-center justify-center">
        <div class="hour">{{ h }}:</div>
        <div class="min">{{ m }}:</div>
        <div class="sec">{{ s }}</div>
      </div>
    </div>
    <div class="w-full flex flex-col gap-3">
      <div class="text-[#4492bf] font-bold flex flex-row w-full justify-center items-center">
        <hr class="border-[#4492bfaf] w-full" />
        <div class="px-3 w-fit whitespace-nowrap">데이터 등록</div>
        <hr class="border-[#4492bfaf] w-full" />
      </div>
      <div class="gap-3 cursor-pointer grid grid-cols-4 w-full">
        <div class="text-[#4492bf] font-bold text-sm col-span-2">범위 데이터</div>
        <div class="text-[#4492bf] font-bold text-sm col-span-2">숫자 데이터</div>
        <div
          :class="[
            'h-[32px] rounded-md w-full flex justify-center items-center border border-[#4492bf] text-[#4492bf]',
            checked === 1 && 'bg-[#4492bf] text-white'
          ]"
          @click="checked = 1">
          11 to 18
        </div>
        <div
          :class="[
            'h-[32px] rounded-md w-full flex justify-center items-center border border-[#4492bf] text-[#4492bf]',
            checked === 2 && 'bg-[#4492bf] text-white'
          ]"
          @click="checked = 2">
          3 to 10
        </div>
        <div
          :class="[
            'h-[32px] rounded-md w-full flex justify-center items-center border border-[#4492bf] text-[#4492bf]',
            checked === 3 && 'bg-[#4492bf] text-white'
          ]"
          @click="checked = 3">
          홀 수
        </div>
        <div
          :class="[
            'h-[32px] rounded-md w-full flex justify-center items-center border border-[#4492bf] text-[#4492bf]',
            checked === 4 && 'bg-[#4492bf] text-white'
          ]"
          @click="checked = 4">
          짝 수
        </div>
      </div>
      <div class="grid grid-cols-2 gap-x-3 gap-y-1 w-full">
        <div class="text-sm font-bold">금액</div>
        <div class="text-sm font-bold flex flex-row justify-between items-center">
          <div>현재 적립금 :</div>
          <div>
            0 원
          </div>
        </div>
        <input
          type="number"
          class="flex h-9 w-full rounded-md border border-[#e5e5e5] bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 text-right focus-visible:ring-0"
          inputmode="numeric"
          v-model="value"
        />
        <button 
          class="inline-flex items-center justify-center text-white whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-primary-foreground shadow hover:bg-[#171717e6] h-9 px-4 py-2 bg-[#4492bf] font-bold"
          @click="isBet = true" 
          :disabled="isBet">
          데이터 등록
        </button>
        <div class="col-span-2 font-bold text-xs opacity-30">
          * The minimum bet amount is 1000.
          <br />* Total Amount : {{ Number(value).toLocaleString('de-DE') }}
        </div>
      </div>
    </div>
  </div>
</template> 