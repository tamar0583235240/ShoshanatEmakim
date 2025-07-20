const express = require('express');
const {sendMail } = require('../utils/sendEmail');
const router = express.Router();

router.post('/sendEmail', sendMail);

module.exports = router;