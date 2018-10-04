<template>
  <div>
    <p v-show="error" class="error-message">{{ error }}</p>
  	<form class="form">
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
  			<button class="button" @click.prevent="createAccount">Continue</button>
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
import { createMeetupAccount } from "@/queries";

export default {
  name: "signup-form",
  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      error: ""
    };
  },
  methods: {
    async createAccount() {
      const { firstname, lastname, email, password } = this.$data;

      try {
        const response = await this.$apollo.mutate({
          mutation: createMeetupAccount,
          variables: {
            firstname,
            lastname,
            email,
            password
          }
        });

        // Clear form fields
        this.firstname = "";
        this.lastname = "";
        this.email = "";
        this.password = "";
        this.error = null;

        // Save token to localStorage
        localStorage.setItem("token", response.data.createAccount.token);

        // Redirect
      } catch (error) {
        this.error = error.message;
      }
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
