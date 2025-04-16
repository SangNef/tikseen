<script setup>
import { useRoute } from "vue-router";
import { computed, Fragment } from "vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import AuthLayout from "@/layouts/AuthLayout.vue";
import "./style.css";

const route = useRoute();

const layouts = {
    DefaultLayout,
    AuthLayout,
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
