import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const CitySchema = new Schema({
  name: { type: String },
  country: { type: String },
},
{
	timestamps: true,
});

CitySchema.virtual('id').get(function () {
  return this._id.toString();
});

export default mongoose.model('City', CitySchema);
