import React, { useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Container, Typography, Button, Box, Paper, Alert, Card, CardContent, Grid, Divider } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import Sidebar from '../SideBarMl';

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

function Classification() {
  const [file, setFile] = useState(null);
  const [fileContent, setFileContent] = useState(null);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL_PYTHON });

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);
    readFileContent(uploadedFile);
  };

  const readFileContent = (file) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target.result;
      const rows = content.split('\n').map((row, rowIndex) => {
        const cells = row.split(',');
        return { id: rowIndex + 1, ...cells.reduce((acc, cell, cellIndex) => ({ ...acc, [`col${cellIndex}`]: cell }), {}) };
      });
      setFileContent(rows);
    };
    reader.readAsText(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axiosInstance.post('/classification', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: "Bearer " + localStorage.getItem("auth_token"),
        }
      });
      setResult(response.data);
      setError(null);
    } catch (error) {
      setError(error.response ? error.response.data : "Network Error");
    }
  };

  const data = result ? {
    labels: result.classes,
    datasets: [
      {
        label: 'Precision',
        data: result.precision,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Recall',
        data: result.recall,
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
      {
        label: 'F1-Score',
        data: result.f1_score,
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1,
      },
    ],
  } : null;

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Classification Metrics',
      },
    },
  };

  const columns = fileContent ? Object.keys(fileContent[0]).map((key) => ({ field: key, headerName: key })) : [];

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
                  <li className="breadcrumb-item active" aria-current="page">AI Model</li>
                </ol>
              </nav>
            </div>
            <div className="row" id="deleteTableItem">
              <div className="col-md-12">
                <div className="card mb-5">
                  <div className="card-body">
                    <Container maxWidth="xl">
                      <Typography variant="h4" gutterBottom>Classification</Typography>
                      <Typography paragraph>
                        <strong>Theoretical Explanation:</strong> Classification is a supervised learning technique used to predict the categorical labels of new observations based on past observations. It works by training a model using a labeled dataset and then using this model to classify new data points.
                      </Typography>
                      <Typography paragraph>
                        <strong>Type of Input Data:</strong> A CSV file with columns of features and one column of labels (categories). For example, a dataset of flower measurements and their species.
                      </Typography>
                      <Typography paragraph>
                        <strong>Output Explanation:</strong> The output includes the accuracy of the model and a detailed classification report that shows precision, recall, f1-score, and support for each class.
                      </Typography>
                      <form onSubmit={handleSubmit}>
                        <Box mb={2}>
                          <Button
                            variant="contained"
                            component="label"
                            color="primary"
                          >
                            Upload CSV File
                            <input
                              type="file"
                              hidden
                              onChange={handleFileChange}
                            />
                          </Button>
                        </Box>
                        <Button type="submit" variant="contained" color="secondary">Submit</Button>
                      </form>
                      {fileContent && (
                        <Box mt={4}>
                          <Typography variant="h6">Uploaded File Content</Typography>
                          <Paper style={{ height: 400, width: '100%', }}>
                            <DataGrid
                              rows={fileContent.slice(0, 10)}
                              columns={columns}
                              pageSize={10}
                              rowsPerPageOptions={[10]}
                              checkboxSelection={false}
                              disableSelectionOnClick
                            />
                          </Paper>
                        </Box>
                      )}
                      {error && (
                        <Box mt={4}>
                          <Alert severity="error">
                            <Typography variant="h6">Error</Typography>
                            <pre>{JSON.stringify(error, null, 2)}</pre>
                          </Alert>
                        </Box>
                      )}
                      {result && (
                        <Box mt={4}>
                          <Card>
                            <CardContent>
                              <Typography variant="h6" style={{ textAlign: 'center' }}>Results</Typography>
                              <Typography variant="body1" style={{ textAlign: 'center' }}><strong>Accuracy:</strong> {result.accuracy}</Typography>
                              <Grid container spacing={2} mt={2}>
                                <Grid item xs={12} md={6}>
                                  <Box style={{ height: 300 }}>
                                    <Bar data={data} options={options} />
                                  </Box>
                                </Grid>
                                <div className="d-flex" style={{padding : "20px" , height: '300px'}}>
  <div className="vr"></div>
</div>
                                <Grid item xs={12} md={5}>
                                  <Box>
                                    <Typography variant="h6">Detailed Report</Typography>
                                    <pre>{result.report}</pre>
                                  </Box>
                                </Grid>
                              </Grid>
                              <Box mt={4}>
                                <Typography variant="h6">Explanation of Results</Typography>
                                <Typography paragraph>
                                  <strong>Accuracy:</strong> The ratio of correctly predicted instances to the total instances.
                                </Typography>
                                <Typography paragraph>
                                  <strong>Precision:</strong> The ratio of correctly predicted positive observations to the total predicted positives.
                                </Typography>
                                <Typography paragraph>
                                  <strong>Recall:</strong> The ratio of correctly predicted positive observations to all observations in the actual class.
                                </Typography>
                                <Typography paragraph>
                                  <strong>F1-Score:</strong> The weighted average of Precision and Recall.
                                </Typography>
                                <Typography paragraph>
                                  <strong>Support:</strong> The number of actual occurrences of the class in the specified dataset.
                                </Typography>
                              </Box>
                            </CardContent>
                          </Card>
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
  );
}

export default Classification;
