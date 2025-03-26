<template>
    <div
        style="
            background-color: #e72732;
            color: rgb(255, 255, 255);
            flex-direction: row;
            padding: 10px;
            line-height: 24px;
            display: block;
            text-align: center;
            height: 52px;
        ">
        <div style="float: left; position: absolute; left: 10px; top: 0px; line-height: 44px">
            <button
                class="flex items-center justify-center mt-3"
                style="outline: none; border: 0px; align-self: flex-start; padding: 0px">
                <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    size="24"
                    height="24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
                </svg>
            </button>
        </div>
        <div class="center" style="font-size: 18px;">{{ title }}</div>
        <img :src="logo" alt="" style="margin-top: -25px; position: relative; float: right; width: 30px;">
    </div>
</template>

<script setup>
import logo from "@/assets/images/header/logo.png";

defineProps({
    title: String
});
</script>

<style></style>
