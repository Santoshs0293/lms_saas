const express = require('express');
const router = express.Router();
const Room = require('../model/RoomModel'); // Assuming you have a Room model
const { requireLogin } = require("../middlewares/requireLogin");

router.post('/saveRoom',requireLogin, async (req, res) => {
  const { userId, roomId } = req.body;

  try {
    const newRoom = new Room({ userId, roomId });
    await newRoom.save();

    res.status(200).json({ success: true, message: 'Room ID saved successfully' , userId});
  } catch (error) {
    console.error('Error saving room ID:', error);
    res.status(500).json({ success: false, message: 'Failed to save room ID' });
  }
});

router.get('/api/rooms/count', async (req, res) => {
    const { userId } = req.query;
    try {
      const count = await Room.countDocuments({ userId }); // Assuming Room is your Mongoose model
      res.json({ count });
    } catch (error) {
      console.error('Error fetching room count:', error);
      res.status(500).json({ error: 'Failed to fetch room count' });
    }
  });
  

module.exports = router;
