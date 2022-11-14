import { createRouter, createWebHistory } from "vue-router";
import LoginView from "@/views/LoginView";
import SignupView from "@/views/SignupView";
import AdminView from "@/views/AdminView";
import CustomerServiceListView from "@/views/CustomerServiceListView";
import CustomerServiceDetailsView from "@/views/CustomerServiceDetailsView";
import EmployeesListComponent from "@/components/EmployeesListComponent";
import ServiceTypesListComponent from "@/components/ServiceTypesListComponent";
import AdminsListComponent from "@/components/AdminsListComponent";

const routes = [
    { path: '/', name: 'Home', component: LoginView },
    { path: '/login', name: 'Login', component: LoginView },
    { path: '/signup', name: 'Signup', component: SignupView },
    { path: '/admin', name: 'Admin', component: AdminView,
        children: [
            { path: '', redirect: { name: 'AdminEmployees' } },
            { path: 'employees', name: 'AdminEmployees', component: EmployeesListComponent },
            { path: 'service-types', name: 'AdminServiceTypes', component: ServiceTypesListComponent },
        ]
    },
    { path: '/owner', name: 'OwnerCustomerServiceList', component: CustomerServiceListView },
    { path: '/owner/customer-service/:id', name: 'OwnerCustomerServiceDetails', component: CustomerServiceDetailsView,
        children: [
            { path: '', redirect: { name: 'OwnerEmployeesList' } },
            { path: 'employees', name: 'OwnerEmployeesList', component: EmployeesListComponent },
            { path: 'service-types', name: 'OwnerServiceTypesList', component: ServiceTypesListComponent },
            { path: 'administrators', name: 'OwnerAdministratorsList', component: AdminsListComponent },
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
