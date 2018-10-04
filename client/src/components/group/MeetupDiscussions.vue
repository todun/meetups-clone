<template>
	<section class="group-discussions" id="group-discussions">
		<h3 class="discussions-total">Discussions (8)</h3>
		<template v-for="discussion in [1,2,3,4,5]">
			<div class="discussion" :key="discussion">
				<div class="discussion-header">
					<img src="https://picsum.photos/60/60/?random" alt="Group Member" class="user-photo">
					<p class="user-name"><span>Alicia N.</span> • Jun 19</p>
				</div>
				<p class="discussion-body">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et unde sapiente officiis expedita nihil quidem totam necessitatibus, aperiam, qui! Porro.
				</p>
				<div class="discussion-replies" v-if="areRepliesDisplayed">
					<template v-for="reply in [1, 2]">
						<p class="discussion-reply" :key="reply">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, dolor.
						</p>
					</template>
				</div>
				<div class="display-actions">
					<p class="replies" @click="displayReplies">2 replies</p>
					<p class="likes" @click="likeDiscussion">{{ discussionLikes }}</p>
				</div>
			</div>
		</template>
	</section>
</template>

<script>
export default {
  name: "group-discussions",
  data() {
    return {
      areRepliesDisplayed: false,
      likes: 1
    };
  },
  computed: {
    discussionLikes() {
      let message;

      if (this.likes === 0) message = "Like";
      else if (this.likes === 1) message = "1 like";
      else message = `${this.like} likes`;

      return message;
    }
  },
  methods: {
    displayReplies() {
      this.areRepliesDisplayed = !this.areRepliesDisplayed;
    },
    likeDiscussion() {
      this.likes++;
    }
  }
};
</script>

<style lang="scss" scoped>
$text-color: #ffffff;
$btn-color: #f13a59;
</style>
