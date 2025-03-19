<script setup>
import BottomTab from '~/components/BottomTab.vue'
import Header from '~/components/Header.vue'
</script>

<template>
  <div class="flex-col w-[100vw] h-[100dvh] flex justify-center items-center antialiased">
    <div class="w-[100vw] h-[100dvh] max-w-[480px]">
      <Header />
      <main class="px-3 overflow-hidden py-2 h-[calc(100%-130px)]">
        <slot></slot>
      </main>
      <BottomTab />
    </div>
  </div>
</template> 