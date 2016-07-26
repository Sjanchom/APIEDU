import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const model = new Schema({
    type: {
        type: Number,
        unique: true
    },
    name: {
        type: String
    }
});


const ModelClass = mongoose.model('ImageType', model);
export default ModelClass;
