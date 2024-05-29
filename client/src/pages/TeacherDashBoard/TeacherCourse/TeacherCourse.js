import React, { useEffect, useState, useMemo } from "react";
import Sidebar from '../SideBar';
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCourseInfo, deleteCourseItem } from "../../../redux/course/courseAction";
import { Link } from "react-router-dom";
import { IconButton, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";


const CourseInfo = () => {
    const dispatch = useDispatch();
    const [userData, setUserData] = useState(null);
    const [openEditDialog, setOpenEditDialog] = useState(false);
    const [currentLecture, setCurrentLecture] = useState(null);

    useEffect(() => {
        const userDataFromStorage = localStorage.getItem('user');
        if (userDataFromStorage) {
            setUserData(JSON.parse(userDataFromStorage));
        }
    }, []);

    const userId = userData ? userData._id : null;
    const courseData = useSelector((state) => state.course.courseInfo || []);

    useEffect(() => {
        dispatch(fetchAllCourseInfo());
    }, [dispatch]);

    const filteredCourses = useMemo(() => Array.isArray(courseData) ?
        courseData.filter(course => course.teacher === userId) : [], [courseData, userId]);

    const deleteCourseHandler = (courseId) => {
        dispatch(deleteCourseItem(courseId));
    };

    const editLectureHandler = (lecture) => {
        setCurrentLecture(lecture);
        setOpenEditDialog(true);
    };

    const deleteLectureHandler = async (lectureId) => {
        try {
            const response = await fetch(`http://localhost:5000/lectures/${lectureId}`, {
                method: 'DELETE',
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("auth_token"),
                },
            });

            if (response.ok) {
                console.log("Lecture deleted successfully");
                dispatch(fetchAllCourseInfo()); // Refresh course info after deletion
            } else {
                console.error('Failed to delete lecture');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleEditDialogClose = () => {
        setOpenEditDialog(false);
        setCurrentLecture(null);
    };

    const handleLectureSave = async () => {
        try {
            const response = await fetch(`http://localhost:5000/lectures/${currentLecture._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: "Bearer " + localStorage.getItem("auth_token"),
                },
                body: JSON.stringify({
                    title: currentLecture.title,
                    description: currentLecture.description,
                    videoUrl: currentLecture.videoUrl,
                }),
            });

            if (response.ok) {
                const updatedLecture = await response.json();
                setCurrentLecture(updatedLecture);
                handleEditDialogClose();
                dispatch(fetchAllCourseInfo()); // Refresh course info after update
            } else {
                console.error('Failed to update lecture');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleLectureChange = (e) => {
        const { name, value } = e.target;
        setCurrentLecture(prevState => ({ ...prevState, [name]: value }));
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
                                        <li className="breadcrumb-item"><a href="">Dashboard</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Course</li>
                                    </ol>
                                </nav>
                                <div className="ms-auto mb-3">
                                    <Link to="/newteachercourses" className="btn-shadow mr-3 btn btn-dark ms-auto">
                                        + New Course
                                    </Link>
                                </div>
                            </div>

                            <div className="row" id="deleteTableItem">
                                <div className="col-md-12">
                                    <div className="card mb-5">
                                        <div className="card-body">
                                            <div className="table-responsive">
                                                <table id="dataTable" className="table table-responsive-xl">
                                                    <thead>
                                                        <tr>
                                                            <th><strong>ID</strong></th>
                                                            <th><strong>Course</strong></th>
                                                            <th><strong>Description</strong></th>
                                                            <th><strong>Price</strong></th>
                                                            <th><strong>Instructor</strong></th>
                                                            <th><strong>Course Link</strong></th>
                                                            <th><strong>Status</strong></th>
                                                            <th><strong>Action</strong></th>
                                                        </tr>
                                                    </thead>
                                                    {filteredCourses.map((course) => (
                                                        <React.Fragment key={course._id}>
                                                            <tbody>
                                                                <tr>
                                                                    <td className="tableId">{course._id}</td>
                                                                    <td className="tableProduct">
                                                                        <div className="listproduct-section">
                                                                            <div className="listproducts-image">
                                                                                <img
                                                                                    style={{
                                                                                        height: "40px",
                                                                                        width: "60px",
                                                                                        objectFit: "contain",
                                                                                    }}
                                                                                    src={course.courseThumbnail}
                                                                                    alt=""
                                                                                />
                                                                            </div>
                                                                            <div className="product-pera">
                                                                                <p className="priceDis">
                                                                                    {course.courseName}
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td className="tableCustomar">
                                                                        {course.courseDescription}
                                                                    </td>
                                                                    <td className="tableId">{course.coursePrice}</td>
                                                                    <td className="tableId">{course.teacher}</td>
                                                                    <td className="tableId">{course.courseLink}</td>
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
                                                                            <Link data-bs-toggle="tooltip" data-bs-placement="top"
                                                                                data-bs-custom-className="custom-tooltip"
                                                                                data-bs-title="Edit Course"
                                                                                to="/createLecture">
                                                                                <EditIcon color="primary" />
                                                                            </Link>
                                                                            <IconButton onClick={() => deleteCourseHandler(course._id)}>
                                                                                <DeleteIcon style={{ color: "red" }} />
                                                                            </IconButton>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td colSpan="8">
                                                                        <table className="table table-bordered">
                                                                            <thead>
                                                                                <tr>
                                                                                    <th>Title</th>
                                                                                    <th>Description</th>
                                                                                    <th>Video URL</th>
                                                                                    <th>Edit</th>
                                                                                    <th>Delete</th>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                {course.lectures.map((lecture, index) => (
                                                                                    <tr key={index}>
                                                                                        <td>{lecture.title}</td>
                                                                                        <td>{lecture.description}</td>
                                                                                        <td><a href={lecture.videoUrl} target="_blank" rel="noopener noreferrer">{lecture.videoUrl}</a></td>
                                                                                        <td>
                                                                                            <IconButton onClick={() => editLectureHandler(lecture)}>
                                                                                                <EditIcon color="primary" />
                                                                                            </IconButton>
                                                                                        </td>
                                                                                        <td>
                                                                                            <IconButton onClick={() => deleteLectureHandler(lecture._id)}>
                                                                                                <DeleteIcon style={{ color: "red" }} />
                                                                                            </IconButton>
                                                                                        </td>
                                                                                    </tr>
                                                                                ))}
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </React.Fragment>
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
            {currentLecture && (
                <Dialog open={openEditDialog} onClose={handleEditDialogClose}>
                    <DialogTitle>Edit Lecture</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please update the lecture details.
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            name="title"
                            label="Title"
                            type="text"
                            fullWidth
                            value={currentLecture.title}
                            onChange={handleLectureChange}
                        />
                        <TextField
                            margin="dense"
                            name="description"
                            label="Description"
                            type="text"
                            fullWidth
                            value={currentLecture.description}
                            onChange={handleLectureChange}
                        />
                        <TextField
                            margin="dense"
                            name="videoUrl"
                            label="Video URL"
                            type="text"
                            fullWidth
                            value={currentLecture.videoUrl}
                            onChange={handleLectureChange}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleEditDialogClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={handleLectureSave} color="primary">
                            Save
                        </Button>
                    </DialogActions>
                </Dialog>
            )}
        </div>
    );
}

export default CourseInfo;
