import { createRouter, createWebHistory } from "vue-router";
import LoginView from "@/views/LoginView";
import SignupView from "@/views/SignupView";
import AdminView from "@/views/AdminView";
import AdminEmployeesComponent from "@/components/EmployeesListComponent";
import AdminServiceTypesComponent from "@/components/ServiceTypesListComponent";
import CustomerServiceListView from "@/views/CustomerServiceListView";
import CustomerServiceDetailsView from "@/views/CustomerServiceDetailsView";

const routes = [
    { path: '/', name: 'Home', component: LoginView },
    { path: '/login', name: 'Login', component: LoginView },
    { path: '/signup', name: 'Signup', component: SignupView },
    { path: '/admin', name: 'Admin', component: AdminView,
        children: [
            { path: '', redirect: { name: 'AdminEmployees' } },
            { path: 'employees', name: 'AdminEmployees', component: AdminEmployeesComponent },
            { path: 'service-types', name: 'AdminServiceTypes', component: AdminServiceTypesComponent },
        ]
    },
    { path: '/owner', name: 'OwnerCustomerServiceList', component: CustomerServiceListView },
    { path: '/owner/customer-service', name: 'OwnerCustomerServiceDetails', component: CustomerServiceDetailsView,
        children: [
            { path: '', redirect: { name: 'OwnerEmployeesList' } },
            { path: 'employees', name: 'OwnerEmployeesList', component: AdminEmployeesComponent },
            { path: 'service-types', name: 'OwnerServiceTypesList', component: AdminServiceTypesComponent },
            { path: 'administrators', name: 'OwnerAdministratorsList', component: AdminServiceTypesComponent },
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
