<template>
  <v-dialog class="dialog-wrapper">
    <div class="dialog-content">
      <!--dialog title-->
      <h1 class="dialog-element">Add a new employee</h1>
      <!--form inputs-->
      <v-form class="form mt-10" ref="form" v-model="valid">
        <v-text-field
            v-model="employeeEmail"
            :rules="emailRules"
            label="Employee's email"
            required>
        </v-text-field>
      </v-form>
      <!--buttons-->
      <ButtonComponent class="mt-button dialog-element" text="Add employee" @button-click="onAddEmployeeButtonClick()"/>
      <ButtonComponent class="mt-5 dialog-element" text="Cancel" @button-click="$emit('closeDialog')"/>
    </div>
  </v-dialog>
</template>

<script>
import ButtonComponent from "@/components/ButtonComponent";

export default {
  name: "AddEmployeeDialog",
  components: {
    ButtonComponent
  },

  data: function () {
    return {
      valid: false,
      employeeEmail: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
    }
  },

  methods: {
    onAddEmployeeButtonClick() {
      this.$refs.form.validate();

      if (this.valid) {
        this.$emit('addEmployee', this.employeeEmail);
        this.$emit('closeDialog');
        this.$refs.form.reset();
      }
    }
  }
}
</script>

<style scoped>

</style>
