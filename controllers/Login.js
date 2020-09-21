const mongoose = require('mongoose');
const {
    Schema
} = mongoose;

const loginSchema = new Schema({
    email: String,
    password: String
})


const Login = mongoose.model('Login', loginSchema);
module.exports = Login;