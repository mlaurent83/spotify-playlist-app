import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Music, ChevronLeft, Plus, X } from 'lucide-react';
import axios from 'axios';

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
            limit: 20
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

  if (isLoading) return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-6 flex items-center justify-center">
      <div className="text-gray-600">Loading...</div>
    </div>
  );

  if (error) return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-6 flex items-center justify-center">
      <div className="text-red-600">{error}</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-6">
      <div className="max-w-6xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 group transition-colors"
        >
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Top Tracks This Week</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover the most popular songs and create your perfect playlist. Add your favorite tracks and share your musical taste.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {songs.map((song) => {
                const imageUrl = (song.image && song.image.length > 0)
                  ? song.image.find(img => img.size === 'large')['#text'] || '/api/placeholder/150/150'
                  : '/api/placeholder/150/150';

                return (
                  <div
                    key={song.url}
                    className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <img
                      src={imageUrl}
                      alt={song.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-1">{song.name}</h3>
                      <p className="text-sm text-gray-500 mb-4">{song.artist.name}</p>
                      <button
                        onClick={() => addToPlaylist(song)}
                        className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded-md hover:from-purple-600 hover:to-blue-600 transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                        Add to Playlist
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 h-min sticky top-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Playlist</h2>
            {playlist.length === 0 ? (
              <p className="text-gray-500">Add some songs to create your playlist!</p>
            ) : (
              <>
                <ul className="space-y-3 mb-6">
                  {playlist.map((song) => (
                    <li
                      key={song.url}
                      className="flex items-center justify-between gap-2 p-2 bg-gray-50 rounded-md"
                    >
                      <div className="flex items-center gap-2">
                        <Music className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-700">{song.name} - {song.artist.name}</span>
                      </div>
                      <button
                        onClick={() => removeFromPlaylist(song)}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </li>
                  ))}
                </ul>

                {!showNameInput ? (
                  <button
                    onClick={handleMakePlaylist}
                    className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded-md hover:from-purple-600 hover:to-blue-600 transition-colors"
                  >
                    Make Playlist
                  </button>
                ) : (
                  <form onSubmit={handleNameSubmit} className="space-y-3">
                    <input
                      type="text"
                      value={playlistName}
                      onChange={(e) => setPlaylistName(e.target.value)}
                      placeholder="Enter playlist name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      required
                    />
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded-md hover:from-purple-600 hover:to-blue-600 transition-colors"
                    >
                      Create Playlist
                    </button>
                  </form>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SongList;
