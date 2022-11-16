<template>
  <div class="login-view-wrapper">
    <h1 class="mt-16">Login to customer managing system</h1>
    <div class="login-view mt-16">
      <InputComponent class="mt-1" label="Email" input-type="email" @input-change="onEmailInputChange"/>
      <InputComponent class="mt-1" label="Password" input-type="password" @input-change="onPasswordInputChange"/>
      <ButtonComponent class="mt-button" text="Log in" @button-click="onLoginButtonClick"/>
      <div class="mt-2">
        <router-link class="sign-up-link" to="/signup"><u>Sign up</u></router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import ButtonComponent from '@/components/ButtonComponent.vue';
  import InputComponent from "@/components/InputComponent";

  export default {
    name: 'LoginView',
    components: {
      InputComponent,
      ButtonComponent
    },

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
  }
</script>

<style scoped>
  h1 {
    align-self: center;
    font-size: xxx-large;
  }

  .login-view-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .login-view {
    align-self: center;
    width: 450px;
  }

  .sign-up-link {
    cursor: pointer;
    font-size: 20px;
    color: black;
  }
</style>
