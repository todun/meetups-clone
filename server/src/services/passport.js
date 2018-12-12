import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import { Strategy as LocalStrategy } from 'passport-local';

import config from '../config';

import models from '../models';

const { jwt_encryption } = config;

// JWT Setup Options
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: jwt_encryption,
};

// JWT Strategy Creation
const jwtLogin = new JwtStrategy(jwtOptions, async (payload, done) => {
  try {
  	// Check for user in DB corresponding to decoded token
    const user = await models.User.findById(payload.sub);

    // If no user
    if (!user) done(null, false);

    // If user present
    done(null, user);
  } catch (error) {
    done(error, false);
  }
});

// Local Setup Options
const localOptions = {
  usernameField: 'email',
};

// Local Strategy Creation
const localLogin = new LocalStrategy(
  localOptions,
  async (email, password, done) => {
    try {
      // Find user from DB corresponding to email
      const user = await User.findOne({ email });

      if (!user) done(null, false);

      // Check if password is correct
      const isMatch = await user.comparePasswords(password);

      // If passwords do not match
      if (!isMatch) done(null, false);
      // Else if they match
      done(null, user);
    } catch (error) {
      done(error);
    }
  }
);

// Passport Use
passport.use(jwtLogin);
passport.use(localLogin);
