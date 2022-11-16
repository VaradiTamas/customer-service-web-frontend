<template>
  <v-dialog class="dialog-wrapper">
    <h1>Add a new employee</h1>
    <InputComponent class="mt-5 dialog-element" label="Service type name" input-type="text" @input-change="onNameChange"/>
    <InputComponent class="mt-5 dialog-element" label="Estimated completion time" input-type="number" @input-change="onAvgCompletionTimeChange"/>
    <ButtonComponent class="mt-button dialog-element" text="Add service type" @button-click="$emit('addServiceType', this.name, this.avgCompletionTime); $emit('closeDialog')"/>
    <ButtonComponent class="mt-button dialog-element" text="Cancel" @button-click="$emit('closeDialog')"/>
  </v-dialog>
</template>

<script>
import InputComponent from "@/components/InputComponent";
import ButtonComponent from "@/components/ButtonComponent";
export default {
  name: "AddServiceTypeDialog",
  components: { ButtonComponent, InputComponent },

  data: function () {
    return {
      name: '',
      avgCompletionTime: '',
    }
  },
  methods: {
    onNameChange(nameInput) {
      this.name = nameInput;
    },
    onAvgCompletionTimeChange(avgCompletionTimeInput) {
      this.avgCompletionTime = avgCompletionTimeInput;
    }
  }
}
</script>

<style scoped>
  h1 {
    text-align: center;
  }
</style>
