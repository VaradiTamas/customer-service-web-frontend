<template>
  <v-dialog class="dialog-wrapper">
    <div class="dialog-content">
      <h1 class="dialog-element">Add a new admin</h1>
      <InputComponent class="mt-5 dialog-element" label="Admin's email" input-type="text" @input-change="onAdminEmailChange"/>
      <ButtonComponent class="mt-button dialog-element" text="Add admin" @button-click="$emit('addAdmin', this.adminEmail); $emit('closeDialog')"/>
      <ButtonComponent class="mt-5 dialog-element" text="Cancel" @button-click="$emit('closeDialog')"/>
    </div>
  </v-dialog>
</template>

<script>
import ButtonComponent from "@/components/ButtonComponent";
import InputComponent from "@/components/InputComponent";
export default {
  name: "AddAdminDialog",
  components: {InputComponent, ButtonComponent},
  data: function () {
    return {
      adminEmail: '',
    }
  },

  methods: {
    onAdminEmailChange(adminEmailInput) {
      this.adminEmail = adminEmailInput;
    }
  }
}
</script>

<style scoped>

</style>
