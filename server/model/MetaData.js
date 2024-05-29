const mongoose = require('mongoose');

const metadataSchema = new mongoose.Schema({
    title: { type: String },
    description: { type: String },
  keywords: { type : String }
});

module.exports = mongoose.model('Metadata', metadataSchema);