import React from 'react';
import { Container, Typography, Card, CardContent,  Paper, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Sidebar from '../SideBarMl';

const DataVisualizationExplanation = () => {
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
                  <li className="breadcrumb-item active" aria-current="page">Data Visualiazation Theory</li>
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
                           <strong> Data Visualization Techniques: Detailed Explanation </strong>
                          </Typography>
                          <Card variant="outlined" sx={{ mb: 2 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Overview
          </Typography>
          <Typography variant="body1" paragraph>
          Data visualization involves representing data graphically to explore and communicate insights effectively. It transforms complex datasets into visual forms such as charts, graphs, and maps, enhancing understanding and revealing patterns, trends, and relationships that might be obscured in raw data. Visualization techniques range from simple bar charts and scatter plots to sophisticated interactive dashboards and geographic information systems (GIS). By presenting information visually, data visualization helps stakeholders and analysts interpret data quickly, make informed decisions, and communicate findings persuasively. It plays a crucial role in fields like business intelligence, scientific research, and data-driven journalism, facilitating data exploration and storytelling with clarity and impact.
          </Typography>
        </CardContent>
      </Card>

                          <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                              <Typography variant="h6">1. Pie Chart</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <Typography variant="body1" paragraph>
                                <strong>Definition:</strong> A pie chart is a circular graph divided into slices to represent numerical proportions. Each slice's size is proportional to the quantity it represents.
                              </Typography>
                              <Typography variant="body1" paragraph>
                                <strong>Purpose:</strong> Pie charts are used to show how parts of a whole compare to each other. They are effective for illustrating percentages or proportions at a glance.
                              </Typography>
                              <Typography variant="body1" paragraph>
                                <strong>Example:</strong> Visualizing the distribution of sales by different product categories where each slice represents the percentage of total sales for that category.
                              </Typography>
                              <Typography variant="body1" paragraph>
                                <strong>How It Works:</strong> Each slice represents a category or part of the whole dataset. The size of each slice is proportional to the value it represents relative to the total sum of values. Labels or percentages are often included to indicate exact values or proportions for each slice.
                              </Typography>
                            </AccordionDetails>
                          </Accordion>

                          <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                              <Typography variant="h6">2. Bar Chart</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <Typography variant="body1" paragraph>
                                <strong>Definition:</strong> A bar chart uses rectangular bars to represent data values. The length or height of each bar is proportional to the value it represents.
                              </Typography>
                              <Typography variant="body1" paragraph>
                                <strong>Purpose:</strong> Bar charts are ideal for comparing quantities of discrete categories. They visually show relationships and comparisons between different groups of data.
                              </Typography>
                              <Typography variant="body1" paragraph>
                                <strong>Example:</strong> Comparing monthly sales figures for different products where each bar represents sales amount for a specific month.
                              </Typography>
                              <Typography variant="body1" paragraph>
                                <strong>How It Works:</strong> Categories or groups are represented on the horizontal axis (x-axis). Values or quantities are represented on the vertical axis (y-axis). Each bar's height or length corresponds to the value it represents. Bar charts can be vertical (columns) or horizontal (bars).
                              </Typography>
                            </AccordionDetails>
                          </Accordion>

                          <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                              <Typography variant="h6">3. Histogram</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <Typography variant="body1" paragraph>
                                <strong>Definition:</strong> A histogram is a graphical representation of the distribution of numerical data. It consists of bars that show the frequency of data points falling into intervals (bins).
                              </Typography>
                              <Typography variant="body1" paragraph>
                                <strong>Purpose:</strong> Histograms help visualize the distribution of continuous data and identify patterns such as symmetry, skewness, or outliers.
                              </Typography>
                              <Typography variant="body1" paragraph>
                                <strong>Example:</strong> Displaying the distribution of student scores in a class where each bar represents the frequency of scores falling within a score range (interval).
                              </Typography>
                              <Typography variant="body1" paragraph>
                                <strong>How It Works:</strong> Data values are grouped into intervals or bins along the x-axis. The height of each bar represents the frequency or count of data points within that interval. Histograms are used to understand the spread, central tendency, and shape of data distribution.
                              </Typography>
                            </AccordionDetails>
                          </Accordion>

                          <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                              <Typography variant="h6">4. Scatter Plot</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <Typography variant="body1" paragraph>
                                <strong>Definition:</strong> A scatter plot uses Cartesian coordinates to display values for two variables as points. Each point represents a data point with values for both variables.
                              </Typography>
                              <Typography variant="body1" paragraph>
                                <strong>Purpose:</strong> Scatter plots show relationships or correlations between two variables. They help identify patterns and trends in data.
                              </Typography>
                              <Typography variant="body1" paragraph>
                                <strong>Example:</strong> Plotting heights against weights of individuals to examine if there's a correlation between height and weight.
                              </Typography>
                              <Typography variant="body1" paragraph>
                                <strong>How It Works:</strong> Each axis represents a different variable (x-axis and y-axis). Data points are plotted as individual points on the graph. Scatter plots can show clusters, trends (positive or negative correlations), or the absence of relationships between variables.
                              </Typography>
                            </AccordionDetails>
                          </Accordion>

                          <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                              <Typography variant="h6">5. Box Plot (Box-and-Whisker Plot)</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <Typography variant="body1" paragraph>
                                <strong>Definition:</strong> A box plot summarizes the distribution of data points using quartiles (25th, 50th, and 75th percentiles). It provides a visual representation of variability and outliers in data.
                              </Typography>
                              <Typography variant="body1" paragraph>
                                <strong>Purpose:</strong> Box plots help visualize the range, median, and distribution of data. They are useful for comparing distributions across different groups or variables.
                              </Typography>
                              <Typography variant="body1" paragraph>
                                <strong>Example:</strong> Visualizing salary distributions across different departments where each box plot shows the minimum, maximum, median salary, and variability.
                              </Typography>
                              <Typography variant="body1" paragraph>
                                <strong>How It Works:</strong> The box represents the interquartile range (IQR) which spans from the 25th percentile (Q1) to the 75th percentile (Q3). A line or whisker extends from the box to the minimum and maximum values within a certain range (often 1.5 times the IQR). Outliers beyond this range are shown as individual points.
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

export default DataVisualizationExplanation;
