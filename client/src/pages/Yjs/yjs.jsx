import { useState, useRef, useEffect } from 'react';
import Editor from "@monaco-editor/react";
import * as Y from "yjs";
import { WebrtcProvider } from "y-webrtc";
import { MonacoBinding } from "y-monaco";
import { Awareness } from 'y-protocols/awareness.js';
import Navbar from '../LandingPage/Navbar';
import { ChakraProvider, Box, Button, Input, VStack, HStack, Heading, Text, Flex, Spacer } from '@chakra-ui/react';
import SimplePeer from 'simple-peer';
import { CODE_SNIPPETS } from "../CodeEditor/constants.js";
import LanguageSelector from "../CodeEditor/components/LanguageSelector.js";
import Output from "../CodeEditor/components/Output.js"; 
import Sidebar from './SideBar.js';
import axios from 'axios';

function Yjs() {
  const [roomName, setRoomName] = useState('');
  const [joinRoomName, setJoinRoomName] = useState('');
  const [currentRoom, setCurrentRoom] = useState('');
  const [isEditorReady, setIsEditorReady] = useState(false);
  const [roomJoined, setRoomJoined] = useState(false);
  const editorRef = useRef(null);
  const ydocRef = useRef(null);
  const providerRef = useRef(null);
  const awarenessRef = useRef(null);
  const peersRef = useRef({});
  const initializedRef = useRef(false);
  const [code, setCode] = useState(CODE_SNIPPETS["javascript"]);
  const [language, setLanguage] = useState("javascript");
  const [output, setOutput] = useState("");
  const [userData, setUserData] = useState(null);
  const [students, setStudents] = useState([]);
  const [joinedStudents, setJoinedStudents] = useState([]);

  useEffect(() => {
    const userDataFromStorage = localStorage.getItem("user");
    if (userDataFromStorage) {
      setUserData(JSON.parse(userDataFromStorage));
      fetchSavedCode(JSON.parse(userDataFromStorage)._id);
    }
    console.log('User data:', userData);
  }, []);

  const userId = userData ? userData._id : null;
  const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL });
  
  const fetchSavedCode = async (userId) => {
    try {
      const response = await axiosInstance.get(
        `/api/code`,
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

  // Handle code select
  const handleCodeSelect = (code, language) => {
    if (editorRef.current && isEditorReady) {
      editorRef.current.setValue(code);
      editorRef.current.getModel().updateOptions({ language });
    }
  };

  // Handle create room
  const handleCreateRoom = async () => {
    if (!roomName) return;

    setRoomJoined(true);
    setCurrentRoom(roomName);

    if (isEditorReady && editorRef.current) {
      setupYjs(roomName);
    }
  };

  // Handle join room
  const handleJoinRoom = async () => {
    if (!joinRoomName) return;

    setRoomJoined(true);
    setCurrentRoom(joinRoomName);

    if (isEditorReady && editorRef.current) {
      setupYjs(joinRoomName);
    }
  };

  // Setup Yjs
  const setupYjs = (room) => {
    if (!ydocRef.current) {
      const doc = new Y.Doc();
      ydocRef.current = doc;

      if (!providerRef.current) {
        const provider = new WebrtcProvider(room, doc, {
          maxConns: Number.POSITIVE_INFINITY,
          filterBcConns: false,
        });
        providerRef.current = provider;

        provider.on('peers', (event) => {
          const { addedPeers, removedPeers } = event;
          console.log('Peers event:', addedPeers, removedPeers);

          addedPeers.forEach(peerId => {
            const peer = new SimplePeer({
              initiator: false,
              trickle: false,
            });

            peer.on('signal', (data) => {
              providerRef.current.webrtc.signaler.send(peerId, data);
            });

            peer.on('stream', (remoteStream) => {
              console.log('Received remote stream');
            });

            providerRef.current.webrtc.signaler.on(peerId, (data) => {
              peer.signal(data);
            });

            peersRef.current[peerId] = peer;
          });

          removedPeers.forEach(peerId => {
            if (peersRef.current[peerId]) {
              peersRef.current[peerId].destroy();
              delete peersRef.current[peerId];
            }
          });
        });
      }

      if (!awarenessRef.current) {
        const awareness = new Awareness(doc);
        awarenessRef.current = awareness;
      }

      const type = doc.getText("monaco");

      if (editorRef.current.getModel()) {
        new MonacoBinding(type, editorRef.current.getModel(), 
          new Set([editorRef.current]), awarenessRef.current);
      }

      awarenessRef.current.setLocalStateField("user", {
        id: userData._id,
        name: userData.userName,
      });

      initializedRef.current = true;

      awarenessRef.current.on('change', () => {
        const states = awarenessRef.current.getStates();
        const studentsList = Array.from(states.values()).map(state => state.user.name);
        setJoinedStudents(studentsList);
      });

      // When the component mounts, get the initial list of joined students
      const initialStates = awarenessRef.current.getStates();
      const initialStudentsList = Array.from(initialStates.values()).map(state => state.user.name);
      setJoinedStudents(initialStudentsList);
    }
  };

  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor;
    setIsEditorReady(true);

    if (roomJoined) {
      setupYjs(currentRoom);
    }
  };

  useEffect(() => {
    return () => {
      if (providerRef.current) {
        providerRef.current.disconnect();
        providerRef.current = null;
      }
      if (ydocRef.current) {
        ydocRef.current.destroy();
        ydocRef.current = null;
      }
      if (awarenessRef.current) {
        awarenessRef.current.destroy();
        awarenessRef.current = null;
      }
      initializedRef.current = false;
    };
  }, []);

  const onSelect = (language) => {
    setLanguage(language);
    setCode(CODE_SNIPPETS[language]);
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
        alert("Code saved successfully!");
      } else {
        alert("Error occurred while saving code");
      }
    } catch (error) {
      console.error("Error saving code:", error);
      alert("Error occurred while saving code");
    }
  };

  return (
    <>
      <Navbar />
      <ChakraProvider>
        <Box bg="#0f0a19" color="gray.500" minHeight="100vh" padding="20px">
          {roomJoined && (
            <Flex justifyContent="center" alignItems="center">
               <Spacer />
              <Heading size="md" color="white" textAlign="center" flex="5">Room : {currentRoom}</Heading>
             
              <Button colorScheme="teal" onClick={() => setRoomJoined(false)}>
                Back to Room Selection
              </Button>
            </Flex>
          )}
          {!roomJoined ? (
               <VStack spacing={8} align="center" justify="center" height="100%" mt={40}>
               <Heading color="white">Create or Join a Room</Heading>
               <HStack spacing={8} align="start">
                 <VStack spacing={4} align="center">
                   <Input
                     placeholder="Room Name to Create"
                     value={roomName}
                     onChange={(e) => setRoomName(e.target.value)}
                     width="300px"
                     textAlign="center"
                   />
                   <Button colorScheme="teal" onClick={handleCreateRoom} width="300px">
                     Create Room
                   </Button>
                 </VStack>
                 <VStack spacing={4} align="center">
                   <Input
                     placeholder="Room Name to Join"
                     value={joinRoomName}
                     onChange={(e) => setJoinRoomName(e.target.value)}
                     width="300px"
                     textAlign="center"
                   />
                   <Button colorScheme="teal" onClick={handleJoinRoom} width="300px">
                     Join Room
                   </Button>
                 </VStack>
               </HStack>
             </VStack>
          ) : (
            <HStack spacing={4} mt={4}>
              <Box width="70%">
              <HStack spacing={4} mb={4}>
            <LanguageSelector language={language} onSelect={onSelect} />
            <Button mt={5} onClick={onSave} >
              Save
            </Button>
          </HStack>
                <Editor
                options={{
                  minimap: {
                    enabled: false,
                  },
                }}
                  height="75vh"
                  theme="vs-dark"
                  onMount={handleEditorDidMount}

                />
               
                {/* <Box mt={4}>
                  <Heading size="md" color="white">Students in Room:</Heading>
                  {joinedStudents.length > 0 ? (
                    joinedStudents.map((studentName, index) => (
                      <Text key={index} color="white">{studentName}</Text>
                    ))
                  ) : (
                    <Text>No students in the room</Text>
                  )}
                </Box> */}
              </Box>
              <Output editorRef={editorRef} language={language} output={output} setOutput={setOutput} />
              <Sidebar onCodeSelect={handleCodeSelect} />
            </HStack>
          )}
        </Box>
      </ChakraProvider>
    </>
  );
}

export default Yjs;
