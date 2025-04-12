<template>
    <section class="container py-[30px] md:py-15">
        <ul class="flex flex-col md:flex-row md:flex-nowrap gap-[3%]">
            <li
                v-for="(item, index) in items"
                :key="index"
                class="md:w-1/3 mb-[3%]">
                <!-- <router-link :to="item.href">
                    <h3 class="text-xl font-bold text-[#d13138] mb-2 leading-snug" v-html="item.title"></h3>
                    <p class="text-[#424d54] text-sm leading-relaxed">
                        {{ item.content }}
                    </p>
                </router-link> -->
                <div class="h-[360px] px-[30px] py-[70px] bg-white border border-[#dedede] relative">
                    <h3 class="text-[23px] md:text-[38px] text-[#d13138] pb-[25px] leading-[1.16667] font-bold relative" v-html="t(`about.items[${index}].title`)"></h3>
                    <p class="font-sf text-[#424d54] text-[14px] md:text-[16px]">{{ t(`about.items[${index}].content`) }}</p>
                    <router-link :to="item.href" class="text-[#a7a7a7] text-[15px] md:text-lg flex items-center gap-6 absolute bottom-[30px] left-[30px]">{{ t('detail') }} <img :src="btnArG" alt="" class="h-[13px] md:h-[16px] object-cover"></router-link>
                </div>
            </li>
        </ul>
    </section>
</template>

<script setup>
import btnArG from "@landing/assets/images/btn/ar-g.png";

import { useI18n } from "vue-i18n";
const { t } = useI18n();

const items = [
    {
        title: "Đội ngũ <br/> Nhân sự",
        content:
            "Trải qua chặng đường dài trưởng thành và phát triển, chính những con người Vingroup đã làm nên những giá trị tốt đẹp, đóng góp vào thành công của Tập đoàn hôm nay.",
        href: "/gioi-thieu/doi-ngu-nhan-su",
    },
    {
        title: "Tầm nhìn, Sứ mệnh <br/> và Giá trị cốt lõi",
        content:
            "Vingroup đặt cho mình sứ mệnh 'Vì một cuộc sống tốt đẹp hơn cho mọi người', với 3 trụ cột cốt lõi là Công nghệ - Công nghiệp, Thương mại Dịch vụ, Thiện nguyện Xã hội.",
        href: "/gioi-thieu/tam-nhin-su-menh-va-gia-tri-cot-loi",
    },
    {
        title: "Đối với <br/> Khách hàng",
        content:
            "Tạo nên những sản phẩm, dịch vụ có chất lượng tối ưu, mang lại sự hài lòng cho khách hàng ở mức độ cao nhất.",
        href: "/gioi-thieu/doi-voi-khach-hang",
    },
];
</script>

<style scoped>
h3:after {
    width: 2px;
    height: 51px;
    content: '';
    display: inline-block;
    position: absolute;
    top: 6px;
    left: -21px;
    background: #d13138;
}

@media (max-width: 768px) {
    h3:after {
        height: 75px;
        left: -31px;
    }
}
</style>
