import { gql } from 'apollo-server-express';

export default gql`
	type AuthenticatedUser {
		authenticated: Boolean!
		token: String!
	}
	
	input SignupInput {
	  firstname: String!
	  lastname: String
	  email: String!
	  password: String!
	}

	input LoginInput {
	  email: String!
	  password: String!
	}

	extend type Mutation {
		signup(input: SignupInput!): AuthenticatedUser!
		login(input: LoginInput!): AuthenticatedUser!
		socialLogin(email: String!): AuthenticatedUser!
	}
`;
