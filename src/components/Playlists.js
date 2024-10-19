import React from 'react';
import { Link } from 'react-router-dom';
import './Playlists.css';
import SongList from './SongList';

function Playlists({ playlists }) {
  return (
    <div className="playlists">
      <h1>Your Playlists</h1>
      {playlists.length === 0 ? (
        <p>No playlists created yet. Go to "Songs" to create a playlist!</p>
      ) : (
        <ul>
          {playlists.map((playlist, index) => (
            <li key={index}>
              <p>Your {playlist.name} playlist has {playlist.songs.length} songs!</p>
              <div className="song-grid">
            {playlist.songs.map((song) => (
            <div key={song.url} className="song-card">
              <img src={song.image[2]['#text'] || 'https://via.placeholder.com/150'} alt={song.name} />
              <h3>{song.name}</h3>
              <p>{song.artist.name}</p>
            </div>
          ))}
        </div>
              {/* add more details or a link to view the full playlist */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}


export default Playlists;
