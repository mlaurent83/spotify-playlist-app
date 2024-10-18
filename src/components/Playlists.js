import React from 'react';
import { Link } from 'react-router-dom';
import './Playlists.css';
import SongList from './SongList';

function Playlists({ playlists }) {
  return (
    <div className="playlists">
      <h2>Your Playlists</h2>
      {playlists.length === 0 ? (
        <p>No playlists created yet.</p>
      ) : (
        <ul>
          {playlists.map((playlist, index) => (
            <li key={index}>
              <h3>{playlist.name}</h3>
              <p>{playlist.songs.length} songs</p>
              {/* You can add more details or a link to view the full playlist */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}


export default Playlists;
