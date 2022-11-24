<template>
  <div class="admin-view-wrapper">
    <!--logout link-->
    <router-link :to="'/login'" class="logout-link"><u>Log out</u></router-link>
    <!--header-->
    <div class="header-wrapper">
      <h1 class="pt-5">Telekom customer service</h1>
      <img class="qr-code-icon mt-4" src="/icons/qr-code.svg" @click="this.dialog = true;"/>
      <div class="menu-wrapper mt-8">
        <router-link :to="'/admin/employees'" class="menu-item">Employees</router-link>
        <router-link :to="'/admin/service-types'" class="menu-item ml-10">Service types</router-link>
      </div>
    </div>
    <!--main content-->
    <div class="main-content-wrapper">
      <router-view :prop-customer-service="this.customerService"></router-view>
    </div>
  </div>

  <QRCodeDialog v-model="dialog" @close-dialog="dialog = false"/>g
</template>

<script>
  import QRCodeDialog from "@/dialogs/QRCodeDialog";
  export default {
    name: "AdminView",
    components: { QRCodeDialog },

    data: function() {
      return {
        dialog: false,
        customerServiceId: String,
        customerService: String,
      };
    },

    async beforeMount() {
      await this.axios
          //.get("http://localhost:8080/customer-queue-app/api/customerServices/" + this.customerServiceId)
          .get(process.env.VUE_APP_BASE_API_URL + "/customerServices/00000000-80ed-4d57-a626-c2d5464a522a")
          .then((response) => {
            this.customerService = response.data;
            console.log(response.data)
          });
    },
  }
</script>

<style scoped>
  .admin-view-wrapper {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
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
</style>
