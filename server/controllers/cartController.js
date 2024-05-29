// controllers/cartController.js

const Cart = require('../model/CartModel');

module.exports.addItem_controller = async (req, res, next) => {
  try {
    const { courseName, courseDescription  , courseThumbnail , courseLink, coursePrice} = req.body;
    // console.log(req.body)
    // console.log(req.file);

    if (!coursePrice || !courseDescription) {
      return res.status(400).json({
        error: "Please Provide All Information",
      });
    }

    const item = new Cart({
      courseName, courseDescription  , courseThumbnail , courseLink, coursePrice
    });
    item
      .save()
      .then((result) => {
        
        return res.status(200).json({
          result,
        });
      })
      .catch((err) => {
        console.log(err);
        return res.status(400).json({
          error: "Something went wrong1",
        });
      });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      error: "Something went wrong2",
    });
  }
};

// Controller function to get user's cart
module.exports.getItems__controller = async (req, res, next) => {
  try {
    // const courses = await CourseModel.find().populate(
    //   "createdAt",
    //   "role _id userName email"
    // );
    return res.status(200).json({
      "abc" : "sfdsfdsf"
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      error: "Something went wrong3",
    });
  }
};
// Other controller functions for cart management (e.g., removing items from cart) could be added here


