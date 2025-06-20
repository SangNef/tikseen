<template>
    <div class="col-span-12">
        <div id="info-trading" class="relative w-full min-h-[320px] overflow-auto bg-[#111419] px-3">
            <a-tabs v-model:activeKey="activeKey" class="custom-ant-tabs">
                <a-tab-pane key="1" tab="Lệnh chờ (0)">
                    <Tab1 />
                </a-tab-pane>
                <a-tab-pane key="2" tab="Lịch sử giao dịch">
                    <Tab2 />
                </a-tab-pane>
                <a-tab-pane key="3" tab="Lịch sử thị trường">
                    <Tab3 />
                </a-tab-pane>
            </a-tabs>
            <svg
                class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium text-[#464f5f] hover:!text-gray-300 absolute top-3 right-3 cursor-pointer css-vubbuv"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="OpenInNewIcon"
                width="24"
                height="24"
                fill="currentColor"
                aria-describedby=":ro:">
                <path
                    d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3z"></path>
            </svg>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { Tab1, Tab2, Tab3 } from "./Tabs";

const activeKey = ref("1");
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
