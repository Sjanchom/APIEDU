import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Schema = new Schema({
    imgpath: {
        type: String
    },
    name: {
        type: String
    },
    order:{
      type:int
    },
    type:{
      type:int
    }
});


const ModelClass = mongoose.model('Widgets', Schema);
export default ModelClass;
