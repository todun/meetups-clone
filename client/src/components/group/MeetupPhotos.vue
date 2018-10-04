<template>
	<section class="group-photos" id="group-photos">
		<h3 class="photos-total">Photos (974)</h3>
		<template v-for="photo in [1,2,3,4,5,6]">
			<img src="https://picsum.photos/60/60/?random" alt="Group Member" class="group-photo" :key="photo">
		</template>
	</section>
</template>

<style lang="scss" scoped>
$text-color: #ffffff;
$btn-color: #f13a59;
</style>
