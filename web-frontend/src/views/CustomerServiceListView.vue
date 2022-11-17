<template>
  <!--logout link-->
  <router-link :to="'/login'" class="logout-link"><u>Log out</u></router-link>
  <!--main content-->
  <div class="owner-view-wrapper">
    <!--list title-->
    <h1>Customer services</h1>
    <div class="list-wrapper list-height">
      <!--list content-->
      <div class="customer-service-list-items-wrapper">
        <div class="customer-service-list-item mt-3" v-for="(customerService, index) in customerServices" :key="customerService.id">
          <div class="customer-service-list-name" @click="onCustomerServiceClick(index)">{{ customerService.name }}</div>
          <div class="list-trash-icon-wrapper">
            <img class="list-trash-icon" src="/icons/trash.svg" @click="onDeleteCustomerService(index)"/>
          </div>
        </div>
      </div>
      <!--list add button-->
      <div class="list-add-button-wrapper">
        <ButtonComponent class="mt-6" text="Add new customer service" @button-click="this.dialog = true;"></ButtonComponent>
      </div>
    </div>
  </div>

  <AddCustomerServiceDialog v-model="dialog" @close-dialog="dialog = false" @add-customer-service="onAddCustomerService"></AddCustomerServiceDialog>
</template>

<script>
import { ServiceType } from "@/models/service-type-model";
import { Employee } from "@/models/employee-model";
import { CustomerService } from "@/models/customer-service-model";
import { Admin } from "@/models/admin-model";
import ButtonComponent from "@/components/ButtonComponent";
import AddCustomerServiceDialog from "@/dialogs/AddCustomerServiceDialog";

export default {
  name: "CustomerServiceListView",
  components: { AddCustomerServiceDialog, ButtonComponent },

  data: function() {
    return {
      dialog: false,
      customerServices: [],
    };
  },

  beforeMount() {
    this.getCustomerServicesData();
  },

  methods: {
    getCustomerServicesData() {
      const serviceTypes = [];
      serviceTypes.push(new ServiceType('sdasdkalsdjlkasdlkas', 'name1', 11111));
      serviceTypes.push(new ServiceType('dasdallalasásédlasád', 'name2', 222222));
      serviceTypes.push(new ServiceType('sadkskaédkasédlséldk', 'name3', 3333));

      const employees = [];
      employees.push(new Employee('sdasdkalsdjlkasdlkas', 'peldaemail1@esdas.com', 'valami1'));
      employees.push(new Employee('dasdallalasásédlasád', 'peldaemail2@assada.com', 'valami2'));
      employees.push(new Employee('sadkskaédkasédlséldk', 'peldaemail3@sadsadasd.com', 'valami3'));

      const admins = [];
      admins.push(new Admin('sdasdkalsdjlkasdlkas', 'peldaemail1@esdas.com', 'valami1'));
      admins.push(new Admin('dasdallalasásédlasád', 'peldaemail2@assada.com', 'valami2'));
      admins.push(new Admin('sadkskaédkasédlséldk', 'peldaemail3@sadsadasd.com', 'valami3'));

      this.customerServices.push(new CustomerService('randomid1', 'Telekom customer service1', serviceTypes, employees, admins));
      this.customerServices.push(new CustomerService('randomid2', 'Telekom customer service2', serviceTypes, employees, admins));
      this.customerServices.push(new CustomerService('randomid3', 'Telekom customer service3', serviceTypes, employees, admins));
      this.customerServices.push(new CustomerService('randomid3', 'Telekom customer service3', serviceTypes, employees, admins));
      this.customerServices.push(new CustomerService('randomid3', 'Telekom customer service3', serviceTypes, employees, admins));
    },
    onCustomerServiceClick(index) {
      this.$router.push(`/owner/customer-service/${this.customerServices[index].id}`);
    },
    onDeleteCustomerService(index) {
      this.customerServices.splice(index, 1);
    },
    onAddCustomerService(name) {
      this.customerServices.push(new CustomerService('valamiid', name, null, null ,null));
    }
  }
}
</script>

<style scoped>
  .owner-view-wrapper {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
  }

  h1 {
    padding-top: 4rem;
    align-self: center;
    text-align: center;
    height: 25vh;
  }

  .list-height {
    height: 75%;
  }

  .customer-service-list-items-wrapper {
    height: 85%;
    overflow: auto;
  }

  .customer-service-list-item {
    display: flex;
    flex-direction: row;
  }

  .customer-service-list-name {
    width: 90%;
    cursor: pointer;
  }
</style>
