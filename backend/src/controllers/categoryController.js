const Category = require('../models/categoryModel.js');
const mongoose = require('mongoose');

/**
 * יצירת קטגוריה חדשה
 */
const createCategory = async (req, res) => {
  const { name, parent = null } = req.body;
  try {
    const category = new Category({ name, parent });
    await category.save();
    return res.status(201).json({ message: "קטגוריה נוספה בהצלחה", data: category });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ message: "שגיאת בשרת בעת יצירת קטגוריה", error: err.message });
  }
};

/**
 * שליפת כל הקטגוריות (כולל היררכיה)
 */
const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find().populate('parent', 'name');
    if (!categories || categories.length === 0) {
      return res.status(404).json({ message: "לא נמצאו קטגוריות" });
    }
    return res.status(200).json({ data: categories });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ message: "שגיאת בשרת בעת שליפת קטגוריות", error: err.message });
  }
};

/**
 * שליפת קטגוריות ראשיות בלבד
 */
const getMainCategories = async (req, res) => {
  try {
    const categories = await Category.find({ parent: null });
    return res.status(200).json({ data: categories });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ message: "שגיאת בשרת בעת שליפת קטגוריות ראשיות", error: err.message });
  }
};

/**
 * שליפת תתי קטגוריות לפי קטגוריה ראשית
 */
const getSubCategories = async (req, res) => {
  const { parentId } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(parentId)) {
      return res.status(400).json({ message: "ParentId לא חוקי" });
    }

    // פשוט משווים למחרוזת – Mongoose יתמודד עם ObjectId
    const subCategories = await Category.find({ parent: parentId });

    if (!subCategories || subCategories.length === 0) {
      return res.status(404).json({ message: "לא נמצאו תתי קטגוריות עבור קטגוריה זו" });
    }

    return res.status(200).json({ data: subCategories });

  } catch (err) {
    console.error(err.message);
    return res.status(500).json({
      message: "שגיאת בשרת בעת שליפת תתי קטגוריות",
      error: err.message,
    });
  }
};
/**
 * עדכון קטגוריה
 */
const updateCategory = async (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;
  try {
    const category = await Category.findByIdAndUpdate(id, updatedData, { new: true });
    if (!category) {
      return res.status(404).json({ message: `קטגוריה ${id} לא נמצאה` });
    }
    return res.status(200).json({ message: "קטגוריה עודכנה בהצלחה", data: category });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ message: "שגיאת בשרת בעת עדכון קטגוריה", error: err.message });
  }
};

/**
 * מחיקת קטגוריה
 */
const deleteCategory = async (req, res) => {
  const id = req.params.id;
  try {
    // נבדוק אם יש מוצרים תחת הקטגוריה הזו
    const productsInCategory = await Product.find({ category: id });

    if (productsInCategory.length > 0) {
      return res.status(400).json({
        message: "לא ניתן למחוק קטגוריה זו, קיימים מוצרים המשויכים אליה.",
        count: productsInCategory.length,
      });
    }

    // נבדוק אם יש תתי־קטגוריות
    const subCategories = await Category.find({ parent: id });
    if (subCategories.length > 0) {
      return res.status(400).json({
        message: "לא ניתן למחוק קטגוריה זו, קיימות תתי־קטגוריות המשויכות אליה.",
        count: subCategories.length,
      });
    }

    // מחיקה בפועל
    const category = await Category.findByIdAndDelete(id);
    if (!category) {
      return res.status(404).json({ message: `קטגוריה ${id} לא נמצאה` });
    }

    return res.status(200).json({ message: "קטגוריה נמחקה בהצלחה" });

  } catch (err) {
    console.error(err.message);
    return res.status(500).json({
      message: "שגיאת בשרת בעת מחיקת קטגוריה",
      error: err.message,
    });
  }
};

module.exports = {
  createCategory,
  getAllCategories,
  getMainCategories,
  getSubCategories,
  updateCategory,
  deleteCategory
};