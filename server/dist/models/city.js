'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Schema = _mongoose2.default.Schema;

const CitySchema = new Schema({
  name: { type: String },
  country: { type: String }
}, {
  timestamps: true
});

exports.default = _mongoose2.default.model('City', CitySchema);
//# sourceMappingURL=city.js.map