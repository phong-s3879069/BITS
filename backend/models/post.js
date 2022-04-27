const mongoose = require('mongoose');
const PostSchema = new mongoose.Schema({
    user_id : {
        type: mongoose.Types.ObjectId,
        ref: "users"
    },
    post_category_id: {
        type: mongoose.Types.ObjectId,
        ref: "post_categories"
    },
    title: String,
    content: String,
    votes: [{
        type: mongoose.Types.ObjectId,
        ref: "users"
    }],
    images: String
}, {timestamps: true});
exports.post = mongoose.model('Post', PostSchema);