import { createRouter, createWebHistory } from 'vue-router';

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
  // Chuyển hướng đến trang đăng nhập nếu không có sessionstorage isLogin và route yêu cầu xác thực
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // Xử lý xác thực được xử lý trong AuthGuard component
    next();
  } else if (to.matched.some((record) => record.meta.guest) && localStorage.getItem('isLoginin')) {
    // Nếu người dùng đã đăng nhập và cố gắng truy cập trang guest, chuyển hướng đến trang chính
    next({ name: 'Chat' });
  } else {
    next();
  }
});

export default router;
