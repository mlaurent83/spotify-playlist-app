import React from 'react';
import { Link } from 'react-router-dom';
import { Music, ChevronLeft, Trash2 } from 'lucide-react';
import MusicPlaceholder from './MusicPlaceholder';

function Playlists({ playlists, onDeletePlaylist }) {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Your Playlists</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Your personal collection of carefully curated music. Each playlist tells its own unique story.
          </p>
        </div>

        {playlists.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 text-center">
            <Music className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 text-lg">
              No playlists created yet. Go to "Songs" to create your first playlist!
            </p>
            <Link
              to="/songs"
              className="inline-block mt-6 bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-6 rounded-md hover:from-purple-600 hover:to-blue-600 transition-colors"
            >
              Create Playlist
            </Link>
          </div>
        ) : (
          <div className="space-y-12">
            {playlists.map((playlist, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
              >
                <div className="p-6 border-b border-gray-100">
                  <div className="flex justify-between items-center">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        {playlist.name}
                      </h2>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Music className="w-4 h-4" />
                        <span>{playlist.songs.length} songs</span>
                      </div>
                    </div>
                    <button
                      onClick={() => onDeletePlaylist(index)}
                      className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
                      aria-label={`Delete ${playlist.name} playlist`}
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {playlist.songs.map((song) => {
                      const defaultLastFmImage = "2a96cbd8b46e442fc41c2b86b821562f.png";
                      const imageUrl = song.image[2]['#text'] || ''; // Adjust for your image size
                      const isDefaultImage = imageUrl.includes(defaultLastFmImage);

                      return (
                        <div
                          key={song.url}
                          className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                        >
                          {imageUrl && !isDefaultImage ? (
                            <img
                              src={imageUrl}
                              alt={song.name}
                              className="w-full h-40 object-cover"
                            />
                          ) : (
                            <MusicPlaceholder />
                          )}
                          <div className="p-4">
                            <h3 className="font-semibold text-gray-900 mb-1 truncate">
                              {song.name}
                            </h3>
                            <p className="text-sm text-gray-500 truncate">
                              {song.artist.name}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Playlists;
