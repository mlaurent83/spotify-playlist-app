import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = '2138722295ab224a1895a9500759411f';
const BASE_URL = 'https://ws.audioscrobbler.com/2.0/';

function SongList() {
  const [songs, setSongs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTopTracks = async () => {
      try {
        const response = await axios.get(`${BASE_URL}`, {
          params: {
            method: 'chart.gettoptracks',
            api_key: API_KEY,
            format: 'json'
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

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>Top Tracks</h2>
      <ul>
        {songs.map((song) => (
          <li key={song.url}>
            {song.name} by {song.artist.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SongList;
