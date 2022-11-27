<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    name: 'App',

    beforeMount() {
      let loader;

      this.axios.interceptors.request.use((request) => {
        loader = this.$loading.show();

        // const token = "dsdsadadas";
        // const tokenValidity = "dateofvalidity";
        //
        // if (tokenValidity > Date.now()) {
        //   request.headers.common.Authorization = `Bearer ${token}`;
        // } else {
        //
        // }

        return request;
      });

      this.axios.interceptors.response.use((response) => {
        loader.hide();
        return response;
      });
    },
  }
</script>
