import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Schema = new Schema({
    time: {
        type: String,
    },
    detail: {
        type: String
    },
    order:{
      type: int
    }
});



const ModelClass = mongoose.model('schedule', Schema);
export default ModelClass;
