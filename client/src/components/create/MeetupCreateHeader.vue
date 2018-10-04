<template>
	<div class="create-header">
		<h2 class="heading-two">Start a new Meetup</h2>
		<p class="paragraph">We'll help you find the right people to make it happen.</p>
	</div>
</template>

<style lang="scss" scoped>
$text-color: #ffffff;

.create-header {
  background-image: url("../../assets/images/party-two.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: $text-color;

  @at-root .heading-two {
    font-size: 2.25rem;
    margin-bottom: 0;
  }

  @at-root .paragraph {
    font-size: 1.25rem;
    font-weight: 600;
    margin-top: 1rem;
  }
}
</style>
