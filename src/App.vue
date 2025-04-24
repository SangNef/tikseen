<script setup>
import { useRoute } from "vue-router";
import { computed, Fragment } from "vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import AuthLayout from "@/layouts/AuthLayout.vue";
import AccountLayout from "./layouts/AccountLayout.vue";
import "./style.css";

const route = useRoute();

const layouts = {
    DefaultLayout,
    AuthLayout,
    AccountLayout
};

const currentLayout = computed(() => {
    return layouts[route.meta.layout] || 'div';
});
</script>

<template>
    <component :is="currentLayout">
        <router-view />
    </component>
</template>
