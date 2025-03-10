<!-- src/App.vue -->
<script setup>
import { useRoute } from "vue-router";
import DefaultLayout from "./layouts/DefaultLayout.vue";
import NoLayout from "./layouts/NoLayout.vue";
import "./style.css";

const route = useRoute();

const layouts = {
  DefaultLayout,
  NoLayout
};
</script>

<template>
  <component :is="layouts[route.meta.layout] || DefaultLayout">
    <router-view />
  </component>
</template>
