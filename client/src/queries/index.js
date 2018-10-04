import { gql } from "apollo-boost";

export const allMeetups = gql`
  query AllMeetups {
    allMeetups {
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

export const meetupsByType = gql`
  query MeetupsByType($type: String!) {
    meetupsByType(type: $type) {
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

export const meetupsByTypeAndLocation = gql`
  query MeetupsByTypeAndLocation($location: String!) {
    meetupsByTypeAndLocation(location: $location) {
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

export const createMeetup = gql`
  mutation CreateMeetup(
    $addedBy: ID!
    $location: MeetupLocationInput!
    $type: [String!]!
    $details: MeetupDetailsInput!
  ) {
    createMeetup(
      addedBy: $addedBy
      location: $location
      type: $type
      details: $details
    )
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

export const createMeetupAccount = gql`
  mutation CreateAccount(
    $firstname: String!
    $lastname: String!
    $email: String!
    $password: String!
  ) {
    createAccount(
      firstname: $firstname
      lastname: $lastname
      email: $email
      password: $password
    ) {
      _id
      firstname
      lastname
      email
      token
    }
  }
`;

export const loginToAccount = gql`
  mutation LoginToAccount($email: String!, $password: String!) {
    loginToAccount(email: $email, password: $password) {
      _id
      firstname
      lastname
      email
      token
    }
  }
`;
