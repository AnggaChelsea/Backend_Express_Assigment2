const mongoose = require('mongoose');
const {
	Schema
} = mongoose;

const powerSchema = new Schema({
	health: Number,
	meals: Number,
	power: Number
});

const Power = mongoose.model('Power', powerSchema);
module.exports = Power;