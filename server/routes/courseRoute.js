const {
  postCourse__controller,
  getCourses__controller,
  getOneCourse__controller,
  deleteCourse__Controller,
  getAllData,
  getItems__controller,
  updateCourse,
  getCoursesByUserId,
  createLectures,
  updateLecture,
  deleteLecture

} = require("../controllers/courseController");

const { adminAuthentication } = require("../middlewares/authentication");
const { requireLogin } = require("../middlewares/requireLogin");
const Lecture = require("../model/Lectures");
const router = require("express").Router();
const upload = require("../middlewares/multer");

router.post(
  "/post-course",
  (req, res, next) => {
    // Multer middleware
    upload.fields([
      { name: 'img', maxCount: 1 },
      { name: 'pdf', maxCount: 3 }
    ])(req, res, function (err) {
      if (err) {
        // Multer error
        console.error('Multer error:', err);
        return res.status(500).json({ error: 'File upload error' });
      }
      // No Multer error, proceed to next middleware
      next();
    });
  },
requireLogin,
  postCourse__controller
);

router.get("/get-data-courses", getCourses__controller);

router.post("/data-courses", getItems__controller);

router.get("/get-courses", getAllData);

router.get("/get-course/:courseId",requireLogin, getOneCourse__controller);

router.delete('/delete', requireLogin, deleteCourse__Controller);

router.put('/updateCourse', 
updateCourse
);

router.get('/get-teacher-courses',requireLogin, getCoursesByUserId);

router.post('/courses/:courseId/lectures', requireLogin, createLectures);

router.put('/lectures/:lectureId',requireLogin, updateLecture);

router.delete('/lectures/:lectureId',requireLogin, deleteLecture);


module.exports = router;
