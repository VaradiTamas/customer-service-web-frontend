<template>
  <div>
    <MainInput label="Email" input-type="password"/>
  </div>
</template>

<script>
import MainInput from "@/components/MainInput";

export default {
  name: "SignupView",
  components: {
    MainInput,
  }
}
</script>

<style scoped>
  div {
    background-color: aqua;
  }
</style>
