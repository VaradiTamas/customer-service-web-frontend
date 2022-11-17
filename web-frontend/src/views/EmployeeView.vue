<template>
  <!--logout link-->
  <router-link :to="'/login'" class="logout-link"><u>Log out</u></router-link>
  <!--QR code-->
  <img class="qr-code-icon mt-4" src="/icons/qr-code.svg" @click="this.dialog = true;"/>
  <!--main content-->
  <div class="employee-view-wrapper">
    <div class="main-content-wrapper">
      <!--ticket number-->
      <div class="half-main-content-wrapper">
        <h1>Ticket number</h1>
        <div class="ticket-number"><p>{{ ticket.number }}</p></div>
      </div>
      <!--service type-->
      <div class="half-main-content-wrapper">
        <h1>Service type</h1>
        <div class="service-type"><p>{{ ticket.serviceType.name }}</p></div>
      </div>
    </div>
    <!--next customer button-->
    <ButtonComponent class="next-customer-button" text="Next customer" @button-click="onNextCustomerButtonClick"></ButtonComponent>
  </div>

  <QRCodeDialog v-model="dialog" @close-dialog="dialog = false"/>
</template>

<script>
import QRCodeDialog from "@/dialogs/QRCodeDialog";
import { ServiceType } from "@/models/service-type-model";
import { Employee } from "@/models/employee-model";
import { CustomerService } from "@/models/customer-service-model";
import { Ticket } from "@/models/ticket-model";
import ButtonComponent from "@/components/ButtonComponent";
export default {
  name: "EmployeeView",
  components: { ButtonComponent, QRCodeDialog },

  data: function() {
    return {
      dialog: false,
      customerService: '',
      ticket: '',
    };
  },

  beforeMount() {
    this.getCustomerServiceData();
  },

  methods: {
    getCustomerServiceData() {
      const serviceTypes = [];
      serviceTypes.push(new ServiceType('sdasdkalsdjlkasdlkas', 'name1', 11111));
      serviceTypes.push(new ServiceType('dasdallalasásédlasád', 'name2', 222222));
      serviceTypes.push(new ServiceType('sadkskaédkasédlséldk', 'name3', 3333));

      const employees = [];
      employees.push(new Employee('sdasdkalsdjlkasdlkas', 'peldaemail1@esdas.com', 'valami1'));
      employees.push(new Employee('dasdallalasásédlasád', 'peldaemail2@assada.com', 'valami2'));
      employees.push(new Employee('sadkskaédkasédlséldk', 'peldaemail3@sadsadasd.com', 'valami3'));

      this.customerService = new CustomerService('randomid', 'Telekom customer service', serviceTypes, employees, null);
      this.ticket = new Ticket('sadasdd', 23, serviceTypes[1]);
    },
    onNextCustomerButtonClick() {
      this.ticket.number++;
      this.ticket.serviceType.name = 'valamimas service type'
    }
  },
}
</script>

<style scoped>
  .qr-code-icon {
    width: 40px;
    height: 40px;
    position: fixed;
    top: 1rem;
    left: 2rem;
    cursor: pointer;
  }

  .employee-view-wrapper {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .main-content-wrapper {
    width: 80%;
    height: 40%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-self: center;
  }

  .half-main-content-wrapper {
    width: 45%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #D9D9D9;
  }

  h1 {
    height: 20%;
    font-size: xxx-large;
    align-self: center;
    text-align: center;
  }

  .ticket-number {
    height: 80%;
    font-size: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .service-type {
    height: 80%;
    font-size: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  p {
    text-align: center;
  }

  .next-customer-button {
    position: fixed;
    bottom: 3rem;
    align-self: center;
  }
</style>
