<template>
	<div class="meetup-meaning">
		<img class="image" src="../../assets/images/people.svg" alt="People">
		<div class="description">
			<p class="description--step">Step 4 of 4</p>
			<h3 class="description--heading">What it means to be a Meetup</h3>
			<ul class="description--list">
				<li class="description--list-item">Real, in-person conversations</li>
				<li class="description--list-item">Open and honest intentions</li>
				<li class="description--list-item">Always safe and respectful</li>
				<li class="description--list-item">Put your members first</li>
			</ul>
			<p>
				<span>We review all Meetups based on our </span>
				<router-link to="/guidelines">Community Guidelines</router-link>.
			</p>
			<button class="description--button" @click="createMeetup">Agree & Continue</button>
		</div>
	</div>
</template>

<script>
export default {
  name: "meetup-meaning",
  props: {
    createMeetup: {
      type: Function,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
$text-color: #000000;
$btn-color: #f13a59;

.meetup-meaning {
  display: flex;

  @at-root .image {
    width: 3rem;
    align-self: flex-start;
  }

  @at-root .description {
    margin-left: 2rem;

    &--step,
    &--list {
      font-size: 0.85rem;
    }

    &--step {
      margin-top: 0;
      text-transform: uppercase;
      color: lighten($text-color, 80%);
    }

    &--heading {
      color: lighten($text-color, 30%);
    }

    &--list {
      list-style-type: square;

      &-item {
        padding: 0.25rem 0;
        margin-left: 1rem;
      }
    }

    &--button {
      background-color: $btn-color;
      padding: 0.5rem 2rem;
      border: none;
      color: #ffffff;
      font-size: 1rem;
      font-weight: 600;
      margin: 1rem 0;
      cursor: pointer;

      &:focus,
      &:hover {
        background-color: darken($btn-color, 5%);
        outline: none;
      }
    }
  }
}
</style>
