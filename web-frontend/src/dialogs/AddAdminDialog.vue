<template>
  <v-dialog class="dialog-wrapper">
    <h1>Add a new admin</h1>
    <MainInput class="mt-5 dialog-element" label="Admin's email" input-type="text" @input-change="onAdminEmailChange"/>
    <MainButton class="mt-button dialog-element" text="Add admin" @button-click="$emit('addAdmin', this.adminEmail); $emit('closeDialog')"/>
    <MainButton class="mt-button dialog-element" text="Cancel" @button-click="$emit('closeDialog')"/>
  </v-dialog>
</template>

<script>
import MainButton from "@/components/ButtonComponent";
import MainInput from "@/components/InputComponent";
export default {
  name: "AddAdminDialog",
  components: {MainInput, MainButton},
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
  h1 {
    text-align: center;
  }
</style>
