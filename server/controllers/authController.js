const UserModel = require("../model/UserModel");
const bcrypt = require("bcryptjs");
const controllerError = require("../utils/controllerError");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config/keys");

module.exports.register__controller = async (req, res, next) => {
  try {
    const { userName, email, password, confirmPassword, role } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({
        errors: { confirmPassword: "Passwords do not match" }
      });
    }

    const userInfo = await UserModel.findOne({ email });

    if (userInfo) {
      return res.status(401).json({
        errors: { email: "User already exists" }
      });
    }

    const hash = await bcrypt.hash(password, 10);
    const user = new UserModel({
      userName,
      email,
      password: hash,
      role  // Save the role in the database
    });

    user.save()
      .then((userData) => {
        res.status(201).json({
          userData
        });
      })
      .catch((err) => {
        controllerError(err, res, "Error occurred");
      });
  } catch (error) {
    controllerError(error, res, "Error occurred");
  }
};

// Login Controller (Example)
module.exports.login__controller = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const userInfo = await UserModel.findOne({ email });

    if (!userInfo) {
      return res.status(401).json({
        errors: { email: "User does not exist. Please register and then login again." }
      });
    }

    bcrypt.compare(password, userInfo.password)
      .then((result) => {
        if (!result) {
          return res.status(401).json({
            errors: { password: "Password does not match" }
          });
        }

        const token = jwt.sign(
          { _id: userInfo._id, name: userInfo.userName, email: userInfo.email, role: userInfo.role },
          SECRET_KEY,
          { expiresIn: '2d' }
        );

        res.status(200).json({
          token,
          userInfo
        });
      })
      .catch((err) => {
        controllerError(err, res, "Error occurred");
      });
  } catch (error) {
    controllerError(error, res, "Error occurred");
  }
};


module.exports.details__controller = async (req, res, next) => {
  try {
    const {
      userName,
      email,
      password,
      confirmPassword,
      role,
      profilePic,
      address,
      description,
      links,
      identityVerifications,
      phoneNumber
    } = req.body;

    // Check if passwords match
    if (password !== confirmPassword) {
      return res.status(400).json({
        errors: { confirmPassword: "Passwords do not match" }
      });
    }

    // Check if the user already exists
    const userInfo = await UserModel.findOne({ email });

    if (userInfo) {
      return res.status(401).json({
        errors: { email: "User already exists" }
      });
    }

    // Hash the password
    const hash = await bcrypt.hash(password, 10);

    // Create a new user
    const user = new UserModel({
      userName,
      email,
      password: hash,
      role,
      profilePic,
      address,
      description,
      links,
      identityVerifications,
      phoneNumber
    });

    // Save the user to the database
    user.save()
      .then((userData) => {
        res.status(201).json({
          userData
        });
      })
      .catch((err) => {
        controllerError(err, res, "Error occurred while saving user");
      });
  } catch (error) {
    controllerError(error, res, "Error occurred while processing request");
  }
};