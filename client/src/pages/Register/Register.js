
import React, { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import Alert_Comp from "../../components/Alert/Alert_Comp";
import Spinner_comp from "../../components/Spinner/Spinner_comp";
import Toast_Comp from "../../components/Toast/Toast_Comp";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "../LandingPage/Navbar";
import Footer from "../LandingPage/Footer";
import axios from 'axios';

const Register = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(false);
  const history = useNavigate();
  const axiosInstance = axios.create({baseURL : process.env.REACT_APP_API_URL})

  const {user} = useSelector((state) => state.auth);



  const formSubmitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    axiosInstance.post("/auth/register", {
      userName,
      email,
      password,
      confirmPassword,
    })
    .then((response) => {
      setLoading(false);
      const result = response.data;
      console.log(result);
      if (result.errors) {
        setError(result.errors);
      } else {
        setToast(true);
        setError(null);
        setTimeout(() => {
          history("/login");
        }, 3000);
      }
    })
    .catch((error) => {
      console.log(error);
    });
  };
  
  useEffect(() => {
    if(user && user.role=="Student")
    {
      history('/')
    }
    else if(user && user.role==="Admin")
    {
      history('/admin-dashboard')
    }
    else if(user && user.role==="Teacher")
    {
      history('/teacher-dashboard')
    }

  }, [user])

  return (
    <div>
      <Navbar/>

            <div className="modal fade" id="searchModal" tabIndex="-1">
                <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content" style={{ background: "rgba(20, 24, 62, 0.7)" }}>
                        <div className="modal-header border-0">
                            <button type="button" className="btn btn-square bg-white btn-close" data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>
                        <div className="modal-body d-flex align-items-center justify-content-center">
                            <div className="input-group" style={{ maxWidth: "600px" }}>
                                <input type="text" className="form-control bg-transparent border-light p-3"
                                    placeholder="Type search keyword" />
                                <button className="btn btn-light px-4"><i className="bi bi-search"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
            <Toast_Comp
          setToast={setToast}
          renderToast={toast}
          msg="Registration Success Please Login"
        />

      <div className="container-fluid h-custom py-5">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            className="img-fluid" alt="*" />
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 shadow">
                        <form onSubmit={formSubmitHandler}>
                            <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start m-2">
                                {/* <p className="lead fw-normal mb-0 me-3">Sign up with</p>
                                <button type="button" className="btn btn-primary btn-floating mx-1">
                                    <i className="fab fa-facebook-f"></i>
                                </button>

                                <button type="button" className="btn btn-primary btn-floating mx-1">
                                    <i className="fab fa-twitter"></i>
                                </button>

                                <button type="button" className="btn btn-primary btn-floating mx-1">
                                    <i className="fab fa-google"></i>
                                </button>

                                <button type="button" className="btn btn-primary btn-floating mx-1">
                                    <i className="fab fa-linkedin-in"></i>
                                </button> */}
                            </div>

                            {/* <div className="divider d-flex align-items-center my-4">
                                <p className="text-center fw-bold mx-3 mb-0">Or</p>
                            </div> */}

                            {/* <!-- Full Name input --> */}
                            <div className="form-outline mb-4">
                                <input type="text" id="Name" className="form-control form-control-lg"
                                 onChange={(e) => setUserName(e.target.value)}
                               
                                 placeholder="Enter Your Username" />
                                <label className="form-label" htmlFor="Name">Name</label>
                            </div>

 

                            {/* Email Input */}
                            <div className="form-outline mb-4">
                                <input type="email" id="Email" className="form-control form-control-lg"
                                 onChange={(e) => setEmail(e.target.value)}
                            
                                 placeholder="Enter email" />
                                <label className="form-label" htmlFor="Email">Email</label>
                            </div>


                            {/* <!-- Password input --> */}
                            <div className="form-outline mb-3">
                                <input type="password" id="Password" className="form-control form-control-lg"
                                   onChange={(e) => setConfirmPassword(e.target.value)}
                              
                                   placeholder="Confirm Password" />
                                <label className="form-label" htmlFor="Password">Password</label>
                            </div>

                            <div className="form-outline mb-3">
                                <input type="password" id="Confirm-password" className="form-control form-control-lg"
                                 onChange={(e) => setPassword(e.target.value)}
                                
                                 placeholder="Password" />
                                <label className="form-label" htmlFor="Confirm-password">Confirm Password</label>
                            </div>

                            <div className="d-flex justify-content-between align-items-center">
                                {/* <!-- Checkbox --> */}
                                <div className="form-check mb-0">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="Terms&Policy" />
                                    <label className="form-check-label" htmlFor="Terms&Policy">
                                        Terms & Policy
                                    </label>
                                </div>
                            </div>

                            <div className="text-center text-lg-start mt-4 pt-2">
                                <button type="submit" className="btn btn-primary btn-lg"
                                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}>Signup</button>
                                <p className="small fw-bold mt-2 pt-1 mb-0"><Link to="/login"
                                    className="text-info">Already User? Login to Your Account</Link></p>
                            </div>
<p></p>
                        </form>
                    </div>
                </div>
            </div>
      <Footer/>
    </div>
  );
};

export default Register;
