
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
const News = () => {
    var [email, setemail] = useState("")
    var [show, setshow] = useState(false)
    var [msg, setmsg] = useState(false)
    var newsletter = useSelector((state) => state.NewsletterStateData)
    var dispatch = useDispatch()
    function getData(e) {
        setemail(e.target.value)
    }
    function postData(e) {
        e.preventDefault()
        var d = newsletter.find((item) => item.email === email)
        if (d) {
            setshow(true)
            setmsg("Your Email Id is Already Subscribed!!!!")
        }
        else {
    
            setshow(true)
            setmsg("Thanks to Subscibe our Newsletter Service!!!")
        }
    }
    useEffect(() => {
   
    }, [dispatch])
  return (
    <div className="container-fluid bg-dark newsletter py-5">
    <div className="container">
        <div className="row g-5 align-items-center">
            <div className="col-md-5 ps-lg-0 pt-5 pt-md-0 text-start wow fadeIn" data-wow-delay="0.3s">
                {/* <img className="img-fluid" src="assets/img/newsletter.png" alt="*" /> */}
            </div>
            <div className="col-md-7 py-5 newsletter-text wow fadeIn" data-wow-delay="0.5s">
                <div className="btn btn-sm border rounded-pill text-white px-3 mb-3">Newsletter</div>
                <h1 className="text-white mb-4">Let's subscribe the newsletter</h1>
                {
                    show ? <div className="alert alert-success text-center alert-dismissible fade show" role="alert">
                        {msg}
                        <button type="submit" className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"><i
                            className="fa fa-paper-plane text-primary fs-4"></i></button>
                    </div> : ""
                }
                <div className="position-relative w-100 mt-3 mb-2">
                    <form onSubmit={postData}>
                        <input className="form-control border-0 rounded-pill w-100 ps-4 pe-5" type="text"
                            onChange={getData} placeholder="Enter Your Email" style={{ height: "48px" }} />
                        <button type="button" className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"><i
                            className="fa fa-paper-plane text-primary fs-4"></i></button>
                    </form>
                </div>
                <small className="text-white-50">Stay Ahead with Our Insights: Your Gateway to the Future of Software and AI.</small>
            </div>
        </div>
    </div>
</div>
  )
}

export default News
