<template>
  <div class="h-[60px] px-3 pt-3 w-full flex flex-row justify-between items-center">
    <img
                :src="logo"
                alt="onlyone"
                loading="lazy"
                width="160"
                height="280"
                decoding="async"
                style="color: transparent;"
                class="object-contain"
            />
  </div>
</template>

<script setup>
    import logo from '@client/assets/logo.png'
</script>

<style>

</style>