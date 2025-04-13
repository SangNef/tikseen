import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@landing/views/Home/index.vue";
import About from "@landing/views/About/index.vue";
import Activity from "@landing/views/Activity/index.vue";
import Development from "@landing/views/Development/index.vue";
import Relation from "@landing/views/Relation/index.vue";
import Event from "@landing/views/Event/index.vue";
import Contact from "@landing/views/Contact/index.vue";

import Login from "@landing/views/Auth/Login.vue";
import HomeClub from "@landing/views/Club/Home/index.vue";
import TransactionView  from "@landing/views/Club/Transaction/index.vue";
import WelfareView from "@landing/views/Club/Home/welfare.vue";
import AwardView from "@landing/views/Club/Home/Award.vue";
import TargetView from "@landing/views/Club/Home/Target.vue";
import ProductView from "@landing/views/Club/Home/Product.vue";
import ProjectView from "@landing/views/Club/Home/Project.vue";
import ProjectDetail from "@landing/views/Club/Home/ProjectDetail.vue";
import BiddingView from "@landing/views/Club/Home/Bidding.vue";
import InvestReason from "@landing/views/Club/Home/InvestReason.vue";
import NewsView from "@landing/views/Club/Home/News.vue";
import AccountView from "@landing/views/Club/Account/index.vue";
import RegisterView from "@landing/views/Auth/Register.vue";
import ProfitView from "@landing/views/Club/Account/Profit.vue";
import BankView from "@landing/views/Club/Account/Bank.vue";
import PasswordView from "@landing/views/Club/Account/Password.vue";
import MoneyView from "@landing/views/Club/Account/Money.vue";
import RechargeView from "@landing/views/Club/Account/Recharge.vue";
import WithdrawalView from "@landing/views/Club/Account/Withdrawal.vue";
import NotifyView from "@landing/views/Club/Home/Notify.vue";

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
    },
    {
        path: "/$/login",
        name: "Login",
        component: Login,
        meta: {
            layout: "AuthLayout",
        },
    },
    {
        path: "/$/home",
        name: "HomeClub",
        component: HomeClub,
        meta: {
            layout: "ClubLayout",
        },
    },
    ,
    {
        path: "/$/transactions",
        name: "Transaction",
        component: TransactionView,
        meta: {
            layout: "ClubLayout",
        },
    },
    {
        path: "/$/account/welfare",
        name: "Welfare",
        component: WelfareView,
        meta: {
            layout: "ClubLayout",
        },
    },
    {
        path: "/$/account/award",
        name: "Award",
        component: AwardView,
        meta: {
            layout: "ClubLayout",
        },
    },
    {
        path: "/$/account/targets",
        name: "Target",
        component: TargetView,
        meta: {
            layout: "ClubLayout",
        },
    },
    {
        path: "/$/account/product",
        name: "Product",
        component: ProductView,
        meta: {
            layout: "ClubLayout",
        },
    },
    {
        path: "/$/account/project",
        name: "Project",
        component: ProjectView,
        meta: {
            layout: "ClubLayout",
        },
    },
    {
        path: "/$/detail-item/:id",
        name: "ProjectDetail",
        component: ProjectDetail,
        meta: {
            layout: "ClubLayout",
        },
    },
    {
        path: "/$/bidding",
        name: "Bidding",
        component: BiddingView,
        meta: {
            layout: "ClubLayout",
        },
    },
    {
        path: "/$/account/invest-reason",
        name: "InvestReason",
        component: InvestReason,
        meta: {
            layout: "ClubLayout",
        },
    },
    {
        path: "/$/account/news",
        name: "News",
        component: NewsView,
        meta: {
            layout: "ClubLayout",
        },
    },
    {
        path: "/$/account/mine",
        name: "Account",
        component: AccountView,
        meta: {
            layout: "ClubLayout",
        },
    },
    {
        path: "/$/register",
        name: "Register",
        component: RegisterView,
        meta: {
            layout: "AuthLayout",
        },
    },
    {
        path: "/$/account/profit",
        name: "Profit",
        component: ProfitView,
        meta: {
            layout: "ClubLayout",
        },
    },
    {
        path: "/$/account/bank",
        name: "Bank",
        component: BankView,
        meta: {
            layout: "ClubLayout",
        },
    },
    {
        path: "/$/account/password",
        name: "Password",
        component: PasswordView,
        meta: {
            layout: "ClubLayout",
        },
    },
    {
        path: "/$/account/history-project",
        name: "HistoryProject",
        component: MoneyView,
        meta: {
            layout: "ClubLayout",
        },
    },
    {
        path: "/$/account/recharge",
        name: "Recharge",
        component: RechargeView,
        meta: {
            layout: "ClubLayout",
        },
    },
    {
        path: "/$/account/withdrawal",
        name: "Withdrawal",
        component: WithdrawalView,
        meta: {
            layout: "ClubLayout",
        },
    },
    {
        path: "/$/notification",
        name: "Notify",
        component: NotifyView,
        meta: {
            layout: "ClubLayout",
        },
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
