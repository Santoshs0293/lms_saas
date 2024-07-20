import React, { useEffect, useState } from "react";
import Sidebar from '../SideBar';
import { Alert } from 'react-bootstrap';
import axios from "axios";

const CreateCourse = () => {
    const [courseName, setCourseName] = useState('');
    const [courseLink, setCourseLink] = useState('');
    const [courseDescription, setCourseDescription] = useState('');
    const [coursePrice, setCoursePrice] = useState('');
    const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL });
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        // Fetch the course data when the component mounts
        const fetchCourseData = async () => {
            try {
                const response = await axiosInstance.get('/getCourse');
                const { courseName, courseLink, courseDescription, coursePrice } = response.data;
                setCourseName(courseName);
                setCourseLink(courseLink);
                setCourseDescription(courseDescription);
                setCoursePrice(coursePrice);
            } catch (error) {
                setError('Error fetching course data');
            }
        };

        fetchCourseData();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setMessage('');
        setError('');

        try {
            const response = await axiosInstance.put('/updateCourse', { courseName, courseLink, courseDescription, coursePrice });
            setMessage(response.data.message);
        } catch (error) {
            setError(error.response?.data?.error || 'Error updating course');
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
                                        <li className="breadcrumb-item"><a href="">Dashboard</a></li>
                                        <li className="breadcrumb-item"><a href="">Instructor</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Create</li>
                                    </ol>
                                </nav>
                            </div>
                            <div className="row" id="deleteTableItem">
                                <div className="col-md-12">
                                    <div className="main-card card d-flex h-100 flex-column">
                                        <div className="card-body">
                                            <h5 className="card-title py-2">Update Course</h5>
                                            <form onSubmit={handleSubmit} encType="multipart/form-data">
                                                {message && <Alert variant="success">{message}</Alert>}
                                                {error && <Alert variant="danger">{error}</Alert>}
                                                <input type="hidden" name="_token" value="zApQm200TRCSwlgCvq8JHVIYRC6flSbhaWtzbvCd" autoComplete="off" />
                                                <div className="row">
                                                    <div className="col-4">
                                                        <div className="mb-3">
                                                            <label className="form-label">Course Name</label>
                                                            <input
                                                                onChange={(e) => setCourseName(e.target.value)}
                                                                value={courseName}
                                                                type="text"
                                                                placeholder="Enter course name"
                                                                className="form-control"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="col-4">
                                                        <div className="mb-3">
                                                            <label className="form-label">Course Description</label>
                                                            <input
                                                                onChange={(e) => setCourseDescription(e.target.value)}
                                                                value={courseDescription}
                                                                className="form-control"
                                                                placeholder="Enter course Description"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="col-4">
                                                        <div className="mb-3">
                                                            <label className="form-label">Course Thumbnail</label>
                                                            <input
                                                                type="file"
                                                                className="form-control"
                                                                multiple
                                                                filename="img"
                                                                onChange={(e) => {
                                                                    console.log(e.target.files[0]);
                                                                    //   setCourseThumbnail(e.target.files[0])
                                                                }}
                                                                id="custom-file"
                                                                custom
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="col-4">
                                                        <div className="mb-3">
                                                            <label className="form-label">Course Link</label>
                                                            <input
                                                                onChange={(e) => setCourseLink(e.target.value)}
                                                                value={courseLink}
                                                                as="textarea"
                                                                rows={1}
                                                                placeholder="Enter course Description"
                                                                className="form-control"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="col-4">
                                                        <div className="mb-3">
                                                            <label className="form-label">Course Price</label>
                                                            <input
                                                                onChange={(e) => setCoursePrice(e.target.value)}
                                                                value={coursePrice}
                                                                as="textarea"
                                                                rows={1}
                                                                placeholder="Enter course Price"
                                                                className="form-control"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="col-4">
                                                        <div className="mb-3">
                                                            <label className="form-label">Course PDF (.pdf)</label>
                                                            <div className="input-group">
                                                                <input
                                                                    type="file"
                                                                    filename="pdf"
                                                                    className="form-control"
                                                                    multiple
                                                                    onChange={(e) => {
                                                                        //   console.log(e.target.files[0]);
                                                                        //   setCoursePdf(e.target.files[0]);
                                                                        //   setPdfLabel(${e.target.files.length} file(s) selected); // To display the selected file name
                                                                    }}
                                                                    id="custom-file-pdf"
                                                                    custom
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-12">
                                                        <button type="submit" className="btn bgBlue btn-dipBlue text-black">Create</button>
                                                    </div>
                                                </div>
                                            </form>
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

export default CreateCourse;
