import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import './App.css'

// Import new components (we'll create these next)
import Navbar from './components/Navbar'
import Home from './components/Home'
import MembershipPlans from './components/MembershipPlans'
import Customize from './components/Customize'
import MatchHistory from './components/MatchHistory'
import Forum from './components/Forum'
import Shop from './components/Shop'
import Gallery from './components/Gallery'
import Profile from './components/Profile'

function App() {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0()

  return (
    <Router>
      <div className="app">
        <Navbar 
          isAuthenticated={isAuthenticated} 
          login={loginWithRedirect} 
          logout={logout} 
          user={user}
        />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route 
            path="/membership" 
            element={
              isAuthenticated ? 
              <MembershipPlans /> : 
              <div>Please login to view membership options</div>
            } 
          />
          <Route 
            path="/customize" 
            element={
              isAuthenticated ? 
              <Customize /> : 
              <div>Please login to customize your experience</div>
            } 
          />
          <Route path="/matches" element={<MatchHistory />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route 
            path="/profile" 
            element={
              isAuthenticated ? 
              <Profile user={user} /> : 
              <div>Please login to view your profile</div>
            } 
          />
        </Routes>

        <footer>
          <p>© 2024 Cody Rhodes Fan Club</p>
        </footer>
      </div>
    </Router>
  )
}

export default App
