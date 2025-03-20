<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";

const timeLeft = ref(180);
const value = ref("");
const isBet = ref(false);
const checked = ref(0);
const numbers = ref(["", "", ""]);
const isTimeUp = ref(false);
const showCardIndex = ref(-1);

let timer;

onMounted(() => {
    startCountdown();
});

onUnmounted(() => {
    clearInterval(timer);
});

const startCountdown = () => {
    timeLeft.value = 5;
    showCardIndex.value = -1;
    numbers.value = ["", "", ""];
    isTimeUp.value = false;

    timer = setInterval(() => {
        if (timeLeft.value > 0) {
            timeLeft.value -= 1;
        } else {
            clearInterval(timer);
            isTimeUp.value = true;
            revealCards();
        }
    }, 1000);
};

const revealCards = () => {
    setTimeout(() => { showCardIndex.value = 0; }, 500);
    setTimeout(() => { showCardIndex.value = 1; }, 1000);
    setTimeout(() => {
        showCardIndex.value = 2;
        numbers.value = ["1", "2", "3"];
    }, 1500);

    setTimeout(() => {
        showCardIndex.value = -1;
        startCountdown();
    }, 4500);
};

const formatTime = (seconds) => {
    const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return { h, m, s };
};

const formattedTime = computed(() => formatTime(timeLeft.value));
</script>

<template>
    <div class="relative overflow-hidden w-full h-[200px] flex justify-center items-center">
        <iframe
            class="w-full h-full absolute z-[-1]"
            src="https://lottie.host/embed/cd316237-3ff3-4e09-9d3f-54bb0d5b4608/79FRzmE2LF.json"></iframe>
        <div class="relative w-full flex">
            <div class="w-full grid grid-cols-3 gap-8">
                <!-- CARD 1 -->
                <div
                    id="container1"
                    class="container transform transition-all duration-700 relative aspect-[2/3] flex justify-center items-center"
                    :class="{ 'translate-x-0': showCardIndex >= 0, 'translate-x-[1500px]': showCardIndex < 0 }">
                    <div
                        id="card_1"
                        class="card absolute z-10 front w-full h-full bg-[url('/pattern.png')] bg-[length:90px_90px] transition-all duration-500 drop-shadow-lg border-2 bg-white  rounded-lg"
                        :class="{
                            '[transform:rotateY(180deg)]': showCardIndex >= 0,
                            '[transform:rotateY(0deg)]': showCardIndex < 0,
                        }"></div>
                    <div
                        id="back_1"
                        class="px-2 py-1 z-10 inline-flex justify-center items-center font-bold text-3xl text-[#4492bf] bg-white card absolute w-full h-full transition-all delay-500 duration-500"
                        :class="{
                            '[transform:rotateY(0deg)]': showCardIndex >= 0,
                            '[transform:rotateY(90deg)]': showCardIndex < 0,
                        }">
                        {{ numbers[0] }}
                    </div>
                </div>

                <!-- CARD 2 -->
                <div
                    id="container2"
                    class="container transform transition-all duration-700 relative aspect-[2/3] flex justify-center items-center"
                    :class="{ 'translate-x-0': showCardIndex >= 1, 'translate-x-[1500px]': showCardIndex < 1 }">
                    <div
                        id="card_2"
                        class="card absolute z-10 front w-full h-full bg-[url('/pattern.png')] bg-[length:90px_90px] transition-all duration-500 drop-shadow-lg border-2 bg-white  rounded-lg"
                        :class="{
                            '[transform:rotateY(180deg)]': showCardIndex >= 1,
                            '[transform:rotateY(0deg)]': showCardIndex < 1,
                        }"></div>
                    <div
                        id="back_2"
                        class="px-2 py-1 z-10 inline-flex justify-center items-center font-bold text-3xl text-[#4492bf] bg-white card absolute w-full h-full transition-all delay-500 duration-500"
                        :class="{
                            '[transform:rotateY(0deg)]': showCardIndex >= 1,
                            '[transform:rotateY(90deg)]': showCardIndex < 1,
                        }">
                        {{ numbers[1] }}
                    </div>
                </div>

                <!-- CARD 3 -->
                <div
                    id="container3"
                    class="container transform transition-all duration-700 relative aspect-[2/3] flex justify-center items-center"
                    :class="{ 'translate-x-0': showCardIndex >= 2, 'translate-x-[1500px]': showCardIndex < 2 }">
                    <div
                        id="card_3"
                        class="card absolute z-10 front w-full h-full bg-[url('/pattern.png')] bg-[length:90px_90px] transition-all duration-500 drop-shadow-lg border-2 bg-white  rounded-lg"
                        :class="{
                            '[transform:rotateY(180deg)]': showCardIndex >= 2,
                            '[transform:rotateY(0deg)]': showCardIndex < 2,
                        }"></div>
                    <div
                        id="back_3"
                        class="px-2 py-1 z-10 inline-flex justify-center items-center font-bold text-3xl text-[#4492bf] bg-white card absolute w-full h-full transition-all delay-500 duration-500"
                        :class="{
                            '[transform:rotateY(0deg)]': showCardIndex >= 2,
                            '[transform:rotateY(90deg)]': showCardIndex < 2,
                        }">
                        {{ numbers[2] }}
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="w-full h-[48px] font-bold flex flex-row justify-between items-center">
        <div class="w-full text-xl flex justify-start items-center">
            207330<span class="opacity-70">번째 매칭</span>
        </div>
        <div class="flex text-xl flex-row items-center justify-center">
            <div class="hour">{{ formattedTime.h }}:</div>
            <div class="min">{{ formattedTime.m }}:</div>
            <div class="sec">{{ formattedTime.s }}</div>
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
                v-for="(text, index) in ['11 to 18', '3 to 10', '홀 수', '짝 수']"
                :key="index"
                class="h-[32px] rounded-md w-full flex justify-center items-center border border-[#4492bf] text-[#4492bf]"
                :class="{ 'bg-[#4492bf] text-white': checked === index + 1 }"
                @click="checked = index + 1">
                {{ text }}
            </div>
        </div>
        <div class="grid grid-cols-2 gap-x-3 gap-y-1 w-full">
            <div class="text-sm font-bold">금액</div>
            <div class="text-sm font-bold flex flex-row justify-between items-center">
                <div>현재 적립금 :</div>
                <div>0 원</div>
            </div>
            <input
                type="number"
                class="flex h-9 w-full rounded-md border border-[#e5e5e5] bg-transparent px-3 py-1 text-sm shadow-sm transition-colors text-right focus-visible:ring-0"
                inputmode="numeric"
                v-model="value" />
            <button
                class="inline-flex items-center justify-center text-white rounded-md text-sm transition-colors shadow hover:bg-[#171717e6] h-9 px-4 py-2 bg-[#4492bf] font-bold"
                @click="isBet = true"
                :disabled="isBet">
                데이터 등록
            </button>
            <div class="col-span-2 font-bold text-xs opacity-30">
                * The minimum bet amount is 1000.<br />* Total Amount : {{ Number(value).toLocaleString("de-DE") }}
            </div>
        </div>
    </div>
</template>
