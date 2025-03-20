<template>
    <div class="w-full flex flex-col gap-3 items-center px-3 overflow-hidden" v-if="1">
        <div
            class="rounded-xl border bg-card text-card-foreground shadow relative p-6 gap-4 w-full flex flex-col justify-between items-center overflow-hidden">
            <img
                alt=""
                loading="lazy"
                width="320"
                height="500"
                decoding="async"
                data-nimg="1"
                class="opacity-10 translate-x-[97px] scale-[1] absolute -rotate-[20deg]"
                :src="IBanner"
                style="color: transparent" />
            <div class="relative w-full h-[140px] flex flex-row justify-between items-center">
                <div class="relative w-[30%] h-full rounded-lg z-[1]">
                    <img
                        alt=""
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        class="rounded-lg object-cover"
                        sizes="100vw"
                        :src="PLogo"
                        style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent" />
                </div>
                <div class="w-[67%] h-full font-bold text-[#4492bf] flex flex-col z-[1] gap-1">
                    <div class="text-xl">mang01</div>
                    <div
                        class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent text-primary-foreground shadow w-fit hover:bg-[#4492bfa8] bg-[#4492bf] text-white text-[0.75rem] [line-height:1rem]">
                        계정 정상
                    </div>
                    <div class="w-full flex-row flex justify-between items-center">
                        <div>현재 적립금:</div>
                        <div>0 원</div>
                    </div>
                </div>
            </div>
            <div class="px-3 w-full flex-col flex justify-center relative gap-3">
                <div class="w-full font-bold text-xl top-0 items-center flex flex-row justify-between text-[1.25rem]">
                    <button
                        type="button"
                        @click="modalVisible = true"
                        class="flex flex-row justify-center items-center gap-2">
                        <div class="text-base underline underline-offset-4">매너 점수</div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="lucide lucide-info">
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M12 16v-4"></path>
                            <path d="M12 8h.01"></path>
                        </svg>
                    </button>
                    <div class="text-[#ff6e1d]">10/10 🫠</div>
                </div>
                <div
                    aria-valuemax="100"
                    aria-valuemin="0"
                    role="progressbar"
                    data-state="indeterminate"
                    data-max="100"
                    class="relative h-2 w-full overflow-hidden rounded-full bg-primary/20">
                    <div
                        data-state="indeterminate"
                        data-max="100"
                        class="h-full w-full flex-1 bg-[#ff6e1d] rounded-full transition-all"
                        :style="{ transform: `translateX(${progress}%)` }"></div>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-3 w-full gap-4">
            <router-link to="/history"
                ><div
                    class="rounded-xl shadow hover:opacity-40 aspect-square border border-[#4492bf40] bg-[#4492bfa8] text-white justify-center items-center flex flex-col w-full font-bold gap-3">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="26"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-arrow-right-left">
                        <path d="m16 3 4 4-4 4"></path>
                        <path d="M20 7H4"></path>
                        <path d="m8 21-4-4 4-4"></path>
                        <path d="M4 17h16"></path>
                    </svg>
                    <div>데이터 기록</div>
                </div></router-link
            ><router-link to="/mypage/bind"
                ><div
                    class="rounded-xl shadow hover:opacity-40 aspect-square border border-[#4492bf40] bg-[#4492bfa8] text-white justify-center items-center flex flex-col w-full font-bold gap-3">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="26"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-credit-card">
                        <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                        <line x1="2" x2="22" y1="10" y2="10"></line>
                    </svg>
                    <div>계좌 등록</div>
                </div></router-link
            ><router-link to="/withdraw"
                ><div
                    class="rounded-xl shadow hover:opacity-40 aspect-square border border-[#4492bf40] bg-[#4492bfa8] text-white justify-center items-center flex flex-col w-full font-bold gap-3">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="26"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-circle-arrow-out-down-right">
                        <path d="M12 22a10 10 0 1 1 10-10"></path>
                        <path d="M22 22 12 12"></path>
                        <path d="M22 16v6h-6"></path>
                    </svg>
                    <div>환급 신청</div>
                </div></router-link
            >
        </div>
        <button
            class="rounded-xl border border-[#e5e5e5] cursor-pointer shadow hover:opacity-40 px-5 py-3 bg-red-400 w-full flex justify-center items-center text-white font-bold"
            @click="handleLogout">
            로그아웃
        </button>
    </div>
    <Login v-else />
    <div v-if="modalVisible" class="fixed h-[100vh] inset-0 z-999999 bg-black/80">
        <div
            class="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 sm:rounded-lg bg-white">
            <div class="flex flex-col space-y-2 text-center sm:text-left">
                <h2 id="radix-:RncqfnkqH1:" class="text-lg font-semibold">매너 점수란?</h2>
                <p id="radix-:RncqfnkqH2:" class="text-sm text-[#737373]">
                    <br />각 개인의 신용도를 평가한 점수를 말합니다. <br />
                    이용기간, 보안심의 유무 등의 정보를 종합하여 정해지며,<br />
                    이 점수는 신용도를 나타내는 것으로,<br />
                    높을수록 신뢰도가 높은 사용자임을 의미합니다.<br />
                    <br />계정 매너 점수가 낮은 경우, <br />서비스 이용에 제한이 있을 수 있습니다.
                </p>
            </div>
            <div class="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
                <button
                    type="button"
                    @click="modalVisible = false"
                    class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-[#171717] text-[#fafafa] shadow hover:bg-primary/90 h-9 px-4 py-2">
                    확인
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import Login from "./Login.vue";
import PLogo from "@client/assets/PLogo.webp";
import IBanner from "@client/assets/IBanner.webp";

export default {
    components: { Login },
    setup() {
        const user = ref(null);
        const router = useRouter();
        const modalVisible = ref(false);

        onMounted(() => {
            user.value = localStorage.getItem("user");
        });

        const handleLogout = () => {
            localStorage.removeItem("user");
            user.value = null;
            router.push("/mypage");
        };

        return { user, modalVisible, handleLogout, PLogo, IBanner };
    },
};

const progress = ref(0);

onMounted(() => {
    setInterval(() => {
        progress.value = progress.value === 0 ? 100 : 0;
    }, 1000);
});
</script>
