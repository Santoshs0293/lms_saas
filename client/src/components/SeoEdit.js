import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const SeoEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    keywords: '',
    author: ''
  });
  
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });

  useEffect(() => {
    const fetchSeoEntry = async () => {
      try {
        const response = await axiosInstance.get(`/api/seo/${id}`);
        const data = response.data;
        setFormData({
          title: data.title,
          description: data.description,
          keywords: data.keywords.join(', '),
          author: data.author
        });
      } catch (error) {
        console.error('Error fetching SEO entry', error);
      }
    };

    fetchSeoEntry();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const keywordsArray = formData.keywords.split(',').map(keyword => keyword.trim());
      await axiosInstance.put(`/api/seo/${id}`, { ...formData, keywords: keywordsArray });
      navigate('/');
    } catch (error) {
      console.error('Error updating SEO entry', error);
    }
  };

  return (
    <div>
      <Helmet>
        <title>Advisions LMS</title>
        <meta name="description" content="Edit an existing SEO entry" />
      </Helmet>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
        <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
        <input type="text" name="keywords" placeholder="Keywords (comma-separated)" value={formData.keywords} onChange={handleChange} required />
        <input type="text" name="author" placeholder="Author" value={formData.author} onChange={handleChange} required />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default SeoEdit;