import React from 'react';
import { Link } from 'react-router-dom';
import './Playlists.css';

function Playlists() {
  return (
    <div className='playlist-page'>
      <h1>Your Playlists</h1>
      <p>Here you'll see your playlists once we connect to Spotify API.</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default Playlists;
