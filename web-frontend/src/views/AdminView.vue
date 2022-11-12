<template>
  <div class="admin-view-wrapper">
    <div class="header-wrapper">
      <h1 class="pt-5">Telekom customer service</h1>
      <img class="qr-code-icon mt-4" src="/icons/qr-code.svg"/>
      <div class="menu-wrapper mt-8">
        <router-link :to="'/admin/employees'" class="menu-item"><u>Employees</u></router-link>
        <router-link :to="'/admin/service-types'" class="menu-item ml-10"><u>Service types</u></router-link>
      </div>
    </div>

    <div class="main-content-wrapper">
      <router-view></router-view>
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
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .header-wrapper {
    display: flex;
    flex-direction: column;
    height: 25vh;
    width: 100%;
  }

  h1 {
    text-align: center;
  }

  .qr-code-icon {
    width: 50px;
    height: 50px;
    align-self: center;
    cursor: pointer;
  }

  .menu-wrapper {
    align-self: center;
  }

  .menu-item {
    font-size: 25px;
    color: black;
  }

  .main-content-wrapper {
    width: 100%;
    height: 75vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .router-link-active {
    font-weight: 700;
  }
</style>
