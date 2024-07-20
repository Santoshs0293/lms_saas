import React from 'react';
import { ChakraProvider, Box, Container, Heading, Text, VStack, List, ListItem } from '@chakra-ui/react';
import Navbar from "../LandingPage/Navbar";
import Footer from "../LandingPage/Footer";
import Sidebar from './SideBar';

const AffiliateTerms = () => {
  return (
    <>
      <Navbar />
      <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header" id="appContent">
        <div className="app-main">
          <Sidebar />
          <div className="app-main-outer">
            <div className="app-main-inner">
              <div className="row" id="deleteTableItem">
                <div className="col-md-12">
                  <div className="main-card card d-flex h-100 flex-column">
                    <div className="card-body">
                      <ChakraProvider>
                        <Box>
                          <Container maxW="container.lg" py={10}>
                            <VStack align="start">
                              <Heading as="h2" size="lg">Instructor Terms</Heading>
                              <Text fontSize="md">Last Updated: May 30, 2024</Text>

                            


                              <p>Welcome to Advisions! These Instructor Terms ("Terms") govern your use of Advisions' Learning Management System ("LMS") as an instructor, including its website, services, and all related tools and features provided by Advisions ("we," "us," "our"). Please read these Terms carefully before accessing or using our LMS as an instructor.</p>

<p>By accessing or using the LMS as an instructor, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms or our Privacy Policy, you may not use our LMS as an instructor.</p>

<h5>1. Becoming an Instructor</h5>

<p>
  <strong>(a) Application Process:</strong> To become an instructor on our LMS, you must complete an application. We reserve the right to accept or reject your application at our sole discretion.
</p>

<p>
  <strong>(b) Approval:</strong> If we approve your application, you will receive an email notification confirming your status as an instructor on our LMS.
</p>

<h5>2. Responsibilities of Instructors</h5>

<p>
  <strong>(a) Course Content:</strong> You are solely responsible for the content of the courses you create and upload to our LMS. You represent and warrant that your courses do not violate the rights of any third party, including copyright, trademark, privacy, or other personal or proprietary rights.
</p>

<p>
  <strong>(b) Course Quality:</strong> You agree to create high-quality courses that meet the standards and guidelines provided by Advisions.
</p>

<p>
  <strong>(c) Copyright Compliance:</strong> You agree to comply with all applicable copyright laws. You must have the necessary rights, licenses, consents, and permissions to use all content in your courses.
</p>

<p>
  <strong>(d) Communication:</strong> You agree to promptly respond to communications from students and Advisions regarding your courses and any issues that may arise.
</p>

<h5>3. Revenue Share and Payments</h5>

<p>
  <strong>(a) Revenue Share:</strong> You will earn revenue share according to the terms and conditions set forth in the Instructor Revenue Share Agreement.
</p>

<p>
  <strong>(b) Payment:</strong> Payments will be made according to the payment schedule and method specified in the Instructor Revenue Share Agreement.
</p>

<h5>4. Course Pricing</h5>

<p>
  <strong>(a) Pricing:</strong> You have the ability to set the price of your courses, subject to Advisions' pricing policies.
</p>

<h5>5. License to Advisions</h5>

<p>
  <strong>(a) License:</strong> You grant Advisions a non-exclusive, royalty-free, worldwide, transferable license to use, reproduce, distribute, and publicly display the courses you create for the purposes of operating and promoting our LMS.
</p>

<h5>6. Termination</h5>

<p>
  <strong>(a) Termination:</strong> Advisions reserves the right to suspend or terminate your instructor account and remove your courses from our LMS at any time, with or without cause.
</p>

<h5>7. Indemnification</h5>

<p>
  <strong>(a) Indemnification:</strong> You agree to indemnify and hold Advisions harmless from any claims, damages, losses, liabilities, and expenses (including reasonable attorneys' fees) arising out of or in connection with your use of our LMS, your courses, or your breach of these Terms.
</p>

<h5>8. Modifications</h5>

<p>
  <strong>(a) Modifications:</strong> Advisions reserves the right to modify these Terms at any time. We will provide notice of any material changes to these Terms.
</p>

<p>
  By using our LMS as an instructor, you agree to these Terms. If you do not agree to these Terms, please do not use our LMS as an instructor.
</p>

                            </VStack>
                          </Container>
                        </Box>
                      </ChakraProvider>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default AffiliateTerms;

