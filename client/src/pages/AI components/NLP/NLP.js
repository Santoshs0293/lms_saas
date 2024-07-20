import React, { useState } from 'react';
import axios from 'axios';
import Sidebar from '../SideBarAi';
import { Container, TextField, Button, Typography, Card, CardContent, Paper, Tabs, Tab, Box } from '@mui/material';

function NLP() {
  const [inputText, setInputText] = useState('');
  const [result, setResult] = useState(null);
  const [activeStep, setActiveStep] = useState('tokens');
  const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL_PYTHON });

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('/process-text', 
        { sentence: inputText },
        { headers: { Authorization: "Bearer " + localStorage.getItem("auth_token") } }
      );
      setResult(response.data);
      setActiveStep('tokens');
    } catch (error) {
      console.error("Error processing text:", error);
    }
  };

  const handleTabChange = (event, newValue) => {
    setActiveStep(newValue);
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
    <Container>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>Natural Language Processing (NLP)</Typography>
        <Typography paragraph>
          <strong>Theoretical Explanation:</strong> NLP is a field of artificial intelligence that focuses on the interaction between computers and humans through natural language. It involves the application of computational techniques to analyze and synthesize natural language and speech.
        </Typography>
        <Typography paragraph>
          <strong>Type of Input Data:</strong> A sentence or a paragraph of text that will be processed to extract meaningful information.
        </Typography>
        <Typography paragraph>
          <strong>Output Explanation:</strong> The output includes tokens, filtered tokens, lemmatized tokens, bag of words, and vocabulary extracted from the input text.
        </Typography>
        <form onSubmit={handleSubmit} style={styles.form}>
          <TextField
            label="Enter a sentence"
            variant="outlined"
            fullWidth
            value={inputText}
            onChange={handleInputChange}
            style={styles.input}
          />
          <Button type="submit" variant="contained" color="primary" style={styles.button}>Process</Button>
        </form>
        {result && (
          <Paper style={styles.results}>
            <Tabs value={activeStep} onChange={handleTabChange} indicatorColor="primary" textColor="primary" centered>
              <Tab label="Tokens" value="tokens" />
              <Tab label="Filtered Tokens" value="filteredTokens" />
              <Tab label="Lemmatized Tokens" value="lemmatizedTokens" />
              <Tab label="Bag of Words" value="bagOfWords" />
              <Tab label="Vocabulary" value="vocabulary" />
            </Tabs>
            <Box p={3}>
              {activeStep === 'tokens' && (
                <Typography paragraph><strong>Tokens:</strong> {result.tokens.join(', ')}</Typography>
              )}
              {activeStep === 'filteredTokens' && (
                <Typography paragraph><strong>Filtered Tokens:</strong> {result.filtered_tokens.join(', ')}</Typography>
              )}
              {activeStep === 'lemmatizedTokens' && (
                <Typography paragraph><strong>Lemmatized Tokens:</strong> {result.lemmatized_tokens.join(', ')}</Typography>
              )}
              {activeStep === 'bagOfWords' && (
                <Typography paragraph><strong>Bag of Words:</strong> {JSON.stringify(result.bag_of_words)}</Typography>
              )}
              {activeStep === 'vocabulary' && (
                <Typography paragraph><strong>Vocabulary:</strong> {JSON.stringify(result.vocabulary)}</Typography>
              )}
            </Box>
          </Paper>
        )}
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

const styles = {
  form: {
    marginBottom: '20px',
  },
  input: {
    marginBottom: '10px',
  },
  button: {
    marginTop: '10px',
  },
  results: {
    marginTop: '20px',
  },
};

export default NLP;
