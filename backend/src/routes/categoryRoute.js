const express = require('express');
const router = express.Router();
const {
  createCategory,
  getAllCategories,
  getMainCategories,
  getSubCategories,
  updateCategory,
  deleteCategory
} = require('../controllers/categoryController.js');

// יצירת קטגוריה חדשה
router.post('/', createCategory);

// שליפת כל הקטגוריות
router.get('/', getAllCategories);

// שליפת קטגוריות ראשיות בלבד
router.get('/main', getMainCategories);

// שליפת תתי קטגוריות לפי קטגוריה ראשית
router.get('/sub/:parentId', getSubCategories);

// עדכון קטגוריה
router.put('/:id', updateCategory);

// מחיקת קטגוריה (כולל בדיקה למוצרים)
router.delete('/:id', deleteCategory);

module.exports = router;
