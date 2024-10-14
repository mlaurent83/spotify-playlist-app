import React from 'react';
import { Link } from 'react-router-dom';

function Playlists() {
  return (
    <div>
      <h1>Your Playlists</h1>
      <p>Here you'll see your playlists once we connect to Spotify API.</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default Playlists;
