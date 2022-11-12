<template>
  <v-dialog class="dialog-wrapper">
    <h1>Add a new employee</h1>
    <MainInput class="mt-5 dialog-element" label="Service type name" input-type="text" @input-change="onNameChange"/>
    <MainInput class="mt-5 dialog-element" label="Estimated completion time" input-type="number" @input-change="onAvgCompletionTimeChange"/>
    <MainButton class="mt-button dialog-element" text="Add service type" @button-click="$emit('addServiceType', this.name, this.avgCompletionTime); $emit('closeDialog')"/>
    <MainButton class="mt-button dialog-element" text="Cancel" @button-click="$emit('closeDialog')"/>
  </v-dialog>
</template>

<script>
import MainInput from "@/components/InputComponent";
import MainButton from "@/components/ButtonComponent";
export default {
  name: "AddServiceTypeDialog",
  components: {MainButton, MainInput},
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
