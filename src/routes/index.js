import { createRouter, createWebHistory } from "vue-router";
import LoginView from "@/views/Auth/login.vue";
import SignupView from "@/views/Auth/Signup.vue";
import ForgotPasswordView from "@/views/Auth/ForgotPassword.vue";
import HomeView from "@/views/Home/index.vue";
import ResultView from "@/views/Result/index.vue";
import ContentView from "@/views/Content/index.vue";
import ServiceView from "@/views/Service/index.vue";
import ProfileView from "@/views/Profile/index.vue";
import GameView from "@/views/Game/index.vue";
import BankView from "@/views/Profile/Bank.vue";
import TransactionRecordView from "@/views/Profile/TransactionRecord.vue";
import BettingRecordView from "@/views/Profile/BettingRecord.vue";
import PersonalReportView from "@/views/Profile/PersonalReport.vue";
import InfoView from "@/views/Profile/Info.vue";
import AccountLevelView from "@/views/Profile/AccountLevel.vue";
import ChangePasswordView from "@/views/Profile/ChangePassword.vue";
import DetailView from "@/views/Profile/Detail.vue";
import CustomColorView from "@/views/Profile/CustomColor.vue";
import CustomBetView from "@/views/Profile/CustomBet.vue";
import CustomNotificationView from "@/views/Profile/CustomNotification.vue";
import LanguageView from "@/views/Profile/Language.vue";
import MessageView from "@/views/Profile/Message.vue";
import AboutUsView from "@/views/Profile/AboutUs.vue";
import GameRulesView from "@/views/GameRule/index.vue"
import AwardDescriptionView from "../views/GameRule/AwardDescription.vue";
import GameHistoryView from "../views/GameRule/GameHistory.vue";

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
        path: "/forgot-password",
        name: "ForgotPassword",
        component: ForgotPasswordView,
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
    },
    {
        path: "/my-bank",
        name: "Bank",
        component: BankView,
    },
    {
        path: "/transaction-record-page",
        name: "TransactionRecord",
        component: TransactionRecordView,
    },
    {
        path: "/betting-record-page",
        name: "BettingRecord",
        component: BettingRecordView,
    },
    {
        path: "/personal-report-page",
        name: "PersonalReport",
        component: PersonalReportView,
    },
    {
        path: "/my-account-info",
        name: "Info",
        component: InfoView,
    },
    {
        path: "/my-account-info-level",
        name: "AccountLevel",
        component: AccountLevelView,
    },
    {
        path: "/my-account-info-password",
        name: "ChangePassword",
        component: ChangePasswordView
    },
    {
        path: "/my-account-info-detail",
        name: "Detail",
        component: DetailView
    },
    {
        path: "/customColor",
        name: "CustomColor",
        component: CustomColorView
    },
    {
        path: "/custom-bet-values",
        name: "CustomBet",
        component: CustomBetView
    },
    {
        path: "/custom-notifications",
        name: "CustomNotification",
        component: CustomNotificationView
    },
    {
        path: "/language-switch",
        name: "Language",
        component: LanguageView
    },
    {
        path: "/message",
        name: "Message",
        component: MessageView
    },
    {
        path: "/docDetail",
        name: "AboutUs",
        component: AboutUsView
    },
    {
        path: "/gameRules",
        name: "GameRules",
        component: GameRulesView
    },
    {
        path: "/gaiaAwardDescriptionPage",
        name: "AwardDescription",
        component: AwardDescriptionView
    },
    {
        path: "/games-history",
        name: "GameHistory",
        component: GameHistoryView
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
