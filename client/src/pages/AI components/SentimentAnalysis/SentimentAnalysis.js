import React, { useState } from 'react';
import axios from 'axios';
import { Bar, Line } from 'react-chartjs-2';
import 'chart.js/auto';
import Sidebar from '../SideBarAi';
import { TextField, Button, Card, CardContent, Typography, Container, Grid, Box } from '@mui/material';

function SentimentAnalysis() {
  const [text, setText] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL_PYTHON });

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('/sentiment-analysis', { text });
      setResult(response.data);
      setError(null);
    } catch (error) {
      console.error("Error processing text:", error);
      setError(error.response ? error.response.data : "Network Error");
    }
  };

  const getBarChartData = () => {
    return {
      labels: ['Polarity', 'Subjectivity'],
      datasets: [
        {
          label: 'Sentiment Analysis',
          data: [result.polarity, result.subjectivity],
          backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(153, 102, 255, 0.6)'],
          borderColor: ['rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)'],
          borderWidth: 1,
        },
      ],
    };
  };

  const getLineChartData = () => {
    return {
      labels: ['Polarity', 'Subjectivity'],
      datasets: [
        {
          label: 'Sentiment Analysis Trend',
          data: [result.polarity, result.subjectivity],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
          fill: false,
        },
      ],
    };
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
                  <li className="breadcrumb-item active" aria-current="page">Sentiment Analysis</li>
                </ol>
              </nav>
            </div>
            <div className="row" id="deleteTableItem">
              <div className="col-md-12">
                <Card variant="outlined" sx={{ marginBottom: 5 }}>
                  <CardContent>
                    <Container maxWidth="xl">
                      <Typography variant="h4" component="h1" gutterBottom>
                        Sentiment Analysis
                      </Typography>
                      <Typography variant="body1" gutterBottom>
                        <strong>Theoretical Explanation:</strong> Sentiment analysis is the process of determining the emotional tone behind a series of words. It is used to gain an understanding of the attitudes, opinions, and emotions expressed within an online mention.
                      </Typography>
                      <Typography variant="body1" gutterBottom>
                        <strong>Type of Input Data:</strong> A text input which can be a sentence, paragraph, or any string of text.
                      </Typography>
                      <Typography variant="body1" gutterBottom>
                        <strong>Output Explanation:</strong> The output includes the polarity and subjectivity of the text. Polarity indicates how positive or negative the text is, while subjectivity indicates how subjective or objective the text is.
                      </Typography>
                      <form onSubmit={handleSubmit}>
                        <TextField
                          fullWidth
                          label="Enter Text"
                          value={text}
                          onChange={handleTextChange}
                          variant="outlined"
                          margin="normal"
                        />
                        <Button type="submit" variant="contained" color="primary">
                          Submit
                        </Button>
                      </form>
                      {error && (
                        <div style={styles.error}>
                          <Typography variant="h6" color="error">
                            Error
                          </Typography>
                          <pre>{JSON.stringify(error, null, 2)}</pre>
                        </div>
                      )}
                      {result && (
                        <div style={styles.results}>
                          <Box style={styles.explanations} justifyContent="center" alignItems="center">
                          <Typography variant="h5" gutterBottom  >
                         <strong> Results </strong>   
                          </Typography>
                          <Typography variant="body1" gutterBottom >
                            <strong>Polarity:</strong> {result.polarity}
                          </Typography>
                          <Typography variant="body1" gutterBottom >
                            <strong>Subjectivity:</strong> {result.subjectivity}
                          </Typography>
                          </Box>
                          <Grid container spacing={3} style={styles.chartContainer}>
                            <Grid item xs={12} md={6}>
                              <Card variant="outlined">
                                <CardContent>
                                  <Box display="flex" justifyContent="center" alignItems="center">
                                    <Bar data={getBarChartData()} />
                                  </Box>
                                </CardContent>
                              </Card>
                            </Grid>
                            <Grid item xs={12} md={6}>
                              <Card variant="outlined">
                                <CardContent>
                                  <Box display="flex" justifyContent="center" alignItems="center">
                                    <Line data={getLineChartData()} />
                                  </Box>
                                </CardContent>
                              </Card>
                            </Grid>
                          </Grid>
                          <Box style={styles.explanations} justifyContent="center" alignItems="center">
                            <Typography variant="h6" gutterBottom>
                              Explanation of Results:
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                              <strong>Polarity:</strong> Polarity ranges from -1 to 1. A score of -1 means the text is very negative, a score of 1 means the text is very positive, and a score of 0 means the text is neutral.
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                              <strong>Subjectivity:</strong> Subjectivity ranges from 0 to 1. A score of 0 means the text is very objective (fact-based), and a score of 1 means the text is very subjective (opinion-based).
                            </Typography>
                          </Box>
                        </div>
                      )}
                    </Container>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  error: {
    color: 'red',
    marginTop: '20px'
  },
  results: {
    marginTop: '20px',
    alignItems : "center"
  },
  chartContainer: {
    marginTop: '20px',
    marginBottom: '20px'
  },
  explanations: {
    backgroundColor: '#F9F9F9',
    padding: '20px',
    borderRadius: '5px'
  }
};

export default SentimentAnalysis;
