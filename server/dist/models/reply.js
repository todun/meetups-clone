'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Schema = _mongoose2.default.Schema;

const ReplySchema = new Schema({
  content: { type: String },
  repliedBy: { type: Schema.Types.ObjectId, ref: 'User' }
}, {
  timestamps: true
});

exports.default = _mongoose2.default.model('Reply', ReplySchema);
//# sourceMappingURL=reply.js.map