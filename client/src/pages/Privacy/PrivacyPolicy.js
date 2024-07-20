
import React from 'react';
import { ChakraProvider, Box, Container, Heading, Text, VStack, List, ListItem } from '@chakra-ui/react';
import Navbar from "../LandingPage/Navbar";

import Sidebar from './SideBar';

const PrivacyPolicy = () => {
  return (
    <>
    <Navbar/>
    <div>
        <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header" id="appContent">
    
    <div className="app-main">
    <Sidebar/>
    <div className="app-main-outer">
        <div className="app-main-inner">
            {/* <div className="page-title-actions px-3 d-flex">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="">Dashboard</a></li>
                        <li className="breadcrumb-item"><a href="">Instructor</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Create</li>
                    </ol>
                </nav>
            </div> */}
            <div className="row" id="deleteTableItem">
                <div className="col-md-12">
                                        <div className="main-card card d-flex h-100 flex-column">
                        <div className="card-body">
    <ChakraProvider>
      <Box>

        <Container maxW="container.lg" py={10}>
          <VStack align="start">
            <Heading size="lg">Privacy Policy</Heading>
            <Text>
              Your privacy is important to us. This privacy statement explains the personal data our LMS system processes, how our LMS system processes it, and for what purposes.
        
            This Privacy Policy was last updated on May 30, 2024.

Thank you for joining Advisions Research and Development Private Limited. We at Advisions respect your privacy and want you to understand how we collect, use, and share data about you. This Privacy Policy covers our data collection practices and describes your rights regarding your personal data.

Unless we link to a different policy or state otherwise, this Privacy Policy applies when you visit or use Advisions websites, mobile applications, APIs, or related services (the “Services”). It also applies to prospective customers of our business and enterprise products.

By using the Services, you agree to the terms of this Privacy Policy. You shouldn’t use the Services if you don’t agree with this Privacy Policy or any other agreement that governs your use of the Services.
            </Text>
            
            <Heading size="lg">Refund Policy</Heading>
            <Text>
            If you are not satisfied with provided services then make refund ticket and will review your account and 100% refund within 2 days.
            </Text>
         

            <h4 id="section1">
1. What Data We Get
</h4>
<div role="alert" class="alert-banner"><p>
We collect certain data from you directly, like information you enter yourself, data about your consumption of content, and data from third-party platforms you connect with Advisions. We also collect some data automatically, like information about your device and what parts of our Services you interact with or spend time using. All data listed in this section is subject to the following processing activities: collecting, recording, structuring, storing, altering, retrieving, encrypting, pseudonymizing, erasing, combining, and transmitting.
</p></div>
<h5>
1.1 Data You Provide to Us
</h5>
<p>
We may collect different data from or about you depending on how you use the Services. Below are some examples to help you better understand the data we collect.
</p>
<p>
When you create an account and use the Services, including through a third-party platform, we collect any data you provide directly, including:
</p>
<div class="table-container">
<table>
<tr>
<td class="table-row-description">
<strong>Category of Personal Data</strong>
</td>
<td>
<strong>Description</strong>
</td>
<td>
<strong>Legal Basis for Processing</strong>
</td>
</tr>
<tr>
<td class="table-row-description">
<strong>Account Data</strong>
</td>
<td>
In order to use certain features (like accessing content), you need to create a user account, which requires us to collect and store your email address, password, and account settings. To create an instructor account, we collect and store your name, email address, password, and account settings. As you use certain features on the site, you may be prompted to submit additional information including occupation, government ID information, verification photo, date of birth, race/ethnicity, skill interests, and phone number. Upon account creation, we assign you a unique identifying number.
</td>
<td>
<ul>
<li>
Performance of contract
</li>
<li>
Legitimate interests (service provisioning, identity verification, fraud prevention and security, communication)
</li>
</ul>
</td>
</tr>
<tr>
<td class="table-row-description">
<strong>Profile Data</strong>
</td>
<td>
You can also choose to provide profile information like a photo, headline, biography, language, website link, social media profiles, country, or other data. Your Profile Data will be publicly viewable by others.
</td>
<td>
<ul>
<li>
Performance of contract
</li>
<li>
Legitimate interests (enhanced platform functionality, convey content source information)
</li>
</ul>
</td>
</tr>
<tr>
<td class="table-row-description">
<strong>Shared Content</strong>
</td>
<td>
Parts of the Services let you interact with other users or share content publicly, including by uploading courses and other educational content, posting reviews about content, asking or answering questions, sending messages to students or instructors, or posting photos or other work you upload. Such shared content may be publicly viewable by others depending on where it is posted.
</td>
<td>
<ul>
<li>
Performance of contract
</li>
<li>
Legitimate interests (service provisioning, enhanced platform functionality)
</li>
</ul>
</td>
</tr>
<tr>
<td class="table-row-description">
<strong>Learning Data</strong>
</td>
<td>
When you access content, we collect certain data including which courses, assignments, labs, workspaces, and quizzes you’ve started and completed; content and subscription purchases and credits; subscriptions; completion certificates; your exchanges with instructors, teaching assistants, and other students; and essays, answers to questions, and other items submitted to satisfy course and related content requirements.
</td>
<td>
<ul>
<li>
Performance of contract
</li>
<li>
Legitimate interests (service provisioning, enhanced platform functionality)
</li>
</ul>
</td>
</tr>
<tr>
<td class="table-row-description">
<strong>Student Payment Data</strong>
</td>
<td>
If you make purchases, we collect certain data about your purchase (such as your name, billing address, and ZIP code) as necessary to process your order and which may optionally be saved to process future orders. You must provide certain payment and billing data directly to our payment service providers, including your name, credit card information, billing address, and ZIP code. We may also receive limited information, like the fact that you have a new card and the last four digits of that card, from payment service providers to facilitate payments. For security, Advisions does not collect or store sensitive cardholder data, such as full credit card numbers or card authentication data.
</td>
<td>
<ul>
<li>
Performance of contract
</li>
<li>
Legal obligation
</li>
<li>
Legitimate interests (payment facilitation, fraud prevention and security, compliance)
</li>
</ul>
</td>
</tr>
<tr>
<td class="table-row-description">
<strong>Instructor Payment Data</strong>
</td>
<td>
If you are an instructor, you can link your PayPal, Payoneer, or other payment account to the Services to receive payments. When you link a payment account, we collect and use certain information, including your payment account email address, account ID, physical address, or other data necessary for us to send payments to your account. In some instances, we may collect ACH or wire information to send payments to your account. In order to comply with applicable laws, we also work with trusted third parties who collect tax information as legally required. This tax information may include residency information, tax identification numbers, biographical information, and other personal information necessary for taxation purposes. For security, Advisions does not collect or store sensitive bank account information. The collection, use, and disclosure of your payment, billing, and taxation data is subject to the privacy policy and other terms of your payment account provider.
</td>
<td>
<ul>
<li>
Performance of contract
</li>
<li>
Legal obligation
</li>
<li>
Legitimate interests (service provisioning, payment facilitation, fraud prevention and security, compliance)
</li>
</ul>
</td>
</tr>
<tr>
<td class="table-row-description">
<strong>Data About Your Accounts on Other Services</strong>
</td>
<td>
<p>
We may obtain certain information through your social media or other online accounts if they are connected to your Advisions account. If you log in to Advisions via Facebook or another third-party platform or service, we ask for your permission to access certain information about that other account. For example, depending on the platform or service we may collect your name, profile picture, account ID number, login email address, location, physical location of your access devices, gender, birthday, and list of friends or contacts.
</p>
<p>
Those platforms and services make information available to us through their APIs. The information we receive depends on what information you (via your privacy settings) or the platform or service decide to give us.
</p>
<p>
If you access or use our Services through a third-party platform or service, or click on any third-party links, the collection, use, and sharing of your data will also be subject to the privacy policies and other agreements of that third party.
</p>
</td>
<td>
<ul>
<li>
Legitimate interests (identity verification, user experience improvement)
</li>
</ul>
</td>
</tr>
<tr>
<td class="table-row-description">
<strong>Sweepstakes, Promotions, and Surveys</strong>
</td>
<td>
We may invite you to complete a survey or participate in a promotion (like a contest, sweepstakes, or challenge), either through the Services or a third-party platform. If you participate, we will collect and store the data you provide as part of participating, such as your name, email address, postal address, date of birth, or phone number. That data is subject to this Privacy Policy unless otherwise stated in the official rules of the promotion or in another privacy policy. The data collected will be used to administer the promotion or survey, including for notifying winners and distributing rewards. To receive a reward, you may be required to allow us to post some of your information publicly (like on a winner’s page). Where we use a third-party platform to administer a survey or promotion, the third party’s privacy policy will apply.
</td>
<td>
<ul>
<li>
Performance of contract
</li>
<li>
Legitimate interests (promotions administration, prize delivery, compliance)
</li>
</ul>
</td>
</tr>
<tr>
<td class="table-row-description">
<strong>Communications and Support</strong>
</td>
<td>
If you contact us for support or to report a problem or concern (regardless of whether you have created an account), we collect and store your contact information, messages, and other data about you like your name, email address, messages, location, Advisions user ID, refund transaction IDs, and any other data you provide or that we collect through automated means (which we cover below). We use this data to respond to you and research your question or concern, in accordance with this Privacy Policy.
</td>
<td>
<ul>
<li>
Legitimate interests (customer and technical support)
</li>
</ul>
</td>
</tr>
</table>
</div>
<p>
The data listed above is stored by us and associated with your account.
</p>
<h5>
1.2 Data We Collect through Automated Means
</h5>
<p>
When you access the Services (including browsing content), we collect certain data by automated means, including:
</p>
<div class="table-container">
<table>
<tr>
<td class="table-row-description">
<strong>Category of Personal Data</strong>
</td>
<td>
<strong>Description</strong>
</td>
<td>
<strong>Legal Basis for Processing</strong>
</td>
</tr>
<tr>
<td class="table-row-description">
<strong>System Data</strong>
</td>
<td>
Technical data about your computer or device, like your IP address, device type, operating system type and version, unique device identifiers, browser, browser language, domain and other systems data, and platform types.
</td>
<td>
<ul>
<li>
Performance of contract
</li>
<li>
Legitimate interests (service provisioning, customer and technical support, fraud prevention and security, communication, product improvement)
</li>
</ul>
</td>
</tr>
<tr>
<td class="table-row-description">
<strong>Usage Data</strong>
</td>
<td>
Usage statistics about your interactions with the Services, including content accessed, time spent on pages or the Service, pages visited, features used, your search queries, click data, date and time, referrer, and other data regarding your use of the Services.
</td>
<td>
<ul>
<li>
Legitimate interests (service provisioning, user experience improvement, product improvement)
</li>
</ul>
</td>
</tr>
<tr>
<td class="table-row-description">
<strong>Approximate Geographic Data</strong>
</td>
<td>
An approximate geographic location, including information like country, city, and geographic coordinates, calculated based on your IP address.
</td>
<td>
<ul>
<li>
Legitimate interests (user experience improvement, fraud prevention and security, compliance)
</li>
</ul>
</td>
</tr>
</table>
</div>
<p>
The data listed above is collected through the use of server log files and tracking technologies, as detailed in the “Cookies and Data Collection Tools” section below. It is stored by us and associated with your account.
</p>


<h4 id="section2">
2. How We Get Data About You
</h4>
<div role="alert" class="alert-banner"><p>
We use tools like cookies, web beacons, and similar tracking technologies to gather the data listed above. Some of these tools offer you the ability to opt out of data collection.
</p></div>
<h5>
2.1 Cookies and Data Collection Tools
</h5>
<p>
We use cookies, which are small text files stored by your browser, to collect, store, and share data about your activities across websites, including on Advisions. They allow us to remember things about your visits to Advisions, like your preferred language, and to make the site easier to use. To learn more about cookies, visit <a href="https://cookiepedia.co.uk/all-about-cookies">https://cookiepedia.co.uk/all-about-cookies</a>. We may also use clear pixels in emails to track deliverability and open rates.
</p>
<p>
Advisions and service providers acting on our behalf (like Google Analytics and third-party advertisers) use server log files and automated data collection tools like cookies, tags, scripts, customized links, device or browser fingerprints, and web beacons (together, <strong>“Data Collection Tools“</strong>) when you access and use the Services. These Data Collection Tools automatically track and collect certain System Data and Usage Data (as detailed in Section 1) when you use the Services. In some cases, we tie data gathered through those Data Collection Tools to other data that we collect as described in this Privacy Policy.
</p>
<h5>
2.2 Why We Use Data Collection Tools
</h5>
<p>
Advisions uses the following types of Data Collection Tools for the purposes described:
</p>
<ul style={{listStyle: 'circle'}}>
<li>
<u>Strictly Necessary:</u> These Data Collection Tools enable you to access the site, provide basic functionality (like logging in or accessing content), secure the site, protect against fraudulent logins, and detect and prevent abuse or unauthorized use of your account. These are required for the Services to work properly, so if you disable them, parts of the site will break or be unavailable.
</li>
<li>
<u>Functional:</u> These Data Collection Tools remember data about your browser and your preferences, provide additional site functionality, customize content to be more relevant to you, and remember settings affecting the appearance and behavior of the Services (like your preferred language or volume level for video playback).
</li>
<li>
<u>Performance:</u> These Data Collection Tools help measure and improve the Services by providing usage and performance data, visit counts, traffic sources, or where an application was downloaded from. These tools can help us test different versions of Advisions to see which features or content users prefer and determine which email messages are opened.
</li>
<li>
<u>Advertising:</u> These Data Collection Tools are used to deliver relevant ads (on the site and/or other sites) based on things we know about you like your Usage and System Data (as detailed in Section 1), and things that the ad service providers know about you based on their tracking data. The ads can be based on your recent activity or activity over time and across other sites and services. To help deliver tailored advertising, we may provide these service providers with a hashed, anonymized version of your email address (in a non-human-readable form) and content that you share publicly on the Services.
</li>
<li>
<u>Social Media:</u> These Data Collection Tools enable social media functionality, like sharing content with friends and networks. These cookies may track a user or device across other sites and build a profile of user interests for targeted advertising purposes.
</li>
</ul>
<p>
You can set your web browser to alert you about attempts to place cookies on your computer, limit the types of cookies you allow, or refuse cookies altogether. If you do, you may not be able to use some or all features of the Services, and your experience may be different or less functional. To learn more about managing Data Collection Tools, refer to Section 6.1 (Your Choices About the Use of Your Data) below.
</p>
<h4 id="section3">
3. What We Use Your Data For
</h4>
<div role="alert" class="alert-banner"><p>
We use your data to do things like provide our Services, communicate with you, troubleshoot issues, secure against fraud and abuse, improve and update our Services, analyze how people use our Services, serve personalized advertising, and as required by law or necessary for safety and integrity. We retain your data for as long as it is needed to serve the purposes for which it was collected.
</p></div>
<p>
We use the data we collect through your use of the Services to:
</p>
<ul>
<li>
Provide and administer the Services, including to facilitate participation in educational content, issue completion certificates, display customized content, and facilitate communication with other users (Account Data; Shared Content; Learning Data; System Data; Usage Data; Approximate Geographic Data);
</li>
<li>
Process payments to instructors and other third parties (Student Payment Data; Instructor Payment Data);
</li>
<li>
Process your requests and orders for educational content, products, specific services, information, or features (Account Data; Learning Data; Student Payment Data; System Data; Communications and Support);
</li>
<li>
Communicate with you about your account by (Account Data; Shared Content; Learning Data; Sweepstakes, Promotions, and Surveys; System Data; Communications and Support):
<ul style={{listStyle: 'circle'}}>
<li>
Responding to your questions and concerns;
</li>
<li>
Sending you administrative messages and information, including messages from instructors, students, and teaching assistants; notifications about changes to our Service; and updates to our agreements;
</li>
<li>
Sending you information, such as by email or text messages, about your progress in courses and related content, rewards programs, new services, new features, promotions, newsletters, and other available instructor-created content (which you can opt out of at any time);
</li>
<li>
Sending push notifications to your wireless device to provide updates and other relevant messages (which you can manage from the “options” or “settings” page of the mobile app);
</li>
</ul>
</li>
<li>
Manage your account and account preferences and personalize your experience (Account Data; Learning Data; Student Payment Data; Instructor Payment Data; System Data, Usage Data, Cookie Data);
</li>
<li>
Facilitate the Services’ technical functioning, including troubleshooting and resolving issues, securing the Services, and preventing fraud and abuse (Account Data; Student Payment Data; Instructor Payment Data; Communications and Support; System Data; Approximate Geographic Location);
</li>
<li>
Verify the identity of instructors (Account Data; Instructor Payment Data);
</li>
<li>
Solicit feedback from users (Account Data; Communications and Support);
</li>
<li>
Market products, services, surveys, and promotions (Account Data; Learning Data; Sweepstakes, Promotions, and Surveys; Usage Data; Cookie Data);
</li>
<li>
Market Subscription Plans to prospective customers (Account Data; Learning Data; Cookie Data);
</li>
<li>
Learn more about you by linking your data with additional data through third-party data providers and/or analyzing the data with the help of analytics service providers (Account Data; Data About Your Accounts on Other Services; Usage Data; Cookie Data);
</li>
<li>
Identify unique users across devices (Account Data; System Data; Cookie Data);
</li>
<li>
Tailor advertisements across devices (Cookie Data);
</li>
<li>
Improve our Services and develop new products, services, and features (all data categories);
</li>
<li>
Analyze trends and traffic, track purchases, and track usage data (Account Data; Learning Data; Student Payment Data; Communications and Support; System Data; Usage Data; Approximate Geographic Data; Cookie Data);
</li>
<li>
Advertise the Services on third-party websites and applications (Account Data; Cookie Data);
</li>
<li>
As required or permitted by law (all data categories); or
</li>
<li>
As we, in our sole discretion, otherwise determine to be necessary to ensure the safety or integrity of our users, employees, third parties, the public, or our Services (all data categories).
</li>
</ul>
<h4 id="section4">
4. Who We Share Your Data With
</h4>
<div role="alert" class="alert-banner"><p>
We share certain data about you with instructors, other students, companies performing services for us, Advisions affiliates, our business partners, analytics and data enrichment providers, your social media providers, companies helping us run promotions and surveys, and advertising companies who help us promote our Services. We may also share your data as needed for security, legal compliance, or as part of a corporate restructuring. Lastly, we can share data in other ways if it is aggregated or de-identified or if we get your consent.
</p></div>
<p>
We may share your data with third parties under the following circumstances or as otherwise described in this Privacy Policy:
</p>
<ul>
<li><u>With Your Instructors:</u>
We share data that we have about you (except your email address) with instructors or teaching assistants for educational content you access or request information about, so they can improve their content for you and other students. This data may include things like your country, browser language, operating system, device settings, the site that brought you to Advisions, and certain activities on Advisions, like enrolled courses and course review. We will not share your email address with instructors or teaching assistants. (Account Data; System Data; Usage Data; Approximate Geographic Data)
</li>
<li><u>With Other Students and Instructors:</u>
Depending on your settings, your shared content and profile data may be publicly viewable, including to other students and instructors. If you ask a question to an instructor or teaching assistant, your information (including your name) may also be publicly viewable. (Account Data; Profile Data; Shared Content)
</li>
<li><u>With Service Providers, Contractors, and Agents:</u>
We share your data with third-party companies who perform services on our behalf, like payment processing, fraud and abuse prevention, data analysis, marketing and advertising services (including retargeted advertising), email and hosting services, and customer services and support. These service providers may access your personal data and are required to use it solely as we direct, to provide our requested service. (All data categories)
</li>
<li><u>With Advisions Affiliates:</u>
We may share your data within our corporate family of companies that are related by common ownership or control to enable or support us in providing the Services. (All data categories)
</li>
<li><u>With Business Partners:</u>
We have agreements with other websites and platforms to distribute our Services and drive traffic to Advisions. Depending on your location, we may share your data with these trusted partners. (Account Data; Learning Data; Communications and Support; System Data)
</li>
<li><u>With Credit-Granting Organizations for Continuing Education:</u>
If you take a course to fulfill a continuing professional education requirement, we may share that information upon request of the organization granting the continuing education credit. (Account Data; Learning Data)
</li>
<li><u>With Analytics and Data Enrichment Services:</u>
As part of our use of third-party analytics tools like Google Analytics and data enrichment services like ZoomInfo, we share certain contact information or de-identified data. De-identified data means data where we’ve removed things like your name and email address and replaced it with a token ID. This allows these providers to provide analytics services or match your data with publicly-available database information (including contact and social information from other sources). We do this to communicate with you in a more effective and customized manner. (Account Data; System Data; Usage Data; Cookie Data)
</li>
<li><u>To Power Social Media Features:</u>
The social media features in the Services (like the Facebook Like button) may allow the third-party social media provider to collect things like your IP address and which page of the Services you’re visiting, and to set a cookie to enable the feature. Your interactions with these features are governed by the third-party company’s privacy policy. (System Data; Usage Data; Cookie Data)
</li>
<li><u>To Administer Promotions and Surveys:</u>
We may share your data as necessary to administer, market, or sponsor promotions and surveys you choose to participate in, as required by applicable law (like to provide a winners list or make required filings), or in accordance with the rules of the promotion or survey. (Account Data; Sweepstakes, Promotions, and Surveys)
</li>
<li><u>For Advertising:</u>
If we decide to use an advertising-supported revenue model in the future, we may use and share certain System Data and Usage Data with third-party advertisers and networks to show general demographic and preference information among our users. We may also allow advertisers to collect System Data through Data Collection Tools (as detailed in Section 2.1), to use this data to offer you targeted ad delivery to personalize your user experience (through behavioral advertising) and to undertake web analytics. Advertisers may also share with us the data they collect about you. To learn more or opt out from participating ad networks’ behavioral advertising, see Section 6.1 (Your Choices About the Use of Your Data) below. Note that if you opt out, you’ll continue to be served generic ads. (System Data)
</li>
<li><u>For Security and Legal Compliance:</u>
We may disclose your data (all data categories) to third parties if we (in our sole discretion) have a good faith belief that the disclosure is:
<ul style={{listStyle: 'circle'}}>
<li>
Requested as part of a judicial, governmental, or legal inquiry, order, or proceeding;
</li>
<li>
Reasonably necessary as part of a valid subpoena, warrant, or other legally-valid request;
</li>
<li>
Reasonably necessary to enforce our Terms of Use, Privacy Policy, and other legal agreements;
</li>
<li>
Required to detect, prevent, or address fraud, abuse, misuse, potential violations of law (or rule or regulation), or security or technical issues;
</li>
<li>
Reasonably necessary in our discretion to protect against imminent harm to the rights, property, or safety of Advisions, our users, employees, members of the public, or our Services;
</li>
<li>
We may also disclose data about you to our auditors and legal advisors in order to assess our disclosure obligations and rights under this Privacy Policy; or
</li>
<li>
Required or permitted by law.
</li>
</ul>
</li>
<li><u>During a Change in Control:</u>
If Advisions undergoes a business transaction like a merger, acquisition, corporate divestiture, or dissolution (including bankruptcy), or a sale of all or some of its assets, we may share, disclose, or transfer all of your data to the successor organization during such transition or in contemplation of a transition (including during due diligence). (All data categories)
</li>
<li><u>After Aggregation/De-identification:</u>
We may disclose or use aggregated or de-identified data for any purpose.
</li>
<li><u>With Your Permission:</u>
With your consent, we may share data to third parties outside the scope of this Privacy Policy. (All data categories)
</li>
</ul>
<h4 id="section5">
5. Security
</h4>
<div role="alert" class="alert-banner"><p>
We use appropriate security based on the type and sensitivity of data being stored. As with any internet-enabled system, there is always a risk of unauthorized access, so it’s important to protect your password and to contact us if you suspect any unauthorized access to your account.
</p></div>
<p>
Advisions takes appropriate security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal data that we collect and store. These measures vary based on the type and sensitivity of the data. Unfortunately, however, no system can be 100% secured, so we cannot guarantee that communications between you and Advisions, the Services, or any information provided to us in connection with the data we collect through the Services will be free from unauthorized access by third parties. Your password is an important part of our security system, and it is your responsibility to protect it. You should not share your password with any third party, and if you believe your password or account has been compromised, you should change it immediately and contact our <a href="https://www.Advisions.com/support/">Support Team</a> with any concerns.
</p>
<h4 id="section6">
6. Your Rights
</h4>
<div role="alert" class="alert-banner"><p>
You have certain rights around the use of your data, including the ability to opt out of promotional emails, cookies, and collection of your data by certain third parties. You can update or terminate your account from within our Services, and can also contact us for individual rights requests about your personal data. Parents who believe we’ve unintentionally collected personal data about their underage child should contact us for help deleting that information.
</p></div>
<h5>
6.1 Your Choices About the Use of Your Data
</h5>
<p>
You can choose not to provide certain data to us, but you may not be able to use certain features of the Services.
</p>
<ul>
<li>
To stop receiving promotional communications from us, you can opt out by using the unsubscribe mechanism in the promotional communication you receive or by changing the <a href="https://www.Advisions.com/support/229231147/">email preferences in your account</a>. Note that regardless of your email preference settings, we will send you transactional and relationship messages regarding the Services, including administrative confirmations, order confirmations, important updates about the Services, and notices about our policies.
</li>
<li>
If you’re located in the European Economic Area, you may opt out of certain Data Collection Tools by clicking the “Cookie settings“ link at the bottom of any page.
</li>
<li>
The browser or device you use may allow you to control cookies and other types of local data storage. To learn more about managing cookies, visit <a href="https://cookiepedia.co.uk/how-to-manage-cookies">https://cookiepedia.co.uk/how-to-manage-cookies</a>. Your wireless device may also allow you to control whether location or other data is collected and shared.
</li>
<li>
To get information and control cookies used for tailored advertising from participating companies, see the consumer opt-out pages for the <a href="http://www.networkadvertising.org/choices">Network Advertising Initiative</a> and <a href="http://www.aboutads.info/choices/">Digital Advertising Alliance</a>, or if you’re located in the European Economic Area, visit the <a href="http://www.youronlinechoices.eu/">Your Online Choices</a> site. If you’re located in Japan, visit the <a href="https://feedback.impact-ad.jp/login">Digital Advertising Consortium</a>. To opt out of Google’s display advertising or customize Google Display Network ads, visit the <a href="https://www.google.com/settings/ads">Google Ads Settings page</a>. To opt out of Taboola’s targeted ads, see the Opt-out Link in their <a href="https://www.taboola.com/cookie-policy">Cookie Policy</a>.
</li>
<li>
To opt out of allowing Google Analytics, Mixpanel, ZoomInfo, or Clearbit to use your data for analytics or enrichment, see the <a href="https://tools.google.com/dlpage/gaoptout"> Google Analytics Opt-out Browser Add-on</a>, <a href="https://mixpanel.com/optout/">Mixpanel Opt-Out Cookie</a>, <a href="https://www.zoominfo.com/business/about-zoominfo/privacy-policy"> ZoomInfo’s policy</a>, and <a href="https://clearbit.com/privacy">Clearbit data claiming mechanism</a>.
</li>
<li>
Apple iOS, Android OS, and Microsoft Windows each provide their own instructions on how to control in-app tailored advertising. For other devices and operating systems, you should review your privacy settings on that platform.
</li>
</ul>
<p>
If you have any questions about your data, our use of it, or your rights, contact us at <a href="mailto:privacy@Advisions.com" class>privacy@Advisions.com</a>.
</p>
<h5>
6.2 Accessing, Updating, and Deleting Your Personal Data
</h5>
<p>
You can access and update your personal data that Advisions collects and maintains as follows:
</p>
<ul>
<li>
To update data you provide directly, log into your account and update your account at any time.
</li>


</ul>
<h5>
6.3 Our Policy Concerning Children
</h5>
<p>
We recognize the privacy interests of children and encourage parents and guardians to take an active role in their children’s online activities and interests. Individuals younger than 18 years of age, but of the required age for consent to use online services where they live (for example, 13 in the US or 16 in Ireland), may not set up an account, but may have a parent or guardian open an account and help them access appropriate content. Individuals younger than the required age for consent to use online services may not use the Services. If we learn that we’ve collected personal data from a child under those ages, we will take reasonable steps to delete it.
</p>
<p>
Parents who believe that Advisions may have collected personal data from a child under those ages can submit a request that it be removed to @mail.
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
    </div>
   
    </>
  );
};

export default PrivacyPolicy;

