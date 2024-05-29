// Importing necessary modules and icons
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from "react-bootstrap";
import { Button, Card, Divider, IconButton, Paper, Typography } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import MessageIcon from "@mui/icons-material/Message";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import BookIcon from '@mui/icons-material/Book';
import SchoolIcon from '@mui/icons-material/School';
import Sidebar from "../../components/Sidebar/Sidebar";
import Body4Card from "./Body4Card/Body4Card";
import CourseCard from "./CourseCard/CourseCard";
import RightSidebar from "./RightSidebar/RightSidebar";
import Spinner_comp from "../../components/Spinner/Spinner_comp";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourseInfo } from "../../redux/course/courseAction";
import "./Dashboard.css";
import styles from "./Dashboard.module.css";
import Header from "../../components/Header/Header";

const Dashboard = () => {
  const [pageValue, setPageValue] = useState(5);
  const { user } = useSelector((state) => state.auth);
  const { courseInfo } = useSelector((state) => state.course);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(1);
  const { t, i18n } = useTranslation();

  const dispatch = useDispatch();
  useEffect(() => {
    if (pageValue === "All") {
      dispatch(fetchCourseInfo());
      setPageValue(courseInfo.length);
    } else {
      dispatch(fetchCourseInfo());
    }
  }, [pageValue, dispatch, courseInfo.length]);

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <>
    <Header />
    <div className="dashboard">
   
      <div className="left__sidebar__dashboard">
        <Sidebar Icon={DashboardIcon} title={t('sidebar.dashboard')} link="/" />
        <Sidebar Icon={PersonIcon} title={t('sidebar.profile')} link="/profile" />
        <Sidebar Icon={TouchAppIcon} title={t('sidebar.grades')} link="/grades" />
        <Sidebar Icon={MessageIcon} title={t('sidebar.messages')} link="/messages" />
        <Sidebar Icon={SettingsApplicationsIcon} title={t('sidebar.preferences')} link="/preferences" />
        <Sidebar Icon={BookIcon} title={t('sidebar.Courses')} link="/courses" />
        <Sidebar Icon={SchoolIcon} title={t('sidebar.Training')} link="/training" />
        <Sidebar Icon={ExitToAppIcon} title={t('sidebar.Logout')}/>
      </div>

      <div className="main__body__dashboard">
        <Container>
          <div className={styles.dashboard__header__name}>
            <h2 className={styles.dashboard__name}>{user && user.userName}</h2>
            <Link to="/">Dashboard</Link>
            <div>
              <button onClick={() => handleLanguageChange('en')}>English</button>
              <button onClick={() => handleLanguageChange('hi')}>हिन्दी</button>
            </div>
          </div>
        </Container>

        <div className="d-flex flex-wrap justify-content-md-between justify-content-md-end">
          <Body4Card
            link="/messages"
            shortTitle={t('dashboard.communicateShort')}
            title={t('dashboard.message')}
            Icon={MessageIcon}
          />
          <Body4Card
            link="/profile"
            shortTitle={t('dashboard.profileShort')}
            title={t('dashboard.profile')}
            Icon={AccountCircleOutlinedIcon}
          />
          <Body4Card
            link="/settings"
            shortTitle={t('dashboard.preferencesShort')}
            title={t('dashboard.settings')}
            Icon={SettingsApplicationsIcon}
          />
          <Body4Card
            shortTitle={t('dashboard.performanceShort')}
            title={t('dashboard.grades')}
            Icon={TouchAppIcon}
          />
           <Body4Card
            link="/training"
            shortTitle={t('dashboard.profileShort')}
            title={t('dashboard.profile')}
            Icon={SchoolIcon}
          />
           <Body4Card
            link="/courses"
            shortTitle={t('dashboard.profileShort')}
            title={t('dashboard.profile')}
            Icon={BookIcon}
          />
       
         
        </div>

        <Container fluid className="my-5">
          <Row>
            <Col md={9} xs={12} sm={12}>
              <Container>
                <Button
                  className="my-2 mb-5"
                  color="primary"
                  variant="contained"
                >
                  {t('dashboard.customizePage')}
                </Button>
                <div>
                  <Row>
                    <Col>
                      <Paper className="d-flex justify-content-between align-items-center p-2 flex-wrap">
                        <Typography variant="h6">
                          {t('dashboard.recentCourses')}
                        </Typography>

                        <div className={styles.icon__style}>
                          <IconButton
                            onClick={() => {
                              if (start === 0 || end === 0) {
                                setEnd(courseInfo.length);
                                setStart(courseInfo.length - 1);
                              } else {
                                setStart(start - 1);
                                setEnd(end - 1);
                              }
                            }}
                          >
                            <ArrowBackIosIcon />
                          </IconButton>
                          <IconButton
                            onClick={() => {
                              if (courseInfo.length === end) {
                                setStart(0);
                                setEnd(1);
                              } else {
                                setStart(start + 1);
                                setEnd(end + 1);
                              }
                            }}
                          >
                            <ArrowForwardIosIcon />
                          </IconButton>
                        </div>
                      </Paper>
                    </Col>
                  </Row>
                </div>

                <Divider />
                {courseInfo.length > 0 &&
                  courseInfo.slice(start, end).map((val) => {
                    return (
                      <CourseCard
                        key={Math.random(2) * 10}
                        title={val.courseDescription}
                        name={val.courseName}
                        id={val._id}
                        img={val.courseThumbnail}
                      />
                    );
                  })}
              </Container>

              <Container className="mt-5">
                <Paper className="d-flex justify-content-between align-items-center p-4">
                  <Typography variant="h6">{t('dashboard.courses')}</Typography>
                </Paper>
                <Divider />

                {courseInfo.length > 0 &&
                  courseInfo.slice(0, pageValue).map((val) => {
                    return (
                      <CourseCard
                        key={Math.random(2) * 10}
                        title={val.courseDescription}
                        name={val.courseName}
                        id={val._id}
                        img={val.courseThumbnail}
                      />
                    );
                  })}

                <div className=" d-flex align-items-center my-2">
                  <Typography className="mr-3" variant="subtitle1">
                    {t('dashboard.show')}
                  </Typography>
                  <select
                    className={styles.dropdown__style}
                    onChange={(e) => setPageValue(e.target.value)}
                  >
                    {[5, 10, 20, "All"].map((val) => {
                      return <option key={val}>{t(`dashboard.${val}`)}</option>;
                    })}
                  </select>
                </div>
              </Container>
            </Col>

            <Col className=" right__sidebar__dashboard " md={3} xs={12} sm={12}>
              <RightSidebar />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
    </>
  );
};

export default Dashboard;
