import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import logo10 from "./logo10.png"
import "../../App.css"
export default function Navbar() {

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page on route change
  }, []); // Empty dependency array to run only once on component mount


  const state = useSelector(state => state.cart);
  console.log(state)
  const user = useSelector(state => state.auth)
  console.log(user)
  const history = useNavigate();
  const dispatch = useDispatch();


  
  const [userData, setUserData] = useState(null);

  useEffect(() => {
      const userDataFromStorage = localStorage.getItem('user');
      console.log('Retrieved from storage:', userDataFromStorage); // This will show exactly what is being retrieved
  
      if (userDataFromStorage) {
          try {
              const parsedData = JSON.parse(userDataFromStorage);
              setUserData(parsedData);
          } catch (error) {
              console.error('Failed to parse user data:', error); // This will log parsing errors, if any
          }
      }
  }, []);
  
  


const handleLogout = () => {
  // Dispatch logout action
  localStorage.clear("user");
  localStorage.clear("auth_token");
  dispatch({ type: "CLEAR__USER" });
 history("/login")
};
  return (
    <>

      {/* <!-- Navbar Start --> */}
      <div className="container-fluid bg-white sticky-top ">
        <div className="container">
          <nav className="navbar navbar-expand-lg  p-0">
            <Link to="/" className="navbar-brand">
            <Link to="/" className="navbar-brand d-flex align-items-center">
        <img src={logo10} alt="Logo" style={{ height: "40px", marginRight: "5px" }} />
       
    </Link>
            </Link>
            <button
              type="button"
              className="navbar-toggler ms-auto me-0 bg-danger "
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav ms-auto bg-white">
                <Link to="/" className="nav-item nav-link active">
                  Home
                </Link>
                <Link to="/Courses1" className="nav-item nav-link active">
                Courses
                </Link>
                <Link to="/cart" className="nav-item nav-link active">
                Cart ({state ? state.length : 0})
                </Link>
                {/* <div className="nav-item dropdown">
                  <a
                    href="*#"
                    className="nav-link dropdown-toggle active"
                    data-bs-toggle="dropdown"
                  >
                    Our Work
                  </a>
                  <div className="dropdown-menu bg-light mt-2">
                    <Link to="/blog" className="dropdown-item">
                      Blog
                    </Link>
                    <Link to="/product" className="dropdown-item">
                      Products
                    </Link>

        
                    <Link to="/yjseditor" className="dropdown-item">
                    YJS Editor
                    </Link>

                  </div>
                </div> */}
                {/* <Link to="/admin" className="nav-item nav-link">Admin</Link> */}
                <Link to="/codeEditor" className="nav-item nav-link active">
                Code Editor
                </Link>

                
                <Link to="/yjseditor" className="nav-item nav-link active">
                    YJS Editor
                    </Link>
                    <Link to="/blockly2" className="nav-item nav-link active">
                   Blockly
                    </Link>
            
              </div>
              <div className=" nav-item 
              navbar-nav ml-auto py-0 d-none d-lg-block">
                {
                  userData ?
                    <div className="nav-item dropdown">
                      <a href="/" className="nav-link dropdown-toggle text-dark" data-toggle="dropdown">{userData.userName} <i className="fa fa-user-cirle-o mt-1" aria-hidden="true"></i></a>
                      <div className="dropdown-menu  rounded-0 border-0 m-0">
                        <Link to="/student-dashboard" className="dropdown-item">Dashboard</Link>
                     
                       
                        <button className="dropdown-item"  onClick={handleLogout}>Logout</button>
                      </div>
                    </div> :
                    <Link to="/login" className="nav-item nav-link active">Login</Link>
                }
              </div>
              <button
                type="button"
                className="btn text-white p-0 d-none d-lg-block"
                data-bs-toggle="modal"
                data-bs-target="#searchModal"
              >
                <i className="fa fa-search"></i>
              </button>
            </div>
          </nav>
        </div>
      </div>
      {/* <!-- Navbar End --> */}
    </>
  );
}
