import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Matches from './pages/Matches'
import Membership from './pages/Membership'
import Gallery from './pages/Gallery'
import Navigation from './components/Navigation'
import './App.css'

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/matches" element={<Matches />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  )
}

export default App
