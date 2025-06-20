export const notifications = [
    {
        id: "362d0a0e19bbc461b9585cf96c6ca319",
        time: "2025-05-31 11:20:00",
        category: "Khuyến mãi & Sự kiện",
        title: "🎁 Nhận thêm 10% từ đơn nạp đầu tiên hôm nay!",
        content: [
            "Thành viên thân mến,",
            "Chúc mừng bạn đã nhận khuyến mãi 10% từ đơn nạp đầu tiên trong ngày hôm nay! 🎉",
            "Phần thưởng 2.0000 USDT đã được tự động cộng vào tài khoản của bạn.",
            "Hãy tiếp tục trải nghiệm và đồng hành cùng chúng tôi để nhận thêm nhiều ưu đãi hấp dẫn khác.",
            "Trân trọng,",
            "Đội ngũ Coincex",
        ],
        amount: "2.0000 USDT",
        isRead: false,
    },
    {
        id: "211d560b7c686e00d4365117e37220db",
        time: "2025-05-30 21:20:00",
        category: "Khuyến mãi & Sự kiện",
        title: "🎁 Nhận thêm 10% từ đơn nạp đầu tiên hôm nay!",
        content: [
            "Thành viên thân mến,",
            "Chúc mừng bạn đã nhận khuyến mãi 10% từ đơn nạp đầu tiên trong ngày hôm nay! 🎉",
            "Phần thưởng 2.0000 USDT đã được tự động cộng vào tài khoản của bạn.",
            "Hãy tiếp tục trải nghiệm và đồng hành cùng chúng tôi để nhận thêm nhiều ưu đãi hấp dẫn khác.",
            "Trân trọng,",
            "Đội ngũ Coincex",
        ],
        amount: "2.0000 USDT",
        isRead: true,
    },
];

export function getNotificationById(id) {
    return notifications.find((n) => n.id === id);
}
