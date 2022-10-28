<template>
  <div class="main-input-wrapper">
    <div class="main-input-label">{{ label }}</div>
    <input :type="inputType" @input="$emit('inputChanged')">
  </div>
</template>

<script>
export default {
  name: "MainInput",
  props: {
    label: String,
    inputType: String
  }
}
</script>

<style scoped>
  .main-input-wrapper {
    width: 450px;
    margin: 0;
    padding: 0;
  }

  .main-input-label {
    text-align: left;
    margin-bottom: 5px;
    font-size: 20px;
  }

  input {
    box-sizing: border-box;
    width: 450px;
    height: 55px;
    padding: 10px;
    font-size: 20px;
    background: #D9D9D9;
    border: 2px solid #000000;
    border-radius: 5px;
  }
</style>
