import React, { useState } from 'react';
import axios from 'axios';
import { Container, Typography, Box, Button, Input, Select, MenuItem, FormControl, InputLabel, Paper, Alert } from '@mui/material';
import Sidebar from '../SideBarMl';

const plotTypes = ['pie', 'bar', 'hist', 'scatter', 'box'];

const plotExplanations = {
  pie: "A pie chart is a circular statistical graphic which is divided into slices to illustrate numerical proportion. Each slice of the pie represents a category of data, and the size of each slice is proportional to the quantity it represents.",
  bar: "A bar chart represents data with rectangular bars with lengths proportional to the values that they represent. It is used to compare different categories of data.",
  hist: "A histogram is an approximate representation of the distribution of numerical data. It is an estimate of the probability distribution of a continuous variable (quantitative variable) and was first introduced by Karl Pearson.",
  scatter: "A scatter plot uses dots to represent values for two different numeric variables. It is used to observe relationships between variables.",
  box: "A box plot displays the distribution of data based on a five-number summary: minimum, first quartile (Q1), median, third quartile (Q3), and maximum. It is a standardized way of displaying the dataset based on a five-number summary."
};

const DataVisualization = () => {
  const [file, setFile] = useState(null);
  const [fileContent, setFileContent] = useState(null);
  const [plotType, setPlotType] = useState('pie');
  const [plotImage, setPlotImage] = useState(null);
  const [error, setError] = useState(null);
  const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL_PYTHON });

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    const reader = new FileReader();
    reader.onload = (event) => {
      setFileContent(event.target.result);
    };
    reader.readAsText(selectedFile);
  };

  const handlePlotTypeChange = (e) => {
    setPlotType(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('plot_type', plotType);

    try {
      const response = await axiosInstance.post('/api/visualize', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: "Bearer " + localStorage.getItem("auth_token"),
        }
      });
      setPlotImage(response.data.plot_image);
      setError(null);
    } catch (error) {
      console.error("Error generating plot:", error);
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
                    <Container maxWidth="xl" sx={{ mt: 4 }}>
                      <Typography variant="h4" gutterBottom>Data Visualization</Typography>
                      <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
                        <FormControl fullWidth sx={{ mb: 2 }}>
                          <Input type="file" onChange={handleFileChange} />
                        </FormControl>
                        <FormControl fullWidth sx={{ mb: 2 }}>
                          <InputLabel className='mt-2'>Select plot type</InputLabel>
                          <Select value={plotType} onChange={handlePlotTypeChange}>
                            {plotTypes.map((type) => (
                              <MenuItem key={type} value={type}>{type}</MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                        <Button type="submit" variant="contained" color="primary">Generate Plot</Button>
                      </Box>
                      {fileContent && (
  <Paper elevation={3} sx={{ p: 2, mb: 2, maxHeight: 600, overflow: 'auto' }}>
    <Typography variant="h6">Uploaded CSV Content</Typography>
    <div style={{ maxHeight: 300, overflowY: 'scroll' }}>
      <table className="table table-striped">
        <thead>
          <tr>
            {fileContent.split('\n')[0].split(',').map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {fileContent.split('\n').slice(1).map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.split(',').map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </Paper>
)}

                      {error && (
                        <Alert severity="error" sx={{ mb: 2 }}>
                          <Typography variant="h6">Error</Typography>
                          <pre>{JSON.stringify(error, null, 2)}</pre>
                        </Alert>
                      )}
                      {plotImage && (
                        <><Box sx={{ mt: 2, textAlign: 'center' }}>
                          <Typography variant="h6">Generated Plot</Typography>
                          <img src={`data:image/png;base64,${plotImage}`} alt="Generated Plot" style={{ maxWidth: '100%', height: 'auto', }} />
                        </Box><Box>
                            <Paper elevation={3} sx={{ p: 2, mt: 2 }}>
                              <Typography variant="h6">Explanation</Typography>
                              <Typography>{plotExplanations[plotType]}</Typography>
                            </Paper>
                          </Box></>
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

export default DataVisualization;
