import { createRouter, createWebHistory } from 'vue-router';

// Lazy loading các component
const Login = () => import('@/views/Auth/Login.vue');
const Register = () => import('@/views/Auth/Register.vue');
const Chat = () => import('@/views/Chat/index.vue');
const Setting = () => import('@/views/Setting/index.vue');
const BubbleChat = () => import('@/views/BubbleChat/index.vue');
const Stats = () => import('@/views/Stats/index.vue');
const Users = () => import('@/views/Users/index.vue');
const UserDetail = () => import('@/views/Users/UserDetail.vue');
const UserEdit = () => import('@/views/Users/UserEdit.vue');
const ChatPage = () => import('@/views/BubbleChat/ChatPage.vue');

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      layout: 'AuthLayout',
    },
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      layout: 'AuthLayout',
    },
  },
  {
    path: '/',
    name: 'Chat',
    component: Chat,
    meta: {
      layout: 'DefaultLayout',
    },
  },
  {
    path: '/settings',
    name: 'Setting',
    component: Setting,
    meta: {
      layout: 'DefaultLayout',
    },
  },
  {
    path: '/stats',
    name: 'Stats',
    component: Stats,
    meta: {
      layout: 'DefaultLayout',
    },
  },
  {
    path: '/users',
    name: 'Users',
    component: Users,
    meta: {
      layout: 'DefaultLayout',
    },
  },
  {
    path: '/users/:id',
    name: 'UserDetail',
    component: UserDetail,
    meta: {
      layout: 'DefaultLayout',
    },
  },
  {
    path: '/users/:id/edit',
    name: 'UserEdit',
    component: UserEdit,
    meta: {
      layout: 'DefaultLayout',
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

export default router;
