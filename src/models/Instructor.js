import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Schema = new Schema({
    name: {
        type: String,
    },
    detail: {
        type: String
    },
    position:{
      type:String
    },
    imgpath:{
      type:String
    },
    created_date:{
      type:Date
    }
});




const ModelClass = mongoose.model('Instructor', Schema);
export default ModelClass;
