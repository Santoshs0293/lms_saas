import React, { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
import { Box, Button, VStack, HStack, Text, Textarea, Input, useToast, IconButton, ChakraProvider } from '@chakra-ui/react';
import axios from 'axios';
import Output from '../Blocky/Output';
import Sidebar from './SideBar';
import Navbar from '../LandingPage/Navbar';
import { CODE_SNIPPETS } from "../CodeEditor/constants.js";
import LanguageSelector from "./Language.js";
import { CopyIcon } from '@chakra-ui/icons';

const CollaborativeEditor = () => {
  const socket = useRef(null);
  const [text, setText] = useState('');
  const [output, setOutput] = useState('');
  const toast = useToast();
  const editorRef = useRef(null);
  const [userData, setUserData] = useState(null);
  const [code, setCode] = useState(CODE_SNIPPETS["javascript"]);
  const [language, setLanguage] = useState("javascript");
  const [roomId, setRoomId] = useState('');
  const [joinedRoom, setJoinedRoom] = useState(false);

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
    console.log('Initializing socket connection');
    socket.current = io('https://lms.advisionslab.com', {
      path: '/socket.io/',
      transports: ['websocket'],
 
      withCredentials: true
    });

    socket.current.on('text-change', (data) => {
      if (data.roomId === roomId) {
        console.log('Received text-change data', data.text);
        setText(data.text);
      }
    });

    return () => {
      if (socket.current) {
        socket.current.disconnect();
      }
    };
  }, [roomId]);

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    if(roomId)
      {
    console.log('Emitting text-change', newText);
    socket.current.emit('text-change', { roomId: roomId, text: newText });
      }
      else{
        console.log("Error")
      }
  };

  const fetchSavedCode = async (userId) => {
    try {
      const response = await axiosInstance.get(
        '/api/code',
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

  const handleCodeSelect = (code, language) => {
    setText(code);
    setLanguage(language);
  };

  const onSave = async () => {
    try {
      const response = await axiosInstance.post(
        "/api/save",
        { language, code, output, userId },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("auth_token"),
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
          description: 'Error occurred while saving code',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error("Error saving code:", error);
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
        setText(response.data.code);
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

  const onSelect = (language) => {
    setLanguage(language);
    setCode(CODE_SNIPPETS[language]);
  };

  const updateOutput = (newOutput) => {
    setOutput(newOutput);
  };

  const createRoom = () => {
    const newRoomId = Math.random().toString(36).substr(2, 9);
    joinRoom(newRoomId);
  };

  const joinRoom = (id) => {
    if (socket.current && id) {
      socket.current.emit('join-room', id);
      setRoomId(id);
      setJoinedRoom(true);
      toast({
        title: 'Joined Room',
        description:`You have joined room: ${id}`,
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const copyRoomId = () => {
    navigator.clipboard.writeText(roomId)
      .then(() => {
        toast({
          title: 'Copied',
          description: `Room ID copied to clipboard: ${roomId}`,
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((error) => {
        console.error('Failed to copy room ID:', error);
        toast({
          title: 'Error',
          description: 'Failed to copy room ID',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      });
  };

  return (
    <>
      <Navbar />
      <ChakraProvider>
        <Box display="flex" height="100vh" padding="10px" backgroundColor="gray.100">
          <VStack flex="1" padding="10px" spacing="10px">
            <HStack spacing="10px" align="flex-start" justify="flex-start" width="100%">
              <LanguageSelector language={language} onSelect={onSelect} />
              <Button backgroundColor="blue.500" color="white" onClick={onSave}>
                Save
              </Button>
              <Button backgroundColor="green.500" color="white" onClick={createRoom}>
                Create Room
              </Button>
              
              <Input
                placeholder="Enter Room ID"
                value={roomId}
                onChange={(e) => setRoomId(e.target.value)}
                disabled={joinedRoom}
                width={"40%"}
              />
           
               <IconButton
                    aria-label="Copy Room ID"
                    icon={<CopyIcon />}
                    onClick={copyRoomId}
                    backgroundColor="blue.500"
                    color="white"
                  />
              
              <Button backgroundColor="purple.500" color="white" onClick={() => joinRoom(roomId)}>
                Join Room
              </Button>
            </HStack>
            <Box
              width="100%"
              padding="10px"
              backgroundColor="gray.200"
              borderRadius="md"
              overflowY="auto"
              height="60vh"
            >
              <Textarea
                value={text}
                onChange={handleTextChange}
                placeholder="Start typing..."
                size="sm"
                height="100%"
                ref={editorRef}
              />
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
                height="30vh"
              >
                <Output
                  language={language}
                  code={text}
                  output={output}
                  setOutput={updateOutput}
                  editorRef={editorRef}
                />
              </Box>
            </Box>
          </VStack>
          <Sidebar onFileClick={handleFileClick} onCodeSelect={handleCodeSelect} />
        </Box>
      </ChakraProvider>
    </>
  );
};

export default CollaborativeEditor;
