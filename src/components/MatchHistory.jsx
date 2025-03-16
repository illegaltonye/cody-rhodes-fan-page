import { useState } from 'react'

function MatchHistory() {
  const [matches] = useState([
    {
      id: 1,
      event: "WrestleMania 40",
      date: "April 6, 2024",
      opponent: "Roman Reigns",
      result: "Victory",
      highlights: "Won WWE Universal Championship"
    },
    {
      id: 2,
      event: "Royal Rumble 2024",
      date: "January 27, 2024",
      opponent: "Royal Rumble Match",
      result: "Victory",
      highlights: "Won Royal Rumble Match"
    }
  ])

  return (
    <div className="match-history">
      <h2>Career Highlights</h2>
      <div className="matches-grid">
        {matches.map(match => (
          <div key={match.id} className="match-card">
            <h3>{match.event}</h3>
            <p className="match-date">{match.date}</p>
            <p className="match-opponent">vs. {match.opponent}</p>
            <p className={`match-result ${match.result.toLowerCase()}`}>
              {match.result}
            </p>
            <p className="match-highlights">{match.highlights}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MatchHistory