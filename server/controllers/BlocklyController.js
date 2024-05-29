// controllers/CodeController.js

const BlocklyModel = require('../model/Blockly');

exports.saveCode = async (req, res) => {
  const { userId , xml, generatedCode, output } = req.body;
  try {
    // Save the code and output to MongoDB
    await BlocklyModel.create({ user: userId, xml, generatedCode, output  });
    res.json({ success: true });
  } catch (error) {
    console.error("Error saving code:", error);
    res.status(500).json({ success: false, error: "Error saving code" });
  }
};

exports.fetchCodes = async (req, res) => {
  try {
    const codes = await BlocklyModel.find({ user: req.user._id });
    res.status(200).json({ codes });
  } catch (error) {
    console.error('Error fetching codes:', error);
    res.status(500).json({ success: false, error: "Error fetching codes" });
  }
};
