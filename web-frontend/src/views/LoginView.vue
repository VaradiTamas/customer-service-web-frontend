<template>
  <div class="login-view-wrapper">
    <!--title-->
    <h1 class="mt-16">Login to customer managing system</h1>
    <!--main content-->
    <div class="login-view mt-16">
      <!--form-->
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
            type="password"
            required>
        </v-text-field>
      </v-form>
      <!--buttons-->
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
        ],
        password: '',
        passwordRules: [
          v => !!v || 'Password is required',
        ],
      }
    },

    methods: {
      onLoginButtonClick() {
        this.$refs.form.validate();
        
        if (this.valid) {
          // axios login endpoint email jelszo parossal visszajön egy JWT, admin employee vagy owner id-ja és eszerint
          // elirányítjuk a megfelelő routera
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
