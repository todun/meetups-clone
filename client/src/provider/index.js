import Vue from "vue";
import { InMemoryCache } from "apollo-cache-inmemory";
import ApolloClient from "apollo-client";
import { ApolloLink } from "apollo-link";
import VueApollo from "vue-apollo";

import errorLink from "./error";
import authLink from "./auth";
import httpLink from "./http";
import stateLink from "./state";

// Create Apollo Client
const apolloClient = new ApolloClient({
  link: ApolloLink.from([errorLink, authLink, stateLink, httpLink]),
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
