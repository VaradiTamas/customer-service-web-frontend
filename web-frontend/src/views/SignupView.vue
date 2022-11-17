<template>
  <div class="signup-view-wrapper">
    <!--title-->
    <h1 class="mt-16">Signup as a company owner</h1>
    <!--main content-->
    <div class="signup-view mt-16">
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
        <v-text-field
            class="mt-3"
            v-model="confirmationPassword"
            :rules="confirmationPasswordRules"
            label="Confirm password"
            type="password"
            required>
        </v-text-field>
      </v-form>
      <!--button-->
      <ButtonComponent class="mt-button" text="Sign up" @button-click="onSignupButtonClick"/>
    </div>
  </div>

  <SignupSuccessDialog v-model="dialog" @close-dialog="dialog = false"/>
</template>

<script>
  import ButtonComponent from "@/components/ButtonComponent";
  import SignupSuccessDialog from "@/dialogs/SignupSuccessDialog";
  export default {
    name: "SignupView",
    components: {
      SignupSuccessDialog,
      ButtonComponent,
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
          v => v.length > 5 || 'Password must be at least 6 characters long',
        ],
        confirmationPassword: '',
        confirmationPasswordRules: [
          v => !!v || 'Confirmation password is required',
          v => v === this.password || 'Confirmation password must match your password',
        ],
        dialog: false,
      }
    },

    methods: {
      onSignupButtonClick() {
        this.$refs.form.validate();

        if (this.valid) {
          this.dialog = true;
        }
      },
    },
  }
</script>

<style scoped>
  h1 {
    align-self: center;
    font-size: xxx-large;
  }

  .signup-view-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .signup-view {
    width: 450px;
    align-self: center;
  }
</style>
