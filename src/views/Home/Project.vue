<template>
    <div class="w-full min-h-screen custom-gradient p-4 pb-20">
        <Header title="DỰ ÁN" titleColor="text-[#d9c8ab]" />
        <div class="mt-4">
            <ProjectCard
                v-for="item in data"
                :key="item.id"
                :id="item.id"
                :image="item.image"
                :name="item.name"
                :company="item.company"
                :description="item.description"
                :interest_day="item.interest_day"
                :min_invest="item.min_invest"
                :max_invest="item.max_invest"
                :term="item.term"
                :progress="item.progress" />
        </div>
    </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import data from "@/data/project.js";
import ProjectCard from "./ProjectCard.vue";
</script>

<style></style>
