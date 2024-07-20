import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Container, Typography, Box, Button, Avatar, Menu, MenuItem } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import Sidebar from "./SideBarAi"

const AI = () => {
  const [userData, setUserData] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const history = useNavigate();

  useEffect(() => {
    const userDataFromStorage = localStorage.getItem("user");
    console.log("Retrieved from storage:", userDataFromStorage);

    if (userDataFromStorage) {
      try {
        const parsedData = JSON.parse(userDataFromStorage);
        setUserData(parsedData);
      } catch (error) {
        console.error("Failed to parse user data:", error);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear("user");
    localStorage.clear("auth_token");
    dispatch({ type: "CLEAR__USER" });
    history("/login");
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="navbar-brand text-start px-5">
          <img
            src="/assets/logo10.png"
            alt="Logo"
            style={{ height: "30px", marginRight: "5px" }}
          />
        </div>

        <div
          className="collapse navbar-collapse d-flex justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/sentiment-analysis"
                className="nav-item nav-link active "
              >
                Sentiment Analysis
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cnn" className="nav-item nav-link active mx-2 my-2 my-sm-0">
                CNN
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/nlp" className="nav-item nav-link active mx-2 my-2 my-sm-0">
                NLP
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/tfidf" className="nav-item nav-link active mx-2 my-2 my-sm-0">
                TF-IDF
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/species-identifier"
                className="nav-item nav-link active mx-2 my-2 my-sm-0"
              >
                Species Identifier
              </Link>
            </li>
          </ul>
          <div className="nav-item nav-link active p-4">
            {userData ? (
              <div className="nav-item dropdown">
                <a
          
                  className="nav-link dropdown-toggle text-dark"
                  data-toggle="dropdown"
                  onClick={handleMenuOpen}
                >
                  {userData.userName}{" "}
                  <AccountCircle style={{ marginLeft: '5px' }} />
                </a>
                <Menu
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                >
                  <MenuItem onClick={handleMenuClose}>
                    <Link to="/student-dashboard" className="dropdown-item">
                      Dashboard
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </div>
            ) : (
              <Link to="/login" className="nav-item nav-link active">
                Login
              </Link>
            )}
          </div>
        </div>
      </nav> */}

<div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header" id="appContent">
        <div className="app-main">
          <Sidebar />
          <div className="app-main-outer">
            <div className="app-main-inner">
              <div className="page-title-actions px-3 d-flex">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Dashboard</a></li>
                    <li className="breadcrumb-item active" aria-current="page">AI Model</li>
                  </ol>
                </nav>
              </div>
              <div className="row" id="deleteTableItem">
                <div className="col-md-12">
                  <div className="card mb-5">
                    <div className="card-body">
                    <div className="d-flex justify-content-between mb-3">

      <Container maxWidth="lg" sx={{ mt: 10 }}>
        <Typography variant="h3" gutterBottom>
          Welcome to  Artificial Intelligence
        </Typography>
        <Typography variant="body1" paragraph>
          Artificial Intelligence (AI) represents a transformative leap in technology, revolutionizing industries and enhancing human capabilities. At its essence, AI involves the development of systems capable of performing tasks that normally require human intelligence, such as understanding natural language, recognizing patterns, and making informed decisions.
        </Typography>
        <Typography variant="body1" paragraph>
          In the realm of AI, machine learning, natural language processing, and computer vision are leading advancements that enable machines to learn from data, comprehend human language, and interpret visual information. These technologies are driving innovation across various sectors, from healthcare and finance to manufacturing and entertainment.
        </Typography>
        <Typography variant="body1" paragraph>
          Our platform provides cutting-edge AI tools and applications designed to empower both novices and experts. Whether you're interested in sentiment analysis, convolutional neural networks (CNNs), natural language processing (NLP), or TF-IDF, we offer comprehensive resources to support your exploration and mastery of AI.
        </Typography>
        <Typography variant="body1" paragraph>
          Join us on this journey to unlock the potential of AI, where you'll find the latest research, practical applications, and a community dedicated to advancing the field of artificial intelligence.
        </Typography>
      </Container>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>

  );
};

export default AI;
