<template>
	<div class="meetup-description">
		<img class="image" src="../../assets/images/tag.svg" alt="People">
		<div class="description">
			<p class="description--step">Step 3 of 4</p>
			<h3 class="description--heading">What will your Meetup's name be?</h3>
			<input class="description--meetup-name" type="text" v-model="name">
			<h3 class="description--heading">Describe who should join, and what your Meetup will do.</h3>
			<p class="description--show-examples">
				Want some inspiration? 
				<span @click="showExamples"> Check out these examples</span>.
			</p> 
      <transition name="fade">
  			<div class="description--examples" v-show="areExamplesDisplayed">
  				<template v-for="x in [0, 1, 2]">
  					<p class="example" :key="x">
  						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi accusantium tenetur, voluptatem asperiores quis iusto laboriosam, ab repudiandae numquam soluta doloremque molestiae voluptatibus dolore ratione. Dicta tempore, quae aliquid atque!
  					</p>
  				</template>
  			</div>
      </transition>
			<textarea class="description--meetup-desc" v-model="description" cols="30" rows="8">Meetup description</textarea>
			<div class="description--meetup-image">
				<label for="">Link to Meetup Image</label>
				<input type="text" v-model="imageUrl">
			</div>
			<div class="description--meetup-dates">
				<div class="date-grp">
					<label for="">Event Start</label>
					<datetime class="theme-red" type="datetime" v-model="eventStart" />
				</div>
				<div class="date-grp">
					<label for="">Event End</label>
					<datetime class="theme-red" type="datetime" v-model="eventEnd" />
				</div>
			</div>
			<button 
				class="description--button" 
				@click="saveMeetupDetails">Next
			</button>
		</div>
	</div>
</template>

<script>
import { Datetime } from "vue-datetime";

export default {
  name: "meetup-details",
  components: {
    datetime: Datetime
  },
  props: {
    addMeetupInfo: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      name: "",
      hostedBy: "",
      description: "",
      imageUrl: "",
      eventStart: "",
      eventEnd: "",
      areExamplesDisplayed: false
    };
  },
  methods: {
    showExamples() {
      return (this.areExamplesDisplayed = !this.areExamplesDisplayed);
    },
    saveMeetupDetails() {
      this.addMeetupInfo(
        {
          details: {
            name: this.name.trim(),
            hostedBy: this.hostedBy.trim() || "5ae1f437474e7116ac30511c",
            description: this.description.trim(),
            imageUrl: this.imageUrl.trim() || "https://i.imgur.com/E5yG11X.jpg",
            eventStart: this.eventStart,
            eventEnd: this.eventEnd
          }
        },
        { four: true }
      );
    }
  }
};
</script>

<style lang="scss" scoped>
$text-color: #000000;
$link-color: #0000ee;
$btn-color: #f13a59;

.meetup-description {
  display: flex;

  @at-root .image {
    width: 3rem;
    align-self: flex-start;
  }

  @at-root .description {
    margin-left: 2rem;
    width: 100%;

    &--step,
    &--list,
    &--show-examples,
    &--examples {
      font-size: 0.85rem;
    }

    &--meetup-name,
    &--meetup-desc,
    &--meetup-image input {
      width: 100%;
      background-color: lighten($text-color, 95%);
      padding: 0.25rem;
      padding-left: 1rem;
      box-shadow: none;
      border: 1px solid lighten($text-color, 90%);

      &:focus,
      &:hover {
        background-color: transparent;
        outline: none;
      }
    }

    &--heading {
      color: lighten($text-color, 30%);
    }

    &--step {
      margin-top: 0;
      text-transform: uppercase;
      color: lighten($text-color, 80%);
    }

    &--meetup-name,
    &--meetup-image input {
      height: 2rem;
    }

    &--show-examples {
      span {
        color: $link-color;
        cursor: pointer;
      }
    }

    &--examples {
      background-color: lighten($text-color, 80%);
      display: flex;
      justify-content: space-evenly;
      padding: 0 0.65rem;
      margin-bottom: 1rem;
      width: 100%;

      @at-root .example {
        flex-basis: 30%;
      }
    }

    &--meetup-desc {
      overflow: hidden;
      resize: none;
    }

    &--meetup-image {
      margin-top: 1rem;

      label {
        font-weight: 600;
        color: lighten($text-color, 30%);
      }

      input {
        margin-top: 0.5rem;
      }
    }

    &--meetup-dates {
      display: flex;
      justify-content: space-between;
      margin-top: 1rem;

      @at-root .date-grp {
        flex-basis: 50%;
        margin: 0 1rem;

        &:first-child {
          margin-left: 0;
        }

        label {
          font-weight: 600;
          color: lighten($text-color, 30%);
        }
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
