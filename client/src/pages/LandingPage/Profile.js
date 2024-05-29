import { faFacebook, faDribbble, faInstagram, faLinkedin, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Avatar, Paper, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";

const Profile = () => {
  const user = useSelector((state) => state.auth);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const userDataFromStorage = localStorage.getItem('user');
    if (userDataFromStorage) {
      setUserData(JSON.parse(userDataFromStorage));
    }
  }, []);

  return (
    <div>
      <Navbar />
      <br /> <br /> <br /> <br /> <br /> <br />
      <Container>
        <Row>
          <Col>
            {userData ? (
              <div className="container">
                <div className="row d-flex justify-content-center">
                  <div className="col">
                    <div className="card p-3 py-4">
                      <div className="text-center">
                        <img
                          src="https://i.imgur.com/bDLhJiP.jpg"
                          width="100"
                          className="rounded-circle"
                        />
                      </div>
                      <div className="text-center mt-3">
                        <span className="bg-primary p-1 px-4 rounded text-white ">{userData.role}</span>
                        <h5 className="mt-2 mb-0"> {userData.userName}</h5>
                        <span> {userData.email}</span>
                        <div className="px-4 mt-1">
                          <p className="fonts">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        </div>
                        <div className="social-icons d-flex justify-content-center mb-4">
                          <FontAwesomeIcon icon={faFacebook} className="me-3"/>
                          <FontAwesomeIcon icon={faDribbble} className="me-3"/>
                          <FontAwesomeIcon icon={faInstagram} className="me-3" />
                          <FontAwesomeIcon icon={faLinkedin} className="me-3"/>
                          <FontAwesomeIcon icon={faGoogle} className="me-3"/>
                        </div>
                   
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <h1>jhj</h1>
            )}
          </Col>
          {userData ? (
            <Col md={4} className="">
              <Paper className="p-4 m-3 d-flex flex-column shadow">
                <Typography className="my-3 text-primary" variant="h5">
                  Edit Profile
                </Typography>
                <Typography
                  className="my-2"
                  style={{ color: "gray" }}
                  variant="body2"
                >
                  Username
                </Typography>
                <Typography variant="body1">
                  {userData.userName}
                </Typography>
                <br />
                <Typography
                  className="my-2"
                  style={{ color: "gray" }}
                  variant="body2"
                >
                  Edit Password
                </Typography>
                <Typography variant="body1"></Typography>
                <br />
                <Typography
                  className="my-2"
                  style={{ color: "gray" }}
                  variant="body2"
                >
                  Email address
                </Typography>
                <Typography variant="body1">
                  {userData.email}
                </Typography>
              </Paper>
              {user && user.role === "Student" && (
                <Paper className="shadow p-4 d-flex flex-column m-3">
                  <Typography className="my-3 text-primary" variant="h5">
                    Recent activity
                  </Typography>
                  <Typography
                    className="my-2"
                    style={{ color: "gray" }}
                    variant="body2"
                  >
                    Courses I'm taking
                  </Typography>
                  <Typography variant="body1">9</Typography>
                </Paper>
              )}
            </Col>
          ) : (
            <h1>jhj</h1>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Profile;
