import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const MeetupSchema = new Schema(
  {
    addedBy: { type: Schema.Types.ObjectId, ref: 'User' },
    type: { type: [String] },
    location: { 
      name: { type: String },
      longitude: { type: Number },
      latitude: { type: Number },
    },
    details: { 
      name: { type: String },
      hostedBy: { type: Schema.Types.ObjectId, ref: 'User' },
      description: { type: String },
      imageUrl: { type: String },
      eventStart: { type: Date },
      eventEnd: { type: Date },
    },
    photos: { type: [String] },
    attendees: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  },
  {
    timestamps: true,
  }
);

MeetupSchema.virtual('id').get(function () {
  return this._id.toString();
});

export default mongoose.model('Meetup', MeetupSchema);
