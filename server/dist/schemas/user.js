"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = `

type User {
	_id: ID!
	firstname: String!
	lastname: String
	email: String!
	followers: [String!]
	following: [String!]
	token: String
} 

type AuthenticatedUser {
	authenticated: Boolean!
	token: String!
}

type Query {
	allUsers: [User!]!
  currentUser(token: String!): User!
}

type Mutation {
	createAccount(firstname: String!, lastname: String!, email: String!, password: String!): AuthenticatedUser!
	loginToAccount(email: String!, password: String!): AuthenticatedUser
	socialLogin(email: String!): User
	updatePassword(email: String!, password: String!, newPassword: String!): Boolean
	deleteAccount(email: String!, password: String!): Boolean
}

`;
//# sourceMappingURL=user.js.map