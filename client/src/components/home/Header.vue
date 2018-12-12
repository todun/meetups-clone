<template>
	<div class="home-header">
		<h1 class="heading-one">What do you love?</h1>
		<p class="paragraph">Do more of it with Meetup</p>
		<router-link 
      v-show="!isAuthenticated" 
      class="button" 
      to="/accounts/signup"
    >Sign up</router-link>
	</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "home-header",
  computed: {
    ...mapGetters({ isAuthenticated: "auth/isAuthenticated" })
  }
};
</script>

<style lang="scss" scoped>
$text-color: #ffffff;
$btn-color: #f13a59;

.home-header {
  background-image: url("../../assets/images/party.jpeg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 65vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: $text-color;

  @at-root .heading-one {
    font-size: 3rem;
    margin-bottom: 0;
  }

  @at-root .paragraph {
    font-size: 1.5rem;
    font-weight: 600;
    margin-top: 1rem;
  }

  @at-root .button {
    color: $text-color;
    background-color: $btn-color;
    padding: 1rem 6rem;
  }
}
</style>
