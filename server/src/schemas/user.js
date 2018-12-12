import { gql } from 'apollo-server-express';

export default gql`
	type User {
		id: ID!
		fullname: String!
		firstname: String!
		lastname: String!
		email: String!
		addedMeetups: [Meetup]!
		hostedMeetups: [Meetup]!
		attendedMeetups: [Meetup]!
		attending: [Meetup]!
		token: String
	}
	
	extend type Query {
		allUsers: [User]!
	  userById(userId: ID!): User!
	  currentUser: User!
	}

	input UserUpdateInput {
		firstname: String
		lastname: String
	  email: String
	  userId: ID!
	}

	input ChangePasswordInput {
	  email: String!
	  oldPassword: String!
	  newPassword: String!
	}

	extend type Mutation {
		updateUserInfo(input: UserUpdateInput!): User!
		updatePassword(input: ChangePasswordInput!): Boolean!
		deleteAccount(id: ID!): Boolean!
		removeUser(id: ID!): Boolean! #Admin only
	}
`
