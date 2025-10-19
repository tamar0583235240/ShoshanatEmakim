const crypto = require("crypto");
const bcrypt = require("bcrypt");
const { sendMail } = require("./emailUtils");

const genNumericCode = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

const createAndSendMagicCode = async (admin, expiresMinutes = 15) => {
  const code = genNumericCode();
  const hash = await bcrypt.hash(code, 10);
  const expires = new Date(Date.now() + expiresMinutes * 60 * 1000);

  admin.magicCodeHash = hash;
  admin.magicCodeExpires = expires;
  await admin.save();

  const subject = "קוד חד־פעמי לכניסה";
  const text = `הקוד שלך: ${code}. הוא תקף ל־${expiresMinutes} דקות. לא למסור לאחרים.`;
  await sendMail(admin.email, subject, text);

  return true;
};

module.exports = { genNumericCode, createAndSendMagicCode };
