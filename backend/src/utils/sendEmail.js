const nodemailer = require('nodemailer');
const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'mindy05832@gmail.com',
        pass: process.env.EMAIL_PASSWORD
    }
})

const FROM_EMAIL = 'mindy05832@gmail.com'

const sendMail = async (req, res) => {
  const { formName, message, fromEmail } = req.body;
  if (!fromEmail) {
    return res.status(400).json({ message: "Email not provided" });
  }

  try {
    await transport.sendMail({
      from: FROM_EMAIL,
      to: 'mindi6863@gmail.com',
      subject: `הודעה מ${formName}, מהאתר שושנת העמקים`,
      html: `
        <p>${message}</p>
        <p>אפשר להשיב לכתובת: <a href="mailto:${fromEmail}">${fromEmail}</a></p>
      `,
    });

    await transport.sendMail({
      from: FROM_EMAIL,
      to: fromEmail,
      subject: `תודה על פנייתך לשושנת העמקים`,
      html: `<p>תודה על פנייתך, ${formName}. אנו ניצור איתך קשר בהקדם.</p>`,
    });

    console.log("Both emails sent customer ",fromEmail);
    res.status(200).json({ message: "Emails sent successfully" });

  } catch (err) {
    console.error("Error in sendMail:", err.message);
    res.status(500).json({ message: "Failed to send email", error: err.message });
  }
};


module.exports = { sendMail }