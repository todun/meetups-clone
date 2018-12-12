import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const CommentSchema = new Schema(
  {
    content: { type: String },
    commentedBy: { type: Schema.Types.ObjectId, ref: 'User' },
    replies: [{ type: Schema.Types.ObjectId, ref: 'Reply' }],
  },
  {
    timestamps: true,
  }
);

CommentSchema.virtual('id').get(function () {
  return this._id.toString();
});

export default mongoose.model('Comment', CommentSchema);
