<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Login from '~/components/Login.vue'
import PLogo from '~/assets/PLogo.webp'
import IBanner from '~/assets/IBanner.webp'

const user = ref(null)
const router = useRouter()

onMounted(() => {
  user.value = localStorage.getItem('user')
})

const handleLogout = () => {
  localStorage.removeItem('user')
  router.push('/mypage')
}
</script>

<template>
  <Login v-if="!user" />
  <div v-else class="w-full flex flex-col gap-3 items-center px-3 overflow-hidden">
    <div class="rounded-xl border border-[#e5e5e5] bg-white text-[#0a0a0a] shadow relative p-6 gap-4 w-full flex flex-col justify-between items-center overflow-hidden">
      <img
        alt=""
        loading="lazy"
        width="320"
        height="500"
        decoding="async"
        data-nimg="1"
        class="opacity-10 translate-x-[97px] scale-[1] absolute -rotate-[20deg]"
        :src="IBanner"
        style="color: transparent"
      />
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
            style="position: absolute; height: 100%; width: 100%; inset: 0; color: transparent"
          />
        </div>
        <div class="w-[67%] h-full font-bold text-[#4492bf] flex flex-col z-[1] gap-1">
          <div class="text-xl">mang01</div>
          <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold text-[#fafafa] transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent text-primary-foreground shadow w-fit hover:bg-[#4492bfa8] bg-[#4492bf]">
            계정 정상
          </div>
          <div class="w-full flex-row flex justify-between items-center">
            <div>현재 적립금:</div>
            <div>0 원</div>
          </div>
        </div>
      </div>
      <div class="px-3 w-full flex-col flex justify-center relative gap-3">
        <div class="w-full [&>*]:font-bold [&>*]:text-xl top-0 items-center flex flex-row justify-between">
          <button
            type="button"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="radix-:r3:"
            data-state="closed"
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
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
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
          class="relative h-2 w-full overflow-hidden rounded-full bg-primary/20 [&>*]:bg-[#ff6e1d] [&>*]:rounded-full">
          <div
            data-state="indeterminate"
            data-max="100"
            class="h-full w-full flex-1 bg-primary transition-all"
            style="transform: translateX(0%)"
          />
        </div>
      </div>
    </div>
    <div class="grid grid-cols-3 w-full gap-4">
      <router-link to="/history">
        <div class="rounded-xl shadow hover:opacity-40 aspect-square border border-[#4492bf40] bg-[#4492bfa8] text-white justify-center items-center flex flex-col w-full font-bold gap-3">
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
            <path d="m16 3 4 4-4 4" />
            <path d="M20 7H4" />
            <path d="m8 21-4-4 4-4" />
            <path d="M4 17h16" />
          </svg>
          <div>데이터 기록</div>
        </div>
      </router-link>
      <router-link to="/mypage/bind">
        <div class="rounded-xl shadow hover:opacity-40 aspect-square border border-[#4492bf40] bg-[#4492bfa8] text-white justify-center items-center flex flex-col w-full font-bold gap-3">
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
            <rect width="20" height="14" x="2" y="5" rx="2" />
            <line x1="2" x2="22" y1="10" y2="10" />
          </svg>
          <div>계좌 미등록</div>
        </div>
      </router-link>
      <div class="rounded-xl shadow opacity-40 aspect-square border border-[#4492bf40] bg-[#4492bfa8] text-white justify-center items-center flex flex-col w-full font-bold gap-3">
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
          <path d="M12 22a10 10 0 1 1 10-10" />
          <path d="M22 22 12 12" />
          <path d="M22 16v6h-6" />
        </svg>
        <div>환급 신청</div>
      </div>
    </div>
    <button
      class="rounded-xl border border-[#e5e5e5] text-[#0a0a0a] cursor-pointer shadow hover:opacity-40 px-5 py-3 bg-red-400 w-full flex flex-row justify-center items-center"
      @click="handleLogout"
      id="signout">
      <div class="text-white font-bold">로그아웃</div>
    </button>
  </div>
</template> 