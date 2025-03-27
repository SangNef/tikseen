<template>
    <div>
        <Header />
        <div
            :style="{
                backgroundImage: `url(${VlBg})`,
                backgroundRepeat: 'no-repeat',
                backgroundPositionX: '50%',
                backgroundPositionY: '40%',
                backgroundSize: '300px 350px',
            }"
            class="h-[calc(100vh-env(safe-area-inset-bottom)-44px)]">
            <div class="w-full text-justify h-full p-5">
                <p class="mb-4">
                    Ngày 11 tháng 02 năm 2025, Công ty xổ số điện toán Việt Nam (Vietlott) đã tiến hành trao giải
                    Jackpot xổ số tự chọn Mega 6/45 kỳ QSMT số 01310 cho anh N.V.N với giá trị giải thưởng hơn 152 tỷ
                    đồng. Sau hơn 8 năm triển khai kinh doanh xổ số tự chọn Mega 6/45 tại Việt Nam, anh N.V.N là người
                    nhận thưởng Jackpot lớn nhất từ trước đến nay của xổ số tự chọn Mega 6/45. Trong lịch sử trúng
                    thưởng trước đây của xổ số tự chọn Mega 6/45, đã từng có giải Jackpot với giá trị trúng thưởng là
                    159.232.985.000 đồng tại kỳ QSMT số 00069 ngày 25/12/2016, tuy nhiên, giải Jackpot này thuộc về 2
                    khách hàng may mắn nên giá trị nhận thưởng của mỗi khách hàng chỉ hơn 79 tỷ đồng.
                </p>
                <img :src="prize1" alt="" loading="lazy" class="pb-[10px] h-55 w-full" />
                <img :src="prize2" alt="" loading="lazy" class="pb-[10px] h-55 w-full" />
                <p class="mb-4">
                    Ngày 12 tháng 6 năm 2024, Chi nhánh Hải Phòng (thuộc Công ty xổ số điện toán Việt Nam - Vietlott) đã
                    tiến hành trao giải Jackpot xổ số tự chọn Mega 6/45 kỳ QSMT số 01248 cho anh V.V.A. với tổng giá trị
                    giải thưởng hơn 28 tỷ đồng.
                </p>
                <h3 style="font-size: 1.17em; margin: 1rem 0; font-weight: 700">
                    CHỦ DOANH NGHIỆP TRÚNG JACKPOT MEGA 6/45 ĐÓNG GÓP 500 TRIỆU ĐỒNG LÀM AN SINH XÃ HỘI
                </h3>
                <p class="mb-4">
                    Ngày 14 tháng 8 năm 2024, Công ty Xổ số điện toán Việt Nam (Vietlott) đã tiến hành trao giải Jackpot
                    xổ số tự chọn Mega 6/45 kỳ QSMT 01234 cho anh T.D – chủ nhân thuê bao Viettel với giá trị trúng
                    thưởng gần 48 tỷ đồng. Tại buổi lễ trao thưởng, đúng với tinh thần trách nhiệm xã hội của người chơi
                    Vietlott, anh T.D đã ủng hộ số tiền 500 triệu đồng đến Quỹ Tâm Tài Việt để thực hiện các hoạt động
                    an sinh xã hội. Đây là một hành động có ý nghĩa để góp phần cùng Quỹ Tâm Tài Việt thực hiện chương
                    trình an sinh xã hội trên toàn quốc. Từ đầu năm 2024 đến nay, Quỹ Tâm Tài Việt đã thực hiện trao
                    hàng trăm tấm thẻ bảo hiểm sức khỏe đến người phân phối xổ số; trao học bổng đến sinh viên các
                    trường Đại học ….
                </p>
                <img :src="prize3" alt="" loading="lazy" class="pb-[10px] h-55 w-full" />
                <div class="pb-20"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Header from "@client/components/Header.vue";
import VlBg from "@client/assets/images/bg/vlbg.png";
import prize1 from "@client/assets/images/result/prize1.jpg";
import prize2 from "@client/assets/images/result/prize2.png";
import prize3 from "@client/assets/images/result/prize3.jpg";
</script>

<style></style>
