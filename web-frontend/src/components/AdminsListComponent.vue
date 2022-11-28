<template>
  <div class="list-wrapper">
    <!--list titles-->
    <div class="list-title-wrapper">
      <div class="list-title">Email</div>
    </div>
    <!--list content-->
    <div class="list-items-wrapper">
      <div class="list-item-wrapper" v-for="(admin, index) in dataCustomerService?.admins" :key="admin.id">
        <div class="list-item">{{ admin.email }}</div>
        <div class="list-trash-icon-wrapper">
          <img class="list-trash-icon" src="/icons/trash.svg" @click="onDeleteAdmin(index)"/>
        </div>
      </div>
    </div>
    <!--list add button-->
    <div class="list-add-button-wrapper">
      <ButtonComponent class="mt-button" text="Add new admin" @button-click="this.dialog = true;"></ButtonComponent>
    </div>
  </div>

  <AddAdminDialog v-model="dialog" @close-dialog="dialog = false" @add-admin="onAddAdmin"/>
</template>

<script>
import ButtonComponent from "@/components/ButtonComponent";
import AddAdminDialog from "@/dialogs/AddAdminDialog";

export default {
  name: "AdminsListComponent",
  components: { AddAdminDialog, ButtonComponent},

  props: {
    propCustomerService: {
      type: Object
    }
  },

  data: function() {
    return {
      dialog: false,
      dataCustomerService: {
        type: Object
      },
    };
  },

  watch: {
    propCustomerService: function(newVal) {
      this.dataCustomerService = newVal;
    }
  },

  beforeMount() {
    this.dataCustomerService = this.propCustomerService;
  },
  
  methods: {
    onDeleteAdmin(index) {
      const adminId = this.dataCustomerService.admins.at(index).id

      this.axios
          .delete(process.env.VUE_APP_BASE_API_URL + `/admins/${adminId}`)
          .then(() => {
            this.dataCustomerService.admins.splice(index, 1);
          });
    },
    onAddAdmin(email) {
      const registerUserDto = {
        email: email,
        password: "this field won't be used",
        role: "ADMIN",
        customerServiceId: this.dataCustomerService.id
      };

      this.axios
          .post(process.env.VUE_APP_BASE_API_URL + '/auth/register', registerUserDto)
          .then((response) => {
            this.dataCustomerService.admins.push(response.data);
          });
    }
  },
}
</script>

<style scoped>

</style>
