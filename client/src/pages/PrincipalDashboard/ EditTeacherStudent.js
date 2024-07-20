import React, { useState } from 'react';
import axios from 'axios';

const EditTeacherStudent = () => {
  const [userId, setUserId] = useState('');
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    role: 'Teacher',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`/api/principal/editTeacherOrStudent/${userId}`, formData);
      console.log(response.data);
      // Handle success
    } catch (error) {
      console.error('Error editing user:', error);
    }
  };

  return (
    <div>
      <h2>Edit Teacher/Student</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="userId" placeholder="User ID" value={userId} onChange={(e) => setUserId(e.target.value)} required />
        <input type="text" name="userName" placeholder="Name" value={formData.userName} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <select name="role" value={formData.role} onChange={handleChange}>
          <option value="Teacher">Teacher</option>
          <option value="Student">Student</option>
        </select>
        <button type="submit">Edit</button>
      </form>
    </div>
  );
};

export default EditTeacherStudent;
