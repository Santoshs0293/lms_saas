const {
  login__controller,
  register__controller,
  details__controller
} = require("../controllers/authController");
const { login_validator} = require("../middlewares/loginValidator");
const registerValidator = require("../middlewares/registerValidator");
const loginValidator = require("../middlewares/loginValidator");
const UserModel = require("../model/UserModel");
const router = require("express").Router();

router.post("/login", loginValidator,login_validator,login__controller)

router.post("/register",registerValidator, registerValidator.register_validator ,register__controller)

router.post('/details',registerValidator,registerValidator.register_validator, details__controller);

router.put('/details/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    const {
      address,
      description,
      links,
      identityVerifications,
      phoneNumber
    } = req.body;

    // Find the user by ID
    let user = await UserModel.findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Update user fields
    user.address = address;
    user.description = description;
    user.links = links;
    user.identityVerifications = identityVerifications;
    user.phoneNumber = phoneNumber;

    // Save updated user
    const updatedUser = await user.save();

    res.status(200).json(updatedUser);
  } catch (error) {
    console.error('Error updating user:', error.message);
    res.status(500).json({ error: 'Server error' });
  }
});

router.get('/details/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await UserModel.findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error('Error fetching user:', error.message);
    res.status(500).json({ error: 'Server error' });
  }
});


router.put('/details/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedDetails = req.body;
    const user = await UserModel.findByIdAndUpdate(id, updatedDetails, { new: true });
    if (!user) return res.status(404).send('User not found');
    res.send(user);
  } catch (error) {
    res.status(400).send('Error updating user details');
  }
});


module.exports = router;
