import { createRouter, createWebHistory } from 'vue-router';

import Login from '@/views/Auth/Login.vue';
import Register from '@/views/Auth/Register.vue';
import Chat from '@/views/Chat/index.vue';
import Setting from '@/views/Setting/index.vue';
import BubbleChat from '@/views/BubbleChat/index.vue';
import Stats from '@/views/Stats/index.vue';
import Users from '@/views/Users/index.vue';
import UserDetail from '@/views/Users/UserDetail.vue';
import UserEdit from '@/views/Users/UserEdit.vue';

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
