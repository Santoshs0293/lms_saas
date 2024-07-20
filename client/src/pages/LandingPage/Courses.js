import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { addCart } from "../../redux/cart/cartAction";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { BsSearch } from "react-icons/bs";
import axios from "axios";
import { Card, Button, Typography, Grid, Box, Modal } from "@mui/material";
import Navbar from "./Navbar";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const state = useSelector(state => state.cart);
  let componentMounted = true;

  const dispatch = useDispatch();
  const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL });

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const showModal = (product) => {
    setSelectedProduct(product);
    toggleModal();
  };

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await axiosInstance.post('/data-courses');
      if (componentMounted) {
        setData(await response.data.data);
        setFilter(await response.data.data);
        setLoading(false);
      }
      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);

  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const userDataFromStorage = localStorage.getItem('user');
    if (userDataFromStorage) {
      setUserData(JSON.parse(userDataFromStorage));
    }
  }, []);

  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");
  const [activeTab, setActiveTab] = useState(0);
  const { loading1, error, courses, message } = useSelector(
    (state1) => state1.course
  );

  const categories = [
    "All",
    "Web development",
    "App development",
    "Data Science",
    "Artificial intelligence",
    "Machine learning",
  ];

  useEffect(() => {
    if (message) {
      toast.success(message);
    }
    if (error) {
      toast.error(error);
    }
  }, [category, keyword, error, message]);

  const Loading = () => {
    return (
      <>
        {[...Array(6)].map((_, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Skeleton height={300} />
          </Grid>
        ))}
      </>
    );
  };

  const filterProducts = () => {
    return filter.filter(product =>
      product.courseName.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const ShowProducts = () => {
    const filteredProducts = filterProducts();

    return (
      <>
        {filteredProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product._id}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <img
                src={product.courseThumbnail}
                alt="Course thumbnail"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Box p={2} flexGrow={1}>
                <Typography variant="h5">{product.courseName}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {product.courseDescription}
                </Typography>
                <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
                  <Typography variant="body2" color="textSecondary">
                    Creator - Mr. Santosh Singh
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    <b>Price: </b>{product.coursePrice} ₹
                  </Typography>
                </Box>
              </Box>
              <Box p={2} display="flex" justifyContent="space-between">
                <Button variant="contained" color="primary" onClick={() => showModal(product)}>
                  More Details
                </Button>
                {userData ? (
                  <Button variant="contained" color="secondary" onClick={() => addProduct(product)}>
                    Add to Cart
                  </Button>
                ) : (
                  <Link to="/login">Add To Cart</Link>
                )}
              </Box>
            </Card>
          </Grid>
        ))}
      </>
    );
  };

  return (
    <>
      <Helmet>
        <title>Advisions LMS</title>
        <meta name="description" content="Learning Management System" />
        <meta name="keywords" content="Advisions, LMS" />
      </Helmet>
      <Navbar />
      <Box p={4}>
        <Typography variant="h3" align="center" gutterBottom>
          All Courses
        </Typography>
        <Box display="flex" alignItems="center" mb={2}>
          <BsSearch color="gray.300" />
          <input
            type="text"
            className="form-control"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search a course ..."
          />
        </Box>
        <Typography variant="h5" mt={2}>
          Select Category
        </Typography>
        <Box display="flex" flexWrap="wrap" justifyContent="center" mt={2}>
          {categories.map((item, index) => (
            <Button
              key={item}
              color={activeTab === index ? "primary" : "secondary"}
              onClick={() => {
                if (item === "All") {
                  setCategory("");
                } else {
                  setCategory(item);
                }
                setActiveTab(index);
              }}
              sx={{ margin: 1 }}
            >
              {item}
            </Button>
          ))}
        </Box>
      </Box>
      <Box p={4}>
        <Grid container spacing={4} justifyContent="center">
          {loading ? <Loading /> : <ShowProducts />}
        </Grid>
      </Box>

      <Modal
        open={modalOpen}
        onClose={toggleModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Box
          bgcolor="background.paper"
          borderRadius={1}
          boxShadow={24}
          p={4}
          width={400}
        >
          <Typography id="modal-title" variant="h6" component="h2">
            {selectedProduct?.courseName}
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2 }}>
            {selectedProduct?.popUpText}
          </Typography>
          <Box mt={2} display="flex" justifyContent="flex-end">
            <Button onClick={toggleModal} color="primary" variant="contained">
              Close
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default Products;
