<template>
  <div class="employee-view-wrapper">
    <!--header-->
    <div class="header-wrapper">
      <!--QR code-->
      <img class="qr-code-icon" src="/icons/qr-code.svg" @click="dialog = true;"/>
      <!--customer service name and helpdesk number-->
      <div class="header-title-wrapper">
        <h1>{{ employee.customerService.name }}</h1>
        <h2 class="mt-3">Helpdesk number: {{ employee.helpDeskNumber }}</h2>
      </div>
      <!--logout link-->
      <router-link class="header-logout-link" :to="'/login'">Log out</router-link>
    </div>
    <!--main content-->
    <div class="main-content-wrapper">
      <!--ticket number-->
      <div class="half-main-content-wrapper">
        <h1 class="half-main-content-title">Ticket number</h1>
        <div class="ticket-number"><p>{{ customerTicket.ticketNumber }}</p></div>
      </div>
      <!--service type-->
      <div class="half-main-content-wrapper">
        <h1 class="half-main-content-title">Service type</h1>
        <div class="service-type"><p>{{ customerTicket.serviceTypeName }}</p></div>
      </div>
    </div>
    <!--next customer button-->
    <ButtonComponent class="next-customer-button" text="Next customer" @button-click="onNextCustomerButtonClick"></ButtonComponent>
  </div>

  <QRCodeDialog :customer-service="employee.customerService" v-model="dialog" @close-dialog="dialog = false"/>
</template>

<script>
import QRCodeDialog from "@/dialogs/QRCodeDialog";
import ButtonComponent from "@/components/ButtonComponent";

export default {
  name: "EmployeeView",
  components: { ButtonComponent, QRCodeDialog },

  data: function() {
    return {
      dialog: false,
      employeeId: String,
      employee: {
        type: Object
      },
      customerTicket: {
        type: Object
      },
    };
  },

  beforeMount() {
    const employeeId = this.$route.params.employeeId;

    this.axios
        .get(process.env.VUE_APP_BASE_API_URL + `/employees/${employeeId}`)
        .then((response) => {
          this.employee = response.data;
        });
  },

  methods: {
    onNextCustomerButtonClick() {
      if (this.customerTicket.id) {
        this.axios
            .delete(process.env.VUE_APP_BASE_API_URL + `/tickets/${this.customerTicket.id}`)
            .then((response) => {
              this.customerTicket = response.data;
              this.getNextTicket();
            });
      } else {
        this.getNextTicket()
      }
    },
    getNextTicket() {
      this.axios
          .get(process.env.VUE_APP_BASE_API_URL + `/customerServices/${this.employee.customerService.id}/nextTicket?employeeId=${this.employee.id}`)
          .then((response) => {
            this.customerTicket = response.data;
          });
    }
  },
}
</script>

<style scoped>
  .employee-view-wrapper {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .header-wrapper {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    padding: 3rem;
  }

  .qr-code-icon {
    width: 40px;
    height: 40px;
    cursor: pointer;
  }

  .header-title-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .header-logout-link {
    cursor: pointer;
    font-size: 25px;
    font-weight: 500;
    color: cornflowerblue;
    text-decoration: none;
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
    background-color: lightblue;
    border-radius: 5rem;
  }

  .half-main-content-title {
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
