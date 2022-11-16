<template>
  <v-dialog class="dialog-wrapper">
    <div class="dialog-content">
      <h1 class="dialog-element">Telekom pelda cucc</h1>
      <img class="dialog-element qr-code-icon mt-4" src="/icons/qr-code.svg"/>
      <ButtonComponent class="dialog-element mt-button" text="OK" @button-click="$emit('closeDialog')"/>
    </div>
  </v-dialog>
</template>

<script>
import ButtonComponent from "@/components/ButtonComponent";
export default {
  name: "QRCodeDialog",
  components: { ButtonComponent }
}
</script>

<style scoped>
  .qr-code-icon {
    width: 250px;
    height: 250px;
    cursor: pointer;
  }
</style>
