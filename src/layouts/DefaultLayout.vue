<template>
    <div class="bg-[#232745] min-h-screen max-h-screen">
      <slot />
      <BottomTab />
    </div>
  </template>

  <script setup>
  import BottomTab from "../components/BottomTab.vue";
  </script>