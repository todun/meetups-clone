'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const { jwt_encryption, jwt_expiration } = _config2.default;

exports.default = {
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
        const response = await _jsonwebtoken2.default.decode(token, jwt_encryption);
        const user = await User.findById(response.sub, { password: 0 });

        return user;
      } catch (error) {
        throw new Error(error);
      }
    }
  },
  Mutation: {
    createAccount: async (parent, { firstname, lastname, email, password }, { User }, info) => {
      try {
        // Check if there is a user with the same email
        const foundUser = await User.findOne({ email });

        if (foundUser) {
          throw new Error('Email is already in use');
        }

        // If no user with email create a new user
        const hashedPassword = await _bcrypt2.default.hash(password, 10);
        await new User({
          firstname,
          lastname,
          email,
          password: hashedPassword
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
          const passwordsMatch = await _bcrypt2.default.compare(password, user.password);

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
      try {} catch (error) {
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
    }
  }
};

// Generate auth token

function token(user) {
  return _jsonwebtoken2.default.sign(user.toJSON(), jwt_encryption, {
    expiresIn: jwt_expiration
  });
}
//# sourceMappingURL=user.js.map