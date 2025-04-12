<script setup>
import { useRoute } from "vue-router";
import { Fragment } from "vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import AuthLayout from "@/layouts/AuthLayout.vue";
import "./style.css";

const route = useRoute();

const layouts = {
  DefaultLayout,
  AuthLayout,
};
</script>

<template>
  <component :is="layouts[route.meta.layout] || DefaultLayout">
    <router-view />
  </component>
</template>
