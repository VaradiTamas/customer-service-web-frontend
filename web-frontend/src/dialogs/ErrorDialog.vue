<template>
  <v-dialog class="dialog-wrapper">
    <div class="dialog-content error-color">
      <!--dialog title-->
      <h1 class="dialog-title">{{ errorMessage }}</h1>
      <!--dialog main content-->
      <!--dialog buttons-->
      <ButtonComponent class="dialog-submit-button" text="OK" @button-click="onOKButtonClick"/>
    </div>
  </v-dialog>
</template>

<script>
import ButtonComponent from "@/components/ButtonComponent";
export default {
  name: "ErrorDialog",
  components: { ButtonComponent },

  props: {
    errorMessage: String,
  },

  methods: {
    onOKButtonClick() {
      this.$emit('closeDialog');
    }
  }
}
</script>

<style scoped>
  .error-color {
    background-color: coral;
  }
</style>
