import { mergeResolvers } from 'merge-graphql-schemas';

import cityResolvers from './city';
import meetupResolvers from './meetup';
import userResolvers from './user';

const resolvers = [
  cityResolvers,
  meetupResolvers,
  userResolvers
];

export default mergeResolvers(resolvers, { all: true });
