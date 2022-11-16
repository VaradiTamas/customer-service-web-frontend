<template>
  <v-dialog class="dialog-wrapper">
    <div class="dialog-content">
      <h1 class="dialog-element">Add a new employee</h1>
      <InputComponent class="mt-5 dialog-element" label="Employee's email" input-type="text" @input-change="onEmployeeEmailChange"/>
      <ButtonComponent class="mt-button dialog-element" text="Add employee" @button-click="$emit('addEmployee', this.employeeEmail); $emit('closeDialog')"/>
      <ButtonComponent class="mt-5 dialog-element" text="Cancel" @button-click="$emit('closeDialog')"/>
    </div>
  </v-dialog>
</template>

<script>
import ButtonComponent from "@/components/ButtonComponent";
import InputComponent from "@/components/InputComponent";

export default {
  name: "AddEmployeeDialog",

  components: {
    InputComponent,
    ButtonComponent
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

</style>
