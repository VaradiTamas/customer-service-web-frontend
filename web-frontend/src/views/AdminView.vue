<template>
  <div class="admin-view-wrapper">
    <div class="admin-view mt-5">
      <h1>Telekom customer service</h1>
      <img class="qr-code-icon mt-4" src="/icons/qr-code.svg"/>
      <div class="menu-wrapper mt-8">
        <span class="menu-item"><u>Employees</u></span>
        <span class="menu-item ml-10"><u>Service types</u></span>
      </div>
      <div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AdminView",
  }
</script>

<style scoped>
  .admin-view-wrapper {
    width: 100%;
    height: 100%;
  }

  .admin-view {
    display: flex;
    flex-direction: column;
  }

  h1 {
    text-align: center;
  }

  .qr-code-icon {
    width: 50px;
    height: 50px;
    align-self: center;
  }

  .menu-wrapper {
    align-self: center;
  }

  .menu-item {
    font-size: 25px;
  }
</style>
