<template>
  <div class="signup-view-wrapper">
    <div class="signup-view mt-5">
      <MainInput class="mt-2" label="Email" input-type="email" @input-change="onEmailInputChange"/>
      <MainInput class="mt-2" label="Password" input-type="password" @input-change="onPasswordInputChange"/>
      <MainInput class="mt-2" label="Confirm password" input-type="password" @input-change="onConfirmationPasswordInputChange"/>
      <MainButton class="mt-4" text="Sign up" @button-click="onSignupButtonClick"/>
    </div>
  </div>

  <v-dialog class="dialog-wrapper" v-model="dialog">
    <h1>You have successfully signed up!</h1>
    <MainButton class="mt-4" text="OK" @button-click="dialog = false"/>
  </v-dialog>
</template>

<script>
import MainInput from "@/components/MainInput";
import MainButton from "@/components/MainButton";

export default {
  name: "SignupView",

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
    }
  },

  components: {
    MainButton,
    MainInput,
  }
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

  .dialog-wrapper {
    width: 600px;
    height: 200px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    background-color: #D9D9D9;
  }

  h1 {
    text-align: center;
  }
</style>
