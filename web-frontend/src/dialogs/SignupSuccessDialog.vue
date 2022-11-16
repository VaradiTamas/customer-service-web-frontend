<template>
  <v-dialog class="dialog-wrapper">
    <h1>You have successfully signed up!</h1>
    <ButtonComponent class="mt-button ok-button" text="OK" @button-click="$emit('closeDialog')"/>
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
  h1 {
    text-align: center;
  }

  .ok-button {
    align-self: center;
  }
</style>
