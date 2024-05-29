const express = require('express');
const router = express.Router();
const codeController = require('../controllers/CodeController');
const { requireLogin } = require("../middlewares/requireLogin");

// Save code route
router.post('/save', requireLogin, codeController.saveCode);

// Get codes route
router.get('/code', requireLogin, codeController.fetchCodes);

module.exports = router;
