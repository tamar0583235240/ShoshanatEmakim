const express = require('express');
const { getProduct, createProduct,getProductsByCategory, updateProduct, getAllProducts, deleteProduct } = require('../controllers/productController');
const router = express.Router();
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
const auth = require("../middleware/auth");

router.post("/add", auth, upload.single("image"), async (req, res) => { createProduct(req, res);});
router.get('/:id', getProduct);
router.get('/getByCategory/:category', getProductsByCategory);
router.get('/', getAllProducts);
router.put('/update/:id', auth, updateProduct);
router.delete('/:id', auth, deleteProduct);

module.exports = router;
