const instance = require("../server.js");
const crypto = require("crypto");
const Payment = require("../model/PaymentModel.js");
const User = require('../model/UserModel'); // Assuming you have a User model

module.exports.checkout = async (req, res) => {
  const { amount } = req.body;

  const options = {
    amount: Number(amount * 100),
    currency: "INR",
  };

  try {
    const order = await instance.orders.create(options);
    res.status(200).json({
      success: true,
      order,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports.paymentVerification = async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature, userId, courseIds } = req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_APT_SECRET)
    .update(body.toString())
    .digest("hex");

  const isAuthentic = expectedSignature === razorpay_signature;

  if (isAuthentic) {
    try {
      // Log data for debugging
      console.log('Payment Verification - User ID:', userId);
      console.log('Payment Verification - Course IDs:', courseIds);

      // Save the payment information to the database
      await Payment.create({
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature,
        user: userId,
        course: courseIds, // Save course IDs
      });

      // Update the user's document with the purchased courses
      await User.findByIdAndUpdate(userId, { $addToSet: { purchasedCourses: { $each: courseIds } } });

      res.redirect(
        `http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`
      );
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.status(400).json({
      success: false,
    });
  }
};
