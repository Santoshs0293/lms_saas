const Seo = require('../model/SeoModel');

// Create a new SEO entry
exports.createSeo = async (req, res) => {
  try {
    const newSeo = new Seo(req.body);
    await newSeo.save();
    res.status(201).json(newSeo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all SEO entries
exports.getAllSeo = async (req, res) => {
  try {
    const seoEntries = await Seo.find();
    res.status(200).json(seoEntries);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get a single SEO entry by ID
exports.getSeoById = async (req, res) => {
  try {
    const seoEntry = await Seo.findById(req.params.id);
    if (!seoEntry) throw new Error('SEO entry not found');
    res.status(200).json(seoEntry);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Update an SEO entry by ID
exports.updateSeoById = async (req, res) => {
  try {
    const updatedSeo = await Seo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedSeo) throw new Error('SEO entry not found');
    res.status(200).json(updatedSeo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete an SEO entry by ID
exports.deleteSeoById = async (req, res) => {
  try {
    const deletedSeo = await Seo.findByIdAndDelete(req.params.id);
    if (!deletedSeo) throw new Error('SEO entry not found');
    res.status(200).json({ message: 'SEO entry deleted' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};