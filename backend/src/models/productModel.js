const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const {ENUM_SUB_CATEGORIES} = require('../../../shared/Enums.js');


const productSchema = new Schema({
  category: { type: String, enum: ENUM_SUB_CATEGORIES, required: true },
  name: { type: String, required: true },  
  description: { type: String, default: '' },
  imageURL : { type: String,required:true },
  imageId: { type: String, required: true },
  creationDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('product', productSchema);
