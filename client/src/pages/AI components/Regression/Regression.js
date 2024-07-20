import React, { useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import {
  Container,
  Typography,
  Button,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  Paper,
  Alert,
  TextField
} from '@mui/material';
import Sidebar from '../SideBarMl';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);

function Regression() {
  const [file, setFile] = useState(null);
  const [fileContent, setFileContent] = useState(null); // To store file content
  const [testSize, setTestSize] = useState(0.2); // To store test size
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL_PYTHON });

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);
    readFileContent(uploadedFile); // Read the file content when file changes
  };

  const handleTestSizeChange = (e) => {
    setTestSize(e.target.value);
  };

  const readFileContent = (file) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target.result;
      const rows = content.split('\n').map(row => row.split(','));
      setFileContent(rows);
    };
    reader.readAsText(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('test_size', testSize); // Include test size in the form data

    try {
      const response = await axiosInstance.post('/regression', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: "Bearer " + localStorage.getItem("auth_token"),
        }
      });
      setResult(response.data);
      setError(null);
    } catch (error) {
      console.error("Error processing file:", error);
      setError(error.response ? error.response.data : "Network Error");
    }
  };

  const data = result ? {
    labels: result.predictions.map((_, index) => `Data Point ${index + 1}`),
    datasets: [
      {
        label: 'Actual Values',
        data: result.actuals,
        borderColor: 'blue',
        fill: false,
      },
      {
        label: 'Predicted Values',
        data: result.predictions,
        borderColor: 'red',
        fill: false,
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
        text: 'Actual vs Predicted Values',
      },
    },
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
                  <li className="breadcrumb-item active" aria-current="page">AI Model</li>
                </ol>
              </nav>
            </div>
            <div className="row" id="deleteTableItem">
              <div className="col-md-12">
                <div className="card mb-5">
                  <div className="card-body">
                    <div className="d-flex justify-content-between mb-3"></div>
                    <Container maxWidth="xl">
                      <Typography variant="h4" gutterBottom>Regression Analysis</Typography>
                      <Typography paragraph>
                        <strong>Theoretical Explanation:</strong> Regression is a method used to predict a target variable (like house prices) based on one or more input features (like number of rooms, area, and price per square foot).
                      </Typography>
                      <Typography paragraph>
                        <strong>Type of Input Data:</strong> The input data is a CSV file containing features and target values. Each row represents a data point, and each column represents a feature or the target value.
                      </Typography>
                      <Typography paragraph>
                        <strong>Output Explanation:</strong> The output includes the Mean Squared Error (MSE), which measures how close the predicted values are to the actual values. A lower MSE indicates better model performance. The graph below shows a comparison between the actual and predicted values.
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
                        <Box mb={2}>
                          <TextField
                            label="Test Size (greater than 0 and less than 1)"
                            type="number"
                            step="0.01"
                            min="0.01"
                            max="0.99"
                            value={testSize}
                            onChange={handleTestSizeChange}
                            fullWidth
                          />
                        </Box>
                        <Button type="submit" variant="contained" color="secondary">Run Regression</Button>
                      </form>
                      {fileContent && (
                        <Box mt={4}>
                          <Typography variant="h6">Uploaded File Content</Typography>
                          <TableContainer component={Paper} style={{ maxHeight: 300 }}>
                            <Table stickyHeader>
                              <TableHead>
                                <TableRow>
                                  {fileContent[0].map((header, index) => (
                                    <TableCell key={index}>{header}</TableCell>
                                  ))}
                                </TableRow>
                              </TableHead>
                              <TableBody>
                                {fileContent.slice(1, 6).map((row, rowIndex) => (
                                  <TableRow key={rowIndex}>
                                    {row.map((cell, cellIndex) => (
                                      <TableCell key={cellIndex}>{cell}</TableCell>
                                    ))}
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </TableContainer>
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
                          <Typography variant="h6">Results</Typography>
                          <Typography variant="body1"><strong>Mean Squared Error:</strong> {result.mse}</Typography>
                          <Box mt={4}>
                            <Line data={data} options={options} />
                          </Box>
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

export default Regression;
