import React, { useState } from 'react';
import axios from 'axios';
import Sidebar from '../SideBarAi';
import { Box, Button, Container, TextField, Typography, Card, CardContent, CardMedia, Alert } from '@mui/material';

function SpeciesIdentifier() {
  const [file, setFile] = useState(null);
  const [fileURL, setFileURL] = useState(null);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL_PYTHON });

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setFileURL(URL.createObjectURL(selectedFile));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axiosInstance.post('/predict-species', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: "Bearer " + localStorage.getItem("auth_token"),
        }
      });
      setResult(response.data);
      setError(null);
    } catch (error) {
      console.error("Error identifying species:", error);
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
                    <Container maxWidth="xl">
                      <Box sx={{ mt: 4, mb: 4 }}>
                        <Typography variant="h4" gutterBottom>Species Identifier</Typography>
                        <Card sx={{ mb: 4 }}>
                          <CardContent>
                            <form onSubmit={handleSubmit}>
                              <TextField
                                variant="outlined"
                                fullWidth
                                type="file"
                                onChange={handleFileChange}
                                sx={{ mb: 2 }}
                              />
                              <Button type="submit" variant="contained" color="primary">Identify Species</Button>
                            </form>
                          </CardContent>
                        </Card>

                        {fileURL && (
                          <Card sx={{ mb: 4 }}>
                            <CardContent>
                              <Typography variant="h6">Uploaded Image</Typography>
                              <CardMedia
                                component="img"
                                height="300"
                                image={fileURL}
                                alt="Uploaded"
                              />
                            </CardContent>
                          </Card>
                        )}

                        {error && (
                          <Alert severity="error" sx={{ mb: 4 }}>
                            <Typography variant="h6">Error</Typography>
                            <pre>{JSON.stringify(error, null, 2)}</pre>
                          </Alert>
                        )}

                        {result && (
                          <Card sx={{ mb: 4 }}>
                            <CardContent>
                              <Typography variant="h6">Identification Results</Typography>
                              <ul>
                                {result.map((prediction, index) => (
                                  <li key={index}>
                                    {prediction.species} ({(prediction.probability * 100).toFixed(2)}%)
                                  </li>
                                ))}
                              </ul>
                            </CardContent>
                          </Card>
                        )}

                        <Card>
                          <CardContent>
                            <Typography variant="h6">Understanding the Model Layers</Typography>
                            {layerExplanations.map((layer, index) => (
                              <Box key={index} sx={{ mb: 3 }}>
                                <Typography variant="h6">{layer.title}</Typography>
                                <Typography paragraph>{layer.purpose}</Typography>
                                <Typography paragraph>{layer.process}</Typography>
                              </Box>
                            ))}
                          </CardContent>
                        </Card>
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
  );
}

const layerExplanations = [
  {
    title: "1. Input Layer",
    purpose: "Purpose: The input layer receives the image data.",
    process: "Process: The image is resized to 224x224 pixels and preprocessed to match the format required by the model."
  },
  {
    title: "2. Convolutional Layers (Conv Layers)",
    purpose: "Purpose: These layers apply filters to the input image to create feature maps that detect various features such as edges, textures, and patterns.",
    process: "Process: Conv1: The first convolutional layer applies 64 filters to the input image, each of size 3x3, creating 64 feature maps. Conv2: Subsequent convolutional layers apply more filters, increasing in number as we go deeper into the network (e.g., 128 filters, then 256 filters, etc.). ReLU Activation: After each convolution operation, a ReLU (Rectified Linear Unit) activation function is applied to introduce non-linearity, helping the network learn more complex patterns."
  },
  {
    title: "3. Pooling Layers",
    purpose: "Purpose: Pooling layers reduce the spatial dimensions (width and height) of the feature maps, retaining the most important information and reducing computational load.",
    process: "Process: Max Pooling: These layers take the maximum value from a window (usually 2x2) of the feature map. This down-sampling helps in making the model invariant to small translations in the input image."
  },
  {
    title: "4. Fully Connected Layers (Dense Layers)",
    purpose: "Purpose: These layers are used at the end of the network to make final predictions based on the features extracted by the convolutional and pooling layers.",
    process: "Process: Flattening: The final set of feature maps are flattened into a single vector. Dense1: This vector is passed through one or more dense (fully connected) layers. Each neuron in a dense layer is connected to every neuron in the previous layer. Output Layer: The last dense layer produces the final output, which in the case of the model is a probability distribution over the 1000 classes in ImageNet."
  }
];

export default SpeciesIdentifier;
