import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const model = new Schema({
    title: {
        type: String,
    },
    detail: {
        type: String
    },
    imgpath: {
        type: String
    },
    topnews: {
        type: Boolean
    },
    created_date: {
        type: Date
    }
});

model.pre('save', function(next) {
    let news = this
    news.created_date = new Date();
    next();

});


const ModelClass = mongoose.model('News', model);
export default ModelClass;
