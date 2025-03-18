<!-- src/App.vue -->
<script setup>
import { useRoute } from "vue-router";
import DefaultLayout from "./layouts/DefaultLayout.vue";
import NoLayout from "./layouts/NoLayout.vue";
import LoginLayout from "./layouts/LoginLayout.vue";
import ClientLayout from "./layouts/ClientLayout.vue";
import "./style.css";

const route = useRoute();

const layouts = {
  DefaultLayout,
  NoLayout,
  LoginLayout,
  ClientLayout,
};
</script>

<template>
  <component :is="layouts[route.meta.layout] || DefaultLayout">
    <router-view />
  </component>
</template>
