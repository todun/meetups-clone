import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';

import typeDefs from './schemas';
import resolvers from './resolvers';

import Meetup from './models/meetup';
import City from './models/city';
import User from './models/user';

// DB config
import './db';

// App init
const app = express();

// Middlewares
app.use(express.static(path.join(__dirname, '../../client/dist')));
app.use(morgan('dev'));
app.use(cors());

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../../client/dist'));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client', 'dist', 'index.html'));
  });
}

// Schema definition
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

// Graphql Endpoint
const endpointURL = '/graphql';

app.use(
  endpointURL,
  bodyParser.json(),
  graphqlExpress({
    schema,
    context: { Meetup, City, User },
  })
);
app.use('/graphiql', bodyParser.json(), graphiqlExpress({ endpointURL }));
app.use(morgan('dev'));

export default app;
