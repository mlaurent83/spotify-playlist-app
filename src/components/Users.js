import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Users.css'
import { initialUsers } from './seedData';

function Users() {
  const [users, setUsers] = useState(initialUsers);
  return (
    <div className="users-page">
      <h1>All Users</h1>
      <p>A page where you can see all users and their playlists.</p>
      <div className="user-grid">
          {initialUsers.map((user) => (
            <div className="user-card">
              <h3>{user.first_name} {user.last_name}</h3>
              <p>See playlists</p>
            </div>
          ))}
        </div>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default Users;
