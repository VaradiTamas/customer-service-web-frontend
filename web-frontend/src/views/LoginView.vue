<template>
  <MainInput label="Email" input-type="email" @input-change="emailInputChange"/>
  <MainInput label="Password" input-type="password" @input-change="passwordInputChange"/>
  <MainButton text="Log in" @button-clicked="loginButtonClick"/>
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
    emailInputChange(emailInput) {
      this.email = emailInput;
    },

    passwordInputChange(passwordInput) {
      this.password = passwordInput
    },

    loginButtonClick() {
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

</style>
