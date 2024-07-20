import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import logo10 from "../StudentDashBoard/logo10.png";

const Sidebar = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
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
      [option]: !showOptions[option],
    });
  };

  const handleLogout = () => {
    localStorage.clear("user");
    localStorage.clear("auth_token");
    dispatch({ type: "CLEAR__USER" });
    history("/login");
  };

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const userDataFromStorage = localStorage.getItem('user');
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
            <div className="header-pane">
            <div className="container">
              <nav className="navbar navbar-expand-lg p-0">
                <div className="nav-item nav-link active">
                <Link to="/home" className='p-1 m-0 font-weight-large'>Home</Link>         
                <Link to="/aiModel" className='p-3 m-0 font-weight-large'>AI Model</Link>    
              <Link to="/caseStudy" className='p-2 m-0 font-weight-large'>Case Study</Link>
         </div>
         </nav>
         </div>
            </div>
          </div>
          <div className="app-header-right d-flex align-items-center">
            <div className="container">
              <nav className="navbar navbar-expand-lg p-0">
                <div className="nav-item nav-link active">
                  {userData ? (
                    <div className="nav-item dropdown">
                      <a href="/" className="nav-link dropdown-toggle text-#6200ea" data-toggle="dropdown" style={{ color: "#6200ea" }}>
                        {userData.userName}
                        <i className="fa fa-user-circle-o mt-1" aria-hidden="true"></i>
                      </a>
                      <div className="dropdown-menu rounded-0 border-0 m-0">
                        <button className="dropdown-item text-danger" onClick={handleLogout}>Logout</button>
                      </div>
                    </div>
                  ) : (
                    <Link to="/login" className="nav-item nav-link active">Login</Link>
                  )}
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="app-sidebar sidebar-shadow">
        <div className="scrollbar-sidebar pb-3">
          <div className="branding-logo mb-4 text-start px-5">
            <img src={logo10} alt="Logo" style={{ height: "40px", marginRight: "5px" }} />
          </div>
          
          <div className="app-sidebar-inner">
            <div className="option" onClick={() => toggleOptions('option1')}>
              <NavLink  activeClassName="active-link vertical-nav-menu">
                <i className="fa-solid fa-home menu-icon"></i>
                Classification
              </NavLink>
              {showOptions.option1 &&
          <div className="sub-options">
            <NavLink to="/classification" activeClassName="active-link">
              <i className="fa-solid fa-swatchbook"></i>
              &nbsp;  Practical
            </NavLink>
            <NavLink to="/classificationTheory" activeClassName="active-link">
              <i className="fa-solid fa-book-open-reader" ></i>
              &nbsp; Theory
            </NavLink>
          
          </div>
        }
            </div>
            <div className="option" onClick={() => toggleOptions('option2')}>
              <NavLink activeClassName="active-link vertical-nav-menu">
                <i className="fa-solid fa-gem menu-icon"></i>
                Clustering 
              </NavLink>
              {showOptions.option2 &&
          <div className="sub-options">
            <NavLink to="/clustering" activeClassName="active-link">
              <i className="fa-solid fa-swatchbook"></i>
              &nbsp;  Practical
            </NavLink>
            <NavLink to="/clusteringTheory" activeClassName="active-link">
              <i className="fa-solid fa-book-open-reader" ></i>
              &nbsp; Theory
            </NavLink>
          
          </div>
        }
            </div>
            <div className="option" onClick={() => toggleOptions('option3')}>
              <NavLink activeClassName="active-link vertical-nav-menu">
                <i className="fa-solid fa-tasks menu-icon"></i>
                Data Visualization
              </NavLink>
              {showOptions.option3 &&
          <div className="sub-options">
            <NavLink to="/data-visualization" activeClassName="active-link">
              <i className="fa-solid fa-swatchbook"></i>
              &nbsp;  Practical
            </NavLink>
            <NavLink to="/dataVisualizationTheory" activeClassName="active-link">
              <i className="fa-solid fa-book-open-reader" ></i>
              &nbsp; Theory
            </NavLink>
          
          </div>
        }
            </div>
            <div className="option" onClick={() => toggleOptions('option5')}>
              <NavLink activeClassName="active-link vertical-nav-menu">
                <i className="fa-solid fa-money-bill-transfer menu-icon"></i>
                PCA <span className= "text-white">wecwecfwerf</span>
              </NavLink>
              {showOptions.option5 &&
          <div className="sub-options">
            <NavLink to="/pca" activeClassName="active-link">
              <i className="fa-solid fa-swatchbook"></i>
              &nbsp;  Practical
            </NavLink>
            <NavLink to="/pcaTheory" activeClassName="active-link">
              <i className="fa-solid fa-book-open-reader" ></i>
              &nbsp; Theory
            </NavLink>
          
          </div>
        }
            </div>
            <div className="option" onClick={() => toggleOptions('option7')}>
              <NavLink  activeClassName="active-link vertical-nav-menu">
                <i className="fa-solid fa-credit-card menu-icon"></i>
                Regression
              </NavLink>
              {showOptions.option7 &&
          <div className="sub-options">
            <NavLink to="/regression" activeClassName="active-link">
              <i className="fa-solid fa-swatchbook"></i>
              &nbsp;  Practical
            </NavLink>
            <NavLink to="/regressionTheory" activeClassName="active-link">
              <i className="fa-solid fa-book-open-reader" ></i>
              &nbsp; Theory
            </NavLink>
          
          </div>
        }
            </div>

            <div className="option" onClick={() => toggleOptions('option9')}>
        <NavLink  activeClassName="active-link vertical-nav-menu">
        <i className="fa-solid fa-gem menu-icon"></i>
        Download Sample CSV Files
                
        </NavLink>
        {showOptions.option9 &&
          <div className="sub-options">
           <a href="/assets/csv/regression_sample.csv" download activeClassName="active-link vertical-nav-menu">
           <i className="fa-solid fa-download menu-icon"></i>
              &nbsp;  For Regression
            </a>

            <a href="/assets/csv/pca_sample.csv" download activeClassName="active-link vertical-nav-menu">
            <i className="fa-solid fa-download menu-icon"></i>
              &nbsp; For PCA
            </a>

            
            <a href="/assets/csv/classification_sample.csv" download activeClassName="active-link vertical-nav-menu">
            <i className="fa-solid fa-download menu-icon"></i>
              &nbsp; For Classification
            </a>

            <a href="/assets/csv/clustering_sample.csv" download activeClassName="active-link vertical-nav-menu">
            <i className="fa-solid fa-download menu-icon"></i>
              &nbsp; For Clustering
            </a>

            <a href="/assets/csv/pie_bar.csv" download activeClassName="active-link vertical-nav-menu">
            <i className="fa-solid fa-download menu-icon"></i>
              &nbsp; For Data Visualization
            </a>
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
