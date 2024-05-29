import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  Grid,
  ChakraProvider,
  Center,
  useToast
} from '@chakra-ui/react';
import Sidebar from '../SideBar';

function StudentsDetails() {
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    address: {
      street: '',
      city: '',
      state: '',
      zip: '',
      country: '',
    },
    description: '',
    links: [''],
    identityVerifications: [''],
    phoneNumber: '',
  });
  const [userData, setUserData] = useState(null);
  const toast = useToast();
  useEffect(() => {
      const userDataFromStorage = localStorage.getItem('user');
      console.log(userDataFromStorage)
      if (userDataFromStorage) {
          setUserData(JSON.parse(userDataFromStorage));
      }
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const nameArray = name.split('.');
    if (nameArray.length > 1) {
      const [parent, child] = nameArray;
      setFormData({
        ...formData,
        [parent]: {
          ...formData[parent],
          [child]: value,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : value,
      });
    }
  };

  const handleLinkChange = (index, e) => {
    const newLinks = [...formData.links];
    newLinks[index] = e.target.value;
    setFormData({ ...formData, links: newLinks });
  };

  const addLinkField = () => {
    setFormData({ ...formData, links: [...formData.links, ''] });
  };

  const handleIdentityChange = (index, e) => {
    const newIdentities = [...formData.identityVerifications];
    newIdentities[index] = e.target.value;
    setFormData({ ...formData, identityVerifications: newIdentities });
  };

  const addIdentityField = () => {
    setFormData({
      ...formData,
      identityVerifications: [...formData.identityVerifications, ''],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting form data:', formData); // Log form data for debugging
    try {
      const userId = userData._id; // Assuming userData contains the userId
      const response = await axios.put(`http://localhost:5000/auth/details/${userId}`, formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      toast({
        title: "Data saved successfully.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      console.log('User updated:', response.data);
    } catch (error) {
      console.error('There was an error updating the user:', error);
    }
  };
  

  return (
    <div>
    <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header bg-white" id="appContent">
  
      <div className="app-main">
        <Sidebar/>
        <div className="app-main-outer">
          <div className="app-main-inner">
            <div className="page-title-actions px-3 d-flex">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="">Dashboard</a></li>
                  <li className="breadcrumb-item"><a href="">Instructor</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Create</li>
                </ol>
              </nav>
            </div>
    <ChakraProvider>
    <Box p={6} borderWidth="1px" borderRadius="lg">
      <form onSubmit={handleSubmit}>
      {userData ? (
        <VStack spacing={4} align="stretch">
          <Grid templateColumns="repeat(2, 1fr)" gap={4}>
            <FormControl isDisabled>
              <FormLabel>User Name</FormLabel>
              <Input
                type="text"
                name="userName"
                value={userData.userName}
                onChange={handleChange}
                isReadOnly // Make it read-only
              />
            </FormControl>
            <FormControl isDisabled>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                name="email"
                value={userData.email}
                onChange={handleChange}
                isReadOnly // Make it read-only
              />
            </FormControl>
      
          </Grid>
          <Grid templateColumns="repeat(2, 1fr)" gap={4}>
            <FormControl>
              <FormLabel>Street</FormLabel>
              <Input
                type="text"
                name="address.street"
                value={formData.address.street}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>City</FormLabel>
              <Input
                type="text"
                name="address.city"
                value={formData.address.city}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>State</FormLabel>
              <Input
                type="text"
                name="address.state"
                value={formData.address.state}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>ZIP</FormLabel>
              <Input
                type="text"
                name="address.zip"
                value={formData.address.zip}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Country</FormLabel>
              <Input
                type="text"
                name="address.country"
                value={formData.address.country}
                onChange={handleChange}
              />
            </FormControl>
          </Grid>
          <FormControl>
            <FormLabel>Description</FormLabel>
            <Textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Links</FormLabel>
            {formData.links.map((link, index) => (
              <Input
                key={index}
                type="text"
                value={link}
                onChange={(e) => handleLinkChange(index, e)}
                mb={2} // Add margin bottom for spacing between inputs
              />
            ))}
            <Button type="button" onClick={addLinkField} size="sm">
              Add Link
            </Button>
          </FormControl>
          <FormControl>
            <FormLabel>Identity Verifications</FormLabel>
            {formData.identityVerifications.map((identity, index) => (
              <Input
                key={index}
                type="text"
                value={identity}
                onChange={(e) => handleIdentityChange(index, e)}
                mb={2} // Add margin bottom for spacing between inputs
              />
            ))}
            <Button type="button" onClick={addIdentityField} size="sm">
              Add Identity
            </Button>
          </FormControl>
          <FormControl>
            <FormLabel>Phone Number</FormLabel>
            <Input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </FormControl>
          <Center>
                          <Button colorScheme="blue" style={{ width: '300px' }} type="submit">
                            Register
                          </Button>
                        </Center>
        </VStack>
              ) : (
                <p>User Not logged In</p>
              )}
      </form>
    </Box>
    </ChakraProvider>
    </div>
    </div>
    </div>
    </div>
    </div>
  );
}

export default StudentsDetails;
