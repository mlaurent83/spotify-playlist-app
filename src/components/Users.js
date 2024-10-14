import React from 'react';
import { Link } from 'react-router-dom';
import './Users.css'

function Users() {
  return (
    <div className="users-page">
      <h1>All Users</h1>
      <p>A page where you can see all users and their playlists.</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default Users;
