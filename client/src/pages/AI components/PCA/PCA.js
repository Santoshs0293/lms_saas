import React, { useState } from 'react';
import axios from 'axios';
import {
  Container,
  Typography,
  Box,
  Button,
  Input,
  FormControl,
  InputLabel,
  Paper,
  Alert,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import Sidebar from '../SideBarMl';

const PCA = () => {
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
      const rows = content.split('\n').map(row => row.split(','));
      setFileContent(rows);
    };
    reader.readAsText(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axiosInstance.post('/pca', formData, {
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
                    <Container maxWidth="xl" sx={{ mt: 4 }}>
                      <Typography variant="h4" gutterBottom>Principal Component Analysis (PCA)</Typography>
                      <Typography variant="body1" paragraph>
                        <strong>Theoretical Explanation:</strong> PCA is a dimensionality reduction technique used to reduce the number of variables in a dataset while preserving as much information as possible. It works by identifying the principal components, which are the directions of maximum variance in the data.
                      </Typography>
                      <Typography variant="body1" paragraph>
                        <strong>Type of Input Data:</strong> A CSV file with columns of features. For example, a dataset of digit images represented as pixel values.
                      </Typography>
                      <Typography variant="body1" paragraph>
                        <strong>Output Explanation:</strong> The output includes the principal components of the dataset, which can be used for further analysis or visualization.
                      </Typography>
                      <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
                        <FormControl fullWidth sx={{ mb: 2 }}>
                          <Input type="file" onChange={handleFileChange} />
                        </FormControl>
                        <Button type="submit" variant="contained" color="primary">Submit</Button>
                      </Box>
                      {fileContent && (
                        <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
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
                        </Paper>
                      )}
                      {error && (
                        <Alert severity="error" sx={{ mb: 2 }}>
                          <Typography variant="h6">Error</Typography>
                          <pre>{JSON.stringify(error, null, 2)}</pre>
                        </Alert>
                      )}
                      {result && (
                        <Box sx={{ mt: 2 }}>
                          <Typography variant="h6">Results</Typography>
                          <Box sx={{ mt: 2, textAlign: 'center' }}>
                          <img src={`data:image/png;base64,${result.image_base64}`} alt="PCA Scatter Plot" style={{ width: '70%', height: '500px', marginBottom: '20px' }} />
                         </Box>
                          <Paper elevation={3} sx={{ p: 2, mt: 2 }}>
                            <Typography variant="h6">Explanation of Results</Typography>
                            <Typography>
                              <strong>Principal Components:</strong> The principal components are the directions in which the data varies the most. In the scatter plot, each point represents a data point in terms of its principal components.
                            </Typography>
                            <Typography>
                              <strong>Variance Explained:</strong> The principal components are ordered by the amount of variance they explain. The first principal component explains the most variance, followed by the second, and so on.
                            </Typography>
                            <Typography>
                              <strong>Interpretation:</strong> By examining the scatter plot, you can see how the data points are distributed along the principal components. This can help you understand the structure of the data and identify patterns.
                            </Typography>
                          </Paper>
                          <Paper elevation={3} sx={{ p: 2, mt: 2 }}>
                            <Typography variant="h6">List of Principal Components</Typography>
                            <pre>{JSON.stringify(result.principal_components, null, 2)}</pre>
                          </Paper>
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
};

export default PCA;
