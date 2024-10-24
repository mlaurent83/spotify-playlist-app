import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Music, ChevronLeft, User, Clock, ListMusic, Play, ChevronDown, ChevronUp } from 'lucide-react';
import { initialUsers } from './seedData.js';



export default function UserPlaylists() {
  const { userId } = useParams();
  const user = initialUsers.find(u => u.id === parseInt(userId));
  const [expandedPlaylist, setExpandedPlaylist] = useState(null);
  const [sortBy, setSortBy] = useState('name'); // 'name' | 'songs' | 'date'

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-6 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">User Not Found</h2>
          <Link
            to="/users"
            className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Users
          </Link>
        </div>
      </div>
    );
  }

  const sortedPlaylists = [...(user.playlists || [])].sort((a, b) => {
    switch (sortBy) {
      case 'songs':
        return b.songs.length - a.songs.length;
      case 'date':
        return new Date(b.createdAt) - new Date(a.createdAt);
      default:
        return a.name.localeCompare(b.name);
    }
  });

  const totalSongs = user.playlists?.reduce((acc, playlist) => acc + playlist.songs.length, 0) || 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Navigation */}
        <Link
          to="/users"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 group transition-colors"
        >
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Users
        </Link>

        {/* User Profile Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-blue-400 flex items-center justify-center">
              <User className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {user.first_name} {user.last_name}'s Music Collection
              </h1>
              <p className="text-gray-600">
                Member since {new Date(user.joined).toLocaleDateString()}
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: ListMusic, label: 'Playlists', value: user.playlists?.length || 0 },
              { icon: Music, label: 'Total Songs', value: totalSongs },
              { icon: Clock, label: 'Last Updated', value: 'Today' }
            ].map((stat, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center gap-2 text-gray-600 mb-1">
                  <stat.icon className="w-4 h-4" />
                  <span className="text-sm">{stat.label}</span>
                </div>
                <p className="text-xl font-semibold text-gray-900">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sort Controls */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900">All Playlists</h2>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white border border-gray-200 rounded-md px-3 py-1 text-sm"
            >
              <option value="name">Name</option>
              <option value="songs">Number of Songs</option>
              <option value="date">Date Created</option>
            </select>
          </div>
        </div>

        {/* Playlists Grid */}
        {user.playlists && user.playlists.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sortedPlaylists.map((playlist, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{playlist.name}</h3>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Music className="w-4 h-4" />
                        <span className="text-sm">{playlist.songs.length} songs</span>
                      </div>
                    </div>
                    <button
                      onClick={() => setExpandedPlaylist(expandedPlaylist === index ? null : index)}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      {expandedPlaylist === index ?
                        <ChevronUp className="w-5 h-5" /> :
                        <ChevronDown className="w-5 h-5" />
                      }
                    </button>
                  </div>

                  {/* Play Button */}
                  <button className="flex items-center gap-2 text-purple-600 hover:text-purple-700 mb-4">
                    <Play className="w-4 h-4" />
                    <span className="text-sm font-medium">Play All</span>
                  </button>

                  {/* Expanded Song List */}
                  {expandedPlaylist === index && (
                    <div className="border-t border-gray-100 mt-4 pt-4">
                      <ul className="space-y-3">
                        {playlist.songs.map((song, songIndex) => (
                          <li
                            key={songIndex}
                            className="flex items-center justify-between hover:bg-gray-50 p-2 rounded-md transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              <Play className="w-4 h-4 text-gray-400" />
                              <div>
                                <p className="font-medium text-gray-900">{song.name}</p>
                                <p className="text-sm text-gray-600">{song.artist.name}</p>
                              </div>
                            </div>
                            <span className="text-sm text-gray-500">{song.duration}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm border border-gray-100">
            <ListMusic className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No Playlists Yet</h3>
            <p className="text-gray-600">This user hasn't created any playlists yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
