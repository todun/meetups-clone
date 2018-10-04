import Vue from "vue";
import { ApolloClient, InMemoryCache } from "apollo-boost";
import VueApollo from "vue-apollo";

import errorLink from "./error";
import authLink from "./auth";
import httpLink from "./http";
import stateLink from "./state";

// Create Apollo Client
const apolloClient = new ApolloClient({
  link: errorLink.concat(authLink.concat(stateLink.concat(httpLink))),
  cache: new InMemoryCache(),
  connectToDevTools: true
});

Vue.use(VueApollo);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
  defaultOptions: {
    $loadingKey: "loading"
  }
});

export default apolloProvider;
