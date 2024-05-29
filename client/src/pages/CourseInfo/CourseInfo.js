import { Container, Paper, Typography, Button  } from "@mui/material/";
import { Link } from "react-router-dom";
import React from "react";
import CommonHeader from "../../components/Common/CommonHeader";
import Styles from "./CourseInfo.module.css";
import NoticeToggle from "./NoticeToggle/NoticeToggle";
import toggleTitle from "./ToggleData/ToggleData";
import AddCourse from "./AddCourse"
import Navbar from "../LandingPage/Navbar";

const CourseInfo = () => {

  return (

    <div>


     
           <>
          
      <h6>"ANALYSIS AND DESIGN OF ALGORITHM"</h6>
               <p> Course start date: 19/09/20 Category: Jan - Jun 2021</p>
               
       
                   
             
            
                <Link to = '/NoticeToggle'>
                <Button variant="contained" color="primary" >
                View More Details
              </Button>
                </Link>
      
      
         
 </>
      

      </div>

   

 
  );
};

export default CourseInfo;
