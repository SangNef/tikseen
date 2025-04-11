<template>
    <div class="bg-white flex flex-col lg:flex-row overflow-x-hidden">
        <NavBar />
        <div class="pt-[50px] lg:pt-0 lg:pl-[95px] flex-1 flex flex-col">
            <slot />
            <Footer />
        </div>
    </div>
</template>

<script setup>
import NavBar from "@landing/components/NavBar.vue";
import Footer from "@landing/components/Footer.vue";
</script>

<style scope></style>
