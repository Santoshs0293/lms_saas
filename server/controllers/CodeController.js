// controllers/CodeController.js

const CodeModel = require('../model/CodeModel');

exports.saveCode = async (req, res) => {
  const { language, code, output, userId } = req.body;
  try {
    // Save the code and output to MongoDB
    await CodeModel.create({ language, code, output, user: userId });
    res.json({ success: true });
  } catch (error) {
    console.error("Error saving code:", error);
    res.status(500).json({ success: false, error: "Error saving code" });
  }
};

exports.fetchCodes = async (req, res) => {
  try {
    const codes = await CodeModel.find({ user: req.user._id });
    res.status(200).json({ codes });
  } catch (error) {
    console.error('Error fetching codes:', error);
    res.status(500).json({ success: false, error: "Error fetching codes" });
  }
};
