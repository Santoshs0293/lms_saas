import React, { useState } from 'react';
import axios from 'axios';
import { Container, Button, Box, Typography, TextField, Card, CardContent, Alert, Grid } from '@mui/material';
import Sidebar from './SideBarCaseStudy';

const questionPackets = {
  bullying: [
    "Who is affected by the school bullying problem?",
    "What is school bullying?",
    "Where does bullying usually happen in school?",
    "Why is it important to stop bullying in school?",
    "Who can help stop bullying in school?",
    "What are the signs that someone is being bullied?",
    "Where should students go for help if they are being bullied?",
    "Why do some students bully others?",
    "Who benefits from a bullying-free school environment?",
    "What can happen if bullying is not addressed?"
  ],
  sports: [
    "Who can participate in school sports teams?",
    "What are the benefits of playing sports?",
    "Where can students practice sports at school?",
    "Why is teamwork important in sports?",
    "Who coaches the school sports teams?",
    "What equipment is needed for playing basketball?",
    "Where are school sports competitions usually held?",
    "Why should students warm up before playing sports?",
    "Who are some famous athletes that students can look up to?",
    "What are the rules of soccer?"
  ],
  competitions: [
    "Who can join school competitions?",
    "What types of competitions are held in schools?",
    "Where are spelling bees usually held?",
    "Why are academic competitions beneficial?",
    "Who organizes school science fairs?",
    "What are the prizes for winning school competitions?",
    "Where can students find information about upcoming competitions?",
    "Why is it important to prepare for competitions?",
    "Who judges the school art competitions?",
    "What are the rules for participating in a debate competition?"
  ],
  study_preparation: [
    "Who can help students with their homework?",
    "What are effective study habits?",
    "Where is the best place to study at home?",
    "Why is it important to take breaks while studying?",
    "Who can students ask for extra help in subjects they find difficult?",
    "What materials are needed for effective studying?",
    "Where can students find additional learning resources?",
    "Why should students review their notes regularly?",
    "Who can form a study group?",
    "What are the benefits of studying with a group?"
  ],
  discipline: [
    "Who enforces the school rules?",
    "What are the consequences of breaking school rules?",
    "Where can students learn about the school's code of conduct?",
    "Why is it important to follow school rules?",
    "Who can students talk to if they have concerns about school discipline?",
    "What should students do if they see someone breaking the rules?",
    "Where can students report incidents of misconduct?",
    "Why is punctuality important in school?",
    "Who decides on the disciplinary actions for serious offenses?",
    "What are some examples of good behavior in school?"
  ],
  house_price_prediction: [
    "Who needs to know house price predictions?",
    "What factors influence house prices?",
    "Where can data about house prices be found?",
    "Why is predicting house prices important?"
  ],
  student_performance_prediction: [
    "Who benefits from predicting student performance?",
    "What factors influence student performance?",
    "Where can data about student performance be found?",
    "Why is predicting student performance important?"
  ],
  library_book_recommendation: [
    "Who benefits from book recommendations?",
    "What factors influence book recommendations?",
    "Where can data about reading preferences be found?",
    "Why are book recommendations important?"
  ],
  school_event_attendance: [
    "Who benefits from predicting school event attendance?",
    "What factors influence event attendance?",
    "Where can data about past attendance be found?",
    "Why is predicting event attendance important?"
  ],
  cafeteria_food_wastage: [
    "Who needs to know about food wastage predictions?",
    "What factors influence food wastage?",
    "Where can data about food wastage be found?",
    "Why is predicting food wastage important?"
  ]
};

const caseStudies = {
  house_price_prediction: {
    title: "House Price Prediction",
    description: "This case study involves predicting house prices using various features such as the number of rooms, area, and location. Accurate house price predictions can help buyers, sellers, and real estate agents make informed decisions."
  },
  student_performance_prediction: {
    title: "Student Performance Prediction",
    description: "This case study involves predicting student performance using various features such as study hours, attendance, and participation. Accurate predictions can help teachers and parents support students more effectively."
  },
  library_book_recommendation: {
    title: "Library Book Recommendation",
    description: "This case study involves recommending books to students using various features such as past borrowings, reading interests, and demographic information. Accurate recommendations can enhance the reading experience for students."
  },
  school_event_attendance: {
    title: "School Event Attendance",
    description: "This case study involves predicting attendance for school events using various features such as event type, promotion methods, and past attendance. Accurate predictions can help in better planning and resource allocation."
  },
  cafeteria_food_wastage: {
    title: "Cafeteria Food Wastage",
    description: "This case study involves predicting food wastage in the school cafeteria using various features such as menu items, number of students, and weather conditions. Accurate predictions can help in reducing waste and managing resources better."
  }
};

