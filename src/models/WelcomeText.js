import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const welcomeTextSchema = new Schema({
  imgpath: { type: String},
  detail: String,
  title:String
});


const model = mongoose.model('Welcometext', welcomeTextSchema);
export default model;
