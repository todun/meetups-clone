import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import config from '../config';

const { jwt_encryption, jwt_expiration } = config;

export default {
  Query: {
    allUsers: async (parent, args, { User }, info) => {
      try {
        const users = await User.find();
        return users.map(user => {
          user._id = user._id.toString();
          return user;
        });
      } catch (error) {
        throw new Error(error);
      }
    },
    currentUser: async (parent, { token }, { User }, info) => {
      try {
        const response = await jwt.decode(token, jwt_encryption);
        const user = await User.findById(response.sub, { password: 0 });

        return user;
      } catch (error) {
        throw new Error(error);
      }
    },
  },
  Mutation: {
    createAccount: async (
      parent,
      { firstname, lastname, email, password },
      { User },
      info
    ) => {
      try {
        // Check if there is a user with the same email
        const foundUser = await User.findOne({ email });

        if (foundUser) {
          throw new Error('Email is already in use');
        }

        // If no user with email create a new user
        const hashedPassword = await bcrypt.hash(password, 10);
        await new User({
          firstname,
          lastname,
          email,
          password: hashedPassword,
        }).save();

        const savedUser = await User.findOne({ email });

        // Assign auth token to new user
        return { 
          authenticated: true, 
          token: token(savedUser) 
        };
      } catch (error) {
        throw new Error(error);
      }
    },
    loginToAccount: async (parent, { email, password }, { User }, info) => {
      try {
        // Check if there is a user with the same email
        const user = await User.findOne({ email });

        if (user) {
          // Compare passwords
          const passwordsMatch = await bcrypt.compare(password, user.password);

          // Assign auth token if passwords match
          if (passwordsMatch) {
            return { 
              authenticated: true, 
              token: token(user) 
            };
          } else {
            throw new Error({
              authenticated: false,
              message: 'The password you have entered is incorrect'
            });
          }
        }
      } catch (error) {
        throw new Error(error);
      }
    },
    socialLogin: async (parent, args, { User }, info) => {
      try {
      } catch (error) {
        throw new Error(error);
      }
    },
    updatePassword: async (parent, args, { User }, info) => {
      try {
        console.log(args);
        await User.findByIdAndRemove(args);
      } catch (error) {
        throw new Error(error);
      }
    },
    deleteAccount: async (parent, args, { User }, info) => {
      try {
        console.log(args);
        await User.findByIdAndRemove(args);
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};

// Generate auth token
function token(user) {
  return jwt.sign(user.toJSON(), jwt_encryption, {
    expiresIn: jwt_expiration,
  });
}

