const express = require('express');
const router = express.Router();
const codeController = require('../controllers/CodeController');
const { requireLogin } = require("../middlewares/requireLogin");

// Save code route
router.post('/save', requireLogin, codeController.saveCode);

// Get codes route
router.get('/code', requireLogin, codeController.fetchCodes);

// Get codes by id
router.get('/code/:id', requireLogin, codeController.fetchCodesById);

module.exports = router;
