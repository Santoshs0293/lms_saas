import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Container, Typography, Box, Button, Avatar, Menu, MenuItem } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import Sidebar from "./SideBarMl";

const MLDashboard = () => {
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
  
      <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header" id="appContent">
        <div className="app-main">
          <Sidebar />
          <div className="app-main-outer">
            <div className="app-main-inner">
              <div className="page-title-actions px-3 d-flex">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Dashboard</a></li>
                    <li className="breadcrumb-item active" aria-current="page">ML Model</li>
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
                            Welcome to Machine Learning
                          </Typography>
                          <Typography variant="body1" paragraph>
                            Machine Learning (ML) is a subset of artificial intelligence that focuses on the development of algorithms and statistical models that enable computers to perform specific tasks without explicit instructions. Instead, ML systems learn from patterns and inferences derived from data.
                          </Typography>
                          <Typography variant="body1" paragraph>
                            In the realm of ML, techniques such as supervised learning, unsupervised learning, and reinforcement learning are employed to create models that can predict outcomes, classify data, and improve decision-making processes.
                          </Typography>
                          <Typography variant="body1" paragraph>
                            Our platform provides advanced ML tools and applications designed to empower both novices and experts. Whether you're interested in sentiment analysis, convolutional neural networks (CNNs), natural language processing (NLP), or TF-IDF, we offer comprehensive resources to support your exploration and mastery of ML.
                          </Typography>
                          <Typography variant="body1" paragraph>
                            Join us on this journey to unlock the potential of ML, where you'll find the latest research, practical applications, and a community dedicated to advancing the field of machine learning.
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

export default MLDashboard;
