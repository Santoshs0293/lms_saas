import React, { useState, useEffect } from 'react';
import {
  Box,
  Center,
  Container,
  Heading,
  Flex,
  Input,
  Checkbox,
  Button,
  ChakraProvider,
  useToast,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton
} from '@chakra-ui/react';
import { FaFacebookF, FaTwitter, FaGoogle, FaGithub } from 'react-icons/fa';
import { GoogleLogin } from '@react-oauth/google';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import "../../App.css"
import bg from "./bg.jpg"

const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL });
  
  const toast = useToast();

  const dispatch = useDispatch();

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    axiosInstance.post("/auth/login", {
      email,
      password,
    })
    .then((response) => {
      setLoading(false);
      const result = response.data;
      if (result.errors) {
        setError(result.errors);
      } else {
        setError(null);
        dispatch({ type: "SET__USER", payload: result.userInfo });
        toast({
          title: "Login successful",
          status: "success",
          duration: 500,
          isClosable: true,
        });
        localStorage.setItem("auth_token", result.token);
        localStorage.setItem("user", JSON.stringify(result.userInfo));
        
        // Handle redirection based on user role
        if (result.userInfo.role === "Student") {
          navigate('/');
        } else if (result.userInfo.role === "Admin") {
          navigate('/admin-dashboard');
        } else if (result.userInfo.role === "Teacher") {
          navigate('/teacher-dashboard');
        } else if (result.userInfo.role === "Principal") {
          navigate('/principal-dashboard');
        }
      }
    })
    .catch((error) => {
      setLoading(false);
      console.log(error);
      setError('Invalid email or password. Please try again.');
    });
  };

  // const handleGoogleSuccess = (credentialResponse) => {
  //   const token = credentialResponse.credential;
  //   axiosInstance.post("/auth/google-login", { token })
  //     .then((response) => {
  //       const result = response.data;
  //       if (result.errors) {
  //         setError(result.errors);
  //       } else {
  //         dispatch({ type: "SET__USER", payload: result.userInfo });
  //         localStorage.setItem("auth_token", result.token);
  //         localStorage.setItem("user", JSON.stringify(result.userInfo));
  //         history('/');
  //         toast({
  //           title: "Google Login successful",
  //           status: "success",
  //           duration: 5000,
  //           isClosable: true,
  //         });
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       setError('Google login failed. Please try again.');
  //     });
  // };

  const handleGoogleFailure = (response) => {
    console.log('Google login failed:', response);
    setError('Google login failed. Please try again.');
  };

  useEffect(() => {
    if (user && user.role === "Student") {
      navigate('/');
    } else if (user && user.role === "Admin") {
      navigate('/admin-dashboard');
    } else if (user && user.role === "Teacher") {
      navigate('/teacher-dashboard');
    } else if (user && user.role === "Principal") {
      navigate('/principal-dashboard');
    }
  }, [user, navigate]);

  return (
    <ChakraProvider>
      <Container maxW="full" bgImage={`url(${bg})`} bgSize="cover" bgPos="center" className="bg-opacity">
        <Center minH="100vh">
          <Box maxW="lg" mx="auto" bg="rgba(255, 255, 255, 0.8)" boxShadow="xl" borderRadius="xl" p="8" position="relative" top="-50px" backdropFilter="blur(30px)">
            <Box textAlign="center">
              <Heading as="h2" fontWeight="bold" mb="5">Sign In</Heading>
            </Box>
            {error && (
              <Alert status="error" mb="4">
                <AlertIcon />
                <AlertTitle mr={2}></AlertTitle>
                <AlertDescription>{error}</AlertDescription>
                <CloseButton position="absolute" right="8px" top="8px" onClick={() => setError(null)} />
              </Alert>
            )}
            <form onSubmit={formSubmitHandler}>
              <Input variant="filled" mb="4" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <Input variant="filled" mb="4" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />

              <Flex justify="center" mb="4">
                <Checkbox id="newsletter" size="lg" defaultChecked />
                <Box as="label" ml="2" htmlFor="newsletter">Subscribe to our newsletter</Box>
              </Flex>

              <Button type='submit' colorScheme="blue" size="md" mb="4" w="full" isLoading={loading}>Sign in</Button>

              <Box textAlign="center">
                <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link to="/register" className="link-danger">Register</Link></p>
              </Box>
            </form>
          </Box>
        </Center>
      </Container>
    </ChakraProvider>
  );
}

export default App;
