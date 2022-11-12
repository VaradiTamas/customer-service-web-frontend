<template>
  <v-dialog class="dialog-wrapper">
    <h1>Add a new employee</h1>
    <MainInput class="mt-5 dialog-element" label="Employee's email" input-type="text" @input-change="onEmployeeEmailChange"/>
    <MainButton class="mt-button dialog-element" text="Add employee" @button-click="$emit('addEmployee', this.employeeEmail); $emit('closeDialog')"/>
    <MainButton class="mt-button dialog-element" text="Cancel" @button-click="$emit('closeDialog')"/>
  </v-dialog>
</template>

<script>
import MainButton from "@/components/ButtonComponent";
import MainInput from "@/components/InputComponent";

export default {
  name: "AddEmployeeDialog",

  components: {
    MainInput,
    MainButton
  },

  data: function () {
    return {
      employeeEmail: '',
    }
  },

  methods: {
    onEmployeeEmailChange(employeeEmailInput) {
      this.employeeEmail = employeeEmailInput;
    }
  }
}
</script>

<style scoped>
  h1 {
    text-align: center;
  }
</style>
