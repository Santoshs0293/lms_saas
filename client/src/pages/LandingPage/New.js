import React from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function New() {
  return (
    <div>
           <div className="container-fluid bg-dark px-5 d-none d-lg-block">
        <div className="row gx-0">
            <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
                <div className="d-inline-flex align-items-center" style={{height: '45px'}}>
                    <small className="me-3 text-light"><i className="fa fa-map-marker-alt me-2"></i>123 Street, New York, USA</small>
                    <small className="me-3 text-light"><i className="fa fa-phone-alt me-2"></i>+012 345 6789</small>
                    <small className="text-light"><i className="fa fa-envelope-open me-2"></i>info@example.com</small>
                </div>
            </div>
            <div className="col-lg-4 text-center text-lg-end">
                <div className="d-inline-flex align-items-center" style={{height: '45px'}}>
                    <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i className="fab fa-twitter fw-normal"></i></a>
                    <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i className="fab fa-facebook-f fw-normal"></i></a>
                    <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i className="fab fa-linkedin-in fw-normal"></i></a>
                    <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i className="fab fa-instagram fw-normal"></i></a>
                    <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle" href=""><i className="fab fa-youtube fw-normal"></i></a>
                </div>
            </div>
        </div>
    </div>

    <div className="container-fluid position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
            <a href="index.html" className="navbar-brand p-0">
                <h1 className="m-0"><i className="fa fa-user-tie me-2"></i>Startup</h1>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="fa fa-bars"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto py-0">
                    <a href="index.html" className="nav-item nav-link active">Home</a>
                    <a href="about.html" className="nav-item nav-link">About</a>
                    <a href="service.html" className="nav-item nav-link">Services</a>
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Blog</a>
                        <div className="dropdown-menu m-0">
                            <a href="blog.html" className="dropdown-item">Blog Grid</a>
                            <a href="detail.html" className="dropdown-item">Blog Detail</a>
                        </div>
                    </div>
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                        <div className="dropdown-menu m-0">
                            <a href="price.html" className="dropdown-item">Pricing Plan</a>
                            <a href="feature.html" className="dropdown-item">Our features</a>
                            <a href="team.html" className="dropdown-item">Team Members</a>
                            <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                            <a href="quote.html" className="dropdown-item">Free Quote</a>
                        </div>
                    </div>
                    <a href="contact.html" className="nav-item nav-link">Contact</a>
                </div>
                <butaton type="button" className="btn text-primary ms-3" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fa fa-search"></i></butaton>
                <a href="https://htmlcodex.com/startup-company-website-template" className="btn btn-primary py-2 px-4 ms-3">Download Pro Version</a>
            </div>
        </nav>

        <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="w-100" src="assets/img/carousel-2.jpg" alt="Image"/>
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3" style={{maxWidth: '900px'}}>
                            <h5 className="text-white text-uppercase mb-3 animated slideInDown">Creative & Innovative</h5>
                            <h1 className="display-1 text-white mb-md-4 animated zoomIn">Creative & Innovative Digital Solution</h1>
                            <a href="quote.html" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Free Quote</a>
                            <a href="" className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">Contact Us</a>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="w-100" src="assets/img/carousel-1.jpg" alt="Image"/>
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3" style={{maxWidth: '900px'}}>
                            <h5 className="text-white text-uppercase mb-3 animated slideInDown">Creative & Innovative</h5>
                            <h1 className="display-1 text-white mb-md-4 animated zoomIn">Creative & Innovative Digital Solution</h1>
                            <a href="quote.html" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Free Quote</a>
                            <a href="" className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>

    <div className="modal fade" id="searchModal" tabindex="-1">
        <div className="modal-dialog modal-fullscreen">
            <div className="modal-content" style={{background: 'rgba(9, 30, 62, .7)'}}>
                <div className="modal-header border-0">
                    <button type="button" className="btn bg-white btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body d-flex align-items-center justify-content-center">
                    <div className="input-group" style={{maxWidth: '600px'}}>
                        <input type="text" className="form-control bg-transparent border-primary p-3" placeholder="Type search keyword"/>
                        <button className="btn btn-primary px-4"><i className="bi bi-search"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="container-fluid facts py-5 pt-lg-0">
        <div className="container py-5 pt-lg-0">
            <div className="row gx-0">
                <div className="col-lg-4 wow zoomIn" data-wow-delay="0.1s">
                    <div className="bg-primary shadow d-flex align-items-center justify-content-center p-4" style={{height: '150px'}}>
                        <div className="bg-white d-flex align-items-center justify-content-center rounded mb-2" style={{width: '60px', height: '60px'}}>
                            <i className="fa fa-users text-primary"></i>
                        </div>
                        <div className="ps-4">
                            <h5 className="text-white mb-0">Happy Clients</h5>
                            <h1 className="text-white mb-0" data-toggle="counter-up">12345</h1>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 wow zoomIn" data-wow-delay="0.3s">
                    <div className="bg-light shadow d-flex align-items-center justify-content-center p-4" style={{height: '150px'}}>
                        <div className="bg-primary d-flex align-items-center justify-content-center rounded mb-2" style={{width: '60px', height: '60px'}}>
                            <i className="fa fa-check text-white"></i>
                        </div>
                        <div className="ps-4">
                            <h5 className="text-primary mb-0">Projects Done</h5>
                            <h1 className="mb-0" data-toggle="counter-up">12345</h1>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 wow zoomIn" data-wow-delay="0.6s">
                    <div className="bg-primary shadow d-flex align-items-center justify-content-center p-4" style={{height: '150px'}}>
                        <div className="bg-white d-flex align-items-center justify-content-center rounded mb-2" style={{width: '60px', height: '60px'}}>
                            <i className="fa fa-award text-primary"></i>
                        </div>
                        <div className="ps-4">
                            <h5 className="text-white mb-0">Win Awards</h5>
                            <h1 className="text-white mb-0" data-toggle="counter-up">12345</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-7">
                    <div className="section-title position-relative pb-3 mb-5">
                        <h5 className="fw-bold text-primary text-uppercase">About Us</h5>
                        <h1 className="mb-0">The Best IT Solution With 10 Years of Experience</h1>
                    </div>
                    <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet</p>
                    <div className="row g-0 mb-3">
                        <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                            <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>Award Winning</h5>
                            <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>Professional Staff</h5>
                        </div>
                        <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                            <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>24/7 Support</h5>
                            <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>Fair Prices</h5>
                        </div>
                    </div>
                    <div className="d-flex align-items-center mb-4 wow fadeIn" data-wow-delay="0.6s">
                        <div className="bg-primary d-flex align-items-center justify-content-center rounded" style={{width: '60px', height: '60px'}}>
                            <i className="fa fa-phone-alt text-white"></i>
                        </div>
                        <div className="ps-4">
                            <h5 className="mb-2">Call to ask any question</h5>
                            <h4 className="text-primary mb-0">+012 345 6789</h4>
                        </div>
                    </div>
                    <a href="quote.html" className="btn btn-primary py-3 px-5 mt-3 wow zoomIn" data-wow-delay="0.9s">Request A Quote</a>
                </div>
                <div className="col-lg-5" style={{minHeight: '500px'}}>
                    <div className="position-relative h-100">
                        <img className="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.9s" src="assets/img/about.jpg" style={{objectFit: 'cover'}}/>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-7">
                    <div className="section-title position-relative pb-3 mb-5">
                        <h5 className="fw-bold text-primary text-uppercase">About Us</h5>
                        <h1 className="mb-0">The Best IT Solution With 10 Years of Experience</h1>
                    </div>
                    <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet</p>
                    <div className="row g-0 mb-3">
                        <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                            <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>Award Winning</h5>
                            <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>Professional Staff</h5>
                        </div>
                        <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                            <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>24/7 Support</h5>
                            <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>Fair Prices</h5>
                        </div>
                    </div>
                    <div className="d-flex align-items-center mb-4 wow fadeIn" data-wow-delay="0.6s">
                        <div className="bg-primary d-flex align-items-center justify-content-center rounded" style={{width: '60px', height: '60px'}}>
                            <i className="fa fa-phone-alt text-white"></i>
                        </div>
                        <div className="ps-4">
                            <h5 className="mb-2">Call to ask any question</h5>
                            <h4 className="text-primary mb-0">+012 345 6789</h4>
                        </div>
                    </div>
                    <a href="quote.html" className="btn btn-primary py-3 px-5 mt-3 wow zoomIn" data-wow-delay="0.9s">Request A Quote</a>
                </div>
                <div className="col-lg-5" style={{minHeight: '500px'}}>
                    <div className="position-relative h-100">
                        <img className="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.9s" src="assets/img/about.jpg" style={{objectFit: 'cover'}}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxWidth: '600px'}}>
                <h5 className="fw-bold text-primary text-uppercase">Why Choose Us</h5>
                <h1 className="mb-0">We Are Here to Grow Your Business Exponentially</h1>
            </div>
            <div className="row g-5">
                <div className="col-lg-4">
                    <div className="row g-5">
                        <div className="col-12 wow zoomIn" data-wow-delay="0.2s">
                            <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                                <i className="fa fa-cubes text-white"></i>
                            </div>
                            <h4>Best In Industry</h4>
                            <p className="mb-0">Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor</p>
                        </div>
                        <div className="col-12 wow zoomIn" data-wow-delay="0.6s">
                            <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                                <i className="fa fa-award text-white"></i>
                            </div>
                            <h4>Award Winning</h4>
                            <p className="mb-0">Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4  wow zoomIn" data-wow-delay="0.9s" style={{minHeight: '350px'}}>
                    <div className="position-relative h-100">
                        <img className="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.1s" src="img/feature.jpg" style={{objectFit: 'cover'}}/>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="row g-5">
                        <div className="col-12 wow zoomIn" data-wow-delay="0.4s">
                            <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                                <i className="fa fa-users-cog text-white"></i>
                            </div>
                            <h4>Professional Staff</h4>
                            <p className="mb-0">Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor</p>
                        </div>
                        <div className="col-12 wow zoomIn" data-wow-delay="0.8s">
                            <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                                <i className="fa fa-phone-alt text-white"></i>
                            </div>
                            <h4>24/7 Support</h4>
                            <p className="mb-0">Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxWidth: '600px'}}>
                <h5 className="fw-bold text-primary text-uppercase">Our Services</h5>
                <h1 className="mb-0">Custom IT Solutions for Your Successful Business</h1>
            </div>
            <div className="row g-5">
                <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
                    <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="service-icon">
                            <i className="fa fa-shield-alt text-white"></i>
                        </div>
                        <h4 className="mb-3">Cyber Security</h4>
                        <p className="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
                        <a className="btn btn-lg btn-primary rounded" href="">
                            <i className="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                    <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="service-icon">
                            <i className="fa fa-chart-pie text-white"></i>
                        </div>
                        <h4 className="mb-3">Data Analytics</h4>
                        <p className="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
                        <a className="btn btn-lg btn-primary rounded" href="">
                            <i className="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
                    <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="service-icon">
                            <i className="fa fa-code text-white"></i>
                        </div>
                        <h4 className="mb-3">Web Development</h4>
                        <p className="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
                        <a className="btn btn-lg btn-primary rounded" href="">
                            <i className="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
                    <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="service-icon">
                            <i className="fab fa-android text-white"></i>
                        </div>
                        <h4 className="mb-3">Apps Development</h4>
                        <p className="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
                        <a className="btn btn-lg btn-primary rounded" href="">
                            <i className="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                    <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="service-icon">
                            <i className="fa fa-search text-white"></i>
                        </div>
                        <h4 className="mb-3">SEO Optimization</h4>
                        <p className="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
                        <a className="btn btn-lg btn-primary rounded" href="">
                            <i className="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
                    <div className="position-relative bg-primary rounded h-100 d-flex flex-column align-items-center justify-content-center text-center p-5">
                        <h3 className="text-white mb-3">Call Us For Quote</h3>
                        <p className="text-white mb-3">Clita ipsum magna kasd rebum at ipsum amet dolor justo dolor est magna stet eirmod</p>
                        <h2 className="text-white mb-0">+012 345 6789</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
  
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxWidth: '600px'}}>
                <h5 className="fw-bold text-primary text-uppercase">Pricing Plans</h5>
                <h1 className="mb-0">We are Offering Competitive Prices for Our Clients</h1>
            </div>
            <div className="row g-0">
                <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
                    <div className="bg-light rounded">
                        <div className="border-bottom py-4 px-5 mb-4">
                            <h4 className="text-primary mb-1">Basic Plan</h4>
                            <small className="text-uppercase">For Small Size Business</small>
                        </div>
                        <div className="p-5 pt-0">
                            <h1 className="display-5 mb-3">
                                <small className="align-top" style={{fontSize: '22px', lineHeight:'45px'}}>$</small>49.00<small
                                    className="align-bottom" style={{fontSize: '22px', lineHeight:'40px'}}>/ Month</small>
                            </h1>
                            <div className="d-flex justify-content-between mb-3"><span>HTML5 & CSS3</span><i className="fa fa-check text-primary pt-1"></i></div>
                            <div className="d-flex justify-content-between mb-3"><span>Bootstrap v5</span><i className="fa fa-check text-primary pt-1"></i></div>
                            <div className="d-flex justify-content-between mb-3"><span>Responsive Layout</span><i className="fa fa-times text-danger pt-1"></i></div>
                            <div className="d-flex justify-content-between mb-2"><span>Cross-browser Support</span><i className="fa fa-times text-danger pt-1"></i></div>
                            <a href="" className="btn btn-primary py-2 px-4 mt-4">Order Now</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
                    <div className="bg-white rounded shadow position-relative" style={{zIndex: 1}}>
                        <div className="border-bottom py-4 px-5 mb-4">
                            <h4 className="text-primary mb-1">Standard Plan</h4>
                            <small className="text-uppercase">For Medium Size Business</small>
                        </div>
                        <div className="p-5 pt-0">
                            <h1 className="display-5 mb-3">
                                <small className="align-top" style={{fontSize: '22px', lineHeight:'40px'}}>$</small>99.00<small
                                    className="align-bottom" style={{fontSize: '22px', lineHeight:'40px'}}>/ Month</small>
                            </h1>
                            <div className="d-flex justify-content-between mb-3"><span>HTML5 & CSS3</span><i className="fa fa-check text-primary pt-1"></i></div>
                            <div className="d-flex justify-content-between mb-3"><span>Bootstrap v5</span><i className="fa fa-check text-primary pt-1"></i></div>
                            <div className="d-flex justify-content-between mb-3"><span>Responsive Layout</span><i className="fa fa-check text-primary pt-1"></i></div>
                            <div className="d-flex justify-content-between mb-2"><span>Cross-browser Support</span><i className="fa fa-times text-danger pt-1"></i></div>
                            <a href="" className="btn btn-primary py-2 px-4 mt-4">Order Now</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
                    <div className="bg-light rounded">
                        <div className="border-bottom py-4 px-5 mb-4">
                            <h4 className="text-primary mb-1">Advanced Plan</h4>
                            <small className="text-uppercase">For Large Size Business</small>
                        </div>
                        <div className="p-5 pt-0">
                            <h1 className="display-5 mb-3">
                                <small className="align-top" style={{fontSize: '22px', lineHeight:'45px'}}>$</small>149.00<small
                                    className="align-bottom" style={{fontSize: '22px', lineHeight:'40px'}}>/ Month</small>
                            </h1>
                            <div className="d-flex justify-content-between mb-3"><span>HTML5 & CSS3</span><i className="fa fa-check text-primary pt-1"></i></div>
                            <div className="d-flex justify-content-between mb-3"><span>Bootstrap v5</span><i className="fa fa-check text-primary pt-1"></i></div>
                            <div className="d-flex justify-content-between mb-3"><span>Responsive Layout</span><i className="fa fa-check text-primary pt-1"></i></div>
                            <div className="d-flex justify-content-between mb-2"><span>Cross-browser Support</span><i className="fa fa-check text-primary pt-1"></i></div>
                            <a href="" className="btn btn-primary py-2 px-4 mt-4">Order Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-7">
                    <div className="section-title position-relative pb-3 mb-5">
                        <h5 className="fw-bold text-primary text-uppercase">Request A Quote</h5>
                        <h1 className="mb-0">Need A Free Quote? Please Feel Free to Contact Us</h1>
                    </div>
                    <div className="row gx-3">
                        <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                            <h5 className="mb-4"><i className="fa fa-reply text-primary me-3"></i>Reply within 24 hours</h5>
                        </div>
                        <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                            <h5 className="mb-4"><i className="fa fa-phone-alt text-primary me-3"></i>24 hrs telephone support</h5>
                        </div>
                    </div>
                    <p className="mb-4">Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua. Eos vero eos vero ea et dolore eirmod et. Dolores diam duo invidunt lorem. Elitr ut dolores magna sit. Sea dolore sanctus sed et. Takimata takimata sanctus sed.</p>
                    <div className="d-flex align-items-center mt-2 wow zoomIn" data-wow-delay="0.6s">
                        <div className="bg-primary d-flex align-items-center justify-content-center rounded" style={{width: '60px', height: '60px'}}>
                            <i className="fa fa-phone-alt text-white"></i>
                        </div>
                        <div className="ps-4">
                            <h5 className="mb-2">Call to ask any question</h5>
                            <h4 className="text-primary mb-0">+012 345 6789</h4>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="bg-primary rounded h-100 d-flex align-items-center p-5 wow zoomIn" data-wow-delay="0.9s">
                        <form>
                            <div className="row g-3">
                                <div className="col-xl-12">
                                    <input type="text" className="form-control bg-light border-0" placeholder="Your Name" style={{height: '55px'}}/>
                                </div>
                                <div className="col-12">
                                    <input type="email" className="form-control bg-light border-0" placeholder="Your Email" style={{height: '55px'}}/>
                                </div>
                                <div className="col-12">
                                    <select className="form-select bg-light border-0" style={{height: '55px'}}>
                                        <option selected>Select A Service</option>
                                        <option value="1">Service 1</option>
                                        <option value="2">Service 2</option>
                                        <option value="3">Service 3</option>
                                    </select>
                                </div>
                                <div className="col-12">
                                    <textarea className="form-control bg-light border-0" rows="3" placeholder="Message"></textarea>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-dark w-100 py-3" type="submit">Request A Quote</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="section-title text-center position-relative pb-3 mb-4 mx-auto" style={{maxWidth: '600px'}}>
                <h5 className="fw-bold text-primary text-uppercase">Testimonial</h5>
                <h1 className="mb-0">What Our Clients Say About Our Digital Services</h1>
            </div>
            <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.6s">
                <div className="testimonial-item bg-light my-4">
                    <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                        <img className="img-fluid rounded" src="assets/img/testimonial-1.jpg" style={{width: '60px', height: '60px'}} />
                        <div className="ps-4">
                            <h4 className="text-primary mb-1">Client Name</h4>
                            <small className="text-uppercase">Profession</small>
                        </div>
                    </div>
                    <div className="pt-4 pb-5 px-5">
                        Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
                    </div>
                </div>
                <div className="testimonial-item bg-light my-4">
                    <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                        <img className="img-fluid rounded" src="assets/img/testimonial-2.jpg" style={{width: '60px', height: '60px'}} />
                        <div className="ps-4">
                            <h4 className="text-primary mb-1">Client Name</h4>
                            <small className="text-uppercase">Profession</small>
                        </div>
                    </div>
                    <div className="pt-4 pb-5 px-5">
                        Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
                    </div>
                </div>
                <div className="testimonial-item bg-light my-4">
                    <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                        <img className="img-fluid rounded" src="assets/img/testimonial-3.jpg" style={{width: '60px', height: '60px'}} />
                        <div className="ps-4">
                            <h4 className="text-primary mb-1">Client Name</h4>
                            <small className="text-uppercase">Profession</small>
                        </div>
                    </div>
                    <div className="pt-4 pb-5 px-5">
                        Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
                    </div>
                </div>
                <div className="testimonial-item bg-light my-4">
                    <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                        <img className="img-fluid rounded" src="assets/img/testimonial-4.jpg" style={{width: '60px', height: '60px'}} />
                        <div className="ps-4">
                            <h4 className="text-primary mb-1">Client Name</h4>
                            <small className="text-uppercase">Profession</small>
                        </div>
                    </div>
                    <div className="pt-4 pb-5 px-5">
                        Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
                    </div>
                </div>
            </div>
        </div>
    </div>
   
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxWidth: '600px'}}>
                <h5 className="fw-bold text-primary text-uppercase">Team Members</h5>
                <h1 className="mb-0">Professional Stuffs Ready to Help Your Business</h1>
            </div>
            <div className="row g-5">
                <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
                    <div className="team-item bg-light rounded overflow-hidden">
                        <div className="team-img position-relative overflow-hidden">
                            <img className="img-fluid w-100" src="assets/img/team-1.jpg" alt=""/>
                            <div className="team-social">
                                <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-twitter fw-normal"></i></a>
                                <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-facebook-f fw-normal"></i></a>
                                <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-instagram fw-normal"></i></a>
                                <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-linkedin-in fw-normal"></i></a>
                            </div>
                        </div>
                        <div className="text-center py-4">
                            <h4 className="text-primary">Full Name</h4>
                            <p className="text-uppercase m-0">Designation</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
                    <div className="team-item bg-light rounded overflow-hidden">
                        <div className="team-img position-relative overflow-hidden">
                            <img className="img-fluid w-100" src="assets/img/team-2.jpg" alt=""/>
                            <div className="team-social">
                                <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-twitter fw-normal"></i></a>
                                <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-facebook-f fw-normal"></i></a>
                                <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-instagram fw-normal"></i></a>
                                <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-linkedin-in fw-normal"></i></a>
                            </div>
                        </div>
                        <div className="text-center py-4">
                            <h4 className="text-primary">Full Name</h4>
                            <p className="text-uppercase m-0">Designation</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
                    <div className="team-item bg-light rounded overflow-hidden">
                        <div className="team-img position-relative overflow-hidden">
                            <img className="img-fluid w-100" src="assets/img/team-3.jpg" alt=""/>
                            <div className="team-social">
                                <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-twitter fw-normal"></i></a>
                                <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-facebook-f fw-normal"></i></a>
                                <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-instagram fw-normal"></i></a>
                                <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-linkedin-in fw-normal"></i></a>
                            </div>
                        </div>
                        <div className="text-center py-4">
                            <h4 className="text-primary">Full Name</h4>
                            <p className="text-uppercase m-0">Designation</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxWidth: '600px'}}>
                <h5 className="fw-bold text-primary text-uppercase">Latest Blog</h5>
                <h1 className="mb-0">Read The Latest Articles from Our Blog Post</h1>
            </div>
            <div className="row g-5">
                <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
                    <div className="blog-item bg-light rounded overflow-hidden">
                        <div className="blog-img position-relative overflow-hidden">
                            <img className="img-fluid" src="assets/img/blog-1.jpg" alt=""/>
                            <a className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" href="">Web Design</a>
                        </div>
                        <div className="p-4">
                            <div className="d-flex mb-3">
                                <small className="me-3"><i className="far fa-user text-primary me-2"></i>John Doe</small>
                                <small><i className="far fa-calendar-alt text-primary me-2"></i>01 Jan, 2045</small>
                            </div>
                            <h4 className="mb-3">How to build a website</h4>
                            <p>Dolor et eos labore stet justo sed est sed sed sed dolor stet amet</p>
                            <a className="text-uppercase" href="">Read More <i className="bi bi-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
                    <div className="blog-item bg-light rounded overflow-hidden">
                        <div className="blog-img position-relative overflow-hidden">
                            <img className="img-fluid" src="assets/img/blog-2.jpg" alt=""/>
                            <a className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" href="">Web Design</a>
                        </div>
                        <div className="p-4">
                            <div className="d-flex mb-3">
                                <small className="me-3"><i className="far fa-user text-primary me-2"></i>John Doe</small>
                                <small><i className="far fa-calendar-alt text-primary me-2"></i>01 Jan, 2045</small>
                            </div>
                            <h4 className="mb-3">How to build a website</h4>
                            <p>Dolor et eos labore stet justo sed est sed sed sed dolor stet amet</p>
                            <a className="text-uppercase" href="">Read More <i className="bi bi-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
                    <div className="blog-item bg-light rounded overflow-hidden">
                        <div className="blog-img position-relative overflow-hidden">
                            <img className="img-fluid" src="assets/img/blog-3.jpg" alt=""/>
                            <a className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" href="">Web Design</a>
                        </div>
                        <div className="p-4">
                            <div className="d-flex mb-3">
                                <small className="me-3"><i className="far fa-user text-primary me-2"></i>John Doe</small>
                                <small><i className="far fa-calendar-alt text-primary me-2"></i>01 Jan, 2045</small>
                            </div>
                            <h4 className="mb-3">How to build a website</h4>
                            <p>Dolor et eos labore stet justo sed est sed sed sed dolor stet amet</p>
                            <a className="text-uppercase" href="">Read More <i className="bi bi-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>



    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5 mb-5">
            <div className="bg-white">
                <div className="owl-carousel vendor-carousel">
                    <img src="assets/img/vendor-1.jpg" alt=""/>
                    <img src="assets/img/vendor-2.jpg" alt=""/>
                    <img src="assets/img/vendor-3.jpg" alt=""/>
                    <img src="assets/img/vendor-4.jpg" alt=""/>
                    <img src="assets/img/vendor-5.jpg" alt=""/>
                    <img src="assets/img/vendor-6.jpg" alt=""/>
                    <img src="assets/img/vendor-7.jpg" alt=""/>
                    <img src="assets/img/vendor-8.jpg" alt=""/>
                    <img src="assets/img/vendor-9.jpg" alt=""/>
                </div>
            </div>
        </div>
    </div>
    <div className="container-fluid bg-dark text-light mt-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
            <div className="row gx-5">
                <div className="col-lg-4 col-md-6 footer-about">
                    <div className="d-flex flex-column align-items-center justify-content-center text-center h-100 bg-primary p-4">
                        <a href="index.html" className="navbar-brand">
                            <h1 className="m-0 text-white"><i className="fa fa-user-tie me-2"></i>Startup</h1>
                        </a>
                        <p className="mt-3 mb-4">Lorem diam sit erat dolor elitr et, diam lorem justo amet clita stet eos sit. Elitr dolor duo lorem, elitr clita ipsum sea. Diam amet erat lorem stet eos. Diam amet et kasd eos duo.</p>
                        <form action="">
                            <div className="input-group">
                                <input type="text" className="form-control border-white p-3" placeholder="Your Email"/>
                                <button className="btn btn-dark">Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-lg-8 col-md-6">
                    <div className="row gx-5">
                        <div className="col-lg-4 col-md-12 pt-5 mb-5">
                            <div className="section-title section-title-sm position-relative pb-3 mb-4">
                                <h3 className="text-light mb-0">Get In Touch</h3>
                            </div>
                            <div className="d-flex mb-2">
                                <i className="bi bi-geo-alt text-primary me-2"></i>
                                <p className="mb-0">123 Street, New York, USA</p>
                            </div>
                            <div className="d-flex mb-2">
                                <i className="bi bi-envelope-open text-primary me-2"></i>
                                <p className="mb-0">info@example.com</p>
                            </div>
                            <div className="d-flex mb-2">
                                <i className="bi bi-telephone text-primary me-2"></i>
                                <p className="mb-0">+012 345 67890</p>
                            </div>
                            <div className="d-flex mt-4">
                                <a className="btn btn-primary btn-square me-2" href="#"><i className="fab fa-twitter fw-normal"></i></a>
                                <a className="btn btn-primary btn-square me-2" href="#"><i className="fab fa-facebook-f fw-normal"></i></a>
                                <a className="btn btn-primary btn-square me-2" href="#"><i className="fab fa-linkedin-in fw-normal"></i></a>
                                <a className="btn btn-primary btn-square" href="#"><i className="fab fa-instagram fw-normal"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                            <div className="section-title section-title-sm position-relative pb-3 mb-4">
                                <h3 className="text-light mb-0">Quick Links</h3>
                            </div>
                            <div className="link-animated d-flex flex-column justify-content-start">
                                <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Home</a>
                                <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>About Us</a>
                                <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Our Services</a>
                                <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Meet The Team</a>
                                <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Latest Blog</a>
                                <a className="text-light" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Contact Us</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                            <div className="section-title section-title-sm position-relative pb-3 mb-4">
                                <h3 className="text-light mb-0">Popular Links</h3>
                            </div>
                            <div className="link-animated d-flex flex-column justify-content-start">
                                <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Home</a>
                                <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>About Us</a>
                                <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Our Services</a>
                                <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Meet The Team</a>
                                <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Latest Blog</a>
                                <a className="text-light" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Contact Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="container-fluid text-white" style={{background: '#061429'}}>
        <div className="container text-center">
            <div className="row justify-content-end">
                <div className="col-lg-8 col-md-6">
                    <div className="d-flex align-items-center justify-content-center" style={{height: '75px'}}>
                        <p className="mb-0">&copy; <a className="text-white border-bottom" href="#">Your Site Name</a>. All Rights Reserved. </p>
						
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
