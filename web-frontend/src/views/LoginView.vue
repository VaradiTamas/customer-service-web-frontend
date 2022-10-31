<template>
  <div class="login-view-wrapper">
    <div class="login-view mt-5">
      <MainInput class="mt-2" label="Email" input-type="email" @input-change="onEmailInputChange"/>
      <MainInput class="mt-2" label="Password" input-type="password" @input-change="onPasswordInputChange"/>
      <MainButton class="mt-4" text="Log in" @button-click="onLoginButtonClick"/>
    </div>
  </div>
</template>

<script>
import MainButton from '@/components/MainButton.vue';
import MainInput from "@/components/MainInput";

export default {
  name: 'LoginView',

  data: function () {
    return {
      email: '',
      password: '',
    }
  },

  methods: {
    onEmailInputChange(emailInput) {
      this.email = emailInput;
    },

    onPasswordInputChange(passwordInput) {
      this.password = passwordInput
    },

    onLoginButtonClick() {
      console.log(this.email);
      console.log(this.password);
      this.$router.push('/signup')
    }
  },

  components: {
    MainInput,
    MainButton
  }
}

</script>

<style scoped>
  .login-view-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .login-view {
    width: 450px;
  }
</style>
