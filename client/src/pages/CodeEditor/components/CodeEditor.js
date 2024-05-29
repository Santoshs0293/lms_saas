import { useRef, useState, useEffect } from "react";
import { Box, HStack, Button } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS } from "../constants";
import Output from "./Output"; // Import the Output component
import axios from "axios";
import Sidebar from "../SideBar";
import { Helmet } from "react-helmet";

const CodeEditor = () => {
  const editorRef = useRef(null);
  const [code, setCode] = useState(CODE_SNIPPETS["javascript"]);
  const [language, setLanguage] = useState("javascript");
  const [userData, setUserData] = useState(null);
  const [output, setOutput] = useState(""); // Add output state

  // Fetch user data from localStorage when the component mounts
  useEffect(() => {
    const userDataFromStorage = localStorage.getItem("user");
    if (userDataFromStorage) {
      setUserData(JSON.parse(userDataFromStorage));
      fetchSavedCode(JSON.parse(userDataFromStorage)._id);
    }
  }, []);

  // Get user ID from userData
  const userId = userData ? userData._id : null;
  const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL });

  // Function to fetch saved code from the database
  const fetchSavedCode = async (userId) => {
    try {
      const response = await axiosInstance.get(
        `/api/code`, // Assuming your endpoint is /api/code/:userId
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("auth_token"),
          },
        }
      );
      const savedCode = response.data.code;
      if (savedCode) {
        setCode(savedCode.code);
        setLanguage(savedCode.language);
        setOutput(savedCode.output);
      }
    } catch (error) {
      console.error("Error fetching saved code:", error);
    }
  };

  // Function to save code to the database
  const onSave = async () => {
    try {
      const response = await axiosInstance.post(
        "/api/save",
        { language, code, output, userId }, // Include output here
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("auth_token"),
          },
        }
      );
      if (response.data.success) {
        alert("Code saved successfully!");
      } else {
        alert("Error occurred while saving code");
      }
    } catch (error) {
      console.error("Error saving code:", error);
      alert("Error occurred while saving code");
    }
  };

  const onMount = (editor) => {
    editorRef.current = editor;
    if (editorRef.current) {
      editorRef.current.focus();
    }
  };

  // Function called when a new language is selected
  const onSelect = (language) => {
    setLanguage(language);
    setCode(CODE_SNIPPETS[language]);
  };

  // Function to handle file click in the sidebar
  const handleFileClick = (codeSaved) => {
    setCode(codeSaved.code);
    setLanguage(codeSaved.language);
    setOutput(codeSaved.output); // Set output state
  };

  return (
    <>
      <Helmet>
        <title>Advisions LMS</title>
        <meta name="description" content="Learning Management System" />
        <meta name="keywords" content="Advisions, LMS" />
      </Helmet>
      <HStack spacing={4}>
        <Box width="70%">
          {/* Language selector and Save button */}
          <HStack spacing={4} mb={4}>
            <LanguageSelector language={language} onSelect={onSelect} />
            <Button mt={5} onClick={onSave} >
              Save
            </Button>
          </HStack>
          {/* Code editor */}
          <Editor
            options={{
              minimap: {
                enabled: false,
              },
            }}
            height="75vh"
            theme="vs-dark"
            language={language}
            defaultValue={CODE_SNIPPETS[language]}
            onMount={onMount}
            value={code}
            onChange={(value) => setCode(value)}
          />
        </Box>
        {/* Output component */}
        <Output editorRef={editorRef} language={language} output={output} setOutput={setOutput} />
        {/* Sidebar */}
        <Sidebar onFileClick={handleFileClick} />
      </HStack>
    </>
  );
};

export default CodeEditor;
