import { gql } from 'apollo-server-express';

export default gql`
	type Comment {
	  id: ID!
	  body: String!
	  commentedBy: User!
	  replies: [Comment]!
	  createdAt: Date!
	  updatedAt: Date!
	}

	input AddCommentInput {
		body: String!
		commentedBy: String!
	}

	extend type Mutation {
	  addComment(input: AddCommentInput!): Comment!
	}
`;
