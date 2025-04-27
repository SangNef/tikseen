import { createApp } from 'vue';
import App from './App.vue';
import router from './routes';
import './style.css';
import './styles/theme.css';

import Vue3Toastify from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

import { toast } from 'vue3-toastify';

import { supabase } from './helpers';

// Thêm hàm điều chỉnh viewport height để tối ưu trên mobile
function setCustomViewportHeight() {
  // // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  const vh = window.innerHeight;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  // Get the viewport height and set the value in the --vh custom property to the root of the document
  // document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
  // document.documentElement.style.setProperty('--vh', `${window.visualViewport.height}px`);
}

// Gọi hàm một lần khi app khởi động
setCustomViewportHeight();

// Thêm event listener cho resize và orientationchange
window.addEventListener('resize', setCustomViewportHeight);
window.addEventListener('orientationchange', setCustomViewportHeight);

const app = createApp(App);

// Kiểm tra người dùng đã lưu trong localStorage khi tải trang
const checkSavedUser = () => {
  try {
    const savedUserData = localStorage.getItem('livechat_user_data');
    if (savedUserData) {
      const userData = JSON.parse(savedUserData);
      // Kiểm tra thời gian lưu, nếu trong thời gian hợp lệ (ví dụ 1 ngày)
      const lastSaved = new Date(userData.lastSaved);
      const now = new Date();
      const diffTime = Math.abs(now - lastSaved);
      const diffDays = diffTime / (1000 * 60 * 60 * 24);

      // Nếu thông tin user lưu trong vòng 1 ngày, có thể sử dụng trước khi session được kiểm tra
      if (diffDays < 1) {
        return userData;
      }
    }
    return null;
  } catch (error) {
    console.error('Lỗi khi đọc thông tin user từ localStorage:', error);
    return null;
  }
};

// Kiểm tra phiên Supabase khi tải trang
const checkSupabaseSession = async () => {
  try {
    const { data, error } = await supabase.auth.getSession();

    if (error) {
      console.error('Lỗi khi kiểm tra phiên Supabase:', error.message);
      return null;
    }

    if (data && data.session) {
      console.log('Phiên Supabase hợp lệ');

      // Lưu thông tin user vào localStorage để sử dụng nhanh hơn
      if (data.session.user) {
        const userToSave = {
          ...data.session.user,
          lastSaved: new Date().toISOString(),
        };
        localStorage.setItem('livechat_user_data', JSON.stringify(userToSave));
      }

      return data.session.user;
    } else {
      console.log('Không có phiên Supabase hợp lệ');
      return null;
    }
  } catch (error) {
    console.error('Lỗi khi kiểm tra phiên Supabase:', error);
    return null;
  }
};

// Xử lý auth state trước khi mount
supabase.auth.onAuthStateChange((event, session) => {
  if (event === 'SIGNED_IN' && session) {
    // Điều hướng sau khi đăng nhập thành công
    router.push('/');
  } else if (event === 'SIGNED_OUT') {
    // Điều hướng sau khi đăng xuất
    router.push('/auth/login');
  }
});

app.use(router);
app.use(Vue3Toastify, {
  autoClose: 5000,
  // theme: 'colored',
  transition: 'bounce',
  pauseOnHover: true,
  pauseOnFocusLoss: true,
});

window.toast = toast;

// Khởi tạo ứng dụng sau khi kiểm tra trạng thái xác thực
(async () => {
  try {
    // Kiểm tra người dùng từ localStorage trước
    const savedUser = checkSavedUser();

    if (savedUser) {
      console.log('Sử dụng thông tin người dùng đã lưu từ localStorage');
    }

    // Kiểm tra phiên Supabase
    const supabaseUser = await checkSupabaseSession();

    if (supabaseUser) {
      console.log('Người dùng đã đăng nhập với Supabase:', supabaseUser.email);
    } else if (!savedUser) {
      // Nếu không có thông tin người dùng nào, chuyển hướng đến trang đăng nhập
      console.log('Không có thông tin người dùng, chuyển hướng đến trang đăng nhập');
      router.push('/auth/login');
    }

    // Mount ứng dụng sau khi kiểm tra
    app.mount('#app');
  } catch (error) {
    console.error('Lỗi khởi tạo ứng dụng:', error);

    // Mount ứng dụng trong mọi trường hợp để tránh treo trang
    app.mount('#app');
  }
})();
