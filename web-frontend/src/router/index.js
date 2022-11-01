import { createRouter, createWebHistory } from "vue-router";
import LoginView from "@/views/LoginView";
import SignupView from "@/views/SignupView";
import AdminView from "@/views/AdminView";

const routes = [
    { path: '/', name: 'Home', component: LoginView },
    { path: '/login', name: 'Login', component: LoginView },
    { path: '/signup', name: 'Signup', component: SignupView },
    { path: '/admin', name: 'Admin', component: AdminView },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
