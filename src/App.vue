<script setup>
import { useRoute } from "vue-router";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import EmptyLayout from "@/layouts/EmptyLayout.vue";
import "./style.css";

const route = useRoute();

const layouts = {
  DefaultLayout,
  EmptyLayout,
};
</script>

<template>
  <component :is="layouts[route.meta.layout] || EmptyLayout">
    <router-view />
  </component>
</template>
