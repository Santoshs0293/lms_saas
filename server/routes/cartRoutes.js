const express = require('express');
const router = express.Router();
const Cart = require('../model/CartModel');
const {
  getItems__controller, addItem_controller
  } = require("../controllers/cartController");

// GET route to retrieve the user's cart
router.get("/get-items",  getItems__controller);


router.post(
  "/add-items",
  addItem_controller
);

module.exports = router;