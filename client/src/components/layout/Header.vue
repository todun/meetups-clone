<template>
  <header class="header">
    <router-link class="logo" to="/">
      <img src="../../assets/images/logo.svg" alt="Meetups Logo">
    </router-link>
    <nav class="nav">
      <ul class="nav__menu">
        <li v-if="!isAuthenticated" class="nav__item nav__item--create">
          <router-link to="/create">Create a Meetup</router-link>
        </li>
        <li v-if="isAuthenticated" class="nav__item nav__item--create">
          <router-link 
            :class="{ authNav: isAuthenticated }" 
            to="/create"
          >
            Start a new group
          </router-link>
        </li>
        <li v-if="!isAuthenticated" class="nav__item nav__item--auth">
          <router-link to="/accounts/login">Log in</router-link>
        </li>
        <li v-if="!isAuthenticated" class="nav__item nav__item--auth">
          <router-link to="/accounts/signup">Sign up</router-link>
        </li>
        <li v-if="isAuthenticated" class="nav__item nav__item--auth">
          <router-link 
            :class="{ authNav: isAuthenticated }" 
            to="/find/explore"
          >
            Explore
          </router-link>
        </li>
        <li v-if="isAuthenticated" class="nav__item nav__item--auth">
          <router-link 
            :class="{ authNav: isAuthenticated }"  
            to="/messages"
          >
            Messages
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "meetups-header",
  computed: {
    ...mapGetters({ isAuthenticated: "auth/isAuthenticated" })
  }
};
</script>

<style lang="scss" scoped>
$text-color: #000000;
$link-color: #00a2c7;
$btn-color: #f13a59;

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid lighten($text-color, 95%);

  @at-root .logo {
    img {
      max-height: 2.75rem;
    }
  }

  @at-root .nav {
    &__menu {
      margin: 0;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;

      @at-root .nav__item {
        padding: 0.25rem 1rem;

        &--create,
        &--auth {
          font-size: 0.85rem;
        }

        &--create {
          font-weight: 600;
          letter-spacing: 1px;
          border-right: 1px solid lighten($text-color, 75%);

          a {
            color: $link-color;
          }
        }

        &--auth {
          a {
            color: lighten($text-color, 50%);

            &:hover {
              color: $link-color;
            }
          }

          &:last-of-type {
            padding-left: 0;
            padding-right: 0;
          }
        }
      }
    }
  }

  .authNav {
    color: $btn-color;
  }
}
</style>
