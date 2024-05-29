import React, { useState } from 'react'

import { useDispatch } from 'react-redux'

import Newsletter from './News'
import Navbar from './Navbar'
import Footer from './Footer'
export default function Contact() {
    var dispatch = useDispatch()
    var [show, setshow] = useState(false)
    var [data, setdata] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })
    function getData(e) {
        var name = e.target.name
        var value = e.target.value
        setdata((old) => {
            return {
                ...old,
                [name]: value
            }
        })
    }
    function postData(e) {
        e.preventDefault()
        var item = {
            name: data.name,
            email: data.email,
            subject: data.subject,
            message: data.message,
            status: "Active",
            time: new Date()
        }
    
        setshow(true)
        setdata({
            name: "",
            email: "",
            subject: "",
            message: ""
        })
    }
  return (
    <>
    <Navbar/>
    {/* <!-- Hero Start --> */}
    <div className="container-fluid pt-5 bg-primary hero-header">
        <div className="container pt-5">
            <div className="row g-5 pt-5">
                <div className="col-lg-6 align-self-center text-center text-lg-start mb-lg-5">
                    <h1 className="display-4 text-white mb-4 animated slideInRight">Contact Us</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center justify-content-lg-start mb-0">
                            <li className="breadcrumb-item"><a className="text-white" href="*">Home</a></li>
                            <li className="breadcrumb-item text-white active" aria-current="page">Contact Us</li>
                        </ol>
                    </nav>
                </div>
                <div className="col-lg-6 align-self-end text-center text-lg-end">
                    <img className="img-fluid" src="assets/img/hero-img.png" alt="*" style={{maxHeight: "300px"}}/>
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


    {/* <!-- Contact Start --> */}
    <div className="container-fluid py-5">
        <div className="container py-5">
            <div className="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style={{maxWidth: "500px"}}>
                <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">Contact Us</div>
                <h1 className="mb-4">If You Have Any Query, Please Contact Us</h1>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-7">
                {
                                show ? <div class="alert alert-success text-center alert-dismissible fade show" role="alert">
                                    Thanks to Share Your Query With US!!! Our Team Will Contact You Soon!!!
                                </div> : ""
                            }
                     <div className="wow fadeIn" data-wow-delay="0.3s">
                        <form onSubmit={postData}>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="text" className="form-control" id="name" name='name' value={data.name} onChange={getData} placeholder="Your Name"/>
                                        <label for="name">Your Name</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="email" className="form-control" id="email" name='email' value={data.email} onChange={getData} placeholder="Your Email"/>
                                        <label for="email">Your Email</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <input type="text" className="form-control" id="subject" name='subject' value={data.subject} onChange={getData} placeholder="Subject"/>
                                        <label for="subject">Subject</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <textarea className="form-control" name='message' value={data.message} onChange={getData} placeholder="Leave a message here" id="message" style={{height: "150px"}}></textarea>
                                        <label for="message">Message</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Contact End --> */}
        

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
