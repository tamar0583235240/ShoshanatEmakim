const express = require('express');
const { getProduct, createProduct,getProductsByCategory, updateProduct, getAllProducts } = require('../controllers/productController');
const {uploadImageMiddleware } = require('../utils/uploadSingleImage');
const {getNextProductNum} = require('../middleware/runningProductNum');
const router = express.Router();

router.get('/getproduct/:id', getProduct);
router.post('/addproduct', getNextProductNum,uploadImageMiddleware,createProduct );
router.get('/getproductsbycategory/:category', getProductsByCategory);
router.put('/updateproduct/:id',updateProduct)
router.get('/getallproducts',getAllProducts)

module.exports = router;
