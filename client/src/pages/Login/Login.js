import Styles from "./login.module.css";
import { Button, Container, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import Alert_Comp from "../../components/Alert/Alert_Comp";
import Spinner_comp from "../../components/Spinner/Spinner_comp";
import Toast_Comp from "../../components/Toast/Toast_Comp";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../LandingPage/Footer";
import Navbar from "../LandingPage/Navbar";
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(false);
  const history = useNavigate();
  const {user} = useSelector((state) => state.auth);
  //console.log(user);
  const axiosInstance = axios.create({baseURL : process.env.REACT_APP_API_URL})

  const dispatch = useDispatch();

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    axiosInstance.post("/auth/login", {
      email,
      password,
    })
    .then((response) => {
      setLoading(false);
      const result = response.data;
      // console.log(result);
      if (result.errors) {
        setError(result.errors);
      } else {
        setToast(true);
        setError(null);
        setTimeout(() => {
          dispatch({ type: "SET__USER", payload: result.userInfo });
          localStorage.setItem("auth_token", result.token);
          localStorage.setItem("user", JSON.stringify(result.userInfo));
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
          msg="Login Success"
        />
      <section >
                <div className="container-fluid h-custom py-5">
                    <div className="row d-flex justify-content-center align-items-center h-100 ">
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                className="img-fluid" alt="*" />
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 shadow">
                            <form onSubmit={formSubmitHandler}>
                                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start ">
                                    {/* <p className="lead fw-normal mb-0 me-3">Sign in with</p>
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

                                {/* <!-- Email input --> */}
                                <div className="form-outline mb-4">
                                    <input  id="form3Example3" className="form-control form-control-lg"
                                          value={email}
                                          onChange={(e) => setEmail(e.target.value)}
                                          type="email"
                                          placeholder="Enter email" />
                                    <label className="form-label" htmlFor="form3Example3">Username</label>
                                </div>

                                {/* <!-- Password input --> */}
                                <div className="form-outline mb-3">
                                    <input id="form3Example4" className="form-control form-control-lg"
                                       value={password}
                                       onChange={(e) => setPassword(e.target.value)}
                                       type="password"
                                       placeholder="Password" />
                                    <label className="form-label" htmlFor="form3Example4">Password</label>
                                </div>

                                <div className="d-flex justify-content-between align-items-center">
                                    {/* <!-- Checkbox --> */}
                                    <div className="form-check mb-0">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                        <label className="form-check-label" htmlFor="form2Example3">
                                            Remember me
                                        </label>
                                    </div>
                                    <Link to="/forgetpassword-1" className='text-body'>Forget Password</Link>
                                </div>

                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button type="submit" className="btn btn-primary btn-lg"
                                        style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}>Login</button>
                                    <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link to="/register"
                                        className="link-danger">Register</Link></p>
                                </div>
<p></p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>


            <Footer/>
    </div>
  );
};

export default Login;
