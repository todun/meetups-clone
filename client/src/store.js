import Vue from "vue";
import Vuex from "vuex";
import { gql } from "apollo-boost";
//import axios from "axios";

import apolloProvider from "./provider";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentLocation: {},
    currentUser: {},
    isLoading: false,
    error: null
  },
  getters: {
    currentLocation: state => state.currentLocation,
    currentUser: state => state.currentUser,
    isLoading: state => state.isLoading,
    error: state => state.error
  },
  mutations: {
    setLocation: (state, location) =>
      (state.currentLocation = { ...state.currentLocation, ...location }),
    setUser: (state, user) =>
      (state.currentUser = { ...state.currentUser, ...user }),
    setLoading: (state, payload) => (state.loading = payload),
    setError: (state, payload) => (state.error = payload),
    clearError: state => (state.error = null)
  },
  actions: {
    changeLocation: async ({ commit }) => {
      commit("setLoading", true);

      try {
        const response = await apolloProvider.query({
          query: gql`
            query CurrentLocation {
              currentLocation {
                location
              }
            }
          `
        });

        console.log(response);
        // commit("setLocation", location);
        commit("setLoading", false);
        commit("clearError");
      } catch (error) {
        commit("setError", error.message);
        commit("setLoading", false);
      }
    }
  }
});
