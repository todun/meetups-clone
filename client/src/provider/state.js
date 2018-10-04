import { InMemoryCache } from "apollo-boost";
import { withClientState } from "apollo-link-state";
import axios from "axios";

// Get info on current location
async function currentLocation() {
  const response = await axios.get("http://ipinfo.io");
  const { city, region, country, loc } = response.data;
  const name = `${city}, ${region}, ${country}`;
  const latitude = loc.slice(0, loc.indexOf(","));
  const longitude = loc.slice(loc.indexOf(",") + 1);

  return {
    name,
    latitude,
    longitude
  };
}

// Check if token present i.e user is authenticated
const token = localStorage.getItem("token");

const cache = new InMemoryCache();

const stateLink = withClientState({
  cache,
  defaults: {
    currentLocation: {
      __typename: "CurrentLocation",
      location: currentLocation()
    },
    currentUser: {
      __typename: "CurrentUser",
      token
    }
  },
  resolvers: {
    Mutation: {
      changeLocation: (_, { location }, { cache }) => {
        const data = {
          changeLocation: {
            __typename: "ChangeLocation",
            location
          }
        };
        cache.writeData({ data });
        return null;
      }
    }
  }
});

export default stateLink;
