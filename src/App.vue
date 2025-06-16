<script setup>
import { useRoute } from 'vue-router';

import { DMainLayout, DAuthLayout } from '@/layouts/desktop';

import { MMainLayout, MAuthLayout } from '@/layouts/mobile';

import './style.css';

const route = useRoute();

function isMobile() {
    return window.innerWidth <= 768;
}

const layouts = isMobile()
    ? {
          MainLayout: MMainLayout,
          AuthLayout: MAuthLayout,
      }
    : {
          MainLayout: DMainLayout,
          AuthLayout: DAuthLayout,
      };
</script>

<template>
    <component :is="layouts[route.meta.layout] || 'div'">
        <router-view />
    </component>
</template>
