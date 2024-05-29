const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
   
  },
  email: {
    type: String,
   
    unique: true
  },
  password: {
    type: String,
   
  },
  role: {
    type: String,
    default: "Student",
    enum: ["Admin", "Teacher", "Student"]
  },
  active: {
    type: Boolean,
    default: false
  },
  profilePic: {
    type: String,
    default: '' // URL to profile picture
  },
  address: {
    street: { type: String, default: '' },
    city: { type: String, default: '' },
    state: { type: String, default: '' },
    zip: { type: String, default: '' },
    country: { type: String, default: '' }
  },
  description: {
    type: String,
    default: ''
  },
  links: [{
    type: String
  }],
  identityVerifications: [{
    type: String
  }],
  phoneNumber: {
    type: String,
    default: ''
  },
  codeHistory: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Code' }]
}, { timestamps: true });

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
