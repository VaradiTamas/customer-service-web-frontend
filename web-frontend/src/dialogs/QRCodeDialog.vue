<template>
  <v-dialog class="dialog-wrapper">
    <div class="dialog-content">
      <!--dialog title-->
      <h1 class="dialog-title">{{ customerService.name }}</h1>
      <!--dialog main content-->
      <qr-code class="qr-code-icon mt-4" :text=customerService.id bg-color="#f0ffff"></qr-code>
      <!--dialog buttons-->
      <ButtonComponent class="dialog-submit-button" text="OK" @button-click="$emit('closeDialog')"/>
    </div>
  </v-dialog>
</template>

<script>
import ButtonComponent from "@/components/ButtonComponent"

export default {
  name: "QRCodeDialog",
  components: { ButtonComponent },

  props: {
    customerService: {
      type: Object,
    }
  }
}
</script>

<style scoped>
  .qr-code-icon {
    width: 250px;
    height: 250px;
    cursor: pointer;
    align-self: center;
  }
</style>
