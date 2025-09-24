const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.cookies?.token;
  if (!token) {
    return res.status(401).json({ message: "אין הרשאה. התחבר כמנהל." });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: "אין הרשאה, בבקשה התחבר שוב." });
  }
};

module.exports = auth;
