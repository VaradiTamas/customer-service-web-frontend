<template>
  <!--logout link-->
  <router-link :to="'/login'" class="logout-link" @click="onLogoutButtonClick">Log out</router-link>
  <!--main content-->
  <div class="owner-view-wrapper">
    <!--list title-->
    <h1>Customer services</h1>
    <div class="list-wrapper list-height">
      <!--list content-->
      <div class="customer-service-list-items-wrapper">
        <div class="customer-service-list-item mt-3" v-for="(customerService, index) in owner.customerServices" :key="customerService.id">
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
import ButtonComponent from "@/components/ButtonComponent";
import AddCustomerServiceDialog from "@/dialogs/AddCustomerServiceDialog";

export default {
  name: "CustomerServiceListView",
  components: { AddCustomerServiceDialog, ButtonComponent },

  data: function() {
    return {
      dialog: false,
      owner: {
        type: Object,
      }
    };
  },

  beforeMount() {
    const ownerId = this.$route.params.ownerId;

    this.axios
        .get(process.env.VUE_APP_BASE_API_URL + `/owners/${ownerId}`)
        .then((response) => {
          this.owner = response.data;
        });
  },

  methods: {
    onCustomerServiceClick(index) {
      this.$router.push(`/owner/${this.owner.id}/customer-service/${this.owner.customerServices[index].id}`);
    },
    onDeleteCustomerService(index) {
      const customerServiceId = this.owner.customerServices.at(index).id;
      this.axios
          .delete(process.env.VUE_APP_BASE_API_URL + `/customerServices/${customerServiceId}`)
          .then((response) => {
            if (!response.code) {
              this.owner.customerServices.splice(index, 1);
            }
          });
    },
    onAddCustomerService(name) {
      const createCustomerServiceRequestDto = {
        ownerId: this.owner.id,
        name: name,
      };

      this.axios
          .post(process.env.VUE_APP_BASE_API_URL + '/customerServices', createCustomerServiceRequestDto)
          .then((response) => {
            this.owner.customerServices.push(response.data);
          });
    },
    onLogoutButtonClick() {
      localStorage.removeItem('customerQueueToken')
      localStorage.removeItem('customerQueueTokenValidity')
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
