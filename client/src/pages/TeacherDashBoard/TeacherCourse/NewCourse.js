import React, { useState } from "react";
import Sidebar from '../SideBar';
import { useDispatch } from "react-redux";
import { fetchAllCourseInfo } from "../../../redux/course/courseAction";
import axios from "axios";
import { ChakraProvider, useToast } from "@chakra-ui/react";

const CreateCourse = () => {
  const [courseThumbnail, setCourseThumbnail] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [courseName, setCourseName] = useState("");
  const [courseLink, setCourseLink] = useState("");
  const [coursePrice, setCoursePrice] = useState("");
  const [coursePdf, setCoursePdf] = useState("");
  const [pdfLabel, setPdfLabel] = useState("Choose PDF");
  const [imgLabel, setImgLabel] = useState("Choose photo");
  const [loading, setLoading] = useState(false);
  const [lectures, setLectures] = useState([
    {
      title: "",
      description: "",
      videoUrl: ""
    }
  ]);

  const toast = useToast();
  const dispatch = useDispatch();
  const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL });

  const courseFormHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("courseName", courseName);
    formData.append("courseDescription", courseDescription);
    formData.append("img", courseThumbnail);
    formData.append("courseLink", courseLink);
    formData.append("coursePrice", coursePrice);
    formData.append("pdf", coursePdf);
    formData.append("lectures", JSON.stringify(lectures));

    try {
      const response = await axiosInstance.post("/post-course", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + localStorage.getItem("auth_token"),
        },
      });

      if (response.status === 200) {
        setLoading(false);
        setCourseDescription("");
        setCourseName("");
        setCourseThumbnail("");
        setCourseLink("");
        setCoursePrice("");
        setCoursePdf("");
        setPdfLabel("Choose PDF");
        setImgLabel("Choose photo");
        setLectures([{ title: "", description: "", videoUrl: "" }]);
        toast({
          title: "Course created successfully.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        dispatch(fetchAllCourseInfo());

        
      }
    } catch (error) {
      setLoading(false);
      console.error("Error:", error);
      toast({
        title: "Error creating course.",
        description: error.response?.data?.message || "Something went wrong.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

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

  return (
    <div>
      <ChakraProvider>
      <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header" id="appContent">
        <div className="app-main">
          <Sidebar />
          <div className="app-main-outer">
            <div className="app-main-inner">
              <div className="page-title-actions px-3 d-flex">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="">Dashboard</a></li>
                    <li className="breadcrumb-item"><a href="">Create Course</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Create</li>
                  </ol>
                </nav>
              </div>
              <div className="row" id="deleteTableItem">
                <div className="col-md-12">
                  <div className="main-card card d-flex h-100 flex-column">
                    <div className="card-body">
                      <h5 className="card-title py-2">New Course</h5>
                      <form onSubmit={courseFormHandler} encType="multipart/form-data">
                        <div className="row">
                          <div className="col-4">
                            <div className="mb-3">
                              <label className="form-label">Course Name</label>
                              <input
                                required
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
                                required
                                onChange={(e) => setCourseDescription(e.target.value)}
                                value={courseDescription}
                                className="form-control"
                                placeholder="Enter course description"
                              />
                            </div>
                          </div>
                          <div className="col-4">
                            <div className="mb-3">
                              <label className="form-label">Course Thumbnail</label>
                              <input
                                required
                                type="file"
                                className="form-control"
                                onChange={(e) => {
                                  setCourseThumbnail(e.target.files[0]);
                                  setImgLabel(e.target.files[0].name);
                                }}
                                label={imgLabel}
                              />
                            </div>
                          </div>
                          <div className="col-4">
                            <div className="mb-3">
                              <label className="form-label">Course Link</label>
                              <input
                                required
                                onChange={(e) => setCourseLink(e.target.value)}
                                value={courseLink}
                                type="text"
                                placeholder="Enter course link"
                                className="form-control"
                              />
                            </div>
                          </div>
                          <div className="col-4">
                            <div className="mb-3">
                              <label className="form-label">Course Price</label>
                              <input
                                required
                                onChange={(e) => setCoursePrice(e.target.value)}
                                value={coursePrice}
                                type="number"
                                placeholder="Enter course price"
                                className="form-control"
                              />
                            </div>
                          </div>
                          <div className="col-4">
                            <div className="mb-3">
                              <label className="form-label">Course PDF (.pdf)</label>
                              <input
                                required
                                type="file"
                                className="form-control"
                                onChange={(e) => {
                                  setCoursePdf(e.target.files[0]);
                                  setPdfLabel(e.target.files[0].name);
                                }}
                                label={pdfLabel}
                              />
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                              <h3></h3>
                              <button type="button" className="btn btn-primary" onClick={handleAddLecture}>Add Lecture</button>
                            </div>
                            {lectures.map((lecture, index) => (
                              <div key={index}>
                                <h4>Add Lecture {index + 1}</h4>
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
                            <button type="submit" className="btn bgBlue btn-dipBlue text-black" disabled={loading}>
                              {loading ? "Creating..." : "Create"}
                            </button>
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
      </ChakraProvider>
    </div>

  );
};

export default CreateCourse;
