<template>
  <div class="signup-view-wrapper">
    <div class="signup-view mt-5">
      <InputComponent class="mt-1" label="Email" input-type="email" @input-change="onEmailInputChange"/>
      <InputComponent class="mt-1" label="Password" input-type="password" @input-change="onPasswordInputChange"/>
      <InputComponent class="mt-1" label="Confirm password" input-type="password" @input-change="onConfirmationPasswordInputChange"/>
      <ButtonComponent class="mt-button" text="Sign up" @button-click="onSignupButtonClick"/>
    </div>
  </div>

  <SignupSuccessDialog v-model="dialog" @close-dialog="dialog = false"/>
</template>

<script>
  import InputComponent from "@/components/InputComponent";
  import ButtonComponent from "@/components/ButtonComponent";
  import SignupSuccessDialog from "@/dialogs/SignupSuccessDialog";

  export default {
    name: "SignupView",
    components: {
      SignupSuccessDialog,
      ButtonComponent,
      InputComponent,
    },

    data: function () {
      return {
        email: '',
        password: '',
        confirmationPassword: '',
        dialog: false,
      }
    },

    methods: {
      onEmailInputChange(emailInput) {
        this.email = emailInput;
      },

      onPasswordInputChange(passwordInput) {
        this.password = passwordInput
      },

      onConfirmationPasswordInputChange(confirmationPasswordInput) {
        this.confirmationPassword = confirmationPasswordInput;
      },

      onSignupButtonClick() {
        console.log(this.email);
        console.log(this.password);
        console.log(this.confirmationPassword);
        this.dialog = true;
      },
    },
  }
</script>

<style scoped>
  .signup-view-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .signup-view {
    width: 450px;
  }
</style>
