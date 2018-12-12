import Vue from "vue";
import Vuex from "vuex";

import auth from "./auth";
import user from "./user";
import shared from "./shared";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    auth,
    user,
    shared
  }
});

export default store;
