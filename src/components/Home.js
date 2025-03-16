import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home-container">
      <header className="hero-section">
        <h1>Welcome to the American Nightmare Fan Club</h1>
        <p>The official fan community for Cody Rhodes supporters</p>
      </header>

      <section className="featured-content">
        <div className="content-card">
          <h2>Latest Updates</h2>
          <div className="news-grid">
            <div className="news-item">
              <h3>Road to WrestleMania</h3>
              <p>Follow Cody's journey to finish his story</p>
            </div>
            <div className="news-item">
              <h3>Recent Matches</h3>
              <p>Check out Cody's latest achievements</p>
            </div>
          </div>
        </div>

        <div className="membership-promo">
          <h2>Join the American Nightmare Fan Club Today!</h2>
          <p>Get your personalized membership card and exclusive content</p>
          <Link to="/membership" className="cta-button">
            Create Your Card
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;