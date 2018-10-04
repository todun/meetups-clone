<template>
	<div class="signup page">
		<h2 class="heading-two">Sign Up</h2>
		<social-login />
		<p 
			class="show-signup" 
			v-show="!isFormRendered" 
			@click="renderForm"
		>Or sign up with email</p>
		<hr class="divider" v-show="isFormRendered">
		<sign-up-form v-show="isFormRendered" />
		<hr class="divider">
		<p class="login">
			Already a member? 
			<router-link to="/accounts/login">Log in</router-link>.
		</p>
	</div>
</template>

<script>
import SocialLogin from "@/components/shared/SocialLogin";
import SignUpForm from "@/components/signup/SignUpForm";

export default {
  components: {
    socialLogin: SocialLogin,
    signUpForm: SignUpForm
  },
  data() {
    return {
      isFormRendered: false
    };
  },
  methods: {
    renderForm() {
      return (this.isFormRendered = true);
    }
  }
};
</script>

<style lang="scss" scoped>
$text-color: #000000;
$btn-color: #f13a59;
$link-color: #0000ee;

.signup {
  max-width: 25rem;
  margin: 0 auto 2rem;
}

.heading-two {
  color: lighten($text-color, 30%);
}

.divider {
  border-top: none;
}

.show-signup {
  color: $link-color;
  cursor: pointer;
  text-align: center;
}

.login {
  font-size: 0.85rem;
  text-align: center;
}
</style>
