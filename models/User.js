const mongoose = require('mongoose');
const joi = require('joi');
const {
    Schema
} = mongoose;

//create Schema
const userSchema = new Schema({
    username: {
        type: String,
        
    },
    email: {
        type: String,
        default: 'email@example.com',
        
    },
    password:String,
    
    //menghubungkan power dan Townhall ke dalam user
    townhalls:[{ 
        type: Schema.Types.ObjectId,
        ref: 'Townhall'
    }],
    powers: [{
        type: Schema.Types.ObjectId,
        ref: 'Power'
    }]

});

//create module
const User = mongoose.model('User', userSchema);
//exports some module
module.exports = User;