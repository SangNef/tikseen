<!-- src/App.vue -->
<script setup>
import { useRoute } from "vue-router";
import DefaultLayout from "./layouts/DefaultLayout.vue";
import "./style.css";

const route = useRoute();

const layouts = {
  DefaultLayout,
};
</script>

<template>
  <component :is="layouts[route.meta.layout] || DefaultLayout">
    <router-view />
  </component>
</template>
