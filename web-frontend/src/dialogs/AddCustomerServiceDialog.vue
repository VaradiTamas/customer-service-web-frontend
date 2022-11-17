<template>
  <v-dialog class="dialog-wrapper">
    <div class="dialog-content">
      <!--dialog title-->
      <h1 class="dialog-title">Add a new customer service</h1>
      <!--dialog main content-->
      <v-form class="dialog-form" ref="form" v-model="valid">
        <v-text-field
            v-model="name"
            :rules="nameRules"
            label="Customer service name"
            required>
        </v-text-field>
      </v-form>
      <!--dialog buttons-->
      <ButtonComponent class="dialog-submit-button" text="Add customer service" @button-click="onAddCustomerServiceButtonClick"/>
      <ButtonComponent class="dialog-cancel-button" text="Cancel" @button-click="$emit('closeDialog')"/>
    </div>
  </v-dialog>
</template>

<script>
import ButtonComponent from "@/components/ButtonComponent";
export default {
  name: "AddCustomerServiceDialog",
  components: { ButtonComponent },

  data: function () {
    return {
      name: '',
      nameRules: [
        v => !!v || 'Customer service name is required',
      ],
    }
  },

  methods: {
    onAddCustomerServiceButtonClick() {
      this.$refs.form.validate();

      if (this.valid) {
        this.$emit('addCustomerService', this.name);
        this.$emit('closeDialog');
        this.$refs.form.reset();
      }
    }
  }
}
</script>

<style scoped>

</style>
