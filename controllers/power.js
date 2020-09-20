const mongoose = require('mongoose');
const {Schema} = mongoose;

const powerSchema = new Schema({
	health: String,
	meals: String,
	power: String
});

const Power = mongoose.model('Power', powerSchema);
module.exports = Power;