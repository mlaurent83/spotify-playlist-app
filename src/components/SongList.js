import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SongList.css';

const API_KEY = '2138722295ab224a1895a9500759411f';
const BASE_URL = 'https://ws.audioscrobbler.com/2.0/';

function SongList({ onPlaylistCreate }) {
  const [songs, setSongs] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [playlistName, setPlaylistName] = useState('');
  const [showNameInput, setShowNameInput] = useState(false);

  useEffect(() => {
    const fetchTopTracks = async () => {
      try {
        const response = await axios.get(`${BASE_URL}`, {
          params: {
            method: 'chart.gettoptracks',
            api_key: API_KEY,
            format: 'json',
            limit: 20 // Limiting to 20 songs for this example
          }
        });
        setSongs(response.data.tracks.track);
        setIsLoading(false);
      } catch (error) {
        setError('Failed to fetch songs. Please try again later.');
        setIsLoading(false);
      }
    };

    fetchTopTracks();
  }, []);

  const addToPlaylist = (song) => {
    if (!playlist.some(item => item.url === song.url)) {
      setPlaylist([...playlist, song]);
    }
  };

  const removeFromPlaylist = (song) => {
    setPlaylist(playlist.filter(item => item.url !== song.url));
  };

  const handleMakePlaylist = () => {
    setShowNameInput(true);
  };

  const handleNameSubmit = (e) => {
    e.preventDefault();
    if (playlistName.trim() && playlist.length > 0) {
      onPlaylistCreate({ name: playlistName, songs: playlist });
      setPlaylistName('');
      setPlaylist([]);
      setShowNameInput(false);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="song-list-container">
      <div className="songs-section">
        <h2>Top tracks this week</h2>
        <p>Select the songs you like and create a playlist!</p>
        <div className="song-grid">
          {songs.map((song) => (
            <div key={song.url} className="song-card">
              <img src={song.image[2]['#text'] || 'https://via.placeholder.com/150'} alt={song.name} />
              <h3>{song.name}</h3>
              <p>{song.artist.name}</p>
              <button onClick={() => addToPlaylist(song)}>Add to Playlist</button>
            </div>
          ))}
        </div>
      </div>
      <div className="playlist-section">
        <h2>Your Playlist</h2>
        <ul>
          {playlist.map((song) => (
            <li key={song.url}>
              {song.name} - {song.artist.name}
              <button onClick={() => removeFromPlaylist(song)}>Remove</button>
            </li>
          ))}
        </ul>
        {playlist.length > 0 && !showNameInput && (
          <button onClick={handleMakePlaylist}>Make Playlist</button>
        )}
        {showNameInput && (
          <form onSubmit={handleNameSubmit}>
            <input
              type="text"
              value={playlistName}
              onChange={(e) => setPlaylistName(e.target.value)}
              placeholder="Enter playlist name"
              required
            />
            <button type="submit">Create Playlist</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default SongList;
