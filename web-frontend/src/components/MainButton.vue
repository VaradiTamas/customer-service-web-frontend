<template>
  <button @click="$emit('buttonClicked')">
    <span>{{ text }}</span>
  </button>
</template>

<script>
export default {
  name: 'MainButton',
  props: {
    text: String
  }
}
</script>

<style scoped>
  button {
    width: 450px;
    height: 55px;
    background: #D9D9D9;
    border: 2px solid #000000;
    border-radius: 5px;
    cursor: pointer;
  }

  span {
    font-size: 20px;
  }
</style>
