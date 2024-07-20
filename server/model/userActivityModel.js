const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  userId: {
    type: String,

  },
  startTime: {
    type: Date,

  },
  endTime: {
    type: Date,

  },
});

module.exports = mongoose.model('Activity', activitySchema);
