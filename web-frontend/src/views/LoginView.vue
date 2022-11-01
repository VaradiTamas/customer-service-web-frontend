<template>
  <div class="login-view-wrapper">
    <div class="login-view mt-5">
      <MainInput class="mt-1" label="Email" input-type="email" @input-change="onEmailInputChange"/>
      <MainInput class="mt-1" label="Password" input-type="password" @input-change="onPasswordInputChange"/>
      <MainButton class="mt-button" text="Log in" @button-click="onLoginButtonClick"/>
      <div class="mt-2">
        <router-link class="sign-up-link" to="/signup"><u>Sign up</u></router-link>
      </div>
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
        this.$router.push('/admin');
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

  .sign-up-link {
    cursor: pointer;
    font-size: 20px;
    color: black;
  }
</style>
