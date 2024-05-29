import React from 'react';
import Navbar from "./Navbar"
import styles from "./theme.css"
import NoticeToggle from '../CourseInfo/NoticeToggle/NoticeToggle';

import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
const CourseInfo = () => {
  
  return (
    <div>
		   <Helmet>
        <title>Advisions LMS</title>
        <meta name="description" content="Learning Management System" />
        <meta name="keywords" content="Advisions, LMS" />
      </Helmet>    
      <Navbar />

        <header>
		<section className="hero-section">
			<div className="hero-mask">

			<div className=" text-center py-5 container-fluid theme-bg-primary">
				<div className="single-col-max mx-auto">
					<div className="hero-heading-upper pt-3 mb-3">Discover tailored learning at its finest with ADVISIONS.</div>
					<h1 className="hero-heading mb-5">
						<span className="brand mb-4 d-block"><span className="text-highlight pr-2"></span><span className="name">MATHEMATICS</span>
            <span className="text-highlight pl-2"></span></span>
					    <span className="desc d-block">Explore our comprehensive course offerings designed to ignite curiosity and inspire learning.</span>
				    </h1>
					<div className="text-center mb-5">
						<a href="#section-pricing" className="btn btn-primary btn-lg scrollto">Start Learning Now</a>
					</div>
					
					<div className="hero-summary">
						<div className="row">
							<div className="item col-4">
								<div className="summary-desc mb-1"><i className="icon fas fa-video me-2"></i>Content</div>
								<h4 className="summary-heading">80+ <span className="desc">Videos</span></h4>
								
							</div>
							<div className="item col-4">
								<div className="summary-desc mb-1"><i className="icon fas fa-clock me-2"></i>Duration</div>
								<h4 className="summary-heading">72 <span className="desc">Hours</span></h4>
								
							</div>
							<div className="item col-4">
								<div className="summary-desc mb-1"><i className="icon fas fa-user-circle me-2"></i>Access</div>
								<h4 className="summary-heading">Lifetime</h4>
								
							</div>
						</div>
					</div>
				</div>
			</div>
      </div>
			
		</section>
	</header>

	<div className={styles}>
	<div className="sections-wrapper">

        
        <div className="section-blocks mb-5">
	        
		    <div id="section-overview" className="section-overview section mt-4 pt-md-4 pt-lg-5">
		        <div className="container  py-5">
			        <div className="col-9 mx-auto">
				        <h3 className="section-title mb-4">What Will You Learn</h3>
			            <p className="mb-4">Your course overview goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae posuere nibh, at posuere enim. Sed vulputate ante congue, euismod odio a, gravida neque. Maecenas volutpat risus dolor.</p>
			            <div className="text-center mb-3">
				            <ul className="column-list list-unstyled mx-auto d-inline-block">
								<li><i className="theme-check-icon fas fa-check me-2"></i>Course highlight lorem ipsum</li>
								<li><i className="theme-check-icon fas fa-check me-2"></i>Course highlight  lorem ipsum</li>
								<li><i className="theme-check-icon fas fa-check me-2"></i>Course highlight  lorem ipsum</li>
								<li><i className="theme-check-icon fas fa-check me-2"></i>Course highlight  lorem ipsum</li>
								<li><i className="theme-check-icon fas fa-check me-2"></i>Course highlight  lorem ipsum</li>
								<li><i className="theme-check-icon fas fa-check me-2"></i>Course highlight  lorem ipsum</li>
							</ul>
			            </div>
			            <div className="text-center mb-5">
				            <a className="btn btn-primary scrollto" href="#section-pricing">Join Course Now</a>
			            </div>
			            <div className="video-container">
				            <div className="ratio ratio-16x9">
			                    <iframe width="560" height="315" src="https://www.youtube.com/embed/qz0aGYrrlhU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				            </div>
			            </div>
			            
			        </div>
		        </div>
		    </div>
		    
		    <div id="section-content" className="section-content section">
		        <div className="container py-5">
			        <div className="col-9 mx-auto">
			            <h3 className="section-title mb-5">What's Included</h3>
			            
			            <div className="data-summary justify-content-center text-center">
				            <div className="row mb-5">
					            <div className="item col-6 col-lg-3 mb-3 mb-lg-0">
						            <div className="data">10+</div>
						            <div className="meta">Modules</div>
					            </div>
					            <div className="item col-6 col-lg-3 mb-3 mb-lg-0">
						            <div className="data">80+</div>
						            <div className="meta">Videos</div>
					            </div>
					            <div className="item col-6 col-lg-3 mb-3 mb-lg-0">
						            <div className="data">40+</div>
						            <div className="meta">Resources</div>
					            </div>
					            <div className="item col-6 col-lg-3 mb-3 mb-lg-0">
						            <div className="data">72</div>
						            <div className="meta">Hours</div>
					            </div>
				            </div>
			            </div>
			            
			            <h4 className="text-center mb-4">Course Modules</h4>
			            
			<NoticeToggle />
						<div className="text-center mt-5">
				            <a className="btn btn-primary scrollto" href="#section-pricing">Enrol Now</a>
			            </div>
			            
			            
			        </div>	            
		        </div>
		    </div>
		    
		    <div id="section-requirements" className="section-requirements section">
		        <div className="container py-5">
			        <div className="col-9 mx-auto">
				        <h3 className="section-title mb-4">Who Is This Course For</h3>
			            <p className="mb-4">This course is designed for developers lorem ipsum consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. </p>
			            
			             <div className="lead-form-wrapper single-col-max mx-auto theme-bg-light rounded p-5">
						    <h4 className="form-heading text-center mb-3">Get Free Course Previews</h4>
						    <div className="form-intro text-center mb-3">Sign up to get instant access to the course previews.</div>
						    <div className="form-wrapper">
							    <form className="lead-form">
									<div className="form-group mb-3">
										<label for="email" className="sr-only">Email</label>
										<input type="email" className="form-control " id="email" placeholder="Your Email" />
									</div>
									<button type="submit" className="btn btn-ghost btn-submit w-100">Sign Up Now</button>
								</form>
						    </div>
					    </div>
			            
			        </div>
		        </div>
		    </div>
		    
		    <div id="section-tutor" className="section-tutor section pb-5">			    
		        <div className="container-fluid theme-bg-primary">
			        <div className="container-inner p-5 position-relative  rounded">
				        <div className="section-bg-container"></div>
				        <div className="row over-section-bg">
					        <div className="col-12 col-lg-3">
						        <div className="tutor-img-holder mb-5 mb-lg-0 text-center">
							        {/* <img className="tutor-profile img-fluid rounded" src= {image11} alt="" /> */}
						        </div>
					        </div>
					        <div className="col-12 col-lg-9">
						        <div className="pl-lg-4">
							        <h3 className="section-title mb-4 text-white text-lg-start">Meet The Tutor</h3>
							        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at hendrerit augue, eu pellentesque dolor. Praesent vel congue velit. Fusce lorem nisl, condimentum in pulvinar et, laoreet vel felis. Duis tincidunt ex sed risus posuere, quis venenatis quam tincidunt. Quisque arcu lacus, mollis volutpat turpis sit amet, interdum eleifend sem.</p>
						            <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam auctor leo at mi dignissim, tempor porttitor leo vehicula.</p>	
						            <div className="text-center text-lg-start">
							            <ul className="social-list list-unstyled mt-4 mb-0 mx-auto mx-lg-0">
											<li className="list-inline-item"><a href="#"><i className="fab fa-github fa-fw"></i></a></li> 
											<li className="list-inline-item"><a href="#"><i className="fab fa-twitter fa-fw"></i></a></li>
											<li className="list-inline-item"><a href="#"><i className="fa fa-globe fa-fw"></i></a></li>
											<li className="list-inline-item"><a href="#"><i className="fa fa-blog fa-fw"></i></a></li>
										</ul>
						            </div>				        
			                    </div>
					        </div>
				        </div>
			        </div>
		        </div>
		    </div>
		    


	        <div id="section-pricing" className="section-pricing py-5">
		        <div className="container">
			        <div className="single-col-max mx-auto">
			        <h3 className="text-center mb-5">Join This Course</h3>
		            <div className="pricing-plan">
			            <div className="row">
				            <div className="col-12 col-lg-6 mb-4 mb-lg-0">
					            <div className="plan-item rounded">
						            <div className="plan-header">
							            <h4 className="plan-heading rounded-top p-3  theme-bg-primary">Free</h4>
						            </div>
						            
						            <div className="plan-details p-4">
							            <div className="plan-desc text-center mb-4">
								            <div className="plan-price">$0</div>
								            <div className="plan-price-desc">Limited Access</div>
							            </div>
							            <div className="plan-content px-3">
							                <div className="plan-content-intro">Join free and you'll get:</div>
								            <ul className="plan-content-list list-unstyled">
									            <li><i className="theme-check-icon fas fa-check me-2"></i>Access to basic level videos</li>
									            <li><i className="theme-check-icon fas fa-check me-2"></i>3 bonus resources</li>
								            </ul>
								            
							            </div>
							            
						            </div>
						            <div className="plan-cta text-center px-4">
							            <a className="btn btn-ghost btn-block" href="https://themes.3rdwavemedia.com/bootstrap-templates/product/devcourse-bootstrap-4-course-landing-page-template/" target="_blank">Join Free</a>
							        </div>
					            </div>
				            </div>
				            <div className="col-12 col-lg-6 mb-4 mb-lg-0">
					            <div className="plan-item rounded">
						            <div className="plan-header">
							            <h4 className="plan-heading rounded-top p-3 theme-bg-primary">Premium</h4>
						            </div>
						            
						            <div className="plan-details p-4">
							            <div className="plan-desc text-center mb-4">
								            <div className="plan-price">$99</div>
								            <div className="plan-price-desc">Unlimited Access</div>
							            </div>
							            <div className="plan-content px-3">
							                <div className="plan-content-intro">Join free and you'll get:</div>
								            <ul className="plan-content-list list-unstyled">
									            <li><i className="theme-check-icon fas fa-check me-2"></i>Access to all 80+ videos</li>
									            <li><i className="theme-check-icon fas fa-check me-2"></i>Access to all 40+ resources</li>
									            <li><i className="theme-check-icon fas fa-check me-2"></i>Access to projects source code</li>
									            
									            <li><i className="theme-check-icon fas fa-check me-2"></i>Exclusive support forum</li>
									            <li><i className="theme-check-icon fas fa-check me-2"></i>Free updates</li>
									            
									            <li><i className="theme-check-icon fas fa-check me-2"></i>Digital certificate</li>
								            </ul>
								            
							            </div>
							             
						            </div>
						            <div className="plan-cta text-center px-4">
							             <a className="btn btn-primary btn-block" href="https://themes.3rdwavemedia.com/bootstrap-templates/product/devcourse-bootstrap-4-course-landing-page-template/" target="_blank">Enrol Now</a>
							        </div>
					            </div>
				            </div>
			            </div>
		            </div>
		            </div>
		        </div>
	        </div>

	        
	        <div id="section-faq" className="section-faq my-lg-5">
		        <div className="container">
			        <div className="container-inner p-5 theme-bg-primary rounded text-white">
				        <div className="row">
					        <div className="col-12 col-lg-3">
						        <h3 className="section-title text-start mb-4 text-white">FAQ</h3>
						        <div className="intro mb-5 pr-lg-3">Can't find the answer you're looking for? Feel free to <a className="theme-link" href="#">get in touch</a>.</div>
					        </div>
					        <div className="col-12 col-lg-9">
						        <div className="faq-items pl-lg-3">
							        <div className="item">
										<h4 className="faq-q mb-2 text-white"><i className="far fa-question-circle me-2 text-primary"></i>What lorem ipsum dolor sit amet?</h4>
										<div className="faq-a">
											<p>Sed venenatis porta ante, nec accumsan leo suscipit ac. Praesent ultricies tortor nisi, eu convallis ex lacinia ac. Praesent vel risus eu ligula ullamcorper condimentum eu ac leo. Praesent leo odio <a href="#">link example</a> interdum vitae mi vitae, maximus porta lectus. Maecenas venenatis, felis quis rutrum luctus, tortor turpis maximus lacus, at scelerisque nisl metus nec augue.  </p>
										</div>
									</div>
									<div className="item">
										<h4 className="faq-q mb-2 text-white"><i className="far fa-question-circle me-2 text-primary"></i>How to lorem ipsum dolor sit amet?</h4>
										<div className="faq-a">
											<p>Donec tincidunt porttitor dictum. Cras laoreet ipsum vitae massa suscipit, at pretium justo molestie. Duis gravida vitae dui vel posuere. Maecenas pharetra, odio nec interdum efficitur, eros magna bibendum tortor, at pellentesque nunc quam eu diam. </p>
										</div>
									</div>
									<div className="item">
										<h4 className="faq-q mb-2 text-white"><i className="far fa-question-circle me-2 text-primary"></i>Does lorem ipsum dolor sit amet?</h4>
										<div className="faq-a">
											<p>Maecenas felis mauris, pharetra at congue sed, semper et orci. Suspendisse maximus viverra tellus vel dictum. Cras lacinia lectus magna, facilisis congue lacus tristique non. </p>
										</div>
									</div>
									<div className="item">
										<h4 className="faq-q mb-2 text-white"><i className="far fa-question-circle me-2 text-primary"></i>When do you lorem ipsum dolor sit amet?</h4>
										<div className="faq-a">
											<p>Suspendisse gravida gravida orci ut egestas. In in libero faucibus tortor blandit iaculis a fermentum lectus. Proin dictum lacus id fringilla interdum.  </p>
										</div>
									</div>
									<div className="item">
										<h4 className="faq-q mb-2 text-white"><i className="far fa-question-circle me-2 text-primary"></i>Can I lorem ipsum dolor sit amet?</h4>
										<div className="faq-a">
											<p>Nam feugiat quam nec ex consectetur volutpat. Phasellus urna diam, finibus non enim id, placerat facilisis orci. Maecenas tristique orci sit amet sem suscipit, vitae auctor lectus pellentesque. </p>
										</div>
									</div>
									<div className="item">
										<h4 className="faq-q mb-2 text-white"><i className="far fa-question-circle me-2 text-primary"></i>Does lorem ipsum dolor sit amet?</h4>
										<div className="faq-a">
											<p>Nam feugiat quam nec ex consectetur volutpat. Phasellus urna diam, finibus non enim id, placerat facilisis orci. Maecenas tristique orci sit amet sem suscipit, vitae auctor lectus pellentesque. </p>
										</div>
									</div>
						        </div>
					        </div>
				        </div>
			        </div>
		        </div>
	        </div>
	        
	        <div id="section-more" className="section section-related py-5">
		        <div className="container">
			        <h3 className="section-title mb-5">More Courses You May Like</h3>
			        <div className="related-items row">
				        <div className="col-12 col-lg-4 mb-4 mb-lg-0">
					        <div className="item">
						        <div className="item-thumb">
							        <img className="img-fluid rounded-top" src="assets/images/course-1.jpg" alt="" />
						        </div>
						        <div className="item-desc p-4 rounded-bottom">
							        <h4 className="title mb-3"><a href="#">		MATHS </a></h4>
							        <div className="summary mb-3">
							
Mathematics is the science and study of quality, structure, space, and change. Mathematicians seek out patterns, formulate new conjectures, and establish truth by rigorous deduction from appropriately	 </div>
							        <div className="text-center">
									<Link to = "/Courses1">      <a className="btn btn-ghost btn-block">Find out more</a></Link> 
							        </div>
						        </div>
							        
					        </div>
				        </div>
				        <div className="col-12 col-lg-4 mb-4 mb-lg-0">
					        <div className="item">
						        <div className="item-thumb">
							        <img className="img-fluid rounded-top" src="assets/images/course-2.jpg" alt=""  />
						        </div>
						        <div className="item-desc p-4 rounded-bottom">
							        <h4 className="title mb-3"><a href="#">PHYSICS</a></h4>
							        <div className="summary mb-3">
									
Physics is the natural science of matter, involving the study of matter, its fundamental constituents, its motion and behavior through space and time, and the related entities of energy and force.
</div>
    <div className="text-center">
	<Link to = "/Courses1">      <a className="btn btn-ghost btn-block">Find out more</a></Link> 
							        </div>
						        </div>
							        
					        </div>
				        </div>
				        <div className="col-12 col-lg-4">
					        <div className="item">
						        <div className="item-thumb">
							        <img className="img-fluid rounded-top" src="assets/images/course-3.jpg" alt="" />
						        </div>
						        <div className="item-desc p-4 rounded-bottom">
							        <h4 className="title mb-3"><a href="#">CHEMISTRY</a></h4>
							        <div className="summary mb-3">
									
Chemistry is a branch of natural science that deals principally with the properties of substances, the changes they undergo, and the natural laws that describe these changes.
</div>	        <div className="text-center">
							     <Link to = "/Courses1">      <a className="btn btn-ghost btn-block">Find out more</a></Link> 
							        </div>
						        </div>
							        
					        </div>
				        </div>
			        </div>
		        </div>
	        </div>
	        
	        
	        <div className="section section-contact text-center">
		        <div className="container-fluid theme-bg-primary ">
			        <div className="container-inner p-5 position-relative rounded text-white">
				       
				        <div className="section-col-max mx-auto over-section-bg">
				            <h3 className="section-title mb-4 text-white">Get In Touch</h3>
				            <div className="profile-holder mb-4 px-1">
                    </div>
					        <p className="intro">Want to hire me for your staff training or speaking at your conference? <br />You can email me at <a  href="#">hello@yourwebsite.com</a></p>
		                    <h5 className="intro text-white">Know someone who may find the course useful?</h5>
			                <div>Please help me spread the word! :)</div>
			                <div className="text-center mt-4">
					            <ul className="social-list list-unstyled mx-auto mb-0">
									<li className="list-inline-item"><a href="#"><i className="fab fa-facebook-f fa-fw"></i></a></li> 
									<li className="list-inline-item"><a href="#"><i className="fab fa-twitter fa-fw"></i></a></li>
									<li className="list-inline-item"><a href="#"><i className="fab fa-linkedin-in fa-fw"></i></a></li>
									<li className="list-inline-item"><a href="#"><i className="fas fa-envelope fa-fw"></i></a></li>
								</ul>
				            </div>	
				        </div>
			        </div>
		        </div>
	        </div>
	    </div>
	</div>
  </div>
    </div>
  )
}

export default CourseInfo


