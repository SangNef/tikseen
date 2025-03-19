<script setup>
import { Fragment } from 'vue'
import './App.css'
</script>

<template>
  <router-view v-slot="{ Component }">
    <component 
      :is="$route.meta.Layout"
    >
      <component :is="Component" />
    </component>
  </router-view>
</template> 