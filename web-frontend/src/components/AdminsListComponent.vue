<template>
  <div class="list-wrapper">
    <!--list titles-->
    <div class="list-title-wrapper">
      <div class="list-title">Email</div>
      <div class="list-title">Password</div>
    </div>
    <!--list content-->
    <div class="list-items-wrapper">
      <div class="list-item-wrapper" v-for="(admin, index) in dataCustomerService.admins" :key="admin.id">
        <div class="list-item">{{ admin.email }}</div>
        <div class="list-item">{{ admin.password }}</div>
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
import { Admin } from "@/models/admin-model";
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
      this.admins.splice(index, 1);
    },
    onAddAdmin(email) {
      this.admins.push(new Admin('sadkskaédkasédlséldk', email, 'valami3'));
    }
  },
}
</script>

<style scoped>

</style>
