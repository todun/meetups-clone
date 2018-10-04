import mongoose from 'mongoose';
import validate from 'mongoose-validator';

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
    validate: [
      validate({
        validator: 'isEmail',
        message: 'Please enter a valid email.',
      }),
    ],
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

UserSchema.virtual('fullname').get(function() {
  return this.firstname + ' ' + this.lastname;
});

UserSchema.virtual('fullname').set(function(name) {
  const str = name.split(' ');

  this.firstname = str[0];
  this.lastname = str[1];
});

const User = mongoose.model('User', UserSchema);

export default User;
