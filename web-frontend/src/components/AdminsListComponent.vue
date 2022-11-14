<template>
  <div class="list-wrapper">
    <div class="list-title-wrapper">
      <div class="list-title">Email</div>
      <div class="list-title">Password</div>
    </div>

    <div class="list-items-wrapper">
      <div class="list-item-wrapper" v-for="(admin, index) in admins" :key="admin.id">
        <div class="list-item">{{ admin.email }}</div>
        <div class="list-item">{{ admin.password }}</div>
        <div class="list-trash-icon-wrapper">
          <img class="list-trash-icon" src="/icons/trash.svg" @click="onDeleteAdmin(index)"/>
        </div>
      </div>
    </div>

    <div class="list-add-button-wrapper">
      <MainButton class="mt-button" text="Add new admin" @button-click="this.dialog = true;"></MainButton>
    </div>
  </div>

  <AddAdminDialog v-model="dialog" @close-dialog="dialog = false" @add-admin="onAddAdmin"/>
</template>

<script>
import MainButton from "@/components/ButtonComponent";
import { Admin } from "@/models/admin-model";
import AddAdminDialog from "@/dialogs/AddAdminDialog";

export default {
  name: "AdminsListComponent",
  components: {AddAdminDialog, MainButton},
  data: function() {
    return {
      admins: [],
      dialog: false,
    };
  },
  
  methods: {
    getAdminsData() {
      this.admins.push(new Admin('sdasdkalsdjlkasdlkas', 'peldaemail1@esdas.com', 'valami1'));
      this.admins.push(new Admin('dasdallalasásédlasád', 'peldaemail2@assada.com', 'valami2'));
      this.admins.push(new Admin('sadkskaédkasédlséldk', 'peldaemail3@sadsadasd.com', 'valami3'));
    },
    onDeleteAdmin(index) {
      this.admins.splice(index, 1);
    },
    onAddAdmin(email) {
      this.admins.push(new Admin('sadkskaédkasédlséldk', email, 'valami3'));
    }
  },
  
  beforeMount(){
    this.getAdminsData();
  }
}
</script>

<style scoped>

</style>
