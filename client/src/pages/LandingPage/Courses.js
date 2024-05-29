import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { addCart } from "../../redux/cart/cartAction";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { BsCollectionPlayFill, BsListUl } from "react-icons/bs";
import { LuView } from "react-icons/lu";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import axios from "axios";
import { Button, Card } from "reactstrap";
import Navbar from "./Navbar"
import toast from "react-hot-toast";
import { BsSearch } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";
const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const state = useSelector(state => state.cart)
  let componentMounted = true;

  const dispatch = useDispatch();
  const axiosInstance = axios.create({baseURL : process.env.REACT_APP_API_URL})

  const addProduct = (product) => {
    console.log("Onclick1")
    dispatch(addCart(product))
    console.log("Onclick2")
  }

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
    "Artificial inteligence",
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
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
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
        {filteredProducts.map((product) => {
          return (
<div key={product._id} className="col-md-4 col-sm-6 col-12 mb-4"> 
  <Card className="course h-100 shadow-sm">
    <img 
      src={product.courseThumbnail} 
      alt="Course thumbnail" 
      className="course-thumbnail card-img-top"
      style={{ height: "200px", objectFit: "cover" }} // Adjust height and object-fit
    />
    <div className="card-body">
      <h2 className="course-name card-title">{product.courseName}</h2>
      <p className="course-description card-text">{product.courseDescription}</p>
      <div className="course-details d-flex justify-content-between align-items-center">
        <p className="creator mb-0">Creator - Mr. Santosh Singh</p>
        <p className="course-price mb-0 font-weight-medium"><b>Price : </b>{product.coursePrice} $</p>
      </div>
    </div>
    <div className="card-footer course-actions d-flex justify-content-between">
      <a href="/courseInfo1" className="watch-now-btn btn btn-primary btn-sm">
       More Details
      </a>
      {userData ? (
      <Button
        className="add-to-playlist-btn btn btn-primary btn-sm text-white"
        disabled={loading}
        onClick={() => addProduct(product)}
      >
        Add to Cart
      </Button>
      ) :  (
        <Link to="/login">Add To Cart</Link>
      )}
    </div>
  </Card>
</div>




          );
        })}
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
      <div className="container-lg">

        <h1 className="text-center" style={{ fontSize: "2rem", letterSpacing: "1px", margin: "4rem 0" }}>
          All Courses
        </h1>
        <div className="input-group">
          <span className="input-group-text">
            <BsSearch color="gray.300" />
          </span>
          <input
            type="text"
            className="form-control"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search a course ..."
          />
        </div>
        <h1 className="mt-4" style={{ fontSize: "1.5rem" }}>
          Select Category
        </h1>
        <div className="d-flex flex-wrap justify-content-center mt-4 ">
          {categories.map((item, index) => (
            <Button
              key={item}
              color={activeTab === index ? "primary" : "secondary"}
              className="mr-4 mb-2 m-2"
              onClick={() => {
                if (item === "All") {
                  setCategory("");
                } else {
                  setCategory(item);
                }
                setActiveTab(index);
              }}
            >
              {item}
            </Button>
          ))}
        </div>
      </div>
      <div className="container-xl mt-4">
        <div className="row justify-content-center">   
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </>
  );
};

export default Products;
