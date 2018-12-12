import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import validator from 'validator';

const Schema = mongoose.Schema;

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
    validate: value => validator.isEmail(value),
  },
  password: { type: String },
  addedMeetups: [{ type: Schema.Types.ObjectId, ref: 'Meetup' }],
  hostedMeetups: [{ type: Schema.Types.ObjectId, ref: 'Meetup' }],
  attendedMeetups: [{ type: Schema.Types.ObjectId, ref: 'Meetup' }],
  attending: [{ type: Schema.Types.ObjectId, ref: 'Meetup' }],
},
{
	timestamps: true,
});

// Convert type of _id to string
UserSchema.virtual('id').get(function() {
  return this._id.toString();
});

// Return fullname
UserSchema.virtual('fullname').get(function() {
  return this.firstname + ' ' + this.lastname;
});

UserSchema.virtual('fullname').set(function(name) {
  const str = name.split(' ');

  this.firstname = str[0];
  this.lastname = str[1];
});

// Encrypt/hash password prior to saving user
UserSchema.pre('save', async function(next) {
  const user = this;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(user.password, salt);

  user.password = hashedPassword;

  next();
});

// Compare passwords on login
UserSchema.methods.comparePasswords = async function(submittedPassword) {
  const user = this;

  try {
    return await bcrypt.compare(submittedPassword, user.password);
  } catch (error) {
    throw new Error(error);
  }
};

const User = mongoose.model('User', UserSchema);

export default User;
