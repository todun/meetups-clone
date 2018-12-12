import { AuthenticationError } from 'apollo-server-express';
import jwt from 'jsonwebtoken';

import models from '../models';
import config from '../config';

import populate from './populate';

const { jwt_encryption } = config;

const currentUser = async token => {
  if (!token) {
    return null;
  }

  try {
    // Check for auth scheme and slice it from string
    if (token.startsWith('Bearer ')) {
      token = token.slice(7, token.length).trimLeft();

      const { sub } = jwt.decode(token, jwt_encryption);

      const user = await models.User.findById(sub, { password: 0 }).populate(
        populate.user
      );

      return user;
    }
  } catch (error) {
    throw new AuthenticationError(error);
  }
};

export default currentUser;
