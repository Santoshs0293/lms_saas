
import React from 'react';
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails, Card, CardContent } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Sidebar from '../SideBarMl';


const PCAInfo = () => {
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
      <Typography variant="h4" gutterBottom className='text-center mt-4'>
     <strong> Principal Component Analysis (PCA) </strong>   
      </Typography>
      <Card variant="outlined" sx={{ mb: 2 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Overview
          </Typography>
          <Typography variant="body1" paragraph>
          Principal Component Analysis (PCA) is a statistical technique used to simplify datasets by reducing their dimensions while retaining important information. It transforms correlated variables into a set of linearly uncorrelated ones called principal components. These components are ordered by the amount of variance they explain in the original data, allowing for dimensionality reduction while preserving as much variance as possible. PCA is widely used in exploratory data analysis and feature extraction, aiding in visualizing high-dimensional data and improving the performance of machine learning algorithms by eliminating redundant or noisy features.
          </Typography>
        </CardContent>
      </Card>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Working Principles of PCA</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" paragraph>
            <b>Data Collection:</b> Gather a dataset that includes features (input variables). PCA does not require target labels. For example, in image processing, features could include pixel values.
          </Typography>
          <Typography variant="body1" paragraph>
            <b>Data Preprocessing:</b>
            <ul>
              <li>Cleaning: Handle missing values, remove duplicates, and correct errors.</li>
              <li>Normalization/Standardization: Scale the features to have zero mean and unit variance, as PCA is sensitive to the scale of the data.</li>
            </ul>
          </Typography>
          <Typography variant="body1" paragraph>
            <b>Covariance Matrix Computation:</b> Calculate the covariance matrix of the standardized features to understand how the features vary with respect to each other.
          </Typography>
          <Typography variant="body1" paragraph>
            <b>Eigenvalue and Eigenvector Calculation:</b> Compute the eigenvalues and eigenvectors of the covariance matrix. Eigenvectors determine the direction of the principal components, while eigenvalues determine their magnitude.
          </Typography>
          <Typography variant="body1" paragraph>
            <b>Principal Component Selection:</b> Rank the eigenvectors based on their corresponding eigenvalues in descending order. Select the top k eigenvectors to form a new feature space with k principal components.
          </Typography>
          <Typography variant="body1" paragraph>
            <b>Transformation:</b> Project the original data onto the new feature space formed by the selected principal components. This results in a reduced set of features while retaining most of the data's variance.
          </Typography>
          <Typography variant="body1" paragraph>
            <b>Evaluation:</b> Assess the effectiveness of PCA by measuring the variance explained by the principal components. The explained variance ratio indicates the proportion of the dataset's variance that is captured by each principal component.
          </Typography>
          <Typography variant="body1" paragraph>
            <b>Deployment:</b> Use the transformed features for further analysis or as input to other machine learning models.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">When to Use PCA</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" paragraph>
            <ul>
              <li>When the dataset has a large number of features and dimensionality reduction is needed.</li>
              <li>When the features are highly correlated and you want to remove redundancy.</li>
              <li>Examples include image processing, genome data analysis, and financial data analysis.</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Why PCA is Important</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" paragraph>
            <ul>
              <li><b>Dimensionality Reduction:</b> Reduces the number of features, making the data easier to visualize and analyze.</li>
              <li><b>Noise Reduction:</b> Eliminates noise by focusing on the most important features.</li>
              <li><b>Improved Performance:</b> Enhances the performance of machine learning models by reducing computational complexity.</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Common Steps in PCA</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" paragraph>
            <ul>
              <li>Standardization: Scale the features to have zero mean and unit variance.</li>
              <li>Covariance Matrix Computation: Calculate the covariance matrix of the standardized features.</li>
              <li>Eigenvalue and Eigenvector Calculation: Compute the eigenvalues and eigenvectors of the covariance matrix.</li>
              <li>Principal Component Selection: Select the top k eigenvectors based on their eigenvalues.</li>
              <li>Transformation: Project the original data onto the new feature space formed by the selected principal components.</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">How PCA Works</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" paragraph>
            <b>Input Features:</b> The original features of the dataset.
          </Typography>
          <Typography variant="body1" paragraph>
            <b>Transformation:</b> The original features are transformed into a new set of uncorrelated features (principal components).
          </Typography>
          <Typography variant="body1" paragraph>
            <b>Output Features:</b> The transformed features that capture most of the data's variance with fewer dimensions.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Where PCA is Applied</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" paragraph>
            <ul>
              <li><b>Image Processing:</b> Reducing the number of pixels while retaining the essential information.</li>
              <li><b>Genomics:</b> Analyzing high-dimensional genetic data to identify significant patterns.</li>
              <li><b>Finance:</b> Reducing the complexity of financial datasets for better analysis and prediction.</li>
              <li><b>Marketing:</b> Simplifying customer data to identify key segments and trends.</li>
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

export default PCAInfo;
