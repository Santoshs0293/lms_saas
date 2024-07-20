import React from 'react';
import { Link } from 'react-router-dom';

const PrincipalDashboard = () => {
  return (
    <div>
      <h1>Principal Dashboard</h1>
      <nav>
        <ul>
          <li><Link to="/principal/create">Create Teacher/Student</Link></li>
          <li><Link to="/principal/edit">Edit Teacher/Student</Link></li>
          <li><Link to="/principal/update-role">Update Teacher/Student Role</Link></li>
          <li><Link to="/principal/delete">Delete Teacher/Student</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default PrincipalDashboard;
