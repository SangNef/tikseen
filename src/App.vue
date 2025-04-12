<script setup>
import { useRoute } from "vue-router";
import DefaultLayout from "@landing/layouts/DefaultLayout.vue";
import AuthLayout from "@landing/layouts/AuthLayout.vue";
import EmptyLayout from "@landing/layouts/EmptyLayout.vue";
import ClubLayout from "@landing/layouts/ClubLayout.vue";
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
