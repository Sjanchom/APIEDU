import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const gallarySchema = new Schema({
    imgpath: {
        type: String
    },
    describe: String,
    title: String,
    type: {
        type: Schema.Types.ObjectId,
        ref: 'ImageType'
    }
});


const model = mongoose.model('Gallary', gallarySchema);
export default model;
