import React from 'react';
import { Navigate } from 'react-router-dom';

const AllUser = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  return user && (user.role === "Admin" || user.role === "Teacher" || user.role === "Student") ? (
    children
  ) : (
    <Navigate to="/login" />
  );
};

export default AllUser;
