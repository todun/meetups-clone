<template>
	<section class="related-topics">
		<p class="related-heading">Related topics</p>
		<template v-for="topic in relatedTopics">
			<router-link 
				:to="topic.path" 
				:key="topic.name"
				class="topic"
			>
				{{topic.name}}
			</router-link>
		</template>
	</section>
</template>

<script>
import { categories } from "../../helpers";

export default {
  name: "related-topics",
  data() {
    return {
      topics: categories
    };
  },
  computed: {
    relatedTopics() {
      const num = Math.floor(Math.random() * this.topics.length);

      return this.topics.slice(0, num);
    }
  }
};
</script>

<style lang="scss" scoped>
$text-color: #ffffff;
$btn-color: #f13a59;

.related-topics {
}

.related-heading {
}

.topic {
  background-color: darken($text-color, 10%);
  color: darken($text-color, 70%);
  padding: 0.5rem 0.75rem;
  margin: 0 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.85rem;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
}
</style>
