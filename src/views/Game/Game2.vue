<template>
    <div>
        <div
            class="bg-[#f4f4f4]"
            style="
                padding-top: 10px;
                padding-bottom: 10px;
                text-align: center;
                border-top: 1px solid rgb(212, 212, 212);
                font-size: 12px;
            ">
            <span class="text-red-500">Tỷ lệ lệnh {{ reward }} Cấp số Nhân</span>
        </div>

        <div
            v-if:exists="props.selectedMenu?.hasVT"
            style="background: #eeebda; border: 1px solid #e3decf; padding: 0 10px 5px; margin-bottom: 10px">
            <span>Lựa chọn vị trí:</span>
            <div class="mt-[5px] flex flex-nowrap self-center">
                <button
                    style="
                        font-size: 11px;
                        padding-left: 0px;
                        padding-right: 0px;
                        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
                        background: #fff;
                        border-radius: 6px;
                        margin: 0 0 0 10px;
                        text-align: center;
                        color: #f44336;
                        width: 100%;
                        height: 24px;
                    ">
                    10k
                </button>
                <button
                    style="
                        font-size: 11px;
                        padding-left: 0px;
                        padding-right: 0px;
                        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
                        background: #fff;
                        border-radius: 6px;
                        margin: 0 0 0 10px;
                        text-align: center;
                        color: #f44336;
                        width: 100%;
                        height: 24px;
                    ">
                    1k
                </button>
                <button
                    style="
                        font-size: 11px;
                        padding-left: 0px;
                        padding-right: 0px;
                        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
                        background: #fff;
                        border-radius: 6px;
                        margin: 0 0 0 10px;
                        text-align: center;
                        color: #f44336;
                        width: 100%;
                        height: 24px;
                    ">
                    100
                </button>
                <button
                    style="
                        font-size: 11px;
                        padding-left: 0px;
                        padding-right: 0px;
                        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
                        background: #fff;
                        border-radius: 6px;
                        margin: 0 0 0 10px;
                        text-align: center;
                        color: #f44336;
                        width: 100%;
                        height: 24px;
                    ">
                    10
                </button>
                <button
                    style="
                        font-size: 11px;
                        padding-left: 0px;
                        padding-right: 0px;
                        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
                        background: #fff;
                        border-radius: 6px;
                        margin: 0 0 0 10px;
                        text-align: center;
                        color: #f44336;
                        width: 100%;
                        height: 24px;
                    ">
                    1
                </button>
            </div>
        </div>

        <Game2Data
            v-for="item in dataList"
            :key="item.amount"
            :vt="props.selectedMenu?.hasVT"
            :amount="item.amount"
            :numbers="item.numbers"
            :color="item.color" />
        <Bet2 />
    </div>
</template>

<script setup>
import { computed } from "vue";
import Game2Data from "./Game2Data.vue";
import Bet2 from "./Bet2.vue";

const props = defineProps({
    selectedMenu: String,
    selectedSubmenu: String,
});

