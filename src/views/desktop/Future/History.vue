<template>
    <div class="col-span-12">
        <div id="info-trading" class="w-full min-h-[320px] overflow-auto bg-[#111419] px-3">
            <a-tabs v-model:activeKey="activeTab" class="!mb-0">
                <a-tab-pane key="1" tab="Vị thế (0)">
                    <Tab1 />
                </a-tab-pane>
                <a-tab-pane key="2" tab="Lệnh mở (0)">
                    <Tab2 />
                </a-tab-pane>
                <a-tab-pane key="3" tab="Lệnh chờ (0)">
                    <Tab3 />
                </a-tab-pane>
                <a-tab-pane key="4" tab="Lịch sử lệnh">
                    <Tab4 />
                </a-tab-pane>
                <a-tab-pane key="5" tab="Lịch sử khớp">
                    <Tab5 />
                </a-tab-pane>
                <a-tab-pane key="6" tab="Biến động số dư">
                    <Tab4 />
                </a-tab-pane>
            </a-tabs>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { Tab1, Tab2, Tab3, Tab4, Tab5 } from "./Tabs";

const activeTab = ref("1");
</script>

<style scoped>
:deep(.ant-tabs-tab-btn) {
    font-size: 16px;
    font-weight: 600;
}

:deep(.ant-tabs-nav) {
    margin-bottom: 0 !important;
}
</style>
