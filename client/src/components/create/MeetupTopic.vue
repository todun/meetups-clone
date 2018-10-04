<template>
	<div class="meetup-topic">
		<img class="image" src="../../assets/images/text-bubbles.svg" alt="People">
		<div class="topic">
			<p class="topic--step">Step 2 of 4</p>
			<h3 class="topic--heading">What will your Meetup be about?</h3>
			<input class="topic--name" v-model="topicName" placeholder="Search for topic">
			<div class="topic--list">
				<template v-for="(topic, index) in filteredTopics">
          <topic-button 
            :topic-names="topicNames" 
            :topic="topic" 
            :key="index" 
          />
				</template>
			</div>
			<button class="topic--button" @click="saveTopics">Next</button>
		</div>
	</div>
</template>

<script>
import { categories } from "@/helpers";
import TopicButton from "./TopicButton";

export default {
  name: "meetup-topic",
  components: {
    TopicButton
  },
  props: {
    addMeetupInfo: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      topicName: "",
      topicNames: [],
      topicsList: categories,
      areTopicsDisplayed: false,
      isTopicSelected: false
    };
  },
  computed: {
    filteredTopics() {
      return this.topicsList.filter(topic => {
        const query = this.topicName.trim().toLowerCase();
        return topic.name.toLowerCase().startsWith(query);
      });
    }
  },
  methods: {
    displayTopics() {
      return (this.areTopicsDisplayed = true);
    },
    saveTopics() {
      this.addMeetupInfo(
        {
          type: this.topicNames
        },
        { three: true }
      );
    }
  },
  mounted() {
    this.$eventBus.$on("add-topic", payload => {
      this.topicNames = this.topicNames.concat(payload);
    });
    this.$eventBus.$on("remove-topic", payload => {
      const topics = this.topicNames.filter(topic => topic !== payload);

      this.topicNames = [];
      this.topicNames = this.topicNames.concat(topics);
    });
  },
  beforeDestroy() {
    this.$eventBus.$off(["add-topic", "remove-topic"]);
  }
};
</script>

<style lang="scss" scoped>
$text-color: #000000;
$btn-color: #f13a59;

.meetup-topic {
  display: flex;

  @at-root .image {
    width: 3rem;
    align-self: flex-start;
  }

  @at-root .topic {
    margin-left: 2rem;

    &--step {
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

    &--name {
      width: 100%;
      height: 2rem;
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

    &--list {
      display: flex;
      flex-flow: row wrap;
      margin-top: 1rem;
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