// Map reward theo selectedSubmenu
const reward = computed(() => {
    const rewardMap = {
        "Vị trí": "9",
        "TXCL 2 cuối": "3.6",
        "TXCL 2 đầu": "3.6",
        "1 số cụ thể": "2.195",
        "2 số cụ thể": "11.045",
        "3 số cụ thể": "105.14",
        "4 số cụ thể": "1926.52",
        "Combo 2 cuối": "90",
        "Combo 2 đầu": "90",
        "Combo 2 cuối_tổng": "90",
        "Combo 2 đầu_tổng": "90",
        "Nhóm 2 cuối": "45",
        "Nhóm 2 đầu": "45",
        "Nhóm 2 cuối_tổng": "45",
        "Nhóm 2 đầu_tổng": "45",
        "Combo 3 đầu": "900",
        "Combo 3 đầu_tổng của 3": "900",
        "Nhóm 3 đầu_Nhóm 3": "300",
        "Nhóm 3 đầu_Nhóm 6": "150",
        "Nhóm 3 đầu_tổng": "150-300",
        "Combo 3 giữa": "900",
        "Combo 3 giữa_tổng của 3": "900",
        "Nhóm 3 giữa_Nhóm 3": "300",
        "Nhóm 3 giữa_Nhóm 6": "150",
        "Nhóm 3 giữa_tổng": "150-300",
        "Combo 3 cuối": "900",
        "Combo 3 cuối_tổng của 3": "900",
        "Nhóm 3 cuối_Nhóm 3": "300",
        "Nhóm 3 cuối_Nhóm 6": "150",
        "Nhóm 3 cuối_tổng": "150-300",
        "Combo 4 sao": "9000",
        "Sự phối hợp của 4 sao": "9-9000",
        "4 sao nhóm 24": "375",
        "4 sao nhóm 12": "750",
        "4 sao nhóm 6": "1500",
        "4 sao nhóm 4": "2250",
        "Combo 5 sao": "90000",
        "Sự phối hợp của 5 sao": "9-90000",
        "5 sao nhóm 120": "750",
        "5 sao nhóm 60": "1500",
        "5 sao nhóm 30": "2880",
        "5 sao nhóm 20": "4500",
        "5 sao nhóm 10": "9000",
        "5 sao nhóm 5": "18000",
        "1 trên 3 cuối": "3.32",
        "2 trên 3 cuối": "16.665",
        "1 trên 3 đầu": "3.32",
        "2 trên 3 đầu": "16.665",
        "Combo tổng": props.selectedMenu?.name === "2 Bất kỳ" ? "80" : "800",
        "Nhóm trộn": "45",
        "Nhóm tổng": props.selectedMenu?.name === "2 Bất kỳ" ? "45" : "150 - 300",
        "Nhóm 24": "375",
        "Nhóm 12": "750",
        "Nhóm 6": "1500",
        "Nhóm 4": "2250",
    };
    return rewardMap[props.selectedSubmenu] || "1.0x";
});

