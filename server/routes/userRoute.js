const {
  getStudent__controller,
  getTeacher__controller,
  deleteTeacher__controller,
  createUser,
  updateUserRole,
  deleteUser,
  updateUserPassword,
  updateUserActiveStatus,
  createTeacherOrStudent,
  editTeacherOrStudent,
  updateTeacherOrStudentRole,
  deleteTeacherOrStudent
} = require("../controllers/userController");

const {
  login__controller,
  register__controller,
  details__controller,
} = require("../controllers/authController");

const registerValidator = require("../middlewares/registerValidator");
const loginValidator = require("../middlewares/loginValidator");

const { adminAuthentication, principalAuthentication, teacherAuthentication, studentAuthentication, allAuthentication } = require("../middlewares/authentication");
const { requireLogin } = require("../middlewares/requireLogin");

const router = require("express").Router();

router.get(
  "/student",
  requireLogin,
  getStudent__controller
);

router.get(
  "/teacher",
  requireLogin,
  getTeacher__controller
); 

router.delete(
  "/delete-teacher",
  requireLogin,
  adminAuthentication,
  deleteTeacher__controller
);

router.post(
  '/createUser',
  requireLogin,
  adminAuthentication,
  registerValidator.register_validator,
  register__controller
);

router.put(
  '/updateRole', 
  requireLogin,
  adminAuthentication,
  updateUserRole
);

router.put(
  '/updatePassword', 
  requireLogin,
  updateUserPassword
);

router.delete(
  '/:userId', 
  requireLogin,
  adminAuthentication,
  deleteUser
);

router.put(
  '/:id/active', 
  requireLogin,
  updateUserActiveStatus
);

// Principal specific routes
router.post(
  '/principal/createTeacherOrStudent',
  requireLogin,
  principalAuthentication,
  registerValidator.register_validator,
  createTeacherOrStudent
);

router.put(
  '/principal/editTeacherOrStudent/:userId',
  requireLogin,
  principalAuthentication,
  editTeacherOrStudent
);

router.put(
  '/principal/updateTeacherOrStudentRole',
  requireLogin,
  principalAuthentication,
  updateTeacherOrStudentRole
);

router.delete(
  '/principal/deleteTeacherOrStudent/:userId',
  requireLogin,
  principalAuthentication,
  deleteTeacherOrStudent
);

// User's code history route
router.get('/user/history', requireLogin, async (req, res) => {
  try {
    const userId = req.user._id; // Assuming you have user authentication middleware
    const user = await UserModel.findById(userId).populate('codeHistory');
    res.json({ files: user.codeHistory.map(code => code.fileName) });
  } catch (error) {
    console.error('Error fetching user code history:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
