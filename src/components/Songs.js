import React from 'react';
import { Link } from 'react-router-dom';
import './Songs.css';
import SongList from './SongList';

function Songs() {
  return (
    <div className='songs-page'>
      <h1>All songs</h1>
      <p>Here you'll see your Songs from the Last.fm API.</p>
      <Link to="/">Back to Home</Link>
      <SongList />
    </div>
  );
}

export default Songs;
