<template>
	<div class="how-it-works">
		<h2 class="heading-two">How Meetup Works</h2>
		<div class="row">
			<div class="column">
				<div class="row">
					<div class="column column--icon">
						<i class="fas fa-search"></i>
					</div>
					<div class="column">
						<h3 class="heading-three">Find a Meetup</h3>
						<p>Discover local Meetups for all the things you love.</p>
						<router-link 
              v-show="!isAuthenticated" 
              class="link" 
              to="/accounts/signup"
            >Sign up <span><i class="fas fa-arrow-right"></i></span></router-link>
					</div>
				</div> 
			</div>
			<div class="column">
				<div class="row">
					<div class="column column--icon">
						<i class="fas fa-plus"></i>
					</div>
					<div class="column">
						<h3 class="heading-three">Find a Meetup</h3>
						<p>Create your own Meetup, and draw from a community of millions.</p>
						<router-link class="link" to="/create">Create a Meetup <span><i class="fas fa-arrow-right"></i></span></router-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "how-it-works",
  computed: {
    ...mapGetters({ isAuthenticated: "auth/isAuthenticated" })
  }
};
</script>

<style lang="scss" scoped>
$body-color: #0f1721;
$text-color: #ffffff;
$link-color: #00a2c7;

.how-it-works {
  color: $text-color;
  background-color: $body-color;
  padding: 2.5rem 5rem;

  @at-root .heading-two {
    margin-top: 0;
  }

  @at-root .row {
    display: flex;
    justify-content: space-between;

    @at-root .column {
      flex-basis: 50%;

      &--icon {
        display: flex;
        justify-content: flex-end;
        padding-right: 2rem;
      }

      @at-root .heading-three {
        margin-top: 0;
      }
    }
  }
}

.svg-inline--fa,
.link {
  color: $link-color;
}

.svg-inline--fa {
  font-size: 3.5rem;

  &.fa-arrow-right {
    font-size: 1rem;
    margin-left: 0.5rem;
  }
}
</style>
