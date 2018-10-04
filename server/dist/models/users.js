'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _crypto = require('crypto');

var _crypto2 = _interopRequireDefault(_crypto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Schema = _mongoose2.default.Schema;
const UserSchema = new Schema({
  name: String,
  email: String,
  salt: {
    type: String,
    required: true
  },
  hashedPassword: {
    type: String,
    required: true
  },
  addedMeetups: [{ type: Schema.Types.ObjectId, ref: 'Event' }],
  hostedMeetups: [{ type: Schema.Types.ObjectId, ref: 'Event' }],
  attendedMeetups: [{ type: Schema.Types.ObjectId, ref: 'Event' }],
  attending: [{ type: Schema.Types.ObjectId, ref: 'Event' }]
}, {
  timestamps: true
});

// Exclude selected before returning user
UserSchema.methods.toJSON = () => {
  const user = undefined.toObject();
  delete user.hashedPassword;
  delete user.__v;
  delete user.salt;

  return user;
};

UserSchema.virtual('id').get(function () {
  return this._id;
});

// Encrypt password before returning
UserSchema.virtual('password').set(function (password) {
  this.salt = _crypto2.default.randomBytes(32).toString('base64');
  this.hashedPassword = this.encryptPassword(password, this.salt);
}).get(function () {
  return this.hashedPassword;
});

UserSchema.methods.encryptPassword = (password, salt) => _crypto2.default.createHmac('sha1', salt).update(password).digest('hex');

// Compare passwords (login flow)
UserSchema.methods.checkPassword = function (password) {
  return this.encryptPassword(password, this.salt) === this.hashedPassword;
};

const User = _mongoose2.default.model('User', UserSchema);

exports.default = User;


UserSchema.pre('save', async function (next) {
  if (this.isModified('password') || this.isNew) {
    let error, salt, hash;
    [error, salt] = await to(bcrypt.genSalt(10));
    if (error) TE(error.message, true);

    [error, hash] = await to(bcrypt.hash(this.password, salt));
    if (error) TE(error.message, true);

    this.password = hash;
  } else {
    return next();
  }
});

UserSchema.methods.comparePassword = async function (pw) {
  let err, pass;
  if (!this.password) TE('password not set');

  [err, pass] = await to(bcrypt_p.compare(pw, this.password));
  if (err) TE(err);

  if (!pass) TE('invalid password');

  return this;
};

UserSchema.methods.getJWT = function () {
  let expiration_time = parseInt(CONFIG.jwt_expiration);
  return 'Bearer ' + jwt.sign({ user_id: this._id }, CONFIG.jwt_encryption, {
    expiresIn: expiration_time
  });
};

UserSchema.methods.toWeb = function () {
  let json = this.toJSON();
  json.id = this._id; //this is for the front end
  return json;
};
//# sourceMappingURL=users.js.map