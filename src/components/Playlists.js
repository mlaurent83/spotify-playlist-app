import React from 'react';
import { Trash2 } from 'lucide-react';
import './Playlists.css';

function Playlists({ playlists, onDeletePlaylist }) {
  console.log('Rendering Playlists component. Current playlists:', playlists);

  return (
    <div className="playlists">
      <h1>Your Playlists</h1>
      {playlists.length === 0 ? (
        <p>No playlists created yet. Go to "Songs" to create a playlist!</p>
      ) : (
        <ul className="space-y-6">
          {playlists.map((playlist, index) => (
            <li key={index} className="relative">
              <div className="flex justify-between items-center mb-4">
                <p className="text-lg font-medium">
                  Your {playlist.name} playlist has {playlist.songs.length} songs!
                </p>

              </div>
              <div className="song-grid">
                {playlist.songs.map((song) => (
                  <div key={song.url} className="song-card">
                    <img
                      src={song.image[2]['#text'] || 'https://via.placeholder.com/150'}
                      alt={song.name}
                    />
                    <h3>{song.name}</h3>
                    <p>{song.artist.name}</p>
                  </div>
                ))}
                 <button
                  onClick={() => onDeletePlaylist(index)}
                  className="delete-btn"
                  aria-label={`Delete ${playlist.name} playlist`}
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Playlists;
