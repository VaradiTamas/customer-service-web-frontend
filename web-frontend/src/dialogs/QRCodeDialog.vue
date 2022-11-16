<template>
  <v-dialog class="dialog-wrapper">
    <h1>Telekom pelda cucc</h1>

    <img class="qr-code-icon mt-4" src="/icons/qr-code.svg"/>

    <ButtonComponent class="mt-button dialog-element" text="OK" @button-click="$emit('closeDialog')"/>
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
  h1 {
    text-align: center;
  }

  .qr-code-icon {
    width: 250px;
    height: 250px;
    align-self: center;
    cursor: pointer;
  }
</style>
