import React from 'react';
import { Navigate } from 'react-router-dom';

const StudentRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  return user && user.role === "Student" ? (
    children
  ) : (
    <Navigate to="/login" />
  );
};

export default StudentRoute;
