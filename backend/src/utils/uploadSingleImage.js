const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const folderPath = path.resolve(__dirname, '../../../shared/images');
    cb(null, folderPath);
  },
  filename: function (req, file, cb) {
    const number = req.number; 
    cb(null, `${number}.jpg`);
  }
});

const upload = multer({ storage });

module.exports = {
  uploadImageMiddleware: upload.single('image'),
};
