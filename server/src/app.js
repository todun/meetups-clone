import cors from 'cors';
import express from 'express';
import passport from 'passport';
import { ApolloServer } from 'apollo-server-express';

import resolvers from './resolvers';
import typeDefs from './schemas';

import models from './models';

// DB config
import './db';

import './services/passport';

import { currentUser } from './helpers';
import config from './config';

const { frontend_dev_url, frontend_prod_url } = config;

// App init
const app = express();

// Init. passport
passport.initialize();

const url = process.env.NODE_ENV === 'production'
  ? frontend_prod_url
  : frontend_dev_url;

const corsOptions = {
  origin: (origin, callback) =>
    (url.indexOf(origin) !== -1)
      ? callback(null, true)
      : callback(new Error('Access Denied!'))
};

// Middlewares
app.use(cors());

// Apollo server instance
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  async context({ req, res }) {
    const token = req.headers['x-access-token'] || req.headers['authorization'];

    return {
      currentUser: await currentUser(token),
      models,
      req,
    };
  },
  playground: {
    endpoint: '/graphql',
    settings: {
      'editor.theme': 'dark',
      'editor.cursorShape': 'line',
    },
  },
  formatError: error => {
    const message = error.message
      .replace('SequelizeValidationError: ', '')
      .replace('Validation error: ', '');

    return {
      ...error,
      message,
    };
  },
});

apolloServer.applyMiddleware({ app, path: '/graphql' });

export default app;
