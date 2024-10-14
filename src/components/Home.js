import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to Spotify Playlist Creator</h1>
      <p>Create and share your favorite playlists!</p>
      <Link to="/playlists">View Playlists</Link>
    </div>
  );
}

export default Home;
