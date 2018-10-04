import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ApolloProvider from "./provider";
import "./registerServiceWorker";
import "vue-datetime/dist/vue-datetime.css";

import fetchCurrentUser from "./graphql/queries";

Vue.config.productionTip = false;

// Global event bus
Vue.prototype.$eventBus = new Vue();

new Vue({
  provide: ApolloProvider.provide(),
  router,
  store,
  render: h => h(App),
  created() {
    const token = localStorage.getItem("token");

    if (token) {
      this.$apollo.query({
        query: fetchCurrentUser,
        variables: {
          token
        }
      });
    }
  }
}).$mount("#app");
