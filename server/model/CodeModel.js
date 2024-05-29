// models/Code.js

const mongoose = require('mongoose');

const codeSchema = new mongoose.Schema({
  language: {
    type: String,
  },
  code: {
    type: String,
  },
  output: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User' 
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Code = mongoose.model('Code', codeSchema);

module.exports = Code;
