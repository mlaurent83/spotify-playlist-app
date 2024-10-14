import React from 'react';
import { Link } from 'react-router-dom';

function Users() {
  return (
    <div>
      <h1>All Users</h1>
      <p>A page where you can see all users and their playlists.</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default Users;
