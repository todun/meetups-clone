'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Schema = _mongoose2.default.Schema;

const MeetupSchema = new Schema({
  addedBy: { type: Schema.Types.ObjectId, ref: 'User' },
  type: { type: [String] },
  location: {
    name: { type: String },
    longitude: { type: Number },
    latitude: { type: Number }
  },
  details: {
    name: { type: String },
    hostedBy: { type: Schema.Types.ObjectId, ref: 'User' },
    description: { type: String },
    imageUrl: { type: String },
    eventStart: { type: Date },
    eventEnd: { type: Date }
  },
  photos: { type: [String] },
  attendees: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
}, {
  timestamps: true
});

exports.default = _mongoose2.default.model('Meetup', MeetupSchema);
//# sourceMappingURL=meetup.js.map