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
                              <Heading as="h2" size="lg">Affiliate Terms & Conditions</Heading>
                              <Text fontSize="md">Last Updated: May 30, 2024</Text>

                            


      
                              <section>
        <h4>Introduction</h4>
        <p>
          THIS IS A LEGAL AGREEMENT BETWEEN YOU (“YOU”, “YOUR”, OR “YOURS”), AND ADVISIONS, INC., A DELAWARE CORPORATION. BY CLICKING ON THE "I ACCEPT" BUTTON AT THE END OF THESE AFFILIATE TERMS AND CONDITIONS (“AFFILIATE TERMS”) YOU ARE AGREEING THAT YOU HAVE READ AND UNDERSTAND THESE AFFILIATE TERMS AND THAT YOU AGREE TO BE LEGALLY RESPONSIBLE FOR EACH AND EVERY TERM AND CONDITION HEREIN.
        </p>
        <p>
          Any version of these Affiliate Terms in a language other than English is provided for convenience and You understand and agree that the English language will control if there is any conflict.
        </p>
        <p>
          All capitalized terms used and not otherwise defined herein shall have the meaning ascribed to them in Advisions’ Terms of Use, Pricing and Promotions Policy or the Publisher Membership Agreement.
        </p>
      </section>

      <section>
        <h4>Overview</h4>
        <p>
          These Affiliate Terms contain the complete terms and conditions that apply to You when becoming an affiliate in Advisions’ affiliate program (the “Affiliate Program”). The purpose of these Affiliate Terms is to allow You to make affiliate commissions through sales generated from Your website to Our Services in the manner set forth herein.
        </p>
      </section>

      <section>
        <h4>Enrollment in the Affiliate Program</h4>
        <h5>(a) Application Completion</h5>
        <p>
          If You have not already done so, You need to complete an application to the Affiliate Program (the “Application”). You need to identify Your website, describe how You plan to promote Advisions’ Services on Your website, and provide certain contact information. The Application can be found at [insert link to application].
        </p>

        <h5>(b) Acceptance of Your Application</h5>
        <p>
          If we choose to accept Your Application, You will receive an email notification confirming that Your Application has been approved. You understand and agree that We may accept or reject Your Application at Our sole discretion. Your Application will be rejected if any of the information You provide is incorrect or incomplete, if Your website promotes materials of a sexual, pornographic, violent, or defamatory nature, if You or Your website discriminate, violate any applicable law, or violate any person’s intellectual property rights, or for any other reason We may deem fit to reject Your Application.
        </p>

        <h5>(c) Access to our Affiliate Program</h5>
        <p>
          If We have accepted Your Application, We will send You a welcome email with Your login details so that You may enter Our secure affiliate center. From this center You will be able to download Promotional Materials and qualifying links as well as access Your reports which will describe Our calculation of the affiliate commissions due to You. It is Your responsibility to keep Your username and password information secure. For purposes of clarity, Promotional Materials is defined as banners, text links, article copy, and access to data feeds.
        </p>

        <h5>(d) Update Your Information</h5>
        <p>
          You will ensure that your information including your email address is at all times complete, accurate and up-to-date. We may send communications to the email address associated with your account. You will be deemed to have received all notifications, approvals, and other communications sent to that email address, even if the email address associated with your account is no longer current.
        </p>

        <h5>(e) Compliance with FTC Guidelines</h5>
        <p>
          You must be in good standing with the Federal Trade Commission (the “FTC”) and in compliance with all FTC guidelines. As an Affiliate, you also understand and agree that you have read and fully agree to the terms listed on the Official FTC Website. Specific requirements and examples for Advisions Affiliates can be found here.
        </p>
      </section>

      <section>
        <h4>Specific Obligations of Affiliates</h4>
        <p>As a member of Our Affiliate Program, You represent, warrant, and covenant that You will:</p>
        
        <h5>(a) Link to Our Services</h5>
        <p>
          You will implement the links, banners, and other means of linking Your website to Our Services (collectively, “Referral Links”) pursuant to the referral specifications set forth on the Affiliate Program on Rakuten Linkshare (“Referral Specifications”). On this page You will be able to download certain technical materials, including links, HTML code, banner ads, copy and other content, and any documentation for the foregoing (collectively, “Referral Materials”). When Our customers click through the Referral Links to purchase an item on the Advisions site, you can receive commissions for qualifying individual marketplace transaction purchases as described in Affiliate Commissions.
        </p>

        <h5>(b) Maintain Your Site</h5>
        <p>
          The maintenance and the updating of Your website will be Your responsibility. Advisions will notify you via email of any changes to these Terms and our Referral Materials. However, as a member of Our Affiliate Program and because Our information is updated often, it will be necessary for You to update the Referral Materials on Your website to maintain consistency and accuracy between Our Services and the Referral Specifications.
        </p>

        <h5>(d) Follow and Comply with All Copyright Laws</h5>
        <p>
          It is entirely Your responsibility to follow and comply with all applicable copyright and other laws that pertain to Your website. We will not be responsible if You use another person's copyrighted material in violation of the law.
        </p>

        <h5>(e) Not to Solicit Our Instructors</h5>
        <p>
          As a member of Our Affiliate Program, You agree not to directly or indirectly, for Yourself or on behalf of another, solicit business away from, or solicit, induce, influence, or encourage any of Our Instructors to upload their Advisions Course(s) on Your websites and/or platforms, or otherwise alter, terminate or breach their contractual or other business relationship with Us.
        </p>
      </section>

      <section>
        <h4>Affiliate Responsibilities</h4>
        <p>As a member of Our Affiliate Program, You understand and agree that:</p>

        <h5>(a) We Can Monitor Your Site</h5>
        <p>
          You hereby give Us the right to monitor Your website at any time to determine if You are following these Affiliate Terms, and to notify You of any changes We feel You should make to remain in compliance. Further, You must comply with any requests we make for you to take down specific content from your website. Failure to comply is a violation of these Terms and grounds for termination of Your affiliate status.
        </p>

        <h5>(b) We Determine the Policies for Referred Customers</h5>
        <p>
          Persons who become customers of Our Services through referrals made in the Affiliate Program will be considered Our customers, at Our sole discretion. All Our terms, rules, policies, and operating procedures that apply to Our Users will apply to such referred customers. We may change Our terms, rules, policies, and operating procedures at any time, as further described in Our Terms of Use and Our other terms as We may post from time to time.
        </p>

        <h5>(c) Restrictions on Paid Advertising</h5>
        <p>
          You will not promote Advisions through paid advertising or media buying that leads directly to the Advisions website (found at www.advisions.com). You will not bid on Advisions-branded keywords as an affiliate. This applies to all advertising platforms and to all affiliates unless direct approval from Advisions is granted.
        </p>

        <h5>(d) Restrictions on Domain Names and Social Media</h5>
        <p>
          You may not register or purchase domain names that include Our company’s name or any misspellings or variations of Our company name to run promotions as an affiliate. Additionally, you may not include Our Company name, variations of Our company name, or the look and feel of Our own social media pages on any social media pages (i.e. Facebook Fan Page) where You run promotions as an affiliate.
        </p>

        <h5>(e) Responsibility for Website Content</h5>
        <p>
          You may not promote Our content and Our Instructors’ courses on a website that contains any form of misleading, defamatory, obscene, illegal, bigoted, pornographic or any other content deemed offensive by Us.
        </p>

        <h5>(f) Prohibition on Cookie Stuffing</h5>
        <p>
          You may not use cookie stuffing techniques or click-generators that set the tracking cookie without the user actually clicking on the Referral Link. You will not artificially generate clicks or impressions on your site or create visits on the Advisions site, whether by way of a robot or software program or otherwise.
        </p>

        <h5>(g) No Mimicking of Media and Content</h5>
        <p>
          Publishers must make sure that his or her media does not copy or resemble the look and feel of the Advisions website or create the impression that Your media is part of Our company's website. You also understand that using the language found on Our pages verbatim is not allowed unless it is to describe the content found on any given course landing page.
        </p>

        <h5>(h) Responsibility for Use of Content</h5>
        <p>
          You may create Your own promotional materials using pages from our site as reference. You may also use course images and part of the text in Our pages to promote the products accurately on Your site. However, You may NOT download, copy, or use video content (free or paid), course supplementary materials (PDFs, quizzes or extra material), or lesson descriptions and upload them on Your own site(s). Violation of this provision may result in the immediate termination of Your affiliate account.
        </p>

        <h5>(i) Prohibition on Spyware and Malware</h5>
        <p>
          You may not include on your site, display, or otherwise use Referral Links or other Content that uses any spyware, malware, or virus, or any software application not expressly and knowingly authorized by users prior to being downloaded or installed on their computer or other electronic device.
        </p>

        <h5>(j) Honesty About Relationship with Advisions</h5>
        <p>
          You may not misrepresent or embellish the relationship between you and Advisions or imply any relationship or affiliation between you and Advisions or any other person or entity except as expressly permitted by this affiliate Agreement. You may not represent yourself as an agent or employee of Advisions or represent that you have the authority to bind Advisions to a contract.
        </p>

        <h5>(k) Restrictions on Browser Extensions</h5>
        <p>
          You cannot utilize a browser extension to promote Advisions or Advisions courses without direct approval from Advisions. All coupon codes available in the extension must be approved by Advisions. You also understand and agree that your browser extension cannot allow users to upload new coupons into the extension's feed.
        </p>

        <h5>(l) No Commissions for Free Courses</h5>
        <p>
          Our site contains paid and free courses. Any customer You refer to Us that subsequently enrolls in a free course or uses a 'free
        </p>
      </section>
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

