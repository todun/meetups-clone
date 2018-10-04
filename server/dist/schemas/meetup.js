"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = `

scalar DateTime

type MeetupLocation {
  name: String!
  longitude: Float!
  latitude: Float!
}

type MeetupDetails {
  name: String!
  hostedBy: String!
  description: String!
  imageUrl: String!
  eventStart: DateTime!
  eventEnd: DateTime!
}

type Meetup {
  _id: ID!
  addedBy: String!
  type: [String!]!
  location: MeetupLocation!
  details: MeetupDetails!
  photos: [String]
  attendees: [String]!
  comments: [String]!
}

# Queries

type Query {
	allMeetups: [Meetup]!
}

type Query {
  meetupsByType(type: String!): [Meetup]!
}

type Query {
  meetupsByLocation(location: String!): [Meetup]!
}

type Query {
  meetupsByTypeAndLocation(type: String!, location: String!): [Meetup]!
}

# Mutations

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
  eventStart: DateTime!
  eventEnd: DateTime!
}

type Mutation {
  createMeetup(
    addedBy: ID!
  	location: MeetupLocationInput!, 
    type: [String!]!, 
  	details: MeetupDetailsInput!, 
  ): Boolean
}

`;
//# sourceMappingURL=meetup.js.map