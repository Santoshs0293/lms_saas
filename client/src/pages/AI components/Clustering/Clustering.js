import React, { useState } from 'react';
import axios from 'axios';
import {
  Container,
  Typography,
  Button,
  TextField,
  Input,
  Alert,
  AlertTitle,
  CircularProgress,
  Paper,
  InputLabel,
  Box,
} from '@mui/material';
import Sidebar from '../SideBarMl';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: '1150px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  form: {
    marginBottom: '20px',
  },
  input: {
    marginTop: '5px',
  },
  button: {
    margin: '5px',
  },
  error: {
    marginTop: '20px',
  },
  results: {
    marginTop: '20px',
  },
  table: {
    minWidth: 650,
  },
  fileContent: {
    marginTop: '20px',
  },
  explanations: {
    marginTop: '20px',
  },
  scrollableTableContainer: {
    maxHeight: '400px',
    overflowY: 'auto',
  },
  imageContainer: {
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: '400px',
    objectFit: 'contain',
  },
  clusterDetails: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  clusterItem: {
    flex: '1 1 30%',
    padding: '10px',
  },
}));

function Clustering() {
  const classes = useStyles();
  const [file, setFile] = useState(null);
  const [fileContent, setFileContent] = useState(null);
  const [k, setK] = useState(3);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

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
      const rows = content.split('\n').map((row) => row.split(','));
      setFileContent(rows);
    };
    reader.readAsText(file);
  };

  const handleKChange = (e) => {
    setK(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('k', k);

    setLoading(true);
    try {
      const response = await axiosInstance.post('/clustering', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: "Bearer " + localStorage.getItem("auth_token"),
        },
      });
      setResult(response.data);
      setError(null);
    } catch (error) {
      console.error("Error processing file:", error);
      setError(error.response ? error.response.data : "Network Error");
    }
    setLoading(false);
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
                    <Container className={classes.container}>
                      <Typography variant="h4" gutterBottom>
                        Clustering
                      </Typography>
                      <Typography variant="body1" paragraph>
                        <strong>Theoretical Explanation:</strong> Clustering is an unsupervised learning technique used to group similar data points together. It works by identifying patterns and structures in the data without using labeled examples.
                      </Typography>
                      <Typography variant="body1" paragraph>
                        <strong>Type of Input Data:</strong> A CSV file with columns of features. For example, a dataset of customer spending habits.
                      </Typography>
                      <Typography variant="body1" paragraph>
                        <strong>Output Explanation:</strong> The output includes the assigned cluster for each data point, grouped by clusters.
                      </Typography>
                      <form onSubmit={handleSubmit} className={classes.form}>
                        <InputLabel htmlFor="file-input">Upload CSV file:</InputLabel>
                        <Input id="file-input" type="file" onChange={handleFileChange} fullWidth margin="normal" className={classes.input} />
                        <TextField
                          label="Number of clusters (k)"
                          type="number"
                          value={k}
                          onChange={handleKChange}
                          fullWidth
                          margin="normal"
                        />
                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                          className={classes.button}
                          disabled={!file || loading}
                        >
                          {loading ? <CircularProgress size={24} /> : 'Submit'}
                        </Button>
                      </form>
                      {fileContent && (
                        <Paper elevation={3} sx={{ p: 2, mb: 2, maxHeight: 600, overflow: 'auto' }}>
                          <Typography variant="h6">Uploaded CSV Content</Typography>
                          <div style={{ maxHeight: 300, overflowY: 'scroll' }}>
                            <table className="table table-striped">
                              <thead>
                                <tr>
                                  {fileContent[0].map((header, index) => (
                                    <th key={index}>{header}</th>
                                  ))}
                                </tr>
                              </thead>
                              <tbody>
                                {fileContent.slice(1).map((row, rowIndex) => (
                                  <tr key={rowIndex}>
                                    {row.map((cell, cellIndex) => (
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
                        <Alert severity="error" className={classes.error}>
                          <AlertTitle>Error</AlertTitle>
                          {typeof error === 'string' ? error : JSON.stringify(error, null, 2)}
                        </Alert>
                      )}
                      {result && (
                        <div className={classes.results}>
                          <Typography variant="h5">Results</Typography>
                          <div className={classes.imageContainer}>
                            <img
                              src={`data:image/png;base64,${result.image_base64}`}
                              alt="Clustering Scatter Plot"
                              className={classes.image}
                            />
                          </div>
                          <div className={classes.clusterDetails}>
                            {Object.keys(result.clusters).map((cluster) => (
                              <Paper key={cluster} className={classes.clusterItem} elevation={3}>
                                <Typography variant="h6">Cluster {cluster}</Typography>
                                <pre>{JSON.stringify(result.clusters[cluster], null, 2)}</pre>
                              </Paper>
                            ))}
                          </div>
                          <div className={classes.explanations}>
                            <Typography variant="h6">Explanation of Results:</Typography>
                            <Typography variant="body1" paragraph>
                              <strong>Cluster Assignments:</strong> Each data point is assigned to a cluster. The data points within the same cluster are more similar to each other than to those in other clusters.
                            </Typography>
                            <Typography variant="body1" paragraph>
                              <strong>Number of Clusters (k):</strong> The value of k represents the number of clusters that the data is grouped into. Choosing the right number of clusters is crucial for meaningful results.
                            </Typography>
                            <Typography variant="body1" paragraph>
                              <strong>Interpretation:</strong> By examining the data points in each cluster, you can identify patterns and similarities that may not be immediately apparent. For example, in a customer dataset, one cluster might represent high spenders, while another cluster might represent occasional shoppers.
                            </Typography>
                          </div>
                        </div>
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

export default Clustering;
