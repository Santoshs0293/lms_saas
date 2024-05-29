import React, { useState, useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import News from './News';
import Navbar from './Navbar';
import Footer from './Footer';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {

    const [items, setItems] = useState([]);
    const axiosInstance = axios.create({baseURL : process.env.REACT_APP_API_URL})
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axiosInstance.get('/');
          setItems(response.data);
        } catch (error) {
          console.error('Failed to fetch items: ' + error.message);
        }
      };
  
      fetchData();
    }, []);
    return (
        <>
        <Navbar/>
     
        <div className="container-fluid pt-5 bg-primary hero-header position-relative" style={{ backgroundImage: `url(/assets/img/hero_1.jpg)`, backgroundSize: "cover", height: "100vh" }}>
  <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}></div>
  <div className="container pt-5 position-relative">
    <div className="row justify-content-center mb-4 pt-5" data-aos="fade-up" data-aos-delay="400">
      <div className="col-md-8 text-center text-white pt-5">
        <h1 className='pt-5 text-white'>We're dedicated to empowering your learning journey</h1>
        <p className="lead mb-5 h4 text-white">Whether you seek skill enhancement, <span>new explorations, career advancement, or learn a different skill</span></p>
        <p>Unlock your potential with our tailored courses designed to meet your unique learning goals.</p>
        <div>
          <a data-fancybox data-ratio="2" href="" className="btn btn-primary btn-md">Watch Video</a>
        </div>
        
      </div>
    </div>
  </div>
</div>



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



            {/* <!-- Feature Start --> */}
            <div className="container-fluid  pt-5">
                <div className="container pt-5">
                    <div className="row g-5">
                        <div className="col-lg-6 align-self-center mb-md-5 pb-md-5 wow fadeIn" data-wow-delay="0.3s">
                            <div className="btn btn-sm border rounded-pill  px-3 mb-3">Why Choose Us</div>
                            <h1 className=" mb-4">We're Best in AI Industry with 5 Years of Experience</h1>
                            <p className=" mb-4">Choose us for AI tech and software: Expertise, innovation, proven track record, scalable solutions, customer-centric approach, robust support, cost-effectiveness, security, collaborative partnership.
                            </p>
                            <div className="d-flex align-items-center  mb-3">
                                <div className="btn-sm-square bg-white text-primary rounded-circle me-3">
                                    <i className="fa fa-check"></i>
                                </div>
                                <span>We boast a team of industry-leading professionals</span>
                            </div>
                            <div className="d-flex align-items-center  mb-3">
                                <div className="btn-sm-square bg-white text-primary rounded-circle me-3">
                                    <i className="fa fa-check"></i>
                                </div>
                                <span>Timely, precise solutions delivered comprehensively with efficacy</span>
                            </div>
                            <div className="d-flex align-items-center  mb-3">
                                <div className="btn-sm-square bg-white text-primary rounded-circle me-3">
                                    <i className="fa fa-check"></i>
                                </div>
                                <span>Innovative product development with maintenance and updates</span>
                            </div>
                            <div className="row g-4 pt-3">
                                <div className="col-sm-6">
                                    <div className="d-flex rounded p-3" style={{ background: "rgba(256, 256, 256, 0.1)" }}>
                                        <i className="fa fa-users fa-3x "></i>
                                        <div className="ms-3">
                                            <h2 className=" mb-0" data-toggle="counter-up">73</h2>
                                            <p className=" mb-0">Happy Clients</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="d-flex rounded p-3" style={{ background: "rgba(256, 256, 256, 0.1)" }}>
                                        <i className="fa fa-check fa-3x "></i>
                                        <div className="ms-3">
                                            <h2 className=" mb-0" data-toggle="counter-up">28</h2>
                                            <p className=" mb-0">Project Complete</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 align-self-end text-center text-md-end wow fadeIn" data-wow-delay="0.5s">
  <img className="img-fluid" src="assets/img/Lmsnew.png" alt="*" />
</div>

                    </div>
                </div>
            </div>
            {/* <!-- Feature End --> */}

            {/* <!-- Service Start --> */}

            <a className=" py-5 d-block" style={{backgroundColor : "black", textDecoration : "none"}}>
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md10"
      ><h2 className="text-white">Let's Get Started</h2></div>
    </div>
  </div>  
