import { createRouter, createWebHistory } from "vue-router";
import LoginView from "@/views/LoginView";
import SignupView from "@/views/SignupView";

const routes = [
    { path: '/', name: 'Home', component: LoginView },
    { path: '/login', name: 'Login', component: LoginView },
    { path: '/signup', name: 'Signup', component: SignupView },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
