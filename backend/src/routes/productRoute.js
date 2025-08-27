const express = require('express');
const { getProduct, createProduct,getProductsByCategory, updateProduct, getAllProducts } = require('../controllers/productController');
const {uploadImageMiddleware } = require('../utils/uploadSingleImage');
const {getNextProductNum} = require('../middleware/runningProductNum');
const router = express.Router();

router.get('/:id', getProduct);
router.post('/add', getNextProductNum,uploadImageMiddleware,createProduct );
router.get('/getByCategory/:category', getProductsByCategory);
router.put('/update/:id',updateProduct)
router.get('/',getAllProducts)

module.exports = router;