</a>


            <section className="site-section mt-4" id="work-section">
  <div className="container mt-4">
    <div className="row mb-5 justify-content-center ">
      <div className="col-md-8 text-center">
        <h2 className="text-black h1 site-section-heading text-center">Our Popular Courses</h2>
        <p className="lead">Discover courses in mindfulness, productivity, time management, and other essential life skills to help you become the best version of yourself.</p>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-md-6 col-lg-4 mb-4">
        <div className="card h-100">
          <img src="assets/img/100.png" className="card-img-top img-fluid" alt="Image" style={{ height: '300px' }} />
          <div className="card-body">
            <h2 className="card-title h5">100 Days of Code Challenge: Master Web Development in 100 Days</h2>
            <hr className="my-3" />
            <p className="card-text">Learn the Fundamentals: Master HTML, CSS, and JavaScript, the building blocks of web development.</p>
            <p className="card-text">Explore Advanced Topics: Dive into frameworks and libraries like React.js, Node.js, and MongoDB to build full-stack web applications.</p>
         <p className='card-text'> Build Real-World Projects: Put your skills to the test by building a portfolio of projects, including responsive websites, web applications, and more.</p>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-4 mb-4">
        <div className="card h-100">
          <img src="assets/img/python.png" className="card-img-top img-fluid" alt="Image" style={{ height: '300px' }} />
          <div className="card-body">
            <h2 className="card-title h5">The Complete Python Course: From Beginner to Advanced</h2>
            <hr className="my-3" />
            <p className="card-text">Master the Basics: Learn Python syntax, data types, control structures, and functions.</p>
            <p className="card-text">Explore Advanced Topics: Dive into object-oriented programming, file handling, and working with databases.</p>
            <p className="card-text">Build Real-World Projects: Put your skills to the test by building practical projects, including web applications, data analysis tools, and more.</p>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-4 mb-4">
        <div className="card h-100">
          <img src="assets/img/react.png" className="card-img-top img-fluid" alt="Image" style={{ height: '300px' }} />
          <div className="card-body">
            <h2 className="card-title h5">Master React.js and Build Dynamic Web Applications</h2>
            <hr className="my-3" />
            <p className="card-text">Our comprehensive React.js course will teach you everything you need to know to build dynamic and interactive web applications.</p>
        <p className='card-text'>Explore Advanced Topics: Dive into React Router, Redux, Hooks, Context API, and other advanced React.js concepts.</p>
        <p className='card-text'>Understand React Ecosystem: Explore popular React.js libraries and tools like React Bootstrap, Material-UI, Axios, and Redux Toolkit.</p>
        
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-4 mb-4">
        <div className="card h-100">
          <img src="assets/img/webs.png" className="card-img-top img-fluid" alt="Image" style={{ height: '300px' }} />
          <div className="card-body">
            <h2 className="card-title h5">Creating Responsive Websites</h2>
            <hr className="my-3" />
            <p className="card-text">Master HTML5 and CSS3 techniques for building flexible layouts.</p>
            <p className="card-text">Learn how to use media queries to target different devices and screen sizes.</p>
            <p className="card-text">Discover the latest tools and frameworks for responsive web design, including Bootstrap and Flexbox.</p>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-4 mb-4">
        <div className="card h-100">
          <img src="assets/img/node.png" className="card-img-top img-fluid" alt="Image" style={{ height: '300px' }} />
          <div className="card-body">
            <h2 className="card-title h5">Master Node.js and Build Scalable Web Applications</h2>
            <hr className="my-3" />
            <p className="card-text">Gain a deep understanding of Node.js and its core modules.</p>
            <p className="card-text">Learn how to build server-side applications using Express.js, the most popular web application framework for Node.js.</p>
          <p className='card-text'>Explore asynchronous programming and understand how to work with callbacks, promises, and async/await.
Build RESTful APIs and integrate them with databases like MongoDB.</p>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-4 mb-4">
        <div className="card h-100">
          <img src="assets/img/mongo.png" className="card-img-top img-fluid" alt="Image" style={{ height: '300px' }} />
          <div className="card-body">
            <h2 className="card-title h5">Master MongoDB: The NoSQL Database for Modern Applications</h2>
            <hr className="my-3" />
            <p className="card-text">Gain a deep understanding of MongoDB's document-based data model and how it differs from traditional relational databases.</p>
            <p className="card-text">Learn how to perform CRUD operations (Create, Read, Update, Delete) using MongoDB's powerful query language.</p>
            <p className="card-text">Explore advanced MongoDB features such as indexing, aggregation, and replication.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>







           <News/>
           <Footer/>
            
        </>
    )
}

export default Home
