import React from 'react';
import Sidebar from "../SideBarAi";
import { Breadcrumbs, Card, CardContent, Container, Link, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const NlpExplanation = () => {
  return (
    <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header" id="appContent">
      <div className="app-main">
        <Sidebar />
        <div className="app-main-outer">
          <div className="app-main-inner">
            <div className="page-title-actions px-3 d-flex">
              <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" href="/">
                  Dashboard
                </Link>
                <Typography color="textPrimary">NLP Theory</Typography>
              </Breadcrumbs>
            </div>
            <br/>
            <Container maxWidth="xl" mt={4}>
              <Card sx={{ mb: 5 }}>
                <CardContent>
                  <Typography variant="h4" gutterBottom className='text-center mt-4'>
                  <strong>Natural Language Processing (NLP): Detailed Explanation</strong>  
                  </Typography>
                  <Card variant="outlined" sx={{ mb: 2 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Overview
          </Typography>
          <Typography variant="body1" paragraph>
          <strong>Natural Language Processing (NLP)</strong> is a field of artificial intelligence that focuses on the interaction between computers and humans through natural language. The ultimate goal of NLP is to enable computers to understand, interpret, and respond to human language in a way that is both meaningful and useful.
          </Typography>
        </CardContent>
      </Card>


                  <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography variant="h6">Key Concepts in NLP</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography variant="h6">1. Tokenization</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography paragraph>
                            <strong>Function</strong>: Splits text into smaller units called tokens, which can be words, phrases, or characters.<br />
                            <strong>Purpose</strong>: Facilitates further processing and analysis by breaking down the text into manageable pieces.<br />
                            <strong>Example</strong>: "Hello, world!" - ["Hello", ",", "world", "!"]
                          </Typography>
                        </AccordionDetails>
                      </Accordion>

                      <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography variant="h6">2. Stop Word Removal</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography paragraph>
                            <strong>Function</strong>: Removes common words that do not contribute significant meaning to the text.<br />
                            <strong>Purpose</strong>: Reduces the dimensionality of the text data and focuses on more meaningful words.<br />
                            <strong>Example</strong>: "This is a sample sentence." - ["sample", "sentence"]
                          </Typography>
                        </AccordionDetails>
                      </Accordion>

                      <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography variant="h6">3. Stemming and Lemmatization</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography paragraph>
                            <strong>Stemming</strong>:<br />
                            <strong>Function</strong>: Reduces words to their root form by removing suffixes.<br />
                            <strong>Example</strong>: "running" - "run"
                          </Typography>
                          <Typography paragraph>
                            <strong>Lemmatization</strong>:<br />
                            <strong>Function</strong>: Reduces words to their base or dictionary form.<br />
                            <strong>Example</strong>: "better" - "good"
                          </Typography>
                        </AccordionDetails>
                      </Accordion>

                      <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography variant="h6">4. Part-of-Speech Tagging</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography paragraph>
                            <strong>Function</strong>: Assigns parts of speech (e.g., noun, verb, adjective) to each token in the text.<br />
                            <strong>Purpose</strong>: Helps in understanding the grammatical structure and meaning of the text.<br />
                            <strong>Example</strong>: "He is running." - [("He", "PRON"), ("is", "VERB"), ("running", "VERB")]
                          </Typography>
                        </AccordionDetails>
                      </Accordion>

                      <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography variant="h6">5. Named Entity Recognition (NER)</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography paragraph>
                            <strong>Function</strong>: Identifies and classifies named entities (e.g., person names, organizations, locations) in the text.<br />
                            <strong>Purpose</strong>: Extracts valuable information and insights from the text.<br />
                            <strong>Example</strong>: "Barack Obama was the 44th President of the United States." - [("Barack Obama", "PERSON"), ("United States", "LOCATION")]
                          </Typography>
                        </AccordionDetails>
                      </Accordion>

                      <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography variant="h6">6. Syntax Parsing</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography paragraph>
                            <strong>Function</strong>: Analyzes the grammatical structure of a sentence and identifies the relationships between words.<br />
                            <strong>Types</strong>:<br />
                            - <strong>Dependency Parsing</strong>: Identifies dependencies between words.<br />
                            - <strong>Constituency Parsing</strong>: Breaks down the sentence into sub-phrases or constituents.<br />
                            <strong>Purpose</strong>: Facilitates deeper understanding of the sentence structure and meaning.
                          </Typography>
                        </AccordionDetails>
                      </Accordion>

                      <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography variant="h6">7. Sentiment Analysis</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography paragraph>
                            <strong>Function</strong>: Determines the sentiment or emotion expressed in the text (e.g., positive, negative, neutral).<br />
                            <strong>Purpose</strong>: Analyzes opinions, reviews, and social media content to understand public sentiment.<br />
                            <strong>Example</strong>: "I love this product!" - Positive
                          </Typography>
                        </AccordionDetails>
                      </Accordion>

                      <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography variant="h6">8. Machine Translation</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography paragraph>
                            <strong>Function</strong>: Translates text from one language to another.<br />
                            <strong>Purpose</strong>: Enables cross-lingual communication and access to information in different languages.<br />
                            <strong>Example</strong>: "Hello" - "Hola" (English to Spanish)
                          </Typography>
                        </AccordionDetails>
                      </Accordion>

                      <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography variant="h6">9. Text Summarization</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography paragraph>
                            <strong>Function</strong>: Generates a concise summary of a larger text document.<br />
                            <strong>Types</strong>:<br />
                            - <strong>Extractive Summarization</strong>: Selects key sentences or phrases from the original text.<br />
                            - <strong>Abstractive Summarization</strong>: Generates new sentences that convey the main ideas of the original text.<br />
                            <strong>Purpose</strong>: Provides a quick overview of the main points in a lengthy document.
                          </Typography>
                        </AccordionDetails>
                      </Accordion>

                      <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography variant="h6">10. Word Embeddings</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography paragraph>
                            <strong>Function</strong>: Represents words as dense vectors in a continuous vector space.<br />
                            <strong>Purpose</strong>: Captures semantic relationships between words and improves performance in various NLP tasks.<br />
                            <strong>Examples</strong>: Word2Vec, GloVe, FastText
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography variant="h6">How NLP Works</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography component="ol" gutterBottom>
                        <li><strong>Data Collection</strong>: Gather text data from various sources such as books, articles, social media, etc.</li>
                        <li><strong>Preprocessing</strong>: Clean and preprocess the text data (e.g., tokenization, stop word removal, stemming/lemmatization).</li>
                        <li><strong>Feature Extraction</strong>: Extract relevant features from the text data (e.g., word embeddings).</li>
                        <li><strong>Model Building</strong>: Train machine learning or deep learning models on the processed data.</li>
                        <li><strong>Evaluation</strong>: Evaluate the performance of the models using appropriate metrics.</li>
                        <li><strong>Deployment</strong>: Deploy the trained models for real-world applications (e.g., chatbots, sentiment analysis tools).</li>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography variant="h6">When to Use NLP</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography paragraph>
                        - When analyzing and processing large volumes of text data.<br />
                        - In tasks that require understanding and interpreting human language.<br />
                        - Examples include sentiment analysis, machine translation, information retrieval, and text summarization.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography variant="h6">Why NLP is Important</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography paragraph>
                        - <strong>Automates Text Analysis</strong>: Automates the extraction of insights from large volumes of text data.<br />
                        - <strong>Improves Communication</strong>: Enables more effective and efficient communication between humans and machines.<br />
                        - <strong>Enhances User Experience</strong>: Powers applications such as virtual assistants, chatbots, and recommendation systems.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography variant="h6">Applications of NLP</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography paragraph>
                        - <strong>Chatbots and Virtual Assistants</strong>: Provide automated customer support and assistance.<br />
                        - <strong>Sentiment Analysis</strong>: Analyze customer feedback, reviews, and social media content.<br />
                        - <strong>Machine Translation</strong>: Translate text between different languages.<br />
                        - <strong>Text Summarization</strong>: Generate summaries of long documents or articles.<br />
                        - <strong>Information Retrieval</strong>: Improve search engines and information retrieval systems.<br />
                        - <strong>Speech Recognition</strong>: Convert spoken language into text.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </CardContent>
              </Card>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NlpExplanation;
