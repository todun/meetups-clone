<template>
  <div>
    <transition name="fade">
      <notification 
        v-show="errorMessage" 
        :message="errorMessage"
        notification-type="error"
        :close-notification="closeNotification" 
      />
    </transition>
    <transition name="fade">
      <notification 
        v-show="successMessage" 
        :message="successMessage"
        notification-type="success"
        :close-notification="closeNotification" 
      />
    </transition>
  	<form class="form">
  		<div class="form-grp">
  			<label class="form-label" for="email">Email address</label>
  			<input class="form-input" type="email" id="email" name="email" v-model="email">
  		</div>
  		<div class="form-grp">
  			<label class="form-label" for="password">Password</label>
  			<router-link class="pwd-reset" to="/accounts/pwd-reset">Forgot your password?</router-link>
  			<input class="form-input" type="password" id="password" name="password" v-model="password">
  		</div>
  		<div class="form-grp">
  			<button class="button" @click.prevent="login">Continue</button>
  		</div>
  	</form>
  </div>
</template>

<script>
import Notification from "../shared/Notification";
import { loginToAccount } from "@/graphql/mutations";

export default {
  name: "login-form",
  components: {
    Notification
  },
  data() {
    return {
      email: "",
      password: "",
      successMessage: "",
      errorMessage: ""
    };
  },
  methods: {
    async login() {
      const { email, password } = this.$data;

      try {
        const response = await this.$apollo.mutate({
          mutation: loginToAccount,
          variables: {
            email,
            password
          }
        });

        // Save token to localStorage
        localStorage.setItem("token", response.data.loginToAccount.token);

        // Clear form fields
        this.email = "";
        this.password = "";

        this.successMessage = "Successful login!";
        this.errorMessage = null;
        this.notificationType = "success";
      } catch (error) {
        this.errorMessage = error.message;
        this.successMessage = null;
        this.notificationType = "error";
      }
    },
    closeNotification() {
      this.errorMessage = null;
      this.successMessage = null;
      this.notificationType = "";
    }
  }
};
</script>

<style lang="scss" scoped>
$text-color: #000000;
$btn-color: #f13a59;

.form {
  display: flex;
  flex-direction: column;
  margin: auto 0;

  &-grp {
    display: flex;
    flex-direction: column;
  }

  &-region,
  &-label,
  .pwd-reset {
    font-size: 0.85rem;
  }

  @at-root .pwd-reset {
    margin-bottom: 0.75rem;
  }

  &-label {
    font-weight: 600;
    color: lighten($text-color, 10%);
    margin: 1rem 0 0.5rem;
  }

  &-input {
    height: 2rem;
    background-color: lighten($text-color, 95%);
    padding: 0.25rem;
    box-shadow: none;
    border: 1px solid lighten($text-color, 90%);
    padding-left: 1rem;

    &:focus,
    &:hover {
      background-color: transparent;
      outline: none;
    }
  }
}

.button {
  background-color: $btn-color;
  padding: 0.5rem;
  border: none;
  color: #ffffff;
  font-size: 1rem;
  margin: 1rem 0;
}

.error-message {
  color: #ffffff;
  background-color: #e84545;
  padding: 0.25rem 1rem;
  font-size: 0.85rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
