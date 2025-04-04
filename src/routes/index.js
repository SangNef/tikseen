import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/Home/index.vue";
import TransactionView  from "@/views/Transaction/index.vue";
import WelfareView from "@/views/Home/welfare.vue";
import AwardView from "@/views/Home/Award.vue";
import TargetView from "@/views/Home/Target.vue";
import ProductView from "@/views/Home/Product.vue";
import ProjectView from "../views/Home/Project.vue";
import ProjectDetail from "../views/Home/ProjectDetail.vue";
import BiddingView from "../views/Home/Bidding.vue";
import InvestReason from "../views/Home/InvestReason.vue";
import NewsView from "../views/Home/News.vue";
import AccountView from "@/views/Account/index.vue";
import LoginView from "../views/Auth/Login.vue";
import RegisterView from "../views/Auth/Register.vue";
import ProfitView from "../views/Account/Profit.vue";
import BankView from "../views/Account/Bank.vue";
import PasswordView from "../views/Account/Password.vue";
import MoneyView from "../views/Account/Money.vue";
import RechargeView from "../views/Account/Recharge.vue";
import WithdrawalView from "../views/Account/Withdrawal.vue";

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
        path: "/transactions",
        name: "Transaction",
        component: TransactionView,
        meta: {
            layout: "DefaultLayout",
        },
    },
    {
        path: "/account/welfare",
        name: "Welfare",
        component: WelfareView,
        meta: {
            layout: "DefaultLayout",
        },
    },
    {
        path: "/account/award",
        name: "Award",
        component: AwardView,
        meta: {
            layout: "DefaultLayout",
        },
    },
    {
        path: "/account/targets",
        name: "Target",
        component: TargetView,
        meta: {
            layout: "DefaultLayout",
        },
    },
    {
        path: "/account/product",
        name: "Product",
        component: ProductView,
        meta: {
            layout: "DefaultLayout",
        },
    },
    {
        path: "/account/project",
        name: "Project",
        component: ProjectView,
        meta: {
            layout: "DefaultLayout",
        },
    },
    {
        path: "/detail-item/:id",
        name: "ProjectDetail",
        component: ProjectDetail,
        meta: {
            layout: "DefaultLayout",
        },
    },
    {
        path: "/bidding",
        name: "Bidding",
        component: BiddingView,
        meta: {
            layout: "DefaultLayout",
        },
    },
    {
        path: "/account/invest-reason",
        name: "InvestReason",
        component: InvestReason,
        meta: {
            layout: "DefaultLayout",
        },
    },
    {
        path: "/account/news",
        name: "News",
        component: NewsView,
        meta: {
            layout: "DefaultLayout",
        },
    },
    {
        path: "/account/mine",
        name: "Account",
        component: AccountView,
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
        path: "/register",
        name: "Register",
        component: RegisterView,
        meta: {
            layout: "AuthLayout",
        },
    },
    {
        path: "/account/profit",
        name: "Profit",
        component: ProfitView,
        meta: {
            layout: "DefaultLayout",
        },
    },
    {
        path: "/account/bank",
        name: "Bank",
        component: BankView,
        meta: {
            layout: "DefaultLayout",
        },
    },
    {
        path: "/account/password",
        name: "Password",
        component: PasswordView,
        meta: {
            layout: "DefaultLayout",
        },
    },
    {
        path: "/account/history-project",
        name: "HistoryProject",
        component: MoneyView,
        meta: {
            layout: "DefaultLayout",
        },
    },
    {
        path: "/account/recharge",
        name: "Recharge",
        component: RechargeView,
        meta: {
            layout: "DefaultLayout",
        },
    },
    {
        path: "/account/withdrawal",
        name: "Withdrawal",
        component: WithdrawalView,
        meta: {
            layout: "DefaultLayout",
        },
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
