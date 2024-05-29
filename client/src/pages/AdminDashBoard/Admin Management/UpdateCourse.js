import React, { useEffect, useState } from "react";
import Sidebar from '../SideBar'
import { Alert } from 'react-bootstrap';
import axios from "axios"

const CreateCourse = () => {
    const [courseName, setCourseName] = useState('');
    const [courseLink, setCourseLink] = useState('');
    const [courseDescription, setCourseDescription] = useState('');
    const [coursePrice, setCoursePrice] = useState('');
    const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL });
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setMessage('');
        setError('');

        try {
            const response = await axiosInstance.put('/updateCourse', { courseName, courseLink, courseDescription, coursePrice });
            setMessage(response.data.message);
        } catch (error) {
            setError(error.response?.data?.error || 'Error updating ');
        }
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
                            <h5 className="card-title py-2">New Instructor</h5>
                            <form onSubmit={handleSubmit} encType="multipart/form-data">
                            {message && <Alert variant="success">{message}</Alert>}
                    {error && <Alert variant="danger">{error}</Alert>}
                                <input type="hidden" name="_token" value="zApQm200TRCSwlgCvq8JHVIYRC6flSbhaWtzbvCd" autocomplete="off"/>                                <div className="row">
                                    <div className="col-4">
                                        <div className="mb-3">
                                            <label className="form-label">Course Name</label>
                                            <input       required
             
             onChange={(e) => setCourseName(e.target.value)}
             value={courseName}
             type="text"
             placeholder="Enter course name"
             className="form-control"/>
                                        </div>
                                    </div>

                                    <div className="col-4">
                                        <div className="mb-3">
                                            <label className="form-label">Course Description</label>
                                            <input  required
                onChange={(e) => setCourseDescription(e.target.value)}
                value={courseDescription}
                className="form-control"
                placeholder="Enter course Description"/>
                                        </div>
                                    </div>

                                    <div className="col-4">
                                        <div className="mb-3">
                                            <label className="form-label">Course Thumbnail</label>
                                            <input  
                type="file"
                className="form-control"
                multiple 
                filename ="img"
                onChange={(e) => {
                  console.log(e.target.files[0]);
                //   setCourseThumbnail(e.target.files[0])
                }}
                id="custom-file"
                custom
                // label={imgLabel ? `${imgLabel}` : "Choose photo"}
                />
                                        </div>
                                    </div>

                                    <div className="col-4">
                                        <div className="mb-3">
                                            <label className="form-label">Course Link</label>
                                            <input required
                onChange={(e) => setCourseLink(e.target.value)}
                value={courseLink}
                as="textarea"
                rows={1}
                placeholder="Enter course Description"
                className="form-control"/>
                                        </div>
                                    </div>

                                    <div className="col-4">
                                        <div className="mb-3">
                                            <label className="form-label">Confirm Password</label>
                                            <input  required
                onChange={(e) => setCoursePrice(e.target.value)}
                value={coursePrice}
                as="textarea"
                rows={1}
                placeholder="Enter course Description"
                 className="form-control"/>
                                        </div>
                                    </div>

                                    <div className="col-4">
                                        <div className="mb-3">
                                            <label className="form-label">Course PDF (.pdf)</label>
                                            <div className="input-group">
                                                
                                                    <input required
    type="file"
    
    filename="pdf"
    className="form-control"
    multiple  
    onChange={(e) => {
    //   console.log(e.target.files[0]);
    //   setCoursePdf(e.target.files[0]);
    //   setPdfLabel(`${e.target.files.length} file(s) selected`); // To display the selected file name
    }}
    id="custom-file-pdf"
    custom
    // label={pdfLabel ? `${pdfLabel}` : "Choose PDF"}
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
  )
}

export default CreateCourse