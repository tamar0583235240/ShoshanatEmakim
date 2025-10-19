const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
  username: { type: String, unique: true, sparse: true },
  email: { type: String, unique: true, required: true },
  passwordHash: { type: String },
  role: { type: String, default: "admin" },
  magicCodeHash: { type: String, default: null },
  magicCodeExpires: { type: Date, default: null },

  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Admin", AdminSchema);
