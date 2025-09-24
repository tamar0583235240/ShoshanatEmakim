const express = require('express');
const {sendMail } = require('../utils/sendEmail');
const router = express.Router();

router.post('/', sendMail);

module.exports = router;