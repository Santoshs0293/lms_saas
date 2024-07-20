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
                              <Heading as="h2" size="lg">TERMS OF USE</Heading>
                              <Text fontSize="md">Last Updated: May 30, 2024</Text>

                            


                              <p>By accessing or using the LMS, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms or our Privacy Policy, you may not use our LMS.</p>

<h5>1. Use of LMS</h5>

<p>
  <strong>(a) License:</strong> Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, and revocable license to use the LMS for your personal or internal business purposes.
</p>

<p>
  <strong>(b) Access:</strong> You agree not to access, reproduce, duplicate, copy, sell, resell, or exploit any portion of the LMS without our express written permission.
</p>

<p>
  <strong>(c) User Account:</strong> To access certain features of the LMS, you may be required to create an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
</p>

<p>
  <strong>(d) Security:</strong> You are responsible for maintaining the confidentiality of your account and password and for restricting access to your account. You agree to accept responsibility for all activities that occur under your account.
</p>

<p>
  <strong>(e) Prohibited Use:</strong> You may not use the LMS for any illegal or unauthorized purpose nor may you, in the use of the LMS, violate any laws in your jurisdiction (including but not limited to copyright laws).
</p>

<h5>2. Content and Intellectual Property</h5>

<p>
  <strong>(a) Ownership:</strong> We own all rights, title, and interest in and to the LMS and its content, including all associated intellectual property rights.
</p>

<p>
  <strong>(b) User Content:</strong> You retain ownership of any content you submit, post, or display on or through the LMS ("User Content"). By submitting, posting, or displaying User Content, you grant us a non-exclusive, royalty-free, worldwide, transferable, sub-licensable license to use, reproduce, adapt, distribute, and publish such User Content solely for the purpose of providing and improving the LMS.
</p>

<p>
  <strong>(c) Feedback:</strong> You agree that any feedback, suggestions, or ideas you provide about the LMS may be used by us without any restriction or compensation to you.
</p>

<h5>3. Third-Party Links and Content</h5>

<p>
  <strong>(a) Links:</strong> The LMS may contain links to third-party websites or resources. You acknowledge and agree that we are not responsible or liable for the availability or accuracy of such websites or resources.
</p>

<p>
  <strong>(b) Third-Party Content:</strong> You acknowledge sole responsibility for and assume all risk arising from your use of any such websites or resources. Your use of third-party websites and resources is at your own risk.
</p>

<h5>4. Termination</h5>

<p>
  <strong>(a) Termination by Us:</strong> We may terminate or suspend your access to all or any part of the LMS at any time, with or without cause, with or without notice, effective immediately.
</p>

<p>
  <strong>(b) Termination by You:</strong> You may terminate these Terms at any time by ceasing to use the LMS and deleting your account.
</p>

<h5>5. Disclaimer of Warranties</h5>

<p>
  <strong>(a) As Is:</strong> The LMS and all materials and content available through the LMS are provided on an "as is" and "as available" basis. We do not make any warranties that the LMS will be error-free or that access thereto will be continuous or uninterrupted.
</p>

<p>
  <strong>(b) No Warranties:</strong> To the fullest extent permissible under applicable law, we disclaim all warranties, express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
</p>

<h5>6. Limitation of Liability</h5>

<p>
  <strong>(a) No Liability:</strong> In no event shall we be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, arising out of or in connection with your access to or use of the LMS.
</p>

<p>
  <strong>(b) Total Liability:</strong> Our total liability to you for all claims arising from or relating to these Terms or your access to or use of the LMS shall not exceed the amount paid by you, if any, for accessing the LMS.
</p>

<h5>7. Indemnity</h5>

<p>You agree to defend, indemnify, and hold us harmless from and against any claims, liabilities, damages, losses, and expenses, including without limitation, reasonable attorney's fees and costs, arising out of or in any way connected with (i) your access to or use of the LMS, (ii) your User Content, or (iii) your violation of these Terms.</p>

<h5>8. Governing Law</h5>

<p>These Terms shall be governed by and construed in accordance with the laws of [State/Country], without regard to its conflict of law principles.</p>

<h5>9. Miscellaneous</h5>

<p>
  <strong>(a) Entire Agreement:</strong> These Terms constitute the entire agreement between you and us regarding your use of the LMS and supersede any prior or contemporaneous agreements, communications, or proposals, whether oral or written, between you and us.
</p>

<p>
  <strong>(b) Severability:</strong> If any provision of these Terms is found by a court of competent jurisdiction to be invalid, the parties nevertheless agree that the court should endeavor to give effect to the parties' intentions as reflected in the provision, and the other provisions of these Terms remain in full force and effect.
</p>

<p>
  <strong>(c) Waiver:</strong> The failure of us to exercise or enforce any right or provision of these Terms shall not constitute a waiver of such right or provision.
</p>

<p>
  <strong>(d) Assignment:</strong> These Terms, and any rights and licenses granted hereunder, may not be transferred or assigned by you, but may be assigned by us without restriction.
</p>

<p>
  <strong>(e) Contact Us:</strong> If you have any questions about these Terms, please contact us at [Contact Information].
</p>

<p>By using the LMS, you agree to these Terms. If you do not agree to these Terms, please do not use the LMS.</p>

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

