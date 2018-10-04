<template>
  <div id="app">
    <meetups-header/>
    <meetups-main :currentLocation="currentLocation" />
    <meetups-footer/>
  </div>
</template>

<script>
import axios from "axios";

import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";

export default {
  name: "meetups-clone",
  components: {
    meetupsHeader: Header,
    meetupsMain: Main,
    meetupsFooter: Footer
  },
  data() {
    return {
      currentLocation: {}
    };
  },
  methods: {
    async getCurrentLocation() {
      const response = await axios.get("http://ipinfo.io");
      const { city, region, country, loc } = response.data;
      const name = `${city}, ${region}, ${country}`;
      const latitude = loc.slice(0, loc.indexOf(","));
      const longitude = loc.slice(loc.indexOf(",") + 1);

      this.currentLocation = {
        ...this.currentLocation,
        name,
        latitude,
        longitude
      };
    }
  },
  created() {
    this.getCurrentLocation();
  }
};
</script>

<style lang="scss">
@font-face {
  font-family: "Roboto";
  src: url("/fonts/roboto/Roboto-Light.tff") format("tff"),
    url("/fonts/roboto/Roboto-Regular.tff") format("tff"),
    url("/fonts/roboto/Roboto-Bold.tff") format("tff");
}

body {
  margin: 0;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: "Roboto", sans-serif;
  line-height: 1.5rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h2 {
  text-align: center;
  font-size: 2rem;
}

ul {
  list-style: none;
  padding: 0;
}

a {
  text-decoration: none;
}
</style>
