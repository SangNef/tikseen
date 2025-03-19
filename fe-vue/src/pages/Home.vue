<script setup>
import Carousel from '~/components/Carousel.vue'
import ListItem from '~/components/ListItem.vue'
</script>

<template>
  <div>
    <div class="h-[5%] w-full flex flex-row items-center">
      <hr class="w-full border-[1px] border-[#e5e7eb]" />
      <p class="whitespace-nowrap px-3 font-bold opacity-50">온리원 이벤트</p>
      <hr class="w-full border-[1px] border-[#e5e7eb]" />
    </div>
    <Carousel />
    <div class="h-[5%] w-full flex flex-row items-center">
      <hr class="w-full border-[1px] border-[#e5e7eb]" />
      <p class="whitespace-nowrap px-3 font-bold opacity-50">전국 지명 순위</p>
      <hr class="w-full border-[1px] border-[#e5e7eb]" />
    </div>
    <ListItem />
  </div>
</template> 