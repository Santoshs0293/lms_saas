import React, { useState } from 'react';
import axios from 'axios';

const DeleteTeacherStudent = () => {
  const [userId, setUserId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.delete(`/api/principal/deleteTeacherOrStudent/${userId}`);
      console.log(response.data);
      // Handle success
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div>
      <h2>Delete Teacher/Student</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="User ID" value={userId} onChange={(e) => setUserId(e.target.value)} required />
        <button type="submit">Delete</button>
      </form>
    </div>
  );
};

export default DeleteTeacherStudent;
