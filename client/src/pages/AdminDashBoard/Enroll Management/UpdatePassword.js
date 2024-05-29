import React from 'react'
import Sidebar from '../SideBar'
import { useEffect, useState } from "react";
import axios from 'axios';
const CreateUser = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL });
    const handleSubmit = async (event) => {
        event.preventDefault();
        setMessage('');
        setError('');

        try {
            const response = await axiosInstance.put('/users/updatePassword', { email, password });
            setMessage(response.data.message);
        } catch (error) {
            setError(error.response?.data?.error || 'Error updating Password');
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
                        <li className="breadcrumb-item"><a href="/">Dashboard</a></li>
                        <li className="breadcrumb-item"><a href="/">Instructor</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Create</li>
                    </ol>
                </nav>
            </div>
            <div className="row" id="deleteTableItem">
                <div className="col-md-12">
                                        <div className="main-card card d-flex h-100 flex-column">
                        <div className="card-body">
                            <h5 className="card-title py-2">Create New User</h5>
                            <form onSubmit={handleSubmit} encType="multipart/form-data">
                                <input type="hidden" name="_token" value="zApQm200TRCSwlgCvq8JHVIYRC6flSbhaWtzbvCd" autocomplete="off"/>                                <div className="row">
                                    <div className="col-4">
                                        <div className="mb-3">
                                            <label className="form-label">Name</label>
                                            <input  name="userName"
        
        value={email} 
        onChange={e => setEmail(e.target.value)} 
              required className="form-control"
                                                placeholder="Enter user name"/>
                                        </div>
                                    </div>

                                    <div className="col-4">
                                        <div className="mb-3">
                                            <label className="form-label">Email</label>
                                            <input   
             type="password" 
             value={password} 
             onChange={e => setPassword(e.target.value)}  required className="form-control"
                                                placeholder="Enter user email"/>
                                        </div>
                                    </div>

                                    

                              

                                    <div className="col-12">
                                    <button type="submit" className="btn bgBlue btn-dipBlue text-black">Update Password</button>
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

export default CreateUser