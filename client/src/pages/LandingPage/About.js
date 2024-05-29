import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Newsletter from './News'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Home() {
    var [frontends, setFrontends] = useState([])
   

    return (
        <>
        <Navbar/>
            {
                frontends.map((item, index) => {
                    console.log(item.des);
                    return <div key={index} className="container-fluid pt-5 bg-primary hero-header  mb-5" style={{ background: `url(/assets/img/${item.pic})`, backgroundSize: "cover" }}>
                        <div className="container pt-5">
                            <div className="row g-5 pt-5">
                                <div className="col-lg-6 align-self-center text-center text-lg-start mb-lg-5">
                                    <div className="btn btn-sm border rounded-pill text-white px-3 mb-3 animated slideInRight">AI.Tech</div>
                                    <h1 className="display-4 text-white mb-4 animated slideInRight">{item.des}</h1>
                                    <p className="text-white mb-4 animated slideInRight">Enhance Your Vision, Transform Your Life</p>
                                    {/* <a href="*" className="btn btn-light py-sm-3 px-sm-5 rounded-pill me-3 animated slideInRight">Read More</a> */}
                                    <a href="*" className="btn btn-outline-light py-sm-3 px-sm-5 rounded-pill animated slideInRight">Contact Us</a>
                                </div>
                                <div className="col-lg-6 align-self-end text-center text-lg-end">
                                    <img className="img-fluid" src="assets/img/hero-img.png" alt="*" />
                                </div>
                            </div>
                        </div>
                    </div>
                })
            }
            {/* <!-- Hero End --> */}
            <div className="container-fluid pt-5 bg-primary hero-header">
        <div className="container pt-5">
            <div className="row g-5 pt-5">
                <div className="col-lg-6 align-self-center text-center text-lg-start mb-lg-5">
                    <h1 className="display-4 text-white mb-4 animated slideInRight">About Us</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center justify-content-lg-start mb-0">
                            <li className="breadcrumb-item"><a className="text-white" href="*">Home</a></li>
                            <li className="breadcrumb-item text-white active" aria-current="page">About Us</li>
                        </ol>
                    </nav>
                </div>
                <div className="col-lg-6 align-self-end text-center text-lg-end">
                    <img className="img-fluid" src="assets/img/hero-img.png" alt="*" style={{maxHeight: "300px"}}/>
                </div>
            </div>
        </div>
    </div>

            {/* <!-- Full Screen Search Start --> */}
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
            {/* <!-- Full Screen Search End --> */}

            {/* <!-- Team Start --> */}
            <div className="container-fluid bg-light py-5">
                <div className="container py-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
                            <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">Our Core Team</div>
                            <h1 className="mb-4">Meet Our Experienced Team Members</h1>
                            {/* <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam
                                amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus
                                clita duo justo et tempor eirmod magna dolore erat amet</p>
                            <a className="btn btn-primary rounded-pill px-4" href="*">Read More</a> */}
                        </div>
                        <div className="col-lg-7">
                            <div className="row g-4">
                                <div className="col-md-6">
                                    <div className="row g-4">
                                        <div className="col-12 wow fadeIn" data-wow-delay="0.1s">
                                            <div className="team-item bg-white text-center rounded p-4 pt-0">
                                                 <img className="img-fluid rounded-circle p-4" src="assets/img/Kuldeepji.png" alt="*" />
                                                 <h5 className="mb-0">Mayank Verma</h5>
                                                <small>19+ years of experience in Telecommunication</small>
                                                {/* <div className="d-flex justify-content-center mt-3">
                                                    <a className="btn btn-square btn-primary m-1" href="*"><i
                                                        className="fab fa-facebook-f"></i></a>
                                                    <a className="btn btn-square btn-primary m-1" href="*"><i
                                                        className="fab fa-twitter"></i></a>
                                                    <a className="btn btn-square btn-primary m-1" href="*"><i
                                                        className="fab fa-instagram"></i></a>
                                                    <a className="btn btn-square btn-primary m-1" href="*"><i
                                                        className="fab fa-linkedin-in"></i></a>
                                                </div> */}
                                                
                                            </div>
                                        </div>
                                        <div className="col-12 wow fadeIn" data-wow-delay="0.5s">
                                            <div className="team-item bg-white text-center rounded p-4 pt-0">
                                                
                                                <img className="img-fluid rounded-circle p-4" src="assets/img/santosh.jpeg" alt="*" />
                                                <h5 className="mb-0">Santosh Kumar Singh</h5>
                                                <small>9+ years experience in Renewal energy, VLSI design and AI</small>
                                                {/* <div className="d-flex justify-content-center mt-3">
                                                    <a className="btn btn-square btn-primary m-1" href="*"><i
                                                        className="fab fa-facebook-f"></i></a>
                                                    <a className="btn btn-square btn-primary m-1" href="*"><i
                                                        className="fab fa-twitter"></i></a>
                                                    <a className="btn btn-square btn-primary m-1" href="*"><i
                                                        className="fab fa-instagram"></i></a>
                                                    <a className="btn btn-square btn-primary m-1" href="*"><i
                                                        className="fab fa-linkedin-in"></i></a>
                                                </div> */}
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 pt-md-4">
                                    <div className="row g-4">
                                        <div className="col-12 wow fadeIn" data-wow-delay="0.3s">
                                            <div className="team-item bg-white text-center rounded p-4 pt-0">
                                                <img className="img-fluid rounded-circle p-4" src="assets/img/Kuldeepji.png" alt="*" />
                                                <h5 className="mb-0">Sandeep Malhotra</h5>
                                                <small>6+ years experience in Hardware Design, Data Science and AI</small>
                                                {/* <div className="d-flex justify-content-center mt-3">
                                                    <a className="btn btn-square btn-primary m-1" href="*"><i
                                                        className="fab fa-facebook-f"></i></a>
                                                    <a className="btn btn-square btn-primary m-1" href="*"><i
                                                        className="fab fa-twitter"></i></a>
                                                    <a className="btn btn-square btn-primary m-1" href="*"><i
                                                        className="fab fa-instagram"></i></a>
                                                    <a className="btn btn-square btn-primary m-1" href="*"><i
                                                        className="fab fa-linkedin-in"></i></a>
                                                </div> */}
                                            </div>
                                        </div>
                                        <div className="col-12 wow fadeIn" data-wow-delay="0.7s">
                                            <div className="team-item bg-white text-center rounded p-4 pt-0">
                                                <img className="img-fluid rounded-circle p-4" src="assets/img/Kuldeepji.png" alt="*" />
                                                <h5 className="mb-0">Kuldeep Singh</h5>
                                                <small>10+ years experience in Data Engineering</small>
                                                {/* <div className="d-flex justify-content-center mt-3">
                                                    <a className="btn btn-square btn-primary m-1" href="*"><i
                                                        className="fab fa-facebook-f"></i></a>
                                                    <a className="btn btn-square btn-primary m-1" href="*"><i
                                                        className="fab fa-twitter"></i></a>
                                                    <a className="btn btn-square btn-primary m-1" href="*"><i
                                                        className="fab fa-instagram"></i></a>
                                                    <a className="btn btn-square btn-primary m-1" href="*"><i
                                                        className="fab fa-linkedin-in"></i></a>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Team End --> */}

            {/* <!-- About Start --> */}
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                            <div className="about-img">
                                <img className="img-fluid" src="assets/img/about-img.jpg" alt='*' />
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                            <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">About Us</div>
                            <h1 className="mb-4">Leading tech firm pioneering innovative solutions in diverse domains.</h1>
                            <p className="mb-4">At Advisions R&D, we are a leading tech and research company dedicated to providing innovative services and solutions in various domains.</p>
                            <p className="mb-4">We specialize in.</p>
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <ul>
                                        <li>Generative AI Development</li>
                                        <li>Tailored ChatGPT Development & Integration</li>
                                        <li>Advanced Large Language Models (LLMs) Development</li>
                                        <li>Custom Web Application Development</li>
                                        <li>Innovative Mobile App Development</li>
                                    </ul>
                                </div>
                                <div className="col-sm-6">
                                    <ul>
                                        <li>Secure Enterprise Software Development</li>
                                        <li>MVP Development & Strategic Consulting</li>
                                        <li>School Management Software</li>
                                        <li>STEM Programs & ATL Lab Setup</li>
                                        <li>Corporate Trainings</li>
                                        <li>Robotics Process Automation</li>
                                        <li>Digital Twins</li>
                                    </ul>
                                </div>
                                <div className="col-sm-6">
                                    <h6 className="mb-3"><i className="fa fa-check text-primary me-2"></i>Data Security</h6>
                                    <h6 className="mb-0"><i className="fa fa-check text-primary me-2"></i>Professional Developers</h6>
                                </div>
                                <div className="col-sm-6">
                                    <h6 className="mb-3"><i className="fa fa-check text-primary me-2"></i>24/7 Support</h6>
                                    <h6 className="mb-0"><i className="fa fa-check text-primary me-2"></i>Fair Prices</h6>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mt-4">
                                {/* <a className="btn btn-primary rounded-pill px-4 me-3" href="*">Read More</a> */}
                                <a className="btn btn-outline-primary btn-square me-3" href="mailto:advisions.ard@gmail.com" target="_blank" rel="noreferrer">
                                    <i className="fab fa-google"></i></a>
                                <a className="btn btn-outline-primary btn-square me-3" href="*"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-outline-primary btn-square me-3" href="*"><i className="fab fa-instagram"></i></a>
                                <a className="btn btn-outline-primary btn-square" href="*"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- About End --> */}


            {/* <!-- Feature Start --> */}
            <div className="container-fluid bg-primary feature pt-5">
                <div className="container pt-5">
                    <div className="row g-5">
                        <div className="col-lg-6 align-self-center mb-md-5 pb-md-5 wow fadeIn" data-wow-delay="0.3s">
                            <div className="btn btn-sm border rounded-pill text-white px-3 mb-3">Why Choose Us</div>
                            <h1 className="text-white mb-4">We're Best in AI Industry with 5 Years of Experience</h1>
                            <p className="text-light mb-4">Choose us for AI tech and software: Expertise, innovation, proven track record, scalable solutions, customer-centric approach, robust support, cost-effectiveness, security, collaborative partnership.
                            </p>
                            <div className="d-flex align-items-center text-white mb-3">
                                <div className="btn-sm-square bg-white text-primary rounded-circle me-3">
                                    <i className="fa fa-check"></i>
                                </div>
                                <span>We boast a team of industry-leading professionals</span>
                            </div>
                            <div className="d-flex align-items-center text-white mb-3">
                                <div className="btn-sm-square bg-white text-primary rounded-circle me-3">
                                    <i className="fa fa-check"></i>
                                </div>
                                <span>Timely, precise solutions delivered comprehensively with efficacy</span>
                            </div>
                            <div className="d-flex align-items-center text-white mb-3">
                                <div className="btn-sm-square bg-white text-primary rounded-circle me-3">
                                    <i className="fa fa-check"></i>
                                </div>
                                <span>Innovative product development with maintenance and updates</span>
                            </div>
                            <div className="row g-4 pt-3">
                                <div className="col-sm-6">
                                    <div className="d-flex rounded p-3" style={{ background: "rgba(256, 256, 256, 0.1)" }}>
                                        <i className="fa fa-users fa-3x text-white"></i>
                                        <div className="ms-3">
                                            <h2 className="text-white mb-0" data-toggle="counter-up">73</h2>
                                            <p className="text-white mb-0">Happy Clients</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="d-flex rounded p-3" style={{ background: "rgba(256, 256, 256, 0.1)" }}>
                                        <i className="fa fa-check fa-3x text-white"></i>
                                        <div className="ms-3">
                                            <h2 className="text-white mb-0" data-toggle="counter-up">28</h2>
                                            <p className="text-white mb-0">Project Complete</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 align-self-end text-center text-md-end wow fadeIn" data-wow-delay="0.5s">
                            <img className="img-fluid" src="assets/img/feature.png" alt="*" />
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Feature End --> */}

            {/* <!-- Service Start --> */}
            <div className="container-fluid bg-light mt-5 py-5">
                <div className="container py-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
                            <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">Our Services</div>
                            <h1 className="mb-4">Our Innovative Solutions for Your Business</h1>
                            <p className="mb-4">Elevate your business with personalized solutions crafted to precisely align with your requirements, maximizing your potential for success.</p>
                            {/* <a className="btn btn-primary rounded-pill px-4" href="*">Read More</a> */}
                        </div>
                        <div className="col-lg-7">
                            <div className="row g-4">
                                <div className="col-md-6">
                                    <div className="row g-4">
                                        <div className="col-12 wow fadeIn" data-wow-delay="0.1s">
                                            <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                                                <div className="service-icon btn-square">
                                                    <i className="fa fa-brain fa-2x"></i>
                                                </div>
                                                <h5 className="mb-3">Advanced Generative AI Development</h5>
                                                <p>Train your dataset to generate original outputs such as images, text, or music using state-of-the-art generative AI techniques.</p>
                                                {/* <a className="btn px-3 mt-auto mx-auto" href="*">Read More</a> */}
                                            </div>
                                        </div>
                                        <div className="col-12 wow fadeIn" data-wow-delay="0.5s">
                                            <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                                                <div className="service-icon btn-square">
                                                    <i className="fa fa-graduation-cap fa-2x"></i>
                                                </div>
                                                <h5 className="mb-3">Corporate Trainings</h5>
                                                <p>Boost team expertise with customized Corporate Training Solutions for colleges and startups. Enhance learning, drive innovation, and thrive in today's competitive industry.</p>
                                                {/* <a className="btn px-3 mt-auto mx-auto" href="*">Read More</a> */}
                                            </div>
                                        </div>
                                        <div className="col-12 wow fadeIn" data-wow-delay="0.3s">
                                            <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                                                <div className="service-icon btn-square">
                                                    <i className="fa fa-code fa-2x"></i>
                                                </div>
                                                <h5 className="mb-3">Robotics Process Automation</h5>
                                                <p>Enhance business efficiency with RPA, employing software robots to automate repetitive tasks, streamlining processes with advanced automation technology for increased productivity.</p>
                                                {/* <a className="btn px-3 mt-auto mx-auto" href="*">Read More</a> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 pt-md-4">
                                    <div className="row g-4">
                                        <div className="col-12 wow fadeIn" data-wow-delay="0.3s">
                                            <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                                                <div className="service-icon btn-square">
                                                    <i className="fa fa-code fa-2x"></i>
                                                </div>
                                                <h5 className="mb-3">Custom Web Application Development</h5>
                                                <p>Leverage our tailor-made services to address your specific industry needs, cater to your target audience, and enhance operational efficiency.</p>
                                                {/* <a className="btn px-3 mt-auto mx-auto" href="*">Read More</a> */}
                                            </div>
                                        </div>
                                        <div className="col-12 wow fadeIn" data-wow-delay="0.7s">
                                            <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                                                <div className="service-icon btn-square">
                                                    <i className="fa fa-brain fa-2x"></i>
                                                </div>
                                                <h5 className="mb-3">STEM Programs & ATL Lab Setup</h5>
                                                <p>Transform education with Revolutionizing Education, featuring STEM Programs and AI-Robotics Labs, empowering students for future tech challenges.</p>
                                                {/* <a className="btn px-3 mt-auto mx-auto" href="*">Read More</a> */}
                                            </div>
                                        </div>

                                        <div className="col-12 wow fadeIn" data-wow-delay="0.3s">
                                            <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                                                <div className="service-icon btn-square">
                                                    <i className="fa fa-code fa-2x"></i>
                                                </div>
                                                <h5 className="mb-3">Digital Twins</h5>
                                                <p>Utilize digital twin technology to create virtual models of assets and processes, facilitating real-time monitoring and simulation for operational optimization, reduced downtime, and innovation.</p>
                                                {/* <a className="btn px-3 mt-auto mx-auto" href="*">Read More</a> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Service End --> */}


            {/* <!-- Case Start --> */}
            {/* <div className="container-fluid bg-light py-5">
                <div className="container py-5">
                    <div className="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style={{ maxWidth: "500px" }}>
                        <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">Case Study</div>
                        <h1 className="mb-4">Explore Our Recent Case Studies</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                            <div className="case-item position-relative overflow-hidden rounded mb-2">
                                <img className="img-fluid" src="assets/img/project-1.jpg" alt="*" />
                                <a className="case-overlay text-decoration-none" href="*">
                                    <small>Robotic Automation</small>
                                    <h5 className="lh-base text-white mb-3">Lorem elitr magna stet eirmod labore amet labore clita
                                    </h5>
                                    <span className="btn btn-square btn-primary"><i className="fa fa-arrow-right"></i></span>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                            <div className="case-item position-relative overflow-hidden rounded mb-2">
                                <img className="img-fluid" src="assets/img/project-2.jpg" alt="*" />
                                <a className="case-overlay text-decoration-none" href="*">
                                    <small>Machine learning</small>
                                    <h5 className="lh-base text-white mb-3">Lorem elitr magna stet eirmod labore amet labore clita
                                    </h5>
                                    <span className="btn btn-square btn-primary"><i className="fa fa-arrow-right"></i></span>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 wow fadeIn" data-wow-delay="0.7s">
                            <div className="case-item position-relative overflow-hidden rounded mb-2">
                                <img className="img-fluid" src="assets/img/project-3.jpg" alt="*" />
                                <a className="case-overlay text-decoration-none" href="*">
                                    <small>Predictive Analysis</small>
                                    <h5 className="lh-base text-white mb-3">Lorem elitr magna stet eirmod labore amet labore clita
                                    </h5>
                                    <span className="btn btn-square btn-primary"><i className="fa fa-arrow-right"></i></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <!-- Case End --> */}


            {/* <!-- FAQs Start --> */}
            {/* <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style={{ maxWidth: "500px" }}>
                        <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">Popular FAQs</div>
                        <h1 className="mb-4">Frequently Asked Questions</h1>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="accordion" id="accordionFAQ1">
                                <div className="accordion-item wow fadeIn" data-wow-delay="0.1s">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                            How to build a website?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne"
                                        data-bs-parent="#accordionFAQ1">
                                        <div className="accordion-body">
                                            Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed sed magna et magna diam aliquyam amet dolore ipsum erat duo. Sit rebum magna duo labore no diam.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item wow fadeIn" data-wow-delay="0.2s">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            How long will it take to get a new website?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                        data-bs-parent="#accordionFAQ1">
                                        <div className="accordion-body">
                                            Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed sed magna et magna diam aliquyam amet dolore ipsum erat duo. Sit rebum magna duo labore no diam.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item wow fadeIn" data-wow-delay="0.3s">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Do you only create HTML websites?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                                        data-bs-parent="#accordionFAQ1">
                                        <div className="accordion-body">
                                            Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed sed magna et magna diam aliquyam amet dolore ipsum erat duo. Sit rebum magna duo labore no diam.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item wow fadeIn" data-wow-delay="0.4s">
                                    <h2 className="accordion-header" id="headingFour">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                            Will my website be mobile-friendly?
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                                        data-bs-parent="#accordionFAQ1">
                                        <div className="accordion-body">
                                            Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed sed magna et magna diam aliquyam amet dolore ipsum erat duo. Sit rebum magna duo labore no diam.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="accordion" id="accordionFAQ2">
                                <div className="accordion-item wow fadeIn" data-wow-delay="0.5s">
                                    <h2 className="accordion-header" id="headingFive">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                            Will you maintain my site for me?
                                        </button>
                                    </h2>
                                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive"
                                        data-bs-parent="#accordionFAQ2">
                                        <div className="accordion-body">
                                            As a leader in the software and AI domain, we prioritize ongoing support and maintenance to ensure your site operates seamlessly, meeting your evolving needs.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item wow fadeIn" data-wow-delay="0.6s">
                                    <h2 className="accordion-header" id="headingSix">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                            I’m on a strict budget. Do you have any low cost options?
                                        </button>
                                    </h2>
                                    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix"
                                        data-bs-parent="#accordionFAQ2">
                                        <div className="accordion-body">
                                            Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed sed magna et magna diam aliquyam amet dolore ipsum erat duo. Sit rebum magna duo labore no diam.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item wow fadeIn" data-wow-delay="0.7s">
                                    <h2 className="accordion-header" id="headingSeven">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                            Will you maintain my site for me?
                                        </button>
                                    </h2>
                                    <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven"
                                        data-bs-parent="#accordionFAQ2">
                                        <div className="accordion-body">
                                            Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed sed magna et magna diam aliquyam amet dolore ipsum erat duo. Sit rebum magna duo labore no diam.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item wow fadeIn" data-wow-delay="0.8s">
                                    <h2 className="accordion-header" id="headingEight">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                            I’m on a strict budget. Do you have any low cost options?
                                        </button>
                                    </h2>
                                    <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight"
                                        data-bs-parent="#accordionFAQ2">
                                        <div className="accordion-body">
                                            Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed sed magna et magna diam aliquyam amet dolore ipsum erat duo. Sit rebum magna duo labore no diam.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <!-- FAQs Start --> */}


            {/* <!-- Testimonial Start --> */}
            {/* <div className="container-xxl py-5">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
                            <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">Testimonial</div>
                            <h1 className="mb-4">What Say Our Clients!</h1>
                            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam
                                amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus
                                clita duo justo et tempor eirmod magna dolore erat amet</p>
                            // <a className="btn btn-primary rounded-pill px-4" href="*">Read More</a>
                        </div>
                        <div className="col-lg-7 wow fadeIn" data-wow-delay="0.5s">
                            <div className="owl-carousel testimonial-carousel border-start border-primary">
                                <div className="testimonial-item ps-5">
                                    <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                                    <p className="fs-4">Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet</p>
                                    <div className="d-flex align-items-center">
                                        <img className="img-fluid flex-shrink-0 rounded-circle" src="assets/img/testimonial-1.jpg"
                                            alt="*" style={{ width: "60px", height: "60px" }} />
                                        <div className="ps-3">
                                            <h5 className="mb-1">Client Name</h5>
                                            <span>Profession</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonial-item ps-5">
                                    <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                                    <p className="fs-4">Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet</p>
                                    <div className="d-flex align-items-center">
                                        <img className="img-fluid flex-shrink-0 rounded-circle" src="assets/img/testimonial-2.jpg"
                                            alt="*" style={{ width: "60px", height: "60px" }} />
                                        <div className="ps-3">
                                            <h5 className="mb-1">Client Name</h5>
                                            <span>Profession</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonial-item ps-5">
                                    <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                                    <p className="fs-4">Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet</p>
                                    <div className="d-flex align-items-center">
                                        <img className="img-fluid flex-shrink-0 rounded-circle" src="assets/img/testimonial-3.jpg"
                                            alt='*' style={{ width: "60px", height: "60px" }} />
                                        <div className="ps-3">
                                            <h5 className="mb-1">Client Name</h5>
                                            <span>Profession</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <!-- Testimonial End --> */}
            <Newsletter />
            <Footer/>
        </>
    )
}
