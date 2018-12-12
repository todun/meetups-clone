import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ReplySchema = new Schema(
  {
    content: { type: String },
    repliedBy: { type: Schema.Types.ObjectId, ref: 'User' },
  },
  {
    timestamps: true,
  }
);

ReplySchema.virtual('id').get(function () {
  return this._id.toString();
});

export default mongoose.model('Reply', ReplySchema);
