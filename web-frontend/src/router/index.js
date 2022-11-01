import { createRouter, createWebHistory } from "vue-router";
import LoginView from "@/views/LoginView";
import SignupView from "@/views/SignupView";
import AdminView from "@/views/AdminView";
import AdminEmployeesComponent from "@/components/AdminEmployeesComponent";
import AdminServiceTypesComponent from "@/components/AdminServiceTypesComponent";

const routes = [
    { path: '/', name: 'Home', component: LoginView },
    { path: '/login', name: 'Login', component: LoginView },
    { path: '/signup', name: 'Signup', component: SignupView },
    { path: '/admin', name: 'Admin', component: AdminView,
        children: [
            { path: 'employees', name: 'AdminEmployees', component: AdminEmployeesComponent },
            { path: 'service-types', name: 'AdminServiceTypes', component: AdminServiceTypesComponent },
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
