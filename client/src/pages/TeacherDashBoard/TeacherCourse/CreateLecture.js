import React, { useState } from "react";
import Sidebar from '../SideBar';
import axios from "axios";

const CreateCourse = () => {
    const [courseId, setCourseId] = useState("");
    const [lectures, setLectures] = useState([
        {
            title: "",
            description: "",
            videoUrl: ""
        }
    ]);
    const [loading, setLoading] = useState(false);
    const [toast, setToast] = useState(false);

    const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL });

    const handleLectureChange = (index, e) => {
        const { name, value } = e.target;
        const list = [...lectures];
        list[index][name] = value;
        setLectures(list);
    };

    const handleAddLecture = () => {
        setLectures([
            ...lectures,
            {
                title: "",
                description: "",
                videoUrl: ""
            }
        ]);
    };

    const handleRemoveLecture = (index) => {
        const list = [...lectures];
        list.splice(index, 1);
        setLectures(list);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        axiosInstance
            .post(`/courses/${courseId}/lectures`, { lectures }, {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("auth_token"),
                },
            })
            .then((response) => {
                setToast(true);
                setLoading(false);
                setLectures([
                    {
                        title: "",
                        description: "",
                        videoUrl: ""
                    }
                ]);
                console.log("Lectures added successfully");
            })
            .catch((error) => {
                console.error("Error:", error);
                setLoading(false);
            });
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
                                        <li className="breadcrumb-item active" aria-current="page">Create Lectures</li>
                                    </ol>
                                </nav>
                            </div>
                            <div className="row" id="deleteTableItem">
                                <div className="col-md-12">
                                    <div className="main-card card d-flex h-100 flex-column">
                                        <div className="card-body">
                                            <h5 className="card-title py-2">Add Lectures</h5>
                                            <form onSubmit={handleSubmit}>
                                                <div className="mb-3">
                                                    <label className="form-label">Course ID</label>
                                                    <input
                                                        required
                                                        type="text"
                                                        className="form-control"
                                                        value={courseId}
                                                        onChange={(e) => setCourseId(e.target.value)}
                                                        placeholder="Enter Course ID"
                                                    />
                                                </div>
                                                <div className="col-12">
                                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                                        <h3>Lectures</h3>
                                                        <button type="button" className="btn btn-primary" onClick={handleAddLecture}>Add Lecture</button>
                                                    </div>
                                                    {lectures.map((lecture, index) => (
                                                        <div key={index} className="lecture-section">
                                                            <h4>Lecture {index + 1}</h4>
                                                            <div className="mb-3">
                                                                <label className="form-label">Title</label>
                                                                <input
                                                                    required
                                                                    type="text"
                                                                    className="form-control"
                                                                    value={lecture.title}
                                                                    onChange={(e) => handleLectureChange(index, e)}
                                                                    name="title"
                                                                />
                                                            </div>
                                                            <div className="mb-3">
                                                                <label className="form-label">Description</label>
                                                                <textarea
                                                                    required
                                                                    className="form-control"
                                                                    value={lecture.description}
                                                                    onChange={(e) => handleLectureChange(index, e)}
                                                                    name="description"
                                                                ></textarea>
                                                            </div>
                                                            <div className="mb-3">
                                                                <label className="form-label">Video URL</label>
                                                                <input
                                                                    required
                                                                    type="text"
                                                                    className="form-control"
                                                                    value={lecture.videoUrl}
                                                                    onChange={(e) => handleLectureChange(index, e)}
                                                                    name="videoUrl"
                                                                />
                                                            </div>
                                                            <div className="float-right">
  <div className="d-flex justify-content-end">
    <button type="button" className="btn btn-danger btn-sm ml-2" onClick={() => handleRemoveLecture(index)}>
      Remove
    </button>
  </div>
</div>
                                                       
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="col-12">
                                                    <button type="submit" className="btn bgBlue btn-dipBlue text-black">Add Lectures</button>
                                                </div>
                                            </form>
                                            {loading && <p>Loading...</p>}
                                            {toast && <p>Lectures added successfully!</p>}
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

export default CreateCourse;
