import React, { useEffect, useRef, useState } from 'react';
import { inject, Events, serialization } from 'blockly';
import 'blockly/blocks';
import { javascriptGenerator } from 'blockly/javascript';
import Output from './Output.js';
import axios from 'axios';
import { CODE_SNIPPETS } from '../CodeEditor/constants.js';
import Sidebar from './Sidebar.js';
import { Box, Button, VStack, HStack, Text, useToast, ChakraProvider } from '@chakra-ui/react';
import Navbar from '../LandingPage/Navbar.js';
import io from 'socket.io-client';

const BlocklyComponent = () => {
  const blocklyDiv = useRef(null);
  const toolbox = useRef(null);
  const [workspace, setWorkspace] = useState(null);
  const [generatedCode, setGeneratedCode] = useState('');
  const [generatedJson, setGeneratedJson] = useState('');
  const [userData, setUserData] = useState(null);
  const [code, setCode] = useState(CODE_SNIPPETS['javascript']);
  const [language, setLanguage] = useState('javascript');
  const [output, setOutput] = useState('');
  const [userFiles, setUserFiles] = useState([]);
  const editorRef = useRef(null);
  const toast = useToast();
  const socket = useRef(null);

  useEffect(() => {
    const userDataFromStorage = localStorage.getItem('user');
    if (userDataFromStorage) {
      const parsedUserData = JSON.parse(userDataFromStorage);
      setUserData(parsedUserData);
    }
  }, []);

  const userId = userData ? userData._id : null;
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });

  const generateCodeFromBlockly = () => {
    if (workspace) {
      const code = javascriptGenerator.workspaceToCode(workspace);
      const json = serialization.workspaces.save(workspace);
      const jsonString = JSON.stringify(json);
      return { code, json: jsonString };
    } else {
      console.error('Workspace is not initialized');
      return { code: '', json: '' };
    }
  };

  useEffect(() => {
    if (blocklyDiv.current && toolbox.current) {
      const workspaceInstance = inject(blocklyDiv.current, {
        toolbox: toolbox.current,
      });
      setWorkspace(workspaceInstance);
      workspaceInstance.addChangeListener(handleWorkspaceChange);

      return () => {
        workspaceInstance.removeChangeListener(handleWorkspaceChange);
      };
    }
  }, []);

  useEffect(() => {
    socket.current = io(process.env.REACT_APP_SOCKET_URL);

    socket.current.on('workspace-change', (data) => {
      if (workspace) {
        const json = JSON.parse(data);
        serialization.workspaces.load(json, workspace);
      }
    });

    return () => {
      if (socket.current) {
        socket.current.disconnect();
      }
    };
  }, [workspace]);

  const handleWorkspaceChange = (event) => {
    if (
      event.type === Events.BLOCK_MOVE ||
      event.type === Events.BLOCK_CREATE ||
      event.type === Events.BLOCK_DELETE ||
      event.type === Events.BLOCK_CHANGE
    ) {
      const { code, json } = generateCodeFromBlockly();
      setGeneratedCode(code);
      setGeneratedJson(json);
      socket.current.emit('workspace-change', json);
    }
  };

  const generateCode = () => {
    const { code, json } = generateCodeFromBlockly();
    setGeneratedCode(code);
    setGeneratedJson(json);
  };

  const updateOutput = (newOutput) => {
    setOutput(newOutput);
  };

  const saveCodeAndOutput = async () => {
    try {
      const response = await axiosInstance.post(
        '/blockly/blocklysave',
        {
          userId,
          generatedCode,
          output,
          json: generatedJson,
        },
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('auth_token'),
          },
        }
      );
      if (response.data.success) {
        toast({
          title: 'Success',
          description: 'Code Saved to Database',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
      } else {
        toast({
          title: 'Error',
          description: 'Failed to save code',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error('Error saving code:', error);
      toast({
        title: 'Error',
        description: 'An error occurred while saving code',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleFileClick = async (fileId) => {
    try {
      const response = await axiosInstance.get(`/file/${fileId}`);
      if (response.data && response.data.json) {
        const json = JSON.parse(response.data.json);
        serialization.workspaces.load(json, workspace);
        setGeneratedCode(response.data.code);
        setOutput(response.data.output);
      }
    } catch (error) {
      console.error('Error loading file:', error);
      toast({
        title: 'Error',
        description: 'Failed to load file',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Navbar />
      <ChakraProvider>
        <Box display="flex" height="100vh" padding="10px" backgroundColor="gray.100">
          <Box
            ref={blocklyDiv}
            flex="1"
            height="100%"
            minWidth="800px"
            width="100%"
            backgroundColor="white"
            borderRight="1px solid"
            borderColor="gray.300"
          ></Box>
          <xml style={{ display: 'none' }} ref={toolbox}>
            <block type="controls_if"></block>
            <block type="logic_compare"></block>
            <block type="controls_repeat_ext"></block>
            <block type="math_number"></block>
            <block type="math_arithmetic"></block>
            <block type="text"></block>
            <block type="text_print"></block>
            <block type="variables_get"></block>
            <block type="variables_set"></block>
            <block type="controls_whileUntil"></block>
            <block type="controls_for"></block>
            <block type="logic_boolean"></block>
            <block type="logic_negate"></block>
            <block type="logic_operation"></block>
            <block type="controls_forEach"></block>
          </xml>
          <VStack flex="1" padding="10px" spacing="10px">
            <HStack spacing="10px">
              <Button colorScheme="blue" onClick={generateCode}>
                Generate Code
              </Button>
              <Button colorScheme="green" onClick={saveCodeAndOutput}>
                Save
              </Button>
            </HStack>
            <Box
              width="100%"
              padding="10px"
              backgroundColor="gray.200"
              borderRadius="md"
              overflowY="auto"
              height="300px"
            >
              <Text fontFamily="monospace">{generatedCode}</Text>
              <Text fontFamily="monospace" marginTop="10px">{generatedJson}</Text>
            </Box>
            <Box width="100%" marginTop="20px">
              <Text fontSize="lg" fontWeight="bold">
                Output:
              </Text>
              <Box
                width="100%"
                padding="10px"
                backgroundColor="gray.200"
                borderRadius="md"
                overflowY="auto"
                maxHeight="300px"
              >
                <Output
                  language="javascript"
                  code={generatedCode}
                  output={output}
                  setOutput={updateOutput}
                  editorRef={editorRef}
                />
              </Box>
            </Box>
          </VStack>
          <Sidebar onFileClick={handleFileClick} />
        </Box>
      </ChakraProvider>
    </>
  );
};

export default BlocklyComponent;
