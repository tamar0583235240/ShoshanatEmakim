const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
  name: { type: String, required: true },  
  description: { type: String, default: '' },
  imageURL : { type: String,required:true },
  imageId: { type: String, required: true },
  creationDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Product', productSchema);
