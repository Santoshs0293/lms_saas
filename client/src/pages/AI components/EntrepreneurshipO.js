import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Container, Typography, Box, Button, Avatar, Menu, MenuItem } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import Sidebar from "./SideBarCaseStudy";

const CaseStudy = () => {
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
                    <li className="breadcrumb-item active" aria-current="page">Case Study</li>
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
                            Welcome to the Case Study for Entrepreneurs
                          </Typography>
                          <Typography variant="body1" paragraph>
                            Entrepreneurship is a dynamic and challenging journey that involves identifying opportunities, taking risks, and innovating to create value. This case study is designed to provide insights and practical knowledge to aspiring and established entrepreneurs.
                          </Typography>
                          <Typography variant="body1" paragraph>
                            In the world of entrepreneurship, understanding market trends, consumer behavior, and effective business strategies is crucial. This case study delves into various aspects of entrepreneurship, from ideation and business planning to scaling and sustaining a successful venture.
                          </Typography>
                          <Typography variant="body1" paragraph>
                            Our platform offers tools and resources to help entrepreneurs navigate the complexities of starting and growing a business. Whether you are looking to develop a business model, understand funding options, or explore innovative marketing strategies, we provide comprehensive support to help you succeed.
                          </Typography>
                          <Typography variant="body1" paragraph>
                            Join us in this case study to gain valuable insights, connect with like-minded individuals, and embark on your entrepreneurial journey with confidence and knowledge.
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

export default CaseStudy;
