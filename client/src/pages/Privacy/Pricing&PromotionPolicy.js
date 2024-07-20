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
                              <Heading as="h2" size="lg">Pricing & Promotional Policy</Heading>
                              <Text fontSize="md">Last Updated: May 30, 2024</Text>

                            

                              <p>
        This Pricing & Promotions Policy ("Policy") governs the pricing and promotional activities on the Advisions Learning Management System ("LMS"). By using our platform, you agree to comply with this Policy.
      </p>

      <p>
        This Policy is incorporated by reference into our Terms of Use and Instructor Terms. Any capitalized terms that aren’t defined in this Policy are defined as specified in the Terms of Use or Instructor Terms.
      </p>

      <h5>1. Course Pricing</h5>

      <p>
        <strong>(a) Instructor Control:</strong> Instructors have the authority to set the price of their courses, adhering to Advisions' pricing guidelines.
      </p>

      <p>
        <strong>(b) Pricing Guidelines:</strong> Courses must be reasonably priced and reflect the value offered to students. Advisions reserves the right to adjust the pricing of courses that do not comply with our guidelines.
      </p>

      <h5>2. Promotions and Discounts</h5>

      <p>
        <strong>(a) Promotional Programs:</strong> Advisions offers promotional programs to increase course revenue potential. Instructors can opt into these programs through their account settings.
      </p>

      <p>
        <strong>(b) Coupon Codes:</strong> Instructors may create coupon codes for their courses, subject to Advisions' policies. Coupon codes must be transparent and not misleading.
      </p>

      <h5>3. Revenue Share</h5>

      <p>
        <strong>(a) Instructor Revenue:</strong> Instructors earn revenue share as per the terms and conditions set forth in the Instructor Revenue Share Agreement.
      </p>

      <h5>4. Course Bundling and Packages</h5>

      <p>
        <strong>(a) Bundling:</strong> Instructors may bundle courses together into packages and offer them at a discounted rate, provided the bundled price reflects a discount compared to individual course prices.
      </p>

      <h5>5. Pricing Transparency</h5>

      <p>
        <strong>(a) Transparent Pricing:</strong> All prices listed on the Advisions LMS must be clear and accurate. There should be no hidden fees or misleading information regarding course pricing.
      </p>

      <h5>6. Modifications</h5>

      <p>
        <strong>(a) Policy Updates:</strong> Advisions reserves the right to modify this Policy at any time. We will provide notice of any material changes to this Policy.
      </p>

      <p>
        By using our LMS, you agree to comply with this Pricing & Promotions Policy. If you do not agree to this Policy, please do not use our LMS.
      </p>

      <p>
        This Pricing & Promotions Policy was last updated on [Date]. For any questions regarding this Policy, please contact us at [Contact Email].
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

