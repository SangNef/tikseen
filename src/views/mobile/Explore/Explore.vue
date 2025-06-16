<template>
    <Header />
    <div class="pb-12 overflow-x-hidden">
        <div class="pt-[102.125px]">
            <div class="px-1.5 relative">
                <div class="_bg-top_bayda_25"></div>

                <DaBay />

                <div class="text-[0.48rem] font-bold leading-[0.85rem]">
                    <p>Điểm danh mỗi ngày</p>
                    <p class="text-[#01bc8d]">Nhận thưởng không giới hạn</p>
                </div>
                <div class="!mt-3 _box-checkin_bayda_1 ant-flex css-1v613y0 ant-flex-align-stretch ant-flex-vertical">
                    <div class="px-1.5 pt-2 pb-1">
                        <h4 class="flex items-center font-semibold gap-0.5 text-[0.36rem]">
                            Tổng điểm thưởng
                            <svg
                                width="1em"
                                height="1em"
                                viewBox="0 0 1024 1024"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                role="img"
                                aria-label="arrow"
                                focusable="false"
                                data-icon="arrow"
                                aria-hidden="true"
                                preserveAspectRatio="xMidYMid meet"
                                class="rv-icon rv-icon-arrow">
                                <path
                                    d="M711.156 508.035a41.472 41.472 0 01-11.126 20.023L366.12 861.97c-16.272 16.272-42.654 16.272-58.926 0s-16.272-42.654 0-58.926L611.767 498.47 307.241 193.944c-16.272-16.272-16.272-42.654 0-58.926 16.271-16.272 42.653-16.272 58.925 0L700.078 468.93c10.606 10.606 14.299 25.508 11.078 39.105z"
                                    fill-rule="evenodd"></path>
                            </svg>
                        </h4>
                        <div class="flex items-center justify-between py-0.5">
                            <div class="ant-flex css-1v613y0 ant-flex-align-center" style="gap: 5px">
                                <span class="font-bold text-[0.62rem]">0.36</span
                                ><span class="text-[0.62rem] text-[#01bc8d] font-bold">USDT</span>
                            </div>
                            <div
                                class="bg-default text-white px-1.5 py-1 rounded-full active:opacity-60 duration-100 min-w-[85px] h-[35.6px] ant-flex css-1v613y0 ant-flex-align-center ant-flex-justify-center"
                                style="gap: 5px">
                                <span class="text-[0.3rem] text-[#1d1d1d] font-bold">Điểm danh</span>
                            </div>
                        </div>
                    </div>
                    <div class="border-t border-[#01bc8d33] border-dotted"></div>
                    <div class="flex items-center justify-between text-[0.32rem] text-[#f3f3f366] p-1.5">
                        <p>Nhận thưởng chỉ với 1 chạm</p>
                        <svg
                            width="1em"
                            height="1em"
                            viewBox="0 0 1024 1024"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            role="img"
                            aria-label="arrow"
                            focusable="false"
                            data-icon="arrow"
                            aria-hidden="true"
                            preserveAspectRatio="xMidYMid meet"
                            class="rv-icon rv-icon-arrow">
                            <path
                                d="M711.156 508.035a41.472 41.472 0 01-11.126 20.023L366.12 861.97c-16.272 16.272-42.654 16.272-58.926 0s-16.272-42.654 0-58.926L611.767 498.47 307.241 193.944c-16.272-16.272-16.272-42.654 0-58.926 16.271-16.272 42.653-16.272 58.925 0L700.078 468.93c10.606 10.606 14.299 25.508 11.078 39.105z"
                                fill-rule="evenodd"></path>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="_checkin-list_bayda_37 mt-3.5 p-1.5">
                <div class="bg-[#121212] min-h-12">
                    <section>
                        <p class="text-[0.42rem] font-bold !mb-1">Phần thưởng hàng ngày</p>
                        <p class="text-[0.32rem] text-[#f3f3f366] leading-[20px]">
                            Hãy tham gia điểm danh mỗi ngày và mở lì xì ngay để nhận phần thưởng ngẫu nhiên từ 0.01 - 10
                            USDT!
                        </p>
                    </section>
                    <Swiper
                        :slides-per-view="2.5"
                        :space-between="15"
                        :loop="false"
                        :allow-touch-move="checkinItems.length > 7"
                        :resistance-ratio="0"
                        :center-insufficient-slides="false"
                        :touch-release-on-edges="true"
                        class="mt-2 !mb-0.5">
                        <SwiperSlide v-for="(item, idx) in checkinItems" :key="idx" style="max-width: 97px">
                            <div class="relative rounded-sm flex flex-col items-center justify-center">
                                <img class="w-full" :src="item.img" alt="" />
                                <span class="text-[0.24rem] font-semibold absolute top-1 left-1.5">
                                    {{ item.day }}
                                </span>
                                <span
                                    class="text-[0.32rem] font-semibold absolute top-5 whitespace-nowrap"
                                    :style="{ color: item.statusColor }">
                                    {{ item.status }}
                                </span>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div class="_reward-start_bayda_70 mt-1.5 p-1.5">
                <div class="bg-[#121212] min-h-12">
                    <section>
                        <p class="text-[0.42rem] font-bold !mb-1">Hướng dẫn bắt đầu</p>
                        <span class="desc"
                            ><div class="!mb-0.5 ant-flex css-1v613y0 ant-flex-align-center" style="gap: 6px">
                                <img
                                    alt="icon"
                                    src="https://assets.staticimg.com/platform-operation-web/1.4.5/svg/desc-icon-crash.71039aad.svg"
                                    class="icon lrtcss-dbgqcv" /><span class="text-[0.32rem] text-[#f3f3f366]"
                                    >Phần thưởng lên đến <span class="highlight">816 USDT</span></span
                                >
                            </div>
                            <div class="!mb-0.5 ant-flex css-1v613y0 ant-flex-align-center" style="gap: 6px">
                                <img
                                    alt="icon"
                                    src="https://assets.staticimg.com/platform-operation-web/1.4.5/svg/desc-icon-coupon.c2a1c1ca.svg"
                                    class="icon lrtcss-dbgqcv" /><span class="text-[0.32rem] text-[#f3f3f366]"
                                    >Phiếu giảm giá &amp; Phiếu thưởng <span class="highlight">2000 USDT</span></span
                                >
                            </div></span
                        >
                    </section>
                </div>
            </div>
            <div class="p-1.5">
                <h2 class="text-white text-[0.56rem] font-semibold mt-2 mb-1.5">Câu hỏi thường gặp</h2>
                <a-collapse
                    class="ant-collapse ant-collapse-icon-position-end ant-collapse-borderless css-1ftbe20"
                    accordion
                    expand-icon-position="end"
                    :expand-icon="expandIcon">
                    <a-collapse-panel v-for="item in faqs" :key="item.key" :header="item.header">
                        <div v-html="item.content"></div>
                    </a-collapse-panel>
                </a-collapse>
            </div>
        </div>
    </div>
