<template>
  <v-dialog class="dialog-wrapper">
    <div class="dialog-content">
      <!--dialog title-->
      <h1 class="dialog-title">Add a new admin</h1>
      <!--dialog main content-->
      <v-form class="dialog-form" ref="form" v-model="valid">
        <v-text-field
            v-model="adminEmail"
            :rules="adminEmailRules"
            label="Admin's email"
            required>
        </v-text-field>
      </v-form>
      <!--dialog buttons-->
      <ButtonComponent class="dialog-submit-button" text="Add admin" @button-click="onAddAdminButtonClick"/>
      <ButtonComponent class="dialog-cancel-button" text="Cancel" @button-click="$emit('closeDialog')"/>
    </div>
  </v-dialog>
</template>

<script>
import ButtonComponent from "@/components/ButtonComponent";
export default {
  name: "AddAdminDialog",
  components: { ButtonComponent },

  data: function () {
    return {
      valid: false,
      adminEmail: '',
      adminEmailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
    }
  },

  methods: {
    onAddAdminButtonClick() {
      this.$refs.form.validate();

      if (this.valid) {
        this.$emit('addAdmin', this.adminEmail);
        this.$emit('closeDialog');
        this.$refs.form.reset();
      }
    }
  }
}
</script>

<style scoped>

</style>
