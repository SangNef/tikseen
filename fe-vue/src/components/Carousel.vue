<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import banner01 from '~/assets/banners/001.png'
import banner02 from '~/assets/banners/002.png'
import banner03 from '~/assets/banners/003.png'

const images = [banner01, banner02, banner03]
const duplicatedImages = [...images, ...images]

const index = ref(0)
const isTransitioning = ref(true)
const sliderRef = ref(null)

let interval

onMounted(() => {
  interval = setInterval(() => {
    index.value += 1
  }, 3000)
})

onUnmounted(() => {
  clearInterval(interval)
})

const handleTransitionEnd = () => {
  if (index.value === images.length) {
    isTransitioning.value = false
    index.value = 0
    setTimeout(() => {
      isTransitioning.value = true
    }, 50)
  }
}
</script>

<template>
  <div class="relative w-full max-w-3xl mx-auto overflow-hidden">
    <div
      ref="sliderRef"
      :class="['flex', isTransitioning ? 'transition-transform duration-700 ease-in-out' : '']"
      :style="{ transform: `translateX(-${index * 100}%)` }"
      @transitionend="handleTransitionEnd"
    >
      <div 
        v-for="(img, i) in duplicatedImages" 
        :key="i" 
        class="w-full h-full flex-shrink-0 px-[2.56%]"
      >
        <img 
          :src="img" 
          :alt="`Banner ${i + 1}`" 
          class="w-full h-auto object-cover flex-shrink-0 basis-11/12 rounded-xl" 
        />
      </div>
    </div>
  </div>
</template>