function ProblemCanvas() {
  const [userResponse, setUserResponse] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [activePacket, setActivePacket] = useState(null);
  const [activeQuestion, setActiveQuestion] = useState(null);
  const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL_PYTHON });

  const handlePacketChange = (packet) => {
    if (activePacket === packet) {
      setActivePacket(null);
      setActiveQuestion(null);
      setUserResponse('');
      setResult(null);
      setError(null);
    } else {
      setActivePacket(packet);
      setActiveQuestion(null);
      setUserResponse('');
      setResult(null);
      setError(null);
    }
  };

  const handleQuestionChange = (index) => {
    if (activeQuestion === index) {
      setActiveQuestion(null);
      setUserResponse('');
      setResult(null);
      setError(null);
    } else {
      setActiveQuestion(index);
      setUserResponse('');
      setResult(null);
      setError(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (activePacket === null || activeQuestion === null) {
      setError("Please select a packet and question first.");
      return;
    }
    try {
      const res = await axiosInstance.post('/problem-canvas',
        { headers: {
          Authorization: "Bearer " + localStorage.getItem("auth_token"),
        }},
        {
        packet_name: activePacket,
        question_index: activeQuestion,
        response: userResponse
      });
      setResult(res.data);
      setError(null);
    } catch (error) {
      console.error("Error processing response:", error);
      setError(error.response ? error.response.data : "Network Error");
    }
  };

  return (
    <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header" id="appContent">
      <div className="app-main">
        <Sidebar />
        <div className="app-main-outer">
          <div className="app-main-inner">
            <div className="page-title-actions px-3 d-flex">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="/">Dashboard</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Problem Canvas</li>
                </ol>
              </nav>
            </div>
            <div className="row" id="deleteTableItem">
              <div className="col-md-12">
                <div className="card mb-5">
                  <div className="card-body">
                    <div className="d-flex justify-content-between mb-3">
                      <Container>
                        <Typography variant="h4" component="h1" gutterBottom>
                          4Ws Problem Canvas
                        </Typography>
                        <Grid container spacing={2} marginBottom={2}>
                          {Object.keys(questionPackets).map((packet, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                              <Button
                       
                                fullWidth
                                className=' font-weight-bold'
                                variant={activePacket === packet ? "contained" : "outlined"}
                                onClick={() => handlePacketChange(packet)}
                                sx={{ padding: 1.5 }}
                              >
                                {packet.charAt(0).toUpperCase() + packet.slice(1).replace('_', ' ')}
                              </Button>
                            </Grid>
                          ))}
                        </Grid>
                        {activePacket && caseStudies[activePacket] && (
                          <Card variant="outlined" sx={{ mb: 3 }} className=" text-dark mt-4">
                            <CardContent>
                              <Typography variant="h5" component="h2">
                                {caseStudies[activePacket].title}
                              </Typography>
                              <Typography variant="body2" component="p">
                                {caseStudies[activePacket].description}
                              </Typography>
                            </CardContent>
                          </Card>
                        )}
                        {activePacket && (
                          <Box mt={4}>
                            {questionPackets[activePacket].map((q, index) => (
                              <Box key={index} mb={2}>
                                <Button
                                  fullWidth
                                  variant={activeQuestion === index ? "contained" : "outlined"}
                                  onClick={() => handleQuestionChange(index)}
                                  sx={{ justifyContent: 'flex-start' }}
                                  className='bg-light text-black'
                                >
                                  {q}
                                </Button>
                                {activeQuestion === index && (
                                  <Box mt={2}>
                                    <Typography variant="body1" component="label">
                                      {q}
                                    </Typography>
                                    <TextField
                                      fullWidth
                                      value={userResponse}
                                      onChange={(e) => setUserResponse(e.target.value)}
                                      variant="outlined"
                                      margin="normal"
                                    />
                                    <Button
                                      variant="contained"
                                      color="primary"
                                      onClick={handleSubmit}
                                    >
                                      Submit
                                    </Button>
                                  </Box>
                                )}
                              </Box>
                            ))}
                          </Box>
                        )}
                        {error && (
                          <Alert severity="error" sx={{ mt: 3 }}>
                            <strong>Error:</strong> {JSON.stringify(error, null, 2)}
                          </Alert>
                        )}
                        {result && (
                          <Box sx={{ mt: 3 }}>
                            <Typography variant="h6" component="h3">
                              Results
                            </Typography>
                            <Typography variant="body2"><strong>Question:</strong> {result.question}</Typography>
                            <Typography variant="body2"><strong>Stored Answer:</strong> {result.stored_answer}</Typography>
                            <Typography variant="body2"><strong>Your Response:</strong> {result.user_response}</Typography>
                            <Typography variant="body2"><strong>Score:</strong> {result.score.toFixed(2)}</Typography>
                          </Box>
                        )}
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
  );
}

const styles = {
blue : {
    backgroundColor : 'DodgerBlue',
  }
}

export default ProblemCanvas;
