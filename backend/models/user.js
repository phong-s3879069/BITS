var mongoose = require('mongoose')
var UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    name: String,
    userType: [String],
    avatar: String,
    bio: String,
    contacts: [String],
    followers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:"users"
    }],
    followings: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:"users"
    }],
    
    savedCoin: [{
        type: mongoose.Schema.Types.ObjectId,

        ref:"coins"}]
 })
 exports.user = mongoose.model('User', UserSchema)