import authResolvers from './auth';
import cityResolvers from './city';
import meetupResolvers from './meetup';
import userResolvers from './user';

const resolvers = [
	authResolvers,
  cityResolvers,
  meetupResolvers,
  userResolvers,
];

export default resolvers;
