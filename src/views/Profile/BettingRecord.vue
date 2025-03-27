<template>
    <div>
        <nav class="h-11 bg-[#e72732] flex justify-between p-3 items-center">
            <button type="button" class="text-white" style="outline: none; border: 0px" @click="goBack">
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
            <p class="p text-white" style="margin-bottom: 0px; font-size: 18px">Bản Ghi</p>
            <div class="flex items-center" @click="toggleFilter">
                <span class="text-xs text-white pl-2 leading-5">{{ selectedFilter }}</span>
                <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    size="20"
                    height="20"
                    width="20"
                    class="text-white"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"></path>
                </svg>
            </div>
        </nav>
        <div v-if="showFilter" class="p-4 border border-[#0000002d]">
            <button
                type="button"
                class="bg-[#e72732] text-[0.875rem] text-white px-2 py-1 rounded-sm"
                style="width: 31%; margin: 1%">
                Xổ số
            </button>
            <hr class="hr-text" data-content="Ngày" />
            <button
                v-for="(filter, index) in filters"
                :key="index"
                @click="selectFilter(filter)"
                :class="['btn btn-outline-secondary btn-sm', { 'theme-background-color': selectedFilter === filter, 'color-gray': selectedFilter !== filter }]"
                style="width: 30%; margin: 1.3%">
                {{ filter }}
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const goBack = () => {
    router.go(-1);
};

const showFilter = ref(false);
const selectedFilter = ref("Hôm Qua");
const filters = ref(["Hôm Nay", "Hôm Qua", "Tuần Này", "Tuần Trước", "Tháng Này", "Tháng Trước"]);

const toggleFilter = () => {
    showFilter.value = !showFilter.value;
};

const selectFilter = (filter) => {
    selectedFilter.value = filter;
    showFilter.value = false; // Ẩn filter sau khi chọn
};
</script>

<style scoped>
.hr-text {
    position: relative;
    height: 1.5em;
    font-size: 12px;
    line-height: 1em;
    color: #000;
    text-align: center;
    border: 0;
    outline: 0;
    opacity: 0.5;
    margin: 1rem 0;
}

.hr-text:before {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 1px;
    content: " ";
    background: linear-gradient(90deg, transparent, #818078, transparent);
}

.hr-text:after {
    position: relative;
    display: inline-block;
    padding: 0 0.5em;
    line-height: 1.5em;
    color: #000;
    content: attr(data-content);
    background-color: #fcfcfa;
}

.theme-background-color {
    background: #e72732 !important;
    font-size: 12px;
    color: white !important;
}

.btn-outline-secondary {
    color: #f1ebe9;
    border: 1px solid #f1ebe9;
}

.btn-group-sm > .btn,
.btn-sm {
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
    border-radius: 0.25rem;
}

.color-gray {
    color: #9e9e9e;
}
</style>
