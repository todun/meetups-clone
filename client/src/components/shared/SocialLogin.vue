<template>
	<div class="button-grp">
		<button class="button button--facebook">
			<span class="button-icon"><i class="fab fa-facebook-f"></i></span> <span class="button-text">Continue with Facebook</span>
		</button>
		<button class="button button--google">
			<span class="button-icon"><i class="fab fa-google"></i></span> <span class="button-text">Continue with Google</span>
		</button>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$text-color: #000000;
$link-color: #00a2c7;
$fcbk-color: #3b5998;

.button-grp {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 2rem;

  @at-root .button {
    max-width: 25rem;
    padding: 0.5rem;
    height: 2.5rem;
    text-align: left;
    font-weight: 600;
    cursor: pointer;

    &--facebook {
      background-color: $fcbk-color;
      border: 1px solid $fcbk-color;
      color: lighten($text-color, 100%);
      margin-bottom: 1rem;

      &:focus,
      &:hover {
        outline: none;
        background-color: darken($fcbk-color, 5%);
      }
    }

    &--google {
      background-color: lighten($text-color, 100%);
      border: 1px solid lighten($text-color, 80%);
      color: lighten($text-color, 40%);

      &:focus,
      &:hover {
        outline: none;
        background-color: lighten($text-color, 95%);
      }
    }

    &-text {
      font-size: 1rem;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }

    &-icon {
      border-right: 1px solid lighten($text-color, 90%);
      padding: 0.75rem 0.75rem 0.75rem 0.25rem;

      .fa-facebook-f {
        padding: 0 0.18rem;
      }
    }
  }
}
</style>
