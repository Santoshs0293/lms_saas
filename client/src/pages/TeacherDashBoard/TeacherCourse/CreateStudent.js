import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Sidebar from '../SideBar';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const CreateUser = () => {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const userDataFromStorage = localStorage.getItem('user');
    if (userDataFromStorage) {
      try {
        const parsedData = JSON.parse(userDataFromStorage);
        setUserData(parsedData);
      } catch (error) {
        console.error('Failed to parse user data:', error);
      }
    }
  }, []);

  const userId = userData ? userData._id : null;

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false); // State for opening Snackbar
  const navigate = useNavigate();

  const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL });

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    axiosInstance.post("/auth/register", {
      userName,
      email,
      password,
      confirmPassword,
      teacherId: userId 
    })
    .then((response) => {
      setLoading(false);
      const result = response.data;
      console.log(result);
      if (result.errors) {
        setError(result.errors);
        setOpenSnackbar(false); // Close Snackbar if there was an error
      } else {
        setOpenSnackbar(true); // Open Snackbar if user is created successfully
        setError(null);
        // Optionally, you can reset the form fields here
        setUserName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      }
    })
    .catch((error) => {
      console.log(error);
      setLoading(false);
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
                    <form onSubmit={formSubmitHandler}>
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

                        <div className="col-12">
                          <button type="submit" className="btn bgBlue btn-dipBlue text-black">
                            {loading ? 'Creating...' : 'Create'}
                          </button>
                        </div>
                      </div>
                    </form>
                    {error && <div className="alert alert-danger mt-3">{error}</div>}
                    <Snackbar
                      open={openSnackbar}
                      autoHideDuration={3000}
                      onClose={handleSnackbarClose}
                      anchorOrigin={{ vertical: 'center', horizontal: 'center' }} // Centering Snackbar
                    >
                      <MuiAlert elevation={6} variant="filled" onClose={handleSnackbarClose} severity="success">
                        User created successfully!
                      </MuiAlert>
                    </Snackbar>
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
