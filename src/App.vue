<script setup>
import { useRoute } from "vue-router";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import AuthLayout from "@/layouts/AuthLayout.vue";
import EmptyLayout from "@/layouts/EmptyLayout.vue";
import ClubLayout from "./layouts/ClubLayout.vue";
import "./style.css";

const route = useRoute();

const layouts = {
  DefaultLayout,
  AuthLayout,
  EmptyLayout,
  ClubLayout,
};
</script>

<template>
  <component :is="layouts[route.meta.layout] || EmptyLayout">
    <router-view />
  </component>
</template>
