import React, { useState, useEffect, useCallback } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Playlists from './components/Playlists';
import Songs from './components/Songs';
import Users from './components/Users';
import UserPlaylists from './components/UserPlaylists';
import SongList from './components/SongList';

function App() {
  const [playlists, setPlaylists] = useState(() => {
    const savedPlaylists = localStorage.getItem('userPlaylists');
    return savedPlaylists ? JSON.parse(savedPlaylists) : [];
  });

  useEffect(() => {
    console.log('Saving playlists to localStorage:', playlists);
    localStorage.setItem('userPlaylists', JSON.stringify(playlists));
  }, [playlists]);

  const handlePlaylistCreate = useCallback((newPlaylist) => {
    console.log('Creating new playlist:', newPlaylist);
    setPlaylists(prevPlaylists => {
      const updatedPlaylists = [...prevPlaylists, newPlaylist];
      console.log('Updated playlists:', updatedPlaylists);
      return updatedPlaylists;
    });
  }, []);

  const handleDeletePlaylist = (index) => {
    const updatedPlaylists = playlists.filter((_, i) => i !== index);
    setPlaylists(updatedPlaylists);
  };

  console.log('App rendered. Current playlists:', playlists);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/playlists"
            element={<Playlists playlists={playlists}
            onDeletePlaylist={handleDeletePlaylist}
            />}
          />
          <Route
            path="/songs"
            element={<SongList onPlaylistCreate={handlePlaylistCreate} />}
          />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:userId/playlists" element={<UserPlaylists />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
