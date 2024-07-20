import React, { useState } from 'react';
import axios from 'axios';

const UpdateTeacherStudentRole = () => {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('Teacher');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put('/api/principal/updateTeacherOrStudentRole', { email, role });
      console.log(response.data);
      // Handle success
    } catch (error) {
      console.error('Error updating user role:', error);
    }
  };

  return (
    <div>
      <h2>Update Teacher/Student Role</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="Teacher">Teacher</option>
          <option value="Student">Student</option>
        </select>
        <button type="submit">Update Role</button>
      </form>
    </div>
  );
};

export default UpdateTeacherStudentRole;
