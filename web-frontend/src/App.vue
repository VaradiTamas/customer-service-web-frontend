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

        const token = localStorage.getItem('customerQueueToken');
        const tokenValidity = localStorage.getItem('customerQueueTokenValidity');
        const dateNow = new Date(tokenValidity);

        if ((!tokenValidity && !token) || dateNow.getTime() > Date.now()) {
          request.headers.Authorization = `Bearer ${token}`;
        } else {
          localStorage.removeItem('customerQueueToken')
          localStorage.removeItem('customerQueueTokenValidity')
          this.$router.push('/login');
        }

        return request;
      });

      this.axios.interceptors.response.use((response) => {
        loader.hide();
        return response;
      }, (error) => {
        loader.hide();
        console.log(error);
        this.errorMessage = error.response?.data?.message ?? 'Unknown error happened';
        this.dialog = true;
      });
    },
  }
</script>
