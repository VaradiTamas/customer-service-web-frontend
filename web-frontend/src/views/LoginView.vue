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

  methods: {
    emailInputChange(email) {
      console.log(email);
    },

    passwordInputChange(password) {
      console.log(password);
    },

    loginButtonClick() {
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
