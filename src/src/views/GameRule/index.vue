<template>
    <div>
        <Header title="5D - Luật chơi" />
        <RulesMethod v-model:activeTab="activeTab" v-model:activeMethod="activeMethod" />

        <div class="p-3 page-content-94" style="background-color: rgb(235, 235, 235)">
            <div class="text-gray-500 text-sm p-4 bg-white">
                {{ contentText }}
            </div>

            <RuleRenderer :rules="currentRules" />
        </div>
    </div>
</template>

<script setup>
import { computed, ref, watch } from "vue";
import Header from "./Header.vue";
import RulesMethod from "./RulesMethod.vue";
import RuleRenderer from "./RuleRenderer.vue";

const activeTab = ref(0);
const activeMethod = ref(0);

const contentText = computed(() => {
    return activeTab.value === 0
        ? "Kết quả xổ số: Kết quả xổ số cho mỗi lần rút được hình thành theo dãy số có năm chữ số (từ 0 ~ 9), được phân loại theo hàng đơn vị, hàng chục, hàng trăm, hàng nghìn và hàng vạn."
        : "Kết quả xổ số: Kết quả xổ số cho mỗi lần rút được hình thành theo số có năm chữ số (0 ~ 9), được phân loại theo hàng đơn vị, hàng chục, hàng trăm, hàng nghìn và hàng vạn.";
});

