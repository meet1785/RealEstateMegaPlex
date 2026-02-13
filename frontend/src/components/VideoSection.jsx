import { useState } from 'react';
import { FaPlay, FaTimes } from 'react-icons/fa';

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className={`video-section reveal reveal-delay-1 ${isPlaying ? 'playing' : ''}`}>
      <img
        src="https://images.unsplash.com/photo-1470123808288-1e59739c794b?w=1600&q=80"
        alt="Mumbai Skyline"
      />
      <div className="video-overlay-text">
        <h3>Experience the Vision</h3>
        <p>Watch our project walkthrough</p>
      </div>
      <button className="video-play-btn" aria-label="Play video" onClick={() => setIsPlaying(true)}>
        <FaPlay />
      </button>
      {isPlaying && (
        <div className="video-player-overlay">
          <button className="video-close-btn" onClick={() => setIsPlaying(false)} aria-label="Close video">
            <FaTimes />
          </button>
          <iframe
            src="https://www.youtube.com/embed/Scxs7L0vhZ4?autoplay=1&mute=1&rel=0"
            title="Project walkthrough"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}
    </section>
  );
}
