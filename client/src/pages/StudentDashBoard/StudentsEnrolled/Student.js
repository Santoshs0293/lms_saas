import React, { useEffect, useState } from "react";
import Sidebar from '../SideBar';
import axios from "axios";
import { Link } from "react-router-dom";
import {
  ChakraProvider,
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useToast
} from '@chakra-ui/react';

const Student = () => {
  const [data, setData] = useState([]);
  const [extraDetails, setExtraDetails] = useState([]);
  const [message, setMessage] = useState("");
  const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL });
  const [userData, setUserData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  const toast = useToast();
  const [formData, setFormData] = useState({
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

  useEffect(() => {
    const userDataFromStorage = localStorage.getItem('user');
    if (userDataFromStorage) {
      setUserData(JSON.parse(userDataFromStorage));
    }
  }, []);

  useEffect(() => {
    if (userData) {
      fetchUserDetails(userData._id);
    }
  }, [userData]);

  const fetchUserDetails = async (userId) => {
    try {
      const response = await axios.get(`http://localhost:5000/auth/details/${userId}`);
      setUserDetails(response.data);
      setFormData(response.data);
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
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
        [name]: value,
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
    try {
      const userId = userData._id;
      await axios.put(`http://localhost:5000/auth/details/${userId}`, formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setShowModal(false);
      fetchUserDetails(userId);
      toast({
        title: "Data saved successfully.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const handleEditClick = () => {
    setShowModal(true);
  };

  return (
    <ChakraProvider>
      <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header" id="appContent">
        <div className="app-main">
          <Sidebar />
          <div className="app-main-outer">
            <div className="app-main-inner">
              <div className="page-title-actions px-3 d-flex">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="">Dashboard</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Enrollment</li>
                  </ol>
                </nav>
              </div>
              <div className="row" id="deleteTableItem">
                <div className="col-md-12">
                  <div className="card mb-5">
                    <div className="card-body">
                      <div className="table-responsive-lg">
                        <table id="dataTable" className="table">
                          <thead>
                            <tr style={{ textAlign: 'center' }}>
                              <th><strong>Enroll ID</strong></th>
                              <th><strong>Student</strong></th>
                              <th><strong>Email</strong></th>
                              <th style={{ width: '15%' }}><strong>Role</strong></th>
                              <th><strong>Last Activity</strong></th>
                              <th><strong>Status</strong></th>
                            </tr>
                          </thead>
                          <tbody style={{ textAlign: 'center' }}>
                            {userData ? (
                              <tr key={userData._id}>
                                <td className="tableId">{userData._id}</td>
                                <td className="tableProduct">
                                  <div className="listproduct-section">
                                    <div className="listproducts-image">
                                      <img src="http://admin.razinskills.com/storage/category/image/0NYHYf4srP01JPgdJwOCWNUC1GxRsdPzmA2fMffP.png" alt="Student" />
                                    </div>
                                    <div className="product-pera">
                                      <p className="priceDis">{userData.userName}</p>
                                    </div>
                                  </div>
                                </td>
                                <td className="tableCustomar">
                                  <span className="badge rounded-pill text-bg-success">{userData.email}</span>
                                </td>
                                <td className="tableId"><span></span> {userData.role}</td>
                                <td className="tableStatus">
                                  <div className="statusItem">
                                    <div></div>
                                    <div>
                                      <span>{userData.updatedAt}</span>
                                    </div>
                                  </div>
                                </td>
                                <td className="tableStatus">
                                  <div className="statusItem">
                                    <div className="circleDot animatedCompleted"></div>
                                    <div className="statusText">
                                      <span className="stutsCompleted">Active</span>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            ) : (
                              <Link to="/login">Login</Link>
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  {/* New Table for Extra Details */}
                  <div className="card mb-5">
                    <div className="card-body">
                      <div className="table-responsive-lg">
                        <table id="extraDetailsTable" className="table">
                          <thead>
                            <tr style={{ textAlign: 'center' }}>
                              <th><strong>Address</strong></th>
                              <th><strong>Description</strong></th>
                              <th><strong>Links</strong></th>
                              <th style={{ width: '15%' }}><strong>Identity Verifications</strong></th>
                              <th style={{ width: '15%' }}><strong>Phone Number</strong></th>
                              <th><strong>Action</strong></th>
                            </tr>
                          </thead>
                          <tbody style={{ textAlign: 'center' }}>
                            {userDetails && (
                              <tr key={userDetails._id}>
                                <td className="tableField">{`${userDetails.address.street}, ${userDetails.address.city}, ${userDetails.address.state}, ${userDetails.address.zip}, ${userDetails.address.country}`}</td>
                                <td className="tableValue">{userDetails.description}</td>
                                <td className="tableValue">{userDetails.links.join(', ')}</td>
                                <td className="tableValue">{userDetails.identityVerifications.join(', ')}</td>
                                <td className="tableValue">{userDetails.phoneNumber}</td>
                                <td>
                                  <Button onClick={handleEditClick} colorScheme="blue" size="sm">Edit</Button>
                                </td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  {/* End of New Table for Extra Details */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal for Editing Details */}
        <Modal isOpen={showModal} onClose={() => setShowModal(false)} size="xl">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Edit Details</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <form onSubmit={handleSubmit}>
                <VStack spacing={4} align="stretch">
                  <FormControl>
                    <FormLabel>Street</FormLabel>
                    <Input name="address.street" value={formData.address.street} onChange={handleInputChange} />
                  </FormControl>
                  <FormControl>
                    <FormLabel>City</FormLabel>
                    <Input name="address.city" value={formData.address.city} onChange={handleInputChange} />
                  </FormControl>
                  <FormControl>
                    <FormLabel>State</FormLabel>
                    <Input name="address.state" value={formData.address.state} onChange={handleInputChange} />
                  </FormControl>
                  <FormControl>
                    <FormLabel>ZIP</FormLabel>
                    <Input name="address.zip" value={formData.address.zip} onChange={handleInputChange} />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Country</FormLabel>
                    <Input name="address.country" value={formData.address.country} onChange={handleInputChange} />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Description</FormLabel>
                    <Textarea name="description" value={formData.description} onChange={handleInputChange} />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Links</FormLabel>
                    {formData.links.map((link, index) => (
                      <Input key={index} value={link} onChange={(e) => handleLinkChange(index, e)} />
                    ))}
                    <Button onClick={addLinkField}>Add Link</Button>
                  </FormControl>
                  <FormControl>
                    <FormLabel>Identity Verifications</FormLabel>
                    {formData.identityVerifications.map((identity, index) => (
                      <Input key={index} value={identity} onChange={(e) => handleIdentityChange(index, e)} />
                    ))}
                    <Button onClick={addIdentityField}>Add Identity</Button>
                  </FormControl>
                  <FormControl>
                    <FormLabel>Phone Number</FormLabel>
                    <Input name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} />
                  </FormControl>
                </VStack>
                <ModalFooter>
                  <Button colorScheme="blue" mr={3} type="submit">Save</Button>
                  <Button variant="ghost" onClick={() => setShowModal(false)}>Cancel</Button>
                </ModalFooter>
              </form>
            </ModalBody>
          </ModalContent>
        </Modal>
      </div>
    </ChakraProvider>
  );
}

export default Student;
