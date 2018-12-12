import { getCurrentLocation } from "../helpers";

const currentLocation = {};

(async () => {
  const {
    data: { city, region, country, loc }
  } = await getCurrentLocation();

  currentLocation.name = `${city}, ${region}, ${country}`;
  currentLocation.latitude = loc.slice(0, loc.indexOf(","));
  currentLocation.longitude = loc.slice(loc.indexOf(",") + 1);
})();

const state = {
  currentLocation,
  displayNotification: false,
  isLoading: false,
  error: null
};

const getters = {
  currentLocation: state => state.currentLocation,
  displayNotification: state => state.displayNotification,
  isLoading: state => state.isLoading,
  error: state => state.error
};

const mutations = {
  changeLocation: (state, payload) =>
    (state.currentLocation = { ...state.currentLocation, ...payload }),
  setNotification: (state, payload) => (state.displayNotification = payload),
  setLoading: (state, payload) => (state.loading = payload),
  setError: (state, payload) => (state.error = payload),
  clearError: state => (state.error = null)
};

export default {
  state,
  getters,
  mutations
};
