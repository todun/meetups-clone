<template>
	<div class="get-app">
		<div class="row">
			<div class="column">
				<h2 class="heading-two">Get the app</h2>
				<router-link class="learn-more" to="/apps">Learn more 
					<span><i class="fas fa-arrow-right"></i></span>
				</router-link>
				<div class="app-links">
					<a href="http://meetu.ps/2ZhShs" rel="noopener noreferrer">
						<img 
							class="app-link app-link--apple" 
							src="../../assets/images/applestore.png" 
							alt="Apple app store link"
						>
					</a>
					<a href="http://meetu.ps/2ZhSyb" rel="noopener noreferrer">
						<img 
							class="app-link app-link--google" 
							src="../../assets/images/googlestore.png" 
							alt="Google play store link"
						>
					</a>
				</div>
			</div>
			<div class="column" style="margin-bottom: -0.45rem">
				<img 
					class="app-photo" 
					src="../../assets/images/getapp.png" 
					alt="Mobile App"
				>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: "get-app",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
$link-color: #00a2c7;

.get-app {
  padding: 2.5rem 5rem 0;

  @at-root .row {
    display: flex;
    justify-content: space-evenly;
  }
}

.heading-two {
  text-align: inherit;
  margin-bottom: 0;
}

.learn-more {
  color: $link-color;
}

.app-links {
  padding-top: 2rem;
}

.app-link {
  max-width: 10rem;

  &--apple {
    padding-right: 0.5rem;
  }

  &--google {
    padding-left: 0.5rem;
  }
}

.app-photo {
  max-width: 15rem;
}
</style>
