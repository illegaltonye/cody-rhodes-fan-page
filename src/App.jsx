import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'

// Import components
import MatchHistory from './components/MatchHistory'
import Forum from './components/Forum'
import Navbar from './components/Navbar'

function App() {
  const [membershipType, setMembershipType] = useState('basic')
  const [customizations, setCustomizations] = useState({
    theme: 'american-nightmare',
    notifications: true,
    favoriteMatches: []
  })

  return (
    <Router>
      <div className="app">
        <Navbar />
        
        <Routes>
          <Route path="/" element={
            <>
              <header className="hero-section">
                <h1>The American Nightmare - Cody Rhodes</h1>
                <p>Welcome to the official fan club</p>
              </header>

              <main>
                <section className="membership-section">
                  <h2>Choose Your Membership</h2>
                  <div className="membership-options">
                    <div className="membership-card">
                      <h3>Basic Membership</h3>
                      <p>$9.99/month</p>
                      <ul>
                        <li>Access to exclusive content</li>
                        <li>Monthly newsletter</li>
                        <li>Fan community access</li>
                      </ul>
                      <button onClick={() => setMembershipType('basic')}>Select Basic</button>
                    </div>

                    <div className="membership-card">
                      <h3>Premium Membership</h3>
                      <p>$19.99/month</p>
                      <ul>
                        <li>All Basic features</li>
                        <li>Virtual meet & greets</li>
                        <li>Exclusive merchandise</li>
                        <li>Priority event access</li>
                      </ul>
                      <button onClick={() => setMembershipType('premium')}>Select Premium</button>
                    </div>
                  </div>
                </section>
              </main>
            </>
          } />
          <Route path="/matches" element={<MatchHistory />} />
          <Route path="/forum" element={<Forum />} />
        </Routes>

        <footer>
          <p>© 2024 Cody Rhodes Fan Club</p>
        </footer>
      </div>
    </Router>
  )
}

export default App
