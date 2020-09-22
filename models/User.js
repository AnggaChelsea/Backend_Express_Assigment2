const mongoose = require('mongoose');
const joi = require('joi');
const {
    Schema
} = mongoose;

//create Schema
const userSchema = new Schema({
    username: String,
    email: String,
    password:String,
    //menghubungkan power dan Townhall ke dalam user
    Townhall:[{ 
        type: Schema.Types.ObjectId,
        reference: 'User'
    }],
    Power: [{
        type: Schema.Types.ObjectId,
        references: 'User'
    }]
});

//create module
const User = mongoose.model('User', userSchema);
//exports some module
module.exports = User;