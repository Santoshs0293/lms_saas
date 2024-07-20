import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCourseInfo } from "../../../redux/course/courseAction";
import axios from "axios";
import Chart from "chart.js/auto";
import { Modal } from "react-bootstrap";
import Sidebar from '../SideBar';
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Button } from "@mui/material";

const Teacher = () => {
  const courseData = useSelector((state) => state.course.courseInfo);
  const [data, setData] = useState([]);
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const [totalCourses, setTotalCourses] = useState(0);
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [enrollments, setEnrollments] = useState(0);
  const [totalInstructors, setTotalInstructors] = useState(0);
  const [message, setMessage] = useState("");

  const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL });

  const userList = async () => {
    const user = await axiosInstance.get("/users/teacher", {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("auth_token")
      }
    });
    setData(user.data.teacherInfo);
  };

  useEffect(() => {
    userList();
  }, []);

  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const userDataFromStorage = localStorage.getItem('user');
    console.log('Retrieved from storage:', userDataFromStorage);

    if (userDataFromStorage) {
      try {
        const parsedData = JSON.parse(userDataFromStorage);
        setUserData(parsedData);
      } catch (error) {
        console.error('Failed to parse user data:', error);
      }
    }
  }, []);

  const userId = userData ? userData._id : null;
  const username = userData?.userName;
  const activity = userData?.createdAt;
  const email = userData?.email;

  useEffect(() => {
    dispatch(fetchAllCourseInfo());
    fetchStudents();
    fetchTeachers();
  }, [dispatch]);

  const fetchStudents = async () => {
    try {
      const response = await axiosInstance.get("/users/student", {
        headers: {
          "Authorization": "Bearer " + localStorage.getItem("auth_token")
        }
      });
      setStudents(response.data.studentInfo);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  const fetchTeachers = async () => {
    try {
      const response = await axiosInstance.get("/users/teacher", {
        headers: {
          "Authorization": "Bearer " + localStorage.getItem("auth_token")
        }
      });
      setTeachers(response.data.teacherInfo);
      setTotalInstructors(response.data.teacherInfo.length);
    } catch (error) {
      console.error("Error fetching teachers:", error);
    }
  };

  useEffect(() => {
    if (userId && students.length > 0) {
      const filteredStudents = students.filter(student => student.teacherId === userId);
      setEnrollments(filteredStudents.length);
    }
  }, [userId, students]);

  useEffect(() => {
    if (userId && courseData.length > 0) {
      const coursesCreatedByTeacher = courseData.filter(course => course.teacher === userId);
      setTotalCourses(coursesCreatedByTeacher.length);
    }
  }, [userId, courseData]);

  const teacherCoursesChartRef = useRef(null);
  const teacherEnrollmentsChartRef = useRef(null);
  const overallPerformanceChartRef = useRef(null);

  const handleShowModal = (teacher) => {
    setSelectedTeacher(teacher);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedTeacher(null);
  };

  useEffect(() => {
    if (showModal && selectedTeacher) {
      // Teacher's courses vs total courses
      if (teacherCoursesChartRef.current !== null) {
        teacherCoursesChartRef.current.destroy();
      }
      teacherCoursesChartRef.current = new Chart(document.getElementById("teacherCoursesChart"), {
        type: 'bar',
        data: {
          labels: ['Teacher Courses', 'Total Courses'],
          datasets: [{
            label: 'Courses',
            data: [totalCourses, courseData.length],
            backgroundColor: ['#36A2EB', '#FFCE56'],
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });

      // Teacher's enrollments vs total students
      if (teacherEnrollmentsChartRef.current !== null) {
        teacherEnrollmentsChartRef.current.destroy();
      }
      teacherEnrollmentsChartRef.current = new Chart(document.getElementById("teacherEnrollmentsChart"), {
        type: 'bar',
        data: {
          labels: ['Teacher Enrollments', 'Total Students'],
          datasets: [{
            label: 'Enrollments',
            data: [enrollments, students.length],
            backgroundColor: ['#4BC0C0', '#FF6384'],
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });

      // Overall performance of the teacher
      if (overallPerformanceChartRef.current !== null) {
        overallPerformanceChartRef.current.destroy();
      }
      overallPerformanceChartRef.current = new Chart(document.getElementById("overallPerformanceChart"), {
        type: 'pie',
        data: {
          labels: ['Performance'],
          datasets: [{
            label: 'Performance',
            data: [70, 30], // Example data
            backgroundColor: ['#FF6384', '#36A2EB'],
          }]
        },
        options: {
          plugins: {
            legend: {
              position: 'bottom',
            }
          }
        }
      });
    }
  }, [showModal, selectedTeacher, totalCourses, courseData.length, enrollments, students.length]);

  const handleDeleteUser = async (userId) => {
    try {
      const response = await axiosInstance.delete(`/users/${userId}`);
      setMessage(response.data.message);
      alert("Do you want to delete?")
      userList();
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  const handleToggleActive = async (userId, isActive) => {
    try {
      const response = await axiosInstance.put(`/users/${userId}/active`, { active: !isActive });
      setMessage(response.data.message);
      userList();
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <div>
      <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header" id="appContent">
        <div className="app-main">
          <Sidebar />
          <div className="app-main-outer">
            <div className="app-main-inner">
              <div className="page-title-actions px-3 d-flex">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="https://admin.razinskills.com">Dashboard</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Enrollment</li>
                  </ol>
                </nav>
              </div>
              <div className="row" id="deleteTableItem">
                <div className="col-md-12">
                  <div className="card mb-5">
                    <div className="card-body">
                      <div className="table-responsive-lg">
                        <table id="dataTable" className="table">
                          <thead>
                            <tr className="text-center">
                              <th><strong>Teacher</strong></th>
                              <th><strong>Email</strong></th>
                              <th style={{ width: '15%' }}><strong>Progress</strong></th>
                              <th><strong>Last Activity</strong></th>
                              <th><strong>Status</strong></th>
                              <th><strong>Action</strong></th>
                            </tr>
                          </thead>
                          <tbody>
                            {data.map((row) => (
                              <tr key={row._id}>
                                <td className="tableProduct">
                                  <div className="listproduct-section">
                                    <div className="listproducts-image">
                                      <img src="http://admin.razinskills.com/storage/category/image/0NYHYf4srP01JPgdJwOCWNUC1GxRsdPzmA2fMffP.png" alt="Teacher" />
                                    </div>
                                    <div className="product-pera">
                                      <p className="priceDis">{row.userName}</p>
                                    </div>
                                  </div>
                                </td>
                                <td className="tableCustomar">
                                  <span className="badge rounded-pill text-bg-success">{row.email}</span>
                                </td>
                                <td className="tableId"><span className="px-3 py-1 rounded" style={{ backgroundColor: '#ff7b00' }}></span> &nbsp;Complete
                                </td>
                                <td className="tableStatus">
                                  <div className="statusItem">
                                    <div></div>
                                    <div>
                                      <span>{row.updatedAt}</span>
                                    </div>
                                  </div>
                                </td>
                                <td className="tableStatus">
                                  <div className="statusItem">
                                    <div className="circleDot animatedCompleted"></div>
                                    <div className="statusText">
                                      <span className="stutsCompleted">{row.active ? "Active" : "Inactive"}</span>
                                    </div>
                                  </div>
                                </td>
                                <td className="tableAction">
                                  <div className="action-icon">
                                    <IconButton onClick={() => handleDeleteUser(row._id)}>
                                      <DeleteIcon style={{ color: "red" }} />
                                    </IconButton>
                                    <Button
                                      onClick={() => handleToggleActive(row._id, row.active)}
                                      color={row.active ? "secondary" : "primary"}
                                    >
                                      {row.active ? "Deactivate" : "Activate"}
                                    </Button>
                                    <Button onClick={() => handleShowModal(row)}>Details</Button>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Modal show={showModal} onHide={handleCloseModal} size="lg">
                <Modal.Header closeButton>
                  <Modal.Title>Teacher Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  {selectedTeacher && (
                    <>
                      <div className="row">
                        <div className="col-md-6 col-xl-4">
                          <div className="card mb-3 widget-content bg-midnight-bloom">
                            <div className="widget-content-wrapper text-white">
                              <div className="widget-content-left">
                                <div className="widget-heading"> Courses Created</div>
                                <div className="widget-subheading">Number of total active courses</div>
                              </div>
                              <div className="widget-content-right float-left">
                                <div className="widget-numbers text-white "><span style={{ margin: "60px" }}>{totalCourses}</span></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-xl-4">
                          <div className="card mb-3 widget-content bg-arielle-smile">
                            <div className="widget-content-wrapper text-white">
                              <div className="widget-content-left">
                                <div className="widget-heading">Enrollments Created</div>
                                <div className="widget-subheading">Number of total course enrollments</div>
                              </div>
                              <div className="widget-content-right" >
                                <div className="widget-numbers text-white"><span style={{ margin: "60px" }}>{enrollments}</span></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-xl-4">
                          <div className="card mb-3 widget-content bg-grow-early">
                            <div className="widget-content-wrapper text-white">
                              <div className="widget-content-left">
                                <div className="widget-heading">Students</div>
                                <div className="widget-subheading">Number of total students</div>
                              </div>
                              <div className="widget-content-right">
                                <div className="widget-numbers text-white"><span style={{ margin: "60px" }}>{students.length}</span></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 col-lg-4">
                          <canvas id="teacherCoursesChart"></canvas>
                        </div>
                        <div className="col-md-6 col-lg-4">
                          <canvas id="teacherEnrollmentsChart"></canvas>
                        </div>
                        <div className="col-md-6 col-lg-4">
                          <canvas id="overallPerformanceChart"></canvas>
                        </div>
                      </div>
                    </>
                  )}
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teacher;
