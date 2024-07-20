import React from 'react';
import { Container, Typography, Card, CardContent, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Sidebar from '../SideBarAi';

const CnnExplanation = () => {
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
                  <li className="breadcrumb-item active" aria-current="page">CNN Theory</li>
                </ol>
              </nav>
            </div>
            <div className="row" id="deleteTableItem">
              <div className="col-md-12">
                <div className="card mb-5">
                  <div className="card-body">
                    <div className="d-flex justify-content-between mb-3">
                      <Container>
                        <Typography variant="h4" gutterBottom className='text-center mt-4'>
                          <strong>Convolutional Neural Networks (CNN): Detailed Explanation</strong>
                        </Typography>
                        <Card variant="outlined" sx={{ mb: 2 }}>
                          <CardContent>
                            <Typography variant="h6" gutterBottom>
                              Overview
                            </Typography>
                            <Typography variant="body1" paragraph>
                              Convolutional Neural Networks (CNNs) are a class of deep learning models specifically designed for analyzing visual data. They are widely used for image and video recognition, medical image analysis, and more. CNNs leverage spatial hierarchies in data through the use of convolutional layers, pooling layers, and fully connected layers.
                            </Typography>
                          </CardContent>
                        </Card>

                        <Accordion>
                          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h6">1. Convolutional Layer</Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography variant="body1" paragraph>
                              <strong>Function:</strong> Applies convolution operations to the input, capturing local patterns such as edges, textures, and shapes.
                            </Typography>
                            <Typography variant="body1" paragraph>
                              <strong>Purpose:</strong> Extracts features from the input image by using filters (kernels) that slide over the input.
                            </Typography>
                            <Typography variant="body1" paragraph>
                              <strong>Example:</strong> Detecting vertical edges in an image using a filter that highlights changes in pixel intensity.
                            </Typography>
                          </AccordionDetails>
                        </Accordion>

                        <Accordion>
                          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h6">2. Activation Function</Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography variant="body1" paragraph>
                              <strong>Function:</strong> Introduces non-linearity into the model, allowing it to learn complex patterns.
                            </Typography>
                            <Typography variant="body1" paragraph>
                              <strong>Common Functions:</strong> ReLU (Rectified Linear Unit), Sigmoid, Tanh.
                            </Typography>
                            <Typography variant="body1" paragraph>
                              <strong>Example:</strong> Using ReLU, which replaces all negative pixel values with zero, enabling faster and more efficient training.
                            </Typography>
                          </AccordionDetails>
                        </Accordion>

                        <Accordion>
                          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h6">3. Pooling Layer</Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography variant="body1" paragraph>
                              <strong>Function:</strong> Reduces the spatial dimensions (width and height) of the input, retaining important information while reducing computation.
                            </Typography>
                            <Typography variant="body1" paragraph>
                              <strong>Types:</strong> Max pooling (takes the maximum value), Average pooling (takes the average value).
                            </Typography>
                            <Typography variant="body1" paragraph>
                              <strong>Example:</strong> Applying 2x2 max pooling to reduce a 4x4 feature map to a 2x2 feature map.
                            </Typography>
                          </AccordionDetails>
                        </Accordion>

                        <Accordion>
                          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h6">4. Fully Connected Layer</Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography variant="body1" paragraph>
                              <strong>Function:</strong> Connects every neuron in one layer to every neuron in the next layer, enabling the model to learn complex representations.
                            </Typography>
                            <Typography variant="body1" paragraph>
                              <strong>Purpose:</strong> Combines features extracted by convolutional and pooling layers to make predictions.
                            </Typography>
                            <Typography variant="body1" paragraph>
                              <strong>Example:</strong> A final fully connected layer with softmax activation to classify an image into one of 10 categories.
                              </Typography>
                            </AccordionDetails>
                          </Accordion>
                      

                        <Accordion>
                          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h6">5. Dropout</Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography variant="body1" paragraph>
                              <strong>Function:</strong> Randomly sets a fraction of input units to zero at each update during training, preventing overfitting.
                            </Typography>
                            <Typography variant="body1" paragraph>
                              <strong>Purpose:</strong> Improves model generalization by reducing reliance on specific neurons.
                            </Typography>
                            <Typography variant="body1" paragraph>
                              <strong>Example:</strong> Applying a 50% dropout rate during training to a fully connected layer.
                            </Typography>
                          </AccordionDetails>
                        </Accordion>

                        <Accordion>
                          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h6">6. Batch Normalization</Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography variant="body1" paragraph>
                              <strong>Function:</strong> Normalizes the inputs of each layer to improve training stability and performance.
                            </Typography>
                            <Typography variant="body1" paragraph>
                              <strong>Purpose:</strong> Accelerates training and helps mitigate issues with vanishing/exploding gradients.
                            </Typography>
                            <Typography variant="body1" paragraph>
                              <strong>Example:</strong> Applying batch normalization after a convolutional layer to standardize activations.
                            </Typography>
                          </AccordionDetails>
                        </Accordion>

                        <Accordion>
                          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h6">7. Strides</Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography variant="body1" paragraph>
                              <strong>Definition:</strong> Strides refer to the step size with which the filter moves across the input image.
                            </Typography>
                            <Typography variant="body1" paragraph>
                              <strong>Purpose:</strong> Controls the spatial dimension of the output. Larger strides reduce the output size.
                            </Typography>
                            <Typography variant="body1" paragraph>
                              <strong>Example:</strong> Using a stride of 2 with a 3x3 filter to downsample the input image.
                            </Typography>
                          </AccordionDetails>
                        </Accordion>

                        <Accordion>
                          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h6">8. Padding</Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography variant="body1" paragraph>
                              <strong>Function:</strong> Adds extra pixels around the input image to control the spatial size of the output.
                            </Typography>
                            <Typography variant="body1" paragraph>
                              <strong>Types:</strong> Valid (no padding), Same (padding to maintain size).
                            </Typography>
                            <Typography variant="body1" paragraph>
                              <strong>Example:</strong> Using same padding to preserve the input dimensions after convolution.
                            </Typography>
                          </AccordionDetails>
                        </Accordion>

                        <Accordion>
                          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h6">9. Flattening</Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography variant="body1" paragraph>
                              <strong>Function:</strong> Converts a multidimensional tensor into a single-dimensional vector.
                            </Typography>
                            <Typography variant="body1" paragraph>
                              <strong>Purpose:</strong> Prepares the data for input to a fully connected layer.
                            </Typography>
                            <Typography variant="body1" paragraph>
                              <strong>Example:</strong> Flattening a 7x7x64 tensor into a 3136-dimensional vector.
                            </Typography>
                          </AccordionDetails>
                        </Accordion>

                        <Accordion>
                          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h6">10. Pooling Types</Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography variant="body1" paragraph>
                              <strong>Max Pooling:</strong> Takes the maximum value from the feature map within a specified window.
                            </Typography>
                            <Typography variant="body1" paragraph>
                              <strong>Average Pooling:</strong> Takes the average value from the feature map within a specified window.
                            </Typography>
                            <Typography variant="body1" paragraph>
                              <strong>Example:</strong> Using max pooling with a 2x2 window to downsample the input.
                            </Typography>
                          </AccordionDetails>
                        </Accordion>

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
};

export default CnnExplanation;
