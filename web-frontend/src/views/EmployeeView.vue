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
        <div class="ticket-number"><p>{{ customerTicket.ticketNumber }}</p></div>
      </div>
      <!--service type-->
      <div class="half-main-content-wrapper">
        <h1>Service type</h1>
        <div class="service-type"><p>{{ customerTicket.serviceTypeName }}</p></div>
      </div>
    </div>
    <!--next customer button-->
    <ButtonComponent class="next-customer-button" text="Next customer" @button-click="onNextCustomerButtonClick"></ButtonComponent>
  </div>

  <QRCodeDialog v-model="dialog" @close-dialog="dialog = false"/>
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
      customerService: {
        type: Object
      },
      customerTicket: {
        type: Object
      },
    };
  },

  beforeMount() {
    this.employeeId = this.$route.params.employeeId;

    this.axios
        .get(process.env.VUE_APP_BASE_API_URL + `/employees/${this.employeeId}`)
        .then((response) => {
          this.customerService = response.data.customerService;
          console.log(response.data);
        });
  },

  methods: {
    onNextCustomerButtonClick() {
      this.axios
          .get(process.env.VUE_APP_BASE_API_URL + `/customerServices/${this.customerService.id}/nextTicket?employeeId=${this.employeeId}`)
          .then((response) => {
            this.customerTicket = response.data;
          });
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
    background-color: lightblue;
    border-radius: 5rem;
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
