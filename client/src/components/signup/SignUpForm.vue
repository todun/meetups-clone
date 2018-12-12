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
  	<form class="form" @submit.prevent="createAccount">
      <div class="form-fullname">
    		<div class="form__grp form__grp--firstname">
    			<label class="form__label" for="name">Your firstname (this is public)</label>
    			<input class="form__input" type="text" id="firstname" name="firstname" v-model="firstname">
    		</div>
        <div class="form__grp form__grp--lastname">
          <label class="form__label" for="name">Your lastname (this is public)</label>
          <input class="form__input" type="text" id="lastname" name="lastname" v-model="lastname">
        </div>
      </div>
  		<div class="form__grp">
  			<label class="form__label" for="email">Email address</label>
  			<input class="form__input" type="email" id="email" name="email" v-model="email">
  		</div>
  		<div class="form__grp">
  			<label class="form__label" for="password">Password</label>
  			<input class="form__input" type="password" id="password" name="password" v-model="password">
  		</div>
  		<div class="form__grp">
  			<p class="region">
  				<span><i class="fas fa-map-marker-alt"></i> </span>
  				Vancouver, British Columbia, CA 
  				<span class="change-region">(change)</span>
  			</p>
  		</div>
  		<div class="form__grp">
  			<button type="submit" class="button">Continue</button>
  		</div>
  		<p class="terms">
  			By clicking "Continue", you agree to our 
  			<router-link to="/terms">Terms of Service</router-link>, 
  			<router-link to="/privacy">Privacy Policy</router-link>, and 
  			<router-link to="/cookie-policy">Cookie Policy</router-link>.
  		</p>
  	</form>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

import Notification from "../shared/Notification";
import { createAccount } from "@/graphql/mutations";

export default {
  name: "signup-form",
  components: {
    Notification
  },
  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      successMessage: "",
      errorMessage: ""
    };
  },
  methods: {
    ...mapMutations({ setAuth: "auth/setAuth" }),
    async createAccount() {
      const { firstname, lastname, email, password } = this.$data;

      try {
        const {
          data: {
            signup: { authenticated, token }
          }
        } = await this.$apollo.mutate({
          mutation: createAccount,
          variables: {
            input: {
              firstname,
              lastname,
              email,
              password
            }
          }
        });

        if (token) {
          // Save token to browser storage
          localStorage.setItem("meetup-token", token);

          // Clear form fields
          this.firstname = "";
          this.lastname = "";
          this.email = "";
          this.password = "";

          // Set notification
          this.notificationType = "success";
          this.successMessage = "Successful account creation!";
          this.errorMessage = null;

          // Update auth status in store
          this.setAuth(authenticated);

          // Redirect to previous page
          // this.$router.replace(this.$route.query.from);
          this.$router.push("/");
        }
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
$link-color: #0000ee;

.form {
  display: flex;
  flex-direction: column;
  margin: auto 0;

  &-fullname {
    display: flex;
    justify-content: space-between;
  }

  &__grp {
    display: flex;
    flex-direction: column;

    &--lastname {
      margin-left: 1rem;
    }
  }

  .region,
  .label,
  &__label {
    font-size: 0.85rem;
  }

  &__label {
    font-weight: 600;
    color: lighten($text-color, 10%);
    margin: 1rem 0 0.5rem;
  }

  &__input {
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

  .region {
    margin-top: 2rem;
  }

  .terms {
    text-align: center;
  }
}

.change-region {
  color: $link-color;
  cursor: pointer;
}

.button {
  background-color: $btn-color;
  width: 100%;
  padding: 1rem;
  border: none;
  color: #ffffff;
  font-size: 1rem;
}

.error-message {
  color: #ffffff;
  background-color: #e84545;
  padding: 0.25rem 1rem;
  font-size: 0.85rem;
}
</style>
