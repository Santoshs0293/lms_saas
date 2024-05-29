const mongoose = require('mongoose');

const BlocklySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  xml: {
    type: String,
  
  },
  generatedCode: {
    type: String,
   
  },
  output: {
    type: String,
  
  }
});

const Blockly = mongoose.model('Blockly', BlocklySchema);

module.exports = Blockly;
