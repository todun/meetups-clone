import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const CitySchema = new Schema({
  name: { type: String },
  country: { type: String },
},
{
	timestamps: true,
});

export default mongoose.model('City', CitySchema);
