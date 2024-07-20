import React from 'react';
import { ChakraProvider, Box, Container, Heading, Text, VStack } from '@chakra-ui/react';
import Navbar from "../LandingPage/Navbar";
import Footer from "../LandingPage/Footer";
import Sidebar from './SideBar';

const AdvisionsBusinessProTerms = () => {
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
                            <VStack  align="start">
                              <Heading as="h3" size="lg">Advisions Business Pro Terms and Conditions</Heading>
                              <Text fontSize="lg">Last Updated: May 30, 2024</Text>

                              <Text fontSize="md">
                                These Advisions Business Pro Terms and Conditions (these “Terms”) apply to Customer’s access and use of Advisions Business Pro. All terms not otherwise defined in these Terms will have the meanings ascribed to them in the Master Services Agreement between Advisions and Customer (the “Agreement”).
                              </Text>

                              <Text fontSize="md">
                                Advisions Business Pro is a Service that provides an interactive experience containing hands-on learning labs, workspaces, role paths, and assessments.
                              </Text>

                              <Text fontSize="md">
                                Users may access certain third-party platforms through Advisions Business Pro, which are governed by and subject to separate terms and conditions.
                              </Text>

                              <Text fontSize="md">
                                Customer acknowledges and agrees that: (a) Customer is solely responsible for all content inputted by Customer or its Users in connection with use of Advisions Business Pro (collectively, “Interactive Content”) including on the server instances that provide interactive environments as a part of Advisions Business Pro (“Interactive Sessions”); and (b) Advisions, its Affiliates, or licensors will not preserve, back up, or store the Interactive Content.
                              </Text>

                
                              <Text fontSize="md">
                                The parties agree that the following are incorporated into the Terms of Use. With respect to the Advisions Business Pro Services, Customer shall not, nor permit its Users to:
                              </Text>

                              <VStack  align="start" pl={6}>
                                <Text>1. Provide web, database, or forum access, or engage in cryptocurrency mining, on or through Advisions Business Pro,</Text>
                                <Text>2. Exceed the usage limitations (including, but not limited to, Interactive Session quantity or duration, or User number limitations) applicable to Customer’s use of Advisions Business Pro,</Text>
                                <Text>3. Use or access an Interactive Session in any commercial production environment, or</Text>
                                <Text>4. Use any data or information other than simulated, anonymous, non-personal, non-live data when using Advisions Business Pro.</Text>
                              </VStack>

                              <Text fontSize="md" pt={4}>
                                In addition to the remedies available to Advisions under the Agreement, Advisions may remove any Interactive Content that violates the Terms of Use.
                              </Text>
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

export default AdvisionsBusinessProTerms;
