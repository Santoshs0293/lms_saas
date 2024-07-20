import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import "./Sidebar.css";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showOptions, setShowOptions] = useState({
    option1: false,
    option2: false,
    option3: false,
    option4: false,
    option5: false,
    option6: false,
    option7: false,
    option8: false,
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
    console.log(userDataFromStorage);
    if (userDataFromStorage) {
      setUserData(JSON.parse(userDataFromStorage));
    }
  }, []);

  const handleLogout = () => {
    // Dispatch logout action
    localStorage.clear("user");
    localStorage.clear("auth_token");
    dispatch({ type: "CLEAR__USER" });
    navigate("/login");
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
      </div>
      <div className="app-sidebar sidebar-shadow">
        <div className="scrollbar-sidebar">
          <div className="app-sidebar-inner">
          <div className= "vertical-nav-menu">
              <NavLink to="/privacyPolicy" className="active-link1">
           
                Privacy And Policy
              </NavLink>
            </div>
            <div className= "vertical-nav-menu">
              <NavLink to="/masterservices" className="active-link1">
      
                Master Services Agreement
              </NavLink>
            </div>
            <div className=" vertical-nav-menu" >
              <NavLink to="/advisionbusinessPrivacy" activeClassName="active-link1">

                Advisions Business Privacy Statement
              </NavLink>
            </div>
            <div className=" vertical-nav-menu" >
              <NavLink to="/instructorterms" activeClassName="">
    
                Instructor Terms
              </NavLink>
            </div>
            <div className=" vertical-nav-menu">
              <NavLink to="/affiliateterms" activeClassName="active-link1">
         
                Affiliate Terms & Conditions
              </NavLink>
            </div>
            <div className=" vertical-nav-menu">
              <NavLink to="/termsofuse" activeClassName="active-link1">
           
                Terms of Use
              </NavLink>
            </div>
            <div className=" vertical-nav-menu">
              <NavLink to="/pricingpromotional" activeClassName="active-link1">
   
                Pricing & Promotions Policy
              </NavLink>
            </div>
           
            <div className=" vertical-nav-menu">
              <NavLink to="/advisionsproterms" activeClassName="active-link1">
   
                Advisions Business Pro Terms & Conditions
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
