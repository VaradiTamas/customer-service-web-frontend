<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>

  <ErrorDialog :error-message=errorMessage v-model="dialog" @close-dialog="dialog = false"/>
</template>

<script>
  import ErrorDialog from "@/dialogs/ErrorDialog";
  export default {
    name: 'App',
    components: { ErrorDialog },

    data: function() {
      return {
        dialog: false,
        errorMessage: '',
      }
    },

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
        //   // delete cache
        //   this.$router.push('/login');
        // }

        return request;
      });

      this.axios.interceptors.response.use((response) => {
        loader.hide();
        return response;
      }, (error) => {
        loader.hide();
        console.log(error);
        this.errorMessage = error.response.data.message;
        this.dialog = true;
      });
    },
  }
</script>
