<template>
  <!--home link-->
  <router-link :to="`/owner/${ownerId}`">
    <img class="home-icon" src="/icons/home.svg"/>
  </router-link>
  <!--logout link-->
  <router-link :to="'/login'" class="logout-link">Log out</router-link>
  <!--header-->
  <div class="customer-service-view-wrapper">
    <div class="header-wrapper">
      <h1 class="pt-7">{{ customerService.name }}</h1>
      <img class="qr-code-icon mt-4" src="/icons/qr-code.svg" @click="dialog = true;"/>
      <div class="menu-wrapper mt-8">
        <router-link :to="`/owner/${ownerId}/customer-service/${customerService.id}/employees`" class="menu-item">Employees</router-link>
        <router-link :to="`/owner/${ownerId}/customer-service/${customerService.id}/service-types`" class="menu-item ml-10">Service types</router-link>
        <router-link :to="`/owner/${ownerId}/customer-service/${customerService.id}/administrators`" class="menu-item ml-10">Administrators</router-link>
      </div>
    </div>
    <!--main content-->
    <div class="main-content-wrapper">
      <router-view :prop-customer-service="customerService"></router-view>
    </div>
  </div>

  <QRCodeDialog :customer-service="customerService" v-model="dialog" @close-dialog="dialog = false"/>
</template>

<script>
import QRCodeDialog from "@/dialogs/QRCodeDialog";
export default {
  name: "CustomerServiceDetailsView",
  components: { QRCodeDialog },

  data: function() {
    return {
      dialog: false,
      ownerId: String,
      customerService: {
        type: Object,
      },
    };
  },

  beforeMount() {
    this.ownerId = this.$route.params.ownerId;
    const customerServiceId = this.$route.params.customerServiceId;

    this.axios
        .get(process.env.VUE_APP_BASE_API_URL + `/customerServices/${customerServiceId}`)
        .then((response) => {
          this.customerService = response.data;
        });
  },
}
</script>

<style scoped>
  .home-icon {
    cursor: pointer;
    position: fixed;
    left: 2rem;
    top: 2rem;
  }

  .customer-service-view-wrapper {
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
