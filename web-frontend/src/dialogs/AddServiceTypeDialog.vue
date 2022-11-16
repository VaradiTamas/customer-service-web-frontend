<template>
  <v-dialog class="dialog-wrapper">
    <div class="dialog-content">
      <!--dialog title-->
      <h1 class="dialog-element">Add a new service type</h1>
      <!--form inputs-->
      <v-form class="form mt-10" ref="form" v-model="valid">
        <v-text-field
            v-model="name"
            :rules="nameRules"
            label="Service type name"
            required>
        </v-text-field>
        <v-text-field
            v-model="avgCompletionTime"
            :rules="avgCompletionTimeRules"
            label="Estimated completion time in seconds"
            type="number"
            required>
        </v-text-field>
      </v-form>
      <!--buttons-->
      <ButtonComponent class="mt-button dialog-element" text="Add service type" @button-click="onAddServiceTypeClick()"/>
      <ButtonComponent class="mt-5 dialog-element" text="Cancel" @button-click="$emit('closeDialog')"/>
    </div>
  </v-dialog>
</template>

<script>
import ButtonComponent from "@/components/ButtonComponent";
export default {
  name: "AddServiceTypeDialog",
  components: { ButtonComponent },

  data: function () {
    return {
      name: '',
      avgCompletionTime: '',
      valid: false,
      nameRules: [
        v => !!v || 'Service type name is required'
      ],
      avgCompletionTimeRules: [
        v => !!v || 'Estimated completion time is required',
        v => v > 0 || 'Estimated completion time should be positive',
        v => v < 3600 || 'Estimated completion time should be less than an hour'
      ]
    }
  },
  methods: {
    onAddServiceTypeClick(){
      this.$refs.form.validate();

      if (this.valid) {
        this.$emit('addServiceType', this.name, this.avgCompletionTime);
        this.$emit('closeDialog');
        this.$refs.form.reset();
      }
    }
  }
}
</script>

<style scoped>
  h1 {
    text-align: center;
  }
</style>
