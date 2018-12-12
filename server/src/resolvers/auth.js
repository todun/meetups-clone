import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { AuthenticationError } from 'apollo-server';

import config from '../config';

const { jwt_encryption, jwt_expiration } = config;

export default {
  Mutation: {
    signup: async (
      parent,
      { input: { firstname, lastname, email, password } },
      { models: { User } },
      info
    ) => {
      try {
        // Check if there is a user with the same email
        const foundUser = await User.findOne({ email });

        if (foundUser) {
          throw new AuthenticationError({ error: 'Email is already in use' });
        }

        const newUser = await User.create({
          firstname,
          lastname,
          email,
          password,
        });

        // Assign token to succesfully registered user
        const token = authToken(newUser);

        return {
          authenticated: true,
          token,
        };
      } catch (error) {
        throw new Error(error);
      }
    },
    login: async (
      parent,
      { input: { email, password } },
      { models: { User } },
      info
    ) => {
      try {
        // const user = req.user;

        // // Assign token to succesfully logged in user
        // const token = authToken(user);

        // Check if there is a user corresponding to email/username
        const user = await User.findOne({ email });

        if (user) {
          // Compare passwords
          const passwordsMatch = await bcrypt.compare(password, user.password);

          // Assign auth token if passwords match
          if (passwordsMatch) {
            const token = authToken(user);

            return {
              authenticated: true,
              token,
            };
          } else {
            throw new AuthenticationError(
              'The password you have entered is incorrect'
            );
          }
        } else {
          throw new AuthenticationError(
            'The user corresponding to email does not exist'
          );
        }
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};

// Generate auth token
function authToken(user) {
  return jwt.sign(
    {
      sub: user.id,
      iat: new Date().getTime(),
    },
    jwt_encryption,
    {
      expiresIn: jwt_expiration,
    }
  );
}
