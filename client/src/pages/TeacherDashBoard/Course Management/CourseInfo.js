import React, { useState, useEffect } from "react";
import Sidebar from '../SideBar'
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCourseInfo, deleteCourseItem } from "../../../redux/course/courseAction";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const CourseInfo = ({course}) => {
    const courseData = useSelector((state) => state.course.courseInfo);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAllCourseInfo());
      }, [course, dispatch]);

      const deleteCourseHandler = (courseId) => {
        dispatch(deleteCourseItem(courseId));
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
                        <li className="breadcrumb-item"><a href="/studentDashboard">Dashboard</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Course</li>
                    </ol>
                </nav>
               
            </div>

            <div className="row" id="deleteTableItem">
                <div className="col-md-12">
                    <div className="card mb-5">
                        <div className="card-body">
                            <div className="table-responsive">
                                <table id="dataTable" className="table table-responsive-xl">
                                    <thead>
                                        <tr className="text-center">
                                          
                                            <th><strong>ID</strong></th>
                                            <th><strong>Course</strong></th>
                                            <th><strong>Description</strong></th>
                                            <th><strong>Price</strong></th>
                                            <th><strong>Instructor</strong></th>
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
                                                            <p className="priceDis">
                                                            {row.courseName}
                                                                                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="tableCustomar">
                                                {row.courseName}</td>
                                                <td className="tableId">  {row.coursePrice}</td>
                                                <td className="tableId">
                                                {row.teacher}
                                                                                                    </td>
                                                <td className="tableId">{row.courseLink}</td>
                                              
                                            </tr>
                                                
                                                                                                                                                        
                                                                            </tbody>
                                      ))}
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

export default CourseInfo