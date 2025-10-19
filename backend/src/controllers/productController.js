const Product = require('../models/productModel.js');
const { uploadImage, deleteImage} = require('../utils/cloudinaryService.js');
const Category = require('../models/categoryModel.js');

const createProduct = async (req, res) => {
  const {  category, name, description } = req.body;
  try {
    // מציאת הקטגוריה לפי שם
    const categoryData = await Category.findById(category);
    if (!categoryData) {
      return res.status(404).json({ message: `קטגוריה בשם ${category} לא נמצאה` });
    }

    // העלאת התמונה
    const result = await uploadImage(req.file.buffer);

    // יצירת המוצר עם ה-ID של הקטגוריה
    const newProduct = new Product({
      category: categoryData._id,
      name,
      description,
      imageURL: result.secure_url,
      imageId: result.public_id
    });

    // שמירת המוצר במסד הנתונים
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
    const product = await Product.findById(id).populate('category');
    if (!product) {
      return res.status(404).json({ message: `מוצר ${id} לא נמצא` });
    }
    return res.status(200).json({ data: product });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ message: "שגיאת בשרת, דווח לנו בבקשה.", error: err.message });
  }
};

const getProductsByCategory = async (req, res) => {
  const { category } = req.params;
  try {
    let mainCategory;
    typeof category === "string" ? (
      mainCategory = await Category.find({ name: category })
    ) : (
      mainCategory = await Category.findById({ _id: category })
    );

    console.log(mainCategory, category);
    if (!mainCategory || mainCategory.length === 0) {
      return res.status(404).json({ message: `קטגוריה ${category} לא נמצאה` });
    }

    const subCategories = await Category.find({ parent: mainCategory[0]._id });
    const categoryIds = [mainCategory[0]._id, ...subCategories.map(c => c._id)];
    console.log(categoryIds);
    const products = await Product.find({ category: { $in: categoryIds } }).populate('category');
    if (!products || products.length === 0) {
      return res.status(404).json({ message: `לא נמצאו מוצרים בקטגוריה ${mainCategory[0].name}` });
    }
    return res.status(200).json({ data: products });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ message: "שגיאת בשרת, דווח לנו בבקשה.", error: err.message });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().populate('category');
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
    }
    return res.status(200).json({ message: "המוצר נמחק בהצלחה" });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ message: "שגיאת בשרת, דווח לנו בבקשה.", error: err.message });
  }
}

module.exports = { getProduct, createProduct, getProductsByCategory, getAllProducts, updateProduct, deleteProduct };