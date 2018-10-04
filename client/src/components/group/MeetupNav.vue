<template>
	<nav class="group-nav">
		<ul class="nav__menu">
			<li class="nav__item">
				<a href="#about-group" class="nav__link nav__link--active">About</a>
			</li>
			<li class="nav__item">
				<a href="#group-members" class="nav__link">Members</a>
			</li>
			<li class="nav__item">
				<a href="#group-photos" class="nav__link">Photos</a>
			</li>
			<li class="nav__item">
				<a href="#group-discussions" class="nav__link">Discussions</a>
			</li>
			<li class="nav__item">
				<a href="#related-meetups" class="nav__link">Related Meetups</a>
			</li>
		</ul>
		<div class="nav__buttons">
			<button class="button button--join">Join this group</button>
			<button class="button button--report">&#8943;</button>
		</div>
	</nav>
</template>

<style lang="scss" scoped>
$text-color: #000000;
$btn-color: #f13a59;
$link-color: #00a2c7;

.group-nav {
  display: flex;
  align-items: center;
  padding: 0.25rem 5rem;
}

.nav {
  &__menu {
    list-style: none;
  }

  &__item {
    display: inline-block;
    margin: 0 1.5rem;

    &:first-of-type {
      margin-left: 0;
    }

    &:last-of-type {
      margin-right: 0;
    }
  }

  &__link {
    color: darken($text-color, 70%);
    font-size: 0.85rem;
    letter-spacing: 1px;

    &--active {
      color: $link-color;
    }
  }

  &__buttons {
    margin-left: 5rem;

    @at-root .button {
      border: 1px solid;
      border-radius: 0.125rem;
      padding: 0.75rem 1rem;
      cursor: pointer;

      &--join {
        border-color: $btn-color;
        background-color: $btn-color;
        color: lighten($text-color, 100%);
      }

      &--report {
        border-color: lighten($text-color, 70%);
        background-color: lighten($text-color, 100%);
        margin-left: 1rem;
      }

      &:focus {
        outline: none;
      }
    }
  }
}
</style>
