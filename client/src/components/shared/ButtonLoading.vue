<template>
  <button class="button">
    {{ isLoading ? '' : buttonText }}
    <Loader
      v-show="isLoading"
      :border-width="0.125"
      :width="0.85"
      :height="0.85"
      :color="'#f13a59'"
    />
  </button>
</template>

<script>
import Loader from "./Loader";

export default {
  name: "button-loading",
  components: {
    Loader
  },
  props: {
    buttonText: {
      type: String,
      required: true
    },
    isLoading: {
      type: Boolean,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
$btn-color: #f13a59;

.button {
  background-color: $btn-color;
  padding: 0.5rem 2rem;
  border: none;
  margin: 1rem 0;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;

  &:focus,
  &:hover {
    background-color: darken($btn-color, 5%);
    outline: none;
  }
}
</style>
