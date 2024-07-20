// src/RegressionInfo.js

import React from 'react';
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails, Card, CardContent } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Sidebar from '../SideBarMl';

const RegressionInfo = () => {
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
                <li className="breadcrumb-item active" aria-current="page">Regression Theory</li>
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
     <strong>REGRESSION</strong>   
      </Typography>
      <Card variant="outlined" sx={{ mb: 2 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            OverView
          </Typography>
          <Typography variant="body1" paragraph>
          Regression analysis is a statistical method used to model the relationship between a dependent variable and one or more independent variables. It aims to predict the value of the dependent variable based on the values of the independent variables. Regression models estimate the strength and direction of these relationships, typically through techniques like linear regression, where a linear equation is fitted to the data points. This allows for making predictions and understanding the impact of independent variables on the dependent variable. Regression is widely applied in various fields, from economics and social sciences to machine learning and predictive analytics in business and engineering.
          </Typography>
        </CardContent>
      </Card>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Working Principles of Regression</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" paragraph>
            <b>Data Collection:</b> Gather a dataset that includes features (input variables) and the target variable (continuous values). For example, in a house price prediction system, features could include the number of bedrooms, size of the house, location, etc., and the target variable would be the price.
          </Typography>
          <Typography variant="body1" paragraph>
            <b>Data Preprocessing:</b>
            <ul>
              <li>Cleaning: Handle missing values, remove duplicates, and correct errors.</li>
              <li>Normalization/Standardization: Scale the features to ensure that they contribute equally to the model.</li>
              <li>Encoding: Convert categorical variables into numerical values using techniques like one-hot encoding.</li>
            </ul>
          </Typography>
          <Typography variant="body1" paragraph>
            <b>Feature Selection/Extraction:</b> Select the most relevant features or create new features that can help improve the model’s performance.
          </Typography>
          <Typography variant="body1" paragraph>
            <b>Model Selection:</b> Choose a suitable regression algorithm. Common algorithms include:
            <ul>
              <li>Linear Regression: Models the relationship between the dependent variable and one or more independent variables using a linear equation.</li>
              <li>Polynomial Regression: Extends linear regression by fitting a polynomial equation to the data.</li>
              <li>Decision Trees: Used for both classification and regression tasks.</li>
              <li>Random Forest: An ensemble method that improves the performance of decision trees.</li>
              <li>Support Vector Regression (SVR): An extension of SVM for regression tasks.</li>
              <li>Neural Networks: Deep learning models for complex regression tasks.</li>
            </ul>
          </Typography>
          <Typography variant="body1" paragraph>
            <b>Training the Model:</b> Use the training data to teach the model to map input features to the target values. This involves finding the optimal parameters that minimize the error.
          </Typography>
          <Typography variant="body1" paragraph>
            <b>Evaluation:</b> Assess the model’s performance using metrics such as:
            <ul>
              <li>Mean Absolute Error (MAE): The average of the absolute errors between predicted and actual values.</li>
              <li>Mean Squared Error (MSE): The average of the squared errors between predicted and actual values.</li>
              <li>Root Mean Squared Error (RMSE): The square root of the mean squared error.</li>
              <li>R-squared (R²): The proportion of the variance in the dependent variable that is predictable from the independent variables.</li>
            </ul>
          </Typography>
          <Typography variant="body1" paragraph>
            <b>Hyperparameter Tuning:</b> Optimize the model's hyperparameters using techniques like grid search or random search to improve performance.
          </Typography>
          <Typography variant="body1" paragraph>
            <b>Deployment:</b> Deploy the trained model to make predictions on new data.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">When to Use Regression</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" paragraph>
            <ul>
              <li>When the target variable is continuous.</li>
              <li>When the goal is to predict a numerical value based on input features.</li>
              <li>Examples include house price prediction, temperature forecasting, and stock price prediction.</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Why Regression is Important</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" paragraph>
            <ul>
              <li><b>Prediction:</b> Enables the prediction of future values based on historical data.</li>
              <li><b>Decision Making:</b> Assists in making informed decisions by understanding the relationships between variables.</li>
              <li><b>Insights:</b> Provides insights into the relationships between different variables and how they impact the target variable.</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Common Algorithms for Regression</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" paragraph>
            <ul>
              <li><b>Linear Regression:</b> Simple and interpretable, suitable for linear relationships.</li>
              <li><b>Polynomial Regression:</b> Captures non-linear relationships by fitting polynomial equations.</li>
              <li><b>Decision Trees:</b> Handles non-linear relationships and interactions between features.</li>
              <li><b>Random Forest:</b> Reduces overfitting and improves accuracy by averaging multiple decision trees.</li>
              <li><b>Support Vector Regression (SVR):</b> Effective for high-dimensional spaces with clear margins of separation.</li>
              <li><b>Neural Networks:</b> Capable of handling complex non-linear relationships in the data.</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">How Regression Works</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" paragraph>
            <b>Input Features:</b> The model takes input features which are the characteristics or properties of the instances.
          </Typography>
          <Typography variant="body1" paragraph>
            <b>Learning Process:</b> The model learns to map these input features to the target values by adjusting its parameters.
          </Typography>
          <Typography variant="body1" paragraph>
            <b>Prediction:</b> For a new instance, the model uses the learned mapping to predict the continuous value.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Where Regression is Applied</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" paragraph>
            <ul>
              <li><b>House Price Prediction:</b> Estimating the price of a house based on its features.</li>
              <li><b>Temperature Forecasting:</b> Predicting future temperatures based on historical data.</li>
              <li><b>Stock Price Prediction:</b> Forecasting stock prices based on historical trends and features.</li>
              <li><b>Sales Forecasting:</b> Predicting future sales based on past sales data.</li>
              <li><b>Medical Prognosis:</b> Estimating the progression of a disease over time.</li>
            </ul>
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

export default RegressionInfo;
