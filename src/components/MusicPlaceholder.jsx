import React from 'react';

const MusicPlaceholder = () => {
  return (
    <div className="w-full h-48 bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        className="w-32 h-32"
      >
        {/* Vinyl record */}
        <circle cx="100" cy="100" r="70" fill="#2D3748" />
        <circle cx="100" cy="100" r="68" fill="#4A5568" />
        <circle cx="100" cy="100" r="65" fill="#2D3748" />
        <circle cx="100" cy="100" r="20" fill="#4A5568" />
        <circle cx="100" cy="100" r="5" fill="#2D3748" />

        {/* Music note */}
        <path
          d="M130 70 L130 120 Q130 140 110 140 Q90 140 90 120 Q90 100 110 100 L110 70"
          fill="#A855F7"
        />

        {/* Grooves */}
        <circle cx="100" cy="100" r="55" fill="none" stroke="#4A5568" strokeWidth="0.5" />
        <circle cx="100" cy="100" r="45" fill="none" stroke="#4A5568" strokeWidth="0.5" />
        <circle cx="100" cy="100" r="35" fill="none" stroke="#4A5568" strokeWidth="0.5" />
        <circle cx="100" cy="100" r="25" fill="none" stroke="#4A5568" strokeWidth="0.5" />
      </svg>
    </div>
  );
};

export default MusicPlaceholder;
