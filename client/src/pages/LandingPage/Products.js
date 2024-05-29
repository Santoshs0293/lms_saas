import React from 'react'
import { Link } from 'react-router-dom'
import Newsletter from './News'
import Navbar from './Navbar'
import Footer from './Footer'

export const Products = () => {
  return (
    <div>
      <Navbar/>
      <>

    {/* <!-- Hero Start --> */}
    <div className="container-fluid pt-5 bg-primary hero-header">
                <div className="container pt-5">
                    <div className="row g-5 pt-5">
                        <div className="col-lg-6 align-self-center text-center text-lg-start mb-lg-5">
                            <h1 className="display-4 text-white mb-4 animated slideInRight">Our Products</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center justify-content-lg-start mb-0">
                                    <li className="breadcrumb-item"><a className="text-white" href="*">Home</a></li>
                                    <li className="breadcrumb-item text-white active" aria-current="page">Our Products</li>
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


            {/* <!-- Case Start --> */}
            <div className="container-fluid bg-light py-5">
                <div className="container py-5">
                    <div className="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style={{maxWidth: "500px"}}>
                        <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">Our Products</div>
                        <h1 className="mb-4">Explore Our Products</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                            <div className="case-item position-relative overflow-hidden rounded mb-2">
                                <img className="img-fluid" src="assets/img/SchoolErp.png" alt=""/>
                                    <Link className="case-overlay text-decoration-none" to="/course-page">
                                        <small>School ERP</small>
                                    
                                        <span className="btn btn-square btn-primary"><i className="fa fa-arrow-right"></i></span>
                                    </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                            <div className="case-item position-relative overflow-hidden rounded mb-2">
                                <img className="img-fluid" src="assets/img/lms.png" alt="*"/>
                                    <a className="case-overlay text-decoration-none" href="*">
                                        <small>Learning Management System (LMS)</small>
                                        <h5 className="lh-base text-white mb-3">
                                        </h5>
                                        <span className="btn btn-square btn-primary"><i className="fa fa-arrow-right"></i></span>
                                    </a>
                            </div>
                        </div>
                        <div className="col-lg-4 wow fadeIn" data-wow-delay="0.7s">
                            <div className="case-item position-relative overflow-hidden rounded mb-2">
                                <img className="img-fluid" src="assets/img/TextTranslator.png" alt="*" />
                                    <a className="case-overlay text-decoration-none" href="*">
                                        <small>Text to Text Translator (Offline/Online)</small>
                                        <h5 className="lh-base text-white mb-3">
                                        </h5>
                                        <span className="btn btn-square btn-primary"><i className="fa fa-arrow-right"></i></span>
                                    </a>
                            </div>
                        </div>
                        <div className="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                            <div className="case-item position-relative overflow-hidden rounded mb-2">
                                <img className="img-fluid" src="assets/img/OCR.png" alt=""/>
                                    <a className="case-overlay text-decoration-none" href="*">
                                        <small>OCR (Optical Character Recognition)</small>
                                        <h5 className="lh-base text-white mb-3">
                                        </h5>
                                        <span className="btn btn-square btn-primary"><i className="fa fa-arrow-right"></i></span>
                                    </a>
                            </div>
                        </div>
                        <div className="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                            <div className="case-item position-relative overflow-hidden rounded mb-2">
                                <img className="img-fluid" src="assets/img/RegenerativeAi.png" alt="*"/>
                                    <a className="case-overlay text-decoration-none" href="*">
                                        <small>Regenerative AI (Based on Indian Education) LLM</small>
                                        <h5 className="lh-base text-white mb-3">
                                        </h5>
                                        <span className="btn btn-square btn-primary"><i className="fa fa-arrow-right"></i></span>
                                    </a>
                            </div>
                        </div>
                        <div className="col-lg-4 wow fadeIn" data-wow-delay="0.7s">
                            <div className="case-item position-relative overflow-hidden rounded mb-2">
                                <img className="img-fluid" src="assets/img/Hospital.png" alt="*"/>
                                    <a className="case-overlay text-decoration-none" href="*">
                                        <small>Hospital ERP</small>
                                        <h5 className="lh-base text-white mb-3">
                                        </h5>
                                        <span className="btn btn-square btn-primary"><i className="fa fa-arrow-right"></i></span>
                                    </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Case End --> */}


            {/* <!-- FAQs Start --> */}
            {/* <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style={{maxWidth: "500px"}}>
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
                                            Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed sed magna et magna diam aliquyam amet dolore ipsum erat duo. Sit rebum magna duo labore no diam.
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
                            <small className="text-white-50">Stay Ahead with Our Insights: Your Gateway to the Future of Software and AI.</small>
                        </div>
                    </div>
                </div>
            </div> */}
            <Newsletter/>
            <Footer/>
        </>
      <Footer/>
    </div>
  )
}
