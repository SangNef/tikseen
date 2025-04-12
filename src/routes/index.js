import { createRouter, createWebHistory } from "vue-router";

import Login from "@/views/Auth/Login.vue";
import Register from "@/views/Auth/Register.vue";
import Chat from "@/views/Chat/index.vue";
import Setting from "@/views/Setting/index.vue";

const routes = [
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: {
            layout: "AuthLayout",
        },
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;