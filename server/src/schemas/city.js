import { gql } from 'apollo-server-express';

export default gql`
	type City {
	  id: ID!
	  name: String!
	  country: String!
	  createdAt: Date!
	  updatedAt: Date!
	}

	extend type Query {
		allCities: [City!]!
	}

	extend type Mutation {
	  addCity(name: String!, country: String!): City!
	}
`;
