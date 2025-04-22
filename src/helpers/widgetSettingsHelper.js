/**
 * Helper functions để quản lý cấu hình widget giữa Setting và BubbleChat
 */

// Lấy cấu hình widget từ localStorage
export function getWidgetSettings() {
  try {
    const settings = localStorage.getItem('widget_settings');
    return settings ? JSON.parse(settings) : getDefaultWidgetSettings();
  } catch (error) {
    console.error('Lỗi khi đọc cấu hình widget:', error);
    return getDefaultWidgetSettings();
  }
}

// Lưu cấu hình widget vào localStorage
export function saveWidgetSettings(settings) {
  try {
    const mergedSettings = {
      ...getDefaultWidgetSettings(),
      ...settings,
    };
    localStorage.setItem('widget_settings', JSON.stringify(mergedSettings));
    return true;
  } catch (error) {
    console.error('Lỗi khi lưu cấu hình widget:', error);
    return false;
  }
}

// Cấu hình mặc định cho widget
export function getDefaultWidgetSettings() {
  return {
    // Cấu hình doanh nghiệp (từ WidgetConfig.vue)
    businessName: 'LiveChat',
    businessWebsite: '',
    logo: null,
    showOperationHours: false,
    operationHours: [
      { name: 'Thứ 2', enabled: true, startHour: '09:00', endHour: '17:00' },
      { name: 'Thứ 3', enabled: true, startHour: '09:00', endHour: '17:00' },
      { name: 'Thứ 4', enabled: true, startHour: '09:00', endHour: '17:00' },
      { name: 'Thứ 5', enabled: true, startHour: '09:00', endHour: '17:00' },
      { name: 'Thứ 6', enabled: true, startHour: '09:00', endHour: '17:00' },
      { name: 'Thứ 7', enabled: false, startHour: '09:00', endHour: '17:00' },
      { name: 'Chủ nhật', enabled: false, startHour: '09:00', endHour: '17:00' },
    ],
    operationHoursText: 'Giờ làm việc: Thứ 2 - Thứ 6, 9:00 - 17:00',
    language: 'vi',
    autoTranslate: false,

    // Cấu hình widget (từ WebsiteWidget.vue)
    themeColor: '#3b82f6',
    position: 'right',
    selectedIcon: 0,
    isWidgetActive: true,

    // Cấu hình lời chào (từ GreetingConfig.vue)
    isGreetingEnabled: true,
    greetingDelay: 5,
    greetingMessage: 'Xin chào! Chúng tôi có thể giúp gì cho bạn hôm nay?',
    greetingTitle: 'Chào mừng đến với 123123123',
    businessTagline: 'Hỗ trợ khách hàng 24/7',
    showOnMobile: true,
    playSoundOnGreeting: true,
    autoHideDelay: 0,

    // Cấu hình form prechat (từ PreChatForm.vue)
    welcomeMessage: 'Chào mừng đến với LiveChat! Vui lòng nhập thông tin của bạn để bắt đầu chat.',
    requireName: true,
    requireEmail: true,

    // Cấu hình giao diện
    headerImage: '',
  };
}

// Chuyển đổi cấu hình từ các trang Setting sang định dạng cho BubbleChat
export function convertSettingsToBubbleChatConfig(settings) {
  // Đây là nơi để xử lý bất kỳ chuyển đổi dữ liệu nào giữa hai định dạng khác nhau
  return {
    ...settings,
  };
}
