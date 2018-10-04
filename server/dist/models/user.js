'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _mongooseValidator = require('mongoose-validator');

var _mongooseValidator2 = _interopRequireDefault(_mongooseValidator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Schema = _mongoose2.default.Schema;

const UserSchema = new Schema({
  firstname: { type: String },
  lastname: { type: String },
  email: {
    type: String,
    lowercase: true,
    trim: true,
    index: true,
    unique: true,
    sparse: true,
    validate: [(0, _mongooseValidator2.default)({
      validator: 'isEmail',
      message: 'Please enter a valid email.'
    })]
  },
  password: { type: String },
  addedMeetups: [{ type: Schema.Types.ObjectId, ref: 'Meetup' }],
  hostedMeetups: [{ type: Schema.Types.ObjectId, ref: 'Meetup' }],
  attendedMeetups: [{ type: Schema.Types.ObjectId, ref: 'Meetup' }],
  attending: [{ type: Schema.Types.ObjectId, ref: 'Meetup' }]
}, {
  timestamps: true
});

UserSchema.virtual('fullname').get(function () {
  return this.firstname + ' ' + this.lastname;
});

UserSchema.virtual('fullname').set(function (name) {
  const str = name.split(' ');

  this.firstname = str[0];
  this.lastname = str[1];
});

const User = _mongoose2.default.model('User', UserSchema);

exports.default = User;
//# sourceMappingURL=user.js.map