</template>

<script setup>
import Header from './Header.vue';
import { h, ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import DaBay from './DaBay.vue';

const checkinItems = [
    {
        day: 'Ngày đầu',
        status: 'Đã bỏ lỡ',
        statusColor: '#c0392b',
        img: 'https://i.imgur.com/YaO9yiJ.png',
    },
    {
        day: 'Ngày 2',
        status: 'Đã bỏ lỡ',
        statusColor: '#c0392b',
        img: 'https://i.imgur.com/YaO9yiJ.png',
    },
    {
        day: 'Ngày 3',
        status: 'Đã bỏ lỡ',
        statusColor: '#c0392b',
        img: 'https://i.imgur.com/YaO9yiJ.png',
    },
    {
        day: 'Ngày 4',
        status: 'Đã bỏ lỡ',
        statusColor: '#c0392b',
        img: 'https://i.imgur.com/YaO9yiJ.png',
    },
    {
        day: 'Ngày 5',
        status: 'Chưa mở',
        statusColor: '#ece7e7',
        img: 'https://i.imgur.com/YaO9yiJ.png',
    },
    {
        day: 'Ngày 6',
        status: 'Chưa mở',
        statusColor: '#ece7e7',
        img: 'https://i.imgur.com/YaO9yiJ.png',
    },
    {
        day: 'Ngày 7',
        status: 'Chưa mở',
        statusColor: '#ece7e7',
        img: 'https://i.imgur.com/YaO9yiJ.png',
    },
];

const faqs = [
    {
        key: 1,
        header: 'Cách để nhận phần thưởng Khởi đầu?',
        content: `
            <p class="!mb-1">
                Hoàn thành các nhiệm vụ Khởi đầu để kiếm phần thưởng và phiếu giảm giá tiền điện tử. Bạn có thể nhận khi đăng ký và phần thưởng tiền điện tử có thể được rút sau khi tất cả nhiệm vụ đã hoàn thành, tùy thuộc vào việc phê duyệt của nền tảng và thời gian xử lý là 15 ngày làm việc.
            </p>
            <p class="!mb-1">
                Sau khi hoàn tất đăng ký, Xác minh danh tính, nạp tiền, giao dịch và giao dịch nâng cao, bạn sẽ đủ điều kiện nhận phần thưởng tiền điện tử. Số tiền thưởng là ngẫu nhiên trong một phạm vi nhất định.
            </p>
            <p class="!mb-1">
                Phần thưởng nạp tiền lần đầu: Nhận phần thưởng và phiếu giảm giá USDT cho lần nạp tiền hoặc giao dịch mua tiền điện tử đầu tiên của bạn. Các phương thức đủ điều kiện bao gồm giao dịch P2P, mua hàng từ dịch vụ của bên thứ ba, Giao dịch nhanh, nạp tiền pháp định hoặc nạp tiền trên chuỗi. Lưu ý: Tiền nạp từ Bao lì xì hoặc Quỹ trải nghiệm không được tính. Phần thưởng được xác định ngẫu nhiên trong một phạm vi cố định.
            </p>
            <p class="!mb-1">
                Phần thưởng giao dịch đầu tiên: Nhận phần thưởng USDT khi hoàn thành giao dịch đầu tiên của bạn với bất kỳ số tiền nào. Điều này bao gồm các giao dịch giao ngay, giao sau, ký quỹ và bot giao dịch. Lưu ý: Các giao dịch không tính phí sẽ không được tính đến. Phần thưởng được xác định ngẫu nhiên trong một phạm vi cố định.
            </p>
        `,
    },
    {
        key: 2,
        header: 'Cách tôi có thể nhận được quỹ trải nghiệm giao sau từ các nhiệm vụ Nạp tiền và Giao dịch có giới hạn thời gian?',
        content: `
            <p class="!mb-1">Đầu tiên, bạn cần tham gia sự kiện trong thời gian hiệu lực.</p>
            <p class="!mb-1">
                Đáp ứng các yêu cầu tối thiểu về tiền nạp ròng và giao dịch. Tiền nạp ròng = Tổng số tiền nạp các tài sản đủ điều kiện (bao gồm cả tài sản mua) trừ đi mọi khoản rút tiền trong sự kiện. Các khoản tiền nạp đủ điều kiện bao gồm: a) khoản tiền nạp với số tiền bất kỳ, b) mua tiền điện tử, bao gồm giao dịch P2P, mua qua bên thứ ba hoặc Giao dịch nhanh, c) nạp tiền pháp định và d) nạp tiền trên chuỗi (không bao gồm chuyển khoản nội bộ). Tất cả các hoạt động giao dịch, chẳng hạn như giao dịch giao ngay và giao dịch giao sau, sẽ đóng góp vào khối lượng giao dịch của bạn.
            </p>
            <p class="!mb-1">
                Phần thưởng phải được nhận theo cách thủ công 15 ngày sau khi bạn đăng ký. Giới hạn đòn bẩy và rút tiền đối với quỹ trải nghiệm có thể khác nhau và sẽ được xác định tại thời điểm phân phối.
            </p>
        `,
    },
    {
        key: 3,
        header: 'Cách để nhận được phần thưởng từ các nhiệm vụ Lợi suất cao có giới hạn thời gian?',
        content: `
            <p class="!mb-1">Đầu tiên, bạn cần tham gia sự kiện trong thời gian hiệu lực.</p>
            <p class="!mb-1">
                Mua sản phẩm CoinCex Earn thông qua Trung tâm Phần thưởng để hưởng thêm quỹ trải nghiệm giao sau.
            </p>
            <p class="!mb-1">
                Số tiền của quỹ trải nghiệm giao sau được liên kết với số tiền của sản phẩm CoinCex Earn đầu tiên bạn mua. Phần thưởng phải được nhận theo cách thủ công 15 ngày sau khi bạn đăng ký. Giới hạn đòn bẩy và rút tiền đối với quỹ trải nghiệm có thể khác nhau và sẽ được xác định tại thời điểm phân phối.
            </p>
        `,
    },
];

// Custom expand icon: dấu + khi đóng, dấu - khi mở, trong hình tròn
const expandIcon = ({ isActive }) =>
    h(
        'span',
        {
            style: {
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '24px',
                height: '24px',
            },
        },
        [
            h(
                'svg',
                {
                    width: 12,
                    height: 12,
                    viewBox: '0 0 12 12',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                },
                [
                    // Viền tròn trắng, không nền
                    h('circle', {
                        cx: 6,
                        cy: 6,
                        r: 5.5,
                        fill: 'none',
                        stroke: '#fff',
                        'stroke-width': 1,
                    }),
                    // Dấu trừ ngang (5x1)
                    h('rect', {
                        x: 3.5,
                        y: 5.5,
                        width: 5,
                        height: 1,
                        rx: 0.5,
                        fill: '#fff',
                    }),
                    // Dấu cộng dọc (1x5) nếu chưa active
                    !isActive
                        ? h('rect', {
                              x: 5.5,
                              y: 3.5,
                              width: 1,
                              height: 5,
                              rx: 0.5,
                              fill: '#fff',
                          })
                        : null,
                ]
            ),
        ]
    );
</script>

<style scoped>
._bg-top_bayda_25 {
    position: absolute;
    top: 0;
    right: -0.16rem;
    z-index: 0;
    width: 96px;
    height: 96px;
    background: #01bc8d4d;
    filter: blur(50px);
    content: '';
}

._box-checkin_bayda_1 {
    position: relative;
    border-radius: 16px;
    background-image: linear-gradient(to right, #131817, #15231fcc), linear-gradient(to left, #01bc8dcc, #01bc8d4d);
    border: 0.6px solid transparent;
    display: flex;
    flex-direction: column;
    line-height: 1.3;
    z-index: 2;
    background-clip: padding-box, border-box !important;
    background-origin: padding-box, border-box !important;
}

._checkin-list_bayda_37 {
    flex: 1 1 0%;
    position: relative;
    box-shadow: #01bc8d0f 0 0 40px;
    background: #121212;
    border-radius: 12px 14px 12px 12px;
}

._checkin-list_bayda_37:after {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 61px;
    height: 53px;
    background-image: url(https://assets.staticimg.com/platform-operation-web/1.4.5/svg/limit-wrapper-bg.67ebf1a2.svg);
    background-repeat: no-repeat;
    background-size: 100%;
    content: ' ';
}

._checkin-list_bayda_37:before {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 137px;
    background-image: url(https://assets.staticimg.com/platform-operation-web/1.4.5/svg/task-border.6eb3b3e0.svg);
    background-repeat: no-repeat;
    background-size: 100%;
    content: ' ';
}

._reward-start_bayda_70 {
    flex: 1 1 0%;
    position: relative;
    box-shadow: #01bc8d0f 0 0 40px;
    background: #121212;
    border-radius: 12px 14px 12px 12px;
}

._reward-start_bayda_70:after {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 61px;
    height: 53px;
    background-image: url(https://assets.staticimg.com/platform-operation-web/1.4.5/svg/task-top-flower.5e49974d.svg);
    background-repeat: no-repeat;
    background-size: 100%;
    content: ' ';
}

._reward-start_bayda_70:before {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 137px;
    background-image: url(https://assets.staticimg.com/platform-operation-web/1.4.5/svg/task-border.6eb3b3e0.svg);
    background-repeat: no-repeat;
    background-size: 100%;
    content: ' ';
}

/* Style cho header và content của ant-collapse-panel */
:deep(.ant-collapse .ant-collapse-item .ant-collapse-header) {
    color: #fff !important;
    font-size: 14px !important;
    font-weight: 400 !important;
}

:deep(.ant-collapse .ant-collapse-content .ant-collapse-content-box) {
    color: #f3f3f399 !important;
    font-size: 14px !important;
    font-weight: 400;
}

:deep(.ant-collapse .ant-collapse-item) {
    border-bottom: 1px solid #f3f3f30a !important;
}

:deep(.ant-collapse-header, .ant-collapse-content-box) {
    padding-left: 0 !important;
    padding-right: 0 !important;
}

:deep(.ant-collapse .ant-collapse-content .ant-collapse-content-box) {
    padding-left: 0 !important;
    padding-right: 0 !important;
}
</style>
