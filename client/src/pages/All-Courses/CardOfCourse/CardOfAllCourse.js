import React, { useEffect, useState } from "react";

import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourseInfo } from "../../../redux/course/courseAction";
import { Col, Container, Row } from "react-bootstrap";
import Spinner_comp from "../../../components/Spinner/Spinner_comp";


const CardOfAllCourse = () => {

  const [enroll,setEnroll]=useState(false)

  const { courseInfo } = useSelector((state) => state.course);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCourseInfo());
  }, []);
  const enrollHandler=(id)=>{
   

  }

  return (
    <Container>
      <Row className="g-4">
        {courseInfo.length > 0 ? (
          courseInfo.map((val) => {
            return (
              <Col key={val._id} className="g-4" md={4}>
                <Card className="m-3">
                  <CardActionArea>
                    <CardMedia
                   
                      image={val.courseThumbnail}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {val.courseName}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {val.courseDescription}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActionArea className='p-2'>
                  <Button onClick={()=>enrollHandler(val._id)} variant='contained' color="primary" >Enroll</Button>
                    
                   

                  </CardActionArea>
                </Card>
              </Col>
            );
          })
        ) : (
          <div className="d-flex justify-content-center align-items-center w-100 h-100">
            <Spinner_comp />
          </div>
        )}
      </Row>
    </Container>
  );
};

export default CardOfAllCourse;
