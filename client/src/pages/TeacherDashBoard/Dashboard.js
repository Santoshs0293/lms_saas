import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCourseInfo } from "../../redux/course/courseAction";
import SideBar from './SideBar';
import { Helmet } from "react-helmet";
import axios from "axios";
import Chart from "chart.js/auto";

const Dashboard3 = ({ course }) => {
  const courseData = useSelector((state) => state.course.courseInfo);
  const dispatch = useDispatch();
  const [totalCourses, setTotalCourses] = useState(0);
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [enrollments, setEnrollments] = useState(0);
  const [totalInstructors, setTotalInstructors] = useState(0);

  const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL });

  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const userDataFromStorage = localStorage.getItem('user');
    console.log('Retrieved from storage:', userDataFromStorage); // This will show exactly what is being retrieved

    if (userDataFromStorage) {
        try {
            const parsedData = JSON.parse(userDataFromStorage);
            setUserData(parsedData);
        } catch (error) {
            console.error('Failed to parse user data:', error); // This will log parsing errors, if any
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
  }, [course, dispatch]);

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
      // Handle error
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
      setTotalInstructors(response.data.teacherInfo.length); // Set total number of instructors
    } catch (error) {
      console.error("Error fetching teachers:", error);
      // Handle error
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
  const teacherCoursesLineChartRef = useRef(null);
  const teacherEnrollmentsLineChartRef = useRef(null);

  useEffect(() => {
    if (teachers.length > 0) {
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

      // Teacher's courses vs total courses (Line Chart)
      if (teacherCoursesLineChartRef.current !== null) {
        teacherCoursesLineChartRef.current.destroy();
      }
      teacherCoursesLineChartRef.current = new Chart(document.getElementById("teacherCoursesLineChart"), {
        type: 'line',
        data: {
          labels: ['Teacher Courses', 'Total Courses'],
          datasets: [{
            label: 'Courses',
            data: [totalCourses, courseData.length],
            backgroundColor: ['#36A2EB'],
            borderColor: ['#36A2EB'],
            fill: false
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

      // Teacher's enrollments vs total students (Line Chart)
      if (teacherEnrollmentsLineChartRef.current !== null) {
        teacherEnrollmentsLineChartRef.current.destroy();
      }
      teacherEnrollmentsLineChartRef.current = new Chart(document.getElementById("teacherEnrollmentsLineChart"), {
        type: 'line',
        data: {
          labels: ['Teacher Enrollments', 'Total Students'],
          datasets: [{
            label: 'Enrollments',
            data: [enrollments, students.length],
            backgroundColor: ['#4BC0C0'],
            borderColor: ['#4BC0C0'],
            fill: false
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

      // Overall Performance Chart
      if (overallPerformanceChartRef.current !== null) {
        overallPerformanceChartRef.current.destroy();
      }
      overallPerformanceChartRef.current = new Chart(document.getElementById("overallPerformanceChart"), {
        type: 'pie',
        data: {
          labels: ['Courses Created', 'Enrollments'],
          datasets: [{
            label: 'Performance',
            data: [totalCourses, enrollments],
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
  }, [teachers, totalCourses, courseData, enrollments, students]);

  return (
    <div>
      <Helmet>
        <title>Advisions LMS</title>
        <meta name="description" content="Learning Management System" />
        <meta name="keywords" content="Advisions, LMS" />
      </Helmet>
      <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header" id="appContent">
        <div className="app-main">
          <SideBar />
          <div className="app-main-outer">
            <div className="app-main-inner">
              <div className="row">
                <div className="col-md-6 col-xl-4">
                  <div className="card mb-3 widget-content bg-midnight-bloom">
                    <div className="widget-content-wrapper text-white">
                      <div className="widget-content-left">
                        <div className="widget-heading"> Courses Created</div>
                        <div className="widget-subheading">Number of total active courses</div>
                      </div>
                      <div className="widget-content-right float-left">
                        <div className="widget-numbers text-white"><span style={{ margin: "60px" }}>{totalCourses}</span></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-4 ">
                  <div className="card mb-3 widget-content bg-arielle-smile">
                    <div className="widget-content-wrapper text-white">
                      <div className="widget-content-left">
                        <div className="widget-heading">Enrollments Created</div>
                        <div className="widget-subheading">Number of total course enrollments</div>
                      </div>
                      <div className="widget-content-right">
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
                <div className="col-md-6 col-xl-4">
                  <div className="card mb-3 widget-content bg-night-fade">
                    <div className="widget-content-wrapper text-white">
                      <div className="widget-content-left">
                        <div className="widget-heading">Instructors</div>
                        <div className="widget-subheading">Total instructors</div>
                      </div>
                      <div className="widget-content-right">
                        <div className="widget-numbers text-white"><span style={{ margin: "60px" }}>{totalInstructors}</span></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-4">
                  <div className="card mb-3 widget-content bg-arielle-smile">
                    <div className="widget-content-wrapper text-white">
                      <div className="widget-content-left">
                        <div className="widget-heading">Reviews</div>
                        <div className="widget-subheading">Total submitted reviews</div>
                      </div>
                      <div className="widget-content-right">
                        <div className="widget-numbers text-white"><span style={{ margin: "60px" }}>0</span></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-4">
                  <div className="card mb-3 widget-content bg-premium-dark">
                    <div className="widget-content-wrapper text-white">
                      <div className="widget-content-left">
                        <div className="widget-heading">Transaction</div>
                        <div className="widget-subheading">Total transaction amount</div>
                      </div>
                      <div className="widget-content-right">
                        <div className="widget-numbers text-warning"><span style={{ margin: "60px" }}>$0</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row" id="deleteTableItem">
                <div className="col-md-12">
                  <div className="card mb-5">
                    <div className="card-body">
                      <div className="cardTitleBox">
                      </div>
                      <div className="table-responsive-lg">
                        <table className="table">
                          <thead>
                            <tr className="text-center">
                              <th><strong>Teacher Id</strong></th>
                              <th><strong>Teacher Name</strong></th>
                              <th><strong>Teacher Email</strong></th>
                              <th><strong>Created At</strong></th>
                            </tr>
                          </thead>
                          <tbody className="text-center">
                            <tr>
                              <td className="tableId">{userId}</td>
                              <td className="tableId">{username}</td>
                              <td className="tableCustomar">{email}</td>
                              <td className="tableId">{activity}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row" id="deleteTableItem">
                <div className="col-md-4 col-lg-4">
                  <div className="card mb-5">
                    <div className="card-body">
                      <div className="cardTitleBox">
                        <canvas id="teacherCoursesChart"></canvas>
                        <hr className="bg-black border-2 border-bottom " />
                        <canvas id="teacherCoursesLineChart"></canvas>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4">
                  <div className="card mb-5">
                    <div className="card-body">
                      <div className="cardTitleBox">
                        <canvas id="teacherEnrollmentsChart"></canvas>
                        <hr className="bg-black border-2 border-bottom " />
                        <canvas id="teacherEnrollmentsLineChart"></canvas>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4">
                  <div className="card mb-5">
                    <div className="card-body">
                      <div className="cardTitleBox">
                        <canvas id="overallPerformanceChart"></canvas>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard3;
