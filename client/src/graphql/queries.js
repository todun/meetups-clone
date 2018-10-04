import { gql } from "graphql-tag";

/*** Client side/local queries ***/

export const fetchCurrentLocation = gql`
  query CurrentLocation {
    currentLocation @client {
      location
    }
  }
`;

// export const currentUser = gql`
//   query CurrentUser {
//     currentUser @client {
//       token
//     }
//   }
// `;

/*** Server side/remote queries ***/

export const fetchMeetups = gql`
  query AllMeetups {
    allMeetupEvents {
      _id
      name
    }
  }
`;

export const fetchUsers = gql`
  query AllUsers {
    allUsers {
      _id
      name
    }
  }
`;

export const fetchCurrentUser = gql`
  query CurrentUser($token: String!) {
    currentUser(token: $token) {
      _id
      name
    }
  }
`;

export const meetupsByLocation = gql`
  query MeetupsByLocation($location: String!) {
    meetupsByLocation(location: $location) {
      _id
      addedBy
      location {
        name
      }
      type
      details {
        name
        hostedBy
        description
        eventStart
        eventEnd
      }
    }
  }
`;
