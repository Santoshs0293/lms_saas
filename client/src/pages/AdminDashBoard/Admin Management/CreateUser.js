import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Sidebar from '../SideBar';

const CreateUser = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [toast, setToast] = useState(false);
  const navigate = useNavigate();

  const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
    axiosInstance.post("/auth/register", {
      userName,
      email,
      password,
      confirmPassword,
      role
    })
    .then((response) => {
      setLoading(false);
      const result = response.data;
      if (result.errors) {
        if (typeof result.errors === 'object') {
          const errorMessages = Object.values(result.errors).join(', ');
          setError(errorMessages);
        } else {
          setError(result.errors);
        }
      } else {
        setToast(true);
        setError(null);
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      }
    })
    .catch((error) => {
      setLoading(false);
      if (error.response && error.response.data && error.response.data.errors) {
        const errorMessages = Object.values(error.response.data.errors).join(', ');
        setError(errorMessages);
      } else {
        setError("An error occurred. Please try again.");
      }
    });
  };

  return (
    <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header" id="appContent">
      <div className="app-main">
        <Sidebar />
        <div className="app-main-outer">
          <div className="app-main-inner">
            <div className="page-title-actions px-3 d-flex">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="#">Dashboard</a></li>
                  <li className="breadcrumb-item"><a href="#">Instructor</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Create</li>
                </ol>
              </nav>
            </div>
            <div className="row" id="deleteTableItem">
              <div className="col-md-12">
                <div className="main-card card d-flex h-100 flex-column">
                  <div className="card-body">
                    <h5 className="card-title py-2">Create New User</h5>
                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-4">
                          <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input 
                              name="userName"
                              value={userName}
                              onChange={(e) => setUserName(e.target.value)}
                              required 
                              className="form-control"
                              placeholder="Enter user name"
                            />
                          </div>
                        </div>

                        <div className="col-4">
                          <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input 
                              type="email" 
                              name="email" 
                              value={email}
                              onChange={(e) => setEmail(e.target.value)} 
                              required 
                              className="form-control"
                              placeholder="Enter user email"
                            />
                          </div>
                        </div>

                        <div className="col-4">
                          <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input 
                              type="password" 
                              name="password" 
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              required
                              className="form-control"
                              placeholder="Enter user password"
                            />
                          </div>
                        </div>

                        <div className="col-4">
                          <div className="mb-3">
                            <label className="form-label">Confirm Password</label>
                            <input 
                              type="password" 
                              name="confirmPassword" 
                              value={confirmPassword}
                              onChange={(e) => setConfirmPassword(e.target.value)}
                              required
                              className="form-control"
                              placeholder="Confirm user password"
                            />
                          </div>
                        </div>

                        <div className="col-4">
                          <div className="mb-3">
                            <label className="form-label">Assign Role</label>
                            <select
                              name="role" 
                              value={role}
                              onChange={(e) => setRole(e.target.value)}
                              required
                              className="form-control"
                              style={{height: '43px'}}
                            >
                              <option value="">Select a role</option>
                              <option value="Admin">Admin</option>
                              <option value="Teacher">Teacher</option>
                              <option value="Student">Student</option>
                            </select>
                          </div>
                        </div>

                        <div className="col-12">
                          <button type="submit" className="btn bgBlue btn-dipBlue text-black">
                            {loading ? 'Creating...' : 'Create'}
                          </button>
                        </div>
                      </div>
                    </form>
                    {error && <div className="alert alert-danger mt-3">{error}</div>}
                    {toast && <div className="alert alert-success mt-3">User created successfully!</div>}
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

export default CreateUser;
