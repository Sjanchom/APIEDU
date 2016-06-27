import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Schema = new Schema({
    date: {
        type: String,
    },
    detail: {
        type: String
    },
    order:{
      type: int
    }
});



const ModelClass = mongoose.model('food', Schema);
export default ModelClass;
