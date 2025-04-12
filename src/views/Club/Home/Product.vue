<template>
    <div class="w-full min-h-screen custom-gradient p-4 pb-20">
        <Header title="SẢN PHẨM" titleColor="text-[#d9c8ab]" />
        <div class="px-3 py-2 rounded-lg text-white border border-[#d9c8ab] bg-[#393530] mt-4">
            <div class="text-[#dea94f] text-center font-bold mb-2">Quỹ Đầu Tư Vingroup: Quỹ Đầu Tư Phát Triển</div>
            <img :src="pic9" alt="" class="w-full h-auto" />
            <div class="text-[#dea94f] font-bold my-2">1. Tổng Quan Về Quỹ</div>
            <div class="mb-2">
                Quỹ Đầu Tư Phát Triển: Tập trung vào việc đầu tư vào tập đoàn Vingroup và các công ty con thuộc tập đoàn
                này.
            </div>
            <div class="mb-2">
                Mục tiêu của quỹ là sử dụng vốn đầu tư để hỗ trợ các dự án và hoạt động của Vingroup, từ đó tạo ra lợi
                nhuận cao cho nhà đầu tư thông qua việc phân phối lợi nhuận thu được từ các hoạt động của tập đoàn.
            </div>
            <div class="text-[#dea94f] font-bold my-2">2. Cách Thức Hoạt Động</div>
            <div class="mb-2">
                Đầu Tư Vào Vingroup: Quỹ sẽ đầu tư vào cổ phiếu của Vingroup hoặc các công ty con của tập đoàn.
            </div>
            <div class="mb-2">
                Các khoản đầu tư này có thể bao gồm việc mua cổ phần trực tiếp hoặc đầu tư vào các dự án cụ thể mà tập
                đoàn đang triển khai.
            </div>
            <div class="mb-2">
                Đầu Tư Vào Dự Án: Vingroup sử dụng số tiền đầu tư để phát triển các dự án lớn, bao gồm bất động sản,
                công nghệ, y tế, và giáo dục.
            </div>
            <div class="mb-2">Các dự án này có khả năng sinh lợi cao và tạo ra giá trị gia tăng cho tập đoàn.</div>
            <div class="text-[#dea94f] font-bold my-2">3. Phân Bổ Vốn</div>
            <div class="mb-2">
                Cổ Phiếu Tập Đoàn: Một phần vốn sẽ được đầu tư vào cổ phiếu của Vingroup và các công ty con của tập đoàn
                trên thị trường chứng khoán.
            </div>
            <div class="mb-2">
                Dự Án Đầu Tư: Một phần vốn sẽ được dùng để đầu tư vào các dự án cụ thể của Vingroup, như các khu đô thị
                mới, dự án công nghệ cao, hoặc các sản phẩm dịch vụ mới.
            </div>
            <div class="mb-2">
                Quản Lý Rủi Ro: Vốn đầu tư sẽ được phân bố và điều chỉnh dựa trên hiệu suất và tiềm năng sinh lời của
                từng lĩnh vực đầu tư.
            </div>
            <div class="text-[#dea94f] font-bold my-2">4. Minh Bạch Và Báo Cáo</div>
            <div class="mb-2">
                Báo Cáo Định Kỳ: Nhà đầu tư sẽ nhận được báo cáo hàng tháng hoặc hàng quý về tình hình đầu tư, bao gồm
                thông tin chi tiết về danh mục đầu tư, hiệu suất của cổ phiếu Vingroup và kết quả từ các dự án cụ thể.
            </div>
            <div class="mb-2">
                Thông Tin Dự Án: Cung cấp thông tin chi tiết về các dự án mà quỹ đang đầu tư, bao gồm tiến độ dự án, dự
                báo lợi nhuận, và các rủi ro tiềm ẩn.
            </div>
            <div class="mb-2">
                Nhóm Quản Lý: Công khai thông tin về đội ngũ quản lý quỹ và các chuyên gia đầu tư chịu trách nhiệm về
                chiến lược đầu tư và quản lý rủi ro.
            </div>
            <div class="text-[#dea94f] font-bold my-2">5. Lợi Nhuận Và Đầu Tư</div>
            <div class="mb-2">
                Lợi Nhuận Từ Cổ Phiếu: Nhà đầu tư sẽ nhận được lợi nhuận từ việc tăng giá cổ phiếu của Vingroup và các
                công ty con, cùng với cổ tức nếu có.
            </div>
            <div class="mb-2">
                Lợi Nhuận Từ Dự Án: Lợi nhuận từ các dự án đầu tư sẽ được phân phối cho nhà đầu tư theo tỷ lệ vốn góp.
            </div>
            <div class="mb-2">
                Lợi nhuận này có thể được tính toán dựa trên doanh thu và lợi nhuận của các dự án cụ thể.
            </div>
            <div class="text-[#dea94f] font-bold my-2">6. Ví Dụ Cụ Thể</div>
            <div class="mb-2">Đầu Tư Vào Cổ Phiếu: Quỹ đầu tư 10.000.000VND vào cổ phiếu của Vingroup.</div>
            <div class="mb-2">
                Nếu cổ phiếu tăng 5% trong một tháng, nhà đầu tư có thể nhận lợi nhuận 500.000VND từ khoản đầu tư này.
            </div>
            <div class="mb-2">Đầu Tư vào Dự Án: Quỹ đầu tư 20.000.000VND vào một dự án bất động sản của Vingroup.</div>
            <div class="mb-2">
                Dự kiến dự án này sẽ mang lại lợi nhuận 10% trong vòng 6 tháng, tức là 2.000.000VND lợi nhuận cho nhà
                đầu tư.
            </div>
            <div class="text-[#dea94f] font-bold my-2">7. Cam Kết An Toàn</div>
            <div class="mb-2">
                Quản Lý Rủi Ro Quỹ: Thực hiện các biện pháp quản lý rủi ro chặt chẽ, bao gồm phân tích thị trường và
                đánh giá tiềm năng của các dự án đầu tư.
            </div>
            <div class="mb-2">
                Bảo Mật Thông Tin: Tất cả thông tin liên quan đến đầu tư và lợi nhuận được bảo mật và chỉ có nhà đầu tư
                mới có quyền truy cập.
            </div>
            <div class="text-[#dea94f] font-bold my-2">Kết Luận</div>
            <div class="mb-2">
                Việc đầu tư vào Vingroup và các công ty con của nó có thể mang lại lợi nhuận cao nếu tập đoàn phát triển
                mạnh mẽ và các dự án của nó thành công.
            </div>
            <div class="mb-2">
                Tuy nhiên, cần đảm bảo rằng bạn cung cấp thông tin minh bạch về các khoản đầu tư và kết quả của các dự
                án để tạo sự tin tưởng và an tâm cho các nhà đầu tư.
            </div>
            <div class="mb-2">
                Sự rõ ràng trong cách thức hoạt động của quỹ và cam kết về quản lý rủi ro sẽ giúp bạn thu hút và giữ
                chân các nhà đầu tư.
            </div>
        </div>
    </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import { pic9 } from "@/assets/images/homeClub";
</script>

<style></style>
