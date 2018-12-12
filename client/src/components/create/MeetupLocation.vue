<template>
  <div class="meetup-location">
    <img class="image" src="../../assets/images/globe.svg" alt="People">
    <div class="location">
      <p class="location--step">Step 1 of 4</p>
      <h3 class="location--heading">What's your new Meetup Group's hometown?</h3>
      <search-location :location="location" v-if="isInputDisplayed"/>
      <p class="location--change">
        <span><i class="fas fa-map-marker-alt"></i> </span>
        {{currentLocation.name}} 
        <span @click="changeLocation">(change)</span>
      </p>
      <button class="location--button" @click="saveLocation">Next</button>
    </div>
  </div>
</template>

<script>
import SearchLocation from "../search-location/SearchLocation";

import { mapGetters } from "vuex";

export default {
  name: "meetup-location",
  components: {
    SearchLocation
  },
  props: {
    addMeetupInfo: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      location: {},
      isInputDisplayed: false
    };
  },
  computed: {
    ...mapGetters(["currentLocation"])
  },
  methods: {
    changeLocation() {
      this.isInputDisplayed = true;
    },
    saveLocation() {
      this.isInputDisplayed = false;

      this.addMeetupInfo(
        {
          location: this.location
        },
        { two: true }
      );
    }
  }
};
</script>

<style lang="scss" scoped>
$text-color: #000000;
$link-color: #0000ee;
$btn-color: #f13a59;

.meetup-location {
  display: flex;

  @at-root .image {
    width: 3rem;
    align-self: flex-start;
  }

  @at-root .location {
    margin-left: 2rem;

    &--heading,
    &--change {
      font-size: 1.75rem;
      color: lighten($text-color, 30%);
      padding: 0.5rem 0;
      margin: 0;
    }

    &--step {
      margin-top: 0;
      font-size: 0.85rem;
      text-transform: uppercase;
      color: lighten($text-color, 80%);
    }

    &--change {
      span {
        &:last-of-type {
          font-size: 0.85rem;
          color: $link-color;
          cursor: pointer;
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
</style>
