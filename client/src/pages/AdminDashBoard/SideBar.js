import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import "./SideBar.css"
import logo10 from "./logo10.png"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'



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

  const [userData, setUserData] = useState(null);

  useEffect(() => {
      const userDataFromStorage = localStorage.getItem('user');
      console.log(userDataFromStorage)
      if (userDataFromStorage) {
          setUserData(JSON.parse(userDataFromStorage));
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
                {/* <div>
                     <Link to="/home" className='p-1 m-0 font-weight-medium' style={{fontSize: '1.2rem'}}>Home</Link>
                </div> */}
            </div>
        </div>
   
        <div className="app-header-right">
        <div className="app-header-right d-flex align-items-center">
  {userData ? (
    <>
     <p className='p-1 m-0 font-weight-medium' style={{fontSize: '1.2rem'}}>{userData.userName}</p>

      <button className="ml-2 p-1 btn btn-sm btn-danger"style={{fontSize: '1rem'}} onClick={handleLogout}>Logout</button>
    </>
  ) : (
    <Link to="/login">Login</Link>
  )}  
</div>


</div>
     

    </div>
</div>
       

   
         <div className="app-sidebar sidebar-shadow">
        <div className="scrollbar-sidebar pb-3">
          <div className="branding-logo mb-4 text-start px-5">
          <img src={logo10} alt="Logo" style={{ height: "40px", marginRight: "5px" }} />
          </div>
          <div className="branding-logo-forMobile mb-4">
            <a href="/">
              <img src={logo10} alt=""/>
            </a>
          </div>
          <div className="app-sidebar-inner">
         
      <div className="option" onClick={() => toggleOptions('option1')}>
        <NavLink to="/admin-dashboard" activeClassName="active-link vertical-nav-menu">
          <i className="fa-solid fa-home menu-icon"></i>
          Dashboard
        </NavLink>
       
      </div>
      <div className="option" onClick={() => toggleOptions('option1')}>
        <NavLink to="/metaData" activeClassName="active-link vertical-nav-menu">
          <i className="fa-solid fa-home menu-icon"></i>
          Set Meta Data
        </NavLink>
       
      </div>
      <div className="option" onClick={() => toggleOptions('option2')}>
        <NavLink  activeClassName="active-link vertical-nav-menu">
        <i className="fa-solid fa-gem menu-icon"></i>
                  Course Management
                
        </NavLink>
        {showOptions.option2 &&
          <div className="sub-options">
            <NavLink to="/category" activeClassName="active-link">
              <i className="fa-solid fa-swatchbook"></i>
              &nbsp;  Category
            </NavLink>
            <NavLink to="/DashBoardCourse" activeClassName="active-link">
              <i className="fa-solid fa-book-open-reader" ></i>
              &nbsp; All Course
            </NavLink>
            <NavLink to="/chapter" activeClassName="active-link">
              <i className="fa-solid fa-photo-film"></i>
              &nbsp; Chapter
            </NavLink>
          </div>
        }
      </div>
      <div className="option" onClick={() => toggleOptions('option3')}>
        <NavLink  activeClassName="active-link vertical-nav-menu">
        <i className="fa-solid fa-tasks menu-icon"></i>
          Enroll Managemant
        </NavLink>
        {showOptions.option3 &&
          <div className="sub-options">
            <NavLink to="/studentdash" activeClassName="active-link">
              <i className="fa-solid fa-swatchbook"></i>
              &nbsp;  Student 
            </NavLink>
            <NavLink to="/teacherdash" activeClassName="active-link">
              <i className="fa-solid fa-book-open-reader" ></i>
              &nbsp; Teacher
            </NavLink>
           
          </div>
        }
      </div>
      <div className="option" onClick={() => toggleOptions('option4')}>
        <NavLink  activeClassName="active-link vertical-nav-menu">
        <i className="fa-solid fa-file-lines menu-icon"></i>
          Admin Management
        </NavLink>
        {showOptions.option4 &&
          <div className="sub-options">
            <NavLink to="/createdashUser" activeClassName="active-link">
              <i className="fa-solid fa-swatchbook"></i>
              &nbsp;  Create User
            </NavLink>
            <NavLink to="/createdashcourse" activeClassName="active-link">
              <i className="fa-solid fa-book-open-reader" ></i>
              &nbsp; Create Course
            </NavLink>
            <NavLink to="/updatedashRole" activeClassName="active-link">
              <i className="fa-solid fa-photo-film"></i>
              &nbsp; Update Role
            </NavLink>
          </div>
        }
      </div>
      <div className="option" onClick={() => toggleOptions('option5')}>
        <NavLink  activeClassName="active-link vertical-nav-menu">
        <i className="fa-solid fa-money-bill-transfer menu-icon"></i>
          Transaction
        </NavLink>
       
      </div>
      <div className="option" onClick={() => toggleOptions('option6')}>
        <NavLink to="/studentdash" activeClassName="active-link vertical-nav-menu">
        <i className="fa-solid fa-users menu-icon"></i>
          Student
        </NavLink>
        
      </div>
      <div className="option" onClick={() => toggleOptions('option7')}>
        <NavLink  activeClassName="active-link vertical-nav-menu">
        <i className="fa-solid fa-credit-card menu-icon"></i>
          Payment Method
        </NavLink>
        {showOptions.option7 &&
          <div className="sub-options">
            <NavLink to="/category/list" activeClassName="active-link">
              <i className="fa-solid fa-swatchbook"></i>
              &nbsp;  Category
            </NavLink>
            <NavLink to="/DashBoardCourse" activeClassName="active-link">
              <i className="fa-solid fa-book-open-reader" ></i>
              &nbsp; All Course
            </NavLink>
            <NavLink to="/chapter/select_course" activeClassName="active-link">
              <i className="fa-solid fa-photo-film"></i>
              &nbsp; Chapter
            </NavLink>
          </div>
        }
      </div>
      <div className="option" onClick={() => toggleOptions('option8')}>
        <NavLink  activeClassName="active-link">
          <i className="fa-solid fa-gear menu-icon"></i>
          Settings
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
