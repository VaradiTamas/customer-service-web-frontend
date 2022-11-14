<template>
  <v-dialog class="dialog-wrapper">
    <h1>Add a new customer service</h1>
    <MainInput class="mt-5 dialog-element" label="Customer service name" input-type="text" @input-change="onCustomerServiceNameChange"/>
    <MainButton class="mt-button dialog-element" text="Add customer service" @button-click="$emit('addCustomerService', this.name); $emit('closeDialog')"/>
    <MainButton class="mt-button dialog-element" text="Cancel" @button-click="$emit('closeDialog')"/>
  </v-dialog>
</template>

<script>
import MainInput from "@/components/InputComponent";
import MainButton from "@/components/ButtonComponent";
export default {
  name: "AddCustomerServiceDialog",
  components: {MainButton, MainInput},
  data: function () {
    return {
      name: '',
    }
  },

  methods: {
    onCustomerServiceNameChange(name) {
      this.name = name;
    }
  }
}
</script>

<style scoped>
  h1 {
    text-align: center;
  }
</style>
