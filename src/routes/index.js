import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@client/views/Home/index.vue";
import EventView from "@client/views/Event/index.vue";
import ReviewView from "@client/views/Review/index.vue";
import ProfileView from "@client/views/Profile/index.vue";
import HistoryView from "@client/views/Profile/History.vue";
import BindView from "@client/views/Profile/Bind.vue";
import SignupView from "@client/views/Profile/Signup.vue";
import LoginView from "@client/views/Profile/Login.vue";

const routes = [
    {
        path: "/",
        component: HomeView,
        meta: { layout: "DefaultLayout" },
    },
    {
        path: "/event",
        component: EventView,
        meta: { layout: "DefaultLayout" },
    },
    {
        path: "/review",
        component: ReviewView,
        meta: { layout: "DefaultLayout" },
    },
    {
        path: "/mypage",
        component: ProfileView,
        meta: { layout: "DefaultLayout" },
    },
    {
        path: "/history",
        component: HistoryView,
        meta: { layout: "DefaultLayout" },
    },
    {
        path: "/mypage/bind",
        component: BindView,
        meta: { layout: "DefaultLayout" },
    },
    {
        path: "/signup",
        component: SignupView,
        meta: { layout: "DefaultLayout" },
    },
    {
        path: "/login",
        component: LoginView,
        meta: { layout: "DefaultLayout" },
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
