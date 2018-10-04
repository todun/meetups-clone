<template>
	<div class="home-nav">
		<template v-for="link in links">
			<router-link class="meetup-link" :to="`find${link.path}`" :key="link.name">{{link.name}}</router-link>
		</template>
	</div>
</template>

<script>
import { links } from "@/helpers";

export default {
  name: "home-nav",
  data() {
    return {
      links
    };
  }
};
</script>

<style lang="scss" scoped>
$text-color: #ffffff;

.home-nav {
  display: flex;
  justify-content: space-between;
  padding: 1rem 5rem;
  border-bottom: 1px solid darken($text-color, 10%);

  .meetup-link {
    background-color: darken($text-color, 15%);
    padding: 0.25rem 1.5rem;
    border-radius: 0.25rem;
    color: darken($text-color, 70%);
  }
}
</style>
