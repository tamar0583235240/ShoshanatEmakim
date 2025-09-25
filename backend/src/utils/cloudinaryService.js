const cloudinary = require("cloudinary").v2;
const streamifier = require("streamifier");

const uploadImage = (fileBuffer) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder: "products",
        use_filename: true,
        overwrite: true,
      },
      (error, result) => {
        if (result) {
          resolve(result);
        } else {
          reject(error);
        }
      }
    );
    streamifier.createReadStream(fileBuffer).pipe(stream);
  });
};

const deleteImage = async (publicId) => {
  try {
    const result = await cloudinary.uploader.destroy(publicId);
    console.log("Deleted:", result);
    return result;
  } catch (error) {
    console.error("Delete error:", error);
    throw error;
  }
};

module.exports = { uploadImage, deleteImage };