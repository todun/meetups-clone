'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Schema = _mongoose2.default.Schema;

const CommentSchema = new Schema({
  content: { type: String },
  commentedBy: { type: Schema.Types.ObjectId, ref: 'User' },
  replies: [{ type: Schema.Types.ObjectId, ref: 'Reply' }]
}, {
  timestamps: true
});

exports.default = _mongoose2.default.model('Comment', CommentSchema);
//# sourceMappingURL=comment.js.map