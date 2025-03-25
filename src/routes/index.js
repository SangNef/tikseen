import { createRouter, createWebHistory } from "vue-router";
import LoginView from "@/views/Auth/login.vue";
import SignupView from "@/views/Auth/Signup.vue";
import HomeView from "@/views/Home/index.vue";
import ResultView from "@/views/Result/index.vue";
import ContentView from "@/views/Content/index.vue";
import ServiceView from "@/views/Service/index.vue";
import ProfileView from "@/views/Profile/index.vue";
import GameView from "@/views/Game/index.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: HomeView,
        meta: {
            layout: "DefaultLayout",
        },
    },
    {
        path: "/login",
        name: "Login",
        component: LoginView,
        meta: {
            layout: "AuthLayout",
        },
    },
    {
        path: "/signup",
        name: "Signup",
        component: SignupView,
        meta: {
            layout: "AuthLayout",
        },
    },
    {
        path: "/result",
        name: "Result",
        component: ResultView,
        meta: {
            layout: "DefaultLayout",
        },
    },
    {
        path: "/content",
        name: "Content",
        component: ContentView,
        meta: {
            layout: "DefaultLayout",
        },
    },
    {
        path: "/support",
        name: "Service",
        component: ServiceView,
        meta: {
            layout: "DefaultLayout",
        },
    },
    {
        path: "/profile",
        name: "Profile",
        component: ProfileView,
        meta: {
            layout: "DefaultLayout",
        },
    },
    {
        path: "/games",
        name: "Game",
        component: GameView,
        meta: {
            layout: null,
        },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
