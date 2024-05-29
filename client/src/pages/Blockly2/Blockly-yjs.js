import React, { useEffect, useRef, useState } from 'react';
import * as Blockly from 'blockly/core';
import 'blockly/blocks';
import 'blockly/javascript';
import io from 'socket.io-client';
import { Box, Button, VStack, HStack, Text, useToast, ChakraProvider } from '@chakra-ui/react';
import { javascriptGenerator } from 'blockly/javascript';
import axios from 'axios';
import Output from '../Blocky/Output';
import Sidebar from '../Blocky/Sidebar';
import Navbar from '../LandingPage/Navbar';

const BlocklyComponent = () => {
  const blocklyDiv = useRef(null);
  const toolbox = useRef(null);
  const workspace = useRef(null);
  const socket = useRef(null);
  const [generatedCode, setGeneratedCode] = useState('');
  const [generatedXml, setGeneratedXml] = useState('');
  const [output, setOutput] = useState('');
  const toast = useToast();
  const editorRef = useRef(null);
  const [userData, setUserData] = useState(null);

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

  useEffect(() => {
    if (blocklyDiv.current && toolbox.current) {
      console.log('Initializing socket connection');
//      socket.current = io('https://lms.advisionslab.com/socket.io/');
      socket.current = io('https://lms.advisionslab.com', {
        path: '/socket.io/',
        transports: ['websocket'],
        withCredentials: true
      });
      socket.current.on('workspace-change', (data) => {
        if (workspace.current) {
          console.log('Received workspace-change data', data);
          const json = JSON.parse(data);
          Blockly.serialization.workspaces.load(json, workspace.current);
        }
      });

      console.log('Injecting Blockly workspace');
      workspace.current = Blockly.inject(blocklyDiv.current, {
        toolbox: toolbox.current,
      });

      workspace.current.addChangeListener(() => {
        const json = Blockly.serialization.workspaces.save(workspace.current);
        const jsonText = JSON.stringify(json);
        console.log('Emitting workspace-change', jsonText);
        socket.current.emit('workspace-change', jsonText);
        generateCode();
      });


    

      return () => {
        if (socket.current) {
          socket.current.disconnect();
        }
      };
    }
  }, [blocklyDiv, toolbox]);

  const generateCode = () => {
    if (workspace.current) {
      const code = javascriptGenerator.workspaceToCode(workspace.current);
      const xml = Blockly.Xml.workspaceToDom(workspace.current);
      const xmlText = Blockly.Xml.domToText(xml);
      setGeneratedCode(code);
      setGeneratedXml(xmlText);
    }
  };

  const saveCodeAndOutput = async () => {
    try {
      const response = await axiosInstance.post(
        '/blockly/blocklysave',
        {
          userId,
          generatedCode,
          output,
          xml: generatedXml,
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
        Blockly.serialization.workspaces.load(json, workspace.current);
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

  const updateOutput = (newOutput) => {
    setOutput(newOutput);
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
