const express = require("express");
const {
  checkout,
  paymentVerification,
} =  require("../controllers/paymentController.js");
const Payment  =require('../model/PaymentModel.js');
const { requireLogin } = require("../middlewares/requireLogin.js");

const router = express.Router();

router.route("/checkout").post(checkout);

router.route("/paymentverification").post(paymentVerification);

router.get('/purchased-courses', requireLogin, async (req, res) => {
  const userId = req.user._id;

  try {
    const payments = await Payment.find({ user: userId }).populate('course');

    const purchasedCourses = payments.map(payment => payment.course).filter(course => course != null);

    res.status(200).json({ success: true, courses: purchasedCourses });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});


module.exports = router;