import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import "./SideBar.css"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import logo10 from "../StudentDashBoard/logo10.png"
const Sidebar = () => {

    const dispatch = useDispatch();
    const history = useNavigate ();
  const [showOptions, setShowOptions] = useState({
    option1: false,
    option2: false,
    option3: false,
    option4: false,
    option5: false,
    option6: false,
    option7: false,
    option8: false,
    option9: false,
  });

  const toggleOptions = (option) => {
    setShowOptions({
      ...showOptions,
      [option]: !showOptions[option]
    });
  };

  const handleLogout = () => {
    // Dispatch logout action
    localStorage.clear("user");
    localStorage.clear("auth_token");
    dispatch({ type: "CLEAR__USER" });
   history("/login")
  };

  const [userData, setUserData] = useState(null);

  useEffect(() => {
      const userDataFromStorage = localStorage.getItem('user');
      console.log(userDataFromStorage)
      if (userDataFromStorage) {
          setUserData(JSON.parse(userDataFromStorage));
      }
  }, []);
  

  return (
    <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header" id="appContent">
    <div className="app-header header-shadow">
    <div className="app-header-logo"></div>
    <div className="app-header-mobile-menu">
        <div>
            <button type="button" className="hamburger hamburger--elastic mobile-toggle-nav">
                <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                </span>
            </button>
        </div>
    </div>
    <div className="app-header-menu">
        <span>
            <button type="button" className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
                <span className="btn-icon-wrapper">
                    <i className="fa fa-ellipsis-v fa-w-6"></i>
                </span>
            </button>
        </span>
    </div>
    <div className="app-header-content">

    <div className="app-header-left">
            <div className="header-pane ">
                <div>
                     <Link to="/home" className='p-1 m-0 font-weight-large'>Home</Link>
                </div>
            </div>
        </div>
        <div className="app-header-right">
        <div className="app-header-right d-flex align-items-center">
        <div className="container">
          <nav className="navbar navbar-expand-lg  p-0">
        <div className="nav-item nav-link active">
                {
                  userData ?
                    <div className="nav-item dropdown">
                      <a href="/" className="nav-link dropdown-toggle text-#6200ea" data-toggle="dropdown"
                       style={{color : "#6200ea"}}>{userData.userName}
                       <i className="fa fa-user-cirle-o mt-1" aria-hidden="true"></i></a>
                      <div className="dropdown-menu  rounded-0 border-0 m-0">
                       
                        <button className="dropdown-item text-danger"  onClick={handleLogout} >Logout</button>
                      </div>
                    </div> :
                    <Link to="/login" className="nav-item nav-link active">Login</Link>
                }
              </div>
              </nav>
              </div>
              </div>
              </div>
          
     

    </div>
</div>
       

   
         <div className="app-sidebar sidebar-shadow">
        <div className="scrollbar-sidebar pb-3">
        <div className="branding-logo mb-4 text-start px-5">
        <img src={logo10} alt="Logo" style={{ height: "35px", marginRight: "5px" }} />
          </div>
          <div className="branding-logo-forMobile mb-4" >
            <a href="/home">
             
            </a>
          </div>
          <div className="app-sidebar-inner">
         
      <div className="option" onClick={() => toggleOptions('option1')}>
        <NavLink to="/teacher-dashboard" activeClassName="active-link vertical-nav-menu">
          <i className="fa-solid fa-home menu-icon"></i>
          Dashboard<span className='text-white'>sfcwercf</span>
        </NavLink>
       
      </div>
      <div className="option" onClick={() => toggleOptions('option2')}>
        <NavLink  activeClassName="active-link vertical-nav-menu">
        <i className="fa-solid fa-gem menu-icon"></i>
                All Courses
        </NavLink>
        {showOptions.option2 &&
          <div className="sub-options">
            <NavLink to="/TeacherDashCategory" activeClassName="active-link">
              <i className="fa-solid fa-swatchbook"></i>
              &nbsp;  Category
            </NavLink>
            <NavLink to="/TeacherDashCourse" activeClassName="active-link">
              <i className="fa-solid fa-book-open-reader" ></i>
              &nbsp; All Course
            </NavLink>
            <NavLink to="/TeacherDashChapter" activeClassName="active-link">
              <i className="fa-solid fa-photo-film"></i>
              &nbsp; Chapter
            </NavLink>
          </div>
        }
      </div>
      <div className="option" onClick={() => toggleOptions('option3')}>
        <NavLink to="/teachercourses" activeClassName="active-link vertical-nav-menu">
        <i className="fa-solid fa-tasks menu-icon"></i>
          Teacher Course
        </NavLink>
      
      </div>
  
      <div className="option" onClick={() => toggleOptions('option5')}>
        <NavLink to ="/newteachercourses" activeClassName="active-link vertical-nav-menu">
        <i className="fa-solid fa-money-bill-transfer menu-icon"></i>
         Create Course
        </NavLink>
       
      </div>
  
      <div className="option" onClick={() => toggleOptions('option7')}>
        <NavLink  to = "/studentDetails" activeClassName="active-link vertical-nav-menu">
        <i className="fa-solid fa-credit-card menu-icon"></i>
          Student Details
        </NavLink>
       </div>
       <div className="option" onClick={() => toggleOptions('option7')}>
        <NavLink  to = "/teachercreateStudent" activeClassName="active-link vertical-nav-menu">
        <i className="fa-solid fa-credit-card menu-icon"></i>
        Create Student 
        </NavLink>
       </div>
      <div className="option" onClick={() => toggleOptions('option7')}>
        <NavLink  activeClassName="active-link vertical-nav-menu">
        <i className="fa-solid fa-credit-card menu-icon"></i>
          Payment Method
        </NavLink>
       </div>
      <div className="option" onClick={() => toggleOptions('option8')}>
        <NavLink  activeClassName="active-link">
          <i className="fa-solid fa-gear menu-icon"></i>
          Settings<span className='text-white'>sfcwercf</span>
        </NavLink>
        {showOptions.option8 &&
          <div className="sub-options">
            <NavLink to="/user/edit/1" activeClassName="active-link">
              <i className="fa-solid fa-gear"></i>
            </NavLink>
            <button type="button" className="fullbtn hite-icon">
              <i className="fa-solid fa-expand"></i>
            </button>
            <NavLink to="/logout" activeClassName="active-link">
              <i className="fa-solid fa-power-off"></i>
            </NavLink>
          </div>
        }
      </div>
      <div className="option" onClick={() => toggleOptions('option9')}>
        <NavLink  activeClassName="active-link">
        <i className="fa-solid fa-bell menu-icon"></i>
          Notifications
        </NavLink>
        {showOptions.option9 &&
          <div className="sub-options">
            <NavLink to="/user/edit/1" activeClassName="active-link">
              <i className="fa-solid fa-gear"></i>
            </NavLink>
            <button type="button" className="fullbtn hite-icon">
              <i className="fa-solid fa-expand"></i>
            </button>
            <NavLink to="/logout" activeClassName="active-link">
              <i className="fa-solid fa-power-off"></i>
            </NavLink>
          </div>
        }
      </div>
    </div>
    </div>
    </div>
    </div>
  );
}

export default Sidebar;
