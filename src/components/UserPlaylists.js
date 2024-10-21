import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { initialUsers } from './seedData';
import './UserPlaylists.css';

function UserPlaylists() {
  const { userId } = useParams();
  const user = initialUsers.find(u => u.id === parseInt(userId));

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className="user-playlists-container">
      <h1>{user.first_name}'s Playlists</h1>
      {user.playlists && user.playlists.length > 0 ? (
        <div className="playlist-grid">
          {user.playlists.map((playlist, index) => (
            <div key={index} className="playlist-card">
              <h2 className="playlist-title">{playlist.name}</h2>
              <p className="song-count">Songs: {playlist.songs.length}</p>
              <ul className="song-list">
                {playlist.songs.map((song, songIndex) => (
                  <li key={songIndex} className="song-item">
                    <div className="song-info">
                      <p className="song-name">{song.name}</p>
                      <p className="artist-name">{song.artist.name}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <p>No playlists found for this user.</p>
      )}
      <Link to="/users" className="back-link">Back to Users</Link>
    </div>
  );
}

export default UserPlaylists;
