import React from 'react';
import { Link } from 'react-router-dom';
import { Music, ChevronLeft, User } from 'lucide-react';
import './Users.css';
import { initialUsers } from './seedData';

export default function Users() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-6">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 group transition-colors"
        >
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <div className="mb-8 text-center">
  <h1 className="text-4xl font-bold text-gray-900 mb-3">Our community</h1>
  <p className="text-gray-600 text-lg max-w-2xl mx-auto">
    Discover fellow music enthusiasts and explore their carefully curated playlists.
    Join our community to share your own musical journey.
  </p>
</div>




        {/* Users Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {initialUsers.map((user) => (
            <div
              key={user.id}
              className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-blue-400 flex items-center justify-center">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {user.first_name} {user.last_name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        Joined {new Date(user.joined).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <Music className="w-4 h-4" />
                  <span className="text-sm">{user.playlistCount} playlists</span>
                </div>

                <Link
                  to={`/users/${user.id}/playlists`}
                  className="block w-full text-center bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded-md hover:from-purple-600 hover:to-blue-600 transition-colors"
                >
                  See playlists
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
