import React, { useState } from 'react';
import axios from 'axios';
import Sidebar from '../SideBarAi';
import { Box, Button, Container, Grid, TextField, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Alert } from '@mui/material';

function TFIDF() {
  const [texts, setTexts] = useState(['']);
  const [files, setFiles] = useState([]);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL_PYTHON });

  const handleTextChange = (index, value) => {
    const newTexts = [...texts];
    newTexts[index] = value;
    setTexts(newTexts);
  };

  const handleAddTextBox = () => {
    setTexts([...texts, '']);
  };

  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        formData.append('files', files[i]);
      }
    }
    formData.append('texts', JSON.stringify(texts));

    try {
      const response = await axiosInstance.post('/tfidf', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setResult(response.data);
      setError(null);
    } catch (error) {
      console.error("Error processing texts/files:", error);
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
                    <div className="d-flex justify-content-between mb-3">
                      <Container maxWidth="lg">
                        <Box mt={4} mb={4}>
                          <Typography variant="h4" gutterBottom>
                            TF-IDF Calculation
                          </Typography>
                          <Grid container spacing={4}>
                            <Grid item xs={12} md={6}>
                              <Paper elevation={3} sx={{ padding: 2 }}>
                                <Typography variant="h6">Theoretical Explanation:</Typography>
                                <Typography paragraph>
                                  TF-IDF (Term Frequency-Inverse Document Frequency) is a numerical statistic used to reflect how important a word is to a document in a collection or corpus. It is often used as a weighting factor in information retrieval and text mining.
                                </Typography>
                                <Typography variant="h6">Type of Input Data:</Typography>
                                <Typography paragraph>
                                  Provide text inputs directly or upload text files. Each text input/file should contain a document from which TF-IDF will be calculated.
                                </Typography>
                                <Typography variant="h6">Output Explanation:</Typography>
                                <Typography paragraph>
                                  The output includes the TF-IDF scores of terms across all documents.
                                </Typography>
                                <Typography variant="h6">How TF-IDF Works:</Typography>
                                <Typography paragraph>
                                  <strong>Term Frequency (TF):</strong> Definition: Term Frequency is the number of times a term (word) appears in a document. It measures the frequency of a term in a single document.
                                </Typography>
                                <Typography paragraph>
                                  Formula: TF(t) = (Number of times term t appears in a document) / (Total number of terms in the document)
                                </Typography>
                                <Typography paragraph>
                                  <strong>Inverse Document Frequency (IDF):</strong> Definition: Inverse Document Frequency measures how important a term is. While Term Frequency (TF) considers the frequency of a term in a document, IDF evaluates how common or rare a term is across all documents in the corpus.
                                </Typography>
                                <Typography paragraph>
                                  Formula: IDF(t) = log(Total number of documents / Number of documents with term t)
                                </Typography>
                                <Typography paragraph>
                                  Purpose: The IDF of a rare term is high, whereas the IDF of a common term is low.
                                </Typography>
                                <Typography paragraph>
                                  <strong>TF-IDF Calculation:</strong> Definition: TF-IDF is a combination of TF and IDF. It measures the importance of a term in a document relative to the entire corpus.
                                </Typography>
                                <Typography paragraph>
                                  Formula: TF-IDF(t) = TF(t) × IDF(t)
                                </Typography>
                                <Typography paragraph>
                                  Purpose: The product of TF and IDF gives a higher weight to terms that are frequent in a document but not common across all documents.
                                </Typography>
                                <Typography variant="h6">Example:</Typography>
                                <Typography paragraph>
                                  Consider three documents:
                                </Typography>
                                <Typography paragraph>
                                  Document 1: "the cat sat on the mat"
                                </Typography>
                                <Typography paragraph>
                                  Document 2: "the cat is a pet"
                                </Typography>
                                <Typography paragraph>
                                  Document 3: "dogs are pets too"
                                </Typography>
                                <Typography paragraph>
                                  Let's calculate TF-IDF for the term "cat":
                                </Typography>
                                <Typography paragraph>
                                  <strong>Term Frequency (TF):</strong> TF("cat", Document 1) = 1/6
                                </Typography>
                                <Typography paragraph>
                                  TF("cat", Document 2) = 1/5
                                </Typography>
                                <Typography paragraph>
                                  TF("cat", Document 3) = 0/4 = 0
                                </Typography>
                                <Typography paragraph>
                                  <strong>Inverse Document Frequency (IDF):</strong> Number of documents containing "cat" = 2
                                </Typography>
                                <Typography paragraph>
                                  Total number of documents = 3
                                </Typography>
                                <Typography paragraph>
                                  IDF("cat") = log(3/2) = 0.176
                                </Typography>
                                <Typography paragraph>
                                  <strong>TF-IDF:</strong> TF-IDF("cat", Document 1) = (1/6) * 0.176 = 0.029
                                </Typography>
                                <Typography paragraph>
                                  TF-IDF("cat", Document 2) = (1/5) * 0.176 = 0.035
                                </Typography>
                                <Typography paragraph>
                                  TF-IDF("cat", Document 3) = 0
                                </Typography>
                              </Paper>
                            </Grid>
                            <Grid item xs={12} md={6}>
                              <Paper elevation={3} sx={{ padding: 2 }}>
                                <form onSubmit={handleSubmit}>
                                  {texts.map((text, index) => (
                                    <Box key={index} mb={2}>
                                      <TextField
                                        label={`Document ${index + 1}`}
                                        value={text}
                                        onChange={(e) => handleTextChange(index, e.target.value)}
                                        multiline
                                        rows={4}
                                        fullWidth
                                      />
                                    </Box>
                                  ))}
                                  <Box mt={2} mb={2}>
                                    <Button variant="contained" color="primary" onClick={handleAddTextBox}>
                                      Add Text
                                    </Button>
                                    <Button
                                      variant="contained"
                                      component="label"
                                      color="primary"
                                      className='m-2'
                                    >
                                      Upload text files
                                      <input
                                        type="file"
                                        onChange={handleFileChange}
                                        hidden
                                        multiple
                                      />
                                    </Button>
                                  </Box>
                                  <Button type="submit" variant="contained" color="success">
                                    Submit
                                  </Button>
                                </form>
                                {error && (
                                  <Box mt={2}>
                                    <Alert severity="error">
                                      <pre>{JSON.stringify(error, null, 2)}</pre>
                                    </Alert>
                                  </Box>
                                )}
                                {result && (
                                  <Box mt={2}>
                                    <Typography variant="h6">Results</Typography>
                                    <TableContainer component={Paper} sx={{ maxHeight: 1145 }}>
                                      <Table stickyHeader>
                                        <TableHead>
                                          <TableRow>
                                            <TableCell>Term</TableCell>
                                            {result.tfidf_scores.map((_, index) => (
                                              <TableCell key={index}>Document {index + 1}</TableCell>
                                            ))}
                                          </TableRow>
                                        </TableHead>
                                        <TableBody>
                                          {result.feature_names.map((term, index) => (
                                            <TableRow key={index}>
                                              <TableCell>{term}</TableCell>
                                              {result.tfidf_scores.map((scores, docIndex) => (
                                                <TableCell key={docIndex}>{scores[index].toFixed(3)}</TableCell>
                                              ))}
                                            </TableRow>
                                          ))}
                                        </TableBody>
                                      </Table>
                                    </TableContainer>
                                  </Box>
                                )}
                              </Paper>
                            </Grid>
                          </Grid>
                        </Box>
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

export default TFIDF;
