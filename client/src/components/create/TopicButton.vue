<template>
	<button 
    class="topic--select" 
    :class="{isSelected: isTopicSelected}" 
    @click="selectTopic(topic)" 
  >
    {{topic.name}} 
		<span>
			<i v-if="isTopicSelected" class="fas fa-heart"></i>
			<i v-else class="far fa-heart"></i>
		</span>
	</button>
</template>

<script>
export default {
  name: "topic-button",
  props: {
    topicNames: {
      type: Array,
      required: true
    },
    topic: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isTopicSelected: false
    };
  },
  methods: {
    selectTopic() {
      if (!this.topicNames.includes(this.topic["name"])) {
        this.isTopicSelected = !this.isTopicSelected;
        this.$eventBus.$emit("add-topic", this.topic["name"]);
      } else {
        this.isTopicSelected = !this.isTopicSelected;
        this.$eventBus.$emit("remove-topic", this.topic["name"]);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$text-color: #000000;
$btn-color: #f13a59;

.topic--select {
  background-color: transparent;
  color: lighten($text-color, 30%);
  margin: 0.25rem 0.5rem 0.25rem 0;
  padding: 0.25rem 1rem;
  border: 1px solid lighten($text-color, 30%);
  border-radius: 0.125rem;
  cursor: pointer;

  &:focus,
  &:hover {
    background-color: transparent;
    outline: none;
  }

  span {
    display: inline-block;
    margin-left: 0.5rem;
  }
}

.isSelected {
  border: 2px solid;
  font-weight: 600;

  .svg-inline--fa {
    color: $btn-color;
  }
}
</style>
