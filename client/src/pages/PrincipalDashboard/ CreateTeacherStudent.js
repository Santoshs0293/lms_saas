import React, { useState } from 'react';
import axios from 'axios';

const CreateTeacherStudent = () => {
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: '',
    role: 'Teacher', // Default role
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/principal/createTeacherOrStudent', formData);
      console.log(response.data);
      // Handle success
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <div>
      <h2>Create Teacher/Student</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="userName" placeholder="Name" value={formData.userName} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        <select name="role" value={formData.role} onChange={handleChange}>
          <option value="Teacher">Teacher</option>
          <option value="Student">Student</option>
        </select>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateTeacherStudent;
