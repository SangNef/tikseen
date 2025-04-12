<template>
    <div class="w-full min-h-screen custom-gradient p-4 pb-20">
        <Header title="MỤC TIÊU" titleColor="text-[#d9c8ab]" />
        <div class="px-3 py-2 rounded-lg text-white border border-[#d9c8ab] bg-[#393530] mt-4">
            <div class="text-[#d9c8ab] font-bold mb-2">1. Tạo Ra Sự Ổn Định Tài Chính:</div>
            <div class="mb-2">
                Dự Phòng Khẩn Cấp: Đảm bảo có đủ nguồn lực tài chính để ứng phó với các tình huống khẩn cấp bất ngờ, như
                mất việc làm, bệnh tật, hoặc các sự cố lớn.
            </div>
            <div class="mb-2">
                An Toàn Tài Chính: Xây dựng một nền tảng tài chính vững chắc để giảm thiểu rủi ro tài chính và bảo vệ
                trước các biến động không lường trước.
            </div>
            <img :src="pic1" class="w-full h-auto" alt="" /><img
                :src="pic2"
                class="w-full h-auto"
                alt="" />
            <div class="text-[#d9c8ab] font-bold my-2">2. Đáp Ứng Các Nhu Cầu Ngắn Hạn</div>
            <div class="mb-2">
                Chi Phí Sinh Hoạt: Đảm bảo có đủ tài chính để trang trải các chi phí sinh hoạt hàng ngày như tiền thuê
                nhà, thực phẩm, và các hóa đơn hàng tháng.
            </div>
            <div class="mb-2">
                Chi Tiêu Đặc Biệt: Tiết kiệm để đáp ứng các chi phí ngắn hạn như kỳ nghỉ, sửa chữa nhà cửa, hoặc mua sắm
                đồ dùng lớn.
            </div>
            <div class="text-[#d9c8ab] font-bold my-2">3. Đầu Tư Cho Con Cái Mục Tiêu Trung Hạn:</div>
            <div class="mb-2">
                Giáo Dục: Tích lũy tiền để tài trợ cho chi phí giáo dục của con cái, bao gồm học phí và các chi phí liên
                quan khác. Đảm bảo tài chính cho việc học hành, giáo dục và các nhu cầu tương lai của con cái.
            </div>
            <div class="mb-2">
                Giải Pháp: Bạn có thể lựa chọn các sản phẩm đầu tư dài hạn như quỹ giáo dục hoặc hợp đồng bảo hiểm liên
                kết đầu tư, giúp tích lũy tiền theo thời gian. Các quỹ tiết kiệm giáo dục hoặc tài khoản tiết kiệm với
                lãi suất cao cũng là lựa chọn tốt.
            </div>
            <img :src="pic3" class="w-full h-auto" alt="" /><img
                :src="pic4"
                class="w-full h-auto"
                alt="" />
            <div class="text-[#d9c8ab] font-bold my-2">4. Chuẩn Bị Cho Tương Lai Dài Hạn:</div>
            <div class="mb-2">
                Kế Hoạch Hưu Trí: Xây dựng quỹ hưu trí đề đảm bảo có nguồn tài chính đủ cho cuộc sống khi về hưu. Tạo ra
                nguồn thu nhập đủ để duy trì cuộc sống thoải mái khi về hưu.
            </div>
            <div class="mb-2">
                Quỹ Đầu Tư Dài Hạn: Các quỹ hưu trí, bảo hiểm hưu trí, hoặc quỹ đầu tư dài hạn có thể là lựa chọn tốt.
                Bằng cách đầu tư vào các sản phẩm này, bạn có thể đảm bảo có nguồn thu nhập ổn định và đáng tin cậy khi
                nghỉ hưu, nhằm gia tăng tài sản và đạt được các mục tiêu tài chính lớn hơn.
            </div>
            <img :src="pic5" class="w-full h-auto" alt="" /><img
                :src="pic6"
                class="w-full h-auto"
                alt="" />
            <div class="text-[#d9c8ab] font-bold my-2">5. Xây Dựng Tài Sản Cá Nhân &amp; Gia Tăng Giá Trị Tài Chính:</div>
            <div class="mb-2">
                Tăng Trưởng Tài Chính: Quản lý quỹ tích lũy một cách hiệu quả để gia tăng giá trị tài sản theo thời gian
                thông qua các khoản đầu tư sinh lợi, tích lũy vốn để mua bất động sản hoặc đầu tư vào thị trường bất
                động sản.
            </div>
            <div class="mb-2">
                Tạo Ra Thu Nhập Thụ Động: Sử dụng quỹ tích lũy để đầu tư vào các tài sản tạo ra thu nhập thụ động như
                bất động sản, có thể sử dụng các quỹ đầu tư bất động sản (REITS), quỹ đầu tư định kỳ, hoặc tiết kiệm
                hàng tháng để tạo quỹ mua nhà. Việc đầu tư vào quỹ đầu tư bất động sản có thể giúp bạn tiếp cận thị
                trường bất động sản mà không cần phải mua trực tiếp.
            </div>
            <img :src="pic7" class="w-full h-auto" alt="" /><img
                :src="pic8"
                class="w-full h-auto"
                alt="" />
            <div class="text-[#d9c8ab] font-bold my-2">6. Di Sản và Kế Hoạch Thừa Kế:</div>
            <div class="mb-2">
                Di Sản Tài Chính: Tích lũy tài sản để có thể để lại cho thế hệ sau hoặc cho các mục đích từ thiện, góp
                phần vào việc xây dựng di sản cá nhân hoặc gia đình.
            </div>
            <div class="mb-2">
                Kế Hoạch Thừa Kế: Xây dựng kế hoạch thừa kế để đảm bảo rằng tài sản được phân chia theo mong muốn và
                giảm thiểu các vấn đề pháp lý liên quan.
            </div>
        </div>
    </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import { pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8 } from "@/assets/images/homeClub";
</script>

<style></style>
