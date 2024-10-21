import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { initialUsers } from './seedData';

function UserPlaylists() {
  const { userId } = useParams();
  const user = initialUsers.find(u => u.id === parseInt(userId));

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className="user-playlists">
      <h1>{user.first_name}'s Playlists</h1>
      {user.playlists && user.playlists.length > 0 ? (
        <ul>
          {user.playlists.map((playlist, index) => (
            <li key={index}>
              <h2>{playlist.name}</h2>
              <p>Songs: {playlist.songs.length}</p>
              <ul>
                {playlist.songs.map((song, songIndex) => (
                  <li key={songIndex}>
                    <img src={song.image[2]['#text']} alt={song.name} width="50" height="50" />
                    {song.name} by {song.artist.name}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      ) : (
        <p>No playlists found for this user.</p>
      )}
      <Link to="/users">Back to Users</Link>
    </div>
  );
}

export default UserPlaylists;
