<template>
	<div class="login page">
		<div class="card">
			<h2 class="heading-two">Log in</h2>
			<p>
				<span>Not registered with us yet? </span>
				<router-link to="/accounts/signup">Sign up</router-link>.
			</p>
			<hr class="divider">
			<login-form />
			<div class="social">
				<social-login />
			</div>
		</div>
	</div>
</template>

<script>
import SocialLogin from "@/components/shared/SocialLogin";
import LoginForm from "@/components/login/LoginForm";

export default {
  components: {
    socialLogin: SocialLogin,
    loginForm: LoginForm
  }
};
</script>

<style lang="scss" scoped>
$bg-color: #ffffff;
$text-color: #000000;
$social-bg-color: #d8dfea;

.login {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: lighten($text-color, 95%);

  @at-root .card {
    min-width: 25rem;
    background-color: $bg-color;
    padding: 1rem;
    margin: 2rem;
  }

  @at-root .heading-two {
    text-align: left;
    color: lighten($text-color, 30%);

    ~ p {
      font-size: 0.85rem;
    }
  }

  @at-root .divider {
    border-top: none;
  }

  @at-root .social {
    background-color: $social-bg-color;
    padding: 2rem;
    padding-bottom: 0.25rem;
  }
}
</style>