// Map dataList theo selectedSubmenu
const dataList = computed(() => {
    console.log("selectedMenu name:", props.selectedMenu?.name);
    console.log("selectedSubmenu:", props.selectedSubmenu);
    console.log("VT: ", props.selectedMenu?.hasVT);

    if (props.selectedMenu?.name === "2 Bất kỳ" && props.selectedSubmenu === "Combo tổng") {
        return [
            { amount: "Dữ liệu tổng", numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], color: "red" },
            { amount: "Dữ liệu tổng", numbers: [10, 11, 12, 13, 14, 15, 16, 17, 18], color: "red" },
        ];
    }
    if (props.selectedMenu?.name === "3 Bất kỳ" && props.selectedSubmenu === "Combo tổng") {
        return [
            { amount: "Dữ liệu tổng", numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], color: "red" },
            { amount: "Dữ liệu tổng", numbers: [14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27], color: "red" },
        ];
    }

    // 2 bất kỳ nhóm tổng:
    if (props.selectedMenu?.name === "2 Bất kỳ" && props.selectedSubmenu === "Nhóm tổng") {
        [
            {
                amount: "Dữ liệu tổng",
                numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                color: "red",
            },
        ];
    }

    // 3 bất kỳ nhóm tổng:
    if (props.selectedMenu?.name === "3 Bất kỳ" && props.selectedSubmenu === "Nhóm tổng") {
        [
            {
                amount: "Dữ liệu tổng",
                numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
                color: "red",
            },
            {
                amount: "Dữ liệu tổng",
                numbers: [14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
                color: "red",
            },
        ];
    }
    const submenuConfig = {
        "Vị trí": [
            { amount: "10K", numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], color: "red" },
            { amount: "1K", numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], color: "orange" },
            { amount: "100", numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], color: "blue" },
            { amount: "10", numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], color: "green" },
            { amount: "1", numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], color: "purple" },
        ],
        "TXCL 2 cuối": [
            { amount: "100", numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], color: "green" },
            { amount: "10", numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], color: "purple" },
        ],
        "TXCL 2 đầu": [
            { amount: "10k", numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], color: "red" },
            { amount: "1k", numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], color: "orange" },
        ],
        "1 số cụ thể": [{ amount: "Cụ thể 1", numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], color: "red" }],
        "2 số cụ thể": [{ amount: "Cụ thể 2", numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], color: "red" }],
        "3 số cụ thể": [{ amount: "Cụ thể 3", numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], color: "red" }],
        "4 số cụ thể": [{ amount: "Cụ thể 4", numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], color: "red" }],
        "Combo 2 cuối": [
            { amount: "10", numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], color: "green" },
            { amount: "1", numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], color: "purple" },
        ],
        "Combo 2 đầu": [
            { amount: "10k", numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], color: "red" },
            { amount: "1k", numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], color: "orange" },
        ],
        "Combo 2 cuối_tổng": [
            { numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18], color: "red" },
        ],
        "Combo 2 đầu_tổng": [
            { numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18], color: "red" },
        ],
        "Nhóm 2 cuối": [{ amount: "Nhóm", numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], color: "red" }],
        "Nhóm 2 đầu": [{ amount: "Nhóm", numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], color: "red" }],
        "Nhóm 2 cuối_tổng": [
            { numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18], color: "red" },
        ],
        "Nhóm 2 đầu_tổng": [
            { numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18], color: "red" },
        ],
        "Combo 3 đầu": [
            { amount: "10k", numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], color: "red" },
            { amount: "1k", numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], color: "orange" },
            { amount: "100", numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], color: "blue" },
        ],
        "Combo 3 đầu_tổng của 3": [
            { amount: "Dữ liệu tổng", numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], color: "red" },
            {
                amount: "Dữ liệu tổng",
                numbers: [14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                color: "orange",
            },
        ],
        "Nhóm 3 đầu_Nhóm 3": [{ amount: "Nhóm 3", numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], color: "red" }],
        "Nhóm 3 đầu_Nhóm 6": [{ amount: "Nhóm 6", numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], color: "red" }],
        "Nhóm 3 đầu_tổng": [
            { amount: "Dữ liệu tổng", numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], color: "red" },
            {
                amount: "Dữ liệu tổng",
                numbers: [14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                color: "red",
            },
        ],
        "Combo 3 giữa": [
            { amount: "1k", numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], color: "orange" },
            { amount: "100", numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], color: "blue" },
            { amount: "10", numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], color: "green" },
        ],
        "Combo 3 giữa_tổng của 3": [
            { amount: "Dữ liệu tổng", numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], color: "red" },
            {
                amount: "Dữ liệu tổng",
                numbers: [14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                color: "orange",
            },
        ],
        "Nhóm 3 giữa_Nhóm 3": [{ amount: "Nhóm 3", numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], color: "red" }],
        "Nhóm 3 giữa_Nhóm 6": [{ amount: "Nhóm 6", numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], color: "red" }],
        "Nhóm 3 giữa_tổng": [
            { amount: "Dữ liệu tổng", numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], color: "red" },
            {
                amount: "Dữ liệu tổng",
                numbers: [14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
                color: "red",
            },
        ],
        "Combo 3 cuối": [
            { amount: "100", numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], color: "blue" },
            { amount: "10", numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], color: "green" },
            { amount: "1", numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], color: "purple" },
        ],
        "Combo 3 cuối_tổng của 3": [
            { amount: "Dữ liệu tổng", numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], color: "red" },
            {
                amount: "Dữ liệu tổng",
                numbers: [14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                color: "red",
            },
        ],
        "Nhóm 3 cuối_Nhóm 3": [{ amount: "Nhóm 3", numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], color: "red" }],
        "Nhóm 3 cuối_Nhóm 6": [{ amount: "Nhóm 6", numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], color: "red" }],
        "Nhóm 3 cuối_tổng": [
            { amount: "Dữ liệu tổng", numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], color: "red" },
            {
                amount: "Dữ liệu tổng",
                numbers: [14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
                color: "red",
            },
        ],
        "Combo 4 sao": [
            { amount: "1k", numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], color: "orange" },
            { amount: "100", numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], color: "blue" },
            { amount: "10", numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], color: "green" },
            { amount: "1", numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], color: "purple" },
        ],
        "Sự phối hợp của 4 sao": [
            { amount: "1k", numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], color: "orange" },
            { amount: "100", numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], color: "blue" },
            { amount: "10", numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], color: "green" },
            { amount: "1", numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], color: "purple" },
        ],
        "4 sao nhóm 24": [{ amount: "Nhóm 24", numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], color: "red" }],
        "4 sao nhóm 12": [
            { amount: "Bộ đôi", numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], color: "red" },
            { amount: "单　号", numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], color: "red" },
        ],
        "4 sao nhóm 6": [{ amount: "Bộ đôi", numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], color: "red" }],
        "4 sao nhóm 4": [
            { amount: "Bộ ba", numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], color: "red" },
            { amount: "单　号", numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], color: "red" },
        ],
        "Combo 5 sao": [
            { amount: "10k", numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], color: "red" },
            { amount: "1k", numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], color: "orange" },
            { amount: "100", numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], color: "blue" },
            { amount: "10", numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], color: "green" },
            { amount: "1", numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], color: "purple" },
        ],
        "Sự phối hợp của 5 sao": [
            { amount: "10k", numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], color: "red" },
            { amount: "1k", numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], color: "orange" },
            { amount: "100", numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], color: "blue" },
            { amount: "10", numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], color: "green" },
            { amount: "1", numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], color: "purple" },
        ],
        "5 sao nhóm 120": [{ amount: "Nhóm 120", numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], color: "red" }],
        "5 sao nhóm 60": [
            { amount: "Bộ ba", numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], color: "red" },
            { amount: "单　号", numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], color: "red" },
        ],
        "5 sao nhóm 30": [
            { amount: "Bộ đôi", numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], color: "red" },
            { amount: "单　号", numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], color: "red" },
        ],
        "5 sao nhóm 20": [
            { amount: "Bộ ba", numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], color: "red" },
            { amount: "单　号", numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], color: "red" },
        ],
        "5 sao nhóm 10": [
            { amount: "Bộ ba", numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], color: "red" },
            { amount: "Bộ đôi", numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], color: "red" },
        ],
        "5 sao nhóm 5": [
            { amount: "Bộ tứ", numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], color: "red" },
            { amount: "单　号", numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], color: "red" },
        ],
        "1 trên 3 cuối": [{ amount: "Ngẫu nhiên", numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], color: "red" }],
        "2 trên 3 cuối": [{ amount: "Ngẫu nhiên", numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], color: "red" }],
        "1 trên 3 đầu": [{ amount: "Ngẫu nhiên", numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], color: "red" }],
        "2 trên 3 đầu": [{ amount: "Ngẫu nhiên", numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], color: "red" }],
        "Nhóm trộn": [{ amount: "Nhóm", numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], color: "red" }],
        "Nhóm tổng": [
            {
                amount: "Dữ liệu tổng",
                numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                color: "red",
            },
        ],
        "Nhóm 24": [{ amount: "Nhóm 24", numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], color: "red" }],
        "Nhóm 12": [
            { amount: "Bộ đôi", numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], color: "red" },
            { amount: "单　号", numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], color: "red" },
        ],
        "Nhóm 6": [{ amount: "Bộ đôi", numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], color: "red" }],
        "Nhóm 4": [
            { amount: "Bộ ba", numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], color: "red" },
            { amount: "单　号", numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], color: "red" },
        ],
    };

    return submenuConfig[props.selectedSubmenu] || [];
});
</script>
