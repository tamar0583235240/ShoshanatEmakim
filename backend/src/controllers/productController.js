// const number = 123; // דוגמה למספר המוצר
// const imagePath = `images/${number}.jpg`; // או הנתיב שבו התמונה מאוחסנת בפועל

//  `../../../shared/images/${number}`

// const newProduct = new Product({
//   category: 'זרי כלה ליד',
//   number: number,
//   name: 'זר כלה מיוחד',
//   description: 'זר כלה יפהפה',
//   image: imagePath,  // כאן את מגדירה את הנתיב/שם הקובץ
// });

// await newProduct.save();

const Product = require('../models/productModel.js');

const getProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findById(id)
    if (!product) {
      return res.status(404).json({ message: `Product ${id} not found` });
    }
    else
      return res.status(200).json({ data: product });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ message: "Internal server error", error: err.message });
  }
};
module.exports = { getProduct }