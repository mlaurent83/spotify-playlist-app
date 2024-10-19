import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Playlists from './components/Playlists';
import Songs from './components/Songs';
import Users from './components/Users';
import SongList from './components/SongList';


function App() {
  const [playlists, setPlaylists] = useState([]);

  const handlePlaylistCreate = (newPlaylist) => {
    setPlaylists([...playlists, newPlaylist]);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/playlists"
            element={<Playlists playlists={playlists} />}
          />
          <Route
            path="/songs"
            element={<SongList onPlaylistCreate={handlePlaylistCreate} />}
          />
          <Route path="/users" element={<Users />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
