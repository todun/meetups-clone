<template>
	<input 
		class="search-location" 
		type="text"
		ref="autocomplete" 
		onfocus="value = ''"
		placeholder="Enter location"
	>
</template>

<script>
export default {
  name: "search-location",
  props: {
    location: {
      type: Object
    }
  },
  mounted() {
    // eslint-disable-next-line
    this.autocomplete = new google.maps.places.Autocomplete(
      this.$refs.autocomplete,
      { types: ["geocode"] }
    );

    this.autocomplete.addListener("place_changed", () => {
      const place = this.autocomplete.getPlace();

      const location = {
        name: place.formatted_address,
        latitude: place.geometry.location.lat(),
        longitude: place.geometry.location.lng()
      };

      const meetupLocation = { ...this.location, ...location };
      this.$eventBus.$emit("change-location", meetupLocation);
    });
  }
};
</script>

<style lang="scss" scoped>
$text-color: #000000;

.search-location {
  width: 100%;
  height: 2rem;
  background-color: lighten($text-color, 95%);
  padding: 0.25rem;
  padding-left: 1rem;
  box-shadow: none;
  border: 1px solid lighten($text-color, 90%);

  &:focus,
  &:hover {
    background-color: transparent;
    outline: none;
  }
}
</style>
