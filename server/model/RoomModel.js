// models/Room.js

const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
//   user: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User', // Assuming you have a User model
  
//   },
userId : {
    type : String
},
  roomId: {
    type: String,
 

  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;
