import { createRouter, createWebHistory } from "vue-router";
import LoginView from "@client/views/Auth/login.vue";
import SignupView from "@client/views/Auth/Signup.vue";
import HomeView from "@client/views/Home/index.vue";
import ResultView from "@client/views/Result/index.vue";
import ContentView from "@client/views/Content/index.vue";
import ServiceView from "@client/views/Service/index.vue";
import ProfileView from "@client/views/Profile/index.vue";
import GameView from "@client/views/Game/index.vue";

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
