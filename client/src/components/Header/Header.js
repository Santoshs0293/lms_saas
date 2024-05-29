import React, { useState } from "react";
import { Link, NavLink, useNavigate  } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import ChatIcon from "@mui/icons-material/Chat";
import SettingsIcon from "@mui/icons-material/Settings";
import { Avatar, Button, IconButton } from "@mui/material";
import "./Header.css";
import ClearIcon from "@mui/icons-material/Clear";
import NotesIcon from "@mui/icons-material/Notes";
import { useDispatch } from "react-redux";
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { i18n } = useTranslation();
  const history = useNavigate ();
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  const location = useLocation();

  const toggleClose = () => {
    setToggle(false);
  };

  const handleLogout = () => {
    localStorage.clear("user");
    localStorage.clear("auth_token");
    dispatch({ type: "CLEAR__USER" });
    history("/login");
  };

  const handleLanguageToggle = () => {
    setShowLanguages(!showLanguages);
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setShowLanguages(false);
  };

  return (
    <div className="header">
      <div className="left__header">
        <Link to="/">
          <img
            src="https://lms.bup.edu.bd/pluginfile.php/1/theme_edumy/headerlogo2/1618037325/bup-icon.png"
            alt=""
          />
          <h4>LMS</h4>
        </Link>
      </div>
      <div className={`middle__header ${toggle ? "show__sidebar__nav" : "sidebar__nav"}`}>
        {user && (
          <ul>
            {user.role === "Teacher" && (
              <>
                <li>
                  <NavLink onClick={toggleClose} to="/teacher-dashboard">Dashboard</NavLink>
                </li>
              </>
            )}
            {user.role === "Admin" && (
              <>
                <li>
                  <NavLink onClick={toggleClose} to="/admin-dashboard">Dashboard</NavLink>
                </li>
                <li className="admin__toggle__menu">
                  <NavLink onClick={toggleClose} to="/admin/course-info">Course-Info</NavLink>
                </li>
                <li className="admin__toggle__menu">
                  <NavLink onClick={toggleClose} to="/admin/student-info">Student-Info</NavLink>
                </li>
                <li className="admin__toggle__menu">
                  <NavLink onClick={toggleClose} to="/admin/teacher-info">Teacher-Info</NavLink>
                </li>
              </>
            )}
            {user.role === "Student" && (
              <>
                <li>
                  <NavLink onClick={toggleClose} to="/">Dashboard</NavLink>
                </li>
                <li>
                  <NavLink onClick={toggleClose} to="/ucam">UCAM</NavLink>
                </li>
                <li>
                  <NavLink onClick={toggleClose} to="/library">LIBRARY</NavLink>
                </li>
              </>
            )}
            <li>
              <Link onClick={toggleClose} to="/profile">Profile</Link>
            </li>
            <li>
              <NavLink onClick={toggleClose} to="/all-courses">All Courses</NavLink>
            </li>
            <li>
              <NavLink onClick={toggleClose} to="/home">Home</NavLink>
            </li>
            {user.role === "Teacher" ? (
              <li className="">
                <Button onClick={handleLogout}>Logout</Button>
              </li>
            ) : (
              <li className="logout__button">
                <Button onClick={handleLogout}>Logout</Button>
              </li>
            )}
          </ul>
        )}
      </div>
      {user ? (
        <div className="right__header">
          <IconButton>
            <VisibilityOffIcon />
          </IconButton>
          <IconButton>
            <NotificationsActiveIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
          <Link to="/profile">
            <Avatar>R</Avatar>
          </Link>
        </div>
      ) : (
        <div className="d-flex list-unstyled">
          <li className="mr-3">
            <NavLink to="/Login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/Register">Register</NavLink>
          </li>
        </div>
      )}

      {user ? (
        <div className="menu__toggle__icon mr-auto">
          <IconButton onClick={() => setToggle(!toggle)}>
            {!toggle ? (
              <NotesIcon fontSize="large" />
            ) : (
              <ClearIcon fontSize="large" />
            )}
          </IconButton>
        </div>
      ) : null}
      
      <div className="language__switch">
        <button onClick={handleLanguageToggle}>Language</button>
        {showLanguages && (
          <div className="language__dropdown">
            <button onClick={() => changeLanguage('en')}>English</button>
            <button onClick={() => changeLanguage('hi')}>हिन्दी</button>
            {/* Add more language buttons as needed */}
          </div>
        )}
      </div>
    </div>
  );
};

export default (Header);
