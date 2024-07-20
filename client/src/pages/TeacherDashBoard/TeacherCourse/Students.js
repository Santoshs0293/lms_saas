// StudentList.js
import React, { useEffect, useState } from "react";
import Sidebar from '../SideBar';
import axios from "axios";
import StudentDetailModal from './StudentDetails';
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";

const StudentList = () => {
  const [data, setData] = useState([]);
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [userData, setUserData] = useState(null);


  useEffect(() => {
      const userDataFromStorage = localStorage.getItem('user');
      if (userDataFromStorage) {
          setUserData(JSON.parse(userDataFromStorage));
      }
  }, []);

  const userId = userData ? userData._id : null;

  const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL });

  const userList = async () => {
    const user = await axiosInstance.get("/users/student", {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("auth_token")
      }
    });
    setData(user.data.studentInfo);
  };



  useEffect(() => {
   
    userList();
  }, []);

  const handleDeleteUser = async (userId) => {
    try {
      const response = await axiosInstance.delete(`/users/${userId}`);
      setMessage(response.data.message);
      userList();
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  const handleShow = (student) => {
    setSelectedStudent(student);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  const filteredData = data.filter(student => student.teacherId === userId);

  const studentCount = filteredData.length;

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
                    <li className="breadcrumb-item"><a href="/">Dashboard</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Enrollment</li>
                  </ol>
                </nav>
              </div>
              <div className="row" id="deleteTableItem">
                <div className="col-md-12">
                  <div className="card mb-5">
                    <div className="card-body">
                    <div className="d-flex justify-content-between mb-3">
                        <h5>Total Students Created by Teacher: {studentCount}</h5>
                      </div>
                      <div className="table-responsive-lg text-center">
                        <table id="dataTable" className="table">
                          <thead className="">
                            <tr>
                              <th><strong>Enroll ID</strong></th>
                              <th><strong>Student</strong></th>
                              <th><strong>Email</strong></th>
                              <th><strong>Status</strong></th>
                              <th><strong>Action</strong></th>
                            </tr>
                          </thead>
                          <tbody>
                            {filteredData.map((row) => (
                              <tr key={row._id}>
                                <td className="tableId">{row._id}</td>
                                <td className="tableProduct">
                                  <div className="listproduct-section">
                                    <div className="listproducts-image">
                                      <img src="http://admin.razinskills.com/storage/category/image/0NYHYf4srP01JPgdJwOCWNUC1GxRsdPzmA2fMffP.png" />
                                    </div>
                                    <div className="product-pera">
                                      <p className="priceDis">{row.userName}</p>
                                    </div>
                                  </div>
                                </td>
                                <td className="tableCustomar">
                                  <span className="badge rounded-pill text-bg-success">{row.email}</span>
                                </td>
                                <td className="tableStatus">
                                  <div className="statusItem">
                                    <div className="circleDot animatedCompleted"></div>
                                    <div className="statusText">
                                      <span className="stutsCompleted">Active</span>
                                    </div>
                                  </div>
                                </td>
                                <td className="tableAction">
                                  <div className="action-icon">
                                    <IconButton onClick={() => handleDeleteUser(row._id)}>
                                      <DeleteIcon style={{ color: "red" }} />
                                    </IconButton>
                                    <a href="#" onClick={() => handleShow(row)}>Details</a>
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
            </div>
          </div>
        </div>
      </div>
      {selectedStudent && (
        <StudentDetailModal
          show={show}
          handleClose={handleClose}
          student={selectedStudent}
        />
      )}
    </div>
  );
};

export default StudentList;
