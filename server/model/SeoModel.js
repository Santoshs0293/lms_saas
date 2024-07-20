const mongoose = require('mongoose');

const SeoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  keywords: {
    type: [String],
    required: true
  },
  author: {
    type: String,
    required: false
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Seo', SeoSchema);