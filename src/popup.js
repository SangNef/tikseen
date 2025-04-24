import { createApp } from 'vue';
import App from './views/BubbleChat/index.vue';
import router from './routes';
import './style.css';
import './styles/theme.css';

// Hàm điều chỉnh viewport height để tối ưu trên mobile
function setCustomViewportHeight() {
  const vh = window.innerHeight;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// Lớp LiveChatWidget - Quản lý việc khởi tạo và điều khiển LiveChat
class LiveChatWidget {
  constructor(config = {}) {
    this.config = {
      chatId: '9999',
      containerId: 'vippromax-livechat',
      position: 'right',
      themeColor: '#3b82f6',
      businessName: 'LiveChat',
      top: '10px',
      left: '10px',
      ...config,
    };

    this.initialized = false;
    this.app = null;
  }

  // Tạo container cho LiveChat nếu chưa tồn tại
  createContainer() {
    if (!document.getElementById(this.config.containerId)) {
      const container = document.createElement('div');
      container.id = this.config.containerId;
      document.body.appendChild(container);
    }
  }

  // Lưu cấu hình vào localStorage để BubbleChat có thể sử dụng
  saveConfig() {
    try {
      // Chỉ lưu cấu hình cho widget từ bên ngoài
      const existingSettings = localStorage.getItem('widget_settings');
      const settings = existingSettings ? JSON.parse(existingSettings) : {};

      const updatedSettings = {
        ...settings,
        themeColor: this.config.themeColor,
        position: this.config.position,
        businessName: this.config.businessName,
        chatId: this.config.chatId,
        top: this.config.top,
        left: this.config.left,
        isWidgetActive: true,
        ...this.config.settings,
      };

      localStorage.setItem('widget_settings', JSON.stringify(updatedSettings));
    } catch (error) {
      console.error('Lỗi khi lưu cấu hình LiveChat:', error);
    }
  }

  // Khởi tạo LiveChat
  init() {
    if (this.initialized) return;

    // Tạo container nếu chưa tồn tại
    this.createContainer();

    // Lưu cấu hình
    this.saveConfig();

    // Gọi hàm điều chỉnh viewport
    setCustomViewportHeight();
    window.addEventListener('resize', setCustomViewportHeight);
    window.addEventListener('orientationchange', setCustomViewportHeight);

    // Khởi tạo Vue app
    this.app = createApp(App);
    this.app.use(router);
    this.app.mount(`#${this.config.containerId}`);

    this.initialized = true;
    return this;
  }

  // Mở LiveChat
  open() {
    const event = new CustomEvent('vippromax-livechat-open');
    window.dispatchEvent(event);
    return this;
  }

  // Đóng LiveChat
  close() {
    const event = new CustomEvent('vippromax-livechat-close');
    window.dispatchEvent(event);
    return this;
  }

  // Cập nhật cấu hình LiveChat
  updateConfig(newConfig) {
    this.config = { ...this.config, ...newConfig };
    this.saveConfig();

    const event = new CustomEvent('vippromax-livechat-config-update', {
      detail: this.config,
    });
    window.dispatchEvent(event);
    return this;
  }
}

// Export tự động khởi tạo LiveChat nếu script được loaded trực tiếp
if (typeof window !== 'undefined') {
  // Tạo global object
  window.VippromaxLiveChat = {
    // Singleton instance
    _instance: null,

    // Phương thức khởi tạo
    init(config) {
      if (!this._instance) {
        this._instance = new LiveChatWidget(config).init();
      }
      return this._instance;
    },

    // Proxy các phương thức khác từ instance
    open() {
      return this._instance?.open();
    },

    close() {
      return this._instance?.close();
    },

    updateConfig(config) {
      return this._instance?.updateConfig(config);
    },
  };

  // Tự động khởi tạo nếu có data-auto-init="true"
  const script = document.currentScript;
  if (script && script.getAttribute('data-auto-init') === 'true') {
    // Lấy các thuộc tính từ data attributes
    const config = {
      themeColor: script.getAttribute('data-theme-color') || '#3b82f6',
      position: script.getAttribute('data-position') || 'right',
      businessName: script.getAttribute('data-business-name') || 'LiveChat',
    };

    // Khởi tạo widget sau khi DOM loaded
    document.addEventListener('DOMContentLoaded', () => {
      window.VippromaxLiveChat.init(config);
    });
  }
}

// Export class cho import trực tiếp
export default LiveChatWidget;
