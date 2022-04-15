import mongoose from 'mongoose';
 
const Schema  = mongoose.Schema;

const newsSchema =  new Schema({
    title: {
        type: String,
         required: true,
        trim: true,
    },
    category: {
        type: String,
        required: true,
    },
    content: {
        type: String, 
        required: true, 
        trim: true, 
    },
    date: {
        type: Date,
        required: true
    }, 


}, {
    timestamps: true,
})

const News =  mongoose.model('News', newsSchema);

module.exports =  News;