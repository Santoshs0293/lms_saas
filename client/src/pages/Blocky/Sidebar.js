import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Text, Button, Collapse, VStack, HStack, Icon, useToast } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";

const Sidebar = ({ onFileClick }) => {
  const [codes, setCodes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [openIndexes, setOpenIndexes] = useState([]);
  const toast = useToast();

  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });

  useEffect(() => {
    const fetchCodes = async () => {
      setIsLoading(true);
      try {
        const token = localStorage.getItem("auth_token");
        const response = await axiosInstance.get("/blockly/blocklycode", {
          headers: {
            Authorization: "Bearer " + token,
          },
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

  const handleCodeClick = (index) => {
    setOpenIndexes((prevOpenIndexes) =>
      prevOpenIndexes.includes(index)
        ? prevOpenIndexes.filter((i) => i !== index)
        : [...prevOpenIndexes, index]
    );
  };

  return (
    <Box className="box-fix" w="18%">
      <Text mb={2} fontSize="lg" textAlign="center" mt={4}>
        Your Previous Codes
      </Text>
      <Box
        height="80vh"
        p={2}
        color={isError ? "red.400" : ""}
    
        borderRadius={4}
        borderColor={isError ? "red.500" : "#333"}
        overflowY="auto"
        bg="gray.100"
        sx={{
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-track": {
            background: "#f1f1f1",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#888",
            borderRadius: "4px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: "#555",
          },
        }}
      >
        {isLoading ? (
          <Text>Loading...</Text>
        ) : (
          <VStack spacing={0} align="stretch">
            {codes.map((code, index) => (
              <Box key={code._id} borderBottomWidth="1px" borderColor="gray.300"
              >
                <HStack onClick={() => handleCodeClick(index)} cursor="pointer" justify="space-between" p={2} bg="white">
                  <Text fontSize="md">
                    {code.generatedCode}
                  </Text>
                  <Icon as={openIndexes.includes(index) ? ChevronDownIcon : ChevronRightIcon} />
                </HStack>
                <Collapse in={openIndexes.includes(index)} animateOpacity>
                  <Box p={2} bg="gray.50">
                    <Text ><strong>XML:</strong></Text>
                  <Text  fontSize={14}>  <code>{code.xml}</code></Text>
                    <Button colorScheme="blue" onClick={() => onFileClick(code.xml)}>
                      Load XML
                    </Button>
                  </Box>
                </Collapse>
              </Box>
            ))}
          </VStack>
        )}
        {isError && <Text color="red.500">Error fetching codes</Text>}
      </Box>
    </Box>
  );
};

export default Sidebar;
