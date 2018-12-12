import jwt from 'jsonwebtoken';
import { combineResolvers } from 'graphql-resolvers';

import { isAuthenticated } from './authorization';
import config from '../config';
import { populate } from '../helpers';

const { jwt_encryption, jwt_expiration } = config;

export default {
  Query: {
    allUsers: async (parent, args, { models: { User } }, info) => {
      try {
        const users = await User.find({}, { password: 0 }).populate(
          populate.user
        );

        return users;
      } catch (error) {
        throw new Error(error);
      }
    },
    userById: async (parent, { userId }, { models: { User } }, info) => {
      try {
        const user = await User.findById(userId, { password: 0 }).populate(
          populate.user
        );

        return user;
      } catch (error) {
        throw new Error(error);
      }
    },
    currentUser: async (parent, args, { currentUser }, info) => {
      if (currentUser) {
        return currentUser;
      }
    },
  },
  Mutation: {
    updateUserInfo: combineResolvers(
      isAuthenticated,
      async (parent, { input }, { models: { User } }) => {
        try {
          const updatedUser = await User.findByIdAndUpdate(
            input.userId,
            { ...input },
            { new: true }
          );

          return updatedUser;
        } catch (error) {
          throw new Error(error);
        }
      }
    ),
  },
};
