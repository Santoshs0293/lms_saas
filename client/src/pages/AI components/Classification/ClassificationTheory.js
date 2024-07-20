import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container,
  Typography,
  Box,
  Paper,
  Card,
  CardContent,
  Divider,
  CssBaseline,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Sidebar from '../SideBarMl';

function Classification() {
  return (
    <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header" id="appContent">
      <CssBaseline />
      <div className="app-main">
        <Sidebar />
        <div className="app-main-outer">
          <div className="app-main-inner">
            <div className="page-title-actions px-3 d-flex">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="/">Dashboard</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Classification Theory</li>
                </ol>
              </nav>
            </div>
            <div className="row" id="deleteTableItem">
              <div className="col-md-12">
                <div className="card mb-5">
                  <div className="card-body">
                    <Container maxWidth="xl" spacing={2}>
                      <Typography variant="h4" gutterBottom align="center" mt={4}>
                        <strong>Classification: Detailed Explanation</strong>
                      </Typography>
                      <Card variant="outlined" sx={{ mb: 2 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Overview
          </Typography>
          <Typography variant="body1" paragraph>
          Classification is a supervised machine learning technique used to categorize data into predefined classes or labels. It involves training a model on a labeled dataset, where the input features are associated with known class labels. The trained model can then predict the class of new, unseen data based on learned patterns. Common algorithms include decision trees, logistic regression, support vector machines, and neural networks. Classification is widely used in applications such as spam detection, image recognition, medical diagnosis, and sentiment analysis. By accurately assigning class labels, classification aids in decision-making and automating tasks that require distinguishing between different categories.
          </Typography>
        </CardContent>
      </Card>
            

                      <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography variant="h6">Working Principles of Classification</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography component="ul" gutterBottom>
                            <li>Data Collection: Gather a dataset with features (input variables) and target variable (class labels).</li>
                            <li>Data Preprocessing: Handle missing values, remove duplicates, normalize/standardize features, and encode categorical variables.</li>
                            <li>Feature Selection/Extraction: Select relevant features or create new ones to improve model performance.</li>
                            <li>Model Selection: Choose a suitable classification algorithm such as Logistic Regression, Decision Trees, Random Forest, SVM, Naive Bayes, KNN, or Neural Networks.</li>
                            <li>Training the Model: Use the training data to teach the model to map input features to target labels.</li>
                            <li>Evaluation: Assess the model’s performance using metrics like Accuracy, Precision, Recall, and F1 Score.</li>
                            <li>Hyperparameter Tuning: Optimize the model's hyperparameters to improve performance.</li>
                            <li>Deployment: Deploy the trained model to make predictions on new data.</li>
                          </Typography>
                        </AccordionDetails>
                      </Accordion>

                      <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography variant="h6">When to Use Classification</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography paragraph>
                            Classification is used when the target variable is categorical and the goal is to categorize instances into distinct classes. Examples include spam detection, medical diagnosis, image classification, and sentiment analysis.
                          </Typography>
                        </AccordionDetails>
                      </Accordion>

                      <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography variant="h6">Why Classification is Important</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography paragraph>
                            Classification aids decision-making by categorizing data into meaningful classes, automates the sorting process, and provides insights into data structure and variable relationships.
                          </Typography>
                        </AccordionDetails>
                      </Accordion>

                      <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography variant="h6">Common Algorithms for Classification</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography component="ul" gutterBottom>
                            <li>Logistic Regression: Suitable for binary classification with linear decision boundaries.</li>
                            <li>Decision Trees: Easy to interpret and can handle both numerical and categorical data.</li>
                            <li>Random Forest: Reduces overfitting by averaging multiple decision trees.</li>
                            <li>Support Vector Machines (SVM): Effective in high-dimensional spaces with clear margins of separation.</li>
                            <li>Naive Bayes: Assumes feature independence and works well with small datasets.</li>
                            <li>K-Nearest Neighbors (KNN): Simple and intuitive, works well with small datasets.</li>
                            <li>Neural Networks: Capable of handling complex non-linear relationships in the data.</li>
                          </Typography>
                        </AccordionDetails>
                      </Accordion>

                      <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography variant="h6">How Classification Works</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography component="ul" gutterBottom>
                            <li>Input Features: The model takes input features which are the characteristics or properties of the instances.</li>
                            <li>Learning Process: The model learns to map these input features to the target labels by adjusting its parameters.</li>
                            <li>Prediction: For a new instance, the model uses the learned mapping to predict the class label.</li>
                          </Typography>
                        </AccordionDetails>
                      </Accordion>

                      <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography variant="h6">Where Classification is Applied</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography component="ul" gutterBottom>
                            <li>Spam Detection: Classifying emails as spam or not spam.</li>
                            <li>Medical Diagnosis: Identifying the presence of a disease based on symptoms.</li>
                            <li>Image Classification: Categorizing images into different classes, such as identifying animals in pictures.</li>
                            <li>Sentiment Analysis: Determining the sentiment of text data, such as classifying reviews as positive or negative.</li>
                            <li>Fraud Detection: Identifying fraudulent transactions in financial systems.</li>
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
  );
}

export default Classification;
