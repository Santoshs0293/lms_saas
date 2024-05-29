import { Box, Text, Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import { Helmet } from "react-helmet";

const Sidebar = ({ onFileClick, onCodeSelect }) => {
  const [codes, setCodes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL });
  useEffect(() => {
    const fetchCodes = async () => {
      setIsLoading(true);
      try {
        const token = localStorage.getItem('auth_token'); // Changed from 'token' to 'auth_token'
        const response = await axiosInstance.get("/api/code", {
          headers: {
            Authorization: "Bearer " + token, // Changed from 'localStorage.getItem("auth_token")' to 'token'
          }
        });
        setCodes(response.data.codes);
      } catch (error) {
        console.error("Error fetching codes:", error);
        setIsError(true);
      }
      setIsLoading(false);
    };

    fetchCodes();
  }, []);

  return (
    <>
      <Helmet>
        <title>Advisions LMS</title>
        <meta name="description" content="Learning Management System" />
        <meta name="keywords" content="Advisions, LMS" />
      </Helmet>
      <Box className="box-fix" w="30%">
        <Text mb={2} fontSize="lg" textAlign="center" mt={4}>
          Saved Code
        </Text>
        <Box
          height="85vh"
          p={2}
          color={isError ? "red.400" : ""}
          border="1px solid"
          borderRadius={4}
          borderColor={isError ? "red.500" : "#333"}
          overflowY="scroll"
        >
          {isLoading ? (
            <Text>Loading...</Text>
          ) : (
            <ul>
              {codes.map((code) => (
                <li key={code._id} style={{ marginBottom: "10px" }}>
                  <strong>{code.language}</strong>
                  <br />
                  <code>{code.code}</code>
                  <br />
                  <strong>Output</strong>
                  <p>{code.output}</p> {/* Display output */}
                 
                </li>
              ))}
            </ul>
          )}
          {isError && <Text color="red.500">Error fetching codes</Text>}
        </Box>
      </Box>
    </>
  );
};

export default Sidebar;
