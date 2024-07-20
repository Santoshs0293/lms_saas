import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCourseInfo } from "../../redux/course/courseAction";
import SideBar from './SideBar';
import axios from "axios";
import { Bar, Line } from 'react-chartjs-2';

const Dashboard3 = () => {
    const courseData = useSelector((state) => state.course.courseInfo);
    const [totalCourses, setTotalCourses] = useState(0);
    const [students, setStudents] = useState([]);
    const [teachers, setTeachers] = useState([]);
    const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL });
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllCourseInfo());
    }, [dispatch]);

    const fetchStudents = async () => {
        try {
            const response = await axiosInstance.get("/users/student", {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("auth_token")
                }
            });
            setStudents(response.data.studentInfo.length);
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
            setTeachers(response.data.teacherInfo.length);
        } catch (error) {
            console.error("Error fetching teachers:", error);
        }
    };

    useEffect(() => {
        fetchStudents();
        fetchTeachers();
    }, []);

    // Bar chart data
    const barChartData = {
        labels: ['Teachers', 'Students', 'Courses'],
        datasets: [{
            label: 'Count',
            backgroundColor: ['#5cdb95', '#f0cc6e', '#8080ff'],
            data: [teachers, students, courseData.length]
        }]
    };

    // Bar chart options
    const barChartOptions = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    };

    // Line chart data
    const lineChartData = {
        labels: ['Teachers', 'Students', 'Courses'],
        datasets: [
            {
                label: 'Trend',
                borderColor: '#3e95cd',
                fill: false,
                data: [teachers, students, courseData.length]
            }
        ]
    };

    // Line chart options
    const lineChartOptions = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    };




    return (
        <div>
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
                                                <div className="widget-heading">Courses</div>
                                                <div className="widget-subheading">Number of total active courses</div>
                                            </div>
                                            <div className="widget-content-right">
                                                <div className="widget-numbers text-white"><span style={{ margin: "60px" }}>{courseData.length}</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xl-4">
                                    <div className="card mb-3 widget-content bg-arielle-smile">
                                        <div className="widget-content-wrapper text-white">
                                            <div className="widget-content-left">
                                                <div className="widget-heading">Teacher</div>
                                                <div className="widget-subheading">Number of total Teachers enrolled</div>
                                            </div>
                                            <div className="widget-content-right">
                                                <div className="widget-numbers text-white"><span style={{ margin: "60px" }}>{teachers}</span></div>
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
                                                <div className="widget-numbers text-white"><span style={{ margin: "60px" }}>{students}</span></div>
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
                                                <div className="widget-numbers text-white"><span style={{ margin: "60px" }}>3</span></div>
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
                            {/* Chart section */}
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="card mb-5">
                                        <div className="card-body">
                                            <div className="cardTitleBox">
                                                <h5 className="card-title chartTitle">Teacher, Student, and Course Overview (Bar Chart)</h5>
                                            </div>
                                            <div className="chart-container" style={{ position: 'relative', height: '40vh' }}>
                                                <Bar data={barChartData} options={barChartOptions} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card mb-5">
                                        <div className="card-body">
                                            <div className="cardTitleBox">
                                                <h5 className="card-title chartTitle">Teacher, Student, and Course Overview (Line Chart)</h5>
                                            </div>
                                            <div className="chart-container" style={{ position: 'relative', height: '40vh' }}>
                                                <Line data={lineChartData} options={lineChartOptions} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Table section */}
                            <div className="row" id="deleteTableItem">
                                <div className="col-md-12">
                                    <div className="card mb-5">
                                        <div className="card-body">
                                            <div className="cardTitleBox">
                                                <h5 className="card-title chartTitle">Top Selling Courses</h5>
                                            </div>
                                            <div className="table-responsive-lg">
                                                <table className="table">
                                                    <thead>
                                                        <tr className="text-center">
                                                            <th><strong>ID</strong></th>
                                                            <th><strong>Course</strong></th>
                                                            <th><strong>Category</strong></th>

                                                            <th><strong>Price</strong></th>
                                                            <th><strong>Course Link</strong></th>

                                                        </tr>
                                                    </thead>
                                                    {Array.isArray(courseData) && courseData.map((row) => (
                                                        <tbody>
                                                            <tr key={row._id}>
                                                                <td className="tableId">{row._id}</td>
                                                                <td className="tableProduct">
                                                                    <div className="listproduct-section">

                                                                        <div className="product-pera">
                                                                            <p className="priceDis">{row.courseName}</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="tableCustomar">{row.courseDescription}
                                                                </td>

                                                                <td className="tableId">{row.coursePrice}</td>


                                                                <td className="tableId">{row.courseLink}</td>

                                                            </tr>



                                                        </tbody>
                                                    ))}
                                                </table>
                                            </div>
                                            <div className="text-end"><a href="/DashBoardCourse"
                                                className="btn btn-primary bgBlue btn-dipBlue px-3">View
                                                All
                                                Courses</a></div>
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
};

export default Dashboard3;
