import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {
  CircularProgress,
  Container,
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemText,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Rating
} from '@mui/material';
import Navbar from '../LandingPage/Navbar';
import "../../App.css"

const CourseDetail = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedLecture, setSelectedLecture] = useState(null);
  const [tabIndex, setTabIndex] = useState(0);
  const [openReviewDialog, setOpenReviewDialog] = useState(false);
  const [review, setReview] = useState({ name: '', comment: '', rating: 0 });
  const [reviews, setReviews] = useState([]);
  const options = { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' };

  const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL });

  const getYoutubeVideoId = (url) => {
    const regex = /[?&]([^=#]+)=([^&#]*)/g;
    let match;
    while ((match = regex.exec(url))) {
      if (match[1] === 'v') {
        return match[2];
      }
    }
    return null;
  };

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axiosInstance.get(`/api/purchasecourse/${courseId}`);
        setCourse(response.data);
        if (response.data.lectures && response.data.lectures.length > 0) {
          setSelectedLecture(response.data.lectures[0]); // Set the first lecture as selected
        }
        fetchReviews(courseId);
      } catch (error) {
        console.error('Error fetching course:', error);
        setError('Failed to fetch course details.');
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [courseId]);

  const fetchReviews = async (courseId) => {
    try {
      const response = await axiosInstance.get(`/courses/${courseId}/reviews`);
      setReviews(response.data);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const handleOpenReviewDialog = () => {
    setOpenReviewDialog(true);
  };

  const handleCloseReviewDialog = () => {
    setOpenReviewDialog(false);
  };

  const handleReviewChange = (e) => {
    const { name, value } = e.target;
    setReview((prev) => ({ ...prev, [name]: value }));
  };

  const handleRatingChange = (e, newValue) => {
    setReview((prev) => ({ ...prev, rating: newValue }));
  };

  const handleSubmitReview = async () => {
    try {
      await axiosInstance.post(`/courses/${courseId}/reviews`, review);
      fetchReviews(courseId);
      setReview({ name: '', comment: '', rating: 0 });
      handleCloseReviewDialog();
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  if (loading) {
    return (
      <Container>
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
          <CircularProgress />
          <Typography variant="h6" component="p" sx={{ ml: 2 }}>
            Loading course details...
          </Typography>
        </Box>
      </Container>
    );
  }



  if (!course) {
    return (
      <Container>
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
          <Typography variant="h6">
            No course found.
          </Typography>
        </Box>
      </Container>
    );
  }

  return (
    <div>
      <Navbar />
      <Container maxWidth="xl">
        <Box my={4}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={9}>
              {selectedLecture && (
                <Box >
                  <Card>
                    <CardContent>
                      <Box mt={2}>
                        {selectedLecture.videoUrl.includes('youtube.com') ? (
                          <iframe
                            width="100%"
                            height="400"
                            src={`https://www.youtube.com/embed/${getYoutubeVideoId(selectedLecture.videoUrl)}`}
                            title={selectedLecture.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        ) : (
                          <Typography variant="body2" color="error">
                            Unsupported video format or URL.
                          </Typography>
                        )}
                      </Box>
                    </CardContent>
                  </Card>
                </Box>
              )}
            </Grid>
            <Grid item xs={12} md={3}>
              {course.lectures && course.lectures.length > 0 && (
                <Box>
                  <Typography variant="h5" component="h2" gutterBottom>
                    Lectures
                  </Typography>
                  <List component="nav">
                    {course.lectures.map((lecture, index) => (
                      <div key={index} style={{ fontWeight: 700 }}>
                        <ListItem
                          button
                          onClick={() => setSelectedLecture(lecture)}
                          sx={{ fontWeight: 700, backgroundColor: selectedLecture === lecture ? 'rgba(0, 0, 0, 0.08)' : 'transparent' }}
                        >
                          <ListItemText primary={lecture.title} />
                        </ListItem>
                        <Divider />
                      </div>
                    ))}
                  </List>
                </Box>
              )}
            </Grid>
          </Grid>
<div className='col-9'>
          <Tabs value={tabIndex} onChange={handleTabChange} aria-label="course details tabs">
            <Tab label="Overview" style={{ fontWeight: 700 }} />
            <Tab label="Notes" style={{ fontWeight: 700 }} />
            <Tab label="Course Content" style={{ fontWeight: 700 }} />

            <Tab label="Reviews" style={{ fontWeight: 700 }} />
          </Tabs>
          <TabPanel value={tabIndex} index={0}>
            <Typography variant="body1" color="textSecondary" paragraph>
              {course.courseDescription}
            </Typography>
          </TabPanel>
          <TabPanel value={tabIndex} index={1}>
            <Button size="small" color="secondary" href={course.coursePdf} target="_blank" rel="noopener noreferrer">
              Download Course PDF
            </Button>
          </TabPanel>
          <TabPanel value={tabIndex} index={2}>
            {selectedLecture && (
              <Box mt={2}>
                <Typography variant="body1" color="textSecondary" gutterBottom>
                  {selectedLecture.description}
                </Typography>
                <Box mt={2}>
                  <Button size="small" color="secondary" href={selectedLecture.pdfUrl} target="_blank" rel="noopener noreferrer">
                    Download PDF
                  </Button>
                </Box>
              </Box>
            )}
          </TabPanel>

          <TabPanel value={tabIndex} index={3}>
          <div className="row">

<div className="col-lg-4 col-md-5 col-12 mb-4 mb-lg-0 pr-lg-6">
   <div className="mb-6">
      <h4 className="mb-3">Student reviews</h4>
      <span className="font-14"><i className="fas fa-star text-warning"></i><i className="fas fa-star text-warning"></i><i className="fas fa-star text-warning"></i><i className="fas fa-star text-warning"></i><i className="far fa-star text-warning"></i></span>
      <span className="h5">4.6 out of 5</span>
      <p className="font-14">2,693 customer ratings</p>
      <div className="row align-items-center mb-1 ">
         <div className="col-md-2 col-2 pr-0">
            <div className="font-12 text-dark">5 Star</div>
         </div>
         <div className="col-md-8 col-8 pr-2">
            <div className="progress" style={{height: '8px'}}>
               <div className="progress-bar
                  bg-warning" role="progressbar" style={{width: '78%'}} aria-valuenow="78" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
         </div>
         <div className="col-md-2 col-2">
            <div className="font-12 text-primary">78%</div>
         </div>
      </div>
      <div className="row align-items-center mb-1">
         <div className="col-md-2 col-2 pr-0">
            <div className="font-12 text-dark">4 Star</div>
         </div>
         <div className="col-md-8 col-8 pr-2">
            <div className="progress" style={{height: '8px'}}>
               <div className="progress-bar
                  bg-warning" role="progressbar" style={{width:'12%'}} aria-valuenow="12" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
         </div>
         <div className="col-md-2 col-2">
            <div className="font-12 text-primary">12%</div>
         </div>
      </div>
      <div className="row align-items-center mb-1">
         <div className="col-md-2 col-2 pr-0">
            <div className="font-12 text-dark">3 Star</div>
         </div>
         <div className="col-md-8 col-8 pr-2">
            <div className="progress" style={{height: '8px'}}>
               <div className="progress-bar
                  bg-warning" role="progressbar" style={{width:'5%'}}aria-valuenow="5" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
         </div>
         <div className="col-md-2 col-2">
            <div className="font-12 text-primary">5%</div>
         </div>
      </div>
      <div className="row align-items-center mb-1">
         <div className="col-md-2 col-2 pr-0">
            <div className="font-12 text-dark">2 Star</div>
         </div>
         <div className="col-md-8 col-8 pr-2">
            <div className="progress" style={{height: '8px'}}>
               <div className="progress-bar
                  bg-warning" role="progressbar" style={{width:'2%'}} aria-valuenow="2" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
         </div>
         <div className="col-md-2 col-2">
            <div className="font-12 text-primary">2%</div>
         </div>
      </div>
      <div className="row align-items-center mb-2">
         <div className="col-md-2 col-2 pr-0">
            <div className="font-12 text-dark">1 Star</div>
         </div>
         <div className="col-md-8 col-8 pr-2">
            <div className="progress" style={{height: '8px'}}>
               <div className="progress-bar
                  bg-warning" role="progressbar" style={{width:'1%'}} aria-valuenow="1" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
         </div>
         <div className="col-md-2 col-2">
            <div className="font-12 text-primary">1%</div>
         </div>
      </div>
   </div>
   <div>
      <h4 className="mb-1">Review this Course</h4>
      <p className="font-12 ">Share your thoughts with other customers</p>
      <button className="btn btn-primary btn-block" onClick={handleOpenReviewDialog}>Write A Review</button>
   </div>
</div>

<div className="col-lg-8 col-md-7 col-12">
   <div className="d-flex align-items-center justify-content-between mb-4">
      <div>
         <h4 className="mb-0">Ratings &amp; Reviews</h4>
      </div>
      <div>
         <select className="custom-select">
            <option selected="">Sort on</option>
            <option value="Most Recent">Most Recent</option>
            <option value="Relevant">Relevant</option>
            <option value="Newest">Newest</option>
         </select>
      </div>
   </div>

   {reviews.map((review, index) => (
       <div className="mb-4 pb-4 border-bottom">
       <div className="d-flex mb-3 align-items-center">
          <img src="../assets/images/avatar-7.png" alt="" className="rounded-circle avatar-lg"/>
          <div className="ml-2">
      
              <Box key={index} mb={2}>
                <Typography variant="body1" component="p">
                  {review.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                {new Date(review.createdAt).toLocaleDateString('en-US', options)}
                </Typography>
                <Rating value={review.rating} readOnly />
                <Typography variant="body2" paragraph>
                  {review.comment}
                </Typography>

              </Box>
              </div>
              </div>
              </div>
            ))}

</div>
</div>
         
           
          </TabPanel>
          </div>
        </Box>
      </Container>

      <Dialog open={openReviewDialog} onClose={handleCloseReviewDialog}>
        <DialogTitle>Write a Review</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="name"
            label="Your Name"
            type="text"
            fullWidth
            value={review.name}
            onChange={handleReviewChange}
          />
          <TextField
            margin="dense"
            name="comment"
            label="Your Review"
            type="text"
            multiline
            rows={4}
            fullWidth
            value={review.comment}
            onChange={handleReviewChange}
          />
          <Rating
            name="rating"
            value={review.rating}
            onChange={handleRatingChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseReviewDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmitReview} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

export default CourseDetail;
