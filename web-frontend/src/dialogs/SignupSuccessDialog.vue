<template>
  <v-dialog class="dialog-wrapper">
    <div class="dialog-content">
      <h1 class="dialog-element">You have successfully signed up!</h1>
      <ButtonComponent class="dialog-element mt-button" text="OK" @button-click="$emit('closeDialog')"/>
    </div>
  </v-dialog>
</template>

<script>
  import ButtonComponent from "@/components/ButtonComponent";

  export default {
    name: "SignupSuccessDialog",
    components: {
      ButtonComponent
    },
  }
</script>

<style scoped>

</style>
