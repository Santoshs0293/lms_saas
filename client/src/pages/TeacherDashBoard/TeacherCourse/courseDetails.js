import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchAllCourseInfo } from "../../../redux/course/courseAction";
import { IconButton, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";

const Info = () => {
    const { courseId } = useParams();
    const dispatch = useDispatch();
    const [openEditDialog, setOpenEditDialog] = useState(false);
    const [currentLecture, setCurrentLecture] = useState(null);
    const courseData = useSelector((state) => state.course.courseInfo || []);
    const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL });

    useEffect(() => {
        dispatch(fetchAllCourseInfo());
    }, [dispatch]);

    const course = courseData.find(course => course._id === courseId);

    const deleteLectureHandler = async (lectureId) => {
        try {
            const response = await axiosInstance.delete(`/lectures/${lectureId}`, {
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
    };

    const editLectureHandler = (lecture) => {
        setCurrentLecture(lecture);
        setOpenEditDialog(true);
    };

    const handleEditDialogClose = () => {
        setOpenEditDialog(false);
        setCurrentLecture(null);
    };

    const handleLectureSave = async () => {
        try {
            const response = await axiosInstance.put(`/lectures/${currentLecture._id}`, {
                title: currentLecture.title,
                description: currentLecture.description,
                videoUrl: currentLecture.videoUrl,
            }, {
                headers: {
                    'Content-Type': 'application/json',
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

    const handleLectureChange = (e) => {
        const { name, value } = e.target;
        setCurrentLecture(prevState => ({ ...prevState, [name]: value }));
    };

    if (!course) return <div>Loading...</div>;

    return (
        <div>
            <h2>{course.courseName}</h2>
            <p>{course.courseDescription}</p>
            <div className="lectures">
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
};

export default Info;
