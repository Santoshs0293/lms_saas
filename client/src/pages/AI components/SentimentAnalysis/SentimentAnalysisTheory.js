import React from 'react';
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Card,
  CardContent
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Sidebar from '../SideBarAi';

const SentimentAnalysisExplanation = () => {
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
                  <li className="breadcrumb-item active" aria-current="page">Sentiment Analysis Theory</li>
                </ol>
              </nav>
            </div>
            <div className="row" id="deleteTableItem">
              <div className="col-md-12">
                <div className="card mb-5">
                  <div className="card-body">
                    <div className="d-flex justify-content-between mb-3">
                      <Container maxWidth="xl" style={{ padding: '20px', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
                        <Typography variant="h4" gutterBottom className='text-center mt-4'>
                       <strong> Sentiment Analysis: Detailed Explanation</strong>  
                        </Typography>

                        <Card variant="outlined" sx={{ mb: 2 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Overview 
          </Typography>
          <Typography variant="body1" paragraph>
          <strong>Sentiment Analysis</strong>, also known as opinion mining, is a field within natural language processing (NLP) that involves determining the sentiment expressed in a piece of text. The sentiment can be classified into categories such as positive, negative, or neutral, and more granular emotions can also be identified, like joy, anger, sadness, etc.
          </Typography>
        </CardContent>
      </Card>



                    
                        <Accordion>
                          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h6">Key Concepts in Sentiment Analysis</Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography variant="subtitle1" gutterBottom>
                              1. Sentiment Classification
                            </Typography>
                            <Typography variant="body1" paragraph>
                              <strong>Function</strong>: Classifies the overall sentiment of a text as positive, negative, or neutral.<br />
                              <strong>Purpose</strong>: Helps in understanding general opinions and trends from a large set of texts.<br />
                              <strong>Example</strong>: "I love this product!" - Positive
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom>
                              2. Aspect-Based Sentiment Analysis
                            </Typography>
                            <Typography variant="body1" paragraph>
                              <strong>Function</strong>: Analyzes sentiments related to specific aspects or features within the text.<br />
                              <strong>Purpose</strong>: Provides more detailed insights by focusing on particular attributes of a product or service.<br />
                              <strong>Example</strong>: "The battery life is great, but the screen resolution is poor." - Battery life: Positive, Screen resolution: Negative
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom>
                              3. Fine-Grained Sentiment Analysis
                            </Typography>
                            <Typography variant="body1" paragraph>
                              <strong>Function</strong>: Assigns sentiment scores on a scale (e.g., 1 to 5 stars).<br />
                              <strong>Purpose</strong>: Offers more nuanced sentiment information compared to simple positive/negative classification.<br />
                              <strong>Example</strong>: "The movie was amazing!" - 5 stars
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom>
                              4. Emotion Detection
                            </Typography>
                            <Typography variant="body1" paragraph>
                              <strong>Function</strong>: Identifies specific emotions expressed in the text (e.g., joy, anger, sadness).<br />
                              <strong>Purpose</strong>: Provides deeper emotional insights beyond basic sentiment.<br />
                              <strong>Example</strong>: "I am so happy with the service!" - Joy
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom>
                              5. Subjectivity/Objectivity Identification
                            </Typography>
                            <Typography variant="body1" paragraph>
                              <strong>Function</strong>: Determines whether a text is subjective (expressing personal opinions) or objective (stating facts).<br />
                              <strong>Purpose</strong>: Helps differentiate between opinion-based and fact-based content.<br />
                              <strong>Example</strong>: "The car is red." - Objective, "I think the car looks great." - Subjective
                            </Typography>
                          </AccordionDetails>
                        </Accordion>

                        <Accordion>
                          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h6">How Sentiment Analysis Works</Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <List>
                              <ListItem>
                                <ListItemText primary="Data Collection: Gather text data from various sources such as reviews, social media, articles, etc." />
                              </ListItem>
                              <ListItem>
                                <ListItemText primary="Preprocessing: Clean and preprocess the text data (e.g., tokenization, stop word removal, stemming/lemmatization)." />
                              </ListItem>
                              <ListItem>
                                <ListItemText primary="Feature Extraction: Extract relevant features from the text data (e.g., n-grams, word embeddings)." />
                              </ListItem>
                              <ListItem>
                                <ListItemText primary="Model Building: Train machine learning or deep learning models on the processed data." />
                              </ListItem>
                              <ListItem>
                                <ListItemText primary="Evaluation: Evaluate the performance of the models using appropriate metrics." />
                              </ListItem>
                              <ListItem>
                                <ListItemText primary="Deployment: Deploy the trained models for real-world applications (e.g., sentiment analysis tools, customer feedback systems)." />
                              </ListItem>
                            </List>
                          </AccordionDetails>
                        </Accordion>

                        <Accordion>
                          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h6">When to Use Sentiment Analysis</Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography variant="body1" paragraph>
                              - When analyzing customer feedback, reviews, and social media content to understand public opinion.<br />
                              - In applications that require monitoring and understanding sentiment trends over time.<br />
                              - Examples include brand monitoring, market research, and customer service analysis.
                            </Typography>
                          </AccordionDetails>
                        </Accordion>

                        <Accordion>
                          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h6">Why Sentiment Analysis is Important</Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography variant="body1" paragraph>
                              - <strong>Understanding Customer Opinions</strong>: Provides insights into customer opinions and experiences.<br />
                              - <strong>Improving Products/Services</strong>: Helps identify strengths and weaknesses of products or services based on customer feedback.<br />
                              - <strong>Monitoring Brand Reputation</strong>: Enables companies to monitor and manage their brand reputation in real-time.<br />
                              - <strong>Enhancing Customer Experience</strong>: Allows businesses to address customer concerns and improve their overall experience.
                            </Typography>
                          </AccordionDetails>
                        </Accordion>

                        <Accordion>
                          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h6">Applications of Sentiment Analysis</Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography variant="body1" paragraph>
                              - <strong>Customer Feedback Analysis</strong>: Analyzes customer reviews and feedback to understand sentiment towards products or services.<br />
                              - <strong>Social Media Monitoring</strong>: Monitors social media platforms to gauge public sentiment towards brands, events, or topics.<br />
                              - <strong>Market Research</strong>: Provides insights into market trends and consumer preferences.<br />
                              - <strong>Reputation Management</strong>: Helps in managing and improving brand reputation based on public sentiment.<br />
                              - <strong>Product Development</strong>: Guides product development and improvement by analyzing customer opinions and suggestions.
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
}

export default SentimentAnalysisExplanation;
