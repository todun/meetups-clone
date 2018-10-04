<template>
	<div class="find-meetup">
    <div v-if="meetupType">
      <h2 class="heading-two">{{ formattedMeetupType }} Meetups</h2>
      <p class="paragraph">
        <span>Find out what's happening in {{ formattedMeetupType }} Meetup</span>
        <br>
        <span>groups around the world and start meeting up</span>
        <br>
        <span>with the ones near you.</span>
      </p>
    </div>
    <div v-else>
  		<h2 class="heading-two">Meetups are</h2>
  		<p class="paragraph">
  			<span>neighbors getting together to learn something,</span>
  			<br>
  			<span>do something, share something…</span>
  		</p>
    </div>
		<router-link 
      class="button" 
      to="/accounts/signup" 
      v-show="!isLoggedIn"
    >
      Sign me up!
    </router-link>
	</div>
</template>

<script>
export default {
  name: "find-meetup-header",
  props: {
    meetupType: {
      type: String
    }
  },
  data() {
    return {
      isLoggedIn: false
    };
  },
  computed: {
    formattedMeetupType() {
      return this.meetupType
        .toLowerCase()
        .replace(/(^| )(\w)/g, firstLetter => firstLetter.toUpperCase());
    }
  }
};
</script>

<style lang="scss" scoped>
$body-color: #0f1721;
$text-color: #ffffff;

.find-meetup {
  background-color: $body-color;
  color: $text-color;
  padding: 2rem 10rem;
  height: 20rem;

  .heading-two {
    margin: 0;
    padding-bottom: 1rem;
    font-size: 2.5rem;
    text-align: left;
  }

  .paragraph {
    font-size: 1.25rem;
    margin: 0.5rem 0;
  }

  .button {
    display: inline-block;
    background-color: $text-color;
    color: $body-color;
    margin-top: 0.75rem;
    padding: 0.5rem 2rem;
    font-weight: 600;
  }
}
</style>
