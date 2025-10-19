const jwt = require("jsonwebtoken");
require("dotenv").config();

const login = (req, res) => {
  const { username, password } = req.body;
  const ADMIN_USER = process.env.ADMIN_USER;
  const ADMIN_PASS = process.env.ADMIN_PASS;

  if (username !== ADMIN_USER || password !== ADMIN_PASS) {
    console.log(`Failed login attempt for user: ${username} to ${ADMIN_USER} and ${ADMIN_PASS} to ${password}`);
    return res.status(401).json({ message: "שם משתמש או סיסמה שגויים" });
  }

  try {
    const token = jwt.sign({ role: "admin", username }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    console.log(`token: ${token}`);
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });
  } catch (err) {
    console.error("Error during login:", err);
    return res.status(500).json({ message: "שגיאת בשרת, דווח לנו בבקשה.", error: err.message });
  }

  return res.status(200).json({ message: "התחברת בהצלחה" });
};

const logout = (req, res) => {
  res.clearCookie("token");
  return res.status(200).json({ message: "התנתקת בהצלחה" });
};

module.exports = {
  login,
  logout
};
