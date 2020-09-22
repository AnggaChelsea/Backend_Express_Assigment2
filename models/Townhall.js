const mongoose = require('mongoose');
const {
    Schema
} = mongoose;

const townhallSchema = new Schema({
    townhalname: String,
})

const Townhall = mongoose.model('Townhall', townhallSchema);
module.exports = Townhall;