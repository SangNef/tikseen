import { createRouter, createWebHistory } from 'vue-router';
import { supabase } from '@/helpers';

// Lazy loading các component
const Login = () => import('@/views/Auth/Login.vue');
const Register = () => import('@/views/Auth/Register.vue');
const Chat = () => import('@/views/Chat/index.vue');
const Setting = () => import('@/views/Setting/index.vue');
const CreateOrganization = () => import('@/views/Setting/CreateOrganization.vue');
const BubbleChat = () => import('@/views/BubbleChat/index.vue');
const Stats = () => import('@/views/Stats/index.vue');
const Users = () => import('@/views/Users/index.vue');
const UserDetail = () => import('@/views/Users/UserDetail.vue');
const UserEdit = () => import('@/views/Users/UserEdit.vue');
const ChatPage = () => import('@/views/BubbleChat/ChatPage.vue');

// Auth Guard component
const AuthGuard = () => import('@/components/Auth/AuthGuard.vue');

const routes = [
  {
    path: '/auth/login',
    name: 'Login',
    component: Login,
    meta: {
      layout: 'AuthLayout',
      guest: true,
    },
  },
  {
    path: '/auth/register',
    name: 'Register',
    component: Register,
    meta: {
      layout: 'AuthLayout',
      guest: true,
    },
  },
  {
    path: '/create-organization',
    name: 'CreateOrganization',
    component: CreateOrganization,
    meta: {
      layout: 'AuthLayout',
      requiresAuth: true,
    },
  },
  {
    path: '/',
    name: 'Chat',
    component: Chat,
    meta: {
      layout: 'DefaultLayout',
      requiresAuth: true,
    },
  },
  {
    path: '/settings',
    name: 'Setting',
    component: Setting,
    meta: {
      layout: 'DefaultLayout',
      requiresAuth: true,
    },
  },
  {
    path: '/stats',
    name: 'Stats',
    component: Stats,
    meta: {
      layout: 'DefaultLayout',
      requiresAuth: true,
    },
  },
  {
    path: '/users',
    name: 'Users',
    component: Users,
    meta: {
      layout: 'DefaultLayout',
      requiresAuth: true,
    },
  },
  {
    path: '/users/:id',
    name: 'UserDetail',
    component: UserDetail,
    meta: {
      layout: 'DefaultLayout',
      requiresAuth: true,
    },
  },
  {
    path: '/users/:id/edit',
    name: 'UserEdit',
    component: UserEdit,
    meta: {
      layout: 'DefaultLayout',
      requiresAuth: true,
    },
  },
  {
    path: '/chat',
    name: 'BubbleChat',
    component: BubbleChat,
  },
  {
    path: '/chat-page/:id',
    name: 'ChatPage',
    component: ChatPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Bảo vệ các route yêu cầu xác thực
router.beforeEach(async (to, from, next) => {
  // Chuyển hướng đến trang đăng nhập nếu không có phiên hợp lệ và route yêu cầu xác thực
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    try {
      // Kiểm tra trạng thái xác thực từ Supabase trước
      const { data, error } = await supabase.auth.getSession();

      if (data && data.session) {
        // Nếu có phiên Supabase hợp lệ, cho phép truy cập
        console.log('Phiên Supabase hợp lệ trong router guard');
        next();
        return;
      }

      // Nếu không có phiên Supabase, kiểm tra từ localStorage
      const savedUserData = localStorage.getItem('livechat_user_data');
      if (savedUserData) {
        try {
          const userData = JSON.parse(savedUserData);
          // Kiểm tra thời gian lưu, nếu còn hợp lệ
          const lastSaved = new Date(userData.lastSaved);
          const now = new Date();
          const diffTime = Math.abs(now - lastSaved);
          const diffHours = diffTime / (1000 * 60 * 60);

          // Nếu thông tin user lưu trong vòng 24 giờ, cho phép truy cập
          if (diffHours < 24) {
            console.log('Sử dụng thông tin user từ localStorage trong router guard');
            next();
            return;
          } else {
            console.log('Thông tin user từ localStorage đã hết hạn');
            localStorage.removeItem('livechat_user_data');
          }
        } catch (parseError) {
          console.error('Lỗi khi phân tích thông tin user từ localStorage:', parseError);
          localStorage.removeItem('livechat_user_data');
        }
      }

      // Nếu không có thông tin xác thực hợp lệ, chuyển hướng đến trang đăng nhập
      console.log('Không tìm thấy thông tin xác thực, chuyển hướng đến trang đăng nhập');
      next({ path: '/auth/login', query: { redirect: to.fullPath } });
    } catch (error) {
      console.error('Lỗi khi kiểm tra xác thực:', error);
      next({ path: '/auth/login', query: { error: 'auth_error', redirect: to.fullPath } });
    }
  } else if (to.matched.some((record) => record.meta.guest)) {
    // Kiểm tra nếu đang truy cập route dành cho khách nhưng đã đăng nhập
    try {
      // Kiểm tra từ Supabase trước
      const { data } = await supabase.auth.getSession();

      if (data && data.session) {
        // Nếu đã đăng nhập và cố gắng truy cập trang guest, chuyển hướng đến trang chính
        console.log('Người dùng đã đăng nhập, chuyển hướng từ trang guest');
        next({ name: 'Chat' });
        return;
      }

      // Kiểm tra từ localStorage
      const savedUserData = localStorage.getItem('livechat_user_data');
      if (savedUserData) {
        const userData = JSON.parse(savedUserData);
        const lastSaved = new Date(userData.lastSaved);
        const now = new Date();
        const diffHours = Math.abs(now - lastSaved) / (1000 * 60 * 60);

        if (diffHours < 24) {
          // Nếu có thông tin user hợp lệ, chuyển hướng đến trang chính
          next({ name: 'Chat' });
          return;
        }
      }

      // Nếu không tìm thấy thông tin đăng nhập, cho phép truy cập trang guest
      next();
    } catch (error) {
      console.error('Lỗi khi kiểm tra trang guest:', error);
      next();
    }
  } else {
    next();
  }
});

export default router;
