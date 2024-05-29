const express = require('express');
const router = express.Router();
const codeController = require('../controllers/BlocklyController');
const { requireLogin } = require("../middlewares/requireLogin");

// Save code route
router.post('/blocklysave', requireLogin, codeController.saveCode);

// Get codes route
router.get('/blocklycode', requireLogin, codeController.fetchCodes);

module.exports = router;