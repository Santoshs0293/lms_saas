const express = require('express');
const router = express.Router();
const Activity = require('../model/userActivityModel'); // Assuming you have an Activity model

// Endpoint to save user activity
router.post('/save-activity', async (req, res) => {
  const { userId, startTime, endTime } = req.body;

  try {
    const activity = new Activity({
      userId,
      startTime,
      endTime,
    });

    await activity.save();
    res.status(200).json({ message: 'Activity saved successfully' });
  } catch (error) {
    console.error('Error saving activity:', error);
    res.status(500).json({ message: 'Failed to save activity' });
  }
});

module.exports = router;
