'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _apolloServerExpress = require('apollo-server-express');

var _graphqlTools = require('graphql-tools');

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _schemas = require('./schemas');

var _schemas2 = _interopRequireDefault(_schemas);

var _resolvers = require('./resolvers');

var _resolvers2 = _interopRequireDefault(_resolvers);

var _meetup = require('./models/meetup');

var _meetup2 = _interopRequireDefault(_meetup);

var _city = require('./models/city');

var _city2 = _interopRequireDefault(_city);

var _user = require('./models/user');

var _user2 = _interopRequireDefault(_user);

require('./db');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// App init
const app = (0, _express2.default)();

// Middlewares


// DB config
app.use(_express2.default.static(_path2.default.join(__dirname, '../../client/dist')));
app.use((0, _morgan2.default)('dev'));
app.use((0, _cors2.default)());

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  app.use(_express2.default.static('../../client/dist'));

  app.get('*', (req, res) => {
    res.sendFile(_path2.default.join(__dirname, '../../client', 'dist', 'index.html'));
  });
}

// Schema definition
const schema = (0, _graphqlTools.makeExecutableSchema)({
  typeDefs: _schemas2.default,
  resolvers: _resolvers2.default
});

// Graphql Endpoint
const endpointURL = '/graphql';

app.use(endpointURL, _bodyParser2.default.json(), (0, _apolloServerExpress.graphqlExpress)({
  schema,
  context: { Meetup: _meetup2.default, City: _city2.default, User: _user2.default }
}));
app.use('/graphiql', _bodyParser2.default.json(), (0, _apolloServerExpress.graphiqlExpress)({ endpointURL }));
app.use((0, _morgan2.default)('dev'));

exports.default = app;
//# sourceMappingURL=app.js.map