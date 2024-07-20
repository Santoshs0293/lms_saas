import React, { useState, useEffect } from "react";
import axios from "axios";
import Chart from "chart.js/auto";
import { Button, Modal } from "react-bootstrap"; // You can use react-bootstrap or any other modal library

const TeacherDetailsModal = ({ teacherId }) => {
  const [teacher, setTeacher] = useState(null);
  const [courses, setCourses] = useState([]);
  const [enrollments, setEnrollments] = useState([]);
  const [students, setStudents] = useState([]);
  const [showDetails, setShowDetails] = useState(false);

  const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL });

  useEffect(() => {
    if (teacherId) {
      fetchTeacherDetails(teacherId);
      fetchCoursesCreatedByTeacher(teacherId);
      fetchEnrollmentsForTeacher(teacherId);
      fetchStudentsUnderTeacher(teacherId);
      setShowDetails(true); // Show the details popup
    }
  }, [teacherId]);

  const fetchTeacherDetails = async (id) => {
    try {
      const response = await axiosInstance.get(`/users/teacher/${id}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("auth_token"),
        },
      });
      setTeacher(response.data.teacherInfo);
    } catch (error) {
      console.error("Error fetching teacher details:", error);
      // Handle error
    }
  };

  const fetchCoursesCreatedByTeacher = async (id) => {
    try {
      const response = await axiosInstance.get(`/courses/teacher/${id}`);
      setCourses(response.data.courses);
    } catch (error) {
      console.error("Error fetching courses created by teacher:", error);
      // Handle error
    }
  };

  const fetchEnrollmentsForTeacher = async (id) => {
    try {
      const response = await axiosInstance.get(`/enrollments/teacher/${id}`);
      setEnrollments(response.data.enrollments);
    } catch (error) {
      console.error("Error fetching enrollments for teacher:", error);
      // Handle error
    }
  };

  const fetchStudentsUnderTeacher = async (id) => {
    try {
      const response = await axiosInstance.get(`/users/student/teacher/${id}`);
      setStudents(response.data.students);
    } catch (error) {
      console.error("Error fetching students under teacher:", error);
      // Handle error
    }
  };

  // Function to close the popup
  const handleClose = () => setShowDetails(false);

  // Render the popup/modal content
  return (
    <Modal show={showDetails} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Teacher Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {teacher && (
          <div>
            <h4>{teacher.userName}</h4>
            <p>Email: {teacher.email}</p>
            <p>Created At: {teacher.createdAt}</p>

            {/* Display courses created by teacher */}
            <h5>Courses Created by {teacher.userName}</h5>
            <ul>
              {courses.map((course) => (
                <li key={course._id}>{course.courseName}</li>
              ))}
            </ul>

            {/* Display enrollments related to teacher */}
            <h5>Enrollments related to {teacher.userName}</h5>
            <ul>
              {enrollments.map((enrollment) => (
                <li key={enrollment._id}>{enrollment.courseName}</li>
              ))}
            </ul>

            {/* Display students related to teacher */}
            <h5>Students under {teacher.userName}</h5>
            <ul>
              {students.map((student) => (
                <li key={student._id}>{student.userName}</li>
              ))}
            </ul>
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TeacherDetailsModal;
