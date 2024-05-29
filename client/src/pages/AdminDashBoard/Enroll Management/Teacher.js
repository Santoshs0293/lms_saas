import React, { useEffect, useState } from "react";
import Sidebar from '../SideBar'
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Button } from "@mui/material";


const Teacher = () => {
    const [data, setData] = useState([]);
    const [message, setMessage] = useState("");
    const axiosInstance = axios.create({baseURL : process.env.REACT_APP_API_URL})
  
    const userList = async () => {
      const user = await axiosInstance.get("/users/teacher",{
          headers:{
              "Authorization":"Bearer "+localStorage.getItem("auth_token")
          }
      })
      setData(user.data.teacherInfo)
    };
  
    useEffect(() => {
      userList()
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

    const handleToggleActive = async (userId, isActive) => {
      try {
        const response = await axiosInstance.put(`/users/${userId}/active`, { active: !isActive });
        setMessage(response.data.message);
        userList();
      } catch (error) {
        setMessage(error.response.data.message);
      }
    };
  
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
  
    const emptyRows =
      rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
  return (
    <div>
                 <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header" id="appContent">
    
    <div className="app-main">
    <Sidebar/>
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
                                            <th style={{width: '15%'}}><strong>Progress</strong></th>
                                       
                                            <th><strong>Last Activity</strong></th>
                                            <th><strong>Status</strong></th>
                                            <th><strong>Action</strong></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {(rowsPerPage > 0
              ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : data
            ).map((row) => (
                                            <tr key={row._id}>
                                              
                                                <td className="tableProduct">
                                                    <div className="listproduct-section">
                                                        <div className="listproducts-image">
                                                            <img src="http://admin.razinskills.com/storage/category/image/0NYHYf4srP01JPgdJwOCWNUC1GxRsdPzmA2fMffP.png"/>
                                                        </div>
                                                        <div className="product-pera">
                                                            <p className="priceDis">{row.userName}</p>
                                                        </div>
                                                    </div>
                                                </td>

                                                <td className="tableCustomar">
                                            <span className="badge rounded-pill text-bg-success">     {row.email}</span>
                                                                                                    </td>

                                                <td className="tableId"><span className="px-3 py-1 rounded"
                                                        style={{backgroundColor: '#ff7b00'}}></span> &nbsp;Complete
                                                  </td>

                                                  <td className="tableStatus">
                                                                                                            <div className="statusItem">
                                                            <div ></div>
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
    </div>
  )
}

export default Teacher
