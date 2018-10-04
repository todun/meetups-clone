<template>
	<div class="meetups-grid">
		<p class="sort-grid">Sort by <span>Best match</span></p>
    <query-handler :apolloQuery="query" :apolloVariables="{location: currentLocation}">
      <div class="meetup-thumbnails">
        <div class="thumbnail" v-for="x in [0,1,2,3,4,5,6,7,8]" :key="x">
          <img class="thumbnail-image" src="https://gearjunkie.com/wp-content/uploads/2017/10/hike-to-conundrum-hot-springs.jpg" alt="">
          <div class="thumbnail-text">
            <p>Extremely Shy - Looking for Friends?</p>
            <p>We are 22,117 friends</p>
          </div>
          <span class="thumbnail-icon" @click="openModal"><i class="fas fa-plus"></i></span>
        </div>
      </div>
      <modal v-show="isModalOpen" @close="closeModal" />
    </query-handler>
	</div>
</template>

<script>
import Modal from "../shared/Modal";
import QueryHandler from "../shared/QueryHandler";

import { fetchCurrentLocation } from "@/graphql/queries";

export default {
  name: "meetups-grid",
  components: {
    Modal,
    QueryHandler
  },
  props: {
    currentLocation: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      query: fetchCurrentLocation,
      isModalOpen: false
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    }
  }
};
</script>

<style lang="scss" scoped>
$body-color: #353e48;
$text-color: #ffffff;

.meetups-grid {
  margin: 2rem 10rem;

  .sort-grid {
    font-size: 0.85rem;
    text-align: right;
    color: darken($text-color, 30%);

    span {
      color: initial;
      cursor: pointer;
      text-decoration: underline;
    }
  }

  @at-root .meetup-thumbnails {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;

    @at-root .thumbnail {
      flex-basis: 30%;
      position: relative;
      margin-bottom: 1.5rem;

      &-image {
        max-width: 18.5rem;
        height: auto;
      }

      &-text,
      &-icon {
        position: absolute;
        bottom: 5%;
      }

      &-text {
        left: 5%;
        color: $text-color;

        p {
          margin: 0;

          &:first-child {
            font-size: 1.5rem;
            padding-bottom: 0.5rem;
          }

          &:last-child {
            font-size: 0.85rem;
            padding-bottom: 0.5rem;
          }
        }
      }

      &-icon {
        right: 5%;
        border: 0.2rem solid $text-color;
        padding: 0.25rem 0.25rem 0;
        margin-bottom: 0.5rem;
        border-radius: 50%;
        width: 1.45rem;
        cursor: pointer;

        @at-root .svg-inline--fa {
          margin-left: 0.175rem;
          font-size: 1.25rem;
          color: $text-color;
        }
      }
    }
  }
}
</style>
