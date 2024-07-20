import React from 'react';
import { ChakraProvider, Box, Container, Heading, Text, VStack, List, ListItem } from '@chakra-ui/react';
import Navbar from "../LandingPage/Navbar";
import Footer from "../LandingPage/Footer";
import Sidebar from './SideBar';

const MasterServices = () => {
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
                            <Heading as="h3" size="lg">Master Services Agreement</Heading>
                              <Text fontSize="lg">Last Updated: May 30, 2024</Text>
                              <Text fontSize="md">
                                This Master Services Agreement (the "Agreement") governs the terms under which Advisions, Inc., a Delaware corporation, and/or its Affiliates (collectively referred to as "Advisions") provides access to its services to the customer ("Customer"). By accepting this Agreement or using the services, the Customer acknowledges having read, understood, and having the authority to enter into this Agreement.
                              </Text>

                              <h4>1. Definitions</h4>
                              <List pl={6}>
                                <ListItem>Affiliate: Any entity that directly or indirectly controls, is controlled by, or is under common control with a party to this Agreement.</ListItem>
                                <ListItem>Customer: The entity entering into this Agreement and/or an Order Form with Advisions.</ListItem>
                                <ListItem>Fees: The payments due from the Customer to Advisions for the Services.</ListItem>
                                <ListItem>Order Form: The document executed by Advisions and the Customer outlining the details of the Service(s) purchased, including number of licenses, fees, subscription period, and billing information.</ListItem>
                                <ListItem>Personal Data: Any data relating to an identifiable natural person provided by the Customer to the Services.</ListItem>
                                <ListItem>Services: The platform that offers access to online courses and related services as specified in the Order Form.</ListItem>
                                <ListItem>Subscription Period: The term of service specified in the Order Form.</ListItem>
                                <ListItem>Users: Employees and contractors authorized by the Customer to use the Services.</ListItem>
                              </List>

                              <h4 >2. Provision of Services</h4>
                              <Text>Advisions agrees to provide the Services to the Customer and its Users according to the terms of this Agreement and the details specified in an Order Form. Affiliates of the Customer wishing to use the Services must enter into their own separate Order Form governed by this Agreement.</Text>

                              <h4 >3. Terms of Use</h4>
                              <List spacing={3} pl={6}>
                                <ListItem>Use the Services unlawfully or infringe others' rights.</ListItem>
                                <ListItem>Copy, distribute, resell, or alter the Services.</ListItem>
                                <ListItem>Input inappropriate content into the Services.</ListItem>
                                <ListItem>Use automated means to access the Services without authorization.</ListItem>
                                <ListItem>Use the Services to develop a competing product.</ListItem>
                                <ListItem>Share login credentials among multiple individuals.</ListItem>
                                <ListItem>Violate the API License Agreement.</ListItem>
                                <ListItem>Use the Services for any purpose other than supplementing learning and training.</ListItem>
                                <ListItem>Allow legally incapable individuals (e.g., under 13 in the U.S.) to use the Services.</ListItem>
                              </List>
                              <Text>
                                The Customer warrants that neither it nor its Users are located in or are residents of any U.S. sanctioned country or listed on any U.S. government restricted parties list.
                              </Text>

                              <h4>4. Violations of Restrictions</h4>
                              <Text>
                                If Advisions determines that the Customer or any User has violated the Terms of Use, Advisions will notify the Customer and allow ten days to remedy the violation. Failure to do so may result in suspension or termination of access to the Services. Advisions may also remove inappropriate content.
                              </Text>

                              <h4 >5. Fees and Payment</h4>
                              <Text>
                              The Fees specified in one or more Order Forms will be paid by the Customer. All fees are payable in Indian
                               Rupees unless otherwise specified on an order form. After the initial subscription period 
                               (as specified in an Order Form), any additional add-on or renewal orders will be subject to 
                               the subscription standard pricing in force at the time of purchase. Advisions retains the right 
                               to impose the greater of 1.5% interest per month or the maximum interest allowed by law in the 
                               event that the customer is behind on payments. The customer will also be responsible for any costs
                                incurred by third parties in the process of collecting payments.
                              </Text>

                              <h4 >6. Taxes</h4>
                              <Text>
                              The fees listed do not include any value-added, use, or withholding taxes, nor any other types 
                              of levies or assessments from the federal, state, local, or international governments. In light of 
                              this Agreement, Customer agrees to assume the burden of and be accountable for paying all taxes,
                               levies, and assessments that may be imposed on Customer; taxes based on Advisions income, gross
                                receipts, business and occupation tax, and employment-related taxes are not included in this. 
                                In the event that tax withholding is necessary, the customer will repay the residual to Advisions 
                                while also providing a withholding tax certificate and the necessary sum to the applicable 
                                governmental body.

                              </Text>

                              <h4>7. Confidentiality</h4>
                              <Text>
                              Each party acknowledges that any code, inventions, know-how, or business, technical, and financial 
                              information disclosed by the disclosing party (the "Disclosing Party") to a party
                               (the "Receiving Party") shall be deemed to be the Disclosing Party's confidential information 
                               (the "Confidential Information"), provided that the information is either clearly marked as
                                confidential at the time of disclosure or should be reasonably understood by the Receiving 
                                Party to be confidential given its nature. Nonetheless, the following types of information 
                                shall not be considered Confidential Information: (i) was already widely known and in the 
                                public domain when the Disclosing Party disclosed it;(ii) becomes generally known and publicly 
                                known after being disclosed to the Receiving Party by the Disclosing Party without the Receiving 
                                Party's action or inaction; (iii) was already in the Receiving Party's possession at the time of
                                 the Disclosure by the Discloser; (iv) is acquired by the Receiving Party from a third party without
                                  the third party's known breach of confidentiality; or (v) is developed independently by the 
                                  Receiving Party without using or referencing the Confidential Information.If required by law, the Receiving Party may disclose the Confidential Information of the Disclosing Party; however, in doing so, it shall make a good faith effort to maintain the Confidential Information's confidentiality and, if allowed by law, give the Discloser advance notice so that the Discloser may obtain protective or other court orders.
                                The Receiving Party agrees, save as otherwise expressly permitted herein or as required to fulfil 
                                its obligations under this agreement, to: (i) not divulge any Confidential Information to third 
                                parties; and (ii) not use Confidential Information for any purpose other than as required to 
                                exercise its rights or fulfil its obligations under this agreement.



                              </Text>

                              <h4>8. Personal Data Processing</h4>
                              <Text>
                              Customers agree that Advisions may process their personal data as needed for the following purposes:
                               (i) processing and storing information in line with the Agreement and any applicable Order Forms;
                                (ii) processing that users request when using the Services; and (iii) processing in response to 
                                other written, reasonable instructions from users (such as those sent by email or support tickets) 
                                that are compliant with the terms of the Agreement. Before giving any Personal Data to Advisions,
                                 Customer undertakes to request a data protection agreement from Advisions, to the extent that 
                                 Customer is subject to data privacy law. 
                              </Text>



                              <h4>9. Warranty Disclaimer</h4>
                              <Text>
                              With the exception of any other agreements made by the parties, Advisions provides the services "as is" 
                              and disclaims all express, implied, and/or written representations, conditions, and warranties of 
                              any kind with regard to the courses, the services, and any third-party systems or platforms accessible
                               through the services. This includes, but is not limited to, any warranties regarding the products' 
                               merchantability, accuracy, fitness for a particular purpose, non-infringement, and availability.
                              </Text>


                              <h4>10. Entire Agreement</h4>
                              <Text>
                              This Agreement replaces all previous and contemporaneous oral or written communications, offers, 
                              and statements with regard to its subject matter and represents the whole understanding between 
                              the parties with regard to it. The terms and conditions in any purchase order or other documentation 
                              that the customer submits shall be substituted by this Agreement and any jointly executed Order Forms,
                               and this Agreement and any Order Forms shall apply in lieu of such terms and conditions. 
                               All other terms and conditions are void. If Advisions has translated any document that is referenced
                                in this agreement or that is in the English language, it is just for your convenience and the
                                 English language version of those documents shall take precedence. Advisions has the right to 
                                 change this agreement, in whole or in part, at any time. Changes, additions, or deletions of
                                  any kind will take effect right away after they are posted.


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

export default MasterServices;
