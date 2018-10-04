<template>
	<div class="suggested">
		<div class="heading">
			<h2 class="heading-two">Popular Meetups nearby</h2>
			<router-link class="heading-link" to="/find">See all</router-link>
		</div>
		<div class="meetup-thumbnails">
			<meetup-thumbnail/>
		</div>
	</div>
</template>

<script>
import MeetupThumbnail from "../shared/MeetupThumbnail";

export default {
  name: "suggested",
  components: {
    meetupThumbnail: MeetupThumbnail
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
$text-color: #000000;
$link-color: #00a2c7;

.suggested {
  padding: 1.5rem 5rem;

  @at-root .heading {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &-two {
      font-size: 1.5rem;
      color: lighten($text-color, 40%);
    }

    &-link {
      color: $link-color;
    }
  }

  @at-root .meetup-thumbnails {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>
