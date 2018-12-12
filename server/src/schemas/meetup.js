import { gql } from 'apollo-server-express';

export default gql`
  type MeetupLocation {
    name: String!
    longitude: Float!
    latitude: Float!
  }

  type MeetupDetails {
    name: String!
    hostedBy: User!
    description: String!
    imageUrl: String!
    eventStart: Date!
    eventEnd: Date!
  }

  type Meetup {
    id: ID!
    addedBy: User!
    type: [String!]!
    location: MeetupLocation!
    details: MeetupDetails!
    photos: [String]
    attendees: [User]!
    comments: [Comment]!
    createdAt: Date!
    updatedAt: Date!
  }

  extend type Query {
  	allMeetups: [Meetup]!
    meetupsByType(type: String!): [Meetup]!
    meetupsByLocation(location: String!): [Meetup]!
    meetupsByTypeAndLocation(type: String!, location: String!): [Meetup]!
  }

  input MeetupLocationInput {
    name: String!
    longitude: Float!
    latitude: Float!
  }

  input MeetupDetailsInput {
    name: String!
    hostedBy: String!
    description: String!
    imageUrl: String!
    eventStart: Date!
    eventEnd: Date!
  }

  input UpdateMeetupInput {
    meetupId: ID!
    location: MeetupLocationInput
    type: [String]
    name: String
    hostedBy: String
    description: String
    imageUrl: String
    eventStart: Date
    eventEnd: Date
  }

  extend type Mutation {
    createMeetup(
      addedBy: ID!
    	location: MeetupLocationInput!, 
      type: [String!]!, 
    	details: MeetupDetailsInput!, 
    ): Meetup!
    updateMeetup(input: UpdateMeetupInput!): Meetup!
  }
`;
