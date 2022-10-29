<template>
  <MainButton text="Log in" @button-clicked="loginButtonClick"/>
  <MainInput label="Email" input-type="password" @input-changed="loginButtonClick"/>
</template>

<script>
import MainButton from '@/components/MainButton.vue';
import MainInput from "@/components/MainInput";

export default {
  name: 'LoginView',
  methods: {
    loginButtonClick() {
      console.log('halo');
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
