import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import './Home.css';

function Home() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);

  return (
    <div className="home-container">
      <div className="particles-container">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
              color: "white",
            },
            fpsLimit: 60,
            particles: {
              color: {
                value: "rgba(139,92,246,1)",
              },
              move: {
                direction: "none",
                enable: true,
                outModes: "out",
                random: false,
                speed: 0.5,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 3 },
              },
            },
            detectRetina: true,
          }}
        />
      </div>
      <div className="content">
        <h1>Welcome to Spotify Playlist Creator</h1>
        <p>Create and share your favorite playlists!</p>
        <nav className='navigation'>
          <Link to="/playlists">View Playlists</Link>
          <Link to="/songs">View Songs</Link>
          <Link to="/users">View Users</Link>
        </nav>
      </div>
    </div>
  );
}

export default Home;
