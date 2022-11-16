<template>
  <v-dialog class="dialog-wrapper">
    <h1>Add a new customer service</h1>
    <InputComponent class="mt-5 dialog-element" label="Customer service name" input-type="text" @input-change="onCustomerServiceNameChange"/>
    <ButtonComponent class="mt-button dialog-element" text="Add customer service" @button-click="$emit('addCustomerService', this.name); $emit('closeDialog')"/>
    <ButtonComponent class="mt-button dialog-element" text="Cancel" @button-click="$emit('closeDialog')"/>
  </v-dialog>
</template>

<script>
import InputComponent from "@/components/InputComponent";
import ButtonComponent from "@/components/ButtonComponent";
export default {
  name: "AddCustomerServiceDialog",
  components: {ButtonComponent, InputComponent},
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
