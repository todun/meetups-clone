import { gql } from 'apollo-server-express';

import authTypes from './auth';
import cityTypes from './city';
import commentTypes from './comment';
import meetupTypes from './meetup';
import userTypes from './user';

const rootTypes = gql`
  scalar Date

  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }
`;

const typeDefs = [
  authTypes,
  cityTypes,
  commentTypes,
  meetupTypes,
  rootTypes,
  userTypes,
];

export default typeDefs;
