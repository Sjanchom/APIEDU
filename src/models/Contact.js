import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Schema = new Schema({
    thumbnail: {
        type: String,
    },
    text: {
        type: String
    }
});

const ModelClass = mongoose.model('Contact', Schema);
export default ModelClass;
