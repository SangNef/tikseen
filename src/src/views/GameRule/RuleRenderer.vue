<template>
    <div v-for="(rule, ruleIndex) in rules" :key="ruleIndex" class=" mt-2 bg-white p-4 rounded-md shadow-md">
        <h2 class="rules-title">{{ rule.title }}</h2>
        <div v-for="(subtitle, index) in rule.subtitles" :key="index" class="pl-2.5 py-3.5">
            <h3 class="text-md font-semibold text-gray-700">{{ subtitle }}</h3>
            <p class="text-gray-600 text-sm">{{ rule.contents[index] }}</p>
        </div>
    </div>
</template>

<script setup>
defineProps({
    rules: Array, // Mảng các rule, mỗi rule có title, subtitles, contents
});
</script>

<style scoped>
.rules-title {
    font-weight: 700;
    text-align: center;
    min-width: 64px;
    margin: auto;
    display: table;
    padding: 4px 12px;
    color: #fff;
    background-color: #e72732;
    border-radius: 5px;
}
</style>
