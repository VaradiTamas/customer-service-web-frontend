<template>
  <div class="admin-view-wrapper">
    <!--logout link-->
    <router-link :to="'/login'" class="logout-link" @click="onLogoutButtonClick">Log out</router-link>
    <!--header-->
    <div class="header-wrapper">
      <h1 class="pt-5">{{ admin?.customerService?.name }}</h1>
      <img class="qr-code-icon mt-4" src="/icons/qr-code.svg" @click="this.dialog = true;"/>
      <div class="menu-wrapper mt-8">
        <router-link :to="`/admin/${admin.id}/employees`" class="menu-item">Employees</router-link>
        <router-link :to="`/admin/${admin.id}/service-types`" class="menu-item ml-10">Service types</router-link>
      </div>
    </div>
    <!--main content-->
    <div class="main-content-wrapper">
      <router-view :prop-customer-service="admin.customerService"></router-view>
    </div>
  </div>

  <QRCodeDialog :customer-service="admin.customerService" v-model="dialog" @close-dialog="dialog = false"/>g
</template>

<script>
  import QRCodeDialog from "@/dialogs/QRCodeDialog";
  export default {
    name: "AdminView",
    components: { QRCodeDialog },

    data: function() {
      return {
        dialog: false,
        admin: {
          type: Object
        }
      };
    },

    beforeMount() {
      const adminId = this.$route.params.adminId;

      this.axios
          .get(process.env.VUE_APP_BASE_API_URL + `/admins/${adminId}`)
          .then((response) => {
            this.admin = response.data;
          });
    },

    methods: {
      onLogoutButtonClick() {
        localStorage.removeItem('customerQueueToken')
        localStorage.removeItem('customerQueueTokenValidity')
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
