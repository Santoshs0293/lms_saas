import React, { useState, useEffect } from 'react';
import {
  Container,
  Box,
  Heading,
  Flex,
  Input,
  Checkbox,
  Button,
  Center,
  ChakraProvider,
  useToast // Import useToast from Chakra UI
} from '@chakra-ui/react';
import { useSelector } from "react-redux";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaGoogle, FaGithub } from 'react-icons/fa';
import bg from "./bg.jpg"

function Register() {

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const history = useNavigate();
  const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL });

  const { user } = useSelector((state) => state.auth);

  const toast = useToast(); // Initialize useToast hook

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
    axiosInstance.post("/auth/register", {
      userName,
      email,
      password,
      confirmPassword,
    })
      .then((response) => {
        setLoading(false);
        const result = response.data;
        console.log(result);
        if (result.errors) {
          setError(result.errors);
        } else {
          setError(null);
          toast({
            title: "Registration successful",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
          setTimeout(() => {
            history("/login");
          }, 500);
        }
      })
      .catch((error) => {
        setLoading(false);
        setError("An error occurred. Please try again.");
        console.log(error);
      });
  };

  useEffect(() => {
    if (user && user.role === "Student") {
      history('/');
    } else if (user && user.role === "Admin") {
      history('/admin-dashboard');
    } else if (user && user.role === "Teacher") {
      history('/teacher-dashboard');
    }
  }, [user]);

  return (
    <ChakraProvider>
      <Container maxW="full" bgImage={`url(${bg})`} bgSize="cover" bgPos="center" >
        <Center minH="100vh">
          <Box maxW="lg" mx="auto" bg="rgba(255, 255, 255, 0.8)" boxShadow="xl" borderRadius="xl" p="8" position="relative" top="-40px" backdropFilter="blur(30px)" >
            <Box textAlign="center">
              <Heading as="h2" fontWeight="bold" mb="5">Sign up </Heading>
            </Box>
            <form onSubmit={formSubmitHandler}>
              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}

              <Flex mb="4">
                <Box flex="1" mr="2">
                  <Input variant="filled" mb="4" onChange={(e) => setUserName(e.target.value)}
                    placeholder="Enter Your Username" />
                </Box>
              </Flex>

              <Input variant="filled" mb="4" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
              <Input variant="filled" mb="4" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
              <Input variant="filled" mb="4" type="password" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} />

              <Flex justify="center" mb="4">
                <Checkbox id="newsletter" size="lg" defaultChecked />
                <Box as="label" ml="2" htmlFor="newsletter">Subscribe to our newsletter</Box>
              </Flex>

              <Button type="submit" colorScheme="blue" size="md" mb="4" w="full">Sign Up</Button>

              <Box textAlign="center">
                {/* <Box as="p">or sign up with:</Box>
                <Flex justify="center" mt="2">
                  <Button as="a" variant="link" href="#" color="blue.500" mx="3" size="sm"><FaFacebookF /></Button>
                  <Button as="a" variant="link" href="#" color="blue.500" mx="3" size="sm"><FaTwitter /></Button>
                  <Button as="a" variant="link" href="#" color="blue.500" mx="3" size="sm"><FaGoogle /></Button>
                  <Button as="a" variant="link" href="#" color="blue.500" mx="3" size="sm"><FaGithub /></Button>
                </Flex> */}
                <p className="small fw-bold mt-2 pt-1 mb-0"><Link to="/login"
                  className="text-black">Already User? <span className="link-danger">Login to Your Account</span></Link></p>
              </Box>
            </form>
          </Box>
        </Center>
      </Container>
    </ChakraProvider>
  );
}

export default Register;
