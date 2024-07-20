import React, { useState } from 'react';
import axios from 'axios';
import Sidebar from "../SideBarAi";
import {
  Container,
  Typography,
  Button,
  TextField,
  Input,
  Card,
  CardContent,
  CardActions,
  Alert,
  AlertTitle,
  CircularProgress,
  Stepper,
  Step,
  StepButton,
  Box
} from '@mui/material';
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
  activeButton: {
    margin: '5px',
  },
  error: {
    marginTop: '20px',
  },
  results: {
    marginTop: '20px',
  },
  buttonsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  outputContainer: {
    marginTop: '20px',
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
  },
}));

function CNN() {
  const classes = useStyles();
  const [file, setFile] = useState(null);
  const [imageURL, setImageURL] = useState(null);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [activeStep, setActiveStep] = useState('');
  const [loading, setLoading] = useState(false);
  const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL_PYTHON });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
    setImageURL(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    setLoading(true);
    try {
      const response = await axiosInstance.post('/predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: "Bearer " + localStorage.getItem("auth_token"),
        }
      });
      setResult(response.data);
      setActiveStep('conv2d');
      setError(null);
    } catch (error) {
      console.error("Error processing image:", error);
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
                    <div className="d-flex justify-content-between mb-3">
                      <Container className={classes.container}>
                        <Typography variant="h4" gutterBottom>
                          Convolutional Neural Networks (CNN)
                        </Typography>
                        <Typography variant="body1" paragraph>
                          <strong>Theoretical Explanation:</strong> CNNs are a class of deep learning algorithms used primarily for image recognition and classification. They are designed to automatically and adaptively learn spatial hierarchies of features from input images.
                        </Typography>
                        <Typography variant="body1" paragraph>
                          <strong>Type of Input Data:</strong> An image file that will be processed by the CNN to classify the content of the image.
                        </Typography>
                        <Typography variant="body1" paragraph>
                          <strong>Output Explanation:</strong> The output includes the classification result and intermediate outputs from different layers of the CNN. Below are the detailed explanations of the outputs:
                        </Typography>
                        <ul>
                          <li><Typography variant="body2"><strong>Conv1 Output:</strong> This contains the activation values from the first convolutional layer. It highlights low-level features such as edges and textures in the image.</Typography></li>
                          <li><Typography variant="body2"><strong>Pool1 Output:</strong> This contains the activation values after the first max pooling layer, which reduces the spatial dimensions and retains important information.</Typography></li>
                          <li><Typography variant="body2"><strong>Conv2 Output:</strong> This contains the activation values from the second convolutional layer, capturing more complex features such as corners and shapes.</Typography></li>
                          <li><Typography variant="body2"><strong>Pool2 Output:</strong> This contains the activation values after the second max pooling layer, further reducing the spatial dimensions.</Typography></li>
                          <li><Typography variant="body2"><strong>Conv3 Output:</strong> This contains the activation values from the third convolutional layer, capturing even more complex features and patterns.</Typography></li>
                          <li><Typography variant="body2"><strong>Flatten Output:</strong> This is the flattened representation of the feature maps, converting the 2D matrix data to a 1D vector.</Typography></li>
                          <li><Typography variant="body2"><strong>Dense1 Output:</strong> This contains the activation values from the first fully connected layer, combining all the features learned by the convolutional layers.</Typography></li>
                          <li><Typography variant="body2"><strong>Final Prediction:</strong> This is the output of the final layer, containing the probabilities for each class. The class with the highest probability is the predicted class for the input image.</Typography></li>
                        </ul>
                        <form onSubmit={handleSubmit} className={classes.form}>
                          <TextField
                            variant="outlined"
                            type="file"
                            onChange={handleFileChange}
                            fullWidth
                            margin="normal"
                            InputLabelProps={{ shrink: true }}
                            className={classes.input}
                          />
                         {imageURL && (
  <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
    <img src={imageURL} alt="Uploaded file preview" className={classes.image} />
  </Box>
)}

                          <br/>
                          <Button
                            type="submit"
                            variant="contained"
                            className = "mt-4"
                          >
                            {loading ? <CircularProgress size={24} /> : 'Classify'}
                          </Button>
                        </form>
                        {error && (
                          <Alert severity="error" className={classes.error}>
                            <AlertTitle>Error</AlertTitle>
                            {typeof error === 'string' ? error : JSON.stringify(error, null, 2)}
                          </Alert>
                        )}
                        {result && (
                          <div className={classes.results}>
                            <Typography variant="h5">Classification Result</Typography>
                            <Stepper nonLinear alternativeLabel>
                              {Object.keys(result).map((layer, index) => (
                                <Step key={index} active={activeStep === layer}>
                                  <StepButton onClick={() => setActiveStep(layer)}>
                                    {layer}
                                  </StepButton>
                                </Step>
                              ))}
                            </Stepper>
                            <Card className={classes.outputContainer}>
                              <CardContent>
                                {result[activeStep] && typeof result[activeStep] === 'string' ? (
                                  <img src={`data:image/png;base64,${result[activeStep]}`} alt={`${activeStep} Output`} className={classes.image} />
                                ) : (
                                  <pre>{JSON.stringify(result[activeStep], null, 2)}</pre>
                                )}
                              </CardContent>
                            </Card>
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
    </div>
  );
}

export default CNN;
