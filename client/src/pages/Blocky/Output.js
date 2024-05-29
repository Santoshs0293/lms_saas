import React, { useState, useEffect } from "react";
import { Box, Button, Text, useToast } from "@chakra-ui/react";
import { executeCode } from "./api"; // Make sure this function is defined to execute the code
import { Helmet } from "react-helmet";

const Output = ({ language, code, output: initialOutput, setOutput }) => {
  const toast = useToast();
  const [output, setLocalOutput] = useState(initialOutput || "");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLocalOutput(initialOutput || "");
  }, [initialOutput]);

  const runCode = async () => {
    if (!code) {
      toast({
        title: "No code to run",
        description: "Please generate code first",
        status: "warning",
        duration: 6000,
      });
      return;
    }
    try {
      setIsLoading(true);
      const result = await executeCode(language, code);
      if (result.stderr) {
        throw new Error(result.stderr);
      }
      setLocalOutput(result.output);
      setOutput(result.output);
      setError("");
    } catch (error) {
      console.error("Error running code:", error.message);
      setLocalOutput(error.message);
      setOutput(error.message);
      setError(error.message);
      toast({
        title: "An error occurred.",
        description: error.message || "Unable to run code",
        status: "error",
        duration: 6000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Advisions LMS</title>
        <meta name="description" content="Learning Management System" />
        <meta name="keywords" content="Advisions, LMS" />
      </Helmet>
      <Box
        w="80%"
        ml={2}
        mb={4}
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        border= "red"
      >
        <Button
          variant="outline"
          colorScheme="green"
          mb={4}
          isLoading={isLoading}
          onClick={runCode}
        >
          Run Code
        </Button>
        <Box
          flex="1"
          width="100%"
          p={2}
          border="1px solid"
          borderRadius={4}
          borderColor={error ? "red.500" : "gray.200"}
          backgroundColor={error ? "red.50" : "gray.50"}
          style={{ whiteSpace: "pre-wrap", overflowY: "auto", minHeight: "200px" }}
        >
          {error ? (
            <Text color="red.500">{error}</Text>
          ) : (
            output ? output.split("\n").map((line, i) => <Text key={i}>{line}</Text>) : 'Click "Run Code" to see the output here'
          )}
        </Box>
        <input type="hidden" value={output} />
      </Box>
    </>
  );
};

export default Output;
