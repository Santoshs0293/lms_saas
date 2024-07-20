import React, { useState } from 'react';
import axios from 'axios';


const SeoForm = ({ fetchSeoEntries }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    keywords: '',
    author: ''
  });

  const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const keywordsArray = formData.keywords.split(',').map(keyword => keyword.trim());
      await axiosInstance.post('/api/seo', 
        { ...formData, keywords: keywordsArray });
      setFormData({ title: '', description: '', keywords: '', author: '' });
      fetchSeoEntries();
    } catch (error) {
      console.error('Error creating SEO entry', error);
    }
  };

  return (
    <div className="row" id="deleteTableItem">
    <div className="col-md-12">
      <div className="card mb-5">
        <div className="card-body">
        <div className="d-flex justify-content-between mb-3">
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
      <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
      <input type="text" name="keywords" placeholder="Keywords (comma-separated)" value={formData.keywords} onChange={handleChange} required />
      <input type="text" name="author" placeholder="Author" value={formData.author} onChange={handleChange} required />
      <button type="submit">Submit</button>
    </form>
    </div>
    </div>
    </div>
    </div>
    </div>
  );
};

export default SeoForm;