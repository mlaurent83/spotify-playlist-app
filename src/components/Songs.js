import React from 'react';
import { Link } from 'react-router-dom';
import './Songs.css';

function Songs() {
  return (
    <div className='songs-page'>
      <h1>All songs</h1>
      <p>Here you'll see your Songs once we connect to Spotify API.</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default Songs;
