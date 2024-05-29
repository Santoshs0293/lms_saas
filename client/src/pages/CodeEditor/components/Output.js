import { useState, useEffect } from "react";
import { Box, Button, Text, useToast } from "@chakra-ui/react";
import { executeCode } from "../api";
import { Helmet } from "react-helmet";
const Output = ({ editorRef, language, output: initialOutput, setOutput }) => {
  const toast = useToast();
  const [output, setLocalOutput] = useState(initialOutput || "");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setLocalOutput(initialOutput || "");
  }, [initialOutput]);

  const runCode = async () => {
    const sourceCode = editorRef.current.getValue();
    if (!sourceCode) return;
    try {
      setIsLoading(true);
      const { run: result } = await executeCode(language, sourceCode, output);
      setLocalOutput(result.output.trim());
      setOutput(result.output.trim()); // Update parent component's output state
      result.stderr ? setIsError(true) : setIsError(false);
    } catch (error) {
      console.log(error);
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
    <Box w="40%" ml={2} mb={4} mt={-19}>
      <Text mb={2} fontSize="lg">
        Output
      </Text>
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
        height="75vh"
        p={2}
        color={isError ? "red.400" : ""}
        border="1px solid"
        borderRadius={4}
        borderColor={isError ? "red.500" : "#333"}
      >
        {output
          ? output.split("\n").map((line, i) => <Text key={i}>{line}</Text>)
          : 'Click "Run Code" to see the output here'}
      </Box>
      <input type="hidden" value={output} />
    </Box>
    </>
  );
};

export default Output;
