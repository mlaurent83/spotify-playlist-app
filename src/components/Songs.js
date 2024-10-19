import React from 'react';
import { Link } from 'react-router-dom';
import './Songs.css';
import SongList from './SongList';

function Songs() {
  return (
    <div className='songs-page'>
      <Link to="/">Back to Home</Link>
      <SongList />
    </div>
  );
}

export default Songs;
