import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Schema = new Schema({
    type: {
        type: int,
        unique: true
    },
    name: {
        type: String
    }
});


const ModelClass = mongoose.model('ImageType', Schema);
export default ModelClass;
