<template>
  <div class="button-wrapper">
    <button @click="$emit('buttonClick')">
      <span>{{ text }}</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'ButtonComponent',
  props: {
    text: String
  }
}
</script>

<style scoped>
  .button-wrapper {
    width: 450px;
    height: 55px;
  }

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
