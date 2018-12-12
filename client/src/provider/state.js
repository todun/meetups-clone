import { InMemoryCache } from "apollo-cache-inmemory";
import { withClientState } from "apollo-link-state";

const cache = new InMemoryCache();

const stateLink = withClientState({
  cache,
  defaults: {},
  resolvers: {}
});

export default stateLink;
