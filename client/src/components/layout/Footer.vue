<template>
	<footer class="footer">
		<p class="footer--copyright">&copy; Meetup {{year}}</p>
		<ul class="footer--menu">
			<span class="footer--menu-separator">·</span>
			<li class="footer--menu-item">
				<router-link to="/terms">Terms of Service</router-link>
			</li>
			<span class="footer--menu-separator">·</span>
			<li class="footer--menu-item">
				<router-link to="/privacy">Privacy Policy</router-link>
			</li>
			<span class="footer--menu-separator">·</span>
			<li class="footer--menu-item">
				<router-link to="/cookie-policy">Cookie Policy</router-link>
			</li>
		</ul>
	</footer>
</template>

<script>
export default {
  name: "meetups-footer",
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>

<style lang="scss">
$footer-color: #2f363f;

.footer {
  display: flex;
  background-color: $footer-color;
  padding: 1.25rem 5rem;
  margin-top: auto;

  &--copyright {
    font-size: 0.85rem;
    color: rgb(255, 255, 255);
    margin: 0;
  }

  &--menu {
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &-separator {
      color: rgb(255, 255, 255);
      padding: 0 0.5rem;
    }

    &-item {
      a {
        font-size: 0.85rem;
        color: rgb(255, 255, 255);
      }
    }
  }
}
</style>