const rulesData = ref({
    0: {
        0: [
            // 5 Sao
            {
                title: "Trộn",
                subtitles: ["Luật chơi", "Ví dụ"],
                contents: [
                    "Chọn 1 số cho mỗi vị trí hàng vạn, hàng nghìn, hàng trăm, hàng chục và hàng đơn vị và sẽ giành chiến thắng khi kết quả 5 số khớp với lựa chọn của bạn.",
                    "Đặt lệnh: số 1 cho hàng vạn, 2 cho hàng nghìn, 3 cho hàng trăm, 4 cho hàng chục và 5 cho hàng đơn vị, thắng khi kết quả đạt 12345.",
                ],
            },
            {
                title: "Sự phối hợp -  Giải nhất",
                subtitles: ["Luật chơi", "Ví dụ"],
                contents: [
                    "Giải nhất: Chọn 1 số cho mỗi vị trí hàng vạn, hàng nghìn, hàng trăm, hàng chục và hàng đơn vị. Người chơi thắng khi kết quả xổ số khớp với lựa chọn của bạn.",
                    "Đặt lệnh: số 1 cho hàng vạn, 2 cho hàng nghìn, 3 cho hàng trăm, 4 cho hàng chục và 5 cho hàng đơn vị, thắng khi kết quả đạt 12345.",
                ],
            },
            {
                title: "Sự phối hợp -  Giải nhì",
                subtitles: ["Luật chơi", "Ví dụ"],
                contents: [
                    "Giải Nhì: Chọn 1 số cho mỗi vị trí hàng vạn, hàng nghìn, hàng trăm, hàng chục và hàng đơn vị. Người chơi thắng khi 4 số cuối kết quả xổ số khớp với lựa chọn của bạn.",
                    "Đặt lệnh: số 1 cho hàng vạn, 2 cho hàng nghìn, 3 cho hàng trăm, 4 cho hàng chục và 5 cho hàng đơn vị, thắng khi kết quả đạt 62345.",
                ],
            },
            {
                title: "Sự phối hợp – Giải Ba",
                subtitles: ["Luật chơi", "Ví dụ"],
                contents: [
                    "Giải Ba: Chọn 1 số cho mỗi vị trí hàng vạn, hàng nghìn, hàng trăm, hàng chục và hàng đơn vị. Người chơi thắng khi 3 số cuối kết quả xổ số khớp với lựa chọn của bạn.",
                    "Đặt lệnh: số 1 cho hàng vạn, 2 cho hàng nghìn, 3 cho hàng trăm, 4 cho hàng chục và 5 cho hàng đơn vị, thắng khi kết quả đạt 67345.",
                ],
            },
            {
                title: "Sự phối hợp – Giải Bốn",
                subtitles: ["Luật chơi", "Ví dụ"],
                contents: [
                    "Giải Bốn: Chọn 1 số cho mỗi vị trí hàng vạn, hàng nghìn, hàng trăm, hàng chục và hàng đơn vị. Người chơi thắng khi 2 số cuối kết quả xổ số khớp với lựa chọn của bạn.",
                    "Đặt lệnh: số 1 cho hàng vạn, 2 cho hàng nghìn, 3 cho hàng trăm, 4 cho hàng chục và 5 cho hàng đơn vị, thắng khi kết quả đạt 67895.",
                ],
            },
            {
                title: "Nhóm 120",
                subtitles: ["Luật chơi", "Ví dụ"],
                contents: [
                    "Chọn 5 số từ 0-9 và thắng khi 5 số này xuất hiện trong kết quả xổ số.",
                    "Đặt lệnh: số 1 cho hàng chục nghìn, 2 cho hàng nghìn, 3 cho hàng trăm, 4 cho hàng chục và 5 cho hàng đơn vị, người chơi thắng khi kết quả số bốc được là 12345.",
                ],
            },
            {
                title: "Nhóm 60",
                subtitles: ["Luật chơi", "Ví dụ"],
                contents: [
                    "Chọn một số từ ‘bộ đôi’ và hai số từ ‘số đơn’, người chơi thắng khi kết quả xổ số khớp với lựa chọn của bạn và số ‘bộ đôi’ được chọn xuất hiện hai lần.",
                    "Đặt lệnh: 2 là số bộ đôi và 1,3,4 cho số đơn, chiến thắng khi kết quả là 12234.",
                ],
            },
            {
                title: "Nhóm 30",
                subtitles: ["Luật chơi", "Ví dụ"],
                contents: [
                    "Chọn hai số từ ‘bộ đôi’ và một số từ ‘số đơn’, người chơi thắng khi kết quả xổ số khớp với lựa chọn của bạn và cả hai số ‘bộ đôi’ được chọn xuất hiện hai lần.",
                    "Đặt Lệnh: số 2,4 là số đôi và số 1 là số đơn, thắng khi kết quả xổ số là 12244.",
                ],
            },
            {
                title: "Nhóm 20",
                subtitles: ["Luật chơi", "Ví dụ"],
                contents: [
                    "Chọn một số từ ‘bộ ba’ và hai số từ số đơn, người chơi thắng khi kết quả xổ số khớp với lựa chọn của bạn và số ‘bộ ba’ được chọn phải xuất hiện ba lần.",
                    "Đặt lệnh: có ba số 2 và có một số 1 và 5, thắng khi kết quả xổ số là 12522",
                ],
            },
            {
                title: "Nhóm 10",
                subtitles: ["Luật chơi", "Ví dụ"],
                contents: [
                    "Chọn một số từ ‘bộ ba’ và một số từ ‘bộ đôi’. Người chơi thắng khi kết quả bốc thăm khớp với lựa chọn của bạn, số ‘bộ ba’ được chọn xuất hiện ba lần và số ‘bộ đôi’ được chọn xuất hiện hai lần",
                    "Đặt lệnh: có ba số 2 và có hai số 1, thắng khi kết quả xổ số là 12122.",
                ],
            },
            {
                title: "Nhóm 5",
                subtitles: ["Luật chơi", "Ví dụ"],
                contents: [
                    "Chọn một số từ ‘bộ bốn’ và một số từ số đơn, người chơi thắng khi kết quả bốc thăm khớp với lựa chọn của bạn và số ‘bộ bốn’ được chọn phải xuất hiện bốn lần, thắng!",
                    "Đặt lệnh: số 2 có bộ bốn và số 1 là số đơn, thắng khi kết quả số được rút là 12222.",
                ],
            },
        ],
        1: [
            // 4 Sao
            {
                title: "Trộn",
                subtitles: ["Luật chơi", "Ví dụ"],
                contents: [
                    "Chọn một số ở vị trí hàng vạn, hàng nghìn, hàng trăm, hàng chục và hàng đơn vị. Người chơi thắng khi 4 số cuối kết quả xổ số khớp với lựa chọn của bạn.",
                    "Đặt lệnh: số 2 cho hàng nghìn, số 3 cho hàng trăm, số 4 cho hàng chục và số 5 cho hàng đơn vị, thắng khi kết quả xổ số là 62345.",
                ],
            },
        ],
    },
    1: {
        0: [
            {
                title: "Sự phối hợp – Giải Ba",
                subtitles: ["Luật chơi", "Ví dụ"],
                contents: [
                    "Cách chơi này yêu cầu người chơi đoán 3 số.",
                    "Ví dụ: Nếu kết quả là 12345, người chơi chọn 345 sẽ thắng.",
                ],
            },
        ],
    },
});

const currentRules = computed(() => {
    return rulesData.value[activeTab.value][activeMethod.value] || [];
});

watch(activeTab, (newTab) => {
    console.log("Tab hiện tại:", newTab);
});

watch(activeMethod, (newMethod) => {
    console.log("Method hiện tại:", newMethod);
});
</script>
