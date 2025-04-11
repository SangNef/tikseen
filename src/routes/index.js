import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@landing/views/Home/index.vue";
import About from "@landing/views/About/index.vue";
import Activity from "@landing/views/Activity/index.vue";
import Development from "@landing/views/Development/index.vue";
import Relation from "@landing/views/Relation/index.vue";
import Event from "@landing/views/Event/index.vue";
import Contact from "@landing/views/Contact/index.vue";

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
        path: "/gioi-thieu",
        name: "About",
        component: About,
        meta: {
            layout: "DefaultLayout",
        },
    },
    {
        path: "/linh-vuc-hoat-dong/:pathMatch(.*)*",
        name: "Activity",
        component: Activity,
        meta: {
            layout: "DefaultLayout",
        },
    },
    {
        path: "/phat-trien-ben-vung",
        name: "Development",
        component: Development,
        meta: {
            layout: "DefaultLayout",
        },
    },
    {
        path: "/quan-he-co-dong",
        name: "Relation",
        component: Relation,
        meta: {
            layout: "DefaultLayout",
        },
    },
    {
        path: "/tin-tuc-su-kien/:cate?",
        name: "Event",
        component: Event,
        meta: {
            layout: "DefaultLayout",
        },
    },
    {
        path: "/lien-he",
        name: "Contact",
        component: Contact,
        meta: {
            layout: "DefaultLayout",
        },
    }
];

const router = createRouter({
    history: createWebHistory('/landing'),
    routes,
});

export default router;
