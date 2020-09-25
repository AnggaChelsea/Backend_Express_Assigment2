const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Townhall = require('../models/Townhall')
const Power = require('../models/Power')
const joi = require('joi');
const {
    Schema
} = mongoose;

//create Schema
const userSchema = new Schema({
    username: {
        type: String
    },
    email: {
        type: String,
        default: 'example@gmail.com'
    },
    password: String,

    //menghubungkan power dan Townhall ke dalam user
    townhalls: [{
        type: Schema.Types.ObjectId,
        ref: 'Townhall'
    }],
    powers: [{
        type: Schema.Types.ObjectId,
        ref: 'Power'
    }]

});

userSchema.pre('save', async function (next) {
    console.log(this.username, 'ini jalan alhamdulillah')
    const salt = await bcrypt.genSalt(3)
    const hash = await bcrypt.hash(this.password, salt)
    this.password = hash

    console.log(this.password)
    next()
})
//create module
const User = mongoose.model('User', userSchema);
//exports some module
module.exports = User;