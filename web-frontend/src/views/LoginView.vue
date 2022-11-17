<template>
  <div class="login-view-wrapper">
    <!--view title-->
    <h1 class="mt-16">Login to customer managing system</h1>
    <!--view main content-->
    <div class="login-view mt-16">
      <!--view form-->
      <v-form class="" ref="form" v-model="valid">
        <v-text-field
            v-model="email"
            :rules="emailRules"
            label="Email"
            required>
        </v-text-field>
        <v-text-field
            class="mt-3"
            v-model="password"
            :rules="passwordRules"
            label="Password"
            required>
        </v-text-field>
      </v-form>
      <!--view buttons-->
      <ButtonComponent class="mt-button" text="Log in" @button-click="onLoginButtonClick"/>
      <div class="mt-2">
        <router-link class="sign-up-link" to="/signup"><u>Sign up</u></router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import ButtonComponent from '@/components/ButtonComponent.vue';
  export default {
    name: 'LoginView',
    components: {
      ButtonComponent
    },

    data: function () {
      return {
        valid: false,
        email: '',
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+/.test(v) || 'E-mail must be valid',
        ],
        password: '',
        passwordRules: [
          v => !!v || 'Password is required',
          v => v.length > 6 || 'Password must be at least 6 characters long',
        ],
      }
    },

    methods: {
      onLoginButtonClick() {
        this.$refs.form.validate();
        
        if (this.valid) {
          this.$router.push('/admin');
        }
      }
    },
  }
</script>

<style scoped>
  h1 {
    align-self: center;
    font-size: xxx-large;
  }

  .login-view-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .login-view {
    align-self: center;
    width: 450px;
  }

  .sign-up-link {
    cursor: pointer;
    font-size: 20px;
    color: black;
  }
</style>
