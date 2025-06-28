const express = require('express');
const { getProduct, createProduct,getProductsByCategory } = require('../controllers/productController');
const {uploadImageMiddleware } = require('../utils/uploadSingleImage');
const {getNextProductNum} = require('../middleware/runningProductNum');
const router = express.Router();

router.get('/getproduct/:id', getProduct);
router.post('/addproduct', getNextProductNum,uploadImageMiddleware,createProduct );
router.get('/getproductsbycategory/:category', getProductsByCategory);

module.exports = router;
