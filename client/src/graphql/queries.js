import gql from "graphql-tag";

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
    allMeetups {
      id
      name
    }
  }
`;

export const fetchAllUsers = gql`
  query AllUsers {
    allUsers {
      id
      fullname
    }
  }
`;

export const fetchUserById = gql`
  query UserById {
    userById {
      id
      fullname
      email
    }
  }
`;

export const fetchCurrentUser = gql`
  query CurrentUser {
    currentUser {
      id
      fullname
      email
    }
  }
`;

export const meetupsByLocation = gql`
  query MeetupsByLocation($location: String!) {
    meetupsByLocation(location: $location) {
      id
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
