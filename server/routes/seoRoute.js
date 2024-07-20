const express = require('express');
const router = express.Router();
const seoController = require('../controllers/seoController');

router.post('/', seoController.createSeo);
router.get('/', seoController.getAllSeo);
router.get('/:id', seoController.getSeoById);
router.put('/:id', seoController.updateSeoById);
router.delete('/:id', seoController.deleteSeoById);

module.exports = router;