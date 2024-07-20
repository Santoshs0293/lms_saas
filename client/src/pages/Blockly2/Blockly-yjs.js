import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import * as Blockly from 'blockly';
import 'blockly/blocks';
import io from 'socket.io-client';
import { Box, Button, VStack, HStack, Text, useToast, Input, IconButton, ChakraProvider, AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter, Select } from '@chakra-ui/react';
import { CopyIcon } from '@chakra-ui/icons';
import { javascriptGenerator } from 'blockly/javascript';
import { pythonGenerator } from 'blockly/python';
import { phpGenerator } from 'blockly/php';
import { luaGenerator } from 'blockly/lua';
import { dartGenerator } from 'blockly/dart';
import axios from 'axios';
import Output from '../Blocky/Output';
import Sidebar from '../Blocky/Sidebar';
import Navbar from '../LandingPage/Navbar';
import { useTranslation } from 'react-i18next';
import "../../App.css";

const BlocklyComponent = () => {
  const { t, i18n } = useTranslation();

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
  const incomingChange = useRef(false);
  const [roomId, setRoomId] = useState('');
  const roomIdRef = useRef('');
  const [joinedRoom, setJoinedRoom] = useState(false);
  const [isCreator, setIsCreator] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [usernameToJoin, setUsernameToJoin] = useState('');
  const [language, setLanguage] = useState('javascript');
 
  const user = useSelector(state => state.auth);
  const userId = userData ? userData._id : null;


  useEffect(() => {
    const userDataFromStorage = localStorage.getItem('user');
    console.log('Retrieved from storage:', userDataFromStorage); // This will show exactly what is being retrieved

    if (userDataFromStorage) {
        try {
            const parsedData = JSON.parse(userDataFromStorage);
            setUserData(parsedData);
        } catch (error) {
            console.error('Failed to parse user data:', error); // This will log parsing errors, if any
        }
    }
}, []);

  const username = userData?.userName;
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });

  const createRoom = () => {
    const newRoomId = Math.random().toString(36).substr(2, 9);
    joinRoom(newRoomId);
    console.log(user._id);
    const p = user._id;
   
    try {
       axiosInstance.post(
        '/room/saveRoom',
        {
          userId : userId,
          roomId: newRoomId,
        },
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('auth_token'),
          },
        }
      );
      toast({
        title: t('Room Created'),
        description: `${t('Room ID')}: ${newRoomId}`,
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      console.error('Error saving room ID:', error);
      toast({
        title: t('Error'),
        description: t('Failed to save room ID'),
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
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


  useEffect(() => {

    if (blocklyDiv.current && toolbox.current && !workspace.current) {
      socket.current = io('https://lms.advisionslab.com', {
        path: '/socket.io/',
        transports: ['websocket'],
   
        withCredentials: true
      });
  
  
      socket.current.on('room-created', async (id) => {
        setRoomId(id);
        roomIdRef.current = id;
        setJoinedRoom(true);
        setIsCreator(true);     
        const userDataFromStorage = localStorage.getItem('user');
        const user = JSON.parse(userDataFromStorage);
        
        console.log(user._id);
        const p = user._id;
       
        try {
          await axiosInstance.post(
            '/room/saveRoom',
            {
              userId : p,
              roomId: id,
            },
            {
              headers: {
                Authorization: 'Bearer ' + localStorage.getItem('auth_token'),
              },
            }
          );
          toast({
            title: t('Room Created'),
            description: `${t('Room ID')}: ${id}`,
            status: 'success',
            duration: 5000,
            isClosable: true,
          });
        } catch (error) {
          console.error('Error saving room ID:', error);
          toast({
            title: t('Error'),
            description: t('Failed to save room ID'),
            status: 'error',
            duration: 5000,
            isClosable: true,
          });
        }
      });
  
    
  
      socket.current.on('workspace-change', (data) => {
    
        if (workspace.current && !incomingChange.current && roomIdRef.current) {
          const json = JSON.parse(data.jsonText);
          incomingChange.current = true;
          Blockly.serialization.workspaces.load(json, workspace.current);
          incomingChange.current = false;
        }
else{
  console.log("Error")
}
      });
  
      workspace.current = Blockly.inject(blocklyDiv.current, {
        toolbox: toolbox.current,
      });
  
      const debouncedEmitChange = debounce((jsonText) => {
        if (roomIdRef.current) {
          socket.current.emit('workspace-change', { roomId: roomIdRef.current, jsonText });
        }
      }, 500);
  
      workspace.current.addChangeListener(() => {
        if (!incomingChange.current) {
          try {
            const json = Blockly.serialization.workspaces.save(workspace.current);
            const jsonText = JSON.stringify(json);
            debouncedEmitChange(jsonText);
          } catch (error) {
            console.error('Error during workspace change:', error);
          }
        }
      });
  
      return () => {
        if (socket.current) {
          socket.current.disconnect();
        }
      };
    }
  }, [blocklyDiv, toolbox]);
  


  useEffect(() => {
    roomIdRef.current = roomId;
  }, [roomId]);

  const copyRoomId = () => {
    navigator.clipboard.writeText(roomId)
      .then(() => {
        toast({
          title: t('Copied'),
          description: `${t('Room ID copied to clipboard')}: ${roomId}`,
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((error) => {
        console.error(t('Failed to copy room ID'), error);
        toast({
          title: t('Error'),
          description: t('Failed to copy room ID'),
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      });
  };

  const handleConfirmJoin = () => {
    setIsOpen(false);
    socket.current.emit('approve-join', { roomId, username: usernameToJoin });
  };

  const handleCancelJoin = () => {
    setIsOpen(false);
  };

  const generateCode = () => {
    if (workspace.current) {
      try {
        let code;
        switch (language) {
          case 'javascript':
            code = javascriptGenerator.workspaceToCode(workspace.current);
            break;
          case 'python':
            code = pythonGenerator.workspaceToCode(workspace.current);
            break;
          case 'php':
            code = `<?php\n${phpGenerator.workspaceToCode(workspace.current)}`;
            break;
          case 'lua':
            code = luaGenerator.workspaceToCode(workspace.current);
            break;
          case 'dart':
            code = dartGenerator.workspaceToCode(workspace.current);
            break;
          default:
            code = '';
        }
        const xml = Blockly.Xml.workspaceToDom(workspace.current);
        const xmlText = Blockly.Xml.domToText(xml);
        setGeneratedCode(code);
        setGeneratedXml(xmlText);
      } catch (error) {
        console.error('Error generating code:', error);
      }
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

  const handleFileClick = (xmlString) => {
    try {
      console.log('XML String:', xmlString);
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlString, 'text/xml');  // Parse XML string to XML Document
      Blockly.Xml.clearWorkspaceAndLoadFromXml(xmlDoc.documentElement, workspace.current);  // Load XML DOM into Blockly workspace
      console.log('Blocks loaded into workspace successfully.');
      toast({
        title: 'Success',
        description: 'XML loaded into workspace',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      console.error('Error loading XML into workspace:', error);
      toast({
        title: 'Error',
        description: 'Failed to load XML into workspace',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };
  const updateOutput = (newOutput) => {
    setOutput(newOutput);
  };

  const [startTime, setLoginTime] = useState(new Date().toISOString());
  const [endTime, setActivityEndTime] = useState(null);
  const userActivityTimeout = useRef(null);
  const INACTIVITY_LIMIT = 20000; 
  

  // useEffect(() => {
  //   const workspace = Blockly.inject(blocklyDiv.current, {
  //     toolbox: toolbox.current,
  //   });

  //   const handleUserActivity = () => {
  //     clearTimeout(userActivityTimeout.current);
  //     userActivityTimeout.current = setTimeout(logout, INACTIVITY_LIMIT);
     
  //     setActivityEndTime(new Date().toISOString());
   
  //   };

  //   window.addEventListener('mousemove', handleUserActivity);
  //   window.addEventListener('keydown', handleUserActivity);

  //   userActivityTimeout.current = setTimeout(logout, INACTIVITY_LIMIT);

  //   return () => {
  //     clearTimeout(userActivityTimeout.current);
  
  //     window.removeEventListener('mousemove', handleUserActivity);
  //     window.removeEventListener('keydown', handleUserActivity);
  //   };
  // }, []);

  const saveActivity = async () => {
    console.log(userId)

      console.log("Hello Activity2")
      try {
        await axiosInstance.post('/api/save-activity', {
          userId,
          startTime,
          endTime,
        });
        console.log('Activity saved:', { userId, startTime, endTime });
      } catch (error) {
        console.error('Failed to save activity:', error);
      }
    };
  
    console.log(userId);
    console.log(endTime);
  const logout = async () => {
    console.log("Hello Logout");
    console.log(userId);
    console.log(endTime);
    await saveActivity(); // Ensure saveActivity is called before logging out
    localStorage.clear();

    toast({
      title: 'Logged Out',
      description: 'You have been logged out due to inactivity.',
      status: 'info',
      duration: 3000,
      isClosable: true,
    });
  };


  const [roomCount, setRoomCount] = useState(null);
  const fetchRoomCount = async (userId) => {
    try {
      const response = await axiosInstance.get(`/room/api/rooms/count?userId=${userId}`);
      setRoomCount(response.data.count);
    } catch (error) {
      console.error('Error fetching room count:', error);
      setRoomCount(null);
    }
  };

  useEffect(() => {
    if (userId) {
      fetchRoomCount(userId);
    }
  }, [userId]);
  

  return (
    <>
      <Navbar />
      <ChakraProvider>
        <VStack height="100vh" padding="10px" backgroundColor="gray.100" spacing="10px">
          <HStack spacing="10px" align="flex-start" justify="flex-start" width="100%">
            <Button backgroundColor="blue.500" color="white" onClick={createRoom} >
              {t('Create Room')}
            </Button>
            <Input
              placeholder={t('Enter Room ID')}
              value={roomId}
              onChange={(e) => setRoomId(e.target.value)}
              width={'50%'}
            />
            <IconButton
              aria-label={t('Copy Room ID')}
              icon={<CopyIcon />}
              onClick={copyRoomId}
              backgroundColor="blue.500"
              color="white"
            />
            <Button backgroundColor="purple.500" color="white" onClick={() => joinRoom(roomId)}>
              {t('Join Room')}
            </Button>
            <Select value={language} onChange={(e) => setLanguage(e.target.value)} width={"25%"}>
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
              <option value="php">PHP</option>
              <option value="lua">Lua</option>
              <option value="dart">Dart</option>
            </Select>
            <Select onChange={(e) => i18n.changeLanguage(e.target.value)} width={"20%"}>
              <option value="en">English</option>
              <option value="fr">French</option>
              <option value="es">Spanish</option>
              <option value="hi">Hindi</option>
            </Select>
          </HStack>
          <HStack flex="1" width="100%" spacing="10px">
          <Box
  ref={blocklyDiv}
  flex="1"
  height="100%"
  minHeight="400px"
  backgroundColor="gray.200" /* Change to a suitable color */
  borderRadius="md"
  border="1px solid"
  borderColor="gray.300"
  style={{ overflow: 'hidden' }} /* Hide scrollbars by default */
></Box>

            <Sidebar onFileClick={handleFileClick} />
          </HStack>
   
       
          <xml id="toolbox-categories" style={{ display: 'none' }} ref={toolbox}>
          <category
        css-icon="customIcon fa fa-cog"
        name="Logic"
        categorystyle="logic_category">
        <block type="controls_if"></block>
        <block type="logic_compare"></block>
        <block type="logic_operation"></block>
        <block type="logic_negate"></block>
        <block type="logic_boolean"></block>
        <block type="logic_null" disabled="true"></block>
        <block type="logic_ternary"></block>
      </category>
      <category name="Loops" categorystyle="loop_category">
        <block type="controls_repeat_ext">
          <value name="TIMES">
            <shadow type="math_number">
              <field name="NUM">10</field>
            </shadow>
          </value>
        </block>
        <block type="controls_repeat" disabled="true"></block>
        <block type="controls_whileUntil"></block>
        <block type="controls_for">
          <value name="FROM">
            <shadow type="math_number">
              <field name="NUM">1</field>
            </shadow>
          </value>
          <value name="TO">
            <shadow type="math_number">
              <field name="NUM">10</field>
            </shadow>
          </value>
          <value name="BY">
            <shadow type="math_number">
              <field name="NUM">1</field>
            </shadow>
          </value>
        </block>
        <block type="controls_forEach"></block>
        <block type="controls_flow_statements"></block>
      </category>
      <category name="Math" categorystyle="math_category">
        <block type="math_number" gap="32">
          <field name="NUM">123</field>
        </block>
        <block type="math_arithmetic">
          <value name="A">
            <shadow type="math_number">
              <field name="NUM">1</field>
            </shadow>
          </value>
          <value name="B">
            <shadow type="math_number">
              <field name="NUM">1</field>
            </shadow>
          </value>
        </block>
        <block type="math_single">
          <value name="NUM">
            <shadow type="math_number">
              <field name="NUM">9</field>
            </shadow>
          </value>
        </block>
        <block type="math_trig">
          <value name="NUM">
            <shadow type="math_number">
              <field name="NUM">45</field>
            </shadow>
          </value>
        </block>
        <block type="math_constant"></block>
        <block type="math_number_property">
          <value name="NUMBER_TO_CHECK">
            <shadow type="math_number">
              <field name="NUM">0</field>
            </shadow>
          </value>
        </block>
        <block type="math_round">
          <value name="NUM">
            <shadow type="math_number">
              <field name="NUM">3.1</field>
            </shadow>
          </value>
        </block>
        <block type="math_on_list"></block>
        <block type="math_modulo">
          <value name="DIVIDEND">
            <shadow type="math_number">
              <field name="NUM">64</field>
            </shadow>
          </value>
          <value name="DIVISOR">
            <shadow type="math_number">
              <field name="NUM">10</field>
            </shadow>
          </value>
        </block>
        <block type="math_constrain">
          <value name="VALUE">
            <shadow type="math_number">
              <field name="NUM">50</field>
            </shadow>
          </value>
          <value name="LOW">
            <shadow type="math_number">
              <field name="NUM">1</field>
            </shadow>
          </value>
          <value name="HIGH">
            <shadow type="math_number">
              <field name="NUM">100</field>
            </shadow>
          </value>
        </block>
        <block type="math_random_int">
          <value name="FROM">
            <shadow type="math_number">
              <field name="NUM">1</field>
            </shadow>
          </value>
          <value name="TO">
            <shadow type="math_number">
              <field name="NUM">100</field>
            </shadow>
          </value>
        </block>
        <block type="math_random_float"></block>
        <block type="math_atan2">
          <value name="X">
            <shadow type="math_number">
              <field name="NUM">1</field>
            </shadow>
          </value>
          <value name="Y">
            <shadow type="math_number">
              <field name="NUM">1</field>
            </shadow>
          </value>
        </block>
      </category>
      <category name="Text" categorystyle="text_category">
        <block type="text"></block>
        <block type="text_join"></block>
        <block type="text_append">
          <value name="TEXT">
            <shadow type="text"></shadow>
          </value>
        </block>
        <block type="text_length">
          <value name="VALUE">
            <shadow type="text">
              <field name="TEXT">abc</field>
            </shadow>
          </value>
        </block>
        <block type="text_isEmpty">
          <value name="VALUE">
            <shadow type="text">
              <field name="TEXT"></field>
            </shadow>
          </value>
        </block>
        <block type="text_indexOf">
          <value name="VALUE">
            <block type="variables_get">
              <field name="VAR">text</field>
            </block>
          </value>
          <value name="FIND">
            <shadow type="text">
              <field name="TEXT">abc</field>
            </shadow>
          </value>
        </block>
        <block type="text_charAt">
          <value name="VALUE">
            <block type="variables_get">
              <field name="VAR">text</field>
            </block>
          </value>
        </block>
        <block type="text_getSubstring">
          <value name="STRING">
            <block type="variables_get">
              <field name="VAR">text</field>
            </block>
          </value>
        </block>
        <block type="text_changeCase">
          <value name="TEXT">
            <shadow type="text">
              <field name="TEXT">abc</field>
            </shadow>
          </value>
        </block>
        <block type="text_trim">
          <value name="TEXT">
            <shadow type="text">
              <field name="TEXT">abc</field>
            </shadow>
          </value>
        </block>
        <block type="text_count">
          <value name="SUB">
            <shadow type="text"></shadow>
          </value>
          <value name="TEXT">
            <shadow type="text"></shadow>
          </value>
        </block>
        <block type="text_replace">
          <value name="FROM">
            <shadow type="text"></shadow>
          </value>
          <value name="TO">
            <shadow type="text"></shadow>
          </value>
          <value name="TEXT">
            <shadow type="text"></shadow>
          </value>
        </block>
        <block type="text_reverse">
          <value name="TEXT">
            <shadow type="text"></shadow>
          </value>
        </block>
        <label text="Input/Output:" web-class="ioLabel"></label>
        <block type="text_print">
          <value name="TEXT">
            <shadow type="text">
              <field name="TEXT">abc</field>
            </shadow>
          </value>
        </block>
        <block type="text_prompt_ext">
          <value name="TEXT">
            <shadow type="text">
              <field name="TEXT">abc</field>
            </shadow>
          </value>
        </block>
      </category>
      <category name="Lists" categorystyle="list_category">
        <block type="lists_create_with">
          <mutation items="0"></mutation>
        </block>
        <block type="lists_create_with"></block>
        <block type="lists_repeat">
          <value name="NUM">
            <shadow type="math_number">
              <field name="NUM">5</field>
            </shadow>
          </value>
        </block>
        <block type="lists_length"></block>
        <block type="lists_isEmpty"></block>
        <block type="lists_indexOf">
          <value name="VALUE">
            <block type="variables_get">
              <field name="VAR">list</field>
            </block>
          </value>
        </block>
        <block type="lists_getIndex">
          <value name="VALUE">
            <block type="variables_get">
              <field name="VAR">list</field>
            </block>
          </value>
        </block>
        <block type="lists_setIndex">
          <value name="LIST">
            <block type="variables_get">
              <field name="VAR">list</field>
            </block>
          </value>
        </block>
        <block type="lists_getSublist">
          <value name="LIST">
            <block type="variables_get">
              <field name="VAR">list</field>
            </block>
          </value>
        </block>
        <block type="lists_split">
          <value name="DELIM">
            <shadow type="text">
              <field name="TEXT">,</field>
            </shadow>
          </value>
        </block>
        <block type="lists_sort"></block>
        <block type="lists_reverse"></block>
      </category>
      <sep></sep>
      <category
        name="Variables"
        categorystyle="variable_category"
        custom="VARIABLE"></category>
      <category
        name="Functions"
        categorystyle="procedure_category"
        custom="PROCEDURE"></category>
  </xml>
    
     {roomCount !== null ? (
        <Text>Number of Rooms Created: {roomCount}</Text>
      ) : (
        <Text>Loading room count...</Text>
      )}
   
     
          <HStack width="100%" spacing="10px">
            <VStack flex="1" spacing="10px" mt={5}>
              <Box
                width="100%"
                padding="10px"
                backgroundColor="gray.200"
                borderRadius="md"
                overflowY="auto"
                maxHeight="300px"
              >
                <Output
                  language={language}
                  code={generatedCode}
                  output={output}
                  setOutput={updateOutput}
                  editorRef={editorRef}
                />
              </Box>
            </VStack>
            <VStack flex="1" spacing="10px"  >
              
              <HStack spacing="10px"  >
                <Button onClick={generateCode} colorScheme="blue">
                  {t('Generate Code')}
                </Button>
                <Button onClick={saveCodeAndOutput} colorScheme="green">
                  {t('Save Code')}
                </Button>
                <Button onClick={saveActivity} colorScheme="green">
                  {('Save Activity')}
                </Button>
              </HStack>
              <Box
                width="100%"
                padding="10px"
                backgroundColor="gray.200"
                borderRadius="md"
                overflowY="auto"
                height="200px"
              >
                {generatedCode ? (
                  <Text fontFamily="monospace">{generatedCode}</Text>
                ) : (
                  <Text>{t('Click Generate Code')}</Text>
                )}
              </Box>
            </VStack>
          </HStack>
        </VStack>
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={undefined}
          onClose={handleCancelJoin}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                {t('Join Room Request')}
              </AlertDialogHeader>
              <AlertDialogBody>
                {t('User')} {usernameToJoin} {t('wants to join room')} {roomId}. {t('Approve')}?
              </AlertDialogBody>
              <AlertDialogFooter>
                <Button onClick={handleCancelJoin}>
                  {t('Cancel')}
                </Button>
                <Button colorScheme="blue" onClick={handleConfirmJoin} ml={3}>
                  {t('Approve')}
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </ChakraProvider>
    </>
  );
};

export default BlocklyComponent;

function debounce(func, wait, immediate) {
  let timeout;
  return function () {
    const context = this, args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
