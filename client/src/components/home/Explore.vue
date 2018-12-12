<template>
  <div class="explore">
    <h2 class="heading-two">Explore by category</h2>
    <div class="categories">
      <div class="category" v-for="category in categories" :key="category.name">
        <router-link 
          :to="{path: `find${category.path}`}"
        >
          <img class="category-image" :src="require(`../../assets/images/categories/${category.imgUrl}.jpeg`)" :alt="category.name">
          <p class="category-name">{{category.name}}</p>
        </router-link>
      </div>
    </div>
  </div>
</template> 

<script>
import { categories } from "@/helpers";

export default {
  name: "explore",
  data() {
    return {
      categories
    };
  }
};
</script>

<style lang="scss" scoped>
$text-color: #000000;
$link-color: #00a2c7;

.explore {
  padding: 1.5rem 5rem;

  @at-root .heading-two {
    text-align: left;
    font-size: 1.5rem;
    color: lighten($text-color, 40%);
  }

  @at-root .categories {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;

    @at-root .category {
      display: flex;
      justify-content: center;

      &:hover * {
        color: $link-color;
      }

      &-image {
        width: 16rem;
        height: 10rem;
        border-radius: 0.5rem;
      }

      &-name {
        color: lighten($text-color, 40%);
        font-weight: 600;
        margin-top: 0.25rem;
      }
    }
  }
}
</style>
