import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "vue-datetime/dist/vue-datetime.css";

import "./registerServiceWorker";

// Global event bus
Vue.prototype.$eventBus = new Vue();

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
