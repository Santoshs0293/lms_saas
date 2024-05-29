const express = require('express');
const router = express.Router();
const Metadata = require('../model/MetaData');

// GET all metadata
router.get('/', async (req, res) => {
  try {
    const metadata = await Metadata.find();
    res.json(metadata);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST create metadata
router.post('/', async (req, res) => {
  if (!req.body.title || !req.body.description || !req.body.keywords) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const metadata = new Metadata({
    title: req.body.title,
    description: req.body.description,
    keywords: req.body.keywords
  });

  try {
    const newMetadata = await metadata.save();
    res.status(201).json(newMetadata);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT update metadata
router.put('/:id', async (req, res) => {
  if (!req.body.title || !req.body.description || !req.body.keywords) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const updatedMetadata = await Metadata.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedMetadata);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE metadata
router.delete('/:id', async (req, res) => {
  try {
    await Metadata.findByIdAndDelete(req.params.id);
    res.json({ message: 'Metadata deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
