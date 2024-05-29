const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
  id: {
    type: Number, // Assuming each product has a unique ObjectId
    ref: 'Product', // Reference to the Product model
    required: true
  },
  courseName: {
    type: String,
    required: true,
  },
  courseDescription: {
    type: String,
    required: true,
  },

  courseThumbnail: {
    type: String,
    required: true,
  },


  courseLink :{
    type: String,
    required: true,
  },
  coursePrice : {
    type: Number,
    required: true,
  },
  // You can add more fields as needed, such as price, color, size, etc.
});

const cartSchema = new mongoose.Schema({
  items: [cartItemSchema], // Array of cart items
  // Add any other fields you need for your cart document
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;