import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index.js";
import apolloProvider from "./provider";

import { fetchCurrentUser } from "./graphql/queries";

import "vue-datetime/dist/vue-datetime.css";

import "./registerServiceWorker";

// Global event bus
Vue.prototype.$eventBus = new Vue();

Vue.config.productionTip = false;

new Vue({
  apolloProvider,
  router,
  store,
  render: h => h(App),
  async created() {
    const token = localStorage.getItem("meetup-token");

    if (token) {
      const {
        data: { currentUser }
      } = await this.$apollo.query({ query: fetchCurrentUser });

      this.$store.dispatch("auth/autoLogin", currentUser);
    }
  }
}).$mount("#app");
