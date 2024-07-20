const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const CourseModel = require('../model/CourseModel');
const ReviewModel = require('../model/ReviewModel');

// Create a review
router.post('/courses/:courseId/reviews', async (req, res) => {
  try {
    const { courseId } = req.params;
    const { name, comment, rating } = req.body;

    // Find the course
    const course = await CourseModel.findById(courseId);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    // Create the review
    const review = new ReviewModel({
      name,
      comment,
      rating,
      course: courseId,
    });

    // Save the review
    const savedReview = await review.save();

    // Add the review to the course
    course.reviews.push(savedReview._id);
    await course.save();

    res.status(201).json(savedReview);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create review', error });
  }
});

// Get reviews for a course
router.get('/courses/:courseId/reviews', async (req, res) => {
  try {
    const { courseId } = req.params;

    // Find the course with reviews
    const course = await CourseModel.findById(courseId).populate('reviews');
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    res.status(200).json(course.reviews);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch reviews', error });
  }
});

module.exports = router;
