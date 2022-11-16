<template>
  <div class="admin-view-wrapper">
    <router-link :to="'/login'" class="logout-link"><u>Log out</u></router-link>

    <div class="header-wrapper">
      <h1 class="pt-7">Telekom customer service</h1>
      <img class="qr-code-icon mt-4" src="/icons/qr-code.svg" @click="this.dialog = true;"/>
      <div class="menu-wrapper mt-8">
        <router-link :to="'/admin/employees'" class="menu-item">Employees</router-link>
        <router-link :to="'/admin/service-types'" class="menu-item ml-10">Service types</router-link>
      </div>
    </div>

    <div class="main-content-wrapper">
      <router-view></router-view>
    </div>
  </div>

  <QRCodeDialog v-model="dialog" @close-dialog="dialog = false"/>
</template>

<script>
  import QRCodeDialog from "@/dialogs/QRCodeDialog";
  import { ServiceType } from "@/models/service-type-model";
  import { Employee } from "@/models/employee-model";
  import { CustomerService } from "@/models/customer-service-model";
  export default {
    name: "AdminView",
    components: { QRCodeDialog },

    data: function() {
      return {
        dialog: false,
        customerService: '',
      };
    },

    beforeMount() {
      this.getCustomerServiceData();
      console.log(this.serviceTypes)
    },

    methods: {
      getCustomerServiceData() {
        this.axios.get("https://api.openweathermap.org/data/2.5/weather?lat=47.1234&lon=57.3445&appid=107eca7031d101001ab347376dbe2747").then((response) => {
          console.log(response.data)
        });

        const serviceTypes = [];
        serviceTypes.push(new ServiceType('sdasdkalsdjlkasdlkas', 'name1', 11111));
        serviceTypes.push(new ServiceType('dasdallalasásédlasád', 'name2', 222222));
        serviceTypes.push(new ServiceType('sadkskaédkasédlséldk', 'name3', 3333));

        const employees = [];
        employees.push(new Employee('sdasdkalsdjlkasdlkas', 'peldaemail1@esdas.com', 'valami1'));
        employees.push(new Employee('dasdallalasásédlasád', 'peldaemail2@assada.com', 'valami2'));
        employees.push(new Employee('sadkskaédkasédlséldk', 'peldaemail3@sadsadasd.com', 'valami3'));

        this.customerService = new CustomerService('randomid', 'Telekom customer service', serviceTypes, employees, null);
      }
    }
  }
</script>

<style scoped>
  .admin-view-wrapper {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .header-wrapper {
    display: flex;
    flex-direction: column;
    height: 25vh;
    width: 100%;
  }

  h1 {
    text-align: center;
  }

  .qr-code-icon {
    width: 50px;
    height: 50px;
    align-self: center;
    cursor: pointer;
  }

  .menu-wrapper {
    align-self: center;
  }

  .menu-item {
    font-size: 25px;
    color: black;
    text-decoration: none;
  }

  .main-content-wrapper {
    width: 100%;
    height: 75vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
</style>
