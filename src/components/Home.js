import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to Spotify Playlist Creator</h1>
      <p>Create and share your favorite playlists!</p>
      <Link to="/playlists">View Playlists</Link>
      <Link to="/users">View Users</Link>
    </div>
  );
}

export default Home;
