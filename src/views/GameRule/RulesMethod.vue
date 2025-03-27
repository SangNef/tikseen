<template>
    <div>
        <div class="navbar-container">
            <ul>
                <li
                    v-for="(item, index) in tabs"
                    :key="index"
                    class="nav-link"
                    :class="{ 'active-link': activeTab === index }"
                    @click="setActiveTab(index)">
                    <a>{{ item }}</a>
                    <div class="underline"></div>
                </li>
            </ul>
        </div>

        <div id="ruleHead" class="px-3">
            <div class="rules-method-container">
                <div
                    v-for="(method, index) in filteredMethods"
                    :key="index"
                    class="rules-method-header"
                    :class="{ 'active-rule': activeMethod === index }"
                    @click="setActiveMethod(index)">
                    <a class="rules-method-header-button">
                        <span>{{ method }}</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, defineEmits } from "vue";

const tabs = ref(["Chính Thức", "Cổ điển"]);
const activeTab = ref(0);
const activeMethod = ref(0);

const methods = ref({
    0: ["5 sao", "4 sao", "3 cuối", "3 đầu", "3 giữa", "2 Số", "Vị trí", "Bất cứ"],
    1: ["Đôi bên", "Danh đơn", "Ngầu hầm", "Phé trộn", "Khác"],
});

const emit = defineEmits(["update:activeTab", "update:activeMethod"]);

const setActiveTab = (index) => {
    activeTab.value = index;
    activeMethod.value = 0;
    emit("update:activeTab", index);
};

const setActiveMethod = (index) => {
    activeMethod.value = index;
    emit("update:activeMethod", index);
};

const filteredMethods = computed(() => methods.value[activeTab.value]);
</script>

<style scoped>
.rules-method-container {
    display: flex;
    overflow-x: auto;
    white-space: nowrap;
    padding: 10px 0;
    background-color: rgb(235, 235, 235);
    gap: 10px;
}

.rules-method-header {
    padding: 5px 17px;
    cursor: pointer;
    border-radius: 25px;
    background: #f4f4f4;
    color: #bfbfbf;
    transition: background 0.3s, color 0.3s;
}

.active-rule {
    background: #e72732;
    color: white;
    font-weight: bold;
}

.rules-method-header-button {
    font-size: 14px;
    text-align: center;
}

.rules-method-container::-webkit-scrollbar {
    height: 5px;
}

.rules-method-container::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 10px;
}

.rules-method-container::-webkit-scrollbar-track {
    background: transparent;
}

.rules-method-container::-webkit-scrollbar {
    display: none;
}

.rules-method-container {
    scrollbar-width: none;
}

.rules-method-container {
    -ms-overflow-style: none;
}
</style>
