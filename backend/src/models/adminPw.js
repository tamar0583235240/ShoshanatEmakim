const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pwSchema = new Schema({
  userName: { type: String, required: true },  
  password: { type: String, default: '' },
});

module.exports = mongoose.model('pw', pwSchema);
