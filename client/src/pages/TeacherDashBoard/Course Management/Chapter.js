import React from 'react'
import Sidebar from '../SideBar'

const Chapter = () => {
  return (
    <div>
   <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header" id="appContent"> 
    <div className="app-main">
    <Sidebar/>
    <div className="app-main-outer">
        <div className="app-main-inner">
            <h3 className="mb-4 px-3">Select a course to view chapters</h3>
            <div className="row">
                                    <div className="col-4 mb-2">
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="http://admin.razinskills.com/storage/course/thumbnail/CFyeoG5tapK4yQWmsdk3rox6T888jBefrL6PXCmE.jpg" className="img-fluid w-100 rounded-start"
                                        alt="Professional Graphic Design" style={{objectFit: 'cover', height:'137px'}}/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <a title="Professional Graphic Design" href="https://admin.razinskills.com/course/edit/2">
                                            <h5 className="card-title">
                                                                                                    Professional Graphic Design
                                                                                            </h5>
                                        </a>
                                        <p className="card-text mb-3"><span className="pe-3"> <strong>Category:</strong>
                                                Graphic design</span>
                                            <span className="pe-3"><strong>Price:</strong>
                                                                                                    $20
                                                                                            </span>
                                        </p>
                                        <a href="https://admin.razinskills.com/chapter/list/2"
                                            className="btn btn-sm btn-primary bgBlue btn-dipBlue px-3">View
                                            Chapters</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                    <div className="col-4 mb-2">
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="http://admin.razinskills.com/storage/course/thumbnail/0a9yYqW8JQRxYBg1E1x7PXYd0M7NNitoKF7XERmZ.jpg" className="img-fluid w-100 rounded-start"
                                        alt="Front End Web Development" style={{objectFit: 'cover', height:'137px'}}/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <a title="Front End Web Development" href="https://admin.razinskills.com/course/edit/3">
                                            <h5 className="card-title">
                                                                                                    Front End Web Development
                                                                                            </h5>
                                        </a>
                                        <p className="card-text mb-3"><span className="pe-3"> <strong>Category:</strong>
                                                Professional Web Development Course</span>
                                            <span className="pe-3"><strong>Price:</strong>
                                                                                                    $60
                                                                                            </span>
                                        </p>
                                        <a href="https://admin.razinskills.com/chapter/list/3"
                                            className="btn btn-sm btn-primary bgBlue btn-dipBlue px-3">View
                                            Chapters</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                    <div className="col-4 mb-2">
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="http://admin.razinskills.com/storage/course/thumbnail/p61xws37zgQ4CjA9eo3C8YwWlTgTB465yD6e4vC2.png" className="img-fluid w-100 rounded-start"
                                        alt="SEO Digital Marketing" style={{objectFit: 'cover', height:'137px'}}/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <a title="SEO Digital Marketing" href="https://admin.razinskills.com/course/edit/4">
                                            <h5 className="card-title">
                                                                                                    SEO Digital Marketing
                                                                                            </h5>
                                        </a>
                                        <p className="card-text mb-3"><span className="pe-3"> <strong>Category:</strong>
                                                Digital Marketing</span>
                                            <span className="pe-3"><strong>Price:</strong>
                                                                                                    $20
                                                                                            </span>
                                        </p>
                                        <a href="https://admin.razinskills.com/chapter/list/4"
                                            className="btn btn-sm btn-primary bgBlue btn-dipBlue px-3">View
                                            Chapters</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                            </div>
            <div className="px-3 text-center"></div>
        </div>

    </div>
    </div>
    </div>
    </div>
  )
}

export default Chapter