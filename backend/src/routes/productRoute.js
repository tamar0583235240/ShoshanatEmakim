const express = require('express');
const { getProduct, createProduct,getProductsByCategory, updateProduct, getAllProducts, deleteProduct } = require('../controllers/productController');
const router = express.Router();
const {getNextProductNum} = require('../middleware/runningProductNum');
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });

router.post("/add", upload.single("image"), async (req, res) => {upload.single("image"), createProduct(req, res)});
router.put('/update/:id',updateProduct);
router.get('/:id', getProduct);
router.get('/getByCategory/:category', getProductsByCategory);
router.get('/',getAllProducts);
router.delete('/:id',deleteProduct);

module.exports = router;
