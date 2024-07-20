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
        const token = localStorage.getItem('auth_token');
        const response = await axiosInstance.get("/api/code", {
          headers: {
            Authorization: "Bearer " + token,
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
      <Box className="box-fix" w="20%">
        <Text mb={2} fontSize="lg" textAlign="center" mt={4} >
          Saved Code
        </Text>
        <Box
          height="80vh"
          p={2}
          color={isError ? "red.400" : ""}
          border="1px solid"
          borderRadius={4}
          borderColor={isError ? "red.500" : "gray.200"}
          overflowY="scroll"
          sx={{
            '&::-webkit-scrollbar': {
              width: '8px',
            },
            '&::-webkit-scrollbar-track': {
              background: '#f1f1f1',
            },
            '&::-webkit-scrollbar-thumb': {
              background: '#888',
              borderRadius: '4px',
            },
            '&::-webkit-scrollbar-thumb:hover': {
              background: '#555',
            },
          }}
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
                  <p>{code.output}</p>
                  <button
                    onClick={() => onCodeSelect(code.code, code.language)}
                  >
                    Click to display on YJS
                  </button>
                </li>
              ))}
            </ul>
          )}
          {isError && <Text color="red.500">Error fetching codes or You are not logged In.</Text>}
        </Box>
      </Box>
    </>
  );
};

export default Sidebar;
