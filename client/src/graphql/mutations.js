import gql from "graphql-tag";

export const createNewMeetup = gql`
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
    ) {
      addedBy {
        id
        fullname
      }
      location {
        name
        latitude
        longitude
      }
      type
      details {
        hostedBy {
          fullname
        }
        description
      }
    }
  }
`;

export const createAccount = gql`
  mutation Signup($input: SignupInput!) {
    signup(input: $input) {
      authenticated
      token
    }
  }
`;

export const loginToAccount = gql`
  mutation Login($input: LoginInput!) {
    login(input: $input) {
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
