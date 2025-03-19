<script setup>
const items = [
  {
    name: "4551sscbk",
    time: "2025-03-19",
    content:
      "주말에 대기가많아서 보안심의 생각보다 오래걸려서 조금 지쳐있었는데 기다릴만하네요 이런여성분들을 만날수있다면.. 얼마든지 기다릴수있겠네요 ㅎㅎ 너무좋은만남이었어요^^",
    cmt: 0,
    like: 17,
  },
  {
    name: "irhbgusys",
    time: "2025-03-19",
    content:
      "베리굿... 출민 확실하네요 매니저들 사이즈도 좋고 와꾸도 좋고 저는 그중에서 특히 솔희가 내스탈 내 이상형인데 한달동안 3번 봤어요 항상 아쉽네요 더 자주보고싶네요~ 애인모드해주니 더 좋습니다",
    cmt: 0,
    like: 15,
  },
  {
    name: "8833lou",
    time: "2025-03-19",
    content: "항상 먼저 연락주고 챙겨주는 수정실장 고마워요 리뷰이벤트 참여입니다.",
    cmt: 0,
    like: 13,
  },
  {
    name: "yoypp",
    time: "2025-03-19",
    content:
      "이 나이 먹어서 코스프레인가 뭐시기가 입혀볼 생각을 못했는데 여 와서 내 이상한 옷입히는데 눈은 참 즐겁네 담에 만나면 뭐 입힐까 참 고민이 되네잉",
    cmt: 0,
    like: 11,
  },
  {
    name: "kajha",
    time: "2025-03-19",
    content: "혼자 있기 넘 적적해서 번개로 유은이 봤는데 진짜 잼나게 놀고 유은이랑 치맥도 먹구 헤어졌네요",
    cmt: 0,
    like: 6,
  },
  {
    name: "jahaa",
    time: "2025-03-19",
    content:
      "연정이와 한편에 영화 찍고 왔습니다 야동 틀어두고 따라 해보면서 시간 보냈네요 ㅋㅋㅋㅋ 전 부터 해보고 싶었는데 여기서 해보네요 해달라는거 다 해주니 정말 기분이 좋네요",
    cmt: 0,
    like: 8,
  },
  {
    name: "rhksdn2561",
    time: "2025-03-19",
    content:
      "마사지하는데 진짜 매력이 터지고 아담하지만 탐스런 바디 때문에 은근히 대화하면서 터치하는 재미도 있으니 더 단단하게 만드는 마사지 잘해서 오래받고 싶었지만 그냥 탐스런바디를 만지면서 놀고 싶은 욕망이 더 강해지니까 등허리만 대충 받고 달려들었습니다 신호가 급하게 와서 거기에 마무리후에고 매미마냥 딱붙어서 이야기 하다가 같이샤워하고 밥먹으러 갔네요 ㅎㅎ",
    cmt: 0,
    like: 8,
  },
  {
    name: "wodlkdj2356",
    time: "2025-03-19",
    content:
      "늘씬슬림한데 골반 엉덩이 발달형 탱탱 몸매라서 맘에 들구 애인처럼 달콤하게 잘해주고 애무하고 제 약점을 어찌나 잘 공략해 주던지 키스를 하면서 뺴는 느낌없어서 박는동안 계속 키스하고 박자맞춰서 조여주는데 느낌 작살났습니다 빼기너무 싫은 쪼임이라 그냥 마무리 했네요 ㅎㅎ 우리매니저 생각도 해야되잔아요 ^^",
    cmt: 0,
    like: 8,
  },
]
</script>

<template>
  <div class="relative overflow-hidden h-[100%] w-full py-5">
    <div
      class="h-full w-full rounded-[inherit] overflow-x-hidden overflow-y-auto"
      data-radix-scroll-area-viewport>
      <div class="" data-radix-scroll-area-content>
        <div v-for="(item, index) in items" :key="index" class="w-full flex flex-col mb-5">
          <div class="flex flex-row justify-between px-4 w-[100%] gap-3">
            <div class="w-[12%]">
              <img
                alt=""
                loading="lazy"
                width="60"
                height="60"
                decoding="async"
                data-nimg="1"
                class="aspect-square w-full rounded-full"
                src="https://www.oniyone.com/_next/image?url=%2Fvk8Z44y4_bigger.png&w=64&q=75"
                style="color: transparent"
              />
            </div>
            <div class="w-[88%] flex flex-col gap-1">
              <div class="font-bold flex flex-row gap-2">
                <div class="">{{ item.name }}</div>
                <p>·</p>
                <div class="opacity-50">{{ item.time }}</div>
              </div>
              <div>
                {{ item.content }}
              </div>
            </div>
          </div>
          <div class="w-full flex flex-row justify-around">
            <button class="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 flex flex-row gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-message-square p-[2px]">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              <p class="font-bold">{{ item.cmt }}</p>
            </button>
            <button class="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 flex flex-row gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-heart p-[2px]">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
              <p class="font-bold">{{ item.like }}</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>