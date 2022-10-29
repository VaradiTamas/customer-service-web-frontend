<template>
  <router-link to="/">Go to Home</router-link>
  <div>separator</div>
  <router-link to="/signup">Go to Signup</router-link>
  <div>separator</div>
  <router-link to="/login">Go to Login</router-link>

  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
}

</script>
