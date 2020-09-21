const mongoose = require('mongoose');
const joi = require('joi');
const {
    Schema
} = mongoose;

const userSchema = new Schema({
    username: String,
    email: String,
    password: String,
    //menghubungkan power ke dalam user
    power: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;