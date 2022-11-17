<template>
  <v-dialog class="dialog-wrapper">
    <div class="dialog-content">
      <!--dialog title-->
      <h1 class="dialog-title">You have successfully signed up!</h1>
      <!--dialog main content-->
      <!--dialog buttons-->
      <ButtonComponent class="dialog-submit-button" text="OK" @button-click="$emit('closeDialog')"/>
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
