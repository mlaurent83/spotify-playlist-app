import React from 'react';
import { Link } from 'react-router-dom';
import './Users.css'
import { initialUsers } from './seedData';

function Users() {
  return (
    <div className="users-page">
      <h1>All Users</h1>
      <p>A page where you can see all users and their playlists.</p>
      <div className="user-grid">
        {initialUsers.map((user) => (
          <div key={user.id} className="user-card">
            <h3>{user.first_name} {user.last_name}</h3>
            <Link to={`/users/${user.id}/playlists`}>See playlists</Link>
          </div>
        ))}
      </div>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default Users;
