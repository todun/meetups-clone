<template>
	<section class="group-members" id="group-members">
		<h3 class="members-total">Members (5412)</h3>
		<div class="organized-by">
			<div class="organized-by-details">
				<img src="https://picsum.photos/60/60/?random" alt="Group Member" class="member-photo">
				<div class="organized-by-info">
					Organized by <br>
					<span class="name">Alex N. <span>and</span> others</span>
				</div>
			</div>
			<div class="organized-by-message">
				<p><i class="far fa-comment-alt"></i> Message</p>
			</div>
		</div>
		<div class="members">
			<template v-for="member in [1,2,3,4,5,6,7,8]">
				<div class="member" :key="member">
					<img src="https://picsum.photos/60/60/?random" alt="Group Member" class="member-photo">
					<p class="member-name">John S.</p>
					<p class="member-title">Member</p>
				</div>
			</template>
		</div>
	</section>
</template>

<style lang="scss" scoped>
$text-color: #ffffff;
$btn-color: #f13a59;

.organized-by {
}

.members {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

  @at-root .member {
    flex-basis: 25%;
    text-align: center;
    background-color: $text-color;
    border-radius: 0.5rem;
    cursor: pointer;

    &-photo {
      height: 5rem;
      border-radius: 50%;
    }

    &-name {
      font-weight: 600;
    }

    &-title {
      font-size: 0.85rem;
      color: darken($text-color, 50%);
    }
  }
}
</style>
