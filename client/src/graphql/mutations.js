import { gql } from "apollo-boost";

export const createNewMeetup = gql`
  mutation CreateMeetup(
    $addedBy: ID!
    $location: String!
    $type: String!
    $details: MeetupDetails!
  ) {
    createMeetup(
      addedBy: $addedBy
      location: $location
      type: $type
      details: $details
    ) {
      addedBy
      location
      type
      details
    }
  }
`;

export const createAccount = gql`
  mutation CreateAccount($name: String!, $email: String!, $password: String!) {
    createAccount(name: $name, email: $email, password: $password) {
      authenticated
      token
    }
  }
`;

export const loginToAccount = gql`
  mutation LoginToAccount($email: String!, $password: String!) {
    loginToAccount(email: $email, password: $password) {
      authenticated
      token
    }
  }
`;

export const changeLocation = gql`
  mutation ChangeLocation($location: String!) {
    changeLocation(location: $location) @client {
      location
    }
  }
`;
