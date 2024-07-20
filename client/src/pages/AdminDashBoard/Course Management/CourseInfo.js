import React, { useEffect, useState, useMemo } from "react";
import Sidebar from '../SideBar';
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCourseInfo, deleteCourseItem } from "../../../redux/course/courseAction";
import { Link } from "react-router-dom";
import { IconButton, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";

const CourseInfo = () => {
    const dispatch = useDispatch();
    const [userData, setUserData] = useState(null);
    const [openEditDialog, setOpenEditDialog] = useState(false);
    const [openEditCourseDialog, setOpenEditCourseDialog] = useState(false);
    const [currentLecture, setCurrentLecture] = useState(null);
    const [currentCourse, setCurrentCourse] = useState(null);
    const [currentCourseThumbnail, setCurrentCourseThumbnail] = useState("");
    const [currentCoursePdf, setCurrentCoursePdf] = useState([]);
    const [currentLecturePdf, setCurrentLecturePdf] = useState(null);
    const [openDeleteCourseDialog, setOpenDeleteCourseDialog] = useState(false);
    const [openDeleteLectureDialog, setOpenDeleteLectureDialog] = useState(false);
    const [courseToDelete, setCourseToDelete] = useState(null);
    const [lectureToDelete, setLectureToDelete] = useState(null);

    const confirmDeleteoneCourse = (courseId) => {
        setCourseToDelete(courseId);
        setOpenDeleteCourseDialog(true);
    };

    const confirmDeleteLecture = (lectureId) => {
        setLectureToDelete(lectureId);
        setOpenDeleteLectureDialog(true);
    };

    const handleCloseDeleteCourseDialog = () => {
        setOpenDeleteCourseDialog(false);
        setCourseToDelete(null);
    };

    const handleCloseDeleteLectureDialog = () => {
        setOpenDeleteLectureDialog(false);
        setLectureToDelete(null);
    };

    const handleconfirmDeleteoneCourse = () => {
        dispatch(deleteCourseItem(courseToDelete));
        handleCloseDeleteCourseDialog();
    };

    const handleConfirmDeleteLecture = async () => {
        try {
            const response = await axiosInstance.delete(`/lectures/${lectureToDelete}`, {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("auth_token"),
                },
            });

            if (response.status === 200) {
                console.log("Lecture deleted successfully");
                dispatch(fetchAllCourseInfo()); // Refresh course info after deletion
            } else {
                console.error('Failed to delete lecture');
            }
        } catch (error) {
            console.error('Error:', error);
        }
        handleCloseDeleteLectureDialog();
    };


    useEffect(() => {
        const userDataFromStorage = localStorage.getItem('user');
        if (userDataFromStorage) {
            setUserData(JSON.parse(userDataFromStorage));
        }
    }, []);

    const userId = userData ? userData._id : null;
    const courseData = useSelector((state) => state.course.courseInfo || []);
    const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL });

    useEffect(() => {
        dispatch(fetchAllCourseInfo());
    }, [dispatch]);



    const filteredCourses = useMemo(() => Array.isArray(courseData) ?
        courseData.filter(course => course.teacher === userId) : [], [courseData, userId]);



    const editLectureHandler = (lecture) => {
        setCurrentLecture(lecture);
        setOpenEditDialog(true);
    };

    const editCourseHandler = (course) => {
        setCurrentCourse(course);
        setOpenEditCourseDialog(true);
    };


    const handleEditDialogClose = () => {
        setOpenEditDialog(false);
        setCurrentLecture(null);
        setCurrentLecturePdf(null); // Reset lecture PDF state
    };

    const handleEditCourseDialogClose = () => {
        setOpenEditCourseDialog(false);
        setCurrentCourse(null);
    };

    const handleLectureSave = async () => {
        try {
            const formData = new FormData();
            formData.append("title", currentLecture.title);
            formData.append("description", currentLecture.description);
            formData.append("videoUrl", currentLecture.videoUrl);
            if (currentLecturePdf) {
                formData.append("pdf", currentLecturePdf);
            }

            const response = await axiosInstance.put(`/lectures/${currentLecture._id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: "Bearer " + localStorage.getItem("auth_token"),
                },
            });

            if (response.status === 200) {
                const updatedLecture = response.data;
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

    const handleCourseSave = async () => {
        try {
            const formData = new FormData();
            formData.append("courseName", currentCourse.courseName);
            formData.append("courseDescription", currentCourse.courseDescription);
            formData.append("coursePrice", currentCourse.coursePrice);
            formData.append("courseLink", currentCourse.courseLink);
            if (currentCourseThumbnail) {
                formData.append("courseThumbnail", currentCourseThumbnail);
            }
            for (let i = 0; i < currentCoursePdf.length; i++) {
                formData.append("coursePdf", currentCoursePdf[i]);
            }

            const response = await axiosInstance.put(`/courses/${currentCourse._id}`, formData, {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("auth_token"),
                    "Content-Type": "multipart/form-data",
                },
            });

            if (response.status === 200) {
                const updatedCourse = response.data;
                setCurrentCourse(updatedCourse);
                setCurrentCourseThumbnail(""); // Reset current course thumbnail state
                setCurrentCoursePdf([]); // Reset current course PDF state
                handleEditCourseDialogClose();
                dispatch(fetchAllCourseInfo()); // Refresh course info after update
            } else {
                console.error('Failed to update course');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleThumbnailChange = (e) => {
        const file = e.target.files[0]; // Assuming single file upload
        setCurrentCourseThumbnail(file);
    };

    const handlePdfChange = (e) => {
        const files = e.target.files;
        setCurrentCoursePdf([...files]);
    };

    const handleLecturePdfChange = (e) => {
        const file = e.target.files[0];
        setCurrentLecturePdf(file);
    };

    const handleLectureChange = (e) => {
        const { name, value } = e.target;
        setCurrentLecture(prevState => ({ ...prevState, [name]: value }));
    };

    const handleCourseChange = (e) => {
        const { name, value } = e.target;
        setCurrentCourse(prevState => ({ ...prevState, [name]: value }));
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
                                                {courseData.map((course) => (
                                                    <table id="dataTable" className="table table-responsive-xl">

                                                        <thead>
                                                            <tr className="text-center">

                                                                <th style={{ minWidth: '' }}><strong>Course</strong></th>
                                                                <th style={{ minWidth: '' }}><strong>Description</strong></th>
                                                                <th style={{ minWidth: '' }}><strong>Price</strong></th>
                                                                {/* <th style={{ minWidth: '' }}><strong>Instructor</strong></th> */}
                                                                <th style={{ minWidth: '' }}><strong>Course Link</strong></th>
                                                                <th style={{ minWidth: '' }}><strong>Course Pdf</strong></th>
                                                                <th style={{ minWidth: '' }}><strong>Status</strong></th>
                                                                <th style={{ minWidth: '' }}><strong>Add Lecture</strong></th>
                                                                <th style={{ minWidth: '' }}><strong>Edit & Delete</strong></th>
                                                            </tr>
                                                        </thead>

                                                        <React.Fragment key={course._id}>
                                                            <tbody>
                                                                <tr>

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
                                                                    <td >
                                                                        {course.courseDescription}
                                                                    </td>
                                                                    <td >{course.coursePrice}</td>
                                                              
                                                                    <td >{course.courseLink}</td>
                                                                    <td ><a href={course.coursePdf}>Pdf Url</a></td>
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
                                                                                to=
                                                                                "/createAdminLectures/" state={course._id}
                                                                            >
                                                                                <EditIcon color="primary" />
                                                                            </Link>
                                                                           
                                                                        </div>
                                                                    </td>
                                                                    <td className="tableAction">
                                                                        <div className="action-icon">
                                                                           
                                                                            <IconButton onClick={() => confirmDeleteoneCourse(course._id)}>
                                                                                <DeleteIcon style={{ color: "red" }} />
                                                                            </IconButton>
                                                                            <IconButton onClick={() => editCourseHandler(course)}>
                                                                                <EditIcon color="primary" />
                                                                            </IconButton>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td colSpan="9">
                                                                        <table className="table table-bordered">
                                                                            <thead>
                                                                                <tr>
                                                                                    <th style={{ minWidth: '150px' }}>Title</th>
                                                                                    <th style={{ minWidth: '200px' }}>Description</th>
                                                                                    <th style={{ minWidth: '200px' }}>Video URL</th>
                                                                                    <th style={{ minWidth: '200px' }}>Pdf URL</th>
                                                                                    <th style={{ minWidth: '100px' }}>Edit</th>
                                                                                    <th style={{ minWidth: '100px' }}>Delete</th>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                {course.lectures.map((lecture, index) => (
                                                                                    <tr key={index}>
                                                                                        <td>{lecture.title}</td>
                                                                                        <td>{lecture.description}</td>
                                                                                        <td><a href={lecture.videoUrl} target="_blank" rel="noopener noreferrer">{lecture.videoUrl}</a></td>
                                                                                        <td><a href={lecture.pdfUrl}>Pdf Url</a></td>
                                                                                        <td>
                                                                                            <IconButton onClick={() => editLectureHandler(lecture)}>
                                                                                                <EditIcon color="primary" />
                                                                                            </IconButton>
                                                                                        </td>
                                                                                        <td>
                                                                                            <IconButton onClick={() => confirmDeleteLecture(lecture._id)}>
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

                                                    </table>
                                                ))}
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
                        <input
                            type="file"
                            className="form-control"
                            name="lecturePdf"
                            onChange={handleLecturePdfChange}
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
            {currentCourse && (
                <Dialog open={openEditCourseDialog} onClose={handleEditCourseDialogClose}>
                    <DialogTitle>Edit Course</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please update the course details.
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            name="courseName"
                            label="Course Name"
                            type="text"
                            fullWidth
                            value={currentCourse.courseName}
                            onChange={handleCourseChange}
                        />
                        <TextField
                            margin="dense"
                            name="courseDescription"
                            label="Course Description"
                            type="text"
                            fullWidth
                            value={currentCourse.courseDescription}
                            onChange={handleCourseChange}
                        />
                        <TextField
                            margin="dense"
                            name="coursePrice"
                            label="Course Price"
                            type="number"
                            fullWidth
                            value={currentCourse.coursePrice}
                            onChange={handleCourseChange}
                        />
                        <TextField
                            margin="dense"
                            name="courseLink"
                            label="Course Link"
                            type="text"
                            fullWidth
                            value={currentCourse.courseLink}
                            onChange={handleCourseChange}
                        />
                           <label className="form-label">Course Thumbnail</label>
                        <input
                            type="file"
                            className="form-control"
                            name="courseThumbnail"
                             label="Course Thumbnail"
                            onChange={handleThumbnailChange}
                        />
                        <label className="form-label">Course PDF</label>
                        <input
                            type="file"
                            className="form-control"
                            name="coursePdf"
                            label="Course Pdf"
                            multiple
                            onChange={handlePdfChange}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleEditCourseDialogClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={handleCourseSave} color="primary">
                            Save
                        </Button>
                    </DialogActions>
                </Dialog>
            )}
            <Dialog open={openDeleteCourseDialog} onClose={handleCloseDeleteCourseDialog}>
                <DialogTitle>Confirm Delete</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to delete this course?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDeleteCourseDialog} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleconfirmDeleteoneCourse} color="secondary">
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>

            <Dialog open={openDeleteLectureDialog} onClose={handleCloseDeleteLectureDialog}>
                <DialogTitle>Confirm Delete</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to delete this lecture?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDeleteLectureDialog} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleConfirmDeleteLecture} color="secondary">
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>

        </div>
    );
}

export default CourseInfo;