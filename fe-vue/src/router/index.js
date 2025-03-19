import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '~/layouts/MainLayout.vue'
import { Fragment } from 'vue'

// Tạo middleware tương tự với PublicRouter trong React
const publicRouteMiddleware = (to, from, next) => {
  const token = localStorage.getItem('accessToken')
  if (token) {
    return next('/')
  }
  return next()
}

const routes = [
  {
    path: '/',
    component: () => import('~/pages/Home.vue'),
    meta: {
      layout: MainLayout
    },
    beforeEnter: publicRouteMiddleware
  },
  {
    path: '/event',
    component: () => import('~/pages/Event.vue'),
    meta: {
      layout: MainLayout
    },
    beforeEnter: publicRouteMiddleware
  },
  {
    path: '/review',
    component: () => import('~/pages/Review.vue'),
    meta: {
      layout: MainLayout
    },
    beforeEnter: publicRouteMiddleware
  },
  {
    path: '/mypage',
    component: () => import('~/pages/Profile.vue'),
    meta: {
      layout: MainLayout
    },
    beforeEnter: publicRouteMiddleware
  },
  {
    path: '/signup',
    component: () => import('~/pages/Signup.vue'),
    meta: {
      layout: MainLayout
    },
    beforeEnter: publicRouteMiddleware
  },
  {
    path: '/history',
    component: () => import('~/pages/History.vue'),
    meta: {
      layout: MainLayout
    },
    beforeEnter: publicRouteMiddleware
  },
  {
    path: '/mypage/bind',
    component: () => import('~/pages/Bind.vue'),
    meta: {
      layout: MainLayout
    },
    beforeEnter: publicRouteMiddleware
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Xử lý Layout tương tự React
router.beforeEach((to, from, next) => {
  const Layout = to.meta.layout || Fragment
  to.meta.Layout = Layout
  next()
})

export default router 