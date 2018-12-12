import apolloProvider from "../provider";

import { createAccount, loginToAccount } from "@/graphql/mutations";

import { handleActionStatus } from "../helpers";

const state = {
  isAuthenticated: false
};

const getters = {
  isAuthenticated: state => state.isAuthenticated
};

const actions = {
  register: async ({ commit }, { firstname, lastname, email, password }) => {
    commit("setLoading", true, { root: true });

    try {
      const {
        data: {
          createAccount: { token }
        }
      } = await apolloProvider.mutate({
        mutation: createAccount,
        variables: {
          firstname,
          lastname,
          email,
          password
        }
      });

      // Save token to browser storage
      localStorage.setItem("meetup-token", token);

      commit("setAuth", true);
      handleActionStatus(commit);
    } catch (error) {
      handleActionStatus(commit, error);
    }
  },
  login: async ({ commit }, { email, password }) => {
    commit("setLoading", true, { root: true });

    try {
      const {
        data: {
          loginToAccount: { token }
        }
      } = await this.$apollo.mutate({
        mutation: loginToAccount,
        variables: {
          email,
          password
        }
      });

      // Save token to browser storage
      localStorage.setItem("meetup-token", token);

      commit("setAuth", true);
      handleActionStatus(commit);
    } catch (error) {
      handleActionStatus(commit, error);
    }
  },
  autoLogin: async ({ commit }, payload) => {
    try {
      commit("setAuth", true);
      commit("user/setCurrentUser", payload, { root: true });
      handleActionStatus(commit);
    } catch (error) {
      handleActionStatus(commit, error);
    }
  }
};

const mutations = {
  setAuth: (state, isAuth) => (state.isAuthenticated = isAuth)
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
