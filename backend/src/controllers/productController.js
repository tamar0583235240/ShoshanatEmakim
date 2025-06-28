const Product = require('../models/productModel.js');


const createProduct = async (req, res) => {
  const {  category, name, description } = req.body;
  number = req.number; 
  try {
    const imageURL = `shared/images/${number}.jpg`; // relative from the basic folder

    const newProduct = new Product({
      category,
      number,
      name,
      description,
      imageURL
    });

    await newProduct.save();
    return res.status(201).json({ message: "Product created successfully", data: newProduct });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ message: "Internal server error", error: err.message });
  }
};

const getProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findById(id)
    if (!product) {
      return res.status(404).json({ message: `Product ${id} not found` });
    }
    else
      return res.status(200).json({ data: product });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ message: "Internal server error", error: err.message });
  }
};

const getProductsByCategory = async(req, res)=>{
  const {category} = req.params;
  try {
    const products = await Product.find({ category:category });
    if (!products || products.length === 0) {
    return res.status(404).json({ message: `No products found in category ${category}` });
    }
    return res.status(200).json({ data: products });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ message: "Internal server error", error: err.message });
  }
};

module.exports = { getProduct , createProduct, getProductsByCategory };