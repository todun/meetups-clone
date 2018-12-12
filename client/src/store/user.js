import apolloProvider from "../provider";

import { handleActionStatus } from "../helpers";

import {
  fetchAllUsers,
  fetchUserById,
  fetchCurrentUser
} from "@/graphql/queries";

const state = {
  allUsers: [],
  userById: null,
  currentUser: null
};

const getters = {
  allUsers: state => state.allUsers,
  userById: state => state.userById,
  currentUser: state => state.currentUser
};

const mutations = {
  setUsers: (state, users) => {
    state.allUsers = [...state.allUsers, ...users];
  },
  setUserById: (state, user) => {
    state.userById = user;
  },
  setCurrentUser: (state, currentUser) => {
    state.currentUser = currentUser;
  }
};

const actions = {
  allUsers: async ({ commit }) => {
    commit("setLoading", true, { root: true });

    try {
      const {
        data: {
          fetchAllUsers: { users }
        }
      } = await apolloProvider.query({ query: fetchAllUsers });

      commit("setUsers", users);
      handleActionStatus(commit);
    } catch (error) {
      handleActionStatus(commit, error);
    }
  },

  userById: async ({ commit, userId }) => {
    commit("setLoading", true, { root: true });

    try {
      const {
        data: {
          fetchUserById: { user }
        }
      } = await apolloProvider.query({
        query: fetchUserById,
        variables: {
          id: userId
        }
      });

      commit("setUserById", user);
      handleActionStatus(commit);
    } catch (error) {
      handleActionStatus(commit, error);
    }
  },

  currentUser: async ({ commit }) => {
    commit("setLoading", true, { root: true });

    try {
      const {
        data: {
          fetchCurrentUser: { currentUser }
        }
      } = await apolloProvider.query({ query: fetchCurrentUser });

      commit("setCurrentUser", currentUser);
      handleActionStatus(commit);
    } catch (error) {
      handleActionStatus(commit, error);
    }
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
