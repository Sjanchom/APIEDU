import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const gallarySchema = new Schema({
  imgpath: { type: String},
  describe: String,
  title:String,
  type:int
});


const model = mongoose.model('gallary', gallarySchema);
export default model;
