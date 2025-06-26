const express = require('express');
const { getProduct, createProduct } = require('../controllers/productController');
const router = express.Router();

router.get('/:id', getProduct);

module.exports = router;
