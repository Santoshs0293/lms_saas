import { Box, HStack, VStack } from "@chakra-ui/react";
import CodeEditor from "./components/CodeEditor.js";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme.js";
import Navbar from "../LandingPage/Navbar.js"
import Sidebar from "./SideBar.js";
import { useState } from "react";
import { Helmet } from "react-helmet";

function MyCodeEditorPage() {
  return (
    <> 
     <Helmet>
        <title>Advisions LMS</title>
        <meta name="description" content="Learning Management System" />
        <meta name="keywords" content="Advisions, LMS" />
      </Helmet>    
      <Navbar />
     
      <ChakraProvider>
      <Box minH="100vh" bg="#0f0a19" color="gray.500" px={6} py={8} >
    <CodeEditor />
    </Box>
  </ChakraProvider>
    </>
  );
}

export default MyCodeEditorPage;