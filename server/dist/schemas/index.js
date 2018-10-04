'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mergeGraphqlSchemas = require('merge-graphql-schemas');

var _meetup = require('./meetup');

var _meetup2 = _interopRequireDefault(_meetup);

var _city = require('./city');

var _city2 = _interopRequireDefault(_city);

var _user = require('./user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const types = [_meetup2.default, _city2.default, _user2.default];

exports.default = (0, _mergeGraphqlSchemas.mergeTypes)(types, { all: true });
//# sourceMappingURL=index.js.map