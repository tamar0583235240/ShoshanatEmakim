const Product = require('../models/productModel.js');
const { uploadImage, deleteImage} = require('../utils/cloudinaryService.js');

const createProduct = async (req, res) => {
  const {  category, name, description } = req.body;
  try {
    const result = await uploadImage(req.file.buffer);
    const newProduct = new Product({
      category,
      name,
      description,
      imageURL: result.secure_url,
      imageId: result.public_id
    });

    await newProduct.save();
    return res.status(201).json({ message: "מוצר נוסף בהצלחה!", data: newProduct });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ message: "שגיאת בשרת, דווח לנו בבקשה.", error: err.message });
  }
};

const getProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findById(id)
    if (!product) {
      return res.status(404).json({ message: `מוצר ${id} לא נמצא` });
    }
    else
      return res.status(200).json({ data: product });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ message: "שגיאת בשרת, דווח לנו בבקשה.", error: err.message });
  }
};

const getProductsByCategory = async(req, res)=>{
  const {category} = req.params;
  try {
    const products = await Product.find({ category:category });
    if (!products || products.length === 0) {
    return res.status(404).json({ message: `לא נמצאו מוצרים בקטגוריה ${category}` });
    }
    return res.status(200).json({ data: products });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ message: "שגיאת בשרת, דווח לנו בבקשה.", error: err.message });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    if (!products || products.length === 0) {
      return res.status(404).json({ message: `לא נמצאו מוצרים` });
    }
    return res.status(200).json({ data: products });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ message: "שגיאת בשרת, דווח לנו בבקשה.", error: err.message });
  }
};

const updateProduct = async (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;
  try {
    const product = await Product.findByIdAndUpdate(id, updatedData, { new: true });
    if (!product) {
      return res.status(404).json({ message: `מוצר ${id} לא נמצא` });
    }
    else
      return res.status(200).json({ message: "מוצר עודכן בהצלחה", data: product });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ message: "שגיאת בשרת, דווח לנו בבקשה.", error: err.message });
  }
}

const deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ message: `מוצר ${id} לא נמצא` });
    }
    if (deleteImage(product.imageId)) {
      console.log(`Image for product ${id} deleted successfully`);
      return res.status(200).json({ message: "המוצר נמחק בהצלחה" });
    }
    else
      return res.status(200).json({ message: "המוצר נמחק בהצלחה והתמונה לא נמצאה" });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ message: "שגיאת בשרת, דווח לנו בבקשה.", error: err.message });
  }
}

module.exports = { getProduct, createProduct, getProductsByCategory, getAllProducts, updateProduct, deleteProduct };