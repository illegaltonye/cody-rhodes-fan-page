import { useState } from 'react'
import '../styles/MatchHistory.css'
function MatchHistory() {
  const [matches] = useState([
    {
      id: 1,
      event: "WrestleMania 40",
      date: "April 6, 2024",
      opponent: "Roman Reigns",
      result: "Victory",
      highlights: "Won WWE Universal Championship",
      venue: "Lincoln Financial Field",
      rating: 5
    },
    {
      id: 2,
      event: "Royal Rumble 2024",
      date: "January 27, 2024",
      opponent: "Royal Rumble Match",
      result: "Victory",
      highlights: "Won Royal Rumble Match",
      venue: "Tropicana Field",
      rating: 5
    }
  ])

  const [filter, setFilter] = useState('all')
  const [sortBy, setSortBy] = useState('date')
  const [viewMode, setViewMode] = useState('grid')
  const [theme, setTheme] = useState('default')

  const filteredMatches = matches.filter(match => {
    if (filter === 'victories') return match.result === 'Victory'
    if (filter === 'losses') return match.result === 'Loss'
    return true
  })

  const sortedMatches = [...filteredMatches].sort((a, b) => {
    if (sortBy === 'date') return new Date(b.date) - new Date(a.date)
    if (sortBy === 'rating') return b.rating - a.rating
    return 0
  })

  return (
    <div className={`match-history theme-${theme}`}>
      <div className="controls-panel">
        <div className="filter-options">
          <select 
            value={filter} 
            onChange={(e) => setFilter(e.target.value)}
            className="filter-select"
          >
            <option value="all">All Matches</option>
            <option value="victories">Victories</option>
            <option value="losses">Losses</option>
          </select>

          <select 
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value)}
            className="sort-select"
          >
            <option value="date">Sort by Date</option>
            <option value="rating">Sort by Rating</option>
          </select>

          <div className="view-toggles">
            <button 
              className={viewMode === 'grid' ? 'active' : ''} 
              onClick={() => setViewMode('grid')}
            >
              Grid View
            </button>
            <button 
              className={viewMode === 'list' ? 'active' : ''} 
              onClick={() => setViewMode('list')}
            >
              List View
            </button>
          </div>
        </div>

        <div className="theme-selector">
          <h4>Select Theme:</h4>
          <div className="theme-options">
            <button 
              className={theme === 'default' ? 'active' : ''} 
              onClick={() => setTheme('default')}
            >
              Classic
            </button>
            <button 
              className={theme === 'dark' ? 'active' : ''} 
              onClick={() => setTheme('dark')}
            >
              Dark Mode
            </button>
            <button 
              className={theme === 'american-nightmare' ? 'active' : ''} 
              onClick={() => setTheme('american-nightmare')}
            >
              American Nightmare
            </button>
          </div>
        </div>
      </div>

      <h2>Career Highlights</h2>
      <div className={`matches-${viewMode}`}>
        {sortedMatches.map(match => (
          <div key={match.id} className="match-card">
            <div className="match-header">
              <h3>{match.event}</h3>
              <span className={`rating rating-${match.rating}`}>
                {'⭐'.repeat(match.rating)}
              </span>
            </div>
            <div className="match-content">
              <p className="match-date">{match.date}</p>
              <p className="match-venue">{match.venue}</p>
              <p className="match-opponent">vs. {match.opponent}</p>
              <p className={`match-result ${match.result.toLowerCase()}`}>
                {match.result}
              </p>
              <p className="match-highlights">{match.highlights}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MatchHistory