const Product = require('../models/productModel'); // או הנתיב הרלוונטי

module.exports.getNextProductNum = async (req, res, next) => {
  try {
    const lastProduct = await Product.findOne().sort({ number: -1 }).limit(1);
    const nextNumber = lastProduct ? lastProduct.number + 1 : 1001;
    req.number = nextNumber;
    console.log(`got number: ${req.number}`);
    next();
  } catch (err) {
    console.error('Failed to get next product number:', err);
    return res.status(500).json({ message: 'Failed to assign product number' });
  }
};