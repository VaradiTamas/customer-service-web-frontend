<template>
  <div class="admin-view-wrapper">
    <div class="admin-view">
      <h1 class="mt-5">Telekom customer service</h1>
      <img class="qr-code-icon mt-4" src="/icons/qr-code.svg"/>
      <div class="menu-wrapper mt-8">
        <router-link :to="'/admin/employees'" class="menu-item"><u>Employees</u></router-link>
        <router-link :to="'/admin/service-types'" class="menu-item ml-10"><u>Service types</u></router-link>
      </div>
      <div class="main-content-wrapper">
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
    height: 400px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 1rem;
  }

  .router-link-active {
    font-weight: 700;
  }
</style>
