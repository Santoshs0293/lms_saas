import React from 'react'
import Newsletter from './News'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Team() {
  return (
    <>
    <Navbar/>
    {/* <!-- Hero Start --> */}
    <div className="container-fluid pt-5 bg-primary hero-header">
        <div className="container pt-5">
            <div className="row g-5 pt-5">
                <div className="col-lg-6 align-self-center text-center text-lg-start mb-lg-5">
                    <h1 className="display-4 text-white mb-4 animated slideInRight">Our Team</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center justify-content-lg-start mb-0">
                            <li className="breadcrumb-item"><a className="text-white" href="*">Home</a></li>
                            <li className="breadcrumb-item"><a className="text-white" href="*">Pages</a></li>
                            <li className="breadcrumb-item text-white active" aria-current="page">Our Team</li>
                        </ol>
                    </nav>
                </div>
                <div className="col-lg-6 align-self-end text-center text-lg-end">
                    <img className="img-fluid" src="assets/img/hero-img.png" alt="" style={{maxHeight: "300px"}}/>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Hero End --> */}


    {/* <!-- Full Screen Search Start --> */}
    <div className="modal fade" id="searchModal" tabIndex="-1">
        <div className="modal-dialog modal-fullscreen">
            <div className="modal-content" style={{background: "rgba(20, 24, 62, 0.7)"}}>
                <div className="modal-header border-0">
                    <button type="button" className="btn btn-square bg-white btn-close" data-bs-dismiss="modal"
                        aria-label="Close"></button>
                </div>
                <div className="modal-body d-flex align-items-center justify-content-center">
                    <div className="input-group" style={{maxWidth: "600px"}}>
                        <input type="text" className="form-control bg-transparent border-light p-3"
                            placeholder="Type search keyword"/>
                        <button className="btn btn-light px-4"><i className="bi bi-search"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Full Screen Search End --> */}


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
                                                <img className="img-fluid rounded-circle p-4" src="assets/img/santosh.jpeg" alt="*" />
                                                <h5 className="mb-0">Santosh Kumar</h5>
                                                <small>9 years experience in Renewal energy, VLSI design and AI</small>
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
                                                <img className="img-fluid rounded-circle p-4" src="assets/img/Kuldeepji.png" alt="*" />
                                                <h5 className="mb-0">Mayank Verma</h5>
                                                <small>15+ years of experience in Telecommunication</small>
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
                                                <small>6 years experience in Hardware Design, Data Science and AI</small>
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


    {/* <!-- Newsletter Start --> */}
    {/* <div className="container-fluid bg-primary newsletter py-5">
        <div className="container">
            <div className="row g-5 align-items-center">
                <div className="col-md-5 ps-lg-0 pt-5 pt-md-0 text-start wow fadeIn" data-wow-delay="0.3s">
                    <img className="img-fluid" src="assets/img/newsletter.png" alt="*"/>
                </div>
                <div className="col-md-7 py-5 newsletter-text wow fadeIn" data-wow-delay="0.5s">
                    <div className="btn btn-sm border rounded-pill text-white px-3 mb-3">Newsletter</div>
                    <h1 className="text-white mb-4">Let's subscribe the newsletter</h1>
                    <div className="position-relative w-100 mt-3 mb-2">
                        <input className="form-control border-0 rounded-pill w-100 ps-4 pe-5" type="text"
                            placeholder="Enter Your Email" style={{height: "48px"}}/>
                        <button type="button" className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"><i
                                className="fa fa-paper-plane text-primary fs-4"></i></button>
                    </div>
                    <small className="text-white-50">Diam sed sed dolor stet amet eirmod</small>
                </div>
            </div>
        </div>
    </div> */}
    <Newsletter/>
    <Footer/>
    {/* <!-- Newsletter End --> */}
    </>
  )
}
