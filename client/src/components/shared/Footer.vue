<template>
	<div class="footer">
		<router-link class="create" to="/create">Create a Meetup</router-link>
		<router-link class="login" to="/accounts/login">Log in</router-link>
		<hr class="divider">
		<div class="links">
			<template v-for="link in footerLinks">
				<router-link class="link" :to="link.path" :key="link.name">{{link.name}}</router-link>
			</template>
		</div>
	</div>
</template>

<script>
import { footerLinks } from "@/helpers";

export default {
  name: "footer",
  data() {
    return {
      footerLinks
    };
  }
};
</script>

<style lang="scss" scoped>
$body-color: #0f1721;

.footer {
  background-color: $body-color;
}
</style